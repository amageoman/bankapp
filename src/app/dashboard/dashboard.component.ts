import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

//   acnod ='';
//   pswd ='';
//   amntd ='';
// acnow='';
// psww='';
// amntw='';
user='';
  constructor(private ds: DataService,private fb:FormBuilder) {

    this.user=this.ds.currentuser;
   }

   depositForm=this.fb.group({acnod:[''],pswd:[''],amntd:['']})
   withdrawForm=this.fb.group({acnow:[''],psww:[''],amntw:['']})
  deposit() {
    var acnod = this.depositForm.value.acnod;
    var pswd= this.depositForm.value.pswd;
    var amntd = this.depositForm.value.amntd;
    const resultd = this.ds.deposit(acnod, pswd, amntd)
    if (resultd) {
      alert(`${amntd} credited to your account and avalialble balance is ${resultd}`)
    }
    else {
      alert("incorrect username or password")
    }
  }


  withdraw() {
    var acnow = this.withdrawForm.value.acnow;
    var psww= this.withdrawForm.value.psww;
    var amntw = this.withdrawForm.value.amntw;
    const resultw = this.ds.withdraw(acnow, psww, amntw)
    if (resultw) {
      alert(`${amntw} debited from your account and avalialble balance is ${resultw}`)
    }
   
  }



}
