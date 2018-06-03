var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var getFireballSpeed = function (left) {
  if (left === true) {
    return 5;
  } else {
    return 2;
  }
};
var getWizardHeight = function (WizardHeight) {
  var calcWizardHeight = 1.337 * wizardWidth;
  return calcWizardHeight;
};
var wizardHeight = getWizardHeight(wizardWidth);
var getWizardX = function (width) {
  var positionWidth = (width * 0.5) - wizardWidth / 2;
  return positionWidth;
};
var getWizardY = function (height) {
  var positionHeight = (height * 1/3);
  return positionHeight;
};
