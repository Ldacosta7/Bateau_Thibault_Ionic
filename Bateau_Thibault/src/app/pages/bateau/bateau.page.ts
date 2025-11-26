import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonModal, IonItem, ModalController } from '@ionic/angular/standalone';
import { BoatCardComponent } from 'src/app/composants/boat-card/boat-card.component';




@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButton, IonButtons, IonModal, IonItem]
})

export class BateauPage{
  boats: Array<any> = [];


  constructor(private modalBateau: ModalController) {  
      this.boats = [
      {
        id: 1,
        name: 'L\'Albatros',
        icon: '⛵',
        year: '2018',
        capacity: '12 personnes',
        zone: 'Atlantique Nord',
        description: 'Chalutier moderne équipé pour la p��che hauturière. Doté des dernières technologies de navigation et de détection.'
      },
      {
        id: 2,
        name: 'Le Marlin Bleu',
        icon: '🚢',
        year: '2020',
        capacity: '8 personnes',
        zone: 'Méditerranée',
        description: 'Bateau de pêche artisanale spécialisé dans la capture responsable. Petit mais puissant et très manœuvrable.'
      },
      {
        id: 3,
        name: 'Neptune II',
        icon: '⚓',
        year: '2015',
        capacity: '15 personnes',
        zone: 'Océan Indien',
        description: 'Grand navire de pêche avec capacité de stockage importante. Idéal pour les longues expéditions maritimes.'
      },
      {
        id: 4,
        name: 'La Sirène',
        icon: '🛥️',
        year: '2022',
        capacity: '10 personnes',
        zone: 'Manche',
        description: 'Bateau récent éco-responsable avec motorisation hybride. Conçu pour minimiser l\'impact environnemental.'
      }
    ];
  }

  async openModal(boat : any){
    const modal = await this.modalBateau.create({
      component : BoatCardComponent,
      componentProps : {'bateau' : boat}
    });
    modal.present();
  }

  
}
