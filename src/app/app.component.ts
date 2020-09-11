import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'users-list';
  typesOfShoes: string[] = ['Catharine Hilley', 'Kip Crew', 'Nila Kilbourn', 'Abram Snuggs', 'Izetta Higdon', 'Palmira Leth', 'Nadine Square', 'Tiffiny Hillebrand', 'Calvin Inks'];
}
