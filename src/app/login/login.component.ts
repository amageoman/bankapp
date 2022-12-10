import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim = "Your Perfect Banking Partner";
  data = "Enter account number";
  // acno = "";
  // psw = "";
 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

  loginForm=this.fb.group({acno:[''],psw:['']})

  login(){
    var acno=this.loginForm.value.acno;
    var psw=this.loginForm.value.psw;
    
    const result=this.ds.login(acno,psw);
    if(result){
      alert('login successful')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect username or password')
    }
  }



  // login button function



  // login(a:any,b:any) {

  //   this.acno=a.value;
  //   this.psw=b.value;
  //   var acno = this.acno;
  //   var psw = this.psw;
  //   var userDetails = this.userDetails;
  //   if (acno in userDetails) {
  //     if (psw == userDetails[acno]["password"]) {
  //       alert("login successfull")
  //     } else {
  //       alert("incorrect password")
  //     }
  //   }
  //   else {
  //     alert("incorrect username")
  //   }
  // }


  // ------------------------


  // acnoChange(event:any){
  //   this.acno=event.target.value
  // }
  // pswChange(event:any){


  //   this.psw=event.target.value
  // }


}
