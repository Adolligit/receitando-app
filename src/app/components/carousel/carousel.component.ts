import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {} from '@ionic/angular/standalone';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
