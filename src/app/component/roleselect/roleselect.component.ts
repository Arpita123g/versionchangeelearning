import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-roleselect',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roleselect.component.html',
  styleUrls: ['./roleselect.component.scss']
})
export class RoleselectComponent implements OnInit {

  constructor(private _router: Router,) {

  }

  ngOnInit(): void {

  }

  goToinstructorlogin() {
    this._router.navigate(['instructorlogin'])
  }

  goToinstudentlogin() {
    this._router.navigate(['studentlogin'])

  }

}
