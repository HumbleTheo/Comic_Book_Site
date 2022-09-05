import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  visible: boolean = false;

  constructor() {
    this.visible = false;
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }
}
