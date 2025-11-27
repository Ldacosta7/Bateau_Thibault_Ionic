import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButtons, IonButton, IonMenuButton, ModalController } from '@ionic/angular/standalone';
import { PanierCardComponent } from 'src/app/composants/panier-card/panier-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonButtons, IonButton, IonMenuButton]
})
export class ContactPage implements OnInit {

  constructor(private router : Router, private modalCtrl : ModalController) { }

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
