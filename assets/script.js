window.onload = function(){
  
//убираем прелоадер
  document.getElementById('preloader-block').style.opacity = '0';
  var clearId = setTimeout(function (){
    document.getElementById('preloader-block').style.display = 'none';
    clearTimeout(clearId);
  }, 500);
  
 
  //появляется спец предложение
  var spec = document.getElementById('spec');
  var close = document.getElementById('close-spec');
  var spec_inset = document.getElementById('spec-inset');
  var timerId = setTimeout(function (){
    spec.style.top = '-1px';
    
    clearTimeout(timerId);
  }, 4000);
  close.onclick = function(){
    spec.style.top = '-500px';
    spec_inset.style.top = '67px';
  }
  spec_inset.onclick = function(){
    spec.style.top = '-1px';
    spec_inset.style.top = '-500px';
  }
  
  //развертывание категории товара
  var list_products = document.getElementById('list_products');
  var menu_item = list_products.getElementsByClassName('extendable');
  
  show_menu_items = function(){
      this.getElementsByTagName('ul')[0].style.display = "inline-block";
  }
  hide_menu_items = function(){
      this.getElementsByTagName('ul')[0].style.display = "none";
  }
  
  for (var i = 0, menu_item; menu_item < menu_item[i]; i++)
    menu_item[i].onmouseover = show_menu_items;
  for (var i = 0, menu_item; menu_item < menu_item[i]; i++)
    menu_item[i].onmouseout = hide_menu_items;
  
};


(function(){ 

  
 
  
})();