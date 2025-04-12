import { Component, OnInit } from '@angular/core';
import { IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail, IonList, IonLabel, IonItem,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports : [IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonLabel, IonItem, IonThumbnail ],
})
export class CardsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
