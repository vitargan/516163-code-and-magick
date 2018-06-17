var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var wizard = [];
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
  'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц',
  'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['gb(101, 137, 164)', 'rgb(241, 43, 107)',
'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var RAND_NAME = Math.floor(Math.random() * WIZARD_NAME.length);
var RAND_SURNAME = Math.floor(Math.random() * WIZARD_SURNAME.length);
var RAND_COATCOLOR = Math.floor(Math.random() * WIZARD_COATCOLOR.length);
var RAND_EYESCOLOR = Math.floor(Math.random() * WIZARD_EYESCOLOR.length);
var PERSON_NAME = RAND_NAME + RAND_SURNAME;
console.log(PERSON_NAME);
