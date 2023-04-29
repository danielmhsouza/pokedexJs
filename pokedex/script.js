
const botao = document.getElementById('button');



botao.addEventListener('click', ()=>{
    let input = document.getElementById('input').value;

    pesquisaPoke(input)
})

function pesquisaPoke(param){
    try{
        fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
        .then(response => response.json())
        .then(pokemon => atualiza(pokemon))
    }catch(e){
        console.log(e)
    }
}

function atualiza(p){
    let name = document.getElementById('name')
    let type = document.getElementById('type')
    let ability = document.getElementById('ability')
    let img_front = document.getElementById('img-front')
    let img_back = document.getElementById('img-back')

    name.innerHTML = p['forms'][0]['name']
    type.innerHTML = p['types'][0]['type']['name']
    ability.innerHTML = p['abilities'][0]['ability']['name']
    img_front.setAttribute('src', p['sprites']['front_default'])
    img_back.setAttribute('src', p['sprites']['back_default'])
}

window.onload = ()=>{
    pesquisaPoke(1);
}