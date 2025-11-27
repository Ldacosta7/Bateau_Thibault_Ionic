import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonMenu, IonButton, IonButtons, IonMenuButton, ModalController } from '@ionic/angular/standalone';
import { PanierCardComponent } from 'src/app/composants/panier-card/panier-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonMenu, IonButton, IonButtons, IonMenuButton]
})
export class RecettesPage implements OnInit {

    recettes: Array<any> = [];

  constructor(private router : Router, private modalCtrl : ModalController) { 
    this.recettes = [
      {
        id: 1,
        name: 'Bouillabaisse Provençale',
        icon: '🍲',
        time: '90 min',
        difficulty: 'Difficile',
        ingredients: ['Rascasse', 'Grondin', 'Congre', 'Safran', 'Tomates', 'Ail', 'Fenouil', 'Pommes de terre'],
        steps: [
          'Préparer le bouillon de poisson avec les arêtes et les têtes',
          'Faire revenir l\'ail, le fenouil et les tomates',
          'Ajouter le safran et le bouillon filtré',
          'Cuire les poissons par ordre de fermeté',
          'Servir avec la rouille et les croûtons'
        ]
      },
      {
        id: 2,
        name: 'Tartare de Saumon',
        icon: '🥗',
        time: '20 min',
        difficulty: 'Facile',
        ingredients: ['Saumon frais', 'Citron vert', 'Avocat', 'Échalote', 'Aneth', 'Huile d\'olive', 'Sel', 'Poivre'],
        steps: [
          'Couper le saumon en petits dés',
          'Mélanger avec l\'échalote ciselée',
          'Ajouter le jus de citron et l\'huile d\'olive',
          'Incorporer l\'avocat coupé en dés',
          'Assaisonner et décorer avec l\'aneth'
        ]
      },
      {
        id: 3,
        name: 'Homard Thermidor',
        icon: '🦞',
        time: '60 min',
        difficulty: 'Difficile',
        ingredients: ['Homard', 'Beurre', 'Échalote', 'Vin blanc', 'Crème', 'Moutarde', 'Parmesan', 'Estragon'],
        steps: [
          'Cuire le homard dans l\'eau bouillante',
          'Décortiquer et réserver la chair',
          'Préparer la sauce avec échalote, vin blanc et crème',
          'Ajouter la moutarde et le parmesan',
          'Garnir les carapaces et gratiner au four'
        ]
      },
      {
        id: 4,
        name: 'Pavé de Bar Rôti',
        icon: '🐟',
        time: '35 min',
        difficulty: 'Moyen',
        ingredients: ['Filets de bar', 'Beurre', 'Thym', 'Citron', 'Huile d\'olive', 'Fleur de sel', 'Légumes de saison'],
        steps: [
          'Assaisonner les filets de bar',
          'Saisir côté peau dans une poêle chaude',
          'Arroser de beurre noisette au thym',
          'Terminer au four 5 minutes',
          'Servir avec un filet de citron et légumes'
        ]
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
