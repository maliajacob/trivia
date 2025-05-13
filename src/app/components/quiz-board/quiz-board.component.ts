import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { SetupService } from '../../services/setup.service'; // adjust path if needed
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule and RouterModule
})
export class QuizBoardComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex = 0;
  displayName = '';
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  constructor(
    private setupService: SetupService,
    private userDataService: UserDataService,
    private router: Router
    
  )
  
  { console.log('QuizBoardComponent loaded!');}


  getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  async ngOnInit() {
    const displayName = this.getCookie('displayName');
    if (!displayName) {
      this.router.navigate(['/login']);
      return;
    }

    this.displayName = displayName;

    this.userDataService.getGameByDisplayName(this.displayName).subscribe((games: any[]) => {
      if (games.length > 0) {
        this.questions = games[0].questions;
      } else {
        console.warn('No game found for user');
      }
    });

  }

}