import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  imports: [ 
    RouterModule,
    IonicModule
  ],
  standalone: true
})
export class UserDataComponent  implements OnInit {

//temporary values 
totalGamesPlayed: number = 0;
gamesWon: number = 0;
gamesLost: number = 0;
totalQuestionsAnswered: number = 0;
questionsAnsweredCorrectly: number = 0;
questionsAnsweredIncorrectly: number = 0;
bestCategory: string = 'NA';
worstCategory: string = 'NA';

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() { }
}