class API {
    // static class level function that is fetch request to backend to index that loads in characters
    static addCharacters(){
        fetch("http://127.0.0.1:3000/characters")
        .then(resp => resp.json())
        .then(characters => {
            characters.forEach(character => {
                const.{id, name, depressed, animal, image} = character
                new Character(id, name, depressed, animal, image)
    
            })
        })  

    }   
}