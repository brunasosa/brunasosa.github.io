// document.addEventListener('mousemove', particleEffects);

function particleEffects(event){
    let particle = document.createElement('span');
    particle.classList.add('particle');
    document.body.append(particle);
    let random = Math.floor(Math.random() * 30);
    let x = event.pageX - 15;
    let y = event.pageY - 15;

    particle.style.left = x + random  + 'px';
    particle.style.top = y + random + 'px';


    particle.style.height = `${random}px`
    particle.style.width = `${random}px`
    
    setTimeout(function particleEffects(event){
        particle.remove();
    }, 600)
}



