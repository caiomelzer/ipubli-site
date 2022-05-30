import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { State } from './../../models/state.model'
import { User } from './../../models/user.model'

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  providers:[UserService, SharedService]
})
export class ProfileEditComponent implements OnInit {
  states?: State[];
  currentUser: User = {
    id: null,
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    city: '',
    state: '',
    status: '',
    createdAt: null,
    updatedAt: null ,
    country:''
  };
  constructor(private userService: UserService, private sharedService: SharedService, private router: Router){

  }


  ngOnInit(): void {
    this.getStates();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
      .subscribe({
        next: (res) => {
          console.log(res)
          this.currentUser = res
        },
        error: (e) => {
          console.log(e)
        }
      });
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

  loadData(form: NgForm){

  }
  teste(form: NgForm) {
    console.log('tet')
  }

  onSubmit(form: NgForm) {
    if(form.value.password === form.value.repassword){
      //validate password
    }
    form.value.username = form.value.email;
    console.log(form.value)
    /*this.userService.signup(form.value)
      .subscribe({
        next: (res) => {
          alert('Obrigado por se cadastrar, em breve você receberá um email!')
          this.router.navigate(['/home']);
        },
        error: (e) => {
          alert('Ops! Aconteceu um erro. Detalhe: '+e.message)
        }
      });*/
  }

}
