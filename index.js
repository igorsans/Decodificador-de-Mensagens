var start = document.querySelector('#start')

start.addEventListener('click', function (e){
    let here = document.querySelector('#here')
    here.innerHTML = '<div class=""><h2>Insira o seu texto abaixo.</h2></div> <div class=""><input type="text"></div><div><select name="typeCripto" id="typeCripto"><option value="valor1" selected>Base64</option><option value="valor2" id="cifraPasso">Cifra de César</option></select></div><div id="passo">teste</div><div><input type="radio" name="decoDe" id="codMsg">Codificar<input type="radio" name="decoDe" id="decodeMsg">Decodificar</div>'
    
    var select = document.querySelector('#typeCripto')
    var codificar = document.querySelector('#codMsg')
    var decodificar = document.querySelector('#decodeMsg')
    
    select.addEventListener('change', (e)=>{
        if (select.value== 'valor2'){
            document.createElement('p')
            p.innerHTML = '<div>teste</div>'
            let passo = document.querySelector('#passo')
            passo.append('p')
        };
    })

    codificar.addEventListener('click', function (e){
        alert('opa meu bom')
    })
})

















