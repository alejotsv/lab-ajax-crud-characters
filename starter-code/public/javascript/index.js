const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((result) => {
      let allChar = result.data;
      let allCharDiv = $('.characters-container')

      for(let i = 0; i< allChar.length; i++){        
       
        allCharDiv.append(
        `<div class="character-info">
          <div class="name">${allChar[i].name}</div>
          <div class="occupation">${allChar[i].occupation}</div>
          <div class="cartoon">${allChar[i].debt}</div>
          <div class="weapon">${allChar[i].weapon}</div>
        </div>
        `

        )
      }

      
    });        

  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
