import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatusValidationPipe } from './pipes/todo-status-validation.pipe';
import { Todo, TodoStatus } from './todo.model';
import { TodosService } from './todos.service';

// '/todos'へのリクエストはこのコントローラで処理される
@Controller('todos')
export class TodosController {
	// TodosServiceをDIして、TodosServiceのメソッドを使用できるようにしている。
	// （DI全然理解してないけど、こう書くことでcontroller内でserviceのメソッドが使用可能になる。）
	constructor(private todoService: TodosService){}

	// '/todos'にきたGETリクエストはココ
	@Get()
	getAllTodos(): Todo[] {
		return this.todoService.getAllTodos();
	}

	// '/todos/:id'にきたGETリクエストはココ
	@Get(':id')
	// @Paramでパラメータを取得する。その際、'ParseIntPipe'というbult-inのpipeを使ってidをstringからnumberに変換する。
	// 'pipe'はcontrollerの処理を行う前に、実行させることができる。ここでは型変換の処理を実行。
	getTodoById(@Param('id', ParseIntPipe) id: number): Todo {
		return this.todoService.getTodoById(id);
	}

	// '/todos'にきたPOSTリクエストはココ
	@Post()
	// create-todo.dto.tsで設定したvalidationを使用するために、pipeを挿入。
	// title, detailが空だと処理は実行されずエラーを返す。
	@UsePipes(ValidationPipe)
	// @Bodyでrequest.bodyを全て取得する。
	createTodo(@Body() createTodoDto: CreateTodoDto): Todo {
		return this.todoService.createTodo(createTodoDto);
	}

	// '/todos/:id'にきたDELETEリクエストはココ
	@Delete(':id')
	deleteTodo(@Param('id', ParseIntPipe) id: number): void {
		return this.todoService.deleteTodo(id);
	}

	// '/todos/:id/status'にきたPATCHリクエストはココ
	@Patch(':id/status')
	updateTodoStatus(
		@Param('id', ParseIntPipe) id: number,
		// todo-status-validation.pipe.tsで実装したcustom pipeを使用してvalidationしてる。
		@Body('status', TodoStatusValidationPipe) status: TodoStatus,
	): Todo {
		return this.todoService.updateTodoStatus(id, status);
	}
}
