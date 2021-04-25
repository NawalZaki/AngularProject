import { Component, OnInit } from '@angular/core';
import{PostServicesService} from '../Services/post-services.service'
import { IPost } from 'src/app/SharedClassesandTypes/IPost';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postList:IPost[]=[];
  selectedID:any;
  constructor(private postServices:PostServicesService,private router:Router,private activeRouter:ActivatedRoute) { }
  errorMsg:any;
  ngOnInit(): void {
    this.postServices.returnAllPosts().subscribe(
      employeeData=>
      {
        this.postList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
    this.activeRouter.paramMap.subscribe((params:ParamMap)=>
    this.selectedID=params.get('id')
    );
  }
  goToComment(post:IPost)
  {
     let postID=post.id;
     this.router.navigate(['/postspage',postID]);
  }
  isSelected(post:IPost)
  {
   return post.id=this.selectedID
  }

}
