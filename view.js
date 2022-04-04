var but = document.querySelector('button');

var eua = 5.71, australia = 4.43, canada = 4.54;

but.addEventListener('click', function(){
  var dolas = document.getElementById('dolas').value;
  var valor = document.getElementById('valor').value;  
  
  
  switch(dolas){
    case 'eua':
    valor = eua * valor;
    
    alert(valor);
    break;
    
    case 'australia':
    valor = australia * valor;
    
    alert(valor);
    break;
    
    case 'canada':
    valor = canada * valor;
    
    alert(valor);
    break;
      
    default:
      alert('::erro::')
}
});
