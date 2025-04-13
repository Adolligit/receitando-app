import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonSearchbar,
    CardsComponent,
    IonList,
    IonLabel,
    IonItem,
    IonThumbnail,
  ],
})
export class HomePage {
  teste = "Vindo do Pai"
  constructor() {}
}
