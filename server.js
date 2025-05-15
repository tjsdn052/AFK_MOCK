const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 10000;

// 정적 파일 제공: public 폴더 안의 이미지 → /images/ 경로로 접근 가능
server.use(
  "/images",
  jsonServer.defaults({ static: path.join(__dirname, "public") })
);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
