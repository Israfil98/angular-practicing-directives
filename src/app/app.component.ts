import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practicing-directives';
  showDetails = false;
  clicks: number[] = [];

  onDetailsToggle() {
    this.showDetails = !this.showDetails;
    this.clicks.push(this.clicks.length + 1)
  }
}
