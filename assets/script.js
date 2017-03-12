window.onload = function(){
  
//убираем прелоадер
  document.getElementById('preloader-block').style.opacity = '0';
  var clearId = setTimeout(function (){
    document.getElementById('preloader-block').style.display = 'none';
    clearTimeout(clearId);
  }, 500);
  
  //показать продукцию
  var butt_show_products = document.getElementById('show-products').getElementsByTagName('span')[0];//кнопка
  var products = document.getElementById('list_products');

  var productsIsVisible = false;
  butt_show_products.onclick = function(){
    Array.from(products.children).forEach(show_all_products);
    productsIsVisible = !productsIsVisible;
  }
  function show_all_products(element, numb, arr){
    if(productsIsVisible == false){
      element.classList.add('visible');
      butt_show_products.innerHTML = "Свернуть перечень";
    }
    else {
      if(numb > 2){
        element.classList.remove('visible');
      butt_show_products.innerHTML = "Просмотреть полный перечень";
      }
    }
      
  }
  //появляется спец предложение
  /*var spec = document.getElementById('spec');
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
  }*/
  
  
  //прокрутка к якорю
  var navigate_link = document.getElementsByClassName('navigate-link');
  
  function getOffset(elem) {
    var top = elem.getBoundingClientRect()['top'] - 70;//получаем значение
    var left = elem.getBoundingClientRect()['left'];
    console.log(window.scrollBy(left, top));//прокручиваем
  }
  toAnchor = function(){
    getOffset(document.getElementById(this.getAttribute('href').split('#')[1]));//передаем объект - цель
    return false;
  }
  for (var i = 0, navigate_link; navigate_link < navigate_link[i]; i++)
    navigate_link[i].onclick = toAnchor;
  
  
  
  
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

                                                                                                   /* SLIDER*/

/* этот код помечает картинки, для удобства разработки */
    
    var lis = document.getElementById('carousel').getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    var width = 110; // ширина изображения
    var count = 4; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };


                                                                                                    /*  SLIDER*/
    
    
  //прыгает живосайт
  showJivoChat = function(){
    var jivo = document.getElementById('jivo-iframe-container');
    var count = 0;
    if(jivo)var timerId1 = setInterval(function (){
      if(jivo.style.bottom == '0px')
        jivo.style.bottom = '20px';
      else if(jivo.style.bottom == '20px')
        jivo.style.bottom = '0px';
      if(count == 3){
        clearInterval(timerId1);
        return;
      }
      count++;
      console.log(count);
    }, 300);
  };


 
  
})();