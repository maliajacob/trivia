import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  // private userCollection: AngularFirestoreCollection<User>;

  // constructor(private db: AngularFirestore) {
  //   this.userCollection = this.db.collection<User>('employee-hours');
  // }
  constructor() {}
  
//  saveUserData(users: User): Promise<any> {
//     users.totalGamesPlayed = users.totalGamesPlayed || 0;
//     console.log('Saving user data:', users);
//     return this.userCollection.add(users);
//   }
  
}
