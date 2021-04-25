import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }
   sendMessage(message:string)
   {
     this.messageService.sendMessage(message);
   }
}
