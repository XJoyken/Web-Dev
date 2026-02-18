import {Component, inject} from '@angular/core';
import {User} from './user/user';
import {anatomy_of_componentComponent} from './anatomy-of-component/anatomy-of-component';
import {updating_Component} from './updating-component/updating-component';
import {ControlFlow} from './control-flow/control-flow';
import {ControlFlowFor} from './control-flow-for/control-flow-for';
import {Binding} from './binding/binding';
import {EventHandling} from './event-handling/event-handling';
import {InputProperties} from './input-properties/input-properties';
import {OutputProperties} from './output-properties/output-properties';
import {DeferrableViews} from './deferrable-views/deferrable-views';
import {OptimizingImages} from './optimizing-images/optimizing-images';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from './car-service/car-service';
import {CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe} from '@angular/common';
import {ReversePipe} from './reverse-pipe/reverse-pipe';


@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <a_c_component></a_c_component>
    <u_component />
    <section><app-user /></section>
    <app-control-flow></app-control-flow>
    <app-control-flow-for></app-control-flow-for>
    <app-binding></app-binding>
    <app-event-handling></app-event-handling>
    <app-input-properties name="Simran"></app-input-properties>
    <app-output-properties (addItemEvent)="addItem($event)"></app-output-properties>
    <ul>
      @for (item of items; track item) {
        <li>{{ item }}</li>
      }
    </ul>
    <app-deferrable-views />
    <app-optimizing-images />
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>Name
        <input type="text" formControlName="name" />
      </label>
      <label>Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    <p>Car listing: {{display}}</p>
    <p>{{username | lowercase}}</p>
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
    Reverse Machine: {{ word | reverse }}
  `,
  imports: [
    anatomy_of_componentComponent,
    updating_Component,
    User,
    ControlFlow,
    ControlFlowFor,
    Binding,
    EventHandling,
    InputProperties,
    OutputProperties,
    DeferrableViews,
    OptimizingImages,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    LowerCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    ReversePipe
  ],
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class App {
  items = ['item 1'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit(){
    alert(
      this.profileForm.value.name + " | " + this.profileForm.value.email
    )
  };
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = "You are a champion";
}

