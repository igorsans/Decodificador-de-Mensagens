var start = document.querySelector('#start')

start.addEventListener('click', function (e) {
    start.style.color = "#db5252"
    start.style.fontSize = "4.5em"
    let here = document.querySelector('#here')
    here.innerHTML = '<div class=""><h2 class="font">Insira o seu texto abaixo.</h2></div> <div class=""><input type="text" id="cod1"></div><div><select name="typeCripto" id="typeCripto"><option value="valor1" selected>Base64</option><option value="valor2" id="cifraPasso">Cifra de César</option></select></div><div id="passo"></div><div class="selectCripto"><input type="radio" name="decoDe" id="codMsg">Codificar<input type="radio" name="decoDe" id="decodeMsg">Decodificar</div><div id="DeCode"></div><fieldset class="fieldset1"><legend><p class="font">Verifique o resultado abaixo</p></legend><div id="replace"></div></fieldset>'

    var cod1 = document.querySelector('#cod1')
    cod1.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            e.preventDefault
        }
    })

    var select = document.querySelector('#typeCripto')
    var codificar = document.querySelector('#codMsg')
    var decodificar = document.querySelector('#decodeMsg')

    select.addEventListener('change', (e) => {
        if (select.value == 'valor2') {

            var passo = document.createElement('div')
            passo.innerHTML = '<div id="remove1"><label for="passoN" >Selecione o passo:</label><input type="number" name="passoN" id="passoN" min="0" max="26"></div>'
            let passoPlace = document.querySelector('#passo')
            passoPlace.append(passo)

        } else if (select.value == 'valor1') {
            var apagar = document.querySelector('#remove1')
            apagar.remove()
        };
    })
    codificar.addEventListener('click', function (e) {

        var remocao = document.querySelector('button')
        if (remocao) {
            remocao.remove()
        }
        var codificationBtn = document.createElement('button')
        codificationBtn.setAttribute("id", "inCoder")
        codificationBtn.setAttribute("onclick", "encode64()")
        codificationBtn.setAttribute("class", "font")
        codificationBtn.innerText = 'Codificar Mensagem'
        var btnPlace = document.querySelector('#DeCode')
        btnPlace.append(codificationBtn)
        codificationBtn.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })
    decodificar.addEventListener('click', (e) => {

        var remocao = document.querySelector('button')
        if (remocao) {
            remocao.remove()
        }
        var decodificationBtn = document.createElement('button')
        decodificationBtn.innerText = 'Decodificar Mensagem'
        decodificationBtn.setAttribute("id", "outCoder")
        decodificationBtn.setAttribute("onclick", "decode64()")
        decodificationBtn.setAttribute("class", "font")
        var btnPlace = document.querySelector('#DeCode')
        btnPlace.append(decodificationBtn)
        decodificationBtn.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })
})
function encode64() {
    let passoN = document.querySelector('#passoN')
    if (passoN === null) {
        let cod = document.getElementById('cod1').value
        let encodeStr = btoa(cod)
        let replace = document.getElementById('replace')
        replace.innerText = encodeStr
    } else {
        encodeCesar()
    }
}
function decode64() {
    let passoN = document.querySelector('#passoN')
    if (passoN === null) {
        let cod = document.getElementById('cod1').value
        let encodeStr = atob(cod)
        let replace = document.getElementById('replace')
        replace.innerText = encodeStr
    } else {
        decodeCesar()
    }
}


function encodeCesar() {
    let result = "";
    let text = document.querySelector('#cod1').value
    let passo = document.querySelector('#passoN').value
    let passo1 = parseInt(passo)
    for (let i = 0; i < text.length; i++) {
        var asciiNum = text[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            let numRes = (asciiNum - 65 + passo1) % 26
            result += String.fromCharCode(numRes + 65)
        } else {
            result += text[i]
        }
    }
    let replace = document.getElementById('replace')
    replace.innerText = result
}
function decodeCesar() {
    let result = "";
    let text = document.querySelector('#cod1').value
    let passo = document.querySelector('#passoN').value
    for (let i = 0; i < text.length; i++) {
        var asciiNum = text[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            let numRes = (asciiNum - 65 - passo +26) % 26
            result += String.fromCharCode(numRes + 65)
        } else {
            result += text[i]
        }
    }
    let replace = document.getElementById('replace')
    replace.innerText = result
}













