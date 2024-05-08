let auto = {
    rok: 2000,
    przebieg: 100000,
    cena_wyjsciowa: 20000,
    cena_koncowa: 20000,
    powiekszCene: function() {
        this.cena_wyjsciowa += 1000;
    },
    obnizCeneZaRok: function() {
        let wiek = new Date().getFullYear() - this.rok;
        this.cena_koncowa -= 1000 * wiek;
        if (this.cena_koncowa < this.cena_wyjsciowa) {
            this.cena_koncowa = this.cena_wyjsciowa;
        }
    },
    obnizCeneZaPrzebieg: function() {
        let obnizka = Math.floor(this.przebieg / 100000) * 10000;
        this.cena_koncowa -= obnizka;
        if (this.cena_koncowa < this.cena_wyjsciowa) {
            this.cena_koncowa = this.cena_wyjsciowa;
        }
    },
    dopiszPrzebiegIRok: function(przebieg, rok) {
        this.przebieg = przebieg;
        this.rok = rok;
        this.obnizCeneZaRok();
        this.obnizCeneZaPrzebieg();
    }
};

let samochody = [];

function dodajAuto(auto) {
    if (auto.cena_koncowa > 10000) {
        samochody.push(auto);
    }
}

function zwiekszRok() {
    for (let auto of samochody) {
        auto.rok += 1;
        auto.obnizCeneZaRok();
    }
}
let auto1=Object.create(auto);
auto1.dopiszPrzebiegIRok(100000, 2000);
console.log(auto1.cena_koncowa);
dodajAuto(auto1);
console.log(samochody.length);
zwiekszRok();
console.log(auto1.rok);
console.log(auto1.cena_koncowa);