import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: AngularFirestoreDocument<User>;
  constructor(
    private database: AngularFirestore
  ) { 
    this.user = this.database.doc<User>('user/test');
  }

  getUserOvservable() {
    return this.user.valueChanges();
  }
}
