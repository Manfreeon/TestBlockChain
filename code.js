function myFunc(a,b){

    if (a<b){
       // let y = 60;
    }
    //console.log(y);
    return (a+b);
}

const myFunc2 = (c,d) => c+d;
myFunc(5,3);

function Persona(nome,eta,prof){
    this.nome = nome;
    this.eta = eta;
    this.prof = prof;
};

var p1 = new Persona("Pippo",32,"Dev");

class Person{

    constructor(nome,eta,prof){
        this.nome = nome;
        this.eta = eta;
        this.prof = prof;
    }
};

let obj1 = {
    nome : "Pluto",
    eta : 25,
    prof : "PM",
    ind : {
        voto : 60,
        media : 27
    }
};

let obj2 = obj1;

obj2.nome = "Pippo";

console.log(obj1.nome);

let obj3 = {...obj1};

obj1.nome = "xxxx";
obj1.ind.voto = 100;
console.log(obj3.nome);
console.log(obj3.ind.voto);

class Auto{
    constructor(marca,mod,cil){
        this.marca = marca;
        this.mod = mod;
        this.cil = cil;
    }

    stampa(){
        console.log(this.marca+" - "+this.mod+" - "+this.cil);
    }
};

let a1 = new Auto("Kia","Sportage",1600);
let a2 = new Auto("Alfa Romeo","Stelvio",2200);
let a3 = new Auto("Land Rover","Velar",2400);
let a4 = new Auto("Kia","Sorento",2000);
let a5 = new Auto("Jaguar","SType",3200);

let auto = [a1,a3,a2,a5,a4];

auto.forEach(a => a.stampa());

const cercaStelvio = a => a.mod==='Stelvio';

const cercaPerMarca = (a,marca) => a.marca === marca;

auto.filter(a => cercaStelvio(a)).forEach(a => a.stampa());

const ordinaPerCil = (a,b) => a.cil-b.cil;

auto.sort(ordinaPerCil);

console.log('---> Sort Per Cilindrata');
auto.forEach(a => a.stampa());
console.log('----> Cerca Per Marca');
auto.filter(a => cercaPerMarca(a,'Kia')).forEach(a => a.stampa());
