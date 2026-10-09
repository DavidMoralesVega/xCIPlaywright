import { test, expect } from "@playwright/test"
import { usuario } from "./datos";
import { PaginaLogin } from "./paginas/pagina-login";

test.describe('Pruebas de inicio de sesión', () => {

    let login: PaginaLogin;

    test.beforeEach(async ({ page }) => {
        login = new PaginaLogin(page);
        await login.abrir();
    });

    // DWS-LOG-001 Contraseña incorrecta
    test('DWS-LOG-001 Contraseña incorrecta', async () => {
        await login.ingresar(usuario.email, usuario.clave);
        await expect(login.mensajeError).toContainText("Login was unsuccessful.")
    });

    // DWS-LOG-002 Campos vacios
    test('DWS-LOG-002 Campos vacios', async () => {
        await login.ingresar("", "");
        await expect(login.mensajeError).toContainText("No customer account found")
    });

    // DWS-LOG-003 Email formato incorrecto
    test('DWS-LOG-003 Email formato incorrecto', async () => {
        await login.ingresar("correo_incorrecto", "");
        await expect(login.mensajeError).toContainText("Please enter a valid email address.")
    });



})