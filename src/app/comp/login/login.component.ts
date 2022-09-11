import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
  checkContainer: boolean = false;

  login(event: any) {
    this.checkContainer = false;
  }
  signUp(event: any) {
    this.checkContainer = true;
  }

  closeModal() {
    this.modal.closeModal();
  }

  handleLoginSumbit() {}

  handleSignupSumbit() {}
}
