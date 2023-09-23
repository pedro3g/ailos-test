# Onboarding Cooperado

Projeto referente ao "Desafio Angular" da Ailos

### Pré-requisitos

- Docker (modo de execução simplificado)
- Node >= 16 (modo de execução manual)
- PNPM (modo de execução manual)

### Execução simplificada

1. Crie a imagem do projeto

```
docker build -t onboarding-cooperado .
```

2. Execute a imagem

```
docker run -p 5000:5000 onboarding-cooperado
```

Após isso o projeto estará acessível em `http://localhost:5000`

### Execução manual

1. Tenha o `pnpm` e `serve` instalados com o comando

```
npm i -g pnpm serve
```

2. Instale as dependências

```
pnpm install
```

3. Faça a build do projeto

```
pnpm build
```

4. Execute o projeto

```
serve dist/onboarding-cooperado -l 5000
```

Após isso o projeto estará acessível em `http://localhost:5000`
