import {Component} from '@angular/core';

@Component({
  selector: 'u_component',
  template: ` Hello {{city}}, {{1 + 1}}!`,
  styles: `
    :host {
      color: black;
    }
  `,
})
export class updating_Component {
  city = 'San Francisco';
}
