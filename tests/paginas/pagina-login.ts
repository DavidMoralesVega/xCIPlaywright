import { Locator, Page } from "@playwright/test";

export class PaginaLogin {
    readonly page: Page;
    readonly campoEmail: Locator;
    readonly campoClave: Locator;
    readonly botonEntrar: Locator;
    readonly mensajeError: Locator;
    readonly emailError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.campoEmail = page.getByLabel('Email:');
        this.campoClave = page.getByLabel('Password:');
        this.botonEntrar = page.getByRole('button', { name: 'Log in' });
        this.mensajeError = page.locator('.validation-summary-errors');
        this.emailError = page.locator('span[for="Email"]');
    }

    async abrir() {
        await this.page.goto('/login');
    }

    async ingresar(email: string, clave: string) {
        await this.campoEmail.fill(email);
        await this.campoClave.fill(clave);
        await this.botonEntrar.click();
    }
}