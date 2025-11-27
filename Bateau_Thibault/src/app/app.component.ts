import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonMenu, IonContent, IonTitle, ModalController } from '@ionic/angular/standalone';
import { PanierCardComponent } from './composants/panier-card/panier-card.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonMenu, IonContent, IonTitle],
})
export class AppComponent {
  cart : Array<any> = [];
  constructor(private router: Router, private modalCart: ModalController) {}

    onGoToHome()
  { this.router.navigate(['/home']) }

  onGoToBateaux()
  { this.router.navigate(['/bateau']) }

  onGoToProduits()
  { this.router.navigate(['/produits']) }

  onGoToRestaurants()
  { this.router.navigate(['/restaurants']) }

  onGoToRecettes()
  { this.router.navigate(['/recettes']) }

  onGoToContact()
  { this.router.navigate(['/contact']) }

  async openModal(){
    const modal = await this.modalCart.create({
      component : PanierCardComponent,
      componentProps : {Product : null}
    });
    modal.present();
  }
  
}
