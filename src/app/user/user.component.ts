import {UserServicesService } from 'src/app/Services/user-services.service';
import { IUser } from 'src/app/SharedClassesandTypes/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList:IUser[]=[];
  constructor(private userServices:UserServicesService) { }
  errorMsg: any
  ngOnInit(): void {
    this.userServices.returnAllUsers().subscribe(
      employeeData=>
      {
        this.userList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }

}
