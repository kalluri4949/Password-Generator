import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers(): void {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols(): void {
    this.useSymbols = !this.useSymbols;
  }
  onChangeLength(value): void {
    // tslint:disable-next-line:radix
    const parseNumber = parseInt(value);
    if (!isNaN(parseNumber)) {
      this.length = parseNumber;
    }
  }
  onButtonClick(): void {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let characterSet = '';
    if (this.useLetters) {
      characterSet += letters;
    }
    if (this.useNumbers) {
      characterSet += numbers;
    }
    if (this.useSymbols) {
      characterSet += symbols;
    }

    let generatedPswd = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * characterSet.length);
      generatedPswd += characterSet[index];
    }
    this.password = generatedPswd;
  }
}
