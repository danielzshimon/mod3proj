document.addEventListener('DOMContentLoaded', function(){
  const searchBar = document.querySelector("#search_form")
  const api = new Adapter()

  document.addEventListener('click',(e)=>{
    if(e.target.id === 'new_button'){
      renderNewForm()
    // }else if(e.target.id === 'like_album'){
    //   // e.target.dataset.albumId
    //   // post request to add this album to backend
    //   sendAlbumData(e)
    //   console.log('sup');
     }
  })

  document.addEventListener('submit', (e) =>{
    e.preventDefault()//no load

      if(e.target.id === 'search_form'){
        appendAlbums(e.target.album_search_input.value)
    }else if(e.target.id === 'new_form'){
      //on submit new form send to backend and save
      api.createAlbum(makeAlbumData(e))
    }else if(e.target.className === 'album_container'){
      // e.target.dataset.albumId
      // post request to add this album to backend
      sendAlbumData(e)
      console.log('sup');
    }else{
      // debugger
    }
  })
})
