
import pokemon from 'json-pokemon';

export default (req, res) => {
    let result = [{"id": "There was an error, try again. (Make sure it's capitalized!)"}];
    
    for(let i=0; i<pokemon.length; i++){
       

        for(let t=0; t<pokemon[i].typeList.length; t++){
  

            if(pokemon[i].typeList[t] == req.query.type){
                result.push(pokemon[i])
            }
        }
    }
    if(result.length > 1){
        result.shift();
    }

    res.json(result);
}