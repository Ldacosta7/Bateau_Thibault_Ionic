import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, ModalController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-boat-card',
  templateUrl: './boat-card.component.html',
  styleUrls: ['./boat-card.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon],
})
export class BoatCardComponent  implements OnInit {
  @Input() bateau: any = { id: 0, name: 0, icon: 0, year: 0, capacity: 0, zone: 0, description: 0}

  @Output() dismissChange = new EventEmitter<boolean>();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  closeModal(){
    return this.modalCtrl.dismiss()
  }

}
