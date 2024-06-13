# **Alessandro Roberto dos Reis Santos**

<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Exemplo de Imagem com Efeito de Órbita</title><style>.circle-mask{position:relative;width:350px;height:350px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:-110px;margin-top:-20px}.satelite{position:absolute;width:305px;height:305px;background-image:url(../assets/images/lupa.png);background-size:cover;border-radius:50%;animation:orbitSatelite 2s linear infinite;transform-origin:center center;animation-play-state:paused;top:35%;left:32%;transform:translate(-50%,-50%) rotate(90deg) translateX(50px) translateY(30%) rotate(-90deg);transition:transform 0.3s ease}.circle-mask:hover .satelite{animation-play-state:running}@keyframes orbitSatelite{0%{transform:translate(-50%,-50%) rotate(28deg) translateX(13px) translateY(9%) rotate(-34deg)}100%{transform:translate(-50%,-50%) rotate(388deg) translateX(13px) translateY(9%) rotate(-394deg)}}.circle-mask img{width:70%;height:70%;object-fit:cover;cursor:pointer}.circle-mask:hover img{transform:scale(1.1)}.apresentacao{position:absolute;width:255px;height:331px;background-image:url(../assets/images/seminarios-motivacionais.png);background-size:cover;top:38%;left:29%;transform:translate(-50%,-50%);transition:transform 0.5s ease;z-index:-1}.circle-mask:hover .apresentacao{transform:translate(17%,-50%)}</style></head><body><div class="circle-mask"><img src="../assets/images/curriculo.png" alt="curriculo" style="transform: translateY(-21%) translateX(-27%);"><div class="satelite"></div><div class="apresentacao"></div></div></body></html>

## **Introdução**

<p style="text-align: justify;">Seminários motivacionais com o palestrante <a href="https://alfredorocha.com.br/" target="_blank">Alfredo Rocha</a>, excelente profissional e um ser humano maravilhoso e simples, sendo este riquíssimo conteúdo meramente para cunho didático e apenas para conhecimentos aqui em meu currículo a quem interessar, com treinamentos difundidos para empresas e profissionais diversos, que inclusive já tive o prazer de estar pessoalmente em um desses seminários e com o próprio palestrante, pois o mesmo foi de grande valia para a minha vida pessoal, para o meu currículo e principalmente para a minha carreira profissional.</p>
---
## **Seminários Motivacionais**
**Motivando Todos para a Missão**
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/O9LZGAn3DBk" title="MOTIVANDO TODOS PARA A MISSÃO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
---
**Motivando Todos para as Mudanças**
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/36iOu9u-2Yo" title="MOTIVANDO TODOS PARA AS MUDANÇAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
---
**Motivando Todos para a Qualidade**
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/iZ755NZ3VLc" title="MOTIVANDO TODOS PARA A QUALIDADE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
---
??? note Success ":octicons-mortar-board-16: Seminário ONDEC - Motivando Todos para os Novos Desafios"
    > :material-book-education-outline: Início: 05/2011 :fontawesome-solid-flag-checkered: Conclusão: 05/2011

    ![SENAI](assets/images/ondec.png){width="27%"}

    [https://alfredorocha.com.br](https://alfredorocha.com.br/){:target="_blank"}

    **Certificado de seminário:** [:fontawesome-regular-file-pdf: Download](documentos/pdf/CERTIFICADO-MOTIVANDO-TODOS-PARA-OS-NOVOS-DESAFIOS.pdf){:download="CERTIFICADO-MOTIVANDO-TODOS-PARA-OS-NOVOS-DESAFIOS.pdf"}

    **Carga horária:** 2 horas e 15 minutos
  
    ---
    <div class="image-with-text">
    <img src="/assets/images/eu-ar.png" alt="Eu e o Alfredo Rocha" class="custom-image">
    <div class="text-right">
        Seminário **"Motivando Todos para os Novos Desafios"** na cidade de São José dos Campos - SP na data do dia **28 de Maio de 2011**.
    </div>
    </div>
    
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