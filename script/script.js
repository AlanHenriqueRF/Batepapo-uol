axios.defaults.headers.common['Authorization'] = 'OdIdHp43nAdZeoW0W7UVQfKN';
let user = prompt('Qual o seu nome ?');

let adiciona_user = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', {name: user})


adiciona_user.then(online); 
adiciona_user.catch(repete_nome); 

function repete_nome() {
    user = prompt('Esse nome ja está no servidor, digite outro nome ?');
    adiciona_user = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants ', {name: user})
    adiciona_user.then(online);
    adiciona_user.catch(repete_nome);
}

function online(){
    axios.post('https://mock-api.driven.com.br/api/vm/uol/status',{name: user})
}

setInterval(online,5000);


let mensage_server = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages');

mensage_server.then(mostra_mensagens);


function mostra_mensagens(mensagens){
    const ul = document.querySelector('.mensagens')
    console.log(mensagens.data)
    for (let i = 0; i< mensagens.data.length;i++){
        if (mensagens.data[i].type === "status"){
            ul.innerHTML += `<li><div class="caixa_mensagem"><h2>(${mensagens.data[i].time})</h2><br>  <h3>${mensagens.data[i].from}</h3>  <h2 class ="texto">${mensagens.data[i].text}</h2></div></li>`
            if (i!== 0){continue}
        }
        else if (mensagens.data[i].type === "message"){
            ul.innerHTML += `<li><div class="caixa_mensagem"><h2>(${mensagens.data[i].time})</h2><br> <h3>${mensagens.data[i].from}</h3>  <h2 class ="texto">para</h2>  <h3>${mensagens.data[i].to}:</h3>  <h2 class ="texto">${mensagens.data[i].text}</h2></div></li>`
            if (i!== 0){continue}
        }
        
        else {
            ul.innerHTML += `<li><div class="caixa_mensagem"><h2>(${mensagens.data[i].time})</h2><br>  <h3>${mensagens.data[i].from}</h3>  <h2 class ="texto">reservada para</h2> <h3>${mensagens.data[i].to}:</h3>  <h2 class ="texto">${mensagens.data[i].text}</h2></div></li>`
            if (i!== 0){continue}
        }
        }
    }
    