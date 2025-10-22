import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { GlobalService } from 'src/app/service/global.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatToolbarModule, MatTooltipModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  SuperSub: Subscription;
  isSuper: boolean=false;
  Emailsub: Subscription;
  useremail: string = '';
  Usermodesub: Subscription;
  usermode: string = '';
  sidenaveshow:boolean = false;
  busygame:boolean = false;
  bodyContent:string = ''
  //constructor(private _router: Router,private bottomSheet: MatBottomSheet,private _global:GlobalService, public dialog: MatDialog,) {
    constructor(private _router: Router,private bottomSheet: MatBottomSheet,
        private _global:GlobalService,
        public dialog: MatDialog,
        private authenticationService: AuthenticationService,
       ) {
  this.SuperSub = this._global.isSuper.subscribe((data)=>{
      this.isSuper = data;
    });
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.Usermodesub = this._global.usermode.subscribe((data) => {
      this.usermode = data;
    });
    
  }

  ngOnInit(): void {
    
    if((this.useremail == "administrator@bizfundamentals.in") || (this.useremail == "administrator@cesim.in")){
      this.sidenaveshow = true;
    }
    
  }
  home(){
    if(this.usermode == "admin"){
      this._router.navigate(['/auth/admin/user']);
    }else if(this.usermode == "instructor"){
      // this._router.navigate(['auth/component/instructor']);
      this._router.navigate(["auth/component/instructordashboard"])
    }else if(this.usermode == "student"){
      this._router.navigate(['/auth/component/studentdashboardheader']);
    }

  }
  logout(){
    this.confirmDialog();
    // sessionStorage.removeItem('islogin');
    // this._router.navigate(['/'])

  }

  confirmDialog(): void {
    const message = "Are you sure you want to logout?";

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("logoutResult",dialogResult);
      if(dialogResult == true){
        this.authenticationService.logout();
        window.location.reload();
      }
    });
  }

  // openBottomSheet(): void {
  //   this.bottomSheet.open(UserdetailsComponent);
  // }


  openBottomSheet(): void {
   // this._router.navigate(['instructorprofile'])
  }

  ngOnDestroy(): void {
    this.SuperSub.unsubscribe();
    this.Emailsub.unsubscribe();
    this.Usermodesub.unsubscribe();

  }

  // gamearena(){
  //   this._router.navigate(['auth/businessbascis/businessbascis'])

  // }
  // reading(){
  //   this._router.navigate(['auth/businessbascis/businessbascisreading'])

  // }
  // forum(){
  //   this._router.navigate(['auth/businessbascis/businessbascisforumindividual'])

  // }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(BusinessbascismatdialogforhelpComponent, {
  //     data: { name: "Cesim" },
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

}


@Component({
  selector: 'userdetail-component-modal',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: 'userdetail.component.html',
  styleUrls: ['toolbar.component.scss'],
})
export class UserdetailsComponent {
  UserobjSub:Subscription
  userobj:any;
  constructor(private _router: Router,private bottomSheetRef: MatBottomSheetRef<UserdetailsComponent>,private _global:GlobalService) {
    this.UserobjSub = this._global.userobj.subscribe((data) => {
      this.userobj = data;
      //console.log('userdetails --------------------- >');

    //  console.log(this.userobj);
    })
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  logout(){
    this.bottomSheetRef.dismiss();
    sessionStorage.removeItem('islogin');
  }

  ngOnDestroy(): void {
    this.UserobjSub.unsubscribe();
  }


}
