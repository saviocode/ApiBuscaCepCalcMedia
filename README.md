# Projeto Me Poupe
API Node.js com Docker

## Instruções para execução

1. Clonar o repositório
2. Rodar o container
```
docker run -p 7000:7000 -d mepoupe
```
3. Acessar os endpoints
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
