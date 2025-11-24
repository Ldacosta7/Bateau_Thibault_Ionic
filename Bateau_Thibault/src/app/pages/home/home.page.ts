import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonMenu, IonButtons, IonMenuButton, IonButton, IonNav } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonMenu, IonButtons, IonMenuButton, IonButton, IonNav],
})
export class HomePage {
  constructor(private router: Router) {}


  onGoToHome()
  { this.router.navigate(['/home']) }

  onGoToBateaux()
  { this.router.navigate(['/bateau']) }

  onGoToProduits()
  { this.router.navigate(['/produits']) }

  onGoToRestaurants()
  { this.router.navigate(['/restaurants']) }

  onGoToRecettes()
  { this.router.navigate(['recettes']) }

  onGoToContact()
  { this.router.navigate(['/contact']) }
}
