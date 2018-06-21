
class Adapter {
  constructor() {//urls for our requests//make more dynamic
    this.user_url = "http://localhost:3000/users/1"
    this.albums_url = "http://localhost:3000/albums"
    this.liked_albums_url = "http://localhost:3000/users/1/liked_albums"

  }

  toJSON(data) {//needed
    return data.then((res) => res.json())
  }

  getUsers(){//maybe not needed
    return fetch(this.user_url).then(resp => resp.json())
  }
// post to backend so that the backend 'create'
// method can use a rest get request to query itunes api
  searchAlbums(data){
  let options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return this.toJSON(fetch(this.albums_url, options));
  }

  createAlbum(data){
  let options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return this.toJSON(fetch(this.liked_albums_url, options));
}

  getUserLikes(userId) {

    return this.toJSON(fetch(this.user_url));
  }
  deleteFav(userId,albumId){
    let options = {
      method:'DELETE',
      body: JSON.stringify(albumId)

    }
    return fetch(`${this.liked_albums_url}/${albumId}`,options)

  }

}
