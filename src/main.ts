import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { QuizBoardComponent } from './app/components/quiz-board/quiz-board.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: QuizBoardComponent }, // ✅ default route
    ])
  ]
}).catch(err => console.error(err));
