import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  standalone: false,
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.css'
})
export class CounterValueComponent {
  count: number = 10;

}
