import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { Influencer } from './../../models/influencer.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[UserService, SharedService]

})
export class HomeComponent implements OnInit {
  instagramUser: Influencer = {
    id: null,
    userId: '',
    influencerId: '',
    country: '',
    state: '',
    city: '',
    instagramAvatar: '',
    instagramFollowers: '',
    instagramPosts: '',
    segments: '',
    startValue: '',
    createdAt: null,
    updatedAt: null,
  };
  
  instagramUsers?: Influencer[];
  constructor(private userService: UserService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getTopInstagramUsers();
  }

  getTopInstagramUsers() {
    console.log('teste')
    this.sharedService.getTopInstagramUsers()
    .subscribe({
      next: (data) => {
        this.instagramUsers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
