import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
username:string = '';
users = ['william', 'kevin', 'john'];
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser(){
    this.users.push(this.username);
  }

  setusername(){
    this.username = ''
  }

}
