import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  // Make sure the file exists now
  standalone: true,
  imports: [RouterModule], // Import RouterModule for routing
})
export class AppComponent {}


