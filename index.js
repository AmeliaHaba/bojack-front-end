let myMood = false
document.addEventListener("DOMContentLoaded", function(){
    // whatever has to happen first in application
    // first load our characters 
    // get fetch reqyest to back end to load the charactesr. This lives in API class
    API.addCharacters()
    // if there is any event lsiteners that need to get appended to the apge if it loads, they should append here
    document.addEventListener("click", event => { event.preventDefault()
        myMood = !myMood
        console.log(event.target)
        const characterMoodButton = event.target.closest(".character-card").querySelector(".mood-btn")
        // const characterImgTag = document.querySelector(".character-image")
        if (event.target.matches(".mood-btn")) {

            const id = event.target.dataset.id
            const charObj = {
                mood: myMood 
            }
            fetch (`http://localhost:3000/characters/${id}`, {
                    method: "PATCH", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(charObj)
            })

            .then(response => response.json())
            .then(updatedCharacter => {
                console.log(updatedCharacter)
            })
            if(myMood) {
                characterMoodButton.style.backgroundColor = "red"
            } 
            // else {
            // //     characterMoodButton.style.backgroundColor = "none"
    
            // // }

        }

    

    })
    


})

