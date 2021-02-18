import { Injectable } from '@angular/core';

interface AppState {
  counter: number;
  title: string;
}

interface StoreAction {
  type: string;
  payload?: any;
}

function reducer(state: AppState, action: StoreAction): AppState {
  switch (action.type) {
    case 'increment': {
      const newState = { ...state };
      ++newState.counter;
      return newState;
    }

    case 'decrement': {
      const newState = { ...state };
      --newState.counter;
      return newState;
    }

    case 'changeTitle': {
      const newState = { ...state };
      newState.title = action.payload.title;
      return newState;
    }

    default:
      return state;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  state = {
    counter: 0,
    title: 'Store title',
  };

  constructor() {}

  incrementCounter() {
    console.log('Before', this.state);
    this.state = reducer(this.state, { type: 'increment' });
    console.log('After', this.state);
  }

  decrementCounter() {
    this.state = reducer(this.state, { type: 'decrement' });
  }

  changeTitle(newTitle: string) {
    this.state = reducer(this.state, {
      type: 'changeTitle',
      payload: newTitle,
    });
  }
}
