$(function() {

  abrirJanela();
  function abrirJanela() {
    $('.btn').click(function(e) {
      e.stopPropagation();
      $('.bg').fadeIn();
    })
  }

  verificarCliqueFechar();
  function verificarCliqueFechar() {
    $('body,.closeBtn').click(function() {
      $('.bg').fadeOut();

    })

    $('.form').click(function(e) {
      e.stopPropagation();
    })
  }

})

