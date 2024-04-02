import {Component, inject, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Tournament} from "../types";


@Component({
  selector: 'app-tournament-list',
  standalone: true,
  imports: [HttpClientModule, NgForOf, RouterLink],
  templateUrl: './tournament-list.component.html',
})

export class TournamentListComponent implements OnInit {
  httpClient = inject(HttpClient);
  tournaments: Tournament[] = [];

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.httpClient.get('/api/tournament ').subscribe((data) => {
      console.log(data)
      this.tournaments = data as Tournament[];
    });
  }
}
