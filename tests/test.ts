import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Simple calculator' })).toBeVisible();
});

test('check addition', async ({ page }) => {
	await page.goto('http://127.0.0.1:4173/');
	await page.getByRole('spinbutton').first().click();
	await page.getByRole('spinbutton').first().fill('12');
	await page.getByRole('textbox').click();
	await page.getByRole('textbox').fill('+');
	await page.getByRole('spinbutton').nth(1).click();
	await page.getByRole('spinbutton').nth(1).fill('8');
	await page.getByRole('button', { name: 'Calculate' }).click();
	await expect(page.getByRole('spinbutton').nth(2)).toHaveValue('20');
});

test('check error on invalid operation', async({page}) => {
	await page.goto('http://127.0.0.1:4173/');
	await expect(page.getByRole('listitem')).toBeHidden();
	await page.getByRole('spinbutton').first().click();
	await page.getByRole('spinbutton').first().fill('12');
	await page.getByRole('textbox').click();
	await page.getByRole('textbox').fill('invalid');
	await page.getByRole('spinbutton').nth(1).click();
	await page.getByRole('spinbutton').nth(1).fill('4');
	await page.getByRole('button', { name: 'Calculate' }).click();
	await expect(page.getByRole('listitem')).toBeVisible();
	await expect(page.getByRole('listitem')).toContainText('The operation is invalid');
})

test('check invalid right operand on division', async ({page}) => {
	await page.goto('http://127.0.0.1:4173/');
	await expect(page.getByRole('listitem')).toBeHidden();
 	await page.getByRole('spinbutton').first().click();
 	await page.getByRole('spinbutton').first().fill('10');
 	await page.getByRole('textbox').click();
 	await page.getByRole('textbox').fill('/');
	 await page.getByRole('spinbutton').nth(1).click();
	 await page.getByRole('spinbutton').nth(1).fill('0');
 	await page.getByRole('button', { name: 'Calculate' }).click();
	 await expect(page.getByRole('listitem')).toBeVisible();
	 await expect(page.getByRole('listitem')).toContainText('The right operand cannot be 0');
 
})