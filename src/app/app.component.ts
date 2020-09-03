import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickCount: number = 0;
  textBoxValue: string = "";
  onClick(): void {
      ++(this.clickCount);
  }

  onKey(domEvent: KeyboardEvent): void {
      this.textBoxValue += (domEvent.target as HTMLInputElement).value + '|';
  }

  onKeyByValue(value: string): void {
      this.textBoxValue += value + '|';
  }

  resetTextValue(box: any): void{
      this.textBoxValue = '';
      box.value = '';
  }

  keyEnterValue: string;

  onKeyEnter(value: string): void{
    this.keyEnterValue = value;
  }

  listOfStrings: Array<string>;
  
  addString(value: string): void{
    if(!this.listOfStrings) this.listOfStrings = [];
    this.listOfStrings.push(value);
  }

}
