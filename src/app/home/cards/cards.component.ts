import { Component, Input, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports: [
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonList,
    IonLabel,
    IonItem,
    IonThumbnail,
  ],
})
export class CardsComponent implements OnInit {
  // @Input() images: Array<string> = ['']; -> deixa isso aqui para depois!
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() firstImg: string = "";
  @Input() firstLabel: string = "";
  @Input() secondImg: string = "";
  @Input() secondLabel: string = "";
  @Input() thirdImg: string = "";
  @Input() thirdLabel: string = "";

  constructor() {}

  ngOnInit() {}
}
