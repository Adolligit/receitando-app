import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInput,
    IonItem,
    IonList,
    IonButton,
    IonLabel,
  ],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public onClickRegister(): void {
    this.router.navigate(['/register']);
  }

  public onClickContinue(): void {
    this.router.navigate(['/menu']);
  }
}
