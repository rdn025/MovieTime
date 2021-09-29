import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isAdminLogged:any=false;
  isLoggedIn:any = false;
  movieName:any="";
  movieList:any=[];

  constructor(private service:UserserviceService,public router:Router,public adminService:AdminService) { }

  ngOnInit(): void {
  this.service.getLoginConfirmation().subscribe(data=>(this.isLoggedIn=data));
  console.log(this.isLoggedIn);
  this.adminService.getAdminInfo().subscribe(data=>(this.isAdminLogged=data));
  }
  
  loggedOut(){
    
    this.router.navigate(['/home']);
  }

  searchMovie(movieName:any){
     this.adminService.getMovieByName(movieName).subscribe(data=>{
       this.movieList=data;
      this.adminService.searchedMovie(this.movieList);
      this.router.navigate(['/home']);
    });
  }

}
