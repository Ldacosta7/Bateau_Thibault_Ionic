import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButtons, IonButton, IonMenu, IonMenuButton, ModalController, IonModal, MenuController } from '@ionic/angular/standalone';
import { PanierCardComponent } from 'src/app/composants/panier-card/panier-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonButtons, IonButton, IonMenu, IonMenuButton]
})
export class RestaurantsPage implements OnInit {

  @ViewChild(IonModal) modal !: IonModal
  restaurants: Array<any> = [];

  constructor(private router : Router, private modalCtrl : ModalController, private menuCtrl : MenuController) { 
    this.restaurants = [
      {
        id: 1,
        name: 'Le Phare Bleu',
        icon: '🏖️',
        location: 'Biarritz',
        specialty: 'Poissons grillés',
        contact: '05 59 24 XX XX',
        description: 'Restaurant face à la mer avec vue panoramique. Spécialités basques et produits ultra-frais.'
      },
      {
        id: 2,
        name: 'La Table des Marées',
        icon: '🌊',
        location: 'Saint-Malo',
        specialty: 'Fruits de mer',
        contact: '02 99 40 XX XX',
        description: 'Ambiance bretonne authentique. Plateaux de fruits de mer et spécialités locales.'
      },
      {
        id: 3,
        name: 'L\'Écailler du Port',
        icon: '⚓',
        location: 'Marseille',
        specialty: 'Bouillabaisse',
        contact: '04 91 33 XX XX',
        description: 'Restaurant provençal chaleureux. Bouillabaisse traditionnelle et poissons méditerranéens.'
      },
      {
        id: 4,
        name: 'Chez Neptune',
        icon: '🔱',
        location: 'Nice',
        specialty: 'Cuisine fusion',
        contact: '04 93 85 XX XX',
        description: 'Cuisine créative mêlant tradition et modernité. Chef étoilé spécialisé en produits maritimes.'
      }
    ];
  }

  ngOnInit() {
  }



    async addToCart(product: any) {
      const modal = await this.modalCtrl.create({
        component: PanierCardComponent,
        componentProps: { 'product': product }
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
  
    async openModal(){
      const modal = await this.modalCtrl.create({
        component : PanierCardComponent
      });
      modal.present();
    }

}
