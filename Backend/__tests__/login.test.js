const request = require("supertest");
const app = require("../app");

describe("POST /api/v1/auth/login", () => {
  // it("should return failed login process", async () => {
  //   const res = await request(app).post("/api/v1/auth/login").send({
  //     email: "zoombie@gmail.com",
  //     password: "zoombie",
  //   });
  //   console.log("res: ", res.statusCode);
  //   expect(res.statusCode).toEqual(401);
  // }, 10000);
  it("should return success login process", async () => {
    const res = (await request(app).post("/api/v1/auth/login")).send({
      email: "samy@gmail.com",
      password: "",
    });
    expect(res.statusCode).toEqual(400);
    // });
  });
});
