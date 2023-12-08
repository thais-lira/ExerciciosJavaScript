/*
    ** Faça uma estrutura if/else para verificar se um usuario pode dirigir;
*/

let idade = prompt(`Quantos anos você tem?`);
let cnh = prompt(`Possui CNH?`);

if(idade >= 18 && cnh == true){
  console.log(`Você tem ${idade} e pode dirigir`);
}else if(idade >= 18 && cnh == false){
  console.log(`Você tem ${idade} e pode dirigir`);
}else{
  console.log(`Você tem ${idade} e não pode dirigir`);
}