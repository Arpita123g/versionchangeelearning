import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MicrosimongoingComponent } from '../microsim/microsimongoing/microsimongoing.component';
import { MicrosimcompletedComponent } from '../microsim/microsimcompleted/microsimcompleted.component';
import { MicrosimarchiveComponent } from '../microsim/microsimarchive/microsimarchive.component';

type TabType = 'microsim' | 'voicebased';
type SubTabType = 'ongoing' | 'completed' | 'archive';

@Component({
  selector: 'app-newinstructorview',
  templateUrl: './newinstructorview.component.html',
  styleUrls: ['./newinstructorview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MicrosimongoingComponent,
    MicrosimcompletedComponent,
    MicrosimarchiveComponent
  ]
})
export class NewinstructorviewComponent extends AbstractComponent {
  protected override readonly _global = inject(GlobalService);
  private readonly _snackbar = inject(SnackbaralertService);
  
  readonly activetab = signal<TabType>('microsim');
  readonly microsimsubtab = signal<SubTabType>('ongoing');
  readonly voicebasedsubtab = signal<SubTabType>('ongoing');

  override ngOnInit(): void {
    try {
      this._global.instructoractivetab.next(this.activetab());
    } catch (error) {
      this._snackbar.error('Error initializing tabs');
      console.error('Error in ngOnInit:', error);
    }
  }

  tabclick(tab: TabType): void {
    try {
      this.activetab.set(tab);
      this._global.instructoractivetab.next(tab);
    } catch (error) {
      this._snackbar.error('Error changing tab');
      console.error('Error in tabclick:', error);
    }
  }

  microsimtabclick(tab: SubTabType): void {
    try {
      this.microsimsubtab.set(tab);
    } catch (error) {
      this._snackbar.error('Error changing microsim tab');
      console.error('Error in microsimtabclick:', error);
    }
  }

  voicebasedtabclick(tab: SubTabType): void {
    try {
      this.voicebasedsubtab.set(tab);
    } catch (error) {
      this._snackbar.error('Error changing voicebased tab');
      console.error('Error in voicebasedtabclick:', error);
    }
  }
}
