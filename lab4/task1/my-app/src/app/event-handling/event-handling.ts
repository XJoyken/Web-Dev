import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  template: `
    <button (click)="greet()"></button>
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{message}}
    </section>
  `,
  styleUrl: './event-handling.css',
})
export class EventHandling {
  message = "";
  greet() {
    console.log('Hello, there 👋');
  }
  showSecretMessage(){
    this.message = 'Way to go 🚀';
  }
}
