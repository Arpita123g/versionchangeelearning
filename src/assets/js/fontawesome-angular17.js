/**
 * FontAwesome Angular 17 Integration
 * 
 * Modern FontAwesome configuration for Angular 17+ applications.
 * This replaces the old minified kit with a clean, maintainable solution.
 * 
 * For production use, it's recommended to install the official package:
 * npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
 */

(function() {
  'use strict';

  // FontAwesome Configuration for Angular 17
  const FontAwesomeConfig = {
    asyncLoading: { enabled: true },
    autoA11y: { enabled: true },
    baseUrl: 'https://ka-f.fontawesome.com',
    baseUrlKit: 'https://kit.fontawesome.com',
    detectConflictsUntil: null,
    iconUploads: {},
    id: 124063720,
    license: 'free',
    method: 'css',
    minify: { enabled: true },
    token: 'b8eb3a0412',
    v4FontFaceShim: { enabled: true },
    v4shim: { enabled: true },
    v5FontFaceShim: { enabled: false },
    version: '6.4.0'
  };

  // Modern FontAwesome Loader Class
  class FontAwesomeLoader {
    constructor(config) {
      this.config = config;
      this.loaded = false;
      this.loading = false;
      this.observers = [];
      this.retryCount = 0;
      this.maxRetries = 3;
    }

    /**
     * Load FontAwesome CSS asynchronously
     */
    async loadCSS() {
      if (this.loaded || this.loading) {
        return this.loaded;
      }

      this.loading = true;

      try {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = this.getCSSUrl();
        link.crossOrigin = 'anonymous';
        
        // Add metadata attributes
        link.setAttribute('data-fontawesome', 'true');
        link.setAttribute('data-version', this.config.version);
        link.setAttribute('data-license', this.config.license);

        // Create loading promise
        const loadPromise = new Promise((resolve, reject) => {
          link.onload = () => {
            this.loaded = true;
            this.loading = false;
            this.retryCount = 0;
            this.notifyObservers();
            this.initializeAccessibility();
            resolve();
          };
          
          link.onerror = () => {
            this.loading = false;
            this.handleLoadError(reject);
          };
        });

        // Insert link element
        document.head.appendChild(link);

        // Wait for CSS to load
        await loadPromise;
        return true;

      } catch (error) {
        console.error('FontAwesome Kit: Failed to load CSS', error);
        this.loading = false;
        throw error;
      }
    }

    /**
     * Handle load errors with retry logic
     */
    handleLoadError(reject) {
      this.retryCount++;
      
      if (this.retryCount < this.maxRetries) {
        console.warn(`FontAwesome Kit: Retry ${this.retryCount}/${this.maxRetries}`);
        setTimeout(() => {
          this.loadCSS().catch(reject);
        }, 1000 * this.retryCount);
      } else {
        reject(new Error('Failed to load FontAwesome CSS after multiple attempts'));
      }
    }

    /**
     * Get CSS URL with proper configuration
     */
    getCSSUrl() {
      const baseUrl = this.config.baseUrl;
      const version = this.config.version;
      const minify = this.config.minify.enabled ? '.min' : '';
      const token = this.config.token;

      let url = `${baseUrl}/releases/v${version}/css/all${minify}.css`;
      
      if (token) {
        const separator = url.includes('?') ? '&' : '?';
        url += `${separator}token=${encodeURIComponent(token)}`;
      }

      return url;
    }

    /**
     * Initialize accessibility features
     */
    initializeAccessibility() {
      if (!this.config.autoA11y.enabled) {
        return;
      }

      // Process existing icons
      this.processIcons();

      // Observe DOM changes for dynamic icons
      this.setupMutationObserver();
    }

    /**
     * Process FontAwesome icons for accessibility
     */
    processIcons() {
      const iconSelectors = '.fa, .fas, .far, .fal, .fab, .fad, .fak, [class*="fa-"]';
      const icons = document.querySelectorAll(iconSelectors);
      
      icons.forEach(icon => {
        this.makeIconAccessible(icon);
      });
    }

    /**
     * Make a single icon accessible
     */
    makeIconAccessible(icon) {
      // Add aria-hidden if no accessible text
      if (!icon.getAttribute('aria-label') && !icon.getAttribute('title')) {
        icon.setAttribute('aria-hidden', 'true');
      }

      // Add role for better screen reader support
      if (!icon.getAttribute('role')) {
        icon.setAttribute('role', 'img');
      }

      // Add focusable attribute for keyboard navigation
      if (!icon.hasAttribute('tabindex')) {
        icon.setAttribute('tabindex', '0');
      }
    }

    /**
     * Setup mutation observer for dynamic content
     */
    setupMutationObserver() {
      if (!window.MutationObserver) {
        return;
      }

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Process the added node
              this.processNode(node);
              
              // Process child nodes
              const icons = node.querySelectorAll('.fa, .fas, .far, .fal, .fab, .fad, .fak, [class*="fa-"]');
              icons.forEach(icon => this.makeIconAccessible(icon));
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    /**
     * Process a node for FontAwesome icons
     */
    processNode(node) {
      if (node.classList && node.classList.contains('fa')) {
        this.makeIconAccessible(node);
      }
    }

    /**
     * Add observer for loading state changes
     */
    addObserver(callback) {
      this.observers.push(callback);
      
      if (this.loaded) {
        callback();
      }
    }

    /**
     * Remove observer
     */
    removeObserver(callback) {
      const index = this.observers.indexOf(callback);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }

    /**
     * Notify all observers
     */
    notifyObservers() {
      this.observers.forEach(callback => {
        try {
          callback();
        } catch (error) {
          console.error('FontAwesome Kit: Observer error', error);
        }
      });
    }

    /**
     * Check if FontAwesome is loaded
     */
    isLoaded() {
      return this.loaded;
    }

    /**
     * Get loading state
     */
    isLoading() {
      return this.loading;
    }

    /**
     * Get configuration
     */
    getConfig() {
      return { ...this.config };
    }

    /**
     * Update configuration
     */
    updateConfig(newConfig) {
      Object.assign(this.config, newConfig);
    }
  }

  // Initialize FontAwesome
  function initializeFontAwesome() {
    try {
      const loader = new FontAwesomeLoader(FontAwesomeConfig);
      
      // Load FontAwesome CSS
      loader.loadCSS().catch(error => {
        console.error('FontAwesome Kit: Initialization failed', error);
      });

      // Expose globally
      window.FontAwesomeLoader = loader;
      window.FontAwesomeKitConfig = FontAwesomeConfig;

      // Angular integration
      if (window.angular) {
        window.angular.FontAwesomeLoader = loader;
      }

      return loader;
    } catch (error) {
      console.error('FontAwesome Kit: Failed to initialize', error);
      return null;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFontAwesome);
  } else {
    initializeFontAwesome();
  }

  // Fallback initialization on window load
  window.addEventListener('load', () => {
    if (window.FontAwesomeLoader && !window.FontAwesomeLoader.isLoaded()) {
      window.FontAwesomeLoader.loadCSS().catch(error => {
        console.error('FontAwesome Kit: Load failed', error);
      });
    }
  });

  // Module exports
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FontAwesomeLoader;
  }

  // AMD support
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return FontAwesomeLoader;
    });
  }

})();

/**
 * Angular 17 Integration Guide
 * 
 * For optimal Angular 17 integration, use the official package:
 * 
 * 1. Install packages:
 *    npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
 * 
 * 2. Import in main.ts:
 *    import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 * 
 * 3. Add to providers in main.ts:
 *    importProvidersFrom(FontAwesomeModule)
 * 
 * 4. Use in components:
 *    import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
 *    <fa-icon [icon]="faUser"></fa-icon>
 * 
 * This provides better tree-shaking, performance, and type safety.
 */ 