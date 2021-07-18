$('.User-avtar').click(function(){
    if( $(".User-Dropdown").hasClass( "U-open" ) ){
            $('.User-Dropdown').removeClass("U-open");
    }
    else {
            $('.User-Dropdown').addClass("U-open");
    }
  });

let elasticSearchBtn = document.querySelector(".elastic__search--button")

let main = document.querySelector(".main")

let elasticSearch = document.querySelector(".header__elastic--search")

let body =document.querySelector("body")

let searcher = document.querySelector("#name")

let header = document.querySelector(".header")

let headerSearch = document.querySelector('.header__search')

let headerNavMenu = document.querySelector('.header__nav--list')

function replace() {
  $('.header__nav').append( $('.header__row>form') );
}

elasticSearchBtn.addEventListener("click", function(e) {
    main.classList.add('active')
    body.classList.remove('lock')
    elasticSearch.classList.add('hidden')
    headerNavMenu.classList.add('hidden')
    header.classList.add('deactive')
    $( replace )
    e.stopPropagation();
})




var pluginList = [
  {
    name: 'AdminSync',
    description: 'Идеальный дом не далеко от города, с бассейном и сауной. Все необходимые условия',
    link: '#',
    image: '../img/person/1.png',
    link: 'profile.html'
  },
  {
    name: 'AdminSync',
    description: 'Идеальный дом не далеко от города, с бассейном и сауной. Все необходимые условия',
    link: '#',
    image: '../img/person/1.png',
    link: 'profile.html'
  },
]


pluginList.forEach(function (plugin) {

  var child = document.createElement('li')

  var childText = document.createTextNode(`${plugin.name} ${plugin.description}`)
  child.appendChild(childText)

})


document.getElementById('search').addEventListener('input', function() {


  var searchResult = document.getElementById('plugin-list')

  while (firstChild = searchResult.firstElementChild) {
    searchResult.removeChild(firstChild)
  }


  var searchNeedle = document.getElementById('search').value

  if(searchNeedle.length > 0) {


    var searchResults = []
    searchResults = pluginList.filter(function(value) {

      return (value.name.search(new RegExp(searchNeedle, 'i')) !== -1)
    })

    

    
    searchResults.forEach(function(value) {
      
      var listItem = document.createElement('li')
      let listItemTitle = document.createElement('a')
      listItemTitle.setAttribute('href', value.link)
      var listItemText = document.createTextNode(value.name)
      listItemTitle.appendChild(listItemText)
      let itemImage = document.createElement('img')
      itemImage.setAttribute('src', value.image)
      listItem.appendChild(itemImage)
      listItem.appendChild(listItemTitle)
      let listItemDescription = document.createElement('p')
      let descriptionText = document.createTextNode(value.description)
      listItemDescription.appendChild(descriptionText)
      listItem.appendChild(listItemDescription)
      searchResult.appendChild(listItem)
    })
  }
})