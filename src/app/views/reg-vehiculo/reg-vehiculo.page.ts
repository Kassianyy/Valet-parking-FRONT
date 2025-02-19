import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonImg, IonBackButton, IonButton, IonIcon, IonInput, IonLabel, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reg-vehiculo',
  templateUrl: './reg-vehiculo.page.html',
  styleUrls: ['./reg-vehiculo.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonInput, IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonImg, IonSelect, IonSelectOption]
})
export class RegVehiculoPage {
  searchText: string = '';
  brands: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'Hyundai', 'Kia', 'Volkswagen', 'BMW'];
  filteredBrands: string[] = [];
  tipoUsuario: string = ''; // Variable para la selección de "Socio" o "Invitado"

  constructor() {}

  filterBrands() {
    if (this.searchText.trim() === '') {
      this.filteredBrands = [];
    } else {
      this.filteredBrands = this.brands.filter(brand =>
        brand.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  selectBrand(brand: string) {
    this.searchText = brand;
    this.filteredBrands = [];
  }
}
