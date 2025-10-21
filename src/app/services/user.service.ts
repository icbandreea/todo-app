import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserCredentials } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<IUser | null>;
   public user$: Observable<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
    this.user$ = this.user.asObservable();
   }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http
      .post<IUser>('/api/login', credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user);
        return user;
      }));
  }

  register(user: IUser): Observable<IUser> {
    return this.http
      .post<IUser>('/api/register', user).pipe(
        map((newUser: IUser) => {
          this.user.next(newUser);
          return newUser;
        })
      );
  }

    logout() {
    this.user.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  get currentUser(): IUser | null {
    return this.user.value;
  }
}
