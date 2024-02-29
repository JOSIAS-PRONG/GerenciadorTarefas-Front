import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-column',
  standalone: true,
  imports: [],
  templateUrl: './card-column.component.html',
  styleUrl: './card-column.component.scss'
})
export class CardColumnComponent {
  @Input() public title: string = "";
  @Input() public color: string = "";
}
