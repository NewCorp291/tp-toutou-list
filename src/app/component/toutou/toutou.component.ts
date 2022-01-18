import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-toutou',
  templateUrl: './toutou.component.html',
  styleUrls: ['./toutou.component.scss']
})
export class ToutouComponent implements OnInit {

  toutou!:Todo[];

  addTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.toutou = [
      {
        task: 'Promener',
        description: 'Promener Bandit pendant 45 minutes',
        completed: false
      },
      {
        task: 'Brosser',
        description: 'Brosser Bandit surtout les pates et derrière les oreilles',
        completed: true
      }
    ]
  }

  submTodo () {
    this.toutou.push({
      task: this.addTodo,
      description: this.addTodo,
      completed: false
    });

    this.addTodo = "";
  }
}
