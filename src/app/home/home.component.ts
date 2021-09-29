import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminService } from '../admin.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isLoggedIn:any = false;
  temp:any=false;
  res:any=false;

  public movies:Admin[] = [];
  details:any={};
  movieDetails:any={};
  movieInfo:any=false;
  movieList:any=[];

  constructor(public service:UserserviceService,public router:Router,public adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getMovies().subscribe(data => {this.movies = data;});

  this.service.getLoginConfirmation().subscribe(data=>(this.isLoggedIn=data));
  console.log(this.isLoggedIn);

  this.adminService.getAdminInfo().subscribe(data=>(this.temp=data));

  this.adminService.getSearchedMovie().subscribe(data=>
    {
      this.movieList = data;
  console.log(this.movieList);
  
  if(this.movieList.length === 0){
       this.res = this.res;
  }else{
    this.res = !this.res;
  }
});
  }


  update(mId:any){
    this.adminService.getAMovie(mId).subscribe(data=>{this.details=data;
    this.adminService.setMovie(this.details);
    this.router.navigate(['/update-movie']);
  });
  }

delete(mId:any){
  this.adminService.deleteMovie(mId).subscribe(data => {this.movies = data;});
}


  book(mId:any){
    this.adminService.getAMovie(mId).subscribe((data)=>{this.movieDetails=data;
      console.log(data);
      this.service.movieDetails(this.movieDetails);
      console.log(this.movieDetails);
      this.router.navigate(['/booking']);
    });
   
    
    
  }

}

