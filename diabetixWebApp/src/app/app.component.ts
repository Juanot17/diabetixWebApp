import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diabetix Web App';
  loading = true;
  previousUrl: string = null;
  currentUrl: string = null;

  constructor(private router: Router) {
  }
}
