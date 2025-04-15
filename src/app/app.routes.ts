import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuizBoardComponent } from './components/quiz-board/quiz-board.component';
import { SetupComponent } from './components/setup/setup.component';
import { UserDataComponent } from './components/user-data/user-data.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'setup', component: SetupComponent },
    { path: 'user-data', component: UserDataComponent },
    { path: 'quiz-board', component: QuizBoardComponent },
];
