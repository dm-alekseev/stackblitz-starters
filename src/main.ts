import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Cars } from './app/cars/cars';

@Component({
  selector: 'app-root',
  imports: [Cars],
  template: `
 <ap-cars></ap-cars>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
