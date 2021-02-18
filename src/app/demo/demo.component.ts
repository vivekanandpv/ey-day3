import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}

  decrement() {
    this.counterService.decrementCounter();
  }
}
