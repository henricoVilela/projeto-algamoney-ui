import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent {
  // tslint:disable: typedef
  @Input() pessoas: any;
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
      return this.pessoas ? this.first === (this.pessoas.length - this.rows) : true;
  }

  isFirstPage(): boolean {
      return this.pessoas ? this.first === 0 : true;
  }

}
