import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnChanges {

  index: number;
  type: 'all' | 'active'| 'completed' = 'all';
  todoList:Array<Object>= [
    {
      todoName: 'Complete online Javacript course',
      check: false
    },
    {
      todoName: 'Jog around the park 3x',
      check: false
    },
    {
      todoName: '10 minutes meditation',
      check: false
    },
    {
      todoName: 'Read for 1 hour',
      check: false
    },
    {
      todoName: 'Pick up groceries',
      check: false
    },
    {
      todoName: 'Complete Todo App on Frontend Mnetor',
      check: false
    }
  ]
  

  constructor() { }
  

  ngOnInit(): void {
    // console.log(this.textTodoName.nativeElement.value);
  }

  ngOnChanges():void {
    // console.log(this.textTodoName.nativeElement);
    
  }

  getCheckBox(event: Event, index: number){
    this.index =  index
    this.todoList[index]['check'] = event.target['checked']  ? true : false
  }

  changeType(type){
    this.type = type;
  }



}
