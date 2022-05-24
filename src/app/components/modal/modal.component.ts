import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShowService } from 'src/app/services/show.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private showService: ShowService, private userService: UserService) { }

  showForm!: FormGroup;

  ngOnInit(): void {
    this.showForm = new FormGroup({
      nome_atracao: new FormControl(),
      hora: new FormControl(),
      data: new FormControl(),
    })
  }

  register():void{
    this.showService.registerShow(this.showForm.value).subscribe(response=>{
      console.log(response);
      window.location.reload();
    }, error =>{
      alert (error.error.message);
    })
  }
}
