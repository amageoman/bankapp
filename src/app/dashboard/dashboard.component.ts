import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  acnod ='';
  pswd ='';
  amntd ='';
acnow='';
psww='';
amntw='';
user='';
  constructor(private ds: DataService) {

    this.user=this.ds.currentuser;
   }

  deposit() {
    var acnod = this.acnod;
    var pswd= this.pswd;
    var amntd = this.amntd;
    const resultd = this.ds.deposit(acnod, pswd, amntd)
    if (resultd) {
      alert(`${amntd} credited to your account and avalialble balance is ${resultd}`)
    }
    else {
      alert("incorrect username or password")
    }
  }


  withdraw() {
    var acnow = this.acnow;
    var psww= this.psww;
    var amntw = this.amntw;
    const resultw = this.ds.withdraw(acnow, psww, amntw)
    if (resultw) {
      alert(`${amntw} debited from your account and avalialble balance is ${resultw}`)
    }
   
  }



}
