import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuralswitch',
  template: `

    <div [ngSwitch]="color">
      <div [style.color]="color" *ngSwitchCase="'yellow'">Yellow COLOR</div>
      <div [style.color]="color" *ngSwitchCase="'pink'">Pink COLOR</div>
      <div [style.color]="color" *ngSwitchCase="'orange'">Orange COLOR</div>

      
      <div *ngSwitchDefault>Pick another color</div>
    </div>

  `,
  styles: [
  ]
})
export class StructuralswitchComponent implements OnInit {

  public color = "yellow";
  constructor() { }

  ngOnInit(): void {
  }

}

/*
      <div *ngSwitchCase="'red'">RED COLOR</div>
      <div *ngSwitchCase="'blue'">BLUE COLOR</div>
      <div *ngSwitchCase="'green'">GREEN COLOR</div>
*/