class Ocena{
    constructor(przedmiot, wartosc){
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student{
    constructor(imie, nazwisko){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.listaOcen=[];
        this.srednia=0;
    }

    set oceny(x){
        if(x instanceof Ocena){
            this.listaOcen.push(x);
            this.przeliczSrednia();
        }
    }

    get oceny(){
        return this.listaOcen.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena: ${ocena.wartosc}`).join('\n');
    }

    przeliczSrednia(){
        let suma=this.listaOcen.reduce((acc, ocena) => acc+ocena.wartosc, 0);
        this.srednia=suma/this.listaOcen.length;
    }

    hello(){
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia to ${this.srednia}`;
    }
}

let s = new Student('Jan', 'Kowalski');

let ocena1 = new Ocena('TIN', 5);
let ocena2 = new Ocena('GRK', 4);
let ocena3 = new Ocena('ELK', 3);

s.oceny=ocena1;
s.oceny=ocena2;
s.oceny=ocena3;

console.log(s.hello());
console.log(s.oceny);