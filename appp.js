function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value


     if (campoPesquisa == "") {
  section.innerHTML = `<p class="mensagem-nao-encontrado">Este nome ainda não encontrou sua representação mítica no Acervo</p>`;
      return
     }

     campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento (deus/deusa) no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)
      
      )
      {

      
      // Cria o HTML para cada resultado, utilizando template literals
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link2}" target="blank">Confira mais informações</a>
        </div>
      `;
    }
  }
  
 if (!resultados) {
   resultados = `<p class="mensagem-nao-encontrado">Este nome ainda não encontrou sua representação mítica no Acervo</p>`;
 }

//     // Insere os resultados na seção HTML
    section.innerHTML = resultados;
  }
  