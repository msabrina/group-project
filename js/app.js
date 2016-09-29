  var $listForm = document.querySelector('.list-maker-form');
  var url = (window.location.search).substr(1);

function makeArr() {
  console.log(url.split('&'))
}


document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  makeArr();
});

console.log('this is before the dom loaded');


