/*

 Configuração para o painel versão paga!
 opções simples, apenas para definir algumas coisas!
 
 Altere apenas ás mensagens!
 
 Lembrando está opção não funciona para planos gratuitos!

*/

$(document).ready(function () {
  /*
  
    Equipes do servidor!

  */
  
   var prefix = "SyncMarket";
  
   var title_team = "Nossa equipe";
   var title_sub_team = "Conheça os membros que trabalham na "+prefix+".";
   var title_team_categoria = "Membros da equipe";

   var owner = "[MASTER]";
   var manager = "[GERENTE]";
   var administrator = "[ADMINISTRADOR]";
   var moderator = "[MODERADOR]";
   var helper = "[AJUDANTE]";
   var builder = "[BUILDER]";


    $("#title_team").text(title_team); /* Você não pode modificar o target! */
    $("#title_sub_team").text(title_sub_team); /* Você não pode modificar o target! */
    $("#title_team_categoria").text(title_team_categoria); /* Você não pode modificar o target! */

    $("#owner").text(owner); /* Você não pode modificar o target! */
    $("#manager").text(manager); /* Você não pode modificar o target! */
    $("#administrator").text(administrator); /* Você não pode modificar o target! */
    $("#moderator").text(moderator); /* Você não pode modificar o target! */
    $("#helper").text(helper); /* Você não pode modificar o target! */
    $("#builder").text(builder); /* Você não pode modificar o target! */


  /* Configurando membros do cargo owner */ 
  
    var owner_jogador1 = "Steve";
    var owner_jogador2 = "Steve";
    var owner_jogador3 = "Steve";
    var owner_jogador4 = "Steve";
    var owner_jogador5 = "Steve";
    var owner_jogador6 = "Steve";

  /* Configurando membros do cargo manager */
  
    var manager_jogador1 = "Steve";
    var manager_jogador2 = "Steve";
    var manager_jogador3 = "Steve";
    var manager_jogador4 = "Steve";
    var manager_jogador5 = "Steve";
    var manager_jogador6 = "Steve";
    
  /* Configurando membros do cargo administrator */
  
    var administrator_jogador1 = "Steve";
    var administrator_jogador2 = "Steve";
    var administrator_jogador3 = "Steve";
    var administrator_jogador4 = "Steve";
    var administrator_jogador5 = "Steve";
    var administrator_jogador6 = "Steve";
    
  /* Configurando membros do cargo moderator */
     
    var moderator_jogador1 = "Steve";
    var moderator_jogador2 = "Steve";
    var moderator_jogador3 = "Steve";
    var moderator_jogador4 = "Steve";
    var moderator_jogador5 = "Steve";
    var moderator_jogador6 = "Steve";
    
  /* Configurando membros do cargo helper */
  
    var helper_jogador1 = "Steve";
    var helper_jogador2 = "Steve";
    var helper_jogador3 = "Steve";
    var helper_jogador4 = "Steve";
    var helper_jogador5 = "Steve";
    var helper_jogador6 = "Steve";
    
  /* Configurando membros do cargo builder */
  
    var builder_jogador1 = "Steve";
    var builder_jogador2 = "Steve";
    var builder_jogador3 = "Steve";
    var builder_jogador4 = "Steve";
    var builder_jogador5 = "Steve";
    var builder_jogador6 = "Steve";    

    /* Configurando utilidades */ 

    var mensagemBemVindo = "Bem vindo ao "+prefix;
    var mensagemBemVindo_sub = "Adquira um privilégio para contribuir com o servidor!";
    
    var tituloCardIP = "Let's go! embarque nessa diversão";
    
    var texto1 = "FIM DO PAY TO WIN"; /* Edite o link abaixo */
    var texto2 = "BED WARS 2.1";/* Edite o link abaixo */
    var texto3 = "BOOSTER COLETIVOS"; /* Edite o link abaixo */
    var texto1_sub = "Mais competitividade agora tudo ficou melhor no servidor principalmente tudo!";
    var texto2_sub = "Reconexão e mais";
    var texto3_sub = "Mais coins para todos"; 
    
    var regras = "Você não pode usar hack!";
    
    $("#texto1").text(texto1); /* Você não pode modificar o target! */
    $("#texto2").text(texto2); /* Você não pode modificar o target! */
    $("#texto3").text(texto3); /* Você não pode modificar o target! */
    
    $("#texto1_sub").text(texto1_sub); /* Você não pode modificar o target! */
    $("#texto2_sub").text(texto2_sub); /* Você não pode modificar o target! */
    $("#texto3_sub").text(texto3_sub); /* Você não pode modificar o target! */
    
    $("#msgbemvindo").text(mensagemBemVindo); /* Você não pode modificar o target! */
    $("#msgbemvindo_sub").text(mensagemBemVindo_sub); /* Você não pode modificar o target! */
    
    $("#tituloCardIP").text(tituloCardIP); /* Você não pode modificar o target! */
    $("#regras").text(regras); /* Você não pode modificar o target! */
  
  
  
    document.getElementById("owner_jogador1").src = "https://mc-heads.net/avatar/"+owner_jogador1;
    $("#owner_jogador1").attr("src", "https://mc-heads.net/avatar/"+owner_jogador1);
    $("#n_owner_jogador1").text(owner_jogador1); /* Você não pode modificar o target! */   
    document.getElementById("owner_jogador2").src = "https://mc-heads.net/avatar/"+owner_jogador2;
    $("#owner_jogador2").attr("src", "https://mc-heads.net/avatar/"+owner_jogador2);
    $("#n_owner_jogador2").text(owner_jogador2); /* Você não pode modificar o target! */ 
    document.getElementById("owner_jogador3").src = "https://mc-heads.net/avatar/"+owner_jogador3;
    $("#owner_jogador3").attr("src", "https://mc-heads.net/avatar/"+owner_jogador3);
    $("#n_owner_jogador3").text(owner_jogador3); /* Você não pode modificar o target! */ 
    document.getElementById("owner_jogador4").src = "https://mc-heads.net/avatar/"+owner_jogador4;
    $("#owner_jogador4").attr("src", "https://mc-heads.net/avatar/"+owner_jogador4);
    $("#n_owner_jogador4").text(owner_jogador4); /* Você não pode modificar o target! */ 
    document.getElementById("owner_jogador5").src = "https://mc-heads.net/avatar/"+owner_jogador5;
    $("#owner_jogador5").attr("src", "https://mc-heads.net/avatar/"+owner_jogador5);
    $("#n_owner_jogador5").text(owner_jogador5); /* Você não pode modificar o target! */ 
    document.getElementById("owner_jogador6").src = "https://mc-heads.net/avatar/"+owner_jogador6;
    $("#owner_jogador6").attr("src", "https://mc-heads.net/avatar/"+owner_jogador6);
    $("#n_owner_jogador6").text(owner_jogador6); /* Você não pode modificar o target! */ 
    document.getElementById("manager_jogador1").src = "https://mc-heads.net/avatar/"+manager_jogador1;
    $("#manager_jogador1").attr("src", "https://mc-heads.net/avatar/"+manager_jogador1);
    $("#n_manager_jogador1").text(manager_jogador1); /* Você não pode modificar o target! */   
    document.getElementById("manager_jogador2").src = "https://mc-heads.net/avatar/"+manager_jogador2;
    $("#manager_jogador2").attr("src", "https://mc-heads.net/avatar/"+manager_jogador2);
    $("#n_manager_jogador2").text(manager_jogador2); /* Você não pode modificar o target! */ 
    document.getElementById("manager_jogador3").src = "https://mc-heads.net/avatar/"+manager_jogador3;
    $("#manager_jogador3").attr("src", "https://mc-heads.net/avatar/"+manager_jogador3);
    $("#n_manager_jogador3").text(manager_jogador3); /* Você não pode modificar o target! */ 
    document.getElementById("manager_jogador4").src = "https://mc-heads.net/avatar/"+manager_jogador4;
    $("#manager_jogador4").attr("src", "https://mc-heads.net/avatar/"+manager_jogador4);
    $("#n_manager_jogador4").text(manager_jogador4); /* Você não pode modificar o target! */ 
    document.getElementById("manager_jogador5").src = "https://mc-heads.net/avatar/"+manager_jogador5;
    $("#manager_jogador5").attr("src", "https://mc-heads.net/avatar/"+manager_jogador5);
    $("#n_manager_jogador5").text(manager_jogador5); /* Você não pode modificar o target! */ 
    document.getElementById("manager_jogador6").src = "https://mc-heads.net/avatar/"+manager_jogador6;
    $("#manager_jogador6").attr("src", "https://mc-heads.net/avatar/"+manager_jogador6);
    $("#n_manager_jogador6").text(manager_jogador6); /* Você não pode modificar o target! */     
    document.getElementById("administrator_jogador1").src = "https://mc-heads.net/avatar/"+administrator_jogador1;
    $("#administrator_jogador1").attr("src", "https://mc-heads.net/avatar/"+administrator_jogador1);
    $("#n_administrator_jogador1").text(administrator_jogador1); /* Você não pode modificar o target! */   
    document.getElementById("administrator_jogador2").src = "https://mc-heads.net/avatar/"+administrator_jogador2;
    $("#administrator_jogador2").attr("src", "https://mc-heads.net/avatar/"+administrator_jogador2);
    $("#n_administrator_jogador2").text(administrator_jogador2); /* Você não pode modificar o target! */ 
    document.getElementById("administrator_jogador3").src = "https://mc-heads.net/avatar/"+administrator_jogador3;
    $("#administrator_jogador3").attr("src", "https://mc-heads.net/avatar/"+administrator_jogador3);
    $("#n_administrator_jogador3").text(administrator_jogador3); /* Você não pode modificar o target! */ 
    document.getElementById("administrator_jogador4").src = "https://mc-heads.net/avatar/"+administrator_jogador4;
    $("#administrator_jogador4").attr("src", "https://mc-heads.net/avatar/"+administrator_jogador4);
    $("#n_administrator_jogador4").text(administrator_jogador4); /* Você não pode modificar o target! */ 
    document.getElementById("administrator_jogador5").src = "https://mc-heads.net/avatar/"+administrator_jogador5;
    $("#administrator_jogador5").attr("src", "https://mc-heads.net/avatar/"+administrator_jogador5);
    $("#n_administrator_jogador5").text(administrator_jogador5); /* Você não pode modificar o target! */ 
    document.getElementById("administrator_jogador6").src = "https://mc-heads.net/avatar/"+administrator_jogador6;
    $("#administrator_jogador6").attr("src", "https://mc-heads.net/avatar/"+administrator_jogador6);
    $("#n_administrator_jogador6").text(administrator_jogador6); /* Você não pode modificar o target! */     
    document.getElementById("moderator_jogador1").src = "https://mc-heads.net/avatar/"+moderator_jogador1;
    $("#moderator_jogador1").attr("src", "https://mc-heads.net/avatar/"+moderator_jogador1);
    $("#n_moderator_jogador1").text(moderator_jogador1); /* Você não pode modificar o target! */   
    document.getElementById("moderator_jogador2").src = "https://mc-heads.net/avatar/"+moderator_jogador2;
    $("#moderator_jogador2").attr("src", "https://mc-heads.net/avatar/"+moderator_jogador2);
    $("#n_moderator_jogador2").text(moderator_jogador2); /* Você não pode modificar o target! */ 
    document.getElementById("moderator_jogador3").src = "https://mc-heads.net/avatar/"+moderator_jogador3;
    $("#moderator_jogador3").attr("src", "https://mc-heads.net/avatar/"+moderator_jogador3);
    $("#n_moderator_jogador3").text(moderator_jogador3); /* Você não pode modificar o target! */ 
    document.getElementById("moderator_jogador4").src = "https://mc-heads.net/avatar/"+moderator_jogador4;
    $("#moderator_jogador4").attr("src", "https://mc-heads.net/avatar/"+moderator_jogador4);
    $("#n_moderator_jogador4").text(moderator_jogador4); /* Você não pode modificar o target! */ 
    document.getElementById("moderator_jogador5").src = "https://mc-heads.net/avatar/"+moderator_jogador5;
    $("#moderator_jogador5").attr("src", "https://mc-heads.net/avatar/"+moderator_jogador5);
    $("#n_moderator_jogador5").text(moderator_jogador5); /* Você não pode modificar o target! */ 
    document.getElementById("moderator_jogador6").src = "https://mc-heads.net/avatar/"+moderator_jogador6;
    $("#moderator_jogador6").attr("src", "https://mc-heads.net/avatar/"+moderator_jogador6);
    $("#n_moderator_jogador6").text(moderator_jogador6); /* Você não pode modificar o target! */ 
    document.getElementById("helper_jogador1").src = "https://mc-heads.net/avatar/"+helper_jogador1;
    $("#helper_jogador1").attr("src", "https://mc-heads.net/avatar/"+helper_jogador1);
    $("#n_helper_jogador1").text(helper_jogador1); /* Você não pode modificar o target! */   
    document.getElementById("helper_jogador2").src = "https://mc-heads.net/avatar/"+helper_jogador2;
    $("#helper_jogador2").attr("src", "https://mc-heads.net/avatar/"+helper_jogador2);
    $("#n_helper_jogador2").text(helper_jogador2); /* Você não pode modificar o target! */ 
    document.getElementById("helper_jogador3").src = "https://mc-heads.net/avatar/"+helper_jogador3;
    $("#helper_jogador3").attr("src", "https://mc-heads.net/avatar/"+helper_jogador3);
    $("#n_helper_jogador3").text(helper_jogador3); /* Você não pode modificar o target! */ 
    document.getElementById("helper_jogador4").src = "https://mc-heads.net/avatar/"+helper_jogador4;
    $("#helper_jogador4").attr("src", "https://mc-heads.net/avatar/"+helper_jogador4);
    $("#n_helper_jogador4").text(helper_jogador4); /* Você não pode modificar o target! */ 
    document.getElementById("helper_jogador5").src = "https://mc-heads.net/avatar/"+helper_jogador5;
    $("#helper_jogador5").attr("src", "https://mc-heads.net/avatar/"+helper_jogador5);
    $("#n_helper_jogador5").text(helper_jogador5); /* Você não pode modificar o target! */ 
    document.getElementById("helper_jogador6").src = "https://mc-heads.net/avatar/"+helper_jogador6;
    $("#helper_jogador6").attr("src", "https://mc-heads.net/avatar/"+helper_jogador6);
    $("#n_helper_jogador6").text(helper_jogador6); /* Você não pode modificar o target! */    
    document.getElementById("builder_jogador1").src = "https://mc-heads.net/avatar/"+builder_jogador1;
    $("#builder_jogador1").attr("src", "https://mc-heads.net/avatar/"+builder_jogador1);
    $("#n_builder_jogador1").text(builder_jogador1); /* Você não pode modificar o target! */   
    document.getElementById("builder_jogador2").src = "https://mc-heads.net/avatar/"+builder_jogador2;
    $("#builder_jogador2").attr("src", "https://mc-heads.net/avatar/"+builder_jogador2);
    $("#n_builder_jogador2").text(builder_jogador2); /* Você não pode modificar o target! */ 
    document.getElementById("builder_jogador3").src = "https://mc-heads.net/avatar/"+builder_jogador3;
    $("#builder_jogador3").attr("src", "https://mc-heads.net/avatar/"+builder_jogador3);
    $("#n_builder_jogador3").text(builder_jogador3); /* Você não pode modificar o target! */ 
    document.getElementById("builder_jogador4").src = "https://mc-heads.net/avatar/"+builder_jogador4;
    $("#builder_jogador4").attr("src", "https://mc-heads.net/avatar/"+builder_jogador4);
    $("#n_builder_jogador4").text(builder_jogador4); /* Você não pode modificar o target! */ 
    document.getElementById("builder_jogador5").src = "https://mc-heads.net/avatar/"+builder_jogador5;
    $("#builder_jogador5").attr("src", "https://mc-heads.net/avatar/"+builder_jogador5);
    $("#n_builder_jogador5").text(builder_jogador5); /* Você não pode modificar o target! */ 
    document.getElementById("builder_jogador6").src = "https://mc-heads.net/avatar/"+builder_jogador6;
    $("#builder_jogador6").attr("src", "https://mc-heads.net/avatar/"+builder_jogador6);
    $("#n_builder_jogador6").text(builder_jogador6); /* Você não pode modificar o target! */ 
});


/* Altere os links do topico do inicio do site, de acordo com o seu, */
/* caso não tenha topico adicione # dentro da casinha "" */

$('#btn-1').click(function(){ /* Você não pode modificar o target! */

  window.location = "#link-da-noticia-1";
  
});

$('#btn-2').click(function(){ /* Você não pode modificar o target! */

  window.location = "#link-da-noticia-2";
  
});

$('#btn-3').click(function(){ /* Você não pode modificar o target! */

  window.location = "#link-da-noticia-3";
  
});
",
