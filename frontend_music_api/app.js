function createAlbumDiv(album){
  return`<div data-album-id=${album.collectionId}>
    <h1>${album.collectionName}</h1>
    <img src="${album.artworkUrl100}" alt="">
    <h1>${album.artistName}</h1>
    <p>${album.collectionPrice}</p>
    <p>------------------------------------------------</p>
    <br>


  </div>`
}
