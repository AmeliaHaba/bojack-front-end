class API {
    // static class level function that is fetch request to backend to index that loads in characters
        static addCharacters() {
            fetch ("http://127.0.0.1:3000/characters")
            .then(response => response.json())
            .then(characters => {
                characters.forEach( character => {
                    const {id, name, depressed, animal, mood } = character
                    new Character( id, name, depressed, animal, mood )
                })
            })
        }

        
        static addFacts(event) {
            fetch (`http://127.0.0.1:3000/characters/${event.target.dataset.id}/facts`)
            .then(response => response.json())
            .then(facts => {
                facts.forEach(characterTrait => {
                    const {id, fact, character_id} = characterTrait
                    new Fact(id, fact, character_id)
                })
            })
        }
}        


               