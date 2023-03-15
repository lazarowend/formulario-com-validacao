abrirJanela();
function abrirJanela() {
  $('.btn').click(function(e) {
    e.stopPropagation();
    $('.bg').fadeIn();
  })
};

verificarCliqueFechar();
function verificarCliqueFechar() {
  $('body,.closeBtn').click(function() {
    $('.bg').fadeOut();
  })

  $('.form').click(function(e) {
    e.stopPropagation();
  })
};

$('form#form1').submit(function(e) {
  //e.preventDefault()


  var nome = $('input[name=nome]').val();
  var telefone = $('input[name=telefone]').val();
  var email = $('input[name=email]').val();

  if (verificarNome(nome) == false) {
    aplicarCampoInvalido($('input[name=nome]'));
    return false
  } else if (verificarTelefone(telefone) == false) {
    aplicarCampoInvalido($('input[name=telefone]'));
    return false
  } else if (verificarEmail(email) == false) {
    aplicarCampoInvalido($('input[name=email]'));
    return false
  }
  else {
    alert('Seu cadastro foi enviado com sucesso!!!');
  }

})

$('input[type=text]').focus(function() {
  resetarCampoInvalido($(this));
})

function verificarNome(nome) {
  if(nome == '') {
    return false
  }
  var splitNome = nome.split(' ');
  if(splitNome.length >= 2 & splitNome != null) {
    for(var i = 0; i < splitNome.length; i++)
      if(splitNome[i].match(/[a-z]{1,}/)) {
      }else {
        aplicarCampoInvalido($('input[name=nome]'))
      }
  }else {
      return false
  }
} 

function verificarTelefone(telefone) {
  if(telefone == '') {
    return false
  };

  if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null) {
    return false
  }
}

function verificarEmail(email) {
  if(email == '') {
    return false
  }

  if(email.match(/^[a-z0-9-_]{1,}@[a-z.]{1,}$/) == null) {
    return false
  }
}

function aplicarCampoInvalido(campo) {
  campo.css('border','1px solid red');
  campo.css('color','red');
  campo.val('Inválido!')
}

function resetarCampoInvalido(campo) {
  campo.css('border','1px solid #ccc');
  campo.css('color','#000');
  if(campo.val() == 'Inválido!') {
    campo.val('');
  }
}
