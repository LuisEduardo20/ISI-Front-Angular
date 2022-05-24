import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Show } from 'src/app/models/show';
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
  @Input() show: Show | undefined;

  ngOnInit(): void {
    this.showForm = new FormGroup({
      nome_atracao: new FormControl(this.show ? this.show.nome_atracao : ''),
      hora: new FormControl(this.show ? this.show.hora : ''),
      data: new FormControl(this.show ? this.show.data : ''),
    })
  }

  register():void{
    if(this.show){
      this.showService.updateShow(this.show, this.showForm.value);
    }else{
      this.showService.registerShow(this.showForm.value).subscribe(response=>{
        console.log(response);
        window.location.reload();
      }, error =>{
        alert (error.error.message);
      })
    }
  }
}
