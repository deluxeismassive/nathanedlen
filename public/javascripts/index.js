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

    console.log(window.innerWidth);

    for (i = 0; i < number; i++) {
      var h = (Math.random() * window.innerHeight) + 5
      var w = (Math.random() * 20) + 5
      var p = (Math.random() * 10) + 1
      var ew = (Math.random() * window.innerWidth/2) + 5
      var ns = (Math.random() * 50) + 5
      var cl = parseInt((Math.random() * 10) + 1)
      var color = getRandomColor()
      $('.jumbo').append($('<div>', {style: 'height: '+h+'px; width: '+w+'px; position: absolute; left: '+ew+'px; down: '+ns+'px; border-radius: 0 0 '+(w+p/2)+'px '+(w+p/2)+'px;', class: 'set'}))
      $('.set').last().append($('<div>', {style: 'height: '+h+'px; width: '+w+'px; border: '+p+'px solid '+color+'; position: absolute; left: '+ew+'px; down: '+ns+'px; border-radius: '+(w+p/2)+'px '+(w+p/2)+'px '+(w+p/2)+'px '+(w+p/2)+'px; background-color: '+color+';', class: 'set move' + cl}))
    }
  }

  function createMenu() {
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row red'}).text('Nathan Edlen - Full Stack Developer'))
    // $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row blue'}).text('Web Developer'))
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row yellow'}).text('Projects'))
    $(document.body).append($('<div>', {style: 'border-color:' + getRandomColor()+';', class: 'head_row green'}).text('Contact'))
  }

  createRandomDiv(180)
  createMenu()



  $(function () {
    $('.head_row').click(function(event) {
      if ($(this).hasClass('clicked')) {
        if (this != event.target) {
          return
        }
        $(this).removeClass('clicked')
        $('.head_row').animate({'height': '40px', 'top': "0px"});
        reset();
        // $('.head_row').not(this).show(350);
      } else {
        $(this).addClass('clicked')
        // $('.head_row').not(this).hide(350);
        if ($(this).hasClass('red')) {
          $(this).animate({'height': '195px', 'top': "-230px"});
          $('.head_row').not($(this)).animate({'height': '40px', 'top': "0px"});
          reset();
          setTimeout(function(){generateNathanEdlen()}, 300);
        }
        if ($(this).hasClass('blue')) {
          $(this).animate({'height': '510px', 'top': "-260px"});
          $('.head_row').not($(this)).animate({'height': '40px', 'top': "0px"});
          reset();
        }
        if ($(this).hasClass('yellow')) {
          $(this).animate({'height': '390', 'top': "-230px"});
          $('.head_row').not($(this)).animate({'height': '40px', 'top': "0px"});
          reset();
          setTimeout(function(){generateProjects()}, 450);
        }
        if ($(this).hasClass('green')) {
          $(this).animate({'height': '290px', 'top': "-230px"});
          $('.head_row').not($(this)).animate({'height': '40px', 'top': "0px"});
          reset();
          setTimeout(function(){generateContact()}, 450);
        }
      }
    })
  })

  function generateNathanEdlen() {
    $('.red').append($('<div>', {class: 'biography bioHeader'}).text(`Who is Nathan Edlen?`))
    $('.red').append($('<div>', {class: 'biography'}).text(`Lifelong computer lover with an unyeilding passion for creative, forward thinking projects and web design.`))
    $('.red').append($('<div>', {class: 'biography'}).text(`Full stack engineer with a JavaScript background and front end focus.`))
    $('.red').append($('<div>', {class: 'biography'}).text(`Advocate for those in need, Listener, All-around good guy.`))
    $('.red').append($(`<a href='https://www.linkedin.com/in/nathan-edlen-development'><i class="fa fa-linkedin icon" aria-hidden="true"></i></a>`))
    $('.red').append($(`<a href='https://github.com/deluxeismassive'><i class="fa fa-github icon" aria-hidden="true"></i></a>`))
    // $('.red').append($('<div>', {class: 'link'}))
    // $('.link').append($('<i class="fa fa-linkedin" aria-hidden="true"></i>'))
    // $('.red').append($('<div>', {class: 'link'}))
    // $('.link').append($('<i class="fa fa-linkedin" aria-hidden="true"></i>'))
    $('.red').append($('<div>', {class: 'bioImage'}))
    $('.bioImage').hide()
    $('.bioImage').show(400)
  }

  function reset() {
    $('.projectContainer').remove();
    $('.biography').remove();
    $('.bioImage').remove();
    $('.emailForm').remove();
    $('.icon').remove();
  }

  function generateResume() {

  }

  function generateProjects() {
    generateSingleProject('../images/barricade.png', 'Barricade', 'A simple grid based game where the player attmepts to barricade the computer into not being able to move thier pieces.', 'jQuery, HTML, CSS, JavaScript','https://barricade-7149d.firebaseapp.com')
    generateSingleProject('../images/defense.png', 'Space Defense', 'A tower defense style game where the player battles alien invaders in hopes of preserving the bases energy core.', 'C#, Unity, JavaScript, Python', 'https://spacedefensegame.com')
    generateSingleProject('../images/capital.png', 'smartVotes', `A political app where critical information regarding congress and it's voting history is researched and reconciled against the users own voting wishes.`, 'AngularJS, Knex, Node, PostgresSQL, Auth0', 'https://smartvotes.co')
  }

  function generateSingleProject(imageURL, title, desc, tech, projectURL) {
    $('.yellow').append($('<div>', {class: 'projectContainer'}))
    $('.projectContainer').last().append($('<div>', {class: 'projectImage', style: 'background-image: url('+imageURL+')'}))
    $('.projectContainer').last().append($('<div>', {class: 'projectTitle projectBodyText'}).text(title))
    $('.projectContainer').last().append($('<div>', {class: 'projectDescription projectBodyText'}).text(desc))
    $('.projectContainer').last().append($('<div>', {class: 'projectTech projectBodyText'}).text(tech))
    $('.projectImage').last().append($('<p><a href='+projectURL+'>Click</a></p>'))
  }

  function generateContact() {
    var color = getRandomColor();
    $('.green').append($('<form>', {class: 'emailForm', method: 'POST', action: 'http://formspree.io/nathan.edlen@gmail.com'}))
    $('.emailForm').append($('<span>').text('Send me an Email'))
    $('.emailForm').append($('<input>', {class: 'email input', name: 'email', type: 'email', placeholder: 'Your email'}))
    $('.emailForm').append($('<textarea>', {class: 'body input', name: 'body', type: 'text', placeholder: 'Your message'}))
    $('.emailForm').append($('<button>', {class: 'submitButton', name: 'submitButton', type: 'submit'}).text('CONTACT'))
  }

})
