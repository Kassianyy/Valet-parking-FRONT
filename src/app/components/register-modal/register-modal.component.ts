import { Component, Input } from '@angular/core';
import { ModalController, IonButton, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { checkmarkOutline, close } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonIcon]
})
export class RegisterModalComponent {

  @Input() userData: any; 

  constructor(private modalCtrl: ModalController, private router: Router) { addIcons({ close, checkmarkOutline }); }

  closeModal() {
    this.modalCtrl.dismiss().then(() => {
      this.router.navigate(['/login']); 
    });
  }
}
