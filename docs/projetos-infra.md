# **Alessandro Roberto dos Reis Santos**

<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Exemplo de Imagem com Efeito de Órbita</title><style>.circle-mask{position:relative;width:350px;height:350px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:-110px;margin-top:-20px}.satelite{position:absolute;width:305px;height:305px;background-image:url(../assets/images/lupa.png);background-size:cover;border-radius:50%;animation:orbitSatelite 2s linear infinite;transform-origin:center center;animation-play-state:paused;top:35%;left:32%;transform:translate(-50%,-50%) rotate(90deg) translateX(50px) translateY(30%) rotate(-90deg);transition:transform 0.3s ease}.circle-mask:hover .satelite{animation-play-state:running}@keyframes orbitSatelite{0%{transform:translate(-50%,-50%) rotate(28deg) translateX(13px) translateY(9%) rotate(-34deg)}100%{transform:translate(-50%,-50%) rotate(388deg) translateX(13px) translateY(9%) rotate(-394deg)}}.circle-mask img{width:70%;height:70%;object-fit:cover;cursor:pointer}.circle-mask:hover img{transform:scale(1.1)}.apresentacao{position:absolute;width:255px;height:331px;background-image:url(../assets/images/projetos-de-infraestrutura.png);background-size:cover;top:38%;left:29%;transform:translate(-50%,-50%);transition:transform 0.5s ease;z-index:-1}.circle-mask:hover .apresentacao{transform:translate(17%,-50%)}</style></head><body><div class="circle-mask"><img src="../assets/images/curriculo.png" alt="curriculo" style="transform: translateY(-21%) translateX(-27%);"><div class="satelite"></div><div class="apresentacao"></div></div></body></html>

## **Introdução**

Projetos de infraestrutura desenvolvidos em ambientes acadêmico e doméstico (pós-curso).

---

## **Projetos de Infraestrutura**

??? note Example ":fontawesome-solid-network-wired: Implementação de um Ambiente Seguro em Redes de Compoutadores"
    **TCC:** [:simple-youtube: YouTube](https://youtu.be/Lh4tBYPhngE?list=PLD1Y6l4XaYY3Aj6yvVVlRGzEYZUEO981I){:target="_blank"}
    
    ---
    <div style="text-align: center;">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/Lh4tBYPhngE?list=PLD1Y6l4XaYY3Aj6yvVVlRGzEYZUEO981I" title="TRABALHO DE CONCLUSÃO DE CURSO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

??? note Example ":fontawesome-solid-network-wired: Projeto de Planejamento de Infraestrutura"
    **Projeto:** [:simple-youtube: YouTube](https://youtu.be/ezZMislsSBY?list=PLD1Y6l4XaYY3Aj6yvVVlRGzEYZUEO981I){:target="_blank"}

    ---
    <div style="text-align: center;">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/ezZMislsSBY?list=PLD1Y6l4XaYY3Aj6yvVVlRGzEYZUEO981I" title="PROJETO DE PLANEJAMENTO DE INFRAESTRUTURA DE REDES" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

??? note Example ":fontawesome-solid-network-wired: Projeto Proxmox doméstico!"
    ![pfSense](assets/images/proxmox.png){width="28%"}

    ---
    * Projeto **_Proxmox_** já implementado!
    * Realização da documentação no formato [_MkDocs_](https://squidfunk.github.io/mkdocs-material/){:target="_blank"} no ambiente e site [_GitHub_](https://github.com/){:target="_blank"} (Em andamento).
    * Perfil :simple-github:: [arrs82](https://github.com/arrs82){:target="_blank"}
    * Perfil :fontawesome-brands-youtube:: [@aleha.santos](https://www.youtube.com/@aleha.santos){:target="_blank"}

??? note Example ":fontawesome-solid-network-wired: Projeto PfSense Firewall doméstico!"
    ![pfSense](assets/images/pfsense.png){width="20%"}

    ---
    * Projeto **_PfSense Firewall_** já implementado!
    * Realização da documentação no formato [_MkDocs Material Theme_](https://squidfunk.github.io/mkdocs-material/){:target="_blank"} no ambiente e site [_GitHub_](https://github.com/){:target="_blank"} (Em andamento).
    * Perfil :simple-github:: [arrs82](https://github.com/arrs82){:target="_blank"}
    * Perfil :fontawesome-brands-youtube:: [@aleha.santos](https://www.youtube.com/@aleha.santos){:target="_blank"}

??? note Example ":fontawesome-solid-network-wired: Projeto Streaming Pessoal doméstico!"
    ![Plex Server](assets/images/plex.png){width="12%"}

    ---
    * Projeto **_Plex-Server_** já implementado!
    * Realização da documentação no formato [_MkDocs Material Theme_](https://squidfunk.github.io/mkdocs-material/){:target="_blank"} no ambiente e site [_GitHub_](https://github.com/){:target="_blank"} (Em andamento).
    * Perfil :simple-github:: [arrs82](https://github.com/arrs82){:target="_blank"}
    * Perfil :fontawesome-brands-youtube:: [@aleha.santos](https://www.youtube.com/@aleha.santos){:target="_blank"}

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ícone do WhatsApp</title>
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