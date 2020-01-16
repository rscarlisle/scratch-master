import { Component, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements AfterViewInit {
  title = "ToDo List App";
  newTodo: Todo = new Todo();
  counter: number = 1;

  constructor(private todoDataService: TodoDataService,   private _elemRef: ElementRef) { }

  ngAfterViewInit() {
    this._elemRef.nativeElement.addEventListener('click', (e) => {
      // alert(e.target.nodeName)
      if (e.target && e.target.nodeName === 'LABEL') {
        e.target.classList.toggle('done');
      }
    })
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }

  public getRemainingCount() {
    // return this.todos.filter(todo => !todo.isDone).length;
  }

  addTodo() {
    this.counter++;
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
