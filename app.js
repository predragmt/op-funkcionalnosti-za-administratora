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
        tabela.appendChild(tr)
    }
}

function inicijalizujArtikle() {
    let artikli = [
        new Artikal('Monitor', 165),
        new Artikal('TV', 650)
    ]
    
    kreirajRedoveZaArtikle(artikli)
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle)