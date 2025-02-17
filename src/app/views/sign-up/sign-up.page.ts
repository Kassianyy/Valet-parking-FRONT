import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonContent, IonHeader, IonLabel, IonInput, IonImg, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/angular/standalone';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { RegisterModalComponent } from 'src/app/components/register-modal/register-modal.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonButtons, IonImg, IonInput, IonLabel, IonContent, IonHeader, CommonModule, FormsModule, IonMenuButton]
})
export class SignUpPage implements OnInit {

  formData: any = {
    nombres: '',
    apellidos: '',
    numero_identificacion: '',
    correo: '',
    password: '',
    password2: ''
  };

  constructor(private authservice: AuthServicesService, private modalCtrl: ModalController) { }

  ngOnInit() { }

  async register() {
    if (!this.formData.nombres || !this.formData.apellidos || !this.formData.numero_identificacion || !this.formData.correo || !this.formData.password || !this.formData.password2) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (this.formData.password !== this.formData.password2) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.authservice.createUser(this.formData).subscribe({
      next: async (data) => {
        console.log('Usuario registrado:', data);

        // Crear y mostrar el modal
        const modal = await this.modalCtrl.create({
          component: RegisterModalComponent,
          componentProps: {
            userData: data // Pasamos la respuesta del backend al modal
          }
        });

        await modal.present();
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
        alert('Error al crear el usuario.');
      }
    });
  }
}
