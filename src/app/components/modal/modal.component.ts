import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  // @Input() modalState: boolean | unknown;
  @Output() closeModalEvent = new EventEmitter();

  ngOnInit(): void {}

  closeModal() {
    // this.closeModalEvent.emit(!this.modalState);
    this.closeModalEvent.emit(false);
  }

  login(){
    console.log('entrou');
  }
}
