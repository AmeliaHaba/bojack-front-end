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

    static findById(id){
        return Character.all.find(character => character.id === parseInt(id))
    }

    renderCharacter() {
        const characterCollectionDiv = document.querySelector(".grid-container")
        const characterCardDiv = document.createElement("div")

        characterCardDiv.classList.add("character-card")
        characterCardDiv.dataset.id = this.id
        characterCardDiv.id = `character-${this.id}`
        characterCardDiv.innerHTML += this.characterHTML()

        
        const characterImgTag = document.querySelector(".character-image")
        const characterMoodBtnTag = characterCardDiv.querySelector(".mood-btn")
        const characterTraitBtn = characterCardDiv.querySelector(".trait-btn")
        characterTraitBtn.addEventListener("click", API.addFacts)
        
        if(this.mood === true) {
            characterMoodBtnTag.style.backgroundColor = "red"
        } else {
            characterMoodBtnTag.style.backgroundColor = "rgb(114, 113, 113)"

        }

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



