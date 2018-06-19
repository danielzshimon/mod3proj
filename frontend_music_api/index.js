document.addEventListener('DOMContentLoaded', function(){
  const searchBar = document.querySelector("#search_form")
  const api = new Adapter()

  document.addEventListener('click',(e)=>{
  ///////func///////
  if(e.target.id === "new_button"){
    renderNewForm()
  }


  // if(e.target)
  })
  document.addEventListener('submit', (e) =>{
    e.preventDefault()//no load
      if(e.target.id === 'search_form'){
        appendAlbums(e.target.album_search_input.value)
    }else if(e.target.id === 'new_form'){
      debugger
    }

  })

})
