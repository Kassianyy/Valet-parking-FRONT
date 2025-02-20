import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonImg, IonButtons, IonList, IonAvatar, IonItem, IonLabel, IonButton, IonIcon, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.page.html',
  styleUrls: ['./waiting.page.scss'],
  standalone: true,
  imports: [IonRefresherContent,  IonButton, IonLabel, IonItem, IonAvatar, IonList, IonButtons, IonImg, IonContent, IonHeader, IonMenuButton, IonRefresher, CommonModule, FormsModule]
})
export class WaitingPage implements OnInit {

  vehiculos: any[] = [];

  constructor(private vehiculoService: VehiculosService) { }

  ngOnInit() {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe(data => {
      this.vehiculos = data.map(vehiculo => {
        return {
          ...vehiculo,
          imagenUrl: `http://localhost:5000${vehiculo.foto}`
        };
      });
    }, error => {
      console.error('Error al obtener vehículos', error);
    });
  }

  doRefresh(event: any) {
    this.cargarVehiculos();  // Recargar la lista de vehículos
    setTimeout(() => {
      event.target.complete(); // Finalizar la animación del refresco
    }, 1000);
  }

}
