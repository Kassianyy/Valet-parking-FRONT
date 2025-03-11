import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonContent, IonHeader, IonTitle,IonMenuButton, IonToolbar, IonButtons, IonImg, IonButton, IonInput, IonIcon, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  
  standalone: true,
  imports: [IonLabel, IonAvatar, IonItem, IonList, IonIcon, IonInput, IonButton, IonImg, IonButtons, IonContent,IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
