import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel,IonButtons,IonMenuButton, IonInput, IonText, IonRow, IonCol, IonCard, IonGrid, IonCardContent, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonInput, IonLabel, IonContent, IonHeader, CommonModule, FormsModule,IonButtons,IonMenuButton]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
