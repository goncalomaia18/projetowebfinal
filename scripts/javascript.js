

function valida()//Função de validação do formulário
{
    document.getElementById("place").innerHTML="<b>Chamada à função de validação! ;)<b>";
    //var nome = document.getElementById("nome").value;
    //var idade = document.getElementById("idade").value;
    //var nome = document.getElementsByName("nome")[0].value;
    //var idade= document.getElementsByName("idade")[0].value;
    //se name="ambos" em ambos os inputs, então, seria:
    //var nome = document.getElementsByName("ambos")[0].value;
    //var idade = document.getElementsByName("ambos")[1].value;
    //var nome = document.forms["myform"]["nome"].value;
    //var idade = document.forms["myform"]["idade"].value;
    var util = form.util.value;
    var pass = form.pass.value;
    
    //nome:
    //Definição de uma expressão regulares teste do nome
    var detetor1=/[^a-zA-Z]/;
    var flag1 = detetor1.test(util); //flag1 = true se aparece qualquer caracter diferente de uma letra.

    c1 = document.getElementById("util");
    if(util.length==0)
    {
      window.alert("o campo nome está vazio!");
      c1.value = "Campo vazio";
      c1.style.border="2px dashed black";
      c1.style.background="red";
      return false;
    }
    else if(isNaN(util) && !flag1)
          {
            c1.value = "Campo OK!";
            c1.style.background="green"; 
          }
          else
          {
            window.alert("Campo Inválido!");
            c1.value = "Campo Inválido!";
            c1.style.border="2px dashed brown";
            c1.style.background="magenta"; 
            return false;     
          }

  //idade:
  c2 = document.getElementById("pass");
  if(pass.length==0)
    {
      window.alert("o campo idade está vazio!");
      c2.value = "Campo vazio";
      c2.style.border="2px dashed black";
      c2.style.background="red";
      return false;
    }
    else if(!isNaN(util))
          {
            c2.value = "Campo OK!";
            c2.style.background="green"; 
          }
          else
          {
            window.alert("Campo Inválido!");
            c2.value = "Campo Inválido!";
            c2.style.border="2px dashed brown";
            c2.style.background="magenta"; 
            return false;     
          }

   return true;//não é necessário porque dá true por default
  }
