import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonButton],
})
export class AppComponent {
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
