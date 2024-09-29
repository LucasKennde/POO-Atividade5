import { Carro, Moto, Bicicleta } from "./entities/veiculos";

const carro = new Carro('Ferrari') 
const moto = new Moto('CB 600')

console.log("\n--------CARRO--------\n\n");

carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.exibirVelocidade()
carro.desacelerar()
carro.exibirVelocidade()
carro.frear()
carro.exibirVelocidade()

console.log("\n--------MOTO--------\n\n");

moto.acelerar()
moto.acelerar()
moto.acelerar()
moto.exibirVelocidade()
moto.desacelerar()
moto.exibirVelocidade()
moto.frear()
moto.exibirVelocidade()

console.log("\n--------Bicicleta--------\n\n");

const bicicleta = new Bicicleta('Bicicleta aro 20 - CALOI')

bicicleta.acelerar()
bicicleta.acelerar()
bicicleta.acelerar()
bicicleta.exibirVelocidade()
bicicleta.desacelerar()
bicicleta.exibirVelocidade()
bicicleta.frear()
bicicleta.exibirVelocidade()
