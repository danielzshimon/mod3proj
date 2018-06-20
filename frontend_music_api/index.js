document.addEventListener('DOMContentLoaded', function(){
  const searchBar = document.querySelector("#search_form")
  const api = new Adapter()

  document.addEventListener('click',(e)=>{
    if(e.target.id === "new_button"){
      renderNewForm()
    }
  })

  document.addEventListener('submit', (e) =>{
    e.preventDefault()//no load
      if(e.target.id === 'search_form'){
        appendAlbums(e.target.album_search_input.value)
    }else if(e.target.id === 'new_form'){
      //on submit new form send to backend and save
      api.createAlbum(makeAlbumData(e))
    }
  })
})
