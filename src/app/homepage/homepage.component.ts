import { Component, OnInit } from '@angular/core';
import { Room } from '../types/Room';
import { HomepageService } from './homepage.service';

// interface Room {
//   name: string;
//   description: string;
//   image: string;
//   image2: string;
//   amount: number;
// }

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  [x: string]: any;
  constructor(private homepageService: HomepageService) {}

  room: Room[] = [];
  // {
  //   name: 'deluxe room',

  //   description:
  //     'Your Modern Space In Our Original Home Facing our refreshing pool against the backdrop of the Indian Ocean, the 80 Deluxe Rooms are some of the finest spaces among Negombo beach hotels. Featuring a private balcony or terrace to take in the views, every room immerses you in a luxurious modern atmosphere that has been designed to ensure you stay in absolute comfort at our original home of Sri Lankan hospitality. Adorned with large pieces of art that hang above your bed, the pristine white walls also complement the soothing blue floors for a calming seaside experience that lives up to our name with the added pleasures of a luxury bathtub, free Wi-Fi, satellite television, and more.',

  //   image:
  //     'https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2017/12/blue-accomodation-deluxe-gallery1.jpg',

  //   image2:
  //     'https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2017/12/blue-accomodation-deluxe-gallery2.jpg',

  //   amount: 50000,
  // },
  // {
  //   name: 'super deluxe room',

  //   description:
  //     'A welcome addition of spacious accommodation, the 21 Super Deluxe Rooms at Jetwing Blue are luxuriously expansive spaces to make you feel at home. Fitted with private balconies that offer exotic palm-fringed views of the Indian Ocean, each room reflects the contemporary character of our hotel with the signature blue and white aesthetic that stays true to our name. The Super Deluxe Rooms also include the pleasure of a twin bath, complete with a luxury bathtub and rain shower, as well as several other modern amenities such as a satellite television, mini bar, and free Wi-Fi among other standards of our hospitality.',

  //   image:
  //     'https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2018/02/super-del-thumb.jpg',

  //   image2:
  //     'https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2017/12/blue-accomodation-super-deluxe-gallery1.jpg',

  //   amount: 65000,
  // },

  isShowing: boolean = true;

  ngOnInit(): void {
    this.room = this.homepageService.getrooms();
  }

  toggleRooms() {
    //   // if isShowing is true then make it false
    //   // if isShowing is false. then make it true

    this.isShowing = !this.isShowing;
  }
}
