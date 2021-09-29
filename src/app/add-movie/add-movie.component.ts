import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
movieDetails:any={movieName:'',language:'',amount:'',description:'',image:''};

  constructor(private router:Router,private adminService:AdminService){ }

  ngOnInit(): void {
    
  }

  addMovie(){
    this.adminService.addMovie(this.movieDetails).subscribe(data=>{
      alert("New Movie Added Successfully");
      this.router.navigate(['/home']);
      console.log(this.movieDetails);
    })
  }



}
