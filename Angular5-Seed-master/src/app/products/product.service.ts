import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from './product.model';
import { Employee } from '../forms/employee.model';

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngapi4.herokuapp.com/api/getProducts';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                  .map((response: Response) => response.json())
                  .catch(this.handleError);
    }

    postForm(employee: Employee): Observable<any> {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this._http.post('http://localhost:3100/postemployee', body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
