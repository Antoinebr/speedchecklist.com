/**
 * Get content from wordpress via REST Api
 */

const API_URL = "https://speedchecklist.com/api/";


export const getPosts = () => {

    return  fetch(`${API_URL}/wp-json/wp/v2/posts?wpse_custom_order=menu_order&order=asc&per_page=20&_embed`)
    .then( (response) => response.json() )
    .then( (res) => {

        return res;

    }).catch( (err) => console.log(res) );

}