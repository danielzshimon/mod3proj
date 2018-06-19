//
class Adapter {
  constructor() {
    this.user_url = "http://localhost:3000/"
    this.albums_url = "http://localhost:3000/albums"
    this.base_url = "https://itunes.apple.com/search?term="
  }
  toJSON(data) {
    return data.then((res) => res.json())
  }

  getUsers(){
    return fetch(this.user_url).then(resp => resp.json())
  }

  // searchAlbum(album){
  //   return fetch(`${this.base_url}${album}&entity=album&attribute=albumTerm`).then(resp => resp.json())
  // }

  searchArtists(artist) {
    return fetch(`https://itunes.apple.com/search?term=${artist}&entity=allArtist`).then(resp => resp.json())
  }

  searchSongs(song) {
    return fetch(`https://itunes.apple.com/search?term=${song}&entity=song&attribute=songTerm`).then(resp => resp.json())
  }

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


}
