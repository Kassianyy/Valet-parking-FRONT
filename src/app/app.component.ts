
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { logOut, cashOutline, cashSharp, clipboardOutline, clipboardSharp, timeOutline, timeSharp, trophyOutline, trophySharp, bookmarkOutline, bookmarkSharp, personCircleOutline, personCircleSharp, peopleCircleOutline, peopleCircleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'listado de Coches', url: 'waiting', icon: 'person-circle' },
    { title: 'Perfil', url: '/folder/inbox', icon: 'person-circle' },
    { title: 'Perfiles', url: '/folder/outbox', icon: 'people-circle' },
    { title: 'Top', url: '/folder/favorites', icon: 'trophy' },
    { title: 'Espera', url: '/folder/archived', icon: 'time' },
    { title: 'Registro', url: '/folder/trash', icon: 'clipboard' },
    { title: 'Facturas', url: '/folder/spam', icon: 'cash' },
  ];
  constructor(private router: Router, private storage: Storage) {
    addIcons({
      cashOutline, cashSharp,
      clipboardOutline, clipboardSharp,
      timeOutline, timeSharp,
      trophyOutline, trophySharp,
      bookmarkOutline, bookmarkSharp,
      personCircleOutline, personCircleSharp,
      peopleCircleOutline, peopleCircleSharp, logOut
    });
  }

  logout() {
    this.storage.clear();
    console.log('Cerrando sesión...');
    this.router.navigateByUrl('/login');
  }
}
