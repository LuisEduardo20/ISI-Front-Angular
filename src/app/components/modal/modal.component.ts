import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  router: Router;

  constructor(
    router: Router,
    private userService: UserService
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

    this.userService.postData(this.loginForm.value).subscribe(response=>{
      if(response.token){
        localStorage.setItem('token', btoa(JSON.stringify(response.token)));
        this.router.navigate(['/cadastrar-produto']);
      }
    }, error =>{
      alert (error.error.message);
    })

  }
}
