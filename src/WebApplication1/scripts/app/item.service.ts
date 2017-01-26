import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Item} from './item';

@Injectable()
export class ItemService {
    constructor(private http: Http) { }
    private baseUrl = 'api/items/';

    getLatest(num?: number) {
        var url = this.baseUrl + "GetLatest/";
        if (num != null) url += num;
        return this.http.get(url).map(response => response.json())
            .catch(this.handleError);
    }

    getMostViewed(num?: number) {
        var url = this.baseUrl + "GetMostViewed/";
        if (num != null) url += num;
        return this.http.get(url).map(response => response.json())
            .catch(this.handleError);
    }

    getRandom(num?: number) {
        var url = this.baseUrl + "GetRandom/";
        if (num != null) url += num;
        return this.http.get(url).map(response => response.json())
            .catch(this.handleError);
    }

    get(id: number) {
        if (id == null) throw new Error("id is requried.");
        var url = this.baseUrl + id;
        return this.http.get(url).map(response => <Item>response.json())
            .catch(this.handleError);
    }

    add(item: Item) {
        return this.http.post(this.baseUrl, JSON.stringify(item), this.getRequestOptions())
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(item: Item) {
        return this.http.put(this.baseUrl + item.Id, JSON.stringify(item), this.getRequestOptions())
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + id).catch(this.handleError);
    }

    private getRequestOptions() {
        return new RequestOptions({
            headers: new Headers({"Content-Type": "application/json"})
        });
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || "Server Error.");
    }

}