function showHelp(help, id) {
    document.getElementById(id).innerHTML = help;
}

function setupHelp1(query, id) {
    var input = document.querySelectorAll(query);

    for (var i = 0; i < input.length; i++) {
        var item = input[i].placeholder;
        document.getElementById(input[i].id).onfocus = function() {
            showHelp(item, id);
        }
    }
}

setupHelp1("#form1 input", 'help1');
//НУ ЧОМУ??????
//ТОМУ ЩО ЗАМИКАННЯ
//РІШЕННЯ
function makeHelpCallback(help, id) {
    return function() {
        showHelp(help, id);
    };
}

function setupHelp2(query, id) {
    var input = document.querySelectorAll(query);

    for (var i = 0; i < input.length; i++) {
        var item = input[i].placeholder;
        document.getElementById(input[i].id).onfocus = makeHelpCallback(item, id)
    }
}

setupHelp2("#form2 input", 'help2');