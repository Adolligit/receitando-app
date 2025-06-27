import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  homeOutline,
  personOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonIcon],
})
export class MenuPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({
      heartOutline,
      homeOutline,
      personOutline,
    });
  }
}
