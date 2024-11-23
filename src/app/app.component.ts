import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section1Component } from './components/section1/section1.component';
import { SearchComponent } from './components/search/search.component';
import { CarsComponent } from "./components/cars/cars.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, Section1Component, SearchComponent, CarsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {

    person = {
        name: "Lucas",
        age: 19,
        job: "Programador"
    }

    personInfo = this.person;
    buttonText: string = "texto botao";
}
