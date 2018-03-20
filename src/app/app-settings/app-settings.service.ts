import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings';

@Injectable()
export class AppSettingsService {
    private _baseUrl = 'http://localhost:9001';
    private _apiUrl = `${this._baseUrl}/AppSettings`;
    public constructor(private _httpClient: HttpClient, public appSettings: AppSettings) { }

    public get(): Observable<any> {
        const appSettings = this.appSettings;
        return this._httpClient.get(this._apiUrl)
            .do((response: any) => {
                appSettings.setAll(response);
                appSettings.isInitialized = true;
                return true;
            });
    }
}
