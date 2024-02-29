import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CardColumnComponent } from '../../components/card-column/card-column.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CardColumnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
