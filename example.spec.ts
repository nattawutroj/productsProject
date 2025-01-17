import { test, expect } from "@playwright/test";

test("test", async ({ page, isMobile }) => {
  if (!isMobile) {
    await page.goto("https://dependable-lift-web.vercel.app/");
    await expect(
      page.getByText("Low Rental Rates, Fast Delivery. Dependable Equipment.")
    ).toBeVisible();
    await page.getByRole("link", { name: "Equipment Image 12' Push" }).click();
    await expect(
      page.getByRole("heading", { name: "' Push Around Single Man Lift" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Start Quote" }).click();
    await expect(
      page.getByRole("button", { name: "Continue Quote" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Continue Quote" }).click();
    await expect(
      page.getByRole("heading", { name: "Delivery date detail" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Pick a date" }).first().click();
    await page.getByRole("gridcell", { name: "28" }).click();
    await page.locator(".fixed").first().click();
    await page.getByRole("button", { name: "Pick a date" }).click();
    await page.getByRole("gridcell", { name: "30" }).nth(1).click();
    await page.getByPlaceholder("Enter your address").click();
    await page.getByPlaceholder("Enter your address").fill("nyc");
    await page.getByText("NYCNY, USA").click();
    await expect(page.getByText("* This is an estimate and may")).toBeVisible();
    await page.getByRole("button", { name: "Next" }).click();
    await expect(
      page.getByRole("heading", { name: "Contact Details" })
    ).toBeVisible();
    await page.getByPlaceholder("Your Company Name").click();
    await page.getByPlaceholder("Your Company Name").fill("Ohm Automatic Test");
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill("Ohm");
    await page.locator('input[name="phone"]').click();
    await page.locator('input[name="phone"]').fill("0884877440");
    await page.getByPlaceholder("example@dependableliftrentals").click();
    await page
      .getByPlaceholder("example@dependableliftrentals")
      .fill("nattawutroj@gmail.com");
    await page.getByLabel("Email").check();
    await page.getByPlaceholder("Jobsite Notes").click();
    await page.getByPlaceholder("Jobsite Notes").fill("testing");
    await page.locator('input[name="JSPhoneNumber"]').click();
    await page.locator('input[name="JSPhoneNumber"]').fill("66884877440");
    await page.getByPlaceholder("Jobsite Contact").click();
    await page.getByPlaceholder("Jobsite Contact").fill("testing");
    await page.getByPlaceholder("Jobsite Name").click();
    await page.getByPlaceholder("Jobsite Name").fill("ohm");
    await page.getByPlaceholder("Notes About Your Order, E.G.").click();
    await page.getByPlaceholder("Notes About Your Order, E.G.").fill("ohm");
    await page.getByRole("checkbox").check();
    await page.locator('input[name="RAName"]').click();
    await page.locator('input[name="RAName"]').fill("ohm automation");
    await page.getByRole("combobox").click();
    await page.getByLabel("Mr.").click();
    await page.getByRole("button", { name: "Request Detailed Quote" }).click();
    await expect(page.getByText("Thank You")).toBeVisible();
    await expect(page.getByText("This is an estimate and may")).toBeVisible();
    await page.getByRole("link", { name: "Back Home" }).click();
    
  } else {
    await page.goto("https://dependable-lift-web.vercel.app/");
    await expect(
      page.getByText("Low Rental Rates, Fast Delivery. Dependable Equipment.")
    ).toBeVisible();
    await page.getByLabel("Accept cookies").click();
    await page.getByRole("link", { name: "Equipment Image 12' Push" }).click();
    await page.getByRole("button", { name: "Start Quote" }).click();
    await page.getByRole("button", { name: "Continue Quote" }).click();
    await page.getByRole("button", { name: "Pick a date" }).first().click();
    await page.getByRole("gridcell", { name: "28" }).click();
    await page.getByRole("gridcell", { name: "30" }).nth(1).click();
    await page.getByPlaceholder("Enter your address").click();
    await page.getByPlaceholder("Enter your address").fill("nyc");
    await page.getByText("NY, USA", { exact: true }).click();
    await expect(page.getByText("* This is an estimate and may")).toBeVisible();
    await page.getByRole("button", { name: "Next" }).click();
    await expect(
      page.getByRole("heading", { name: "Contact Details" })
    ).toBeVisible();
    await page.getByPlaceholder("Your Company Name").click();
    await page.getByPlaceholder("Your Company Name").fill("ohm mobile testing");
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill("ohm testing");
    await page.locator('input[name="phone"]').click();
    await page.locator('input[name="phone"]').fill("660884877440");
    await page.getByPlaceholder("example@dependableliftrentals").click();
    await page
      .getByPlaceholder("example@dependableliftrentals")
      .fill("nattawutroj@gmail.com");
    await page.getByText("Text Me").click();
    await page.getByPlaceholder("Jobsite Notes").click();
    await page.getByPlaceholder("Jobsite Notes").fill("testing");
    await page.locator('input[name="JSPhoneNumber"]').click();
    await page.locator('input[name="JSPhoneNumber"]').fill("0884877440");
    await page.getByPlaceholder("Jobsite Contact").click();
    await page.getByPlaceholder("Jobsite Contact").fill("-");
    await page.getByPlaceholder("Jobsite Name").click();
    await page.getByPlaceholder("Jobsite Name").fill("ohm");
    await page.getByPlaceholder("Notes About Your Order, E.G.").click();
    await page.getByPlaceholder("Notes About Your Order, E.G.").fill("ohm");
    await page.getByRole("checkbox").check();
    await page.locator('input[name="RAName"]').click();
    await page.locator('input[name="RAName"]').fill("ohm");
    await page.getByRole("combobox").click();
    await page.getByLabel("Mr.").click();
    await page.getByRole("button", { name: "Request Detailed Quote" }).click();
    await expect(page.getByText("Thank You")).toBeVisible();
    await expect(page.getByText("This is an estimate and may")).toBeVisible();
    await page.getByRole("button", { name: "Back Home" }).click();
    await expect(
      page.getByText("Low Rental Rates, Fast Delivery. Dependable Equipment.")
    ).toBeVisible();
  }
});

