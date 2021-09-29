import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  feedback(){
    alert("Thank you for Contacting Us :)");
    this.router.navigate(['/home']);
  }

}
