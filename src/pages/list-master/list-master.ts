import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  barcodeResult: string;

  // barcodeScannerOptions: BarcodeScannerOptions = {
  //   preferFrontCamera: false, // iOS and Android
  //   showFlipCameraButton: false, // iOS and Android
  //   showTorchButton: true, // iOS and Android
  //   torchOn: true, // Android, launch with the torch switched on (if available)
  //   prompt: 'Place a barcode inside the scan area', // Android
  //   resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  //   //formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
  //   //orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
  // };
  barcpdeFound = false;
  loadingBarcode = false;
  

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public barcodeScanner: BarcodeScanner) {


  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  scanBarcode(): void {
    debugger;
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);

    }, (err) => {
      console.log(err);
    });
  }

  getProduct(): void {
    let searchVal: string = this.barcodeResult;
  }
  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
