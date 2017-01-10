import { Component, OnInit } from '@angular/core';
import { Feature } from '../Feature';

@Component({
  selector: 'seeyond-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	featureTitle = 'Freestanding Curved Partition';

  constructor(private feature: Feature) { }

  ngOnInit() {
  }

}
