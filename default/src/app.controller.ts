import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller()の引数にルーティングのパスを指定する
// @Controller()は '/'へのパス。 @Controller('todos')は '/todos' へのパス
@Controller()
export class AppController {
	// service.tsで宣言したクラスをDIしてる。（自分で書いてても意味不明。）
	constructor(private readonly appService: AppService) {}

	// Getメソッドの場合はここでキャッチされる。
	// @Get()の引数でもパス指定が可能。@Controller()で指定した後に続く部分のパスを指定する。
	@Get()
	// メソッド名はなんでも良い。
	getHello(): string {
		// 処理の内容はcontrollerには書かずにprovider(service.ts)に記述する。
		return this.appService.getHello();
	}
}
