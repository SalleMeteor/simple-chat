Template.input.events = {
//en funció de quin input tinguem farà una cosa o una altre
  'keydown input#missatge' : function (event) {
    if (event.which == 13) { 
	  // en cas de que apretin l'intro, el número d'event serà el 13, i per tant, entrarà aquí
      putmsj();
    }
  },
  'click #submit' : function (event) {
      putmsj();
  }
}

function putmsj() {
 var infoenviament = 'Enviat per ';
	  // mira si l'usuari està logejat o no, en cas positiu indica el nom, en cas negatiu l'anomena anònim.
      if (Meteor.user())
        var nom = Meteor.user().username;
        //var nom = Meteor.user().profile.name;
      else
        var nom = 'Anònim';
      var missatge = document.getElementById('missatge');
      
	  // guarda en quin minut s'ha enviat el missatge. Si és inferior a 10, hi posa el 0, perquè d'aquesta manera
	  // sempre tindrà el format hh:mm:ss
      var minuts = (new Date()).getMinutes();
      if (minuts<10){
        minuts= "0" + minuts;
      }
	  
	  // el mateix que els minuts però en aquest cas per les hores
      var hores = (new Date()).getHours();
      if (hores<10){
        hores= "0" + hores;
      }
	  
	  // el mateix però pels segons
      var segons = (new Date()).getSeconds();
	  if (segons<10){
        segons= "0" + segons;
      }
	  // a la variable temps ho posem ja en format correcte
      var temps = hores + ":" + minuts + ":" + segons;
      
      if (missatge.value != '') {
	    // insertem tot el que volem passar-li en el fitxer client.html, aquest ja decidirà quina informació publica i quina no.
        Missatges.insert({
          infoenviament: infoenviament,
          nom: nom,
          missatge: missatge.value,
          time: temps,
        });
        
        Session.set("Info_missatge", infoenviament);
        Session.set("missatge_enviat", missatge.value);

        document.getElementById('missatge').value = '';
        missatge.value = '';
      } 
}