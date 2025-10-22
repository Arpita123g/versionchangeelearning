import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-voicebaseddashboardsettings',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './voicebaseddashboardsettings.component.html',
  styleUrls: ['./voicebaseddashboardsettings.component.scss']
})
export class VoicebaseddashboardsettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
