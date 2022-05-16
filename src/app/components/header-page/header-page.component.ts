import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  constructor() {}

  @Output() modalState = new EventEmitter();

  ngOnInit(): void {
    this.modalState.emit(false);
  }

  teste(): void {
    this.modalState.emit(true);
  }
}
