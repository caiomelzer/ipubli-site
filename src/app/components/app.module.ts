import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IPublisComponent } from './ipublis/ipublis.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProposalCreateComponent } from './proposal/proposal-create.component';
import { ProposalDetailsComponent } from './proposal/proposal-details.component';
import { ProfileEditComponent } from './profile/profile-edit.component';

import { SignupComponent} from './signup/signup.component';
import { SigninComponent} from './signin/signin.component';
import { InfluencersComponent} from './influencers/influencers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    IPublisComponent,
    ProfileComponent,
    SearchComponent,
    ProposalsComponent,
    SignupComponent,
    SigninComponent,
    InfluencersComponent,
    ProposalCreateComponent,
    ProposalDetailsComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
