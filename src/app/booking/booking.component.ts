import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
details:any={};
nos:number=0;
bookingStatus:any=false;
bookingDetails:any={
  movieName:'',
  language:'',
  showDate:'',
  startTime:'',
  no_ofseatNameSelected:'',
  amount:''};

  constructor(public service:UserserviceService,private router:Router,public bookingService:BookingService) { }

  ngOnInit(): void {
    this.details=this.service.getMovieDetails();
    console.log(this.details);
 
  }
  bookTicket(){
    this.bookingDetails.movieName=this.details.movieName;
    this.bookingDetails.language=this.details.language;
    this.bookingDetails.no_ofseatNameSelected=this.nos;
    this.bookingDetails.amount=this.nos*this.details.amount;
    this.bookingService.addBooking(this.bookingDetails).subscribe(data=>{
         this.router.navigate(['/seats']);});
         console.log(this.bookingDetails);
         this.bookingService.saveBookingDetails(this.bookingDetails);
         this.bookingStatus=true;
         this.bookingService.bookingStatus(this.bookingStatus);
  }

}
