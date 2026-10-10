
import { createBdd, test as base } from 'playwright-bdd';
import { PaginaLogin } from '../tests/paginas/pagina-login';
import { usuario } from '../tests/datos';
import { expect } from '@playwright/test';

export const test = base.extend<{ login: PaginaLogin }>({
    login: async ({ page }, use) => {
        await use(new PaginaLogin(page));
    }
});

const { Given, When, Then } = createBdd(test);

Given('que estoy en la página de inicio de sesión', async ({ login }) => {
    await login.abrir();
})

When('ingreso con mi usuario', async ({ login }) => {
    await login.ingresar(usuario.email, usuario.clave);
})

When('cierro la sesión', async ({ login }) => {
    await login.enlaceSalir.click();
})

Then('veo el enlace {string}', async ({page}, nombre: string) => {
    await expect(page.getByRole('link', { name: nombre, exact: true })).toBeVisible();
})