import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/shared.service';
import { Influencer } from '../../models/influencer.model'

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss'],
  providers:[UserService, SharedService]
})
export class InfluencersComponent implements OnInit {
  favorite: any = false;
  currentInfluencer: Influencer = {
    id:'',
    userId:'',
    influencerId:'',
    country:'',
    state:'',
    city:'',
    instagramAvatar:'',
    instagramFollowers:'',
    instagramPosts:'',
    segments:'',
    startValue:'',
    createdAt:'',
    updatedAt:''
  };
  constructor(private userService: UserService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute){

  }
  id: number = 0;
  private sub: any;

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getCurrentInfluencer(this.id);
      // In a real app: dispatch action to load the details here.
   });
   this.isFavorite();
  }

  getCurrentInfluencer(id: any) {
    this.sharedService.getInfluencer(id)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.currentInfluencer = res
        },
        error: (e) => {
          console.log(e)
        }
      });
  }
  doProposal(id: any){
    this.router.navigate(['/influencer/'+id+'/proposal/create']);
  }
  goBackToInfluencers(){
    this.router.navigate(['/search']);
  }

  isFavorite(){
    this.sharedService.getFavorites()
      .subscribe({
        next: (res) => {
          var result = res.find((res: any) => {
            return res.influencerId === this.id
          })
          console.log(result)
          if(result){
            this.favorite = true
          }
          console.log(this.favorite)
        },
        error: (e) => {
          console.log(e)
        }
      });
  }
  removeFavorite(){
    console.log('dasd')
    this.sharedService.removeFavorite(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.favorite = false
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
  addFavorite(){
    console.log('dasd')
    this.sharedService.addFavorite(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.favorite = true
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
}


