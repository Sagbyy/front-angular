import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { TournamentListComponent } from "./tournament-list/tournament-list.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TournamentListComponent, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front-angular';
}
