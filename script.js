const url = `https://api.magicthegathering.io/v1/cards`;


const getInfo = async () => {
    try {
        const response = await fetch(url);

        const info = await response.json();

        const cardNumber = Math.random();
        console.log(info.cards);
        console.log(info.cards[48].supertypes[0]);

        const img = document.createElement('img');
        img.classList.add("card-img");
        img.src = info.cards[48].imageUrl;
        img.height = 100;
        const cardImage = document.querySelector('.card-container');
        console.log(cardImage);
        cardImage.appendChild(img);

        
        
    } catch (error) {
        console.error(error);
    }
}   

getInfo();
console.log(document)