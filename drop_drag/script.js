const bindEventDragDrop = (target, outer) => {
    let x = 0, y = 0;
    function mouseDownHandler (e) {
        x = e.clientX;
        y = e.clientY;

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    function mouseDownHandler (e) {
        x = e.clientX;
        y = e.clientY;

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    function mouseMoveHandler (e) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        let posTop = target.offsetTop + dy;
        let posLeft = target.offsetLeft + dx;

        if (posTop < 0) {
            posTop = 0;
        }
        if (posLeft < 0) {
            posLeft = 0;
        }

        if (posTop + target.offsetHeight > outer.offsetHeight) {
            posTop = outer.offsetHeight - target.offsetHeight;
        }
        if (posLeft + target.offsetWidth > outer.offsetWidth) {
            posLeft = outer.offsetWidth - target.offsetWidth;
        }

        target.style.top = `${posTop}px`;
        target.style.left = `${posLeft}px`;

        x = e.clientX;
        y = e.clientY;
    }
    function mouseUpHandler (e) {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    target.addEventListener('mousedown', mouseDownHandler);
};

const txt = document.getElementById('txt');
const outer = document.getElementById('outer');
bindEventDragDrop(txt, outer);

