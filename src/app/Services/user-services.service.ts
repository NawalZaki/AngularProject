import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UsersDetails } from 'src/app/APIs/userDetails';
import { IUser } from 'src/app/SharedClassesandTypes/IUser';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/users';


  returnAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
