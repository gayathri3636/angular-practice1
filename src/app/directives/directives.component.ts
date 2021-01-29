import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
displayValue = false;
count = [];

  constructor() { }
changeP(){
  this.displayValue = !this.displayValue;
  this.count.push(this.count.length+1)

}
  ngOnInit(): void {
  }

}
