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
      name: "Fazer comida",
      description: "Fazer comida para minha mãe pq sou um bom filho",
      instancyLevel: EInstancyLevel.Urgente,
      startDate: new Date(),
      doingState: EDoingState.Making,
    },
    {
      name: "Investir 10K em bitcoin",
      description: "investir no bitcoin que está subindo",
      instancyLevel: EInstancyLevel.Tranquilo,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
    {
      name: "Estudar programação",
      description: "Estudar",
      instancyLevel: EInstancyLevel.Moderado,
      startDate: new Date(),
      doingState: EDoingState.Finish,
    },
    {
      name: "Beber água",
      description: "Ir no bebedouro, pegar um copo e bebr água",
      instancyLevel: EInstancyLevel.Urgente,
      startDate: new Date(),
      doingState: EDoingState.New,
    },
    {
      name: "Fazer comida",
      description: "Fazer comida para minha mãe pq sou um bom filho",
      instancyLevel: EInstancyLevel.Moderado,
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

  private separateLists(): void {
    this.newCardsList = this.cardsList.filter(c => c.doingState == EDoingState.New);
    this.makingCardsList = this.cardsList.filter(c => c.doingState == EDoingState.Making);
    this.testCardsList = this.cardsList.filter(c => c.doingState == EDoingState.Test);
    this.finishCardsList = this.cardsList.filter(c => c.doingState == EDoingState.Finish);
  }
}
