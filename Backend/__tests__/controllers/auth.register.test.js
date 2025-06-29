const { register } = require("../../controllers/authController");
const user = require("../../models/user");

// Replaces the entire User module (your model) with a fake/mock version.
// So User.find() in your controller becomes a mock function, not the real Mongoose one.

jest.mock("../../models/user");

const request = {
  body: {
    email: "hamo@gmail.com",
    password: "8912u43",
    confirmPassword: "8912u43",
    username: "hamo",
  },
};

const json = jest.fn();
const response = {
  status: jest.fn(() => ({ json })),
};

it("Should send a status code of 400 when user exists", async () => {
  // Mock the .find() to simulate existing user
  user.find.mockResolvedValueOnce([
    {
      id: 1,
      email: "zoombie",
      password: "2234",
      username: "zoombie",
    },
  ]);

  await register(request, response);

  expect(response.status).toHaveBeenCalledWith(400);
  //   expect(json).toHaveBeenCalledWith({
  //     status: "fail",
  //     message: "This email or username is used before!",
  //     data: {
  //       users: [
  //         { id: 1, email: "zoombie", password: "2234", username: "zoombie" },
  //       ],
  //     },
  //   });
});

it("Should send a status code of 201 when create new user", async () => {
  // Simulate no existing users
  user.find.mockResolvedValueOnce([]);

  // Step 2: mock user instance returned from User.create
  const mockUserInstance = {
    email: "hamed@gmail.com",
    username: "hamed",
    role: "User",
    save: jest.fn().mockResolvedValueOnce({
      email: "hamed@gmail.com",
      username: "hamed",
      role: "User",
    }),
  };
  // Simulate creating a new user
  user.create.mockResolvedValueOnce(mockUserInstance);

  await register(request, response);

  expect(response.status).toHaveBeenCalledWith(201);
});
