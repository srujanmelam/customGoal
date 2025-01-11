var app = angular.module('myApp', []);

app.controller('myCtrl', function () {
    const ctrl = this;  // alias 'ctrl' for the controller scope
    ctrl.monthly_money = 80000;
    ctrl.number_of_months = 4;
    ctrl.current_saving = 550000;
    ctrl.value = 0;
   
    const GROWTH_RATE = 1.1;
    const NEEDED = 1000000;
    ctrl.pending = NEEDED - ctrl.current_saving

    // Process function to calculate the total value
    ctrl.process = function () {
        if (ctrl.number_of_months <= 0 || ctrl.monthly_money <= 0 || ctrl.current_saving < 0) {
            ctrl.errorMessage = "Please enter valid values. All amounts must be positive, and months must be greater than zero.";
            ctrl.value = 0;
        } else {
            ctrl.value = (ctrl.number_of_months * ctrl.monthly_money + ctrl.current_saving) * GROWTH_RATE;
            ctrl.pending = NEEDED - ctrl.value
            ctrl.errorMessage = "";
        }
    };

    // Reset function to clear all values
    ctrl.reset = function () {
        ctrl.monthly_money = 80000;
        ctrl.number_of_months = 4;
        ctrl.current_saving = 550000;
        ctrl.value = 0;
        ctrl.errorMessage = "";
        ctrl.pending = NEEDED - ctrl.current_saving;
    };
});
