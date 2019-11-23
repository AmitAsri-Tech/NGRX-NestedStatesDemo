import { Component } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Product } from './product';
import { AppState } from './app-state';
import { Data } from './data';

const data = new Data();
const stateData = data.State;
// const entities = stateData.products.pizzas.entities;

const getProducts = state => stateData.products;

const getPizzas = createSelector(
  getProducts,
  state => state.pizzas
);

const getEntities = createSelector(
  getPizzas,
  state => state.entities
);

// const getEntities = createSelector(
//   state => stateData.products,
//   state => stateData.products.pizzas,
//   state => stateData.products.pizzas.entities
// );

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pizzas;
  entities;

  constructor(private store: Store<AppState>) {

  this.store.select(getEntities).subscribe(a => this.entities = a);
  this.pizzas = Object.values(this.entities);

  }

}
