import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent {
  // tslint:disable: typedef
  @Input() lancamentos: any;
  first = 0;
  rows = 5;


  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.lancamentos ? this.first === (this.lancamentos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
      return this.lancamentos ? this.first === 0 : true;
  }
}
