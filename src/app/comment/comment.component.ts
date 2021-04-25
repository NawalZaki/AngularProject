import { Component, OnInit } from '@angular/core';
import{CommentServiceService} from '../Services/comment-service.service'
import { IComment } from 'src/app/SharedClassesandTypes/icomment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentList:IComment[]=[];
  postID: string;
  constructor(private postServices:CommentServiceService,private activeRouter:ActivatedRoute,private router:Router ) { }
  errorMsg:any;
  ngOnInit(): void {
    this.postServices.returnAllComments().subscribe(
      employeeData=>
      {
        this.commentList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
    let postID=this.activeRouter.snapshot.paramMap.get('id');
  }
   BackTo()
   {
     this.router.navigate(['/postspage',{id:parseInt(this.postID)}]);
     console.log(this.postID);
   }
}
