
let lines = gets().split("\n");

let line = lines.shift().split(' ');
let soma = 0


for(i=1;i<5;i++){
  let transfor = parseInt(line.slice(-i))
  soma = soma + transfor
}
print(soma-3)