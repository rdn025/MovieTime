import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  movDet:any={};
  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getSetMovie().subscribe(data=>(this.movDet=data));
  }

  updateMovie(){
    this.adminService.updatedMovie(this.movDet).subscribe();
      alert("Movie Updated Successfully");
      this.router.navigate(['/home']);
   
  }
}
