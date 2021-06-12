import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList:Array<Object>= [
    {
      todoName: 'Complete online Javacript course'
    },
    {
      todoName: 'Jog around the park 3x'
    },
    {
      todoName: '10 minutes meditation'
    },
    {
      todoName: 'Read for 1 hour',
    },
    {
      todoName: 'Pick up groceries'
    },
    {
      todoName: 'Complete Todo App on Frontend Mnetor'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
