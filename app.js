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
    tabela.innerHTML = ""

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

function obradaSlanjaForme(artikli) {
    let dodaj = document.querySelector('#dodaj')
    dodaj.addEventListener('click', function () { 
        const forma = document.querySelector('#forma')
        const formData = new FormData(forma) 

        const naziv = formData.get('naziv')
        const cena = formData.get('cena')
        const opis = formData.get('opis')

        for (let i = 0; i < artikli.length; i++) {
            if (naziv === artikli[i].naziv) {
                return
            }
        }

        const noviArtikal = new Artikal(naziv, cena, opis)
        artikli.push(noviArtikal)

        let niz = JSON.stringify(artikli)
        localStorage.setItem("artikli", niz)

        kreirajRedoveZaArtikle(artikli)
    }) 
}

function inicijalizujArtikle(artikli) {
    let nizArtikala = localStorage.getItem("artikli")
    artikli = JSON.parse(nizArtikala)
    
    kreirajRedoveZaArtikle(artikli)
    obradaSlanjaForme(artikli)
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle)