import { test, expect } from "@playwright/test";

const baseURL = "https://onlinelibrary.wiley.com/";
const articleId = "9781444396010.ch14";

test("VerifyArticleDownloadFunctionality", async ({ request }) => {
  await test.step("Send a GET request to the download endpoint for a specific article", async () => {
    const response = await request.get(`${baseURL}download/pdf/${articleId}`, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/pdf");
  });
});
