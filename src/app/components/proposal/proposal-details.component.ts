import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';
import {NgForm} from '@angular/forms';

import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/shared.service';
import { Influencer } from '../../models/influencer.model'

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.scss']
})
export class ProposalDetailsComponent implements OnInit {

  profile = {};
  states: any;
  id: number = 0;
  private sub: any;
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
  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getCurrentInfluencer(this.id);
      // In a real app: dispatch action to load the details here.
  });
}

  getStates():void{
    this.sharedService.getStates().subscribe(data => this.states = data);
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

  onSendProposal(form: NgForm) {
    this.userService.getCurrentUser()
      .subscribe({
        next: (res) => {
          form.value.userId = res.id.toString();
          form.value.influecerId = this.id.toString();
          form.value.price = form.value.price.toString();
          this.sharedService.doProposal(form.value)
            .subscribe({
              next: (res) => {
                alert('Proposta enviada com sucesso!')
                this.router.navigate(['/proposals']);
              },
              error: (e) => {
                alert('Ops! Aconteceu um erro. Detalhe: '+e.message)
              }
            });
        },
        error: (e) => {
          console.log(e)
        }
      });
    
  }
}
