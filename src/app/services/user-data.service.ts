import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private gamesCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.gamesCollection = this.db.collection('games'); // 🔥 connects to the 'games' collection in Firebase
  }

  getGameByDisplayName(displayName: string) {
    return this.db.collection('games', ref => ref.where('displayName', '==', displayName)).valueChanges();
  }
}
