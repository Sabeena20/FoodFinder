import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { NumberFormatStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  isSignUp: Boolean = false;
  user: User;
  userForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  onLogin() {
    this.sendPostRequest("https://localhost:44393/api/Values/login", this.user)
    .subscribe(
      res => {
        if(res.username != null) {
          console.log("login success");
          localStorage.setItem('currentUser', res.username);
          this.currentUserSubject.next(res);
          this.router.navigate(['/home']);
        } else {
          alert("error");
        }

      }
      ,
      error => { alert("error");}
    );
  }


  register() {
    this.sendPostRequest("https://localhost:44393/api/Values/register", this.user)
      .subscribe(
        res =>{
          if(res.username != null) {
            console.log("register success");
            localStorage.setItem('currentUser', res.username);
            this.currentUserSubject.next(res);
            this.router.navigate(['/home']);
          } else {
            alert("error");
          }
        }
        ,
        error =>{ alert(error);}
      );
  }


  sendPostRequest(url: string, data: any): Observable<User> {
    return this.http.post<any>(url, data);
  }

  ngOnInit() {

    this.user = new User();
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  onFormSubmit() {




  }


  loginUser() {


    // this.authService.login(username, password).subscribe(
    //   data => {
    //     const temp = data as User;

    //     console.log(temp.job + ' from api');
    //   },
    //   error => {
    //     console.log('oops', error);
    //   });
  }
  // signingUp(event:MouseEvent){
  //   this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
  //     this.currentUser = this.currentUserSubject.asObservable();
  //     console.log(this.currentUserSubject.value);
  //     if (!this.currentUserSubject.value) {
  //       console.log("in");
  //       this.isSignUp = false;
  //       this.router.navigate(['/signup']);
  //    } else {
  //     this.isSignUp = true;
  //     alert("signup");
  //    }
  // }

  clickedCancel() {
    this.isSignUp = false;
    this.router.navigate(['/logon']);
  }

  signUp() {
    this.isSignUp = true;
  }

}


