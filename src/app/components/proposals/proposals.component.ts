import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../models/proposal.model'
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  proposals?: Proposal[];
  profile = {};
  states: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {      
    this.getPorposals();
  }



  getStates():void{
    this.sharedService.getStates().subscribe(data => this.states = data);
  }

  getPorposals() {
    console.log('teste')
    this.sharedService.getProposals()
    .subscribe({
      next: (data) => {
        this.proposals = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
