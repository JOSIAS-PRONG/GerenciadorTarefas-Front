import { Component, OnInit } from '@angular/core';
import { CardComponent, EDoingState, EInstancyLevel, ICardData } from '../../components/card/card.component';
import { CardColumnComponent } from '../../components/card-column/card-column.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, CardColumnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public cardsList: ICardData[] = [
    {
      id: 1,
      name: "Fazer comida",
      description: "Fazer comida para minha mãe pq sou um bom filho",
      instancyLevel: EInstancyLevel.Urgente,
      startDate: new Date(),
      doingState: EDoingState.Making,
    },
    {
      id: 2,
      name: "Investir 10K em bitcoin",
      description: "investir no bitcoin que está subindo",
      instancyLevel: EInstancyLevel.Tranquilo,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
    {
      id: 3,
      name: "Estudar programação",
      description: "Estudar",
      instancyLevel: EInstancyLevel.Moderado,
      startDate: new Date(),
      doingState: EDoingState.Finish,
    },
    {
      id: 4,
      name: "Beber água",
      description: "Ir no bebedouro, pegar um copo e bebr água",
      instancyLevel: EInstancyLevel.Urgente,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
    {
      id: 5,
      name: "Fazer comida",
      description: "Fazer comida para minha mãe pq sou um bom filho",
      instancyLevel: EInstancyLevel.Moderado,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
    {
      id: 6,
      name: "Programar",
      description: "Fazer uma programação de um appppp",
      instancyLevel: EInstancyLevel.Tranquilo,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
    {
      id: 7,
      name: "Por leite no fogão",
      description: "AGORA!!!!!!",
      instancyLevel: EInstancyLevel.Urgente,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
  ];

  public newCardsList: ICardData[] = [];
  public makingCardsList: ICardData[] = [];
  public testCardsList: ICardData[] = [];
  public finishCardsList: ICardData[] = [];

  ngOnInit(): void {
    this.separateLists();
  }

  public updateCardsList(): void {
    this.separateLists();
  }

  public onDeleteCard(card: ICardData): void {
    this.cardsList = this.cardsList.filter(c => c.id != card.id);
    this.separateLists();
  }

  private separateLists(): void {
    this.newCardsList = this.cardsList.filter(c => c.doingState == EDoingState.New);
    this.makingCardsList = this.cardsList.filter(c => c.doingState == EDoingState.Making);
    this.testCardsList = this.cardsList.filter(c => c.doingState == EDoingState.Test);
    this.finishCardsList = this.cardsList.filter(c => c.doingState == EDoingState.Finish);
  }
}
