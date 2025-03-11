import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenuButton,IonHeader, IonTitle, IonToolbar, IonButtons, IonImg, IonIcon, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonIcon, IonImg, IonButtons, IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
