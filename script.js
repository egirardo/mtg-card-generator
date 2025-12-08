

const formGroup = document.querySelector('.form-group');




const getInfo = async (allCheckboxValues, colorSelection) => {
    

    const params = new URLSearchParams();
    params.append("type", "Legendary Creature");
    allCheckboxValues.forEach(c => params.append("colorIdentity", c));
    const maxPages = 20; // adjust based on expected size
    const randomPage = Math.floor(Math.random() * maxPages) + 1;
    params.append("page", randomPage);


    const url = `https://api.magicthegathering.io/v1/cards?${params.toString()}`;
    try {
        const response = await fetch(url);

        const info = await response.json();

        console.log(info.cards);
        
        const onlyImages = info.cards.filter((card) => {
            return card.imageUrl
        })

        const strictColors = onlyImages.filter(card => {
        const colors = card.colorIdentity ?? [];


        if (colors.length !== allCheckboxValues.length) return false;


        return allCheckboxValues.every(c => colors.includes(c));
        });

        const unique = strictColors.filter(
            (card, index, self) =>
                index === self.findIndex(c => c.name === card.name)
        );

        console.log('filtered length: ', unique.length);
        
        const max = (unique.length); 
        const randomNumber = Math.floor(Math.random() * max);
        
        console.log(unique[randomNumber]);

        console.log('f: ', unique)

        const randomCard = unique[Math.floor(Math.random() * unique.length)];


        // add image
        const img = document.createElement('img');
        img.classList.add("card-img");
        img.src = randomCard.imageUrl;
        img.height = 100;
        const cardImage = document.querySelector('.card-container');
        cardImage.innerHTML = ""; 
        cardImage.appendChild(img);

        //add name
        const name = document.createElement('h2');
        name.classList.add("card-name");
        name.textContent = randomCard.name;
        const cardName = document.querySelector('.card-info');
        cardName.innerHTML = "";
        cardName.appendChild(name);

        if (unique.length === 0) {
            console.log("Empty result, trying another page...");
            return getInfo(allCheckboxValues, colorSelection); // retry
        }
        
        
        
    } catch (error) {
        const errorMessage = document.createElement('p');
        const cardImage = document.querySelector('.card-container');
        cardImage.innerHTML = ""; 
        errorMessage.textContent = "Please try again";
        cardImage.appendChild(errorMessage);
        console.error(error);
    }
}   

formGroup.addEventListener("submit", function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const allCheckboxValues = formData.getAll('checkbox');
        console.log(allCheckboxValues); 
        let colorSelection = allCheckboxValues.join(",");
        console.log(colorSelection);
        getInfo(allCheckboxValues, colorSelection);
})
console.log(document)