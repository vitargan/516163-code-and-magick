var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};
var getWizardHeight = function () {
  return 1.337*wizardWidth
};
var getWizardX = function (width) {
  return (width - wizardWidth) * 0.5;
};
var getWizardY = function (height) {
  return height * 1/3;
};
