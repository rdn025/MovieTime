import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { SeatsComponent } from './seats/seats.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { AdminService } from './admin.service';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideshowComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ContactusComponent,
    BookingComponent,
    SeatsComponent,
    PaymentComponent,
    AdminLoginComponent,
    TicketsComponent,
    AddMovieComponent,
    UpdateMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserserviceService,AdminService,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
