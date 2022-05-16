const API = "https://api.themoviedb.org/3/";

export function get (path){
    return fetch(API + path,{
            headers:{
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBkODlmZGUxMjhiMGE3NGI5YWVlNDUxOGRiOTdmMCIsInN1YiI6IjYyM2E5OTMyNGYzYTRjMDA1Y2JiZTBiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIme6WK9JIfqjTw-5EFKhCvqn91jY6UHgpKc9SnMqbo",
                "Content-Type":"application/json;charset=utf-8",
            },
        })
            .then((result) => result.json())
}