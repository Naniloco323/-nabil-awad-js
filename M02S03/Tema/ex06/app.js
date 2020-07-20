
let buttonElement = $('.btn') ;
let displayElements = $('.display');
let $message =  $('<p>', {
  text: 'butonul a fost apasat in aceasta rezolutie',
});

buttonElement.on('click', () => {
  let windowWidth = $(window).width();
  
  let targetClassName = $('lo-res');

  
  if (windowWidth >= 650) {
    targetClassName = 'mid-res';
  }

  if (windowWidth > 1000) {
    targetClassName = 'hi-res';
  }

  for (let i = 0; i < displayElements.length; i++) {
    if ( $(displayElements[i]).hasClass(targetClassName)) {
    
      displayElements[i].append($message.text());
     }
   }
});


