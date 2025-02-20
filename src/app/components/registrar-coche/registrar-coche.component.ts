import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonImg, IonBackButton, IonButton, IonIcon, IonInput, IonLabel, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { carOutline, close } from 'ionicons/icons';

@Component({
  selector: 'app-registrar-coche',
  templateUrl: './registrar-coche.component.html',
  styleUrls: ['./registrar-coche.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class RegistrarCocheComponent {

  @Input() vehiculoData: any;

  constructor(private modalCtrl: ModalController, private router: Router) {
    addIcons({ close, carOutline });
  }

  closeModal() {
    this.modalCtrl.dismiss().then(() => {
      this.router.navigate(['/reg-vehiculo']);
    });
  }
}
