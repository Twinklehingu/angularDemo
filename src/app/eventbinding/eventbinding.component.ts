import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    
    <h3>Eventbinding works!</h3>
    <button (click)="onClick()">Click Me</button>
    {{message}}
    
    
  `,
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {

  public message = ""
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Button clicked")
    this.message = "The button is clicked!"
  }


}
