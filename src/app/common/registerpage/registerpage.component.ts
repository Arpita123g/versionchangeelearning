import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {
  emailverified: boolean = false;
  islogin = false;
  checkloading: boolean = false;
  isButtonDisabled: boolean = false;
  @Output() sendParentevent = new EventEmitter<boolean>();
  @HostListener('document:keydown.enter', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.studentregister();
    }

  }

  constructor(
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    private _global: GlobalService,
    private _alert: SnackbaralertService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  studentreggroup!: FormGroup;
  courseCode: string | null = '';
  coursecodeDisabled: boolean = false;

  ngOnInit(): void {
    this.buildform();
    this.courseCode = this.route.snapshot.paramMap.get('coursecode');
    if (this.courseCode) {
      this.studentreggroup.patchValue({
        coursecode: this.courseCode
      });

      this.coursecodeDisabled = true;
      this.studentreggroup.get('coursecode')?.disable();
    } else {
      this.coursecodeDisabled = false;
    }

  }

  loginClick() {

    if (this.courseCode) {
      // Navigating with coursecode
      this._router.navigate(['/studentlogin', this.courseCode]);
    }
    else {
      this._router.navigate(['studentlogin']);

    }

    // Navigating without coursecode

  }


  public buildform() {
    this.studentreggroup = this.form.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      coursecode: ['', [Validators.required]]

    });
  }



  emailvalidation() {
    this.emailverified = this.isValidEmail();
    if (this.emailverified == false) {
      this._alert.error("Input should be email format");
    }
  }
  isValidEmail(): boolean {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,20}$/.test(this.studentreggroup.value.email);
  }

  cancel() {

    this.studentreggroup.patchValue({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      coursecode: '' // Set the value of the 'firstname' field to blank
    });
  }
  studentregister() {
    if (this.emailverified != false) {
      if (this.studentreggroup.valid) {
        this.isButtonDisabled = true;
        this.checkloading = true;

        let body = {
          username: this.studentreggroup.value.firstname + " " + this.studentreggroup.value.lastname,
          email: this.studentreggroup.value.email.toLowerCase(),
          caller: 'webstudent',
          usermode: 'student',
          password: this.studentreggroup.value.password,
          coursecode: this.studentreggroup.getRawValue().coursecode,
          registertype: 'register',
          action: 'save'

        };

        this._login.checkstudentlogin(body).subscribe((data: any) => {
          if (data.status == 'Success') {

            this._global.islogin.next(true);
            this._global.username.next(this.studentreggroup.value.firstname + " " + this.studentreggroup.value.lastname);
            this._global.useremail.next(this.studentreggroup.value.email.toLowerCase());
            this._global.userpassword.next(this.studentreggroup.value.password);
            this._alert.success(data.message);
            this.authenticationService.login(this.studentreggroup.value.firstname + " " + this.studentreggroup.value.lastname,
              this.studentreggroup.value.password, this.studentreggroup.value.email.toLowerCase(), "student");
            this._global.islogin.next(true);
            this.checkloading = false;
            this._router.navigate(['/auth/component/studentdashboardheader']);


          } else {
            this.isButtonDisabled = false;
            this.checkloading = false;
            this._alert.error(data.message);
          }
        },
          (error: any) => {
            this.isButtonDisabled = false;
            this.checkloading = false;
            sessionStorage.removeItem('islogin');
            sessionStorage.removeItem('mobile');

          })
      }

      else {
        this.checkloading = false;
        this._alert.error("All field must be required")
      }
    }
    else {
      this._alert.error("Input should be email format");
    }

  }


}
