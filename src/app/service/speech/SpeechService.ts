import { Injectable } from '@angular/core';
declare var webkitSpeechRecognition: new () => any;
import { WhisperSTT } from "whisper-speech-to-text";


@Injectable({
    providedIn: 'root'
})
export class SpeechService {
    recognition: any;
    isSupported: boolean = false;
    whisper!: WhisperSTT;
    text: string = "";
    constructor() {
        if ('webkitSpeechRecognition' in window) {
            this.isSupported = true;
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
			this.recognition.interimResults = false;
            this.recognition.lang = 'en-IN';
        } else {
            this.isSupported = false;
            this.whisper = new WhisperSTT("");
        }
    }

    startListening() {
		if (this.recognition && typeof this.recognition.start === 'function') {
			this.recognition.start();
		} else if (this.whisper && typeof (this.whisper as any).start === 'function') {
			try { (this.whisper as any).start(); } catch (e) { console.error(e); }
		}
    }

    async stopListening(): Promise<void> {
		if (this.recognition && typeof this.recognition.stop === 'function') {
			this.recognition.stop();
		} else if (this.whisper && typeof (this.whisper as any).stop === 'function') {
			try { (this.whisper as any).stop(); } catch (e) { console.error(e); }
		}
    }

    onResult(callback: (text: string) => void): void {
		if (this.recognition) {
			this.recognition.onresult = (event: any) => {
				const last = event.results.length - 1;
				const text = event.results[last][0].transcript;
				if (event.results?.[0]?.[0]?.confidence > 0.7) {
					callback(text);
				} else {
					console.log('text', text, 'conf', event.results?.[0]?.[0]?.confidence)
				}
			};
		} else if (this.whisper) {
			try {
				if (typeof (this.whisper as any).onResult === 'function') {
					(this.whisper as any).onResult((res: any) => callback(String(res?.text ?? res ?? '')));
				} else if (typeof (this.whisper as any).on === 'function') {
					(this.whisper as any).on('result', (res: any) => callback(String(res?.text ?? res ?? '')));
				}
			} catch (e) {
				console.error('Failed to bind Whisper result handler:', e);
			}
		}
    }
}
