const API_KEY = '5aa8dbee009066f1ced6b72840c8196b';
const API_BASE = 'https://api.themoviedb.org/3';


//originais da netflix
//recomendados- em destaque no momento
//em alta top rated
//filmes acçaõ
//comedia
//terror
//romance
//documentarios

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: "Recomendados para Voce",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Em Alta",
                items: await basicFetch(`/movie/toprated?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'action',
                title: "Filmes de Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Filmes de Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Filmes de Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: "Filmes de Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentarios",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
     
    getMovieInfo: async (movieId, type ) =>{
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                info = await basicFetch(`/movie/${movieId}^?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}^?language=pt-BR&api_key=${API_KEY}`);
                break;
                default: 
                info = null;
                break;
            }
        }


        return info;
    } 

}