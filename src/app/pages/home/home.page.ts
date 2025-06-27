import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CardsComponent } from '../../components/cards/cards.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    CardsComponent,
    CarouselComponent,
  ],
})
export class HomePage {
  constructor() {}
}
