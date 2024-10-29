import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuralfor',
  template: `
    <div *ngFor="let color of colors; first as f;last as l"> 
      <h2 [style.color]="color">{{f}} {{color}} {{l}}</h2>
    </div>
  `,
  styles: [
  ]
})
export class StructuralforComponent implements OnInit {

  public colors =["Red", "Green", "Yellow", "Blue"]
  constructor() { }

  ngOnInit(): void {
  }

}
