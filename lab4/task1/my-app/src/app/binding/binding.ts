import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  template: `
  <div [contentEditable]="isEditable"></div>
  `,
  styleUrl: './binding.css',
})
export class Binding {
  isEditable = true;
}
