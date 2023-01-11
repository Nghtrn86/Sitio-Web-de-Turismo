const app= document.getElementById('typewriter');
const typewriter = new Typewriter(app,  {
    loop: true,
    delay:75
});

typewriter
.typeString( 'El Pulgarcito de America')
.pauseFor(200)
.start();