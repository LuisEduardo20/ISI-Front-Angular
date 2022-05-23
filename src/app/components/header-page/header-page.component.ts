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
  logged: boolean | unknown;

  ngOnInit(): void {
    this.modalState.emit(false);

    if(this.userService.logged){
      this.logged = true;
    }else{
      this.logged = false;
    }
  }

  openLoginModal(): void {
      this.modalState.emit(true);
  }

  logout():void{
    this.userService.logout();
    window.location.reload()
  }

  viewShows():void{
    this.router.navigate(['/shows']);
  }

  viewHome():void{
    this.router.navigate(['/home']);
  }

  viewCarte():void{
    this.router.navigate(['/cardapio']);
  }
}
