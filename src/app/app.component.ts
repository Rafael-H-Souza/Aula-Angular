import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `

  <body>
  
    <header>
         <h1>Minha Página de Atividades</h1>
         <!--<h1 class="title" >Bem Vindo {{title}}!</h1>-->
      </header>

      <main>
          <section class="titulo">
              <h2>Lista de Atividades</h2>
          </section>

          <ul>
              <li>Atividade 1: Estudar HTML e CSS</li>
              <li>Atividade 2: Criar uma página de teste</li>
              <li>Atividade 3: Ler sobre JavaScript</li>
              <li>Atividade 4: Trabalhar no projeto Angular</li>
          </ul>

          <!--<button class="botao">Adicionar Atividade</button>-->
      </main>

  </body>

    
  `,
  styles: [`

     body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
        }

        main {
            padding: 20px;
        }

        .titulo {
            font-size: 2em;
            margin-bottom: 20px;
            color: #333;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #fff;
            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        li:hover {
            background-color: #e0f7e0;
        }

        .botao {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .botao:hover {
            background-color: #45a049;
        }
   ` 
  ],
})
export class AppComponent {
  title = 'my-first-app';
}
