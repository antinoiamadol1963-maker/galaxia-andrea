// ====== EFECTO AL HACER CLIC EN EL CORAZÓN ======

const corazon = document.getElementById("sol");

corazon.addEventListener("click", () => {

    corazon.style.transform =
        "translate(-50%,-50%) scale(1.6)";

    crearMensaje();

    crearExplosion();

    setTimeout(() => {

        corazon.style.transform =
            "translate(-50%,-50%) scale(1)";

    },400);

});


// ====== MENSAJE ESPECIAL ======

function crearMensaje(){

    const mensaje=document.createElement("div");

    mensaje.innerHTML="❤️ Siempre te amaré, Analia ❤️";

    mensaje.style.position="absolute";
    mensaje.style.left="50%";
    mensaje.style.top="82%";
    mensaje.style.transform="translateX(-50%)";

    mensaje.style.color="white";
    mensaje.style.fontSize="35px";
    mensaje.style.fontWeight="bold";
    mensaje.style.textShadow="0 0 25px hotpink";

    document.body.appendChild(mensaje);

    setTimeout(()=>{

        mensaje.remove();

    },4000);

}



// ====== PARTÍCULAS ======

function crearExplosion(){

    for(let i=0;i<80;i++){

        const estrella=document.createElement("div");

        estrella.innerHTML="✨";

        estrella.style.position="absolute";

        estrella.style.left="50%";
        estrella.style.top="50%";

        estrella.style.fontSize=(Math.random()*18+12)+"px";

        estrella.style.pointerEvents="none";

        document.body.appendChild(estrella);

        let angulo=Math.random()*360;

        let distancia=Math.random()*350+120;

        let x=Math.cos(angulo*Math.PI/180)*distancia;

        let y=Math.sin(angulo*Math.PI/180)*distancia;

        estrella.animate([

            {
                transform:"translate(-50%,-50%)",
                opacity:1
            },

            {
                transform:
                `translate(${x}px,${y}px)`,
                opacity:0
            }

        ],{

            duration:2500

        });

        setTimeout(()=>{

            estrella.remove();

        },2500);

    }

}



// ====== ESTRELLAS FUGACES ======

setInterval(()=>{

    let estrella=document.createElement("div");

    estrella.innerHTML="☄️";

    estrella.style.position="absolute";

    estrella.style.left="-100px";

    estrella.style.top=Math.random()*window.innerHeight+"px";

    estrella.style.fontSize="30px";

    document.body.appendChild(estrella);

    estrella.animate([

        {
            transform:"translate(0,0)",
            opacity:1
        },

        {
            transform:"translate(1800px,500px)",
            opacity:0
        }

    ],{

        duration:2500

    });

    setTimeout(()=>{

        estrella.remove();

    },2500);

},4500);



// ====== CAMBIO DE COLOR DEL UNIVERSO ======

const colores=[

"#14002d",
"#000022",
"#1d0038",
"#000000",
"#200040"

];

let indice=0;

setInterval(()=>{

document.body.style.background=

`radial-gradient(circle,
${colores[indice]},
#000)`;

indice++;

if(indice>=colores.length){

indice=0;

}

},5000);

//==============================
// MENSAJE FINAL
//==============================

setTimeout(()=>{

const mensaje=document.getElementById("mensajeFinal");

mensaje.style.opacity="1";

},30000);


//==============================
// LLUVIA DE CORAZONES
//==============================

setInterval(()=>{

let corazon=document.createElement("div");

corazon.innerHTML="💖";

corazon.style.position="absolute";

corazon.style.left=Math.random()*window.innerWidth+"px";

corazon.style.top="-50px";

corazon.style.fontSize=(Math.random()*25+20)+"px";

document.body.appendChild(corazon);

corazon.animate([

{
transform:"translateY(0px)",
opacity:1
},

{
transform:`translateY(${window.innerHeight+100}px)`,
opacity:0
}

],{

duration:7000

});

setTimeout(()=>{

corazon.remove();

},7000);

},350);


//==============================
// CAMBIO DE COLOR DEL CORAZÓN
//==============================

const colores=["#ff007f","#ff4da6","#00ffff","#ff00ff","#ffffff"];

let i=0;

setInterval(()=>{

document.getElementById("sol").style.filter=
`drop-shadow(0 0 40px ${colores[i]})`;

i++;

if(i>=colores.length){

i=0;

}

},1200);