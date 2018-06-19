const api = new Adapter()
const albumBox = document.querySelector(".album_box")
const newFormHolder = document.getElementById('new_form_holder')
// const newFormAlbumName = document.getElementById('new_form').album_new_name_input
// const newFormArtistName = document.getElementById('new_form').album_new_artist_name_input
// const newFormArtUrl = document.getElementById('new_form').album_new_art_url
// const newFormAlbumPrice = document.getElementById('new_form').album_new_price

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
function createNewForm(){
return`<form id="new_form" action="index.html" method="post">
        <input id='album_new_name_input' placeholder="Album Name" type="text">
        <input id='album_new_artist_name_input' placeholder="Artist Name" type="text">
        <input id='album_new_art_url' placeholder="Album artwork(url)" type="text">
        <input id='album_new_price' placeholder="Album price" type="number">
        <button id='new_form_submit' type="submit" name="button">New dude</button>
      </form><br>
`
}

function renderNewForm(){
  newFormHolder.innerHTML=createNewForm()
}
function removeNewForm(){
  newFormHolder.innerHTML=''
}

function appendAlbums(e){
  albumBox.innerHTML=''
  api.searchAlbums(e).then(albums =>{
    albums.results.forEach(album =>{
      albumBox.innerHTML+=createAlbumDiv(album)
    })
  })
}
