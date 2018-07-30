draw(document.getElementById('canvas'));

function draw(canvas) {
    function mousePosition(event) {
        var ev = event || window.event; //Firefox || Chrome
        if (ev.pageX) { //Firefox
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //Chrome
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };

    var element = null;

    canvas.onmousemove = function (event) {
        mousePosition(event);
        if (element != null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }

    canvas.onclick = function (event) {
        if (element != null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("OK");

            console.log(mouse.x);
            console.log(mouse.y);
        } else {
            console.log("START");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'mark'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";

            console.log(mouse.x);
            console.log(mouse.y);
        }
    }
}