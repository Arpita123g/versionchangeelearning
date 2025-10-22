import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginService } from 'src/app/service/auth/login.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MatInputModule],
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  instructorlogingroup!: FormGroup;
  islogin = false;
  @HostListener('document:keydown.enter', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
  }

  constructor(
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    private _global: GlobalService,
    private _alert: SnackbaralertService,
    private authenticationService: AuthenticationService,
    private sharedService: SharedserviceService
  ) { }



  ngOnInit(): void {
    this.buildform();

  }


  forgotpassword() {
    localStorage.setItem('usermodename', 'instructor');
    localStorage.setItem('callername', 'webinstructor');
    this._router.navigate(['forgotpassword']);

  }

  login() {
    var body: any = "";
    if (this.instructorlogingroup.valid) {
      if ((this.instructorlogingroup.value.email.toLowerCase() == 'administrator@bizfundamentals.in') || (this.instructorlogingroup.value.email.toLowerCase() == 'administrator@cesim.in')) {

        body = {
          email: this.instructorlogingroup.value.email.toLowerCase(),
          caller: 'webadmin',
          usermode: 'admin',
          password: this.instructorlogingroup.value.password,
        };
      } else {
        body = {
          email: this.instructorlogingroup.value.email.toLowerCase(),
          caller: 'webinstructor',
          usermode: 'instructor',
          password: this.instructorlogingroup.value.password,
        };

      }

      this._global.islogin.next(true);
      this._global.useremail.next(this.instructorlogingroup.value.email.toLowerCase());
      if ((this.instructorlogingroup.value.email.toLowerCase() == 'administrator@bizfundamentals.in') || (this.instructorlogingroup.value.email.toLowerCase() == 'administrator@cesim.in')) {
        this._login.checkadminlogin(body).subscribe((data: any) => {
          if (data.status == 'Success') {
            if (data.resultList[0].status == 'active') {
              localStorage.setItem('islogin', 'T');
              localStorage.setItem('email', this.instructorlogingroup.value.email.toLowerCase());
              this._global.islogin.next(true);
              this._global.useremail.next(this.instructorlogingroup.value.email.toLowerCase());
              this._global.role.next('admin');
              this._global.usermode.next("admin");

              this.authenticationService.login(data.resultList[0].username,
                this.instructorlogingroup.value.password, this.instructorlogingroup.value.email.toLowerCase(), "admin");
              this._router.navigate(['/auth/admin/adminheader']);


            } else if (data.resultList[0].status == 'inactive') {
              this._alert.error('Your account is currently inactive');
            } else {
              this._alert.error(data.message);
            }
          } else {
            this._alert.error(data.message);
          }
        },
          (error: any) => {
            localStorage.removeItem('islogin');
            localStorage.removeItem('email');

          })
      } else {
        this._login.checkadminlogin(body).subscribe((data: any) => {
          if (data.status == 'Success') {

            if (data.resultList[0].status == 'active') {
              localStorage.setItem('islogin', 'T');
              localStorage.setItem('email', this.instructorlogingroup.value.email.toLowerCase());
              this._global.username.next(data.resultList[0].username);
              this._global.useremail.next(this.instructorlogingroup.value.email.toLowerCase());
              this._global.userpassword.next(this.instructorlogingroup.value.password);
              this._global.islogin.next(true);

              this.islogin = true;
              this._global.usermode.next("instructor");
              this.sharedService.userTypeSet("instructor");

              this.authenticationService.login(data.resultList[0].username,
                this.instructorlogingroup.value.password, this.instructorlogingroup.value.email.toLowerCase(), "instructor");
              this._router.navigate(["auth/component/instructordashboard"])



            } else if (data.resultList[0].userstatus == 'inactive') {
              this._alert.error('Your account is currently inactive');
            } else {
              this._alert.error('Check your username and password');
            }

          } else {
            this._alert.error(data.message);
          }
        },
          (error: any) => {
            localStorage.removeItem('islogin');
            localStorage.removeItem('email');

          })
      }
    }
  }

  public buildform() {
    this.instructorlogingroup = this.form.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // role: ['',[Validators.required]]
      // isSuper: [false],
    });
  }

}