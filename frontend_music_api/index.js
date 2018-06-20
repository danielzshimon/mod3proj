document.addEventListener('DOMContentLoaded', function(){
  const searchBar = document.querySelector("#search_form")
  const api = new Adapter()

  document.addEventListener('click',(e)=>{
    if(e.target.id === 'new_button'){
      renderNewForm()
    }else if(e.target.id === 'render_user_likes'){
      // debugger
      renderLikedAlbums(e.target.dataset.userId)
      //clear div
      //getUsers(e.target.dataset.userId)
      //function for displaying this Shite

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

      api.createAlbum(sendAlbumData(e))
    }else{
      // debugger
    }
  })
})
