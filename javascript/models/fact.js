class Fact {
    constructor (id, fact, character_id){
        this.id = id
        this.fact = fact
        this.character_id = character_id 

        this.renderFact()
    }

    renderFact() {
        // const traitsButton = document.querySelector(".traits-btn")
        if(document.querySelector(`#fact-${this.id}`)){
            return
        }
        const characterFactDiv = document.getElementById(`character-${this.character_id}`)
        console.log(characterFactDiv)
        const characterFactP = document.createElement("p")

        characterFactP.classList.add("fact")
        characterFactP.dataset.id = characterFactDiv.id 
        characterFactP.id = `fact-${this.id}` 
        characterFactP.innerHTML = `${this.fact}`
        
        characterFactDiv.appendChild(characterFactP)
    }
}