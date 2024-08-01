import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { IUserLogin } from '../interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../constants/urls';
import { NgToastService } from 'ng-angular-popup';
import { IUserRegister } from '../interfaces/IUserRegister';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  constructor(private http:HttpClient, private popup:NgToastService) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.popup.success(
            `Welcome to WebSoccer ${user.name}!`,
            `Login Successful`,
            3000
          )
        },
        error: (errorRespons)=>{
          this.popup.warning(
            errorRespons.error,
            'Login Failed',
            3000
          )
        }
      })
    )
  }
  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  register(userRegister:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.popup.success(
            `Welcome to WebSoccer ${user.name}!`,
            `Register Successful`,
            3000
          )
        },
        error: (errorRespons)=>{
          this.popup.warning(
            errorRespons.error,
            'Register Failed',
            3000
          )
        }
      }
    ))
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User {
    const userJson = localStorage.getItem(USER_KEY);
    
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
