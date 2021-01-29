import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
  styles:[
    `.online {
      color: white;
    }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {

loggedIn:boolean=false;
onLogin :string = "No user was loggedin";
username:string = '';
serverstatus:string = 'offline'

constructor(){
  // setTimeout( () => {
  //   this.loggedIn = true;
  // } ,3000)
  this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';

}
onUserlogin(){
  this.loggedIn = true;
  return this.onLogin = "User logged in and the user name is " + this.username;
}

getColor(){
  return this.serverstatus === 'online' ? 'green' :'red'
}
//In case one way event binding we use event.target.value to get entered value
// onUpdateUser(event: any){
//   this.username = event.target.value;
// }
  ngOnInit(){

  }


}
