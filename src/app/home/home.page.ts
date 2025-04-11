import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSearchbar, IonList, IonLabel, IonItem, IonThumbnail } from '@ionic/angular/standalone';
=======
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
>>>>>>> 67999faa98ffeadce2ebe9d5ad3f76f2ecb9fb68
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
<<<<<<< HEAD
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonIcon, IonSearchbar, CardsComponent, IonList, IonLabel, IonItem, IonThumbnail],
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonIcon, IonSearchbar],
>>>>>>> 67999faa98ffeadce2ebe9d5ad3f76f2ecb9fb68
})
export class HomePage {
  constructor() {}
}
