import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonButtons, IonMenuButton, IonInput, IonText, IonRow, IonCol, IonCard, IonGrid, IonCardContent, IonImg, IonLoading } from '@ionic/angular/standalone';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonInput, IonLabel, IonContent, IonHeader, CommonModule, FormsModule, IonButtons, IonMenuButton, IonLoading]
})
export class LoginPage implements OnInit {

  loginData: any = {
    usuario: '',
    password: ''
  }

  // Variable para controlar el estado de carga
  isLoading: boolean = false;

  constructor(
    private auth: AuthServicesService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() { }

  async login() {
    if (!this.loginData.usuario || !this.loginData.password) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    // Mostrar el loading mientras se realiza el login
    this.isLoading = true;

    this.auth.Login(this.loginData).subscribe({
      next: async (data) => {
        await this.storageService.set('user', data);
        this.router.navigate(['/reg-vehiculo']);
        this.isLoading = false; // Ocultar el loading al finalizar el login
      },
      error: (error) => {
        alert('Error al loguear el usuario.');
        this.isLoading = false; // Ocultar el loading en caso de error
      }
    });
  }
}