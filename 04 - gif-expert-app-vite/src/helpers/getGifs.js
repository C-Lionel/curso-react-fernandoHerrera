
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=VI0hIHCpgxMFF5GSXKQLUa90KaUg7EKC&limit=20&q=${ category }`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json(); // data = []  es igualarlo a un arreglo para asegurarnos que siempre haya data

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    return gifs;

}