import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BookingForm } from 'src/app/types/Auth';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  from: BookingForm = {
    checkInDate: '',
    checkOutDate: '',
    calculateNights: '',
  };

  confirmBooking() {
    window.alert('Booking Confirmed');
  }

  adults = 0;
  rooms = 0;

  incrementAdults() {
    this.adults++;
    this.rooms = Math.ceil(this.adults / 2);
  }
  constructor() {}

  ngOnInit(): void {}
}
