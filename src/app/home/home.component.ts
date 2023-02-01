import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../types/Room';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() room: Room = {} as Room;

  constructor() {}

  ngOnInit(): void {}
}
