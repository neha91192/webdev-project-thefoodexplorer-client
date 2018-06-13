import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-search-panel',
  templateUrl: './home-search-panel.component.html',
  styleUrls: ['./home-search-panel.component.css']
})
export class HomeSearchPanelComponent implements OnInit {
  images = [];
  constructor() { }

  ngOnInit() {
    this.images.push('/assets/images/image1.jpg');
    this.images.push('/assets/images/image4.jpg');
    this.images.push('/assets/images/image3.jpg');
  }

}
