# 🍽️ API Cardápio Digital - Restaurante Delivery

Esta é uma **API RESTful simples e estática**, desenvolvida em **Node.js com Express**, voltada para serviços de **restaurante e delivery**.

> **A aplicação possui dois endpoints principais**:
- `/status` → Verifica se a API está online.
- `/cardapio_digital` → Retorna um cardápio fixo com pratos e preços.

> **Infraestrutura como código**:
- Provisionamento via **Terraform** (AWS EC2, VPC, Security Groups, etc).
- Deploy automatizado com **Ansible**.

---

## 🚀 Endpoints

### `GET /status`
Retorna o status de saúde da API.

#### Exemplo de Resposta:
```json
{
  "status": "online",
  "message": "API de Restaurante funcionando normalmente."
}
```

### `GET /cardapio_digital`
Retorna um cardápio estático com itens disponíveis para delivery.

### Exemplo de Resposta:
```json
{
    "id_item": "PRATO001",
    "nome_prato": "Hamburguer Clássico da Casa",
    "descricao": "Pão artesanal, blend de carnes 180g, queijo cheddar, alface, tomate e molho especial.",
    "preco": 32.50,
    "categoria": "Hamburgueres",
    "imagem_url": "hamburguer_classico.jpg",
    "disponivel_delivery": true
  },
```
---

## 🛠️ Tecnologias Utilizadas

| Camada         | Ferramenta        | Descrição                                                             |
|----------------|-------------------|-----------------------------------------------------------------------|
| Backend        | Node.js + Express | Criação da API                                                        |
| Infraestrutura | Terraform         | Provisionamento da AWS (EC2, VPC, Subnet, Security Group, etc)       |
| Deploy         | Ansible           | Instalação automática de Node.js, Git, clonagem e inicialização da API |
---

## 🧪  Instruções para execução Local

### 1°. Clone o repositório

```bash
git clone https://github.com/yNotrya/api-cardapio.git
cd api-cardapio
```

### 2°. Instanle as dependências

```bash
npm install
```

### 3°. Inicie a aplicação
```bash
npm start
```

### 4°. Acesse os endpoints via navegador ou Postman:

- http://localhost:3000/status

- http://localhost:3000/cardapio_digital
---

## 🌐 Execução na AWS

Para execução dentro da AWS inicialmente se torna necessário a criação de um usuário para que o terraform consiga se conectar e realizar a criação de toda a infraestrutura do projeto, sobre a criação, pode ser seguido conforme segue: https://dev.to/aws-builders/connecting-aws-with-terraform-a-short-guide-4bda

O usuário estando criado e conectado localmente no AWSCLI basta seguir os passos a baixo:

### Provisionamento da infraestrutura com o Terraform
```bash
cd infra
terraform init
terraform apply
```

Cria a VPC, Subnet pública, Security Group, Par de Chaves e instância EC2 com IP público.

### Deploy com Ansible
```bash
ansible-playbook -i inventory.ini playbook.yml
```
Instala Node.js via NVM, Git, clona o repositório, instala dependências e sobe a API.


 ## 👥 Autores

 - [Djonatan Rodrigues de Oliveira](https://github.com/DjhonyOliveira)
 - [Ayrton Klettenberg](https://github.com/yNotrya)