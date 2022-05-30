import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../models/proposal.model'
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-ipublis',
  templateUrl: './ipublis.component.html',
  styleUrls: ['./ipublis.component.scss']
})
export class IPublisComponent implements OnInit {
  ipublis?: Proposal[];
  profile = {};
  states: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {      
    this.getIPublis();
  }



  getStates():void{
    this.sharedService.getStates().subscribe(data => this.states = data);
  }

  getIPublis() {
    console.log('teste')
    this.sharedService.getIPublis()
    .subscribe({
      next: (data) => {
        this.ipublis = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
