import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [LoginComponent, BookingComponent],
  imports: [CommonModule, FormsModule],
})
export class AuthModule {}
