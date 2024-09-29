

abstract class Veiculo {
    protected velocidade: number = 0;

    constructor(protected modelo: string) { }

    //  implementado pela subclasse
    abstract acelerar(): void;

    //  implementado pela subclasse
    abstract desacelerar(): void;

    frear(): void {
        this.velocidade = 0;
        console.log(`${this.modelo} está parado.`);
    }

    exibirVelocidade(): void {
        console.log(`Velocidade atual do ${this.modelo}: ${this.velocidade} km/h`);
    }
}

export class Carro extends Veiculo {


    acelerar(): void {
        this.velocidade += 10;
        console.log(`O ${this.modelo} está acelerando...`);
    }
    desacelerar(): void {
        this.velocidade -= 10;
        console.log(`O ${this.modelo} está desacelerando...`);
    }
    
}

export class Moto extends Veiculo {
    acelerar(): void {
        this.velocidade += 20;
        console.log(`A ${this.modelo} está acelerando...`);
    }
    desacelerar(): void {
        this.velocidade -= 20;
        console.log(`A ${this.modelo} está desacelerando...`);
    }

}

export class Bicicleta extends Veiculo {
    acelerar(): void {
        this.velocidade += 5;
        console.log(`A ${this.modelo} está acelerando...`);
    }
    desacelerar(): void {
        this.velocidade -= 5;
        console.log(`A ${this.modelo} está desacelerando...`);
    }
    

}
