# Portfólio de automação com TypeScript e Playwright

Projeto criado para praticar automação de testes end-to-end utilizando [Playwright](https://playwright.dev/) e TypeScript.

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) — versão 18 ou superior recomendada;
- npm, instalado junto com o Node.js;
- Git, caso queira clonar o repositório.

Para conferir as versões instaladas:

```bash
node --version
npm --version
```

## Instalação do projeto

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/alisonmelo/portifolio-automacao-com-typescript.git
cd portifolio-automacao-com-typescript
```

Instale os módulos do projeto:

```bash
npm install
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

> No Linux, se houver problemas com dependências dos navegadores, utilize `npx playwright install --with-deps`.

## Estrutura principal

- `tests/` — arquivos com os cenários de teste;
- `playwright.config.ts` — configuração do Playwright;
- `package.json` — dependências e comandos do projeto;
- `package-lock.json` — versões exatas das dependências instaladas.

Por padrão, os testes são buscados na pasta `tests/` e executados no navegador Chromium, conforme definido em `playwright.config.ts`.

## Execução dos testes

Execute todos os cenários em modo headless:

```bash
npx playwright test
```

Execute os testes com a interface visual do navegador:

```bash
npx playwright test --headed
```

Execute um arquivo específico:

```bash
npx playwright test tests/nome-do-arquivo.spec.ts
```

Execute apenas um teste pelo título:

```bash
npx playwright test -g "título do teste"
```

Execute os testes utilizando o projeto Chromium:

```bash
npx playwright test --project=chromium
```

## Relatório de testes

Após a execução, abra o relatório HTML com:

```bash
npx playwright show-report
```

## Depuração

Para executar os testes em modo de depuração:

```bash
npx playwright test --debug
```

Também é possível utilizar o modo de inspeção do Playwright:

```bash
npx playwright codegen https://exemplo.com
```

Substitua a URL pelo endereço da aplicação que deseja explorar.

## Criando um cenário de teste

Crie um arquivo com a extensão `.spec.ts` dentro da pasta `tests/`. Exemplo:

```typescript
import { test, expect } from '@playwright/test';

test('deve acessar a página inicial', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
```

Depois, execute o cenário com:

```bash
npx playwright test
```

## Boas práticas

- Utilize seletores estáveis, como `getByRole`, `getByText` e `getByTestId`;
- Mantenha cada cenário independente dos demais;
- Evite o uso de `waitForTimeout` sempre que possível;
- Use `expect` para validar os resultados esperados;
- Não salve informações sensíveis diretamente no código;
- Organize os cenários por funcionalidade dentro da pasta `tests/`.

## Comandos úteis

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências do projeto |
| `npx playwright install` | Instala os navegadores do Playwright |
| `npx playwright test` | Executa todos os testes |
| `npx playwright test --headed` | Executa os testes com o navegador visível |
| `npx playwright test --debug` | Executa os testes em modo de depuração |
| `npx playwright show-report` | Abre o relatório HTML |
| `npx playwright codegen <url>` | Gera código a partir da interação com uma página |
