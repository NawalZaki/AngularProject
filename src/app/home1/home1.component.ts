import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  message:string="";
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.messageService.receiveMessage().subscribe((d)=>{this.message=d;});
  }

}
