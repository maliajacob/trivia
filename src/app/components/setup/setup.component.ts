import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

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
  // Form models
  numberOfPlayers: number = 1; 
  numberOfQuestions: number = 10; 
  category: string = '';
  difficulty: string = 'easy'; 
  questionType: string = 'multiple'; 
  users: Array<{ uid: string; displayName: string }> = []; 
  selectedUsers: string[] = []; 

  // Categories (mock data or fetched dynamically)
  categories = [
    { id: '9', name: 'General Knowledge' },
    { id: '10', name: 'Books' },
    { id: '11', name: 'Film' },
    { id: '12', name: 'Music' },
    { id: '13', name: 'Musicals & Theatres' },
    { id: '14', name: 'Television' },
    { id: '15', name: 'Video Games' },
    { id: '16', name: 'Board Games' },
    { id: '17', name: 'Science & Nature' },
    { id: '18', name: 'Computers' },
    { id: '19', name: 'Mathematics' },
    { id: '20', name: 'Mythology' },
    { id: '21', name: 'Sports' },
    { id: '22', name: 'Geography' },
    { id: '23', name: 'History' },
    { id: '24', name: 'Politics' },
    { id: '25', name: 'Art' },
    { id: '26', name: 'Celebrities' },
    { id: '27', name: 'Animals' },
    { id: '28', name: 'Vehicles' },
    { id: '29', name: 'Comics' },
    { id: '30', name: 'Gadgets' },
    { id: '31', name: 'Japanese Anime & Manga' },
    { id: '32', name: 'Cartoon & Animations' }
  ];

  constructor() {}

  ngOnInit() {
    // Mock user data (replace with Firestore fetch)
    this.users = [
      { uid: 'user1', displayName: 'Alice' },
      { uid: 'user2', displayName: 'Bob' },
      { uid: 'user3', displayName: 'Charlie' },
      { uid: 'user4', displayName: 'Diana' }
    ];

    // Set default category
    if (this.categories.length > 0) {
      this.category = this.categories[0].id;
    }
  }

  // Handle changes to the number of players
  onPlayersChange(): void {
    // Reset selected users if the number of players changes
    if (this.numberOfPlayers === 1) {
      this.selectedUsers = [];
    }
  }

  // Start game logic
  startGame(): void {
    if (this.numberOfQuestions % this.numberOfPlayers !== 0) {
      alert('The number of questions must be evenly divisible by the number of players.');
      return;
    }

    if (this.numberOfPlayers > 1 && this.selectedUsers.length !== this.numberOfPlayers - 1) {
      alert('Please select the correct number of players.');
      return;
    }

    // Log the game setup data (replace with Firestore save logic)
    console.log('Game Setup:', {
      numberOfPlayers: this.numberOfPlayers,
      numberOfQuestions: this.numberOfQuestions,
      category: this.category,
      difficulty: this.difficulty,
      questionType: this.questionType,
      selectedUsers: this.selectedUsers
    });

    // Navigate to the game page or save the game setup
    alert('Game setup complete! Starting the game...');
  }
}