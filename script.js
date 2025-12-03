const url = `https://api.magicthegathering.io/v1/cards`;

const getInfo = async () => {
    try {
        const response = await fetch(url);

        const info = await response.json();
        console.log(info);
        
    } catch (error) {
        console.error(error);
    }
}   

getInfo();
console.log(document)