import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewsService{
    constructor( private _http: Http){}
    getNews(){
        return this._http.get("../../assets/sample.json")
        .map(res =>res.json());
    }
}