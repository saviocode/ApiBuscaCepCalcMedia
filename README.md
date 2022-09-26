# Projeto Me Poupe
API Node.js com Docker

## Instruções para execução

1. Clonar o repositório

2. Baixar dependencias 
```
npm install
```
3. Rodar o container
```
docker run -p 7000:7000 -d mepoupe
```
4. Acessar os endpoints
```
POST http://localhost:7000/media
{
  "n1": 10,
  "n2": 5
}

GET http://localhost:7000/cep
{
 "cep":""
}
```
