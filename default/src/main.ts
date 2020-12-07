import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	// expressでいう const app = express();
	// create()の引数にはルートモジュールクラスを指定する
	const app = await NestFactory.create(AppModule);
	// 3000番ポートでサーバの起動
	await app.listen(3000);
}
bootstrap();
