document.addEventListener('DOMContentLoaded', function(){
  const api = new Adapter()
  const searchBar = document.querySelector("#search_form")
  const albumBox = document.querySelector(".album_box")
document.addEventListener('click',()=>{
  console.log(api.searchAlbum('dookie'));
})
document.addEventListener('submit', (e) =>{
  e.preventDefault()
  api.searchAlbum(e.target.album_search_input.value).then(albums =>{
    albums.results.forEach(album =>{
      console.log(album);

      albumBox.innerHTML+=createAlbumDiv(album)
    })
  })
})



})
