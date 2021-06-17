document.addEventListenter("DOMContentLoaded", function(){
    // whatever has to happen first in application
    // first load our characters 
    // get fetch reqyest to back end to load the charactesr. This lives in API class
    API.addCharacters()
    // if there is any event lsiteners that need to get appended to the apge if it loads, they should append here
})