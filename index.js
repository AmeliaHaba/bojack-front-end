let myMood = false
document.addEventListener("DOMContentLoaded", function(){
    // whatever has to happen first in application
    // first load our characters 
    // get fetch reqyest to back end to load the charactesr. This lives in API class
    API.addCharacters()
    // if there is any event listeners that need to get appended to the page if it loads, they should append here
    document.addEventListener("click", event => { event.preventDefault()
        console.log(event.target)
        const characterMoodButton = event.target.closest(".character-card").querySelector(".mood-btn")
        if (event.target.matches(".mood-btn")) {
            // myMood = !myMood
            // console.log(myMood)
            const id = event.target.dataset.id
            const character = Character.findById(id)
            const charObj = {
                mood: !character.mood
            }
            fetch (`http://localhost:3000/characters/${id}`, {
                    method: "PATCH", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(charObj)
            })

            .then(response => response.json())
            .then(  (updatedCharacter) => {
                const moodButton = document.querySelector(`.mood-btn[data-id="${updatedCharacter.id}"]`)
                if(updatedCharacter.mood === true){
                    moodButton.style.backgroundColor = "red"
                }
                else {
                    moodButton.style.backgroundColor = "rgb(114, 113, 113)"
                }
                console.log(updatedCharacter)
            })

        }

    })

})


//