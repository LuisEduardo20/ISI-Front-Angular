import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Show } from '../models/show';
import { ShowService } from '../services/show.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  listShows: Show[] = [];
  show: Show | undefined;

  constructor(private showService: ShowService, private userService: UserService) { }

  modalState: boolean | unknown;
  logged: boolean | unknown;


  ngOnInit(): void {
    this.fetchShows();
    this.logged = this.userService.logged;
  }

  openModal():void{
    this.modalState = true;
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

  destroy(data: Show):void{
    this.showService.deleteShow(data.id);
  }

  edit(data:Show):void{
    this.modalState = true;
    this.show = data;
  }

}
