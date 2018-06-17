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
var rand_name = Math.floor(Math.random() * WIZARD_NAME.length);
var rand_surname = Math.floor(Math.random() * WIZARD_SURNAME.length);
var rand_coatcolor = Math.floor(Math.random() * WIZARD_COATCOLOR.length);
var rand_eyescolor = Math.floor(Math.random() * WIZARD_EYESCOLOR.length);
var person_name = WIZARD_NAME[rand_name] +' '+ WIZARD_SURNAME[rand_surname];
var person_coatcolor = WIZARD_COATCOLOR[rand_coatcolor];
var person_eyescolor = WIZARD_EYESCOLOR[rand_eyescolor];
var person = {
  name: person_name,
  coatColor: person_coatcolor,
  eyesColor: person_eyescolor
};
wizard.push(person);
var object_wizard = function (person) {
  for (var person = 0; person < 4; person++) {
    console.log('я работаю');
    object_wizard()
  }
}
