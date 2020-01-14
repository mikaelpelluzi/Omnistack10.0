# Configurando ambiente para semana Omnistack 10.0
## Configurando Node.js no Windows

 * As instruções aqui passadas serão do  caminho que prossegui para download e instalações dos recursos na maquina (sistema operacional Windows 64 bit.)
## # Chocolatey 
- Chocolatey é um gerenciador de pacotes para Windows, e o que seria ? como o próprio nome já diz, é um gerenciador de pacotes, normalmente quando se pretende fazer uma instalação de algum programa é comumente ir no site baixar o instalador e depois rodar a instalação com "next>", ao instalar dessa maneira muitas vezes a pessoa acaba não sabendo o diretório em que foi salvo e/ou qual versão foi instalada. E é nesse momento que utilizamos um gerenciador, cada sistema operacional possui um, o do windows é o [chocolatey](https://chocolatey.org/install). 
- Na página de instalação terá o passo a passo de como rodar a instalação, porem irei descrever aqui também.

1. Abra o "powershell" em modo administrador (para que tenha permissão de efetuar os comandos).
2.  Obs.: Antes de rodar o comando para a instalação é necessário verificar a politica execução. para isso deve se escrever **Get-ExecutionPolicy**, caso retorne **restricted**, será preciso digitar **Set-ExecutionPolicy Allsinged**.

3. Depois de verificado a politica de execução e tiver a permissão é só inserir o código **Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))**
4. Aguardar alguns minutos e se não houver nenhum erro estará pronto para o uso.
5. Para verificar se ocorreu a instalação corretamente digite **choco -v**. Obs.: caso for necessário feche e abre novamente o *powershell*.

- Após a instalação do **chocolatey**, todas as demais instalações e configurações serão efetuadas pelo chocolatey (package mananer) através do comando no *powershell* ***"choco install" ... ou "cinst" ...***

## # Node.js

Como um bom estudioso e programador é sempre bom buscar saber mais a fundo sobre as tecnologias envolvidas, então caso queira saber um pouco mais há uma paginá **NodeBR** dando uma breve contextualizada.  [clique aqui e saiba mais sobre Node.js](http://nodebr.com/o-que-e-node-js/)

- Para a instalação do Node via command line:
1. Abra o site [nodejs.com](https://nodejs.org/en/).
2. Vá para **downloads**.
3. Em downloads role o scroll para baixo até o fim e clique em **Installing Node.js via package manager**.
4. Na paginá que se abrirá procure pelo sistema operacional atual do seu computador, aqui no caso será o **Windows**. Ao clicar, será direcionado para a área em que se encontra o comando para executar a instalação.
5.  Insira o comando no *powershell* (modo administrador) "**choco instal nodejs-lts**", deve estar se perguntando do porque o **lts** (long-term support), se trata só de uma versão mais segura, com um suporte mais consolidado.
6. Aguardar o fim de instalação e caso não ocorra nenhum erro, digite o comando **node -v** para a verificação da versão instalada.

Obs.: assim como o chocolatey o Node também possui o gerenciador de pacotes, para verificar a presença e versão digite **npm -v** (node package menager), pois diferente

## # Yarn 



> Written with [StackEdit](https://stackedit.io/).
