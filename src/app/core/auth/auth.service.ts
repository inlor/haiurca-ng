import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../http';
import {User} from '../models';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';


export class AuthService {

    isLogin = false;

    private routeAuth = environment.host + 'authentication_token';
    private headers;
    constructor(private http: HttpClient, private apiService: ApiService) {
        this.headers = {
            headers : new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        };
    }

    login = (user: User) =>
        this.http.post(this.routeAuth, user.serialize(), this.headers).
            pipe(tap((data: any) => console.log(data)), catchError(this.handleErrors))

    register = (user: User) =>
        this.http.post(this.userService.url, user.serialize(), this.headers).
            pipe(catchError(this.handleErrors))

    logout() {
        this.isLogin = false;
        ///appSettings.remove('token');
    }

    getUser(): any {
        try {
            return jwt_decode(this.getToken());
        } catch (e) {
            console.log(e);
        }

        return null;
    }

    setToken = (token: string): void =>
        appSettings.setString('token', token)

    getToken = (): string =>
        appSettings.getString('token')

    private handleErrors(error: HttpErrorResponse) {
        console.log(JSON.stringify(error));

        return throwError(error);
    }
}
