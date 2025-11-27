import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonMenu, IonButtons, IonMenuButton, IonButton, IonNav, ModalController } from '@ionic/angular/standalone';
import { PanierCardComponent } from 'src/app/composants/panier-card/panier-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonMenu, IonButtons, IonMenuButton, IonButton, IonNav],
})
export class HomePage {
  constructor(private router: Router, private modalCtrl : ModalController) {}

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
