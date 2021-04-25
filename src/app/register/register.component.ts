import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../CustomeValidator/confirmPassword';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  
    constructor(private fb:FormBuilder) { }
  
    registerForm=this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     
  },{ 
    validator: [ConfirmPasswordValidator]
  });
  
  
    ngOnInit(): void {
    }
  
//   Sites: any = ['facebook','twitter ','google']
//  /* userModel=new User('','','' ,'','')*/
//   /*onSubmit(data:any)
//   {
//     console.log(data)
//     console.log(this.userModel);
//   }*/
     get f() { 
      return this.registerForm.controls; 
    }
  
    
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
       
        alert('done)\n\n' + JSON.stringify(this.registerForm.value))
    }
  }

