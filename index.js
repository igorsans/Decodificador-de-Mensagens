var start = document.querySelector('#start')

start.addEventListener('click', function (e) {
    let here = document.querySelector('#here')
    here.innerHTML = '<div class=""><h2>Insira o seu texto abaixo.</h2></div> <div class=""><input type="text" id="cod1"></div><div><select name="typeCripto" id="typeCripto"><option value="valor1" selected>Base64</option><option value="valor2" id="cifraPasso">Cifra de César</option></select></div><div id="passo"></div><div><input type="radio" name="decoDe" id="codMsg">Codificar<input type="radio" name="decoDe" id="decodeMsg">Decodificar</div><div id="DeCode"></div><fieldset><div><h2>Verifique o resultado abaixo:</h2></div><div id="replace"></div></fieldset>'

    var select = document.querySelector('#typeCripto')
    var codificar = document.querySelector('#codMsg')
    var decodificar = document.querySelector('#decodeMsg')

    select.addEventListener('change', (e) => {
        if (select.value == 'valor2') {

            var passo = document.createElement('div')
            passo.innerHTML = '<div id="teste1">teste1</div>'
            let passoPlace = document.querySelector('#passo')
            passoPlace.append(passo)

        } else if (select.value == 'valor1') {
            var apagar = document.querySelector('#teste1')
            apagar.remove()
        };
    })
    codificar.addEventListener('click', function (e) {

        var remocao = document.querySelector('button')
        if (remocao) {
            remocao.remove()
        }
        var codificationBtn = document.createElement('button')
        codificationBtn.setAttribute("id","inCoder")
        codificationBtn.setAttribute("onclick","encode()")
        codificationBtn.innerText = 'Codificar Mensagem'
        var btnPlace = document.querySelector('#DeCode')
        btnPlace.append(codificationBtn)

    })
    decodificar.addEventListener('click', (e) => {

        var remocao = document.querySelector('button')
        if (remocao) {
            remocao.remove()
        }
        var decodificationBtn = document.createElement('button')
        decodificationBtn.innerText = 'Decodificar Mensagem'
        decodificationBtn.setAttribute("id","outCoder")
        decodificationBtn.setAttribute("onclick","decode()")
        var btnPlace = document.querySelector('#DeCode')
        btnPlace.append(decodificationBtn)
    })
})

function encode(){
    let cod = document.getElementById('cod1').value
    let encodeStr = btoa(cod)
    let replace = document.getElementById('replace')
    replace.innerText = encodeStr
}
function decode(){
    let cod = document.getElementById('cod1').value
    let encodeStr = atob(cod)
    let replace = document.getElementById('replace')
    replace.innerText = encodeStr
}
















