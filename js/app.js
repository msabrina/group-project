  var $listForm = document.querySelector('.list-maker-form');
  var $data = (window.location.search).substr(1);
  var firstArr = $data.split('&');
  var finArr = [];
  var myObj = {};

  function makeArray(str) {
    var tempArr = [];
    for(var i = 0; i < firstArr.length; i++){
      if (firstArr[i].charAt(firstArr[i].length-1) === '=') {
        firstArr[i] += 'on';
      }
      tempArr.push(firstArr[i].split('='));
      finArr = tempArr.join(',').split(',');
    }
  }

  function makeObj(arr) {
    for (var i = 0; i <arr.length; i+=2) {
      myObj[arr[i]] = arr[i+1];
    }
    console.log(myObj);
  }

document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');

  makeArray();
  makeObj(finArr);

});

console.log('this is before the dom loaded');


