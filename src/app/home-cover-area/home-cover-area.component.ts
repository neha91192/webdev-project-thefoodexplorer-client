import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cover-area',
  templateUrl: './home-cover-area.component.html',
  styleUrls: ['./home-cover-area.component.css']
})
export class HomeCoverAreaComponent implements OnInit {
  images = [];
  constructor() { }

  ngOnInit() {
    this.images.push('/assets/images/image7.jpg');
    this.images.push('/assets/images/image5.jpg');
    this.images.push('/assets/images/image6.jpg');
  }

}
