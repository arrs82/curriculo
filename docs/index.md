# **Alessandro Roberto dos Reis Santos**

<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Exemplo de Imagem com Efeito de Órbita</title><style>.circle-mask{position:relative;width:350px;height:350px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:-80px;margin-top:-20px}.satelite{position:absolute;width:305px;height:305px;background-image:url(../assets/images/lupa.png);background-size:cover;border-radius:50%;animation:orbitSatelite 2s linear infinite;transform-origin:center center;animation-play-state:paused;top:35%;left:32%;transform:translate(-50%,-50%) rotate(90deg) translateX(50px) translateY(30%) rotate(-90deg);transition:transform 0.3s ease}.circle-mask:hover .satelite{animation-play-state:running}@keyframes orbitSatelite{0%{transform:translate(-50%,-50%) rotate(28deg) translateX(13px) translateY(9%) rotate(-34deg)}100%{transform:translate(-50%,-50%) rotate(388deg) translateX(13px) translateY(9%) rotate(-394deg)}}.circle-mask img{width:70%;height:70%;object-fit:cover;cursor:pointer}.circle-mask:hover img{transform:scale(1.1)}.apresentacao{position:absolute;width:255px;height:331px;background-image:url(../assets/images/apresentacao.png);background-size:cover;top:38%;left:29%;transform:translate(-50%,-50%);transition:transform 0.5s ease;z-index:-1}.circle-mask:hover .apresentacao{transform:translate(17%,-50%)}</style></head><body><div class="circle-mask"><img src="../assets/images/curriculo.png" alt="curriculo" style="transform: translateY(-21%) translateX(-27%);"><div class="satelite"></div><div class="apresentacao"></div></div></body></html>

=== "Apresentação Pessoal :material-human-male-board:"
    
    <p style="text-align: justify;">Olá, me chamo Alessandro Roberto, cristão, tenho 42 anos de idade, nascido, criado e residente em São José dos Campos/SP, morador da zona sul da cidade, filho único de uma mãe maravilhosa, divorciado, pai de duas filhas e avô de uma menina linda e abençoada.</p> 
    <p style="text-align: justify;">Minha primogênita chama-se Daiane e tem 25 anos, com formação em Direito e atuante na área, além de já ser casada com um excelente esposo, os quais já me proporcionaram ser avô de uma neta linda chamada Jade e que já tem 1 e meio de idade.</p> 
    <p style="text-align: justify;">Minha segunda filha que é a minha caçula de 6 aninhos, chama-se Lolla e ela tem 4 patinhas, uma buldoguinha francesa dócil, meiga e linda que todos os dias me traz muitas alegrias com a sua companhia.</p>

    ??? tip ":fontawesome-solid-people-roof: A minha inspiração :fontawesome-solid-photo-film:"
        <center>**FAMÍLIA**</center>
        ![Família](assets/images/alessandro/familia.png){width="100%"}
        
=== "Apresentação Profissional :material-human-male-board:"

    <p style="text-align: justify;">Bacharel em administração de empresas, técnico em redes de computadores e informática, técnico em mecânica industrial, profissional polivalente com amplo conhecimento e sólida experiência vivenciada em empresas e órgãos públicos governamentais, atuando em ambientes pedagógicos (docente de cursos técnicos em administração e logística), em departamentos administrativos e de tecnologia da informação , bem como detentor de experiências em indústrias dos ramos de processos de fabricação, em específico a departamentos de usinagem, ferramentaria, qualidade e geração de utilidades com ênfase na cadeia produtiva de empresas dos segmentos aeronáuticos, automotivos, farmacêuticos, médicos e de higiene pessoal da região metropolitana do Vale do Paraíba, em específico na cidade de São José dos Campos/SP.</p>

    ??? tip ":fontawesome-solid-user-tie: Profissional Polivalente :fontawesome-solid-photo-film:"
        ![Bagagem Profissional](assets/images/alessandro/apresentacao-profissional.png#centershadow){width="100%" .left-image align=center}

=== "Vídeo Apresentação :octicons-video-16:"

     <div style="text-align: center;">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/kVET2zMUfes" title="Vídeo Apresentação - Alessandro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    !!! info "Observações"
        :material-video-vintage: Vídeo apresentação gravada na data do dia de **24/11/2023**

        ---

        **Currículo Profissional**

        [www.alessandroroberto.com.br](https://www.alessandroroberto.com.br/){:target="_blank"}
        
=== "Meu Futuro :material-rocket-launch-outline:"

    <p style="text-align: justify;">Em minha vida pessoal almejo sim casar-me novamente com uma excelente mulher, deter muita saúde e disposição física, bem como deter condições financeiras de adquirir uma chácara em um local bacana para festas e confraternizações familiares e curtir muito a minha família.</p>
    
    <p style="text-align: justify;">Profissionalmente me projeto para daqui mais ou menos uns 6 anos, estar formado com a minha segunda graduação em Redes de Computadores juntamente com a minha pós-graduação em Segurança da Informação, estudar e aperfeiçoar-se em meu inglês e se Deus permitir, quem sabe estar atuando na área de TI em uma excelente empresa e continuar a aprender coisas novas e a estudar sempre, pois tudo que faço em minha vida, faço com muita paixão e afinco.</p>

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








