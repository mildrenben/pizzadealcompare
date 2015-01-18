function calc(){
  var p1Dia = document.getElementById('p1-dia').value,
      p2Dia = document.getElementById('p2-dia').value,
      p1Qty = document.getElementById('p1-qty').value,
      p2Qty = document.getElementById('p2-qty').value,
      p1Price = document.getElementById('p1-price').value,
      p2Price = document.getElementById('p2-price').value,
      body = document.getElementsByTagName('body')[0];
  
  function validateForm() {
    if(p1Dia == null || p1Dia == "" || p2Dia == null || p2Dia == "" || p1Qty == null || p1Qty == "" ||
       p2Qty == null || p2Qty == "" || p1Price == null || p1Price == "" || p2Price == null || p2Price == ""){
      alert("Please fill in the whole form.");
      return true;
    }
    return false;
  }
  
  if(validateForm()){
    return true;
  }

  function area(dia){
    var rad = dia/2;
    return Math.PI*(rad*rad);
  }

  var p1Area = area(p1Dia)*p1Qty;
  var p2Area = area(p2Dia)*p2Qty;
  
  var p1CostPer = p1Price/p1Area;
  var p2CostPer = p2Price/p2Area;
  
  var p1AreaNode = document.getElementById('p1-area');
  var p2AreaNode = document.getElementById('p2-area');
  var p1CostPerNode = document.getElementById('p1-cost-per');
  var p2CostPerNode = document.getElementById('p2-cost-per');
  
  var nodeArray = [p1AreaNode, p2AreaNode, p1CostPerNode, p2CostPerNode];

  for(var x = 0; x < nodeArray.length; x++){
    nodeArray[x].className = null;
  }
  
  
  
  p1AreaNode.innerHTML = p1Area.toFixed(2);
  p2AreaNode.innerHTML = p2Area.toFixed(2);
  p1CostPerNode.innerHTML = p1CostPer.toFixed(2);
  p2CostPerNode.innerHTML = p2CostPer.toFixed(2);
  
  if(p1Area > p2Area){
    p1AreaNode.className = 'highlight';
  }
  if(p2Area > p1Area) {
    p2AreaNode.className = 'highlight'
  }
  else if (p1Area == p2Area) {
    p1AreaNode.className = 'highlight';
    p2AreaNode.className = 'highlight';
  }

  if (p1CostPer < p2CostPer){
    p1CostPerNode.className = 'highlight'
  }
  if (p2CostPer < p1CostPer){
    p2CostPerNode.className = 'highlight'
  }
  else if (p1CostPer == p2CostPer) {
    p1CostPerNode.className = 'highlight';
    p2CostPerNode.className = 'highlight';
  }
  
  var ansAreaDiff = 0;
  var ansCostDiff = 0;
  
  var p1AreaDiffNode = document.getElementsByClassName('one')[0];
  var p2AreaDiffNode = document.getElementsByClassName('three')[0];
  var p1CostDiffNode = document.getElementsByClassName('two')[0];
  var p2CostDiffNode = document.getElementsByClassName('four')[0];    

  function calcAreaDiff(x,y) {
    p1AreaDiffNode.style.padding = '0px';
    p2AreaDiffNode.style.padding = '0px';
    p1AreaDiffNode.innerHTML = '';
    p2AreaDiffNode.innerHTML = '';
    if(x>y){
     var diff = (((x/y)-1)*100);
      p1AreaDiffNode.innerHTML = diff.toFixed(1)  + '% more';
      p1AreaDiffNode.style.padding = '10px';
    }
    if(y>x){
     var diff = (((y/x)-1)*100);
      p2AreaDiffNode.innerHTML = diff.toFixed(1) + '% more';
      p2AreaDiffNode.style.padding = '10px';
    }
    else if(x==y){
      p1AreaDiffNode.innerHTML = '';
      p2AreaDiffNode.innerHTML = '';
    }
     // media query event handler
      if (matchMedia) {
        var mq = window.matchMedia("(min-width: 720px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
      }
      function WidthChange(mq) {
        if (mq.matches) {
          if(x>y){
            p1AreaDiffNode.style.padding =  '10px';
          }
          if(y>x){
            p2AreaDiffNode.style.padding =  '10px';
          }
        }
        else {
          if(x>y){
            p1AreaDiffNode.style.padding =  '9px';
          }
          if(y>x){
            p2AreaDiffNode.style.padding =  '9px';
          }
        }
      }   
  }
  
  function calcCostDiff(a,b) {
    p1CostDiffNode.style.padding = '0px';
    p2CostDiffNode.style.padding = '0px';
    p1CostDiffNode.innerHTML = '';
    p2CostDiffNode.innerHTML = '';
    if(a>b){
     var diff = ((((b/a)-1)*100)*-1);
     p2CostDiffNode.innerHTML = diff.toFixed(1)  + '% less';
     p2CostDiffNode.style.padding =  '10px';
    }
    if(b>a){
     var diff = ((((a/b)-1)*100)*-1);
      p1CostDiffNode.innerHTML = diff.toFixed(1)  + '% less';
      p1CostDiffNode.style.padding =  '10px';
    }
    else if(a==b){
      p1CostDiffNode.innerHTML = '';
      p2CostDiffNode.innerHTML = '';
    }
    // media query event handler
      if (matchMedia) {
        var mq = window.matchMedia("(min-width: 720px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
      }
      function WidthChange(mq) {
        if (mq.matches) {
          if(b>a){
            p1CostDiffNode.style.padding =  '10px';
          }
          if(a>b){
            p2CostDiffNode.style.padding =  '10px';
          }
        }
        else {
          if(b>a){
            p1CostDiffNode.style.padding =  '9px';
          }
          if(a>b){
            p2CostDiffNode.style.padding =  '9px';
          }
        }
      }   
  }
  
  calcAreaDiff(p1Area,p2Area);
  calcCostDiff(p1CostPer,p2CostPer);
  
}

document.getElementById('submit-button').addEventListener('click', function(){
  calc();
})

document.addEventListener('keyup', function(e){
  if(e.keyCode === 13) calc();
})