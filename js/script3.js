class Calc {
    constructor(value) {
        this.value = value
    }
    calculate() {
        let s = '';
        try {
            let rezult = new Function(`return ${this.value}`);
            s = rezult();

        } catch {
            s = "Помилка введення";
        }
        return s;
    }

}

function onClick() {
    let input = document.querySelector("#calc");
    let value = '';
    value = input.value;
    let calc = new Calc(value);
    let html = calc.calculate();
    input.value = html;
}