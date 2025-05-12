const request = require("supertest");
const app = require("../app");

describe("POST /api/v1/auth/login", () => {
  it("should return failed login process", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({
      email: "zoombie@gmail.com",
      password: "zoombie",
    });
    expect(res.statusCode).toEqual(401);
  });
});
