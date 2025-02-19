import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonMenuButton, IonTitle, IonToolbar, IonImg, IonButtons, IonList, IonAvatar, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.page.html',
  styleUrls: ['./waiting.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonItem, IonAvatar, IonList, IonButtons, IonImg, IonContent, IonHeader,IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WaitingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
