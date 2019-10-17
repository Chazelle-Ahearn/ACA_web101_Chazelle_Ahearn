
'use strict';

//make colors draggable
//order colors big to small
//larger block can not go on top smaller block
//define a win

$(document).ready(function() {
  $('.draggable').draggable({
    revert: 'invalid'
  })

  $('#drop-area1, #drop-area2, #drop-area3').droppable({
    drop: function( event, ui ){
      let $last = ($(this).children().last()).data('block');
      let $blockVal = $(ui.draggable).data('block');
      if($blockVal > $last){
        $(ui.draggable).draggable('option', 'revert', true);
      }else{
        $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
      }
      checkForWin();
    }
  })

  function checkForWin(){
    if($('[data-stack=3]').children().length === 4){
      $('#announce-game-won').text(`A WIN FOR THE HUMAN!`)
    }
  }
  
});