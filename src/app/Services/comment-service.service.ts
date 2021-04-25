import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CommentsDetails } from 'src/app/APIs/commentDetails';
import { IComment} from 'src/app/SharedClassesandTypes/icomment';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/posts/1/comments';
  
  returnAllComments():Observable<IComment[]>
  {
    return this.http.get<IComment[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
