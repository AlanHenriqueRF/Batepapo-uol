axios.defaults.headers.common['Authorization'] = 'OdIdHp43nAdZeoW0W7UVQfKN';
let nome = prompt('Qual o seu nome de usúario ?');

let mensagens = {};
const promessa = axios.get('https://mock-api.driven.com.br/api/vm/uol/participants ');


promessa.then(processarResposta);

function processarResposta(resposta) {
	let x = (resposta.data);
    for (let i= 0;i< x.length;i++){
        console.log(x[i].name)
    }
}
