import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';
import { Influencer } from './../../models/influencer.model'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [SharedService]
})
export class FavoritesComponent implements OnInit {

  influencers?: Influencer[];
  profile = {};
  states: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {      
    this.getInfluencers();
  }



  getStates():void{
    this.sharedService.getStates().subscribe(data => this.states = data);
  }

  getInfluencers() {
    console.log('teste')
    this.sharedService.getFavorites()
    .subscribe({
      next: (data) => {
        this.influencers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
