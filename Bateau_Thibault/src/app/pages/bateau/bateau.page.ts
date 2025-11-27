import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonButtons, IonModal, IonItem, ModalController, IonMenu, IonMenuButton } from '@ionic/angular/standalone';
import { BoatCardComponent } from 'src/app/composants/boat-card/boat-card.component';
import { PanierCardComponent } from 'src/app/composants/panier-card/panier-card.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButton, IonButtons, IonModal, IonItem, IonMenu, IonMenuButton]
})

export class BateauPage{
  boats: Array<any> = [];


  constructor(private modalCtrl: ModalController, private router : Router) {  
      this.boats = [
      {
        id: 1,
        name: 'L\'Albatros',
        icon: '⛵',
        year: '2018',
        capacity: '12 personnes',
        zone: 'Atlantique Nord',
        description: 'Chalutier moderne équipé pour la pêche hauturière. Doté des dernières technologies de navigation et de détection.'
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
    const modal = await this.modalCtrl.create({
      component : BoatCardComponent,
      componentProps : {'bateau' : boat}
    });
    modal.present();
  }

  async openModalCart(){
      const modal = await this.modalCtrl.create({
        component : PanierCardComponent
      });
      modal.present();
    }


 async onGoToHome()
    { 
      await this.router.navigate(['/home'])
      window.location.reload()   
    }
  
    async onGoToBateaux()
    { await this.router.navigate(['/bateau']) 
      window.location.reload()   

    }
  
    async onGoToProduits()
    { await this.router.navigate(['/produits']) 
      window.location.reload()
    }
  
    async onGoToRestaurants()
    { await this.router.navigate(['/restaurants']) 
      window.location.reload()
    }
  
    async onGoToRecettes()
    { await this.router.navigate(['/recettes']) 
      window.location.reload()
    }
  
    async onGoToContact()
    { await this.router.navigate(['/contact']) 
      window.location.reload()
    }
}
