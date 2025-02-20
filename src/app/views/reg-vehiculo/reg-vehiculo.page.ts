import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonImg, IonBackButton, IonButton, IonIcon, IonInput, IonLabel, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { RegistrarCocheComponent } from 'src/app/components/registrar-coche/registrar-coche.component';

@Component({
  selector: 'app-reg-vehiculo',
  templateUrl: './reg-vehiculo.page.html',
  styleUrls: ['./reg-vehiculo.page.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [IonList, IonItem, IonLabel, IonInput, IonIcon, IonButtons, IonContent, IonHeader, CommonModule, FormsModule, IonMenuButton, IonImg, IonSelect, IonSelectOption]
})
export class RegVehiculoPage {
  searchText: string = '';
  brands: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'Hyundai', 'Kia', 'Volkswagen', 'BMW'];
  filteredBrands: string[] = [];
  tipoUsuario: string = '';
  fotoPreview: string | null = null;
  fotoFile: File | null = null;


  formData: any = {
    placa: '',
    marca: '',
    color: '',
    consecutivo: '',
    tipoUsuario: '',
    foto: ''
  };

  constructor(private vehiculoService: VehiculosService, private modalCtrl: ModalController) { }

  filterBrands() {
    if (this.searchText.trim() === '') {
      this.filteredBrands = [];
    } else {
      this.filteredBrands = this.brands.filter(brand =>
        brand.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  async openRegisterModal(vehiculo: any) {
    const modal = await this.modalCtrl.create({
      component: RegistrarCocheComponent,
      componentProps: {
        vehiculoData: vehiculo
      }
    });

    return await modal.present();
  }


  selectBrand(brand: string) {
    this.searchText = brand;
    this.filteredBrands = [];
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      if (image.webPath) {
        this.fotoPreview = image.webPath; // Mostrar en la UI
      }

      const response = await fetch(image.webPath!);
      const blob = await response.blob();
      const fileName = `vehiculo_${new Date().getTime()}.jpg`;
      this.fotoFile = new File([blob], fileName, { type: blob.type });

    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }


  guardarVehiculo() {
    console.log('Form data:', this.formData);
    if (!this.formData.placa || !this.formData.marca || !this.formData.color ||
      !this.formData.consecutivo || !this.formData.tipoUsuario) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    // Crear objeto FormData para enviar el formulario con la imagen
    const formData = new FormData();
    formData.append('placa', this.formData.placa);
    formData.append('marca', this.formData.marca);
    formData.append('color', this.formData.color);
    formData.append('consecutivo', this.formData.consecutivo);
    formData.append('tipoUsuario', this.formData.tipoUsuario);

    if (this.fotoFile) {
      formData.append('foto', this.fotoFile);
    } else {
      alert('Debe tomar una foto antes de registrar el vehículo.');
      return;
    }

    this.vehiculoService.registrarVehiculo(formData).subscribe({
      next: (response) => {
        console.log('Vehículo registrado:', response);
        alert('Registro exitoso');
        this.openRegisterModal(this.formData);
      },
      error: (error) => {
        console.error('Error al registrar vehículo:', error);
        alert('Error al registrar el vehículo.');
      }
    });
  }



}