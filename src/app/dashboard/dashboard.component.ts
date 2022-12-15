import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteconfirmComponent } from '../deleteconfirm/deleteconfirm.component';
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
  acno:any;
  dateandtime:any;
  user = '';
  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) {

    this.dateandtime=new Date();
    

    this.user = this.ds.currentuser;
    
  }

  depositForm = this.fb.group({
    acnod: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amntd: ['']
  })

  withdrawForm = this.fb.group({
    acnow: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psww: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amntw: ['']
  })


  ngOnInit():void{
    if(!localStorage.getItem('currentacno')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  };

  deposit() {
    var acnod = this.depositForm.value.acnod;
    var pswd = this.depositForm.value.pswd;
    var amntd = this.depositForm.value.amntd;

    if (this.depositForm.valid) {



      const resultd = this.ds.deposit(acnod, pswd, amntd)
      if (resultd) {
        alert(`${amntd} credited to your account and avalialble balance is ${resultd}`)
      }
      else {
        alert("incorrect username or password")
      }
    }
    else {
      alert('invalid form')
    }
  }

  withdraw() {
    var acnow = this.withdrawForm.value.acnow;
    var psww = this.withdrawForm.value.psww;
    var amntw = this.withdrawForm.value.amntw;

    if (this.withdrawForm.valid) {
      const resultw = this.ds.withdraw(acnow, psww, amntw)
      if (resultw) {
        alert(`${amntw} debited from your account and avalialble balance is ${resultw}`)
      }

    }else{
      alert('Invlaid Form')
    }

  }


  logout(){

    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    this.router.navigateByUrl('')

  }

deleteconfirm(){
this.acno=JSON.parse(localStorage.getItem('currentacno') || '')
}

oncancel(){
  this.acno='';
}



}
