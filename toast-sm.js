      function popup(text, css=``) {

        const p = document.createElement("div");
        p.innerHTML = text;
        p.className = "popup";
        p.id = popup_reset('popup-temporary');

        document.getElementsByTagName('body')[0].appendChild(p);

        setTimeout(function(){

          popup_fire(p.id, 10, (Array.from({length: 100}, (_, i) => i*0.01).reverse()))
        }, 1800);
      };


      function popup_reset(id) {
        if(document.getElementById(id) != null){
          return popup_reset(id + '-altenative');
        } else {
          return id;
        }
      }


      function popup_fire(id,dt,X) {
        if(document.getElementById(id) != null){
          if(X.length){
            const p = document.getElementById(id);
            p.style.opacity = X.shift();
            setTimeout(function(){
              popup_fire(id,dt,X)
            }, dt);
          } else {
            document.getElementById(id).remove();
          }
        }
      };
