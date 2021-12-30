export const fetchMovies = async (dispatch) => {

    let resp = await fetch('/api/movies')
    if(resp.ok){
        let movies = await resp.json()
        dispatch({type: "ADDING_MOVIES", movies})
    }else{
        let {errors} = resp.json()
        alert(errors)
    }

}