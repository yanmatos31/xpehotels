import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hotel-detail',
  imports: [],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})

export class HotelDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute){}

  hotelId: string | null = null;
  ngOnInit(){
    this.hotelId = this.route.snapshot.paramMap.get('id');
    console.log('o ID do hotel é:  ', this.hotelId);
  }
}
