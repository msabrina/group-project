document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  var $listForm = document.querySelector('.list-maker-form');
  var $data = (window.location.search).substr(1);

  // console.log($data.split('='));
// console.log(document.getElementById('sizeCheckbox'))
console.log(document.getElementById('colorText'))
  $listForm[0].value = $data.split('=')[1];

  //

});

console.log('this is before the dom loaded');


