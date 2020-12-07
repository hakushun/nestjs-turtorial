# Sample
## 手順
```bash
cd sample
npm i
npm run start:dev
```
http://localhost:4000/
にアクセスして`Hello World!`が表示されていればOK
### 以下、コマンドを順に実行してみてください。
簡単なvalidationも実装してるので、いじわるなリクエストもエラー返します。（たぶん。）

- GET（全件取得）
```bash
curl http://localhost:4000/todos
# []
```
- POST（新規作成）
```bash
curl -X POST http://localhost:4000/todos -d "title=test1&detail=test1"
# {"id":1,"title":"test1","detail":"test1","status":"OPEN"}
```
- POST（新規作成）
```bash
curl -X POST http://localhost:4000/todos -d "title=test2&detail=test2"
# {"id":2,"title":"test2","detail":"test2","status":"OPEN"}
```
- GET（全件取得）
```bash
curl http://localhost:4000/todos
# [{"id":1,"title":"test1","detail":"test1","status":"OPEN"},{"id":2,"title":"test2","detail":"test2","status":"OPEN"}]
```
- GET（id指定して取得）
```bash
curl http://localhost:4000/todos/1
# {"id":1,"title":"test1","detail":"test1","status":"OPEN"}
```
- PATCH（status変更）
```bash
curl -X PATCH http://localhost:4000/todos/2/status -d "status=DONE"
# {"id":2,"title":"test2","detail":"test2","status":"DONE"}
```
- GET（全件取得）
```bash
curl http://localhost:4000/todos
# [{"id":1,"title":"test1","detail":"test1","status":"OPEN"},{"id":2,"title":"test2","detail":"test2","status":"DONE"}]
```
- DELETE（id指定して削除）
```bash
curl -X DELETE http://localhost:4000/todos/1
```
- GET（全件取得）
```bash
curl http://localhost:4000/todos
# [{"id":2,"title":"test2","detail":"test2","status":"DONE"}]
```

## 備考
- todos配下のファイルは下記コマンドでベースとなるファイルを作成し、修正してます。
- そのときにテスト用のファイル(*.spec.ts)も作成されますが、そっちは何も触ってません。
```bash
nest g module todos
nest g controller todos
nest g service todos
# nest g [作成したいファイルの種類] [作成したいディレクトリ名]
# g => generate
```