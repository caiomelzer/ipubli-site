import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { State } from './../../models/state.model'
import { User } from './../../models/user.model'

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[UserService, SharedService]
})
export class SignupComponent implements OnInit {
  registerUser: any;
  states?: State[];
  constructor(private userService: UserService, private sharedService: SharedService, private router: Router){

  }


  ngOnInit(): void {
    this.getStates();
  }

  getStates(){
    this.sharedService.getStates()
      .subscribe({
        next: (data) => {
          this.states = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  onSubmit(form: NgForm) {
    if(form.value.password === form.value.repassword){
      //validate password
    }
    form.value.username = form.value.email;
    console.log(form.value)
    this.userService.signup(form.value)
      .subscribe({
        next: (res) => {
          alert('Obrigado por se cadastrar, em breve você receberá um email!')
          this.router.navigate(['/home']);
        },
        error: (e) => {
          alert('Ops! Aconteceu um erro. Detalhe: '+e.message)
        }
      });
  }

}
