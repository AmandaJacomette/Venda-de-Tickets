<h1 align="center">🎟️ Tickets Sales — Sistema de Vendas de Ingressos</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.2-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Java-17-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Vite-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Arquitetura-Microsserviços-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge" />
</p>

---

## 📚 Sobre o Projeto

Este repositório contém o sistema **Tickets Sales**, desenvolvido para a disciplina:

**CSI607 — Sistemas Web II**  
**Período Letivo 2025/2**  
**Prof. Fernando Bernardes de Oliveira, Ph.D**

O sistema adota uma **arquitetura de microsserviços**, composta por:

- 🧩 **Microsserviço Sales** — responsável pela gestão de eventos e vendas de ingressos
- 🌐 **API Gateway** — responsável pelo roteamento, CORS e ponto único de acesso
- 🖥️ **Interface Web Administrativa** — desenvolvida em React.js

---

## 🧱 Arquitetura do Sistema

```text
[ Frontend React ]
        |
        v
[ API Gateway ]
        |
        v
[ Microsserviço Sales ]
```

🔒 **O frontend não acessa os microsserviços diretamente**  
🌍 **Toda comunicação ocorre exclusivamente via Gateway**

---

## 🚀 Tecnologias Utilizadas

### Backend
- 🌱 Spring Boot 3  
- ☕ Java 17  
- 🗄️ Spring Data JPA  
- 🌐 Spring Web  
- ⚡ Lombok  

### Gateway
- 🌐 Spring Cloud Gateway (WebFlux)  
- 🔀 Roteamento de requisições  
- 🔐 Configuração centralizada de CORS  

### Frontend
- ⚛️ React.js  
- ⚡ Vite  
- 🌐 Axios  
- 🎨 CSS básico / componentes estilizados  

---

## 🌐 API Gateway

O **API Gateway** atua como ponto único de entrada do sistema, sendo responsável por:

✔ Roteamento para o microsserviço Sales  
✔ Centralização da configuração de CORS  
✔ Isolamento dos microsserviços  
✔ Comunicação segura com o frontend  

### 🔌 Portas Utilizadas

| Serviço | Porta |
|-------|------|
| Frontend (React) | 5173 |
| API Gateway | 3000 |
| Microsserviço Sales | 5000 |

📌 O frontend realiza chamadas **somente para o Gateway**.

---

## 🧩 Microsserviço Sales — Funcionalidades

### 🎫 Eventos
✔ Criar evento  
✔ Listar eventos  
✔ Atualizar evento  
✔ Excluir evento  

Cada evento possui:
- Descrição  
- Tipo do evento  
- Data do evento  
- Preço  

#### Tipos de Evento (mapeamento numérico)

| Tipo | Valor |
|-----|------|
| Teste | 0 |
| Show | 1 |
| Palestra | 2 |
| Teatro | 3 |

---

### 💳 Vendas de Ingressos
✔ Registrar venda  
✔ Listar vendas  
✔ Atualizar status da venda  

Status possíveis:
- `EM_ABERTO`  
- `PAGO`  
- `CANCELADO`  
- `ESTORNADO`  

---

## 🖥️ Interface Web Administrativa (React)

A interface web permite a administração completa do sistema, comunicando-se exclusivamente com o **API Gateway**.

### Telas Implementadas
✔ Cadastro de Eventos  
✔ Listagem de Vendas  
✔ Cadastro de Venda de Ingresso  
✔ Alteração de Status da Venda  
