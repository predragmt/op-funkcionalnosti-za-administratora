'use strict'

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

function kreirajRedoveZaArtikle(artikli) {
    let tabela = document.querySelector("#artikli-body")

    for (let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr")
        
        let br = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")

        br.textContent = i + 1
        naziv.textContent = artikli[i].naziv
        cena.textContent = artikli[i].cena

        tr.appendChild(br)
        tr.appendChild(naziv)
        tr.appendChild(cena)

        tr.addEventListener('click', function () {
            prikaziDetaljeArtikla(artikli[i])
        })

        tabela.appendChild(tr)
    }
}

function prikaziDetaljeArtikla(artikal) {
    document.querySelector("#detaljiNaziv").textContent = "Naziv: " + artikal.naziv
    document.querySelector("#detaljiCena").textContent = "Cena: " + artikal.cena + "$"
    document.querySelector("#detaljiOpis").textContent = "Opis: " + artikal.opis
}

function inicijalizujArtikle() {
    let artikli = [
        new Artikal('Monitor', 165),
        new Artikal('TV', 650)
    ]
    
    kreirajRedoveZaArtikle(artikli)
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle)