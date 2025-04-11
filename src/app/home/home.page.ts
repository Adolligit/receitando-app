import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSearchbar, IonList, IonLabel, IonItem, IonThumbnail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonIcon, IonSearchbar, CardsComponent, IonList, IonLabel, IonItem, IonThumbnail],
})
export class HomePage {
  constructor() {}
}
