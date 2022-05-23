import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aula-isi';

  constructor() {}

  modalState: boolean | unknown;

  ngOnInit(): void {}

  openModal(event: boolean): void {
    this.modalState = event;
    // this.isModalOpen.emit(!this.isModalOpen.emit);
  }

  closeModal(event: boolean): void{
    this.modalState = event;
    // this.isModalOpen.emit(!this.isModalOpen.emit);
  }
}
