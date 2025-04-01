# Em Construção
#
# Gerenciamento de Posts - Frontend Angular
## Descrição
Este é o frontend de um sistema de gerenciamento de posts, desenvolvido com **Angular**, **Tailwind CSS** e **Auth0** para autenticação via **JWT**. O projeto visa fornecer uma interface responsiva e segura para criar, editar e visualizar posts.

## Tecnologias Utilizadas
- **Angular** (Framework frontend)
- **Auth0** (Autenticação com JWT e Guard)
- **Tailwind CSS** (Estilização rápida e responsiva)
- **TypeScript**

## Estrutura do Projeto
```
C:.
|   .editorconfig
|   .gitignore
|   .postcssrc.json
|   angular.json
|   package-lock.json
|   package.json
|   README.md
|   tsconfig.app.json
|   tsconfig.json
|   tsconfig.spec.json
|   
+---src
    |   index.html
    |   main.server.ts
    |   main.ts
    |   server.ts
    |   styles.css
    |   
    +---app
    |   |   app.component.css
    |   |   app.component.html
    |   |   app.component.spec.ts
    |   |   app.component.ts
    |   |   app.config.server.ts
    |   |   app.config.ts
    |   |   app.routes.ts
    |   |   auth.guard.spec.ts
    |   |   auth.guard.ts
    |   |   
    |   +---screens
    |   |   +---login
    |   |   |       login.component.css
    |   |   |       login.component.html
    |   |   |       login.component.spec.ts
    |   |   |       login.component.ts
    |   |   |       
    |   |   \---system
    |   |       \---main
    |   |               main.component.css
    |   |               main.component.html
    |   |               main.component.spec.ts
    |   |               main.component.ts
    |   |               
    |   \---services
    |           auth.service.spec.ts
    |           auth.service.ts
    |           
    \---styles
            tailwind.css
```

## Configuração e Instalação
1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. **Instale as dependências**:
   ```sh
   npm install
   ```
3. **Configuração do Auth0**:
   - Crie uma conta no [Auth0](https://auth0.com/)
   - Configure o **Client ID**, **Domain** e insira no `app.config.ts`.

4. **Inicie o servidor de desenvolvimento**:
   ```sh
   ng serve
   ```
5. **Acesse no navegador**:
   - `http://localhost:4200`

## Funcionalidades Principais
- 🔐 **Autenticação JWT** com Auth0
- 🛡️ **Guards** para proteger rotas
- 🎨 **Tailwind CSS** para estilos
- 📝 **Gerenciamento de posts** (CRUD)
- 📂 **Estrutura modularizada**

## Como Contribuir
1. Fork o repositório.
2. Crie uma branch:
   ```sh
   git checkout -b minha-feature
   ```
3. Commit suas modificações:
   ```sh
   git commit -m "Adicionando nova funcionalidade"
   ```
4. Envie para o repositório remoto:
   ```sh
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Melhorias Futuras
- 🔄 **Integração com API backend**
- 📱 **Responsividade aprimorada**
- 🌍 **Internacionalização (i18n)**

---
Desenvolvido com 💙 por [Seu Nome].

