import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PostsDetails } from 'src/app/APIs/postDetails';
import { IPost} from 'src/app/SharedClassesandTypes/IPost';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/posts';
  

  returnAllPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
