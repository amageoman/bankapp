import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  acno ='';
  psw ='';
  amnt ='';
acnow='';
psww='';
amntw='';
  constructor(private ds: DataService) { }

  deposit() {
    var acno = this.acno;
    var psw = this.psw;
    var amnt = this.amnt;
    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`${amnt} credited to your account and avalialble balance is ${result}`)
    }
    else {
      alert("incorrect username or password")
    }
  }


  withdraw() {
    var acno2 = this.acnow;
    var psw2= this.psww;
    var amnt2 = this.amntw;
    const result2 = this.ds.deposit(acno2, psw2, amnt2)
    if (result2) {
      alert(`${amnt2} debited from your account and avalialble balance is ${result2}`)
    }
    else {
      alert("incorrect username or password")
    }
  }



}
