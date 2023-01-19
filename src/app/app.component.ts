import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search() {
    throw new Error('Method not implemented.');
  }
  selectHotel(_t9: any) {
    throw new Error('Method not implemented.');
  }
  title = 'HotelBookingSystem';
  searchTerm: any;
  searchResults: any;
}
