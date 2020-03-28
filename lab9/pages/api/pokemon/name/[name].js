import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "There was an error, try again. (Make sure it's capitalized!"};

    let pokemon = getPokemon.getPokemonByName(req.query.name);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}