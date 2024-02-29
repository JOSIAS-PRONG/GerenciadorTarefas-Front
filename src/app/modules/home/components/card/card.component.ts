import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ICardData {
  id: number;
  name: string;
  description: string;
  instancyLevel: EInstancyLevel;
  startDate: Date;
  doingState: EDoingState;
}

export enum EDoingState {
  New = 0,
  Making = 1,
  Test = 2,
  Finish = 3
}

export enum EInstancyLevel {
  Tranquilo = 0,
  Moderado = 1,
  Urgente = 2
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() public card: ICardData = {} as ICardData;
  @Output() private cardMove: EventEmitter<void> = new EventEmitter<void>();
  @Output() private deleteCard: EventEmitter<void> = new EventEmitter<void>();

  public instancyText: string = "";

  ngOnInit(): void {
    switch (this.card.instancyLevel) {
      case EInstancyLevel.Tranquilo:
        this.instancyText = "Tranquilo";
        break;
      case EInstancyLevel.Moderado:
        this.instancyText = "Moderado";
        break;
      case EInstancyLevel.Urgente:
        this.instancyText = "Urgente";
        break;
    }
  }

  public get EDoingState(): typeof EDoingState {
    return EDoingState;
  }

  public get EInstancyLevel(): typeof EInstancyLevel {
    return EInstancyLevel;
  }

  public onDelete(): void {
    this.deleteCard.emit();
  }

  public moveToLeft(): void {
    this.card.doingState -= 1;
    this.cardMove.emit();
  }

  public moveToRight(): void {
    this.card.doingState += 1;
    this.cardMove.emit();
  }
}
