let strong = document.getElementsByTagName('strong');
function highlight(){
    Array.from(strong).forEach(element => {
        element.style.color = 'green';
    });
}

function return_normal(){
    Array.from(strong).forEach(element => {
        element.style.color = '';
    });
}