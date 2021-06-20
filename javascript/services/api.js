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

        static addFacts(charId) {
            fetch (`http://127.0.0.1:3000/characters/${charId}/facts`)
            .then(response => response.json())
            .then(facts => {
                facts.forEach(characterTrait => {
                    const {id, fact, character_id} = characterTrait
                    new Fact(id, fact, character_id)
                })
            })
        }
}        


                // char += `<div id="${id}" data-id="${id}" class="card">
                //     <img src="https://fictionalfemales.com/wp-content/uploads/sites/4/2016/09/Diane-Nguyen.jpg" height=”" width=”200">
                //     <p>${name}</p>
                //     <button id="mood">mood</button>
                // </div>`
                
                // const card = document.getElementById(id)
                // const card = document.querySelector(`#${id}`)
        
                // const newCharacter = new Character(id, name, depressed, animal, image) 
                //     newCharacter.rendercharacter()
        
            // document.querySelector("#characters-container").innerHTML = char              
    