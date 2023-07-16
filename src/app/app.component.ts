import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  item = 'mahmoud';

  names = ['mahmoud', 'marwan', 'mohammed'];

  addNames(newNames: string): void {
    this.names.push(newNames);
  }
}
