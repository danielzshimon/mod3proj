//
class Adapter {
  constructor() {
    this.base_url = "http://localhost:3000/"
    // this.base_url = "https://itunes.apple.com/search?term="
  }
  // getAlbum(){
  //   return fetch(`${this.base_url}&entity=album&attribute=albumTerm`).(resp => resp.json())
  // }
  getUsers(){
    return fetch(this.base_url).then(resp => resp.json())
  }
  searchAlbum(album){
    return fetch(`${this.base_url}${album}&entity=album&attribute=albumTerm`).then(resp => resp.json())
  }

  searchArtists(artist) {
    return fetch(`https://itunes.apple.com/search?term=${artist}&entity=allArtist`).then(resp => resp.json())
  }

  searchSongs(song) {
    return fetch(`https://itunes.apple.com/search?term=${song}&entity=song&attribute=songTerm`).then(resp => resp.json())
  }


}



// results
// :
// Array(3)
// 0
// :
// amgArtistId
// :
// 4147
// artistId
// :
// 462006
// artistName
// :
// "Bob Dylan"
// artistViewUrl
// :
// "https://itunes.apple.com/us/artist/bob-dylan/462006?uo=4"
// artworkUrl60
// :
// "https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/b2/ae/08/b2ae0875-2495-4d23-6f13-a91516ebd384/source/60x60bb.jpg"
// artworkUrl100
// :
// "https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/b2/ae/08/b2ae0875-2495-4d23-6f13-a91516ebd384/source/100x100bb.jpg"
// collectionCensoredName
// :
// "The Freewheelin' Bob Dylan"
// collectionExplicitness
// :
// "notExplicit"
// collectionId
// :
// 190758914
// collectionName
// :
// "The Freewheelin' Bob Dylan"
// collectionPrice
// :
// 9.99
// collectionType
// :
// "Album"
// collectionViewUrl
// :
// "https://itunes.apple.com/us/album/the-freewheelin-bob-dylan/190758914?uo=4"
// copyright
// :
// "℗ Originally Released 1963 Sony Music Entertainment Inc."
// country
// :
// "USA"
// currency
// :
// "USD"
// primaryGenreName
// :
// "Rock"
// releaseDate
// :
// "1963-05-24T07:00:00Z"
// trackCount
// :
// 13
// wrapperType
// :
// "collection"
