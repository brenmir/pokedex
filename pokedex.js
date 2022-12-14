const fetchPokemon =  async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("imgs/pokemon-sad.gif")

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
            let pokeType = data.types;
            let pokeAttack = data.stats[1].base_stat;
            let pokeDefense = data.stats[2].base_stat;
            let pokeMove = data.moves[74].move.name;
            
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            pokemonName(pokeName);
            pokemonType(pokeType);
            pokemonAttack(pokeAttack);
            pokemonDefense(pokeDefense);
            pokemonMove(pokeMove);
            
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
    pokeAbilities.innerHTML = "abilities: " + abilitiesName;
}

const pokemonName = (name) => {
    document.getElementById('pokemonName').innerHTML = name;
}

const pokemonType = (types) => {
    const typeData = document.getElementById("type");
    const typeName = types.map(types => types.type.name);
    typeData.innerHTML = "type: " + typeName; 
}

const pokemonAttack = (pokeAttack) => {
    document.getElementById("attack").innerHTML = "attack: " + pokeAttack;
}

const pokemonDefense = (pokeDefense) => {
    document.getElementById("defense").innerHTML = "defense: " + pokeDefense;
}

const pokemonMove = (pokeMove) => {
    document.getElementById("moves").innerHTML = "moves: " + pokeMove;
}
