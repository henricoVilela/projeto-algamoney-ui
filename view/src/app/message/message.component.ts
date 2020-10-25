import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="exiteErro()">
    <p-message severity="error" text="{{texto}}"></p-message>
  </div>
  `,
  styles: [
  ]
})
export class MessageComponent {
  @Input() error: string;
  @Input() texto: string;
  @Input() control: FormControl;

  exiteErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
