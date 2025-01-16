import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from '../store/auth/auth.actions';
import { BACKEND_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = `${BACKEND_URL}/login`;

  private _user: any;

  constructor(
    private http: HttpClient,
    private store: Store<{auth: any}>) { 
      this.store.select('auth').subscribe(state => {
        this._user = state;
      });
    }

  loginUser({username, password}: any): Observable<any> {
    return this.http.post<any>(this.url, {username, password});
  }

  get user(){
    return this._user;
  }

  set user(user: any) {
    sessionStorage.setItem("login", JSON.stringify(user));
  }

  get token(){
    return sessionStorage.getItem("token")!;
  }

  set token(token: string) {
    sessionStorage.setItem("token", token);
  }

  getPayload(token: string){
    if(token != null){
      return JSON.parse(atob(token.split(".")[1]));
    }
    return null;
  }

  isAdmin(){
    return this.user.isAdmin;
  }

  authenticated(){
    return this.user.isAuth;
  }

  logout(){
    this.store.dispatch(logout());
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("token");
  }

}
