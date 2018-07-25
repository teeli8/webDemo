/*document.addEventListener("DOMContentLoaded",function(){
    function createParagraph() {
        var para = document.createElement('p');
        if(++times===1){
           messg = "once";
        }else if(times===2){
            messg = "twice";
        }else messg = times + ' times';
        if(times>=10){
            messg+= " ! Dude you must really enjoy button clicking";
        }
      para.textContent = 'You clicked the button ' + messg + ' !';
      if(times%2===0 && times<10){
          para.className = 'even';
      }else if(times%2!==0 && times<10) {
          para.className = 'odd';
        }else para.className = 'red';

      document.body.appendChild(para);
    }
    
    var buttons = document.querySelectorAll('button');
    var times = 0;
    var messg;
    
    for(var i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
    });*/


   document.addEventListener("DOMContentLoaded",function(){
        function createItem() {
        var item = document.forms["ShoppingList"]["newItem"].value;
        var para = document.createElement('span');
        para.textContent = item;
        var liElement = document.createElement('li');
        liElement.appendChild(para);
        document.getElementById("sList").appendChild(liElement);
        /*liElement.appendChild = para;
        document.getElementById("aList").innerHTML.appendChild(liElement);*/
        
      }
        var button = document.querySelector("button");
        button.addEventListener('click',createItem);
    });




   

