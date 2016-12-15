window.onload = function(){
  
//убираем прелоадер
  document.getElementById('preloader-block').style.opacity = '0';
  var clearId = setTimeout(function (){
    document.getElementById('preloader-block').style.display = 'none';
    clearTimeout(clearId);
  }, 500);
  
  
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