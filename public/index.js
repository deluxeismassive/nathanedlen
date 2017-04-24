$(document).ready(() => {

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function createRandomDiv (number) {

    for (i = 0; i < number; i++) {
      var h = (Math.random() * 580) + 5
      var w = (Math.random() * 20) + 5
      var p = (Math.random() * 10) + 1
      var ew = (Math.random() * 695) + 5
      var ns = (Math.random() * 850) + 5
      var cl = parseInt((Math.random() * 10) + 1)
      var color = getRandomColor()
      $('.jumbo').append($('<div>', {style: 'height: '+h+'px; width: '+w+'px; position: absolute; left: '+ew+'px; down: '+ns+'px; border-radius: 0 0 '+(w+p/2)+'px '+(w+p/2)+'px;', class: 'set'}))
      $('.set').last().append($('<div>', {style: 'height: '+h+'px; width: '+w+'px; border: '+p+'px solid '+color+'; position: absolute; left: '+ew+'px; down: '+ns+'px; border-radius: '+(w+p/2)+'px '+(w+p/2)+'px '+(w+p/2)+'px '+(w+p/2)+'px; background-color: '+color+';', class: 'set move' + cl}))
    }
  }

  function createMenu() {
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row red'}).text('Nathan Edlen'))
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row blue'}).text('Web Developer'))
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row yellow'}).text('Inspiration'))
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row green'}).text('Contact'))
  }

  createRandomDiv(100)
  createMenu()
})
