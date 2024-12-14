import { test, expect } from "@playwright/test";

const email = "prajilashehani@gmail.com";
const password = "Prajila2024";
const baseURL = "https://wiley.scienceconnect.io/login";

test("VerifyLoginRequestWithValidCredentials", async ({ request }) => {
  await test.step("Send a POST request to the login endpoint with valid credentials", async () => {
    const response = await request.post(baseURL, {
      data: {
        userEmail: email,
        password: password,
      },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("sessionToken");
  });
});

test("VerifyForgotPasswordEndpoint", async ({ request }) => {
  const forgotPasswordURL = "https://wiley.scienceconnect.io/login/password";

  await test.step("Send a POST request to the forgot password endpoint", async () => {
    const response = await request.post(forgotPasswordURL, {
      data: {
        email: email, // Replace with a registered email
      },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("message", "Password reset email sent.");
  });
});

