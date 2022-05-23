import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  listShows: Show[] = [];
  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.fetchShows();
  }

  private fetchShows(){
    this.showService.listShows().subscribe(
      (data: Show[]) => {
        this.listShows = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
