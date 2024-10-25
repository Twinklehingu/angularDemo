import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
  <h2> First Component </h2>
  <div>
    Name: {{"Welcome, "+name}}
    
  </div>
  <div>
    {{name.length}}
  </div>
  <div>
    {{name.toLowerCase()}}
  </div>
  <div>
    {{name.toUpperCase()}}
  </div>
  <div>
  {{testFn()}}
  </div>

  <hr> 
  <h3>Property Bindings</h3>
  <div>
    <input [id] ="myId" type="text" value="Hello World"/>
    <input [disabled]="false" id ={{myId}} type="text" value="Hello World"/>

  </div>

  {{2+4}}
  
  `,
  styleUrls: []
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = "John Smith!";
  public myId = "testId";

  testFn(){
    return "String from Function"
  }
}

//{{2+4}}
  /////we can not assign the value like i = 2 + 4