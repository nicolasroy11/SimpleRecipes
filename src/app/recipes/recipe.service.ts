import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RecipeModel } from '../../models/recipe.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    constructor(private _http: HttpClient) { }

    public static searchCriteria;

    private _baseUrl = 'http://localhost:9001';

    private _collection: RecipeModel[];

    public collectionChange: Subject<RecipeModel[]> = new Subject<RecipeModel[]>();

    public get(category: string): Observable<RecipeModel[]> {
        let url = `${this._baseUrl}/recipes`;
        if (category) {
            url = `${url}?category=${category}`;
        }
        return <Observable<RecipeModel[]>>this._http.get(url);
    }

    public getById(id: number): Observable<RecipeModel> {
        return <Observable<RecipeModel>>this._http.get(`${this._baseUrl}/recipes/${id}`);
    }

    public postNew(recipe: RecipeModel): Observable<RecipeModel> {
        return <Observable<RecipeModel>>this._http.post(`${this._baseUrl}/recipes`, recipe);
    }

    public delete(id: number): Observable<any> {
        return <Observable<any>>this._http.delete(`${this._baseUrl}/recipes/${id}`);
    }

    public update(recipe: RecipeModel): Observable<RecipeModel> {
        return <Observable<RecipeModel>>this._http.put(`${this._baseUrl}/recipes/${recipe.id}`, recipe);
    }
}
