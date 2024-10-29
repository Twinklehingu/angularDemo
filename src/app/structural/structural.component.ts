import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  template: `
    <h4>Structural Directives</h4>
    <h6 *ngIf="displayName; then thenBlock, else elseBlock">Angular 9</h6> 

    <ng-template #elseBlock>
      <h6>
        Else Block
      </h6>
    </ng-template>

    <ng-template #thenBlock>
      <h6>
       Then Block
      </h6>
    </ng-template>

    <button (click)="show()"> Check </button>



  `,
  styles: [
  ]
})
export class StructuralComponent implements OnInit {

  // I want to display the user name is true or false based on Login
  displayName

  constructor() { }

  ngOnInit(): void {
    
  }
  show(){
    console.log(this.displayName)
    
  }

}



/*
Directives: In Angular, directives are special instructions used to extend the capabilities of HTML elements and control the Document Object Model (DOM) behavior dynamically. They allow you to add, remove, or manipulate HTML structure, appearance, or behavior based on your application's logic. Directives are classified into three main types:

Component Directives:

These are the most common type and are essentially Angular components, combining HTML, CSS, and JavaScript/TypeScript code to define a UI element.
Structural Directives:

Structural directives change the layout or structure of the DOM by adding, removing, or manipulating elements. They use an asterisk (*) in their syntax to indicate they modify the structure of the view.
Examples:
*ngIf: Conditionally includes or excludes an element based on a Boolean expression.
*ngFor: Loops over a collection and creates a DOM element for each item in the list.
*ngSwitch: Conditionally renders one of many elements based on a matching condition.
Attribute Directives:

Attribute directives alter the appearance or behavior of an element, component, or another directive.
Examples:
ngClass: Dynamically sets CSS classes.

Why Use Directives in Angular?
Dynamic DOM Manipulation: Directives provide a way to dynamically control elements based on application logic, creating interactive and responsive applications.
Reusable UI Logic: With directives, you can create reusable functionality that can be applied across components, reducing code duplication and enhancing modularity.
Improved Readability and Maintainability: By abstracting complex DOM manipulations into directives, code is more readable and easier to manage.


<h7 *ngIf="false">Angular 9</h7>  Inthis line will remove Angular 9 from the DOM 


 <ng-template #elseBlock>
      <h6>
        Name is hidden
      </h6>
    </ng-template>

    if i keep displayName as true it it show: Angular 9 else Name is hidden.

  in thenBlock will print if displayName is true

*/