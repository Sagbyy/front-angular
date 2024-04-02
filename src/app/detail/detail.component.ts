import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../types";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  httpClient = inject(HttpClient);
  itemId: string = "";
  tournament: Tournament = {
    name: "",
    id: undefined
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getParams()
    this.fetchData()
  }

  getParams() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.itemId = id
      }
    })
  }

  fetchData() {
    this.httpClient.get(`/api/tournament/${this.itemId}`).subscribe((data) => {
      console.log(data)
      this.tournament = data as Tournament
    });
  }
}
