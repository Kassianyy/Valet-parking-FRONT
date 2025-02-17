import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reg-vehiculo',
  templateUrl: './reg-vehiculo.page.html',
  styleUrls: ['./reg-vehiculo.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonImg]
})
export class RegVehiculoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
