import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  useLetters = false;
  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters;
  }
  onButtonClick(): void {
    console.log(this.useLetters);
    this.password = 'my password generated';
  }
}
