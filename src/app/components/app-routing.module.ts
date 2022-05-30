import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IPublisComponent } from './ipublis/ipublis.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent} from './signup/signup.component';
import { SigninComponent} from './signin/signin.component';
import { InfluencersComponent} from './influencers/influencers.component';
import { ProposalCreateComponent} from './proposal/proposal-create.component';
import { ProposalDetailsComponent } from './proposal/proposal-details.component';
import { ProfileEditComponent } from './profile/profile-edit.component';

import { AuthGuard } from './../auth.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'ipublis', component: IPublisComponent, canActivate: [AuthGuard]  },
  { path: 'proposals', component: ProposalsComponent , canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] },
  { path: 'profile/edit', component: ProfileEditComponent , canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent }, 
  { path: 'signin', component: SigninComponent },
  { path: 'influencer/:id', component: InfluencersComponent},
  { path: 'influencer/:id/proposal/create', component: ProposalCreateComponent, canActivate: [AuthGuard]},
  { path: 'influencer/:id/proposal/', component: ProposalDetailsComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, 
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
