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
    // this.images.push('/assets/images/imageA.jpg');
    this.images.push('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    // this.images.push('/assets/images/imageB.jpg');
    this.images.push('https://images.pexels.com/photos/416499/pexels-photo-416499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350');
    this.images.push('https://s3.us-east-2.amazonaws.com/thefoodexplorer/image/image6.jpg');
    this.images.push('https://s3.us-east-2.amazonaws.com/thefoodexplorer/image/image7.jpg');
    // this.images.push('/assets/images/imageC.jpg');
  }

}
