const api = new Adapter()
const albumBox = document.querySelector(".album_box")

function usersLogTest(){
  console.log(api.getUsers())
}

function createAlbumDiv(album){
  return`<div class="album_container" data-album-id=${album.collectionId}>
    <h1>${album.collectionName}</h1>
    <img src="${album.artworkUrl100}" alt="">
    <h1>${album.artistName}</h1>
    <p>${album.collectionPrice}</p>
    <p>------------------------------------------------css</p>
    <br>
  </div>`
}

function appendAlbums(e){
  api.searchAlbum(e).then(albums =>{
    albums.results.forEach(album =>{
      albumBox.innerHTML+=createAlbumDiv(album)
    })
  })
}
