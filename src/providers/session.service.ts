import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from './../dtos/user'; 
import { Observable } from 'rxjs/observable'; 
import 'rxjs/add/operator/filter'; 

import 'rxjs/add/operator/do'; 

@Injectable()
export class SessionService {

  private endpoint; 
  _userData: AngularFireModule; 
  dbUserId: string; 
  userId: string; 
  currentUser: User; 
  number1 : number; 
  obs: Observable<any>; 
  database: AngularFireDatabase; 

  currentUsers: FirebaseObjectObservable<any>; 
  firstName: string; 

  constructor(userData: AngularFireModule) {
    this.endpoint = 'users/';
    this._userData = userData;
    this.currentUsers = this.database.object(this.endpoint);
   } 

   private endPointBuilder(usernameTemp: string): string {
     var returnVal = this.endpoint + usernameTemp; 
     console.log('EndPoint Tester ', returnVal);
     return returnVal; 
   }

   public test(): User{
     this.firstName = this.currentUser.firstName; 
     console.log(this.currentUser.userid); 
     return this.currentUser; 
   }

   public setCurrentUser(): User{
     return this.currentUser; 
   }
   
    public getCurrentUser(userid: string): FirebaseObjectObservable<any>{
      var finalEndPoint = this.endPointBuilder(userid); 
      this.currentUsers = this.database.object(finalEndPoint);
      console.log('Out ' + this.currentUsers);
      return this.currentUsers;   
    }
}


