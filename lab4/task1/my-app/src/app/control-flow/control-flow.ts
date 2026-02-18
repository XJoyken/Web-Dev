import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  template: `
  <span>Yes, the server is running</span>
  @if (isLoggedIn) {
    <p>Welcome back, Friend!</p>
  }
  @if (isServerRunning) {
    <p>Yes, the server is running</p>
  } @else {
    <p>No, the server is not running</p>
  }
  `,
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isLoggedIn = true;
  isServerRunning = true;
}
