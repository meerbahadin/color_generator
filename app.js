$(document).ready(function () {
    const getRandomColor = () => {
      let letters = '0123456789ABCDEF'
      let color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
    const displayColors = () => {
      $('.box').each(function () {
        let color = getRandomColor()
        $(this).css({
          'background-color': color,
        })
        $(this).children('.hex').text(color)
        $(this).children('.rbga').text($(this).css('background-color'))
        $(this).addClass('animated flipInX')
        setTimeout(function () {
          $('.box').removeClass('animated flipInX')
        }, 500)
      })
    }
  
    $('.getcolors').click(function () {
      displayColors()
    })
  
    $('.box p').click(function () {
      let colorCode = $('<textarea>')
      let color = $(this).text()
      $('body').append(colorCode)
      colorCode.val(color).select()
  
      document.execCommand('copy')
  
      colorCode.remove()
  
      $('.notfication').show().fadeOut(2000)
    })
    document.onload = displayColors()
  })
  