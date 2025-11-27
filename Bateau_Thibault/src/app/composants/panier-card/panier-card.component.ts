import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonCardHeader, ModalController, IonContent } from "@ionic/angular/standalone";
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-panier-card',
  templateUrl: './panier-card.component.html',
  styleUrls: ['./panier-card.component.scss'],
  imports: [IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonCardHeader, IonContent],
})


export class PanierCardComponent implements OnInit {

  relayPoints: Array<any> = [];
  actualRelay: any
  cart: Cart = { products: [], totalPrice: 0.0, pointRelay: '' };
  myProduct: Product = {
    id: 0,
    productName: '',
    productPrice: 0.0,
    expirationDate: '',
    quantity: 0,
    icon: '',
    season: '',
    stock: '',
    promo: false,
    expirationDays: 0
  };

  @Input() product: Product = {
    id: 0,
    productName: '',
    productPrice: 0.0,
    expirationDate: '',
    quantity: 0,
    icon: '',
    season: '',
    stock: '',
    promo: false,
    expirationDays: 0
  };
  @Output() dismissChange = new EventEmitter<boolean>();


  constructor(private modalCtrl: ModalController) {
    this.getProductsFromJson();
    this.relayPoints = [
      { id: 1, name: "Point Relais Centre-Ville", address: "15 Rue du Port, 29200 Brest", selected: true },
      { id: 2, name: "Relais Maritime", address: "8 Avenue de la Mer, 29200 Brest", selected: false },
      { id: 3, name: "Point Fresh Ocean", address: "22 Quai du Commerce, 29200 Brest", selected: false }
    ];
  }

  //Gestion du modal
  ngOnInit() {
    if (this.product.productName != '') {
      this.addItemToCart(this.product);
    }
  }
  closeModal() {
    return this.modalCtrl.dismiss()
  }

  // Gestion du panier
  addItemToCart(product: Product) {
    console.log("avant ajout",this.cart)
    this.getProductsFromJson;
    console.log("avant ajout test 2",this.cart)
    if(this.checkExistingProduct(product) == false){
      this.cart.products.push(product);
    }
    console.log("après ajout",this.cart);
    this.updateTotalPrice();
    console.log("après mise à jour du prix",this.cart)
    this.setCart();
    console.log("après set cart",this.cart)
  }

  selectRelay(relay: any) {
    this.relayPoints.forEach(i => i.id === relay.id && (i.selected = true));
    this.actualRelay = relay.nom;
  }
  removeProductFromCart = async (product: Product) => {
    this.cart.products.find(p => p.id === product.id)!.quantity = 1;
    this.cart.products = this.cart.products.filter(prod => prod.id !== product.id);
    this.updateTotalPrice();
    this.setCart();
  };

  decreaseProductFromCart(product: Product) {
    const i = this.cart.products.findIndex(p => p.id === product.id); 
    if (i > -1 && --this.cart.products[i].quantity <= 0) 
      this.removeProductFromCart(product);
    this.updateTotalPrice();
    this.setCart();
  }

  updateTotalPrice() {
    this.cart.totalPrice = this.cart.products.reduce((sum, prod) => sum + (prod.productPrice*prod.quantity), 0);
  }

  checkExistingProduct(product: Product) {
    for (let produit of this.cart.products) {
      if (product.id === produit.id) {
        produit.quantity++;
        return true;
      }
    }
    return false;
  }
  // Gestion du local storage 
  setCart = async () => {
    await Preferences.set({
      key: 'Panier',
      value: JSON.stringify(this.cart),
    });
  };

  checkCart = async () => {
    const { value } = await Preferences.get({ key: 'Panier' });
    if (value != null) {
      return true
    }
    return false
  };

  async getProductsFromJson() {
    const { value } = await Preferences.get({ key: 'Panier' });
    if (value != null) {
      this.cart = JSON.parse(value);
    }
  }

  removeCart = async () => {
    await Preferences.remove({ key: 'Panier' });
  };
}

export class Product {
  id: number = 0;
  productName: string = '';
  productPrice: number = 0.0;
  expirationDate: string = '';
  quantity: number = 1;
  icon: string = '';
  season: string = '';
  stock: string = '';
  promo: boolean = false;
  expirationDays: number = 0;

  constructor(name: string, price: number, dateOfExpiration: string, _id: number, _quantity: number, _icon: string, season: string, stock: string, promo: boolean, expirationDays: number) {
    this.productName = name;
    this.productPrice = price;
    this.expirationDate = dateOfExpiration;
    this.id = _id;
    this.quantity = _quantity;
    this.icon = _icon;
    this.season = season;
    this.stock = stock;
    this.promo = promo;
    this.expirationDays = expirationDays;
  }
}

export class Cart {
  products: Array<Product> = [];
  totalPrice: number = 0.0;
  pointRelay: any = [];

  constructor(_products: Array<Product>, _totalPrice: number, _pointRelay: any) {
    this.products = _products;
    this.totalPrice = _totalPrice;
    this.pointRelay = _pointRelay;
  }
}