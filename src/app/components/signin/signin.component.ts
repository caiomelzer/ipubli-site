import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../models/user.model'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers:[UserService, SharedService]
})
export class SigninComponent implements OnInit {
  registerUser: any;
  constructor(private userService: UserService, private sharedService: SharedService, private router: Router){

  }
 

  ngOnInit(): void {
    if(localStorage.getItem('ACCESS_TOKEN')){
      console.log('Token',localStorage.getItem('ACCESS_TOKEN'));
      this.router.navigate(['/profile']);
    }
    else{
      console.log('Sem token')
    }
  }

  onSignIn(form: NgForm) {
    if(form.value.password === form.value.repassword){
      //validate password
    }
    this.userService.signin(form.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem('ACCESS_TOKEN', res.token)
          localStorage.setItem('USER_INFO', JSON.stringify(res))
          this.router.navigate(['/profile']);
        },
        error: (e) => {
          alert('Ops! Aconteceu um erro. Detalhe: '+e.message)
        }
      });
  }

}
