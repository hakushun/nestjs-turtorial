import { IsNotEmpty } from 'class-validator';

// class-validatorというパッケージでvalidationを実装してます
// https://github.com/typestack/class-validator#readme
export class CreateTodoDto {
	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	detail: string;
}