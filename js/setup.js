var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
  'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц',
  'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['gb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var objectWizard = function (characterCreation) {
  var wizard = [];
  for (var i = 0; i < 4; i++) {
    var randName = Math.floor(Math.random() * WIZARD_NAME.length);
    var randSurname = Math.floor(Math.random() * WIZARD_SURNAME.length);
    var randCoatcolor = Math.floor(Math.random() * WIZARD_COATCOLOR.length);
    var randEyescolor = Math.floor(Math.random() * WIZARD_EYESCOLOR.length);
    var personName = WIZARD_NAME[randName] + ' ' + WIZARD_SURNAME[randSurname];
    var personCoatcolor = WIZARD_COATCOLOR[randCoatcolor];
    var personEyescolor = WIZARD_EYESCOLOR[randEyescolor];
    var person = {
      name: personName,
      coatColor: personCoatcolor,
      eyesColor: personEyescolor
    };
    wizard.push(person);
    return wizard;

  }
  var arr = objectWizard();
};


var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
