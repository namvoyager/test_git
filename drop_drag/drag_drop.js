const bindEventDragDrop = function (target, outer) {
    let diffX = 0, diffY = 0;
    let targetRef = null;
    function dragOver(e) {
        e.preventDefault();
    }
    function dragStart(e) {
        targetRef = target;
        diffX = e.clientX - e.target.offsetLeft;
        diffY = e.clientY - e.target.offsetTop;
    }
    function dragEnd(e) {
        targetRef = null;
    }
    function drop(e) {
        if (targetRef) {
            targetRef.style.top = (e.clientY - diffY) + 'px';
            targetRef.style.left = (e.clientX - diffX) + 'px';
        }
    }

    target.setAttribute('draggable', 'true');
    target.addEventListener('dragstart', dragStart);
    target.addEventListener('dragend', dragEnd);
    outer.addEventListener('dragover', dragOver);
    outer.addEventListener('drop', drop);
};

const bindEventCreateInput = (target, outer) => {
    function clickHandler(e) {
        const newElement = document.createElement('input');
        newElement.id = 'txt_' + document.querySelectorAll('input').length;
        newElement.setAttribute('type', 'text');
        newElement.style.position = 'absolute';
        newElement.style.left = `${e.clientX}px`;
        newElement.style.top = `${e.clientY}px`;
        outer.appendChild(newElement);
        bindEventDragDrop(newElement, outer);
    }
    target.addEventListener('click', clickHandler);
};

const txt = document.getElementById('txt');
const container = document.getElementById('container');
const outer = document.getElementById('outer');
bindEventDragDrop(txt, container);
bindEventCreateInput(outer, container);
