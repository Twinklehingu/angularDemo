import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  template: `
   <h2>{{name}}</h2>
   <h2>{{name | lowercase}}</h2>
   <h2>{{name | uppercase}}</h2>
   <h2>{{message | titlecase}}</h2>
  <h2>{{message | slice:4:7}}</h2>
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'1.1-2'}}</h2>
  <h2>{{5.678 | number:'3.2-3'}}</h2>

  <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
   <h2>{{0.25 | currency:'EUR'}}</h2>
   <h2>{{0.25 | currency:'IND'}}</h2>
  `,
  styles: [
  ]
})
export class PipesDemoComponent implements OnInit {

  public name = "JohnSmith";
  public message = "The CLI and generated project have dependencies that require Node 8.9";
  constructor() { }

  ngOnInit(): void {
  }

}
