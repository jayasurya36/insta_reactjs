
const BASE_URL = 'https://instaclonejjserver.onrender.com'
function postData(data){
    return fetch(`${BASE_URL}/post` , {
        method : "POST",
        body : data
    })
}
function getPosts(){
    return fetch(`${BASE_URL}/posts`).then(res => res.json())
}
export {
    postData,
    getPosts
}