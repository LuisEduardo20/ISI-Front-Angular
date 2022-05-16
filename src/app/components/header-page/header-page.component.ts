import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  router: Router;

  constructor(router: Router,
    private userService: UserService) {this.router = router}

  @Output() modalState = new EventEmitter();

  ngOnInit(): void {
    this.modalState.emit(false);
  }

  teste(): void {
    if(this.userService.logado){
      this.router.navigate(['/cadastrar-produto']);
    }else{
      this.modalState.emit(true);
    }
  }
}
