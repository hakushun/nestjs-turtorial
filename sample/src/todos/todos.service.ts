import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo, TodoStatus } from './todo.model';

@Injectable()
export class TodosService {
	// サンプルのためサーバ上のメモリにtodosを保存します。
	// サーバを再起動すると消えます。
	private todos: Todo[] = []
	private id = 1;

	getAllTodos(): Todo[] {
		return this.todos
	}

	getTodoById(id: number): Todo {
		const target =  this.todos.find(todo => todo.id === id);
		if (!target) {
			// 指定したidのtodoがなかったら404を返してくれるbuilt-in HTTP exceptions
			// https://docs.nestjs.com/exception-filters#built-in-http-exceptions
			throw new NotFoundException();
		}
		return target;
	}

	createTodo(createTodoDto: CreateTodoDto): Todo {
		const { title, detail } = createTodoDto;
		const todo = {
			id: this.id++,
			title,
			detail,
			status: TodoStatus.OPEN,
		}
		this.todos.push(todo);
		return todo;
	}

	deleteTodo(id: number): void {
		// 指定したidのtodoがあるか確認。なければ404返す。
		const target = this.getTodoById(id);
		this.todos = this.todos.filter(todo => todo.id !== target.id);
	}

	updateTodoStatus(id: number, status: TodoStatus): Todo {
		// 指定したidのtodoがあるか確認。なければ404返す。
		const target = this.getTodoById(id);
		target.status = status;
		return target;
	}
}
