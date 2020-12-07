import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TodoStatus } from "../todo.model";

// custom pipeを実装してる。
// このpipeでは'todo status'の　のvalidationを行う。
// https://docs.nestjs.com/pipes
export class TodoStatusValidationPipe implements PipeTransform {
	readonly allowedStatus = [
		TodoStatus.OPEN,
		TodoStatus.IN_PROGRESS,
		TodoStatus.DONE,
	]

	// custom pipeは'tranform'メソッドを必ず持つ。
	// https://docs.nestjs.com/pipes#custom-pipes
	transform(value: any) {
		if (!this.isStatusValid(value)) {
			// OPEN, IN_PROGREE, DONE以外であればステータス400を返す。
			throw new BadRequestException();
		}
		return value;
	}

	private isStatusValid(status: any) {
		// allowedStatusにstatusが含まれていなければ-1を返す
		const index = this.allowedStatus.indexOf(status);

		// -1ならinvalidということで、falseを返す
		return index !== -1;
	}
}