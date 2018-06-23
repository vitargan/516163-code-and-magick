
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
  'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц',
  'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var creatureWizard = function (characterCreation) {
  var wizard = [];
  for (var i = 0; i < 4; i++) {
    var randName = Math.floor(Math.random() * WIZARD_NAMES.length);
    var randSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
    var randCoatcolor = Math.floor(Math.random() * WIZARD_COATCOLORS.length);
    var randEyescolor = Math.floor(Math.random() * WIZARD_EYESCOLORS.length);
    var personName = WIZARD_NAMES[randName] + ' ' + WIZARD_SURNAMES[randSurname];
    var personCoatcolor = WIZARD_COATCOLORS[randCoatcolor];
    var personEyescolor = WIZARD_EYESCOLORS[randEyescolor];
    var person = {
      name: personName,
      coatColor: personCoatcolor,
      eyesColor: personEyescolor
    };
    wizard.push(person);
  }
  return wizard;
};
var arr = creatureWizard();

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var renderWizard = function (wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < creatureWizard(4); i++) {
  fragment.appendChild(renderWizard(wizard[i]));
}
similarListElement.appendChild(fragment);

