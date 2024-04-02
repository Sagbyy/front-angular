import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {DetailComponent} from "./detail/detail.component";
import {NgModule} from "@angular/core";
import {TournamentListComponent} from "./tournament-list/tournament-list.component";
import {CreateTournamentComponent} from "./create-tournament/create-tournament.component";

export const routes: Routes = [
  { path: '', component: TournamentListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'create-tournament', component: CreateTournamentComponent }
];
