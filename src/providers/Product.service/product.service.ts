import { Injectable } from '@angular/core';
import { Product } from './../../dtos/product';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  database: AngularFireDatabase;
  endPoint = '/stockpile/';
  dbUserId = '/';
  fboo: FirebaseObjectObservable<any>;

  constructor(database: AngularFireDatabase) {
    this.database = database;
  }

  public createNewProduct(newProd: Product): void {
    var x = "";
    console.log(newProd.ownerId);

    // Build up connection string - maybe make seperate method
    x = this.endPoint + newProd.ownerId;
    x = x + '/' + newProd.name;
    this.fboo = this.database.object(x);
    //   this.dbUserId = this.endPoint + newProd.name;
    //    this.fboo = this.af.database.object(this.dbUserId + newProd.name); 
    this.fboo.set(newProd);
  }

  removeProduct(location: string) {


  }


}
