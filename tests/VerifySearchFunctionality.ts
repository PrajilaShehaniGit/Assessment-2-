import { test, expect } from "@playwright/test";

const baseURL = "https://onlinelibrary.wiley.com/";
const searchKeyword = "Machine Learning";

test("VerifySearchFunctionality", async ({ request }) => {
  await test.step("Send a GET request to the search endpoint with a keyword", async () => {
    const response = await request.get(`${baseURL}search`, {
      params: {
        query: searchKeyword,
      },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.results).toBeDefined();
    expect(responseBody.results).not.toHaveLength(0);
    expect(responseBody.results[0]).toHaveProperty("title");
  });
});
