import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonCard, ModalController, IonMenuButton, IonMenu } from '@ionic/angular/standalone';
import { PanierCardComponent, Product } from 'src/app/composants/panier-card/panier-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonCard, IonMenuButton, IonMenu]
})
export class ProduitsPage implements OnInit {

  products: Array<Product> = [];

  constructor(private router : Router, private modalCtrl: ModalController) {
    this.products = [
      {
        id: 1,
        productName: 'Saumon Atlantique',
        icon: '🐟',
        productPrice: 24.90,
        expirationDate: '',
        quantity: 1,
        season: "Toute l'année",
        stock: 'En stock',
        promo: false,
        expirationDays: 3
      },
      {
        id: 2,
        productName: 'Homard Breton',
        icon: '🦞',
        productPrice: 45.00,
        expirationDate: '',
        quantity: 1,
        season: 'Avril - Août',
        stock: 'En stock',
        promo: true,
        expirationDays: 2
      },
      {
        id: 3,
        productName: 'Daurade Royale',
        icon: '🐠',
        productPrice: 18.50,
        expirationDate: '',
        quantity: 1,
        season: 'Mai - Septembre',
        stock: 'En stock',
        promo: false,
        expirationDays: 5
      },
      {
        id: 4,
        productName: 'Plateau Fruits de Mer',
        icon: '🦐',
        productPrice: 89.90,
        expirationDate: '',
        quantity: 1,
        season: "Toute l'année",
        stock: 'Sur commande',
        promo: true,
        expirationDays: 1
      },
      {
        id: 5,
        productName: 'Bar de Ligne',
        icon: '🐡',
        productPrice: 32.00,
        expirationDate: '',
        quantity: 1,
        season: "Toute l'année",
        stock: 'En stock',
        promo: false,
        expirationDays: 4
      },
      {
        id: 6,
        productName: 'Huîtres Spéciales',
        icon: '🦪',
        productPrice: 12.90,
        expirationDate: '',
        quantity: 1,
        season: 'Septembre - Avril',
        stock: 'En stock',
        promo: false,
        expirationDays: 7
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