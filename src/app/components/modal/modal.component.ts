import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  router: any;

  constructor(
    router: Router,
    private loginService: LoginService
    ) {
    this.router = router;
  }

  // @Input() modalState: boolean | unknown;
  @Output() closeModalEvent = new EventEmitter();

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  closeModal() {
    // this.closeModalEvent.emit(!this.modalState);
    this.closeModalEvent.emit(false);
  }

  login(){

    this.loginService.postData(this.loginForm.value).subscribe(response=>{
      if(response.token){
        this.router.navigate(['/cadastrar-produto']);
      }
    }, error =>{
      alert (error.error.message);
    })

  }
}
