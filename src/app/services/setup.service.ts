import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where, addDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private firestore: Firestore) { }

  async getCategories() {
    const response = await fetch('https://opentdb.com/api_category.php')
    const data = await response.json()
    return data.trivia_categories
  }


  async createGame(users: string[], category: string, difficulty: string, questionType: string, numberOfQuestions: number) {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionType}`
    const response = await fetch(url)
    const data = await response.json()
    const questions = data.results

    const gamesCollection = collection(this.firestore, 'games'); 
    await addDoc(gamesCollection, {users, questions});
  }

  async getUsersNames(uid: string) {
    const users = collection(this.firestore, 'users')
    const snapshot = await getDocs(users)
    const usersNames = snapshot.docs.map(doc => ({ id: doc.id, name: doc.data()['displayName'] }))
    const usersNamesFiltered = usersNames.filter(user => user.id !== uid) // Filter out the current user
    return usersNamesFiltered

  }

  async checkUserGames(displayName: string): Promise<boolean> {
    const gamesCollection = collection(this.firestore, 'games'); 
    const getUserGames = query(gamesCollection, where('users', 'array-contains', displayName));
    const snapshot = await getDocs(getUserGames);
    return !snapshot.empty;
  }

  async getCurrentUserGame(displayName: string) {
    const gamesCollection = collection(this.firestore, 'games');
    const getUserGames = query(gamesCollection, where('users', 'array-contains', displayName));
    const snapshot = await getDocs(getUserGames);
    const games = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return games[games.length - 1]; // return the latest one
  }
  

}
