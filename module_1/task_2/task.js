"use strict";
// Разработать типизированную систему управления автомобилем: 
// главный интерфейс Car и вспомогательные интерфейсы для различных подсистем. 
// Реализовать функции для вывода основной информации об авто, 
// о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
const lada = {
    name: 'Lada',
    wheels: 4,
    drive: 'front',
    numberOfSeats: 5,
    showNameCar: function () {
        console.log(this.name);
    },
    transmission: {
        numberOfGears: 5,
        typeOfPosition: 'across',
        typeControl: 'mechanical',
    },
    brakes: {
        typeOfBrakes: 'disk',
        brakeActuationBy: 'liquid',
        degreeWearPads: 30,
        showDegreeWearPads: function () {
            console.log(this.degreeWearPads);
        },
        changeDegreeWearPads: function (percent) {
            this.degreeWearPads = percent;
        }
    }
};
lada.showNameCar();
lada.brakes.showDegreeWearPads();
lada.brakes.changeDegreeWearPads(90);
lada.brakes.showDegreeWearPads();
