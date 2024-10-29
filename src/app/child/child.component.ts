import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>
      Parent:{{parentData}}
    </h3>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input('parentData') public parentData;
  constructor() { }

  ngOnInit(): void {
  }

}
