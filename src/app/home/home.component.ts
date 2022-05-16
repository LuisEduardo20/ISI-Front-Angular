import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  modalState: boolean | unknown;

  ngOnInit(): void {}

  openModal(event: any): void {
    this.modalState = event;
    // this.isModalOpen.emit(!this.isModalOpen.emit);
  }
}
