import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SetupService } from '../../services/setup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ]
})
export class SetupComponent implements OnInit {
  numberOfPlayers: number = 1; 
  numberOfQuestions: number = 10; 
  category: string = '';
  difficulty: string = 'easy'; 
  questionType: string = 'multiple'; 
  users: Array<{ uid: string; displayName: string }> = []; 
  selectedUsers: string[] = []; 
  categories: Array<{ id: string; name: string }> = []
  usersNames: Array<{ id: string; name: string }> = []

  constructor(private setupService: SetupService, private router: Router) {}

  getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  async ngOnInit() {
    const uid = this.getCookie('uid');
    if (!uid) {
      this.router.navigate(['/login']);
      return;
    }
    
    this.usersNames = await this.setupService.getUsersNames(uid)

    this.categories = await this.setupService.getCategories()

    // Set default category
    if (this.categories.length > 0) {
      this.category = this.categories[0].id;
    }
  }

  onPlayersChange(): void {
    if (this.numberOfPlayers === 1) {
      this.selectedUsers = [];
    }
  }

  // Start game logic
  async startGame(): Promise<void> {
    if (this.numberOfQuestions % this.numberOfPlayers !== 0) {
      alert('The number of questions must be evenly divisible by the number of players.');
      return;
    }

    if (this.numberOfPlayers > 1 && this.selectedUsers.length !== this.numberOfPlayers - 1) {
      alert('Please select the correct number of players.');
      return;
    }

    const uid = this.getCookie('uid');
    if (uid) {
      this.selectedUsers.push(uid); // Add the current user to the selected users
    } 

    // Send the game setup to the service (firebase)
    await this.setupService.createGame(this.selectedUsers, this.category, this.difficulty, this.questionType, this.numberOfQuestions, )

    // Navigate to the game page or save the game setup
    alert('Game setup complete! Starting the game...');
  }
}