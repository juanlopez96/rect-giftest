export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iiJ09mj1f94a9yXZGj9yIinY39pKEEps&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    if (resp.ok) {
        const { data } = await resp.json();
        const imagen = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        });
        return imagen;
    }

}