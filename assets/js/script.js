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
                <h2> Sobre mim </h2>
                <h3>
                    Eu sou a Fernanda Murched, desenvolvedora Full Stack Java em formação pela Generation Brasil. Também sou estudante de Análise e Desenvolvimento de Sistemas e Pedagogia. Ah, também estou no espectro autista!
                    <br><br>
                    Essa combinação única me trouxe até a tecnologia com um olhar criativo, empatia aguçada e o propósito claro de resolver problemas reais. Acredito no poder do código para transformar o mundo, e amo criar interfaces que sejam ao mesmo tempo acessíveis, funcionais e humanas.
                    <br><br>
                    Meu objetivo é desenvolver soluções que comuniquem, ensinem e incluam. Acredito que tecnologia só faz sentido se transformar a vida das pessoas.
                    <br><br>
                    Quer ver meu código na prática? Dá uma olhada no meu GitHub!
                    <br><br>
                </h3>

            <!-- Botão GiHub -->
                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao"> GitHub </a>
                    <h4> ${perfil.followers} seguidores </h4>
                    <h4> ${perfil.public_repos} repositórios </h4>
                </div>
            </article>
    `

    // Adicionar o conteúdo na página index.html
    sobre.innerHTML += conteudo
  } catch (error) {
    console.error(error)
  }
}

formulario.addEventListener("submit", function(event) {
  event.preventDefault()

  const campoNome = document.querySelector("#nome")
  const txtNome = document.querySelector("#txtNome")

  if (campoNome.value.lenght < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres!"
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = ""
  }

  const campoEmail = document.querySelector("#email")
  const txtEmail = document.querySelector("#txtEmail")

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido!"
    campoEmail.focus()
    return;
  } else {
    txtEmail.innerHTML = ""
  }

  const campoAssunto = document.querySelector("#assunto")
  const txtAssunto = document.querySelector("#txtAssunto")

  if (campoAssunto.value.match < 3) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 3 caracteres!";
    campoAssunto.focus()
    return
  } else {
    txtAssunto.innerHTML = ""
  }

  // Enviar o e-mail

  formulario.submit()
})

getApiGithub()
