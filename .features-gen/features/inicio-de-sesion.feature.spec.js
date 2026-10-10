// Generated from: features/inicio-de-sesion.feature
import { test } from "../../features/pasos.ts";

test.describe('Inicio de sesión', () => {

  test.beforeEach('Antecedentes', async ({ Given, login }, testInfo) => { if (testInfo.error) return;
    await Given('que estoy en la página de inicio de sesión', null, { login }); 
  });
  
  test('DWS-LOG-004 · credenciales válidas', async ({ When, Then, login, page }) => { 
    await When('ingreso con mi usuario', null, { login }); 
    await Then('veo el enlace "Log out"', null, { page }); 
  });

  test('DWS-LOG-005 · cerrar sesión', async ({ When, Then, And, login, page }) => { 
    await When('ingreso con mi usuario', null, { login }); 
    await And('cierro la sesión', null, { login }); 
    await Then('veo el enlace "Log in"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/inicio-de-sesion.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Dado que estoy en la página de inicio de sesión","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Cuando ingreso con mi usuario","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Entonces veo el enlace \"Log out\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Log out\"","children":[{"start":15,"value":"Log out","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Dado que estoy en la página de inicio de sesión","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"Cuando ingreso con mi usuario","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"Y cierro la sesión","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Entonces veo el enlace \"Log in\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Log in\"","children":[{"start":15,"value":"Log in","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end