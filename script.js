alert('Welcome!')

function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var h1Elem = window.document.getElementsByTagName('h1');

    var date = new Date();
    var hour = date.getHours();

    msg.innerHTML = `Agora são ${hour} horas !`;

    if (hour >= 6 && hour < 12) {
        // dia
        img.src = 'dia.png';
        document.body.style.background = '#ffffba';

    } else if (hour >= 12 && hour < 18) {
        // tarde
        img.src = 'tarde.png';
        document.body.style.background = '#ffdfba';

    } else {
        // noite
        img.src = 'noite.png';
        document.body.style.background = '#cbaacb';
        h1Elem.item(0).style.color = "#fff"
    }
}
