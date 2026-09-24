import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

const pages = ['/', '/menu', '/drinks', '/visit'];

for (const path of pages) {
  test(`${path} loads and passes axe`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('h1, h2').first()).toBeVisible();
    const results = await new AxeBuilder({ page: page as never }).analyze();
    const serious = results.violations.filter(v => ['serious', 'critical'].includes(v.impact ?? ''));
    expect(serious, JSON.stringify(serious.map(v => v.id))).toEqual([]);
  });
}

test('menu search filters items', async ({ page }) => {
  await page.goto('/menu');
  await page.getByLabel('Search menu items').fill('birria');
  await expect(page.getByText('Birria Tacos')).toBeVisible();
  await expect(page.getByText('Huevos Rancheros')).toBeHidden();
});

test('menu tabs switch to lunch', async ({ page }) => {
  await page.goto('/menu');
  await page.getByRole('tab', { name: 'Lunch' }).click();
  await expect(page.getByText('Huevos Rancheros')).toBeVisible();
});

test('phone and directions links work', async ({ page }) => {
  await page.goto('/visit');
  await expect(page.locator('a[href="tel:+13343615121"]').first()).toBeVisible();
  await expect(page.locator('a[href*="google.com/maps"]').first()).toBeVisible();
});
