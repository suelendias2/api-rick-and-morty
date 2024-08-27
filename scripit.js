let contador = 1;

const inc = ()=>{
    contador +=1;
    //console.log(contador);
    fetchPersonagem(contador);
}

const dec = ()=>{
    if(contador > 1){
        contador -=1;
        //console.log(contador);
        fetchPersonagem(contador);
    }
}
const fetchPersonagem = async (contador)=>{
   let url = "https://rickandmortyapi.com/api/character/" + contador
   const api = await fetch(url);
   const data = await api.json();
   console.log(data);
   imageRes = document.getElementById("imagem");
   imageRes.src = data.image;
}

fetchPersonagem(contador);