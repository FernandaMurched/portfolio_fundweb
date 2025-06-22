function createStars() {
  const container = document.body;

  for (let i = 0; i < 500; i++) {
    // 1000 pode deixar lento
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 1.5 + 0.5; // tamanhos entre 0.5px e 2px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    container.appendChild(star);
  }
}

createStars();

const sobre = document.querySelector("#about");

const formulario = document.querySelector("#formulario");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {
    // Enviar uma requesição HTTP para a API do GitHub
    const dadosPerfil = await fetch(
      `https://api.github.com/users/FernandaMurched`
    );

    // Converte a resposta HTTP para o formato JSON
    const perfil = await dadosPerfil.json();

    // Criação do conteúdo da Seção about
    let conteudo = `
    
            <!-- Imagem da seção Sobre -->
            <img src="${perfil.avatar_url}" alt="Imagem de perfil do GitHub - ${perfil.name}" />

            <!-- Texto da seção Sobre -->
            <article id="about_texto">
                <h2> Fernanda Murched </h2>
                <p>Minha jornada em tecnologia é movida pela paixão em criar.</p> 
                <p>Em formação pela Generation Brasil, sou Desenvolvedora Full Stack Java e estudante de Análise e Desenvolvimento de Sistemas e Pedagogia.</p> 
                <p>Meu propósito é criar tecnologia que faça a diferença na vida das pessoas.</p> 
                <p>Curioso(a) para ver meu trabalho? Acesse meu GitHub e veja meu código em ação!</p>            

            <!-- Botão GiHub -->
                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao"> GitHub </a>
                    <h4> ${perfil.followers} seguidores </h4>
                    <h4> ${perfil.public_repos} repositórios </h4>
                </div>
            </article>
    `;

    // Adicionar o conteúdo na página index.html
    sobre.innerHTML += conteudo;
  } catch (error) {
    console.error(error);
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome");

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres!";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail");

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido!";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoAssunto = document.querySelector("#assunto");
  const txtAssunto = document.querySelector("#txtAssunto");

  if (campoAssunto.value.length < 3) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 3 caracteres!";
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }

  // Enviar o e-mail

  formulario.submit();
});

getApiGithub();

