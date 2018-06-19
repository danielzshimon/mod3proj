document.addEventListener('DOMContentLoaded', function(){
  const searchBar = document.querySelector("#search_form")
  document.addEventListener('click',(e)=>{
  ///////func///////
  console.log(e.target);
  // if(e.target)
  })
  document.addEventListener('submit', (e) =>{
    e.preventDefault()//no load
    appendAlbums(e.target.album_search_input.value)
  })

})
