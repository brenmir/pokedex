const fetchPokemon =  async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("imgs/pokemon-sad.gif")

            document.getElementById("pokemonName").innerHTML = "";
            document.getElementById("pokemonHeight").innerHTML = "";
        }
        else {
            return res.json();
        }
    })
    
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            let pokeName = data.name;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            pokemonName(pokeName);
            console.log(pokeImg);
        }
    }

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;
}

const pokemonName = (name) => {
    document.getElementById('pokemonName').innerHTML = name;
}





