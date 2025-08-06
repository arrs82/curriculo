# **Alessandro Roberto dos Reis Santos**

<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>.circle-mask{position:relative;width:350px;height:350px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:-110px;margin-top:-20px}.satelite{position:absolute;width:305px;height:305px;background-image:url(../assets/images/lupa.png);background-size:cover;border-radius:50%;animation:orbitSatelite 2s linear infinite;transform-origin:center center;animation-play-state:paused;top:35%;left:32%;transform:translate(-50%,-50%) rotate(90deg) translateX(50px) translateY(30%) rotate(-90deg);transition:transform 0.3s ease}.circle-mask:hover .satelite{animation-play-state:running}@keyframes orbitSatelite{0%{transform:translate(-50%,-50%) rotate(28deg) translateX(13px) translateY(9%) rotate(-34deg)}100%{transform:translate(-50%,-50%) rotate(388deg) translateX(13px) translateY(9%) rotate(-394deg)}}.circle-mask img{width:70%;height:70%;object-fit:cover;cursor:pointer}.circle-mask:hover img{transform:scale(1.1)}.apresentacao{position:absolute;width:255px;height:331px;background-image:url(../assets/images/sobre.png);background-size:cover;top:38%;left:29%;transform:translate(-50%,-50%);transition:transform 0.5s ease;z-index:-1}.circle-mask:hover .apresentacao{transform:translate(17%,-50%)}</style></head><body><div class="circle-mask"><img src="../assets/images/curriculo.png" alt="curriculo" style="transform: translateY(-21%) translateX(-27%);"><div class="satelite"></div><div class="apresentacao"></div></div></body></html>

## **Sobre o projeto**

<p style="text-align: justify;">
  Este <strong>currículo profissional</strong> é desenvolvido e atualizado com frequência por mim mesmo em ambiente de programação, utilizando linguagens <em>Markdown</em>, <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em>, fazendo o uso do <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank"><em>MkDocs Material Theme</em></a> juntamente com os repositórios do <a href="https://github.com" target="_blank"><em>GitHub</em></a>.
</p>

<div class="image-hover-stack">
  <img src="../assets/images/material-for-mkdocs-01.png" alt="Imagem base" title="Material for MkDocs">
  <img src="../assets/images/material-for-mkdocs-02.png" alt="Imagem hover">
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.image-hover-stack').forEach(stack => {
      stack.addEventListener('touchstart', () => {
        stack.classList.add('touching');
      });
      stack.addEventListener('touchend', () => {
        stack.classList.remove('touching');
      });
      stack.addEventListener('touchcancel', () => {
        stack.classList.remove('touching');
      });
    });
  });
</script>

## **Créditos do template inicial**

[fconhkd/mkdocs-material-template](https://github.com/fconhkd/mkdocs-material-template){:target="_blank"}

## **Agradecimentos**

<style>
  @media (max-width: 768px) {
    .flex-container {
      flex-direction: column;
      align-items: center;
    }
    .flex-container img {
      margin: 20px auto 0 auto;
      width: 90% !important;
      display: block;
    }
  }
</style>

<div class="flex-container" style="display: flex; align-items: flex-start; gap: 20px; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;">
    <p style="text-align: justify;">
      Primeiramente agradeço a Deus por me dar saúde física e por me capacitar com toda a sua sabedoria, para que eu conseguisse realizar e alcançar o escopo deste projeto, que sem sombra de dúvidas, talvez este tenha sido um dos mais desafiadores que me deparei até hoje.
    </p>
    <p style="text-align: justify;">
      Em segundo lugar, além da gratidão, tenho apreço e muita admiração por um ex-colega de trabalho, Fabiano Conrado, profissional extremamente inteligente e disciplinado para com tudo relacionado à Tecnologia da Informação, o qual se predispôs a me ensinar um pouco sobre <em>Dev</em>, em específico às linguagens de programação <em>Markdown</em> inserida nos repositórios do <a href="https://github.com" target="_blank"><em>GitHub</em></a>, mas pouco este que me foi e é de extrema importância e de imensa relevância para que eu conseguisse alcançar meu objetivo e intento neste projeto.
    </p>
  </div>
  <img src="../assets/images/fundo-sobre.png" alt="Imagem" style="width: 400px; height: auto; border-radius: 10px;">
</div>

<!-- Ícone Whatsapp. -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Estilos para o ícone do WhatsApp */
        .whatsapp-icon {
            position: fixed;
            bottom: -15px; /* Posiciona para baixo */
            right: -5px;
            /* Largura e altura da imagem */
            width: 80px; /* Ajuste conforme necessário */
            height: auto; /* Ajuste conforme necessário */
        }

        /* Animação de tremor para o ícone */
        @keyframes shake {
            0% { transform: translateY(0); }
            25% { transform: translateY(-3px); }
            50% { transform: translateY(0); }
            75% { transform: translateY(3px); }
            100% { transform: translateY(0); }
        }

        /* Aplicando a animação ao ícone */
        .shake {
            animation: shake 0.2s infinite; /* Reduzido para 0.2s para tornar o tremor mais rápido */
        }
    </style>
</head>
<body>
    <!-- Ícone do WhatsApp como imagem PNG -->
    <a href="https://api.whatsapp.com/send?phone=12988678750" target="_blank" class="whatsapp-icon">
        <img src="../assets/images/whatsapp-icone.png" alt="Ícone do WhatsApp" id="whatsapp-image">
    </a>

    <script>
        var image = document.getElementById('whatsapp-image');
        var isShaking = false;

        setInterval(function() {
            if (!isShaking) {
                image.classList.add('shake');
                isShaking = true;
                setTimeout(function() {
                    image.classList.remove('shake');
                    isShaking = false;
                }, 2000); // Tremer por 2 segundos
            }
        }, 7000); // 7 segundos (2 segundos de tremor + 5 segundos de pausa)
    </script>
</body>
</html>