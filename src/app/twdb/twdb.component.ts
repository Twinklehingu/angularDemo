import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-twdb',
  template: `
    <p>
      Two-way Data Binding!
    </p>

    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: [
  ]
})
export class TwdbComponent implements OnInit {

  public name = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
