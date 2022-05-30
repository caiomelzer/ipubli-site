import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';
import { Influencer } from './../../models/influencer.model'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SharedService]

})
export class SearchComponent implements OnInit {
  influencers?: Influencer[];
  profile = {};
  states: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {      
    //this.getStates();
    this.getInfluencers();
  }



  getStates():void{
    this.sharedService.getStates().subscribe(data => this.states = data);
  }

  getInfluencers() {
    console.log('teste')
    this.sharedService.getInfluencers()
    .subscribe({
      next: (data) => {
        this.influencers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
