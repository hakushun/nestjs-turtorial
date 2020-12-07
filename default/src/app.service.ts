import { Injectable } from '@nestjs/common';

// このデコレータでproviderとして認識される。
// そして、controllerのconstructorから呼び出せる。
@Injectable()
export class AppService {
	// メソッド名はなんでも良い。controllerで指定した名前と違って良い。
	getHello(): string {
		return 'Hello World!';
	}
}
