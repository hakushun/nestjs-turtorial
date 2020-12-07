// 型定義ファイル
export interface Todo {
	id: number;
	title: string;
	detail: string;
	status: TodoStatus;
}

export enum TodoStatus {
	OPEN = 'OPEN',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE',
}