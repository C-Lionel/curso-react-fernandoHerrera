

const getURL = async () => {

    try {

        const apiKey = '3wu7T4N3Qlt2bKdvQGiCNeJJ9YfQ7c47';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json()
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        // Todo: Manejo del Error
        console.error(error);
    }
}

getURL();







// peticion

// .then( resp => resp.json())
// .then(({data}) => {
//     const url = data.images.original.url;
    
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);

// })
// .catch(console.warn);