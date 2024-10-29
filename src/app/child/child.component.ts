import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `
    <h3>
      Parent:{{name}}
    </h3>

    <button (click)="fireEvent()">Send</button>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Data sent to Parent from Child Event");
  }
}
