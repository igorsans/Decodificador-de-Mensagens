var cifraCesar = document.querySelector('#cifraCesar')
var base64 = document.querySelector('#base64')



cifraCesar.addEventListener('click', function (e) {
    let here = document.querySelector('#here')
    here.innerHTML = '<div class="teste"> <h2>Decodificar</h2> </div> <div> <div><label for="decodification">Insira abaixo o texto que deseja codificar</label></div> <div><input type="text" name="text" id="codificat" required autocomplete="off"></div> <div></div>  <div><button type="submit">Codificar!</button></div>'
})




base64.addEventListener('click', function (e) {
    let here = document.querySelector('#here')
    here.innerHTML = '<div class="teste"> teste2 </div>'
    // está funcionado
})