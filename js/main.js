
document.addEventListener('DOMContentLoaded', function() {
    const autoresContainer = document.getElementById('autores-container');

    // Dados dos autores
    const autores = [
        {
            nome: "Jarbas Martins",
            imagem: "assets/img/jarbas.png",
            descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
            preco: "R$ 35,00"
        },
        {
            nome: "Adriana Regina Junkes Soares",
            imagem: "assets/img/escrita.png",
            descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
            preco: "R$ 180,00"
        },
        {
            nome: "José Marcelo Costa dos Santos, Luiz Gonzaga de Sousa Filho",
            imagem: "assets/img/delta.png",
            descricao: "Ao percorrer cada texto, o leitor poderá conferir diversos aspectos...",
            preco: "R$ 88,00"
        },
        {
            nome: "André Villaverde",
            imagem: "assets/img/remissivo.png",
            descricao: "Índice Remissivo de Legislação para Provas de Segunda Fase...",
            preco: "R$ 57,00"
        },
        {
            nome: "Eunira dos Santos",
            imagem: "assets/img/Assim.png",
            descricao: "Este livro não tem a pretensão de desmistificar o mistério Exu...",
            preco: "R$ 190,00"
        },
        {
            nome: "Luciane Abramo",
            imagem: "assets/img/mentalidade.png",
            descricao: "Vivemos em uma das fases mais delicadas da humanidade...",
            preco: "R$ 290,00"
        }
        // Adicione mais autores conforme necessário
    ];

    // Função para criar um card de autor
    function criarCardAutor(autor) {
        // Criar os elementos
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 col-md-4 col-lg-4 mb-4 mt-5';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style.width = '18rem';
        cardDiv.style.overflow = 'auto';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = autor.imagem;
        img.alt = autor.nome;

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = autor.nome;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = autor.descricao + '<br><br>' + autor.preco;

        // Montar o card
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        colDiv.appendChild(cardDiv);

        return colDiv;
    }

    // Adicionar os cards ao container
    autores.forEach(autor => {
        const cardElement = criarCardAutor(autor);
        autoresContainer.appendChild(cardElement);
    });
    
    //botão de pesquisa
    document.querySelector('.btn-outline-light').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        realizarPesquisa();
    });
    
    document.querySelector('.form-control').addEventListener('input', function() {
        var termoPesquisa = this.value.trim();
        if (termoPesquisa) {
            realizarPesquisa();
        } else {
            restaurarConteudoOriginal();
        }
    });
    
    function realizarPesquisa() {
        var termoPesquisa = document.querySelector('.form-control').value.toLowerCase().trim();
        var containerAutores = document.querySelector('#autores-container');
        var todosOsAutores = containerAutores.querySelectorAll('.card');
        var containerResultados = document.querySelector('#resultado-pesquisa');
    
        containerAutores.style.display = termoPesquisa ? 'none' : 'block';
        containerResultados.innerHTML = '';
    
        if (termoPesquisa) {
            todosOsAutores.forEach(function(autor) {
                if (autor.textContent.toLowerCase().includes(termoPesquisa)) {
                    containerResultados.appendChild(autor.cloneNode(true));
                }
            });
    
            if (containerResultados.innerHTML === '') {
                containerResultados.innerHTML = '<p>Nenhum resultado encontrado.</p>';
            }
        }
    }
    
    function restaurarConteudoOriginal() {
        var containerAutores = document.querySelector('#autores-container');
        var containerResultados = document.querySelector('#resultado-pesquisa');
    
        containerAutores.style.display = 'block';
        containerResultados.innerHTML = '';
    }
    
    
    
    

});
