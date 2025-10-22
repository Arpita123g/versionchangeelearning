import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gameenroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameenroll.component.html',
  styleUrls: ['./gameenroll.component.scss']
})
export class GameenrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
