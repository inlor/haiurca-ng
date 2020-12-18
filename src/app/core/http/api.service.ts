import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../models';

export class ApiService {

  protected headers;

  protected constructor(public http: HttpClient) {
    this.headers = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // Authorization: "Bearer " + appSettings.getString("token")
      })
    };
  }

  get = (model: Model, id: number): Observable<any> =>
    this.http.get(this.path(model) + '/' + id, this.headers)

  getAll = (model: Model, filter = ''): Observable<any> =>
    this.http.get(this.path + filter, this.headers)

  store = (model: Model): Observable<any> =>
    this.http.post(this.path(model), model.serialize(), this.headers)

  update = (model: Model): Observable<any> =>
    this.http.put(this.path(model) + '/' + model.id, model.serialize(), this.headers)

  delete = (model: Model): Observable<any> =>
    this.http.delete(this.path(model) + '/' + model.id, this.headers)

  private path = (model: Model): string =>
    environment.host + 'api/' + model.type
}
