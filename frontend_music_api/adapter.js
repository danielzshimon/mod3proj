
class Adapter {
  constructor() {//urls for our requests
    this.user_url = "http://localhost:3000/"
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
// ,
  // likeAlbum(data){
  // let options = {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // };
  // return this.toJSON(fetch(this.????, options));
  // }
}


// searchArtists(artist) {
//   return fetch(`https://itunes.apple.com/search?term=${artist}&entity=allArtist`).then(resp => resp.json())
// }
//
// searchSongs(song) {
//   return fetch(`https://itunes.apple.com/search?term=${song}&entity=song&attribute=songTerm`).then(resp => resp.json())
// }
