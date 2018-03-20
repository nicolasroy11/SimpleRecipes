import { Injectable } from '@angular/core';
import { Registry } from './Registry';

@Injectable()
export class AppSettings extends Registry {

    public isInitialized = false;

    public get enums(): any { return this.get('enums'); }
    public get constants(): any { return this.get('constants'); }

    constructor() {
        super();
    }

    public setAll(dict: { [key: string]: any }) {
        for (const key in dict) {
            if (key) {
                this.set(key, dict[key]);
            }
        }
    }
}
