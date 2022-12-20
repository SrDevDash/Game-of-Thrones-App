const session = require("supertest-session");
const app = require("../../app"); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe("Test de APIS", () => {
  describe("POST /singup", () => {
    it("responds with 200", () =>
      agent
        .post("/singup")
        .send({ email: "lolabunny@wb.com", password: "bugsmimacho" })
        .expect(200));
    it('responds with an object that includes an property "success":true', () =>
      agent
        .post("/singup")
        .send({ email: "lolabunny@wb.com", password: "bugsmimacho" })
        .then((res) => {
          return expect(res.body.result).toEqual({ success: true });
        }));
    it("responds with status 400 if email  isn't string ", () =>
      agent
        .post("/singup")
        .send({ email: 5, password: "bugsmimacho" })
        .expect(400));

    it("responds with status 400 if email  is a empty string ", () =>
      agent
        .post("/singup")
        .send({ email: "", password: "bugsmimacho" })
        .expect(400));
    it("responds with status 400 if password  is a empty string ", () =>
      agent
        .post("/singup")
        .send({ email: "lolabunny@wb.com", password: "" })
        .expect(400));
    it("responds with status 400 if password  isn't a string ", () =>
      agent
        .post("/singup")
        .send({ email: "lolabunny@wb.com", password: 123456 })
        .expect(400));
  });
});
