export default class Calculator {
    static calculateYearsToMillion(startKapital, monatlicheSparrate, zinssatz) {

        let jährlicheSparrate = monatlicheSparrate * 12;
        let gesamtKapital = startKapital;
        let anlagejahre = 0;
        let kapitalVorRendite = 0;
        let rendite = 0;
        
        while (gesamtKapital < 1000000) {
            kapitalVorRendite = parseInt(gesamtKapital) + parseInt(jährlicheSparrate);
            console.log(kapitalVorRendite)
            rendite = kapitalVorRendite * zinssatz * 0.01;
            gesamtKapital = kapitalVorRendite + rendite;
            anlagejahre ++;
        }

        return anlagejahre;
    }
}