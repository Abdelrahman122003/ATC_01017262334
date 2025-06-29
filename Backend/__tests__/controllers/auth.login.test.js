const { login } = require("../../controllers/authController");
const user = require("../../models/user");
jest.mock("../../models/user");

const request = {
  body: { email: "zoombie@gmail.com", password: "i3nfdkfd" },
};

// This line creates a mock function named json using jest.fn().
// In Express, res.json() is often used to send JSON responses. So, you're mocking this method to track if it's called and with what arguments.
const json = jest.fn();
const response = {
  status: jest.fn(() => ({ json })),
};

it("Should send a status code 401 When user login", async () => {
  user.findOne = jest.fn().mockReturnValue({
    select: jest.fn().mockResolvedValue(null),
  });

  await login(request, response);
  expect(response.status).toHaveBeenCalledWith(401);
});

it("Should send a status code 401 When the password is wrong", async () => {
  // Create mock user object
  const mockUser = {
    password: "hashed-password",
    correctPassword: jest.fn().mockResolvedValue(false),
  };

  // This line mocks `User.findOne()` to return an object with a `.select()` method, which itself returns a promise that resolves to `mockUser`.
  user.findOne = jest.fn(() => ({
    select: jest.fn().mockResolvedValue(mockUser),
  }));

  await login(request, response);
  expect(response.status).toHaveBeenCalledWith(401);
});
