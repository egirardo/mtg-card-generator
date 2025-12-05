const maxPage = 100;
const randomPage = Math.floor(Math.random() * maxPage);


const formGroup = document.querySelector('.form-group');
let colorSelection = "W"

formGroup.addEventListener("submit", function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const allCheckboxValues = formData.getAll('checkbox');
        console.log(allCheckboxValues); 
        let colorSelection = allCheckboxValues.join(",");
        console.log(colorSelection);
})



// how to set strict types in url? how to set multiple search parameters ie coloridentity and pages?
const url = `https://api.magicthegathering.io/v1/cards?colorIdentity=${colorSelection}&page=${randomPage}`;


// how to remove repeat results
const getInfo = async () => {
    try {
        const response = await fetch(url);

        const info = await response.json();

        console.log(info.cards);
        
        const onlyImages = info.cards.filter((card) => {
            return card.imageUrl
        })
        //fix that below?
        const strictColors = onlyImages.filter((card) => {
            return card.colorIdentity===colorSelection;
        })
        const filtered = onlyImages.filter((card) => {
            
            return card.type?.includes('Legendary Creature')
        })
        
        const max = (filtered.length); // The maximum value (exclusive)
        const randomNumber = Math.floor(Math.random() * max);
        
        console.log(filtered[randomNumber]);

        console.log('f: ', filtered)

        const randomCard = filtered[randomNumber];


        // add image
        const img = document.createElement('img');
        img.classList.add("card-img");
        img.src = randomCard.imageUrl;
        img.height = 100;
        const cardImage = document.querySelector('.card-container');
        cardImage.appendChild(img);

        //add name
        const name = document.createElement('h2');
        name.classList.add("card-name");
        name.textContent = randomCard.name;
        const cardName = document.querySelector('.card-info');
        cardName.appendChild(name)
        
        
    } catch (error) {
        console.error(error);
    }
}   

getInfo();
console.log(document)