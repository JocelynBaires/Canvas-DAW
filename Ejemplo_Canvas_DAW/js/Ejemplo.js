let cnv, ctx, pos_x = 0, img;

function anim() {
    ctx.clearRect(0, 0, 1200, 400);
    ctx.drawImage(img, pos_x, 0);
    pos_x += 1;
    setTimeout(anim, 10);
}

window.onload = function() {
    img = new Image();
    img.src = 'img/Ejemplo.png';
    cnv = document.getElementById('lienzo');//Le indicamos el ID del lienzo de canvas
    ctx = cnv.getContext('2d');

    // iniciar la animación
    anim();
}
