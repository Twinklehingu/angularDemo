import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    
    <h3>Eventbinding works!</h3>
    <button (click)="onClick($event)">Click Me</button>
    <button (click)="message='Good Morning'">Hello</button>
    {{message}}
    <hr>
    <input type="text" #myInput>
    <br>
    <button (click)="LogMessage(myInput.value)">Log</button>
    
    
  `,
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {

  public message = ""
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event)
    // this.message = "The button is clicked!"
    this.message = "Event type: " +event.type
  }
  LogMessage(myInput){
    console.log(myInput);
  }

}
