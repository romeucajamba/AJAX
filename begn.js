window.onload = document.getElementById('btn').addEventListener('click', functionEvent)

function functionEvent(){
  
      // ########### AJAX #########\\
    // comunicando com o servidor\\
    //Vai nos permitir : enviar um pedido, obter a resposta e fazer o tratamento dessa resposta
    
    //Criamos o objecto request
   let request = new XMLHttpRequest();
    // A funcão que vai atuar mediante a resposta
    // ou seja quando o nosso pedido ter uma resposta do nosso servidor ele vai pegar o que tem no servidor(servidor.txt) e colocar(mostar) dentro da div
    request.onreadystatechange = function () {// Essa funcão só será executada depois do codigo abaixo dela for executado ( o request.open("GET", "server.txt", true) e o request.send())
         if(request.readyState == 4 && request.status == 200){
            document.getElementById('caixa').innerHTML = this.responseText; //Colocando o texto que vem do meu documento na div
        //Pegando o documento de texto e seu conteúdo
         }else{
          document.getElementById('caixa').innerHTML = 'Algo deu errado,por favor tente mais tarde';
         }
    }


  // Fazendo o nosso pedido o servidor para pegar o tem nele
  request.open("GET", "server.txt", true)
    //Pegando o nosso pedido e alterar o estado do nosso onreadystatechange
   request.send()
}


  