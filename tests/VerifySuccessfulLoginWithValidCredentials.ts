import { test, expect } from "@playwright/test";

const baseURL = "https://onlinelibrary.wiley.com/";
const email = "prajilashehani@gmail.com";
const password = "Prajila2024";

test("VerifyLoginRequestWithValidCredentials", async ({ request }) => {
  await test.step("Send a POST request to the login endpoint with valid credentials", async () => {
    const response = await request.post(`${baseURL}login`, {
      data: {
        userEmail: email,
        password: password,
      },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("userToken");
  });
});
