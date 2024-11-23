import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {

}
