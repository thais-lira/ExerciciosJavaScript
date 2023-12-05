/*
  ** Crie uma estrutura IF que verifica a entrada na balada,
  ** se tiver mais de 18 pode entrar
*/
let idade = prompt('quantos anos você tem?');

if(idade >= 18){
  alert(`Você tem ${idade} anos, e sua entrada esta liberada!`);
} else {
  alert(`Você tem ${idade} anos, e sua entrada não esta liberada!`);
}