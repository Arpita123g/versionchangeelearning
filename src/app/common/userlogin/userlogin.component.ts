import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { GlobalService } from 'src/app/service/global.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  studentlogingroup!: FormGroup;
  decryptedText: string = "";
  courseCode: string | null = '';
  @HostListener('document:keydown.enter', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.studentlogin();
    }
  }
  constructor(
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    private _global: GlobalService,
    private _alert: SnackbaralertService,
    private authenticationService: AuthenticationService,
    private sharedService: SharedserviceService,
    private route: ActivatedRoute,
  ) { }
 

  ngOnInit(): void {
    this.buildform();
    this.courseCode = this.route.snapshot.paramMap.get('coursecode');
  }

  public buildform() {
    this.studentlogingroup = this.form.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  forgotpassword() {
    localStorage.setItem('usermodename', 'student');
    localStorage.setItem('callername', 'webstudent');
    this._router.navigate(['forgotpassword']);
   
  }

  studentsignup() {
    this._router.navigate(['studentregister'])
  }

  studentlogin() {
    let body = {};
    if (this.studentlogingroup.valid) {

      body = {
        email: this.studentlogingroup.value.email.toLowerCase(),
        caller: 'webstudent',
        usermode: 'student',
        password: this.studentlogingroup.value.password
      };

      this._login.checkadminlogin(body).subscribe((data: any) => {

        if (data.status == 'Success') {
          if (data.resultList[0].status == 'active') {
            this._global.username.next(data.resultList[0].username);
            this._global.useremail.next(this.studentlogingroup.value.email.toLowerCase());
            this._global.userpassword.next(this.studentlogingroup.value.password);
            this._global.usermode.next("student");
            this.sharedService.userTypeSet("student");
            this.authenticationService.login(data.resultList[0].username,
              this.studentlogingroup.value.password, this.studentlogingroup.value.email.toLowerCase(), "student");
            this._global.islogin.next(true);
            this._router.navigate(['/auth/component/studentdashboardheader'], {
              state: { coursecode: this.courseCode}
            })
          }
        } else {
          this._alert.error(data.message);
        }
      },
        (error: any) => {
          sessionStorage.removeItem('islogin');
          sessionStorage.removeItem('mobile');

        })
    } else {
      this._alert.error("All field must be required");
    }
  }
}

