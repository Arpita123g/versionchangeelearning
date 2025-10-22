// tippy.directive.ts
import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import tippy, { Instance, Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

@Directive({
  selector: '[appTippy]',
  standalone: true,
  host: {
    '[attr.aria-label]': 'appTippy',
    '[attr.aria-describedby]': 'tippyId'
  }
})
export class TippyDirective implements OnInit, OnDestroy, OnChanges {
  @Input() appTippy: string = '';
  @Input() tippyOptions: Partial<Props> = {};
  
  private tippyInstance: Instance | null = null;
  private readonly tippyId = `tippy-${Math.random().toString(36).substr(2, 9)}`;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.createTippy();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['appTippy']) return;

    const isEmpty = this.isEmptyContent(this.appTippy);
    if (this.tippyInstance) {
      if (isEmpty) {
        this.tippyInstance.hide();
        this.tippyInstance.disable();
      } else {
        this.tippyInstance.setContent(this.appTippy);
        this.tippyInstance.enable();
      }
    } else if (!isEmpty) {
      this.createTippy();
    }
  }

  private createTippy() {
    if (this.appTippy && !this.isEmptyContent(this.appTippy)) {
      this.tippyInstance = tippy(this.el.nativeElement, {
        content: this.appTippy,
        allowHTML: true,
        ...this.tippyOptions,
        theme: 'light-border',
        animation: 'shift-away',
        placement: 'top',
        arrow: true,
        interactive: true,
        appendTo: () => document.body,
        onShow: (instance) => {
          instance.popper.setAttribute('id', this.tippyId);
        }
      })[0];
    }
  }

  private isEmptyContent(html: string | null | undefined): boolean {
    if (!html) return true;
    // Strip tags and nbsp, then trim
    const text = html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .trim();
    return text.length === 0;
  }

  ngOnDestroy() {
    if (this.tippyInstance) {
      this.tippyInstance.destroy();
    }
  }
}
