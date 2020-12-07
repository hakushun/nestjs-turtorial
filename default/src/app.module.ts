import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能。
@Module({
	imports: [],
	controllers: [AppController],
	// このmoduleで使用されるproviderを列挙
	providers: [AppService],
})
export class AppModule {}
