interface Transmission {
    numberOfGears : number;
    typeOfPosition: 'along' | 'across';
    typeControl: 'automatic' | 'mechanical';
}

interface Brakes {
    typeOfBrakes: 'drum' | 'disk';
    brakeActuationBy: 'air' | 'liquid' | 'cable'; 
    degreeWearPadsPercent: number;
}

interface Car {
    name: string;
    wheels: number;
    drive: 'front' | 'rear' | 'full'
    numberOfSeats?: number;
    showNameCar: () => void;
    transmission: Transmission;
    brakes: Brakes
}

const lada = {
    name: 'Lada',
    wheels: 4,
    drive: 'front',
    numberOfSeats: 5,
    showNameCar: function(){
        console.log(this.name)
    },
    transmission: {
        numberOfGears : 5,
        typeOfPosition: 'across',
        typeControl: 'mechanical',
    },
    brakes: {
        typeOfBrakes: 'disk',
        brakeActuationBy: 'liquid', 
        degreeWearPads: 30,
        showDegreeWearPads: function(){
            console.log(this.degreeWearPads)
        },
        changeDegreeWearPads: function(percent: number){
            this.degreeWearPads = percent;
        }
    }
}

lada.showNameCar();
lada.brakes.showDegreeWearPads();
lada.brakes.changeDegreeWearPads(90);
lada.brakes.showDegreeWearPads();
