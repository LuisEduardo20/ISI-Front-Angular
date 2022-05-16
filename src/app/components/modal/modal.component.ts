import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  @Input() modalState: boolean | unknown;

  ngOnInit(): void {}

  closeModal() {
    this.modalState = false;
  }
}
