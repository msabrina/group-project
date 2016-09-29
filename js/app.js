document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  var $listForm = document.querySelector('.list-maker-form');
  var $data = (window.location.search).substr(1);

<<<<<<< HEAD
  // console.log($data.split('&')[0].split('=')[1]);
  // console.log($listForm[0].id)
  console.log($data.split('&')[0].split('=')[0])
  $listForm[0].value = $data.split('&')[0].split('=')[0]
=======
  // console.log($data.split('='));
// console.log(document.getElementById('sizeCheckbox'))
  //console.log(document.querySelector('option'))

  // console.log(window.location.search)
  console.log($data)

  // $listForm[0].value = $data.split('=')[1];
>>>>>>> ef93df59639c3595228d90454e42aeb3ca07bf29

  //

});

console.log('this is before the dom loaded');


