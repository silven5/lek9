class Creature {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    stop() {
        this.speed = 0;
        return `${this.name} стоїть.<br>`;
    }
}
class Animal extends Creature {
    run(speed) {
        this.speed = speed;
        return `${this.name} бігає зі швидкістю ${this.speed}.<br>`;
    }

}
class Bird extends Creature {
    fly(speed) {
        this.speed = speed;
        return `${this.name} летить зі швидкістю ${this.speed}. <br>`;
    }
}
class Rabbit extends Animal {
    hide() {
            return `${this.name} ховається. <br>`;
        }
        //Перевизначення методу
    stop() {
        return "<h3>Перевизначення stop</h3>" + this.hide() + super.stop();
    }
}
class Duck extends Bird {
    swim(speed) {
        this.speed = speed;
        return `${this.name} плаває зі швидкістю ${this.speed}.<br>`;
    }
}

function write(id, html) {
    let rez = document.querySelector(id);
    rez.innerHTML = html;
}

function onClick1() {
    let rabbit = new Rabbit("Джон");
    let duck = new Duck("Мері");
    let html = '';
    html = "<h2>Кролик</h2>" + rabbit.run(3) + rabbit.hide() + rabbit.stop();
    write("#rezult1", html);
    html = '';
    html = "<h2>Утка</h2>" + duck.fly(5) + duck.swim(10) + duck.stop();
    write("#rezult2", html);



}