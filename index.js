var start = document.querySelector('#start')

start.addEventListener('click', function (e) {
    let here = document.querySelector('#here')
    here.innerHTML = '<div class=""><h2>Insira o seu texto abaixo.</h2></div> <div class=""><input type="text"></div><div><select name="typeCripto" id="typeCripto"><option value="valor1" selected>Base64</option><option value="valor2" id="cifraPasso">Cifra de César</option></select></div><div id="passo"></div><div><input type="radio" name="decoDe" id="codMsg">Codificar<input type="radio" name="decoDe" id="decodeMsg">Decodificar</div><div id="DeCode">mensagem</div>'

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

        var codificationBtn = document.createElement('button')
        codificationBtn.innerText = 'Codificar Mensagem'
        let btnPlace = document.querySelector('#DeCode')
        btnPlace.append(codificationBtn)
        codificationBtn.remove()
    })
    decodificar.addEventListener('click', (e) => {
        
    })
})

















