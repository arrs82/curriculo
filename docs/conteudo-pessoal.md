# **Alessandro Roberto dos Reis Santos**

<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>.circle-mask{position:relative;width:350px;height:350px;overflow:hidden;display:flex;justify-content:center;align-items:center;margin-bottom:-110px;margin-top:-20px}.satelite{position:absolute;width:305px;height:305px;background-image:url(../assets/images/lupa.png);background-size:cover;border-radius:50%;animation:orbitSatelite 2s linear infinite;transform-origin:center center;animation-play-state:paused;top:35%;left:32%;transform:translate(-50%,-50%) rotate(90deg) translateX(50px) translateY(30%) rotate(-90deg);transition:transform 0.3s ease}.circle-mask:hover .satelite{animation-play-state:running}@keyframes orbitSatelite{0%{transform:translate(-50%,-50%) rotate(28deg) translateX(13px) translateY(9%) rotate(-34deg)}100%{transform:translate(-50%,-50%) rotate(388deg) translateX(13px) translateY(9%) rotate(-394deg)}}.circle-mask img{width:70%;height:70%;object-fit:cover;cursor:pointer}.circle-mask:hover img{transform:scale(1.1)}.apresentacao{position:absolute;width:255px;height:331px;background-image:url(../assets/images/conteudo-pessoal.png);background-size:cover;top:38%;left:29%;transform:translate(-50%,-50%);transition:transform 0.5s ease;z-index:-1}.circle-mask:hover .apresentacao{transform:translate(17%,-50%)}</style></head><body><div class="circle-mask"><img src="../assets/images/curriculo.png" alt="curriculo" style="transform: translateY(-21%) translateX(-27%);"><div class="satelite"></div><div class="apresentacao"></div></div></body></html>

## **Introdução**

<p style="text-align: justify;">Conteúdo pessoal e de terceiros, destinado irrestritamente para o <strong>compartilhamento/download</strong> de conhecimentos técnicos, aplicações e conteúdos diversos, como <I>softwares open-source</I>, jogos, cursos e/ou tutoriais, fomentando assim o enriquecimento e principalmente o engajamento do meu currículo profissional para com amigos, colegas e profissionais diversos.</p>
---

??? Success ":simple-linux: Comandos Linux"

    **Acesso ao sistema como root**

        sudo passwd root
        su root
    **Revogação de chave**

        ssh-keygen -R IP 192.168.1.21
    **Modificação do hostname**

        nano /etc/hostname
    **Atualização de sistema como usuário comum**

        sudo apt-get update && sudo apt-get upgrade
    **Atualização de distro como usuário comum**

        sudo apt-get dist-upgrade && sudo apt-get autoremove && sudo apt-get autoclean
    **Ativação do firewall**

        sudo ufw enable
    **Desativação do firewall**

        sudo ufw disable
    **Recarregamento do firewall**

        sudo ufw reload
    **Status do firewall**

        sudo ufw status verbose
    **Permissão total para pastas e arquivos**

        sudo chmod -R 777 /home
    **Inicialização em uma pasta específica**

        nano ~/.bashrc /home
    **Aplica modificações feitas no .bashrc**

        source ~/.bashrc
    **Instalação de ferramenta net-tools (Para realizar comando ifconfig)**

        sudo apt-get install net-tools
    **Ativação de placa de Rede**

        ifconfig ens19 up
    **Desativação de placa de Rede**

        ifconfig ens19 down
    **Renomeação de arquivos**

        sudo mv /etc/samba/smb.conf /etc/samba/smb1.conf
    **Modificação de idiomas no Ubuntu Server/Desktop (Ex: Escolher o idioma "pt_BR.UTF-8”)**

        sudo dpkg-reconfigure locales
    **Verificar estrutura de discos rígidos**

        sudo fdisk -l | less
    **Lista dispositivos de bloco (HDs, SSDs)**

        lsblk -f
    **Listar e verificar e detalhar os discos rígidos no sistema**

        lsblk -o NAME,SIZE,FSTYPE,TYPE,MOUNTPOINT,UUID
    **Identificação da CPU**

        lscpu
    **Identificação da quantidade disponível de memória**

        free -h
    **Identificar o espaço de uma pasta/diretório**

        du -csh /home
    **Exibição das últimas linhas de um arquivo de texto**

        tail -f /home/plex/comando-por-email.log
    **Desligamento do sistema operacional com segurança**

        sudo shutdown now
    **Criação de novo usuário**

        sudo adduser nome_usuario
    **Remoção de usuário**

        sudo deluser nome_usuario
    **Adiciona usuário a um grupo**

        sudo usermod -aG grupo nome_usuario
    **Altera a senha de um usuário**

        passwd nome_usuario
    **Exibe os grupos aos quais o usuário pertence**

        groups nome_usuario
    **Criação de nova pasta**

        mkdir nova_pasta
    **Remove uma pasta e seu conteúdo**

        rm -rf nome_da_pasta
    **Copia arquivos ou pastas**

        cp origem destino
    **Move ou renomeia arquivos ou pastas**

        mv origem destino
    **Cria um novo arquivo vazio**

        touch novo_arquivo.txt
    **Lista arquivos com detalhes e ocultos**

        ls -la
    **Busca arquivos com extensão .txt em um caminho**

        find /caminho -name '*.txt'
    **Concede permissão de execução**

        chmod +x arquivo.sh
    **Define permissões recursivas para pasta**

        chmod -R 755 pasta
    **Altera proprietário e grupo do arquivo**

        chown usuario:grupo arquivo
    **Exibe informações das interfaces de rede**

        ip a
    **Testa conectividade com servidor remoto**

        ping 8.8.8.8
    **Mostra IP público**

        curl ifconfig.me
    **Baixa arquivos da internet**

        wget http://exemplo.com/arquivo.zip
    **Exibe conexões e portas escutando**

        netstat -tuln
    **Exibe portas e processos escutando**

        ss -tulnp
    **Mostra o status dos dispositivos de rede**

        nmcli dev status
    **Instala um pacote**

        sudo apt install nome-do-pacote
    **Remove um pacote**

        sudo apt remove nome-do-pacote
    **Remove pacotes não utilizados**

        sudo apt autoremove
    **Limpa cache de pacotes antigos**

        sudo apt autoclean
    **Remove pacote e arquivos de configuração**

        sudo apt purge nome-do-pacote
    **Monitor de processos em tempo real**

        top
    **Monitor de processos com interface interativa**

        htop
    **Lista todos os processos ativos**

        ps aux
    **Encerra processo por PID**

        kill PID
    **Encerra processos por nome**

        killall nome_processo
    **Executa processo com prioridade ajustada**

        nice -n 10 comando
    **Altera prioridade de processo em execução**

        renice -n 5 PID
    **Mostra uso do disco**

        df -h
    **Mostra tamanho das pastas**

        du -sh *
    **Mostra tempo ligado e carga do sistema**

        uptime
    **Exibe mensagens do kernel**

        dmesg | less
    **Inicia um serviço**

        systemctl start nome
    **Para um serviço**

        systemctl stop nome
    **Reinicia um serviço**

        systemctl restart nome
    **Exibe o status de um serviço**

        systemctl status nome
    **Habilita serviço na inicialização**

        systemctl enable nome
    **Desabilita serviço da inicialização**

        systemctl disable nome
    **Monta dispositivo em /mnt**

        mount /dev/sdX /mnt
    **Desmonta dispositivo**

        umount /mnt
    **Exibe logs detalhados do sistema**

        journalctl -xe
    **Exibe últimas linhas do log do sistema em tempo real**

        tail -f /var/log/syslog
    **Mostra logs do kernel**

        dmesg
    **Mostra últimos logins no sistema**

        last
    **Mostra usuários logados no momento**

        who
    **Mostra data e hora atual**

        date
    **Exibe calendário**

        cal
    **Mostra informações do sistema e kernel**

        uname -a
    **Mostra versão da distribuição**

        lsb_release -a
    **Lista comandos usados recentemente**

        history
    **Cria atalho para atualizar o sistema**

        alias atualizar='sudo apt update && sudo apt upgrade'
    **Verifica integridade de sistema de arquivos**

        sudo fsck /dev/sdX
    **Testa velocidade de leitura do disco**

        sudo hdparm -Tt /dev/sdX
    **Adiciona um repositório PPA**

        sudo add-apt-repository ppa:nome/ppa
    **Atualiza GRUB após alterações**

        sudo update-grub
    **Verifica se serviço está ativo**

        systemctl is-active nome-do-serviço
    **Mostra serviços habilitados para inicialização**

        systemctl list-unit-files --type=service
    **Busca processo por nome**

        pgrep nome_processo
    **Mostra tempo de boot do sistema**

        systemd-analyze
    **Exibe graficamente o tempo de inicialização por serviço**

        systemd-analyze blame
    **Sincroniza sistema de arquivos com disco (força gravação)**

        sync
    **Visualiza as variáveis de ambiente**

        printenv
    **Compacta arquivos em formato .tar.gz**

        tar -czvf arquivo.tar.gz pasta/
    **Descompacta arquivos .tar.gz**

        tar -xzvf arquivo.tar.gz
    **Compacta arquivos em .zip**

        zip -r arquivo.zip pasta/
    **Descompacta arquivos .zip**

        unzip arquivo.zip
    **Compacta arquivos em .7z (necessário instalar o p7zip-full)**

        7z a arquivo.7z pasta/
    **Descompacta arquivos .7z**

        7z x arquivo.7z
    **Cria tarefa agendada com crontab**

        sudo crontab -e
    **Lista tarefas agendadas do usuário atual**

        sudo crontab -l
    **Lista tarefas agendadas de todos os usuários**

        sudo cat /etc/crontab
    **Verifica logs de autenticação**

        sudo cat /var/log/auth.log
    **Verifica tentativas de login com falha**

        sudo grep "Failed password" /var/log/auth.log
    **Conecta-se a servidor remoto via SSH**

        ssh usuario@192.168.1.100
    **Copia arquivos para servidor remoto via SCP**

        scp arquivo.txt usuario@192.168.1.100:/caminho/destino/
    **Gera nova chave SSH padrão**

        ssh-keygen -t rsa -b 4096
    **Adiciona chave pública ao servidor remoto**

        ssh-copy-id usuario@192.168.1.100
    **Testa portas abertas remotamente**

        nc -zv 192.168.1.100 22
    **Verifica latência e rota até servidor remoto**

        traceroute google.com
    **Testa velocidade de download/upload com Speedtest CLI**

        speedtest
    **Cria link simbólico (atalho)**

        ln -s /caminho/original /caminho/atalho
    **Localiza binário de um comando**

        which nome_comando
    **Busca arquivos no sistema**

        locate nome_arquivo
    **Atualiza base de dados do `locate`**

        sudo updatedb
    **Verifica consumo de recursos por processo**

        pidstat -p PID
    **Conta número de arquivos em um diretório**

        ls -1 | wc -l
    **Mostra comandos mais utilizados com histórico**

        history | awk '{CMD[$2]++;count++;}END{for(a in CMD){print CMD[a] \"\t\" a}}' | sort -rn | head
    **Mostra espaço usado por arquivos maiores que 100MB**

        find / -type f -size +100M -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
    **Verifica permissões padrão de criação de arquivos (umask)**

        umask
    **Define nova umask (exemplo: 002 para arquivos com permissão de grupo)**

        umask 002

??? Success ":simple-surveymonkey: QBasic GORILLAS - Jogue no Desktop"
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="../assets/html/gorilla.html"
        frameborder="0"
        allowfullscreen>
    </iframe>
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