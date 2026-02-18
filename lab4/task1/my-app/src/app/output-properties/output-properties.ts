import { Component, output} from '@angular/core';

@Component({
  selector: 'app-output-properties',
  imports: [],
  template: ` <button class="btn" (click)="addItem()">Add Item</button>
  `,
  styles: `
    .btn {
      padding: 5px;
    }
  `,
})
export class OutputProperties {
  addItemEvent = output<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
