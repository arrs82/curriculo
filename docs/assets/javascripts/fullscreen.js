document.addEventListener("DOMContentLoaded", function() {
    const iframeWrapper = document.getElementById("z-anatomy-wrapper");
    const iframe = document.getElementById("z-anatomy-iframe");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const body = document.body; 
    // Elemento HTML para Fullscreen de Documento (opção mais agressiva no Mobile)
    const htmlElement = document.documentElement; 

    if (!iframeWrapper || !iframe || !fullscreenBtn) {
        console.error("Elementos necessários não foram encontrados.");
        return; 
    }

    function isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    // Funções de controle de tela cheia simulada
    function exitSimulatedFullscreen() {
        iframeWrapper.classList.remove("fullscreen-wrapper");
        body.classList.remove("fullscreen-active-scroll-lock");
    }

    function enterSimulatedFullscreen() {
        iframeWrapper.classList.add("fullscreen-wrapper");
        body.classList.add("fullscreen-active-scroll-lock");
    }

    // --- Tratamento para saída/entrada do Fullscreen Nativo ---
    document.addEventListener('fullscreenchange', function (event) {
        if (!document.fullscreenElement) {
            // Saiu do fullscreen nativo: remove a classe simulada se estiver ativa
            // Isso garante que o estado volte ao normal se o usuário apertar ESC.
            if (iframeWrapper.classList.contains("fullscreen-wrapper")) {
                exitSimulatedFullscreen();
            }
        }
    });

    // --- Listener do Botão ---
    fullscreenBtn.addEventListener("click", function() {
        const isSimulatedFullscreen = iframeWrapper.classList.contains("fullscreen-wrapper");
        const isNativeFullscreen = document.fullscreenElement;
        
        // 1. LÓGICA DE SAÍDA (TOGGLE)
        if (isSimulatedFullscreen || isNativeFullscreen) {
            if (isNativeFullscreen) {
                // Sair do nativo (documento, iframe ou wrapper)
                document.exitFullscreen();
            } else if (isSimulatedFullscreen) {
                // Sair do simulado
                exitSimulatedFullscreen();
            }
            return;
        }
        
        // 2. LÓGICA DE ENTRADA

        if (!isMobile()) {
            // DESKTOP: Tenta Fullscreen nativo no IFRAME (o que já funciona)
            const requestFullscreen = iframe.requestFullscreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullscreen || iframe.msRequestFullscreen;

            if (requestFullscreen) {
                requestFullscreen.call(iframe).catch(() => {
                    // Falha (apenas como fallback no desktop)
                    enterSimulatedFullscreen();
                });
            } else {
                enterSimulatedFullscreen();
            }
        } else {
            // MOBILE: Tenta Fullscreen nativo no DOCUMENTO (abordagem mais provável de funcionar)
            const requestFullscreen = htmlElement.requestFullscreen || htmlElement.mozRequestFullScreen || htmlElement.webkitRequestFullscreen || htmlElement.msRequestFullscreen;

            if (requestFullscreen) {
                requestFullscreen.call(htmlElement).catch(() => {
                    // Falha no nativo: usa a simulação CSS
                    enterSimulatedFullscreen();
                });
            } else {
                // Não suporta nativo: usa a simulação CSS
                enterSimulatedFullscreen();
            }
        }
    });
});