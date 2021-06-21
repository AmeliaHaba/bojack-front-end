class Character {

    static all = []
    
    constructor(id, name, depressed, animal, mood){
        this.id = id
        this.name = name
        this.depressed = depressed
        this.animal = animal
        this.mood = mood
        console.log(this)
        Character.all.push(this)
        this.renderCharacter()   

    }


    renderCharacter() {
        const characterCollectionDiv = document.querySelector(".grid-container")
        const characterCardDiv = document.createElement("div")

        characterCardDiv.classList.add("character-card")
        characterCardDiv.dataset.id = this.id
        characterCardDiv.id = this.id
        characterCardDiv.innerHTML += this.characterHTML()

        
        const characterImgTag = document.querySelector(".character-image")
        const characterMoodBtnTag = characterCardDiv.querySelector(".mood-btn")
        const characterTraitBtn = document.querySelector(".trait-btn")
        
       
        // if(this.mood === true) {
        //     characterMoodBtnTag.style.backgroundColor = "red"
        // } else {
        //     characterMoodBtnTag.style.backgroundColor = "none"

        // }


        characterCardDiv.addEventListener("click", event => {
           if (event.target.matches(".trait-btn")) {
            console.log(event.target)

           }

      
            
         API.addFacts(characterCardDiv.id)
            
            

           
        })

        characterCollectionDiv.appendChild(characterCardDiv)

    }

    characterHTML() {
        return `
            <img src="images/${this.name.replace(" ", "-")}.jpeg" class="character-image">
            <p class="character-info-el"><b>${this.name}</b></p><br>
            <div class="character-facts"></div>
            <button data-id="${this.id}" class="trait-btn">Traits</button>
            <button data-id="${this.id}" class="mood-btn">Mood</button>
            <br><br>
        `
    }
  

}



