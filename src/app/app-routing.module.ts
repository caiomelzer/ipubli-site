import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IPublisComponent } from './ipublis/ipublis.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'ipublis', component: IPublisComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
