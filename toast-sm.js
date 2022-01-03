function popup(text, css=``) {
  // ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ã®ç”Ÿæˆ
  const p = document.createElement("div");
  p.innerHTML = text;
  p.className = "popup";
  p.id = popup_reset('popup-temporary');
  // ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ã‚’è¿½åŠ 
  document.getElementsByTagName('body')[0].appendChild(p);
  // ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—å‰Šé™¤ã¾ã§ã®800msã®çŒ¶äºˆ
  setTimeout(function(){
    // 1000msã‹ã‘ã¦ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ã‚’å‰Šé™¤
    popup_fire(p.id, 10, (Array.from({length: 100}, (_, i) => i*0.01).reverse()))
  }, 1800);
};

// ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ã®IDã‚’å†å¸°çš„ã«ç¢ºä¿
function popup_reset(id) {
  if(document.getElementById(id) != null){
    return popup_reset(id + '-altenative');
  } else {
    return id;
  }
}

// å†å¸°çš„ã«ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ã‚’è–„ãã—ã¦æœ€çµ‚çš„ã«å‰Šé™¤
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
