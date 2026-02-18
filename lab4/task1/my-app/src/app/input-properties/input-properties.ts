import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  imports: [],
  template: ` <p>The user's name is {{name()}}</p>
  `,
  styleUrl: './input-properties.css',
})
export class InputProperties {
  readonly name = input<string>();
}
