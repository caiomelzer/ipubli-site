import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../models/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[UserService, SharedService]
})
export class ProfileComponent implements OnInit {

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
  logoff(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_INFO');
    this.router.navigate(['/home']);
  }
  edit(){
    this.router.navigate(['/profile/edit']);
  }
  helpMe(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_INFO');
    this.router.navigate(['/home']);
  }
}
