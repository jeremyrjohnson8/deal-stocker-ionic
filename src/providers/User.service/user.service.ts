import { Injectable } from '@angular/core';
import { User } from './../../dtos/user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth, FirebaseAuthStateObservable } from 'angularfire2/auth';

@Injectable()
export class UserService {

  endpoint = '/users/'; 
  spEndpoint = '/stockpile/';
  _angFire: AngularFireAuth; 
  database: AngularFireDatabase; 
  dbUserId: string;
  private afObjObs: FirebaseObjectObservable<any>; 

  constructor(angularFire: AngularFireAuth) { 
    this._angFire = angularFire; 
  }

  public saveNewUser(newUser: User){
    this.CreateStockPile(newUser.userid);
    
    this.dbUserId = this.endpoint + newUser.userid; 
    this.database.object(this.dbUserId).set(newUser); 
  }

  public createNewUserAuth(email: string, password: string): AngularFireModule {
   
    return this._angFire.auth.createUserWithEmailAndPassword(email, password).catch(err => {
      console.log(err); 
    }); 

  }

  public CreateStockPile(userid: string){ 
    this.afObjObs = this.database.object(this.spEndpoint + userid);
    this.afObjObs.set(userid);
  }

  public getCurrentUserById(){

  }


}
