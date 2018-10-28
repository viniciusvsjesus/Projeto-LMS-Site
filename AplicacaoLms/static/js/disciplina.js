window.onload = function(){

    /* CURSO DISCIPLINA */
    document.getElementById("btnSistemas").onclick = function (){
        document.getElementById('CursoText').innerHTML = 'SISTEMAS DE INFORMAÇÃO';
        document.getElementById('disciplina1').innerHTML = 'Comunicação e Expressão (EAD): 80 horas';
        document.getElementById('disciplina2').innerHTML = 'Fundamentos de Banco de Dados: 80 horas';
        document.getElementById('disciplina3').innerHTML = 'Introdução a Internet das Coisas - IOT: 80 horas';
        document.getElementById('disciplina4').innerHTML = 'Linguaguem de Programação I: 80 horas';
        document.getElementById('disciplina5').innerHTML = 'Lógica de Programação: 80 horas';
        document.getElementById('disciplina6').innerHTML = 'Matemática Aplicada: 80 horas';
        document.getElementById('disciplina7').innerHTML = 'Subtotal: 480 horas'; 

        esconde();
    }


    document.getElementById("btnAds").onclick = function (){
        document.getElementById('CursoText').innerHTML = 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS';
        document.getElementById('disciplina1').innerHTML = 'Comunicação e Expressão (EAD): 80 horas';
        document.getElementById('disciplina2').innerHTML = 'Fundamentos de Banco de Dados: 80 horas';
        document.getElementById('disciplina3').innerHTML = 'Introdução a Internet das Coisas - IOT: 80 horas';
        document.getElementById('disciplina4').innerHTML = 'Linguaguem de Programação I: 80 horas';
        document.getElementById('disciplina5').innerHTML = 'Lógica de Programação: 80 horas';
        document.getElementById('disciplina6').innerHTML = 'Matemática Aplicada: 80 horas';
        document.getElementById('disciplina7').innerHTML = 'Subtotal: 480 horas';   
    }

    document.getElementById("btnRedes").onclick = function (){
        document.getElementById('CursoText').innerHTML = 'REDES DE COMPUTADORES';
        document.getElementById('disciplina1').innerHTML = 'Administração de Redes e Sistemas: 80 horas';
        document.getElementById('disciplina2').innerHTML = 'Arquitetura de Redes de Computadores: 80 horas';
        document.getElementById('disciplina3').innerHTML = 'Cabeamento Estruturado: 80 horas';
        document.getElementById('disciplina4').innerHTML = 'Linguaguem de Programação I: 80 horas';
        document.getElementById('disciplina5').innerHTML = 'Comunicação e Expressão (EAD): 80 horas';
        document.getElementById('disciplina6').innerHTML = 'Fundamentos de Sistemas Operacionais: 40 horas';
        document.getElementById('disciplina7').innerHTML = 'Introdução a Internet das Coisas - IOT: 80 horas'; 
        document.getElementById('disciplina8').innerHTML = 'Libras: 40 horas'; 
        document.getElementById('disciplina9').innerHTML = 'Programação em Redes: 80 horas';
        document.getElementById('disciplina10').innerHTML = 'Subtotal: 560 horas';      
    }

    document.getElementById("btnAdm").onclick = function (){
        document.getElementById('CursoText').innerHTML = 'ADMINISTRAÇÃO';
        document.getElementById('disciplina1').innerHTML = 'Comunicação e Expressão (EAD): 80 horas';
        document.getElementById('disciplina2').innerHTML = 'Fundamentos da Administração: 80 horas';
        document.getElementById('disciplina3').innerHTML = 'Macroeconomia: 80 horas';
        document.getElementById('disciplina4').innerHTML = 'Matemática aplicada: 80 horas';
        document.getElementById('disciplina5').innerHTML = 'Modelos de Negócios e Empreendedorismo: 80 horas';
        document.getElementById('disciplina6').innerHTML = 'Pensamento Crítico e Ética: 80 horas';
        document.getElementById('disciplina7').innerHTML = 'Subtotal: 480 horas'; 
    }

}


$(document).ready(function(){
    $("#btnSistemas").click(function esconde(){
      $("#disciplina8").hide();
      $("#disciplina9").hide();
      $("#disciplina10").hide();
  });
  $("#btnAds").click(function esconde(){
      $("#disciplina8").hide();
      $("#disciplina9").hide();
      $("#disciplina10").hide();
  });
  $("#btnRedes").click(function esconde(){
      $("#disciplina8").show();
      $("#disciplina9").show();
      $("#disciplina10").show();
  });
  $("#btnAdm").click(function esconde(){
    $("#disciplina8").hide();
    $("#disciplina9").hide();
    $("#disciplina10").hide();
    });
});