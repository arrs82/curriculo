// Aguarda o documento estar completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function() {

    // Função para detectar se é um dispositivo móvel
    function isMobile() {
        return ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
               (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    // Apenas executa este bloco se o dispositivo for um celular
    if (isMobile()) {
        const tecladoMobile = document.getElementById('teclado-mobile');
        if (tecladoMobile) {
            tecladoMobile.style.display = 'flex';
        }

        // Tenta conectar os botões com um pequeno atraso, e se falhar, tenta de novo.
        function connectTouchButtons() {
            if (typeof Javatari === 'undefined' || !Javatari.initialized) {
                setTimeout(connectTouchButtons, 100);
                return;
            }

            // Mapear os eventos do teclado virtual para as teclas comuns
            const botoesTeclado = document.querySelectorAll('.botao-teclado');
            botoesTeclado.forEach(function(botao) {
                const key = botao.getAttribute('data-key');
                if (key) {
                    botao.addEventListener('touchstart', function(event) {
                        event.preventDefault();
                        Javatari.press(key);
                    });
                    botao.addEventListener('touchend', function(event) {
                        event.preventDefault();
                        Javatari.release(key);
                    });
                }
            });

            // 1. Lógica para o botão de 'Game Reset'
            const resetButtonTouch = document.getElementById('game-reset-touch');
            if (resetButtonTouch) {
                resetButtonTouch.addEventListener('touchstart', function(event) {
                    event.preventDefault();
                    // A função 'reset' existe no seu arquivo javatari.js e é a correta
                    Javatari.reset();
                    console.log('Botão Game Reset tocado.');
                });
            }

            // 2. Lógica para o botão de 'Game Select'
            const selectButtonTouch = document.getElementById('game-select-touch');
            const romList = document.getElementById('rom-list');

            if (selectButtonTouch && romList) {
                selectButtonTouch.addEventListener('touchstart', function(event) {
                    event.preventDefault();
                    // Como não existe uma função 'gameSelect', vamos selecionar a próxima ROM na lista
                    let currentIndex = romList.selectedIndex;
                    let nextIndex = (currentIndex + 1) % romList.options.length;
                    romList.selectedIndex = nextIndex;

                    // Simula um clique no botão de "Carregar" para iniciar a nova ROM
                    const loadButton = document.getElementById('load');
                    if (loadButton) {
                        loadButton.click();
                        console.log('Botão Game Select tocado, próxima ROM selecionada e carregada.');
                    }
                });
            }

            // Adiciona o evento de toque ao botão de "Carregar"
            const loadButton = document.getElementById('load');
            if (loadButton) {
                loadButton.addEventListener('touchstart', function(event) {
                    event.preventDefault();
                    loadButton.click();
                });
            }

            console.log('Botões de toque conectados com sucesso.');
        }

        connectTouchButtons();
    }
});