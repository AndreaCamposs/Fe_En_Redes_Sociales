
/* =========================================
   DATOS DE LAS PERSONALIDADES
========================================= */

const personalidades = {

    instagram: {

        titulo: "El que muestra",

        icono: '<i class="fa-brands fa-instagram"></i>',

        descripcion:
            "Te gusta compartir momentos, experiencias y cosas que disfrutas. Tu perfil puede convertirse en una ventana a tu vida.",

        reto:
            "No convertir tu vida en una competencia por demostrar que eres feliz, exitoso o perfecto.",

        pregunta:
            "¿Lo que muestro refleja quién soy realmente?",

        versiculo:
            "“Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras...”",

        cita:
            "Mateo 5:16"
    },


    tiktok: {

        titulo: "El que influye",

        icono: '<i class="fa-brands fa-tiktok"></i>',

        descripcion:
            "Te gusta entretener, seguir tendencias y compartir contenido. Quizás no te das cuenta de cuánto pueden influenciar tus acciones.",

        reto:
            "Recordar que aunque tú solamente estés siguiendo una tendencia, alguien más puede estar siguiendo tu ejemplo.",

        pregunta:
            "¿Qué estoy enseñando con mi ejemplo sin darme cuenta?",

        versiculo:
            "“No erréis; las malas conversaciones corrompen las buenas costumbres.”",

        cita:
            "1 Corintios 15:33"
    },


    whatsapp: {

        titulo: "El que comunica",

        icono: '<i class="fa-brands fa-whatsapp"></i>',

        descripcion:
            "Te gusta conversar, responder y estar conectado con los demás. Tus palabras pueden tener mucho impacto.",

        reto:
            "No utilizar tus palabras para herir, criticar, provocar o lanzar indirectas.",

        pregunta:
            "¿Mis palabras construyen o destruyen?",

        versiculo:
            "“Ninguna palabra corrompida salga de vuestra boca, sino la que sea buena para la necesaria edificación...”",

        cita:
            "Efesios 4:29"
    },


    facebook: {

        titulo: "El que comparte",

        icono: '<i class="fa-brands fa-facebook-f"></i>',

        descripcion:
            "Te gusta compartir noticias, pensamientos, opiniones y contenido con los demás.",

        reto:
            "No compartir algo solamente porque te hizo enojar, reír o sentir identificado.",

        pregunta:
            "¿Antes de compartirlo pensé si era verdadero y si edificaba?",

        versiculo:
            "“Examinadlo todo; retened lo bueno.”",

        cita:
            "1 Tesalonicenses 5:21"
    },


    youtube: {

        titulo: "El que observa",

        icono: '<i class="fa-brands fa-youtube"></i>',

        descripcion:
            "Quizás no publicas demasiado, pero consumes muchísimo contenido. Lo que observas también puede moldear tus pensamientos.",

        reto:
            "Cuidar aquello que dejas entrar constantemente a tu mente.",

        pregunta:
            "¿Lo que estoy consumiendo me acerca o me aleja de Dios?",

        versiculo:
            "“Todo lo verdadero, todo lo honorable, todo lo justo... en esto pensad.”",

        cita:
            "Filipenses 4:8"
    },


    twitter: {

        titulo: "El que responde",

        icono: '<i class="fa-brands fa-x-twitter"></i>',

        descripcion:
            "Tienes opiniones fuertes y no tienes miedo de expresarlas. Tu voz puede tener mucho peso.",

        reto:
            "Aprender que tener la razón no significa que tengas que responder siempre.",

        pregunta:
            "¿Necesito responder o necesito tener dominio propio?",

        versiculo:
            "“La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.”",

        cita:
            "Proverbios 15:1"
    }

};


/* =========================================
   DATOS DEL COMPROMISO
========================================= */

const compromisos = {

    representa: {

        titulo: "Quiero representar a Cristo",

        texto:
            "No quiero que mi fe sea solamente algo que publico. Quiero que también pueda verse en la manera en que trato a las personas."
    },

    edifica: {

        titulo: "Quiero edificar",

        texto:
            "Quiero utilizar mis palabras para animar, ayudar y levantar a otros, en lugar de utilizarlas para herir."
    },

    piensa: {

        titulo: "Quiero pensar antes de publicar",

        texto:
            "No todo lo que puedo publicar necesito publicarlo. Quiero aprender a tener dominio propio."
    },

    influye: {

        titulo: "Quiero influenciar para Cristo",

        texto:
            "Sé que otras personas pueden observar mis acciones. Quiero utilizar mi influencia para acercar a otros a Dios."
    }

};


/* =========================================
   FUNCIÓN PARA CAMBIAR DE PANTALLA
========================================= */

function cambiarPantalla(id) {

    const pantallas =
        document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {

        pantalla.classList.remove("activa");

    });


    const nuevaPantalla =
        document.getElementById(id);

    nuevaPantalla.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   INICIO → REDES
========================================= */

function mostrarRedes() {

    cambiarPantalla("pantallaRedes");
}


/* =========================================
   VOLVER AL INICIO
========================================= */

function volverInicio() {

    cambiarPantalla("pantallaInicio");
}


/* =========================================
   MOSTRAR PERSONALIDAD
========================================= */

function mostrarPersonalidad(red) {

    const datos =
        personalidades[red];


    if (!datos) {

        return;
    }


    document.getElementById("resultadoTitulo")
        .textContent = datos.titulo;


    document.getElementById("resultadoDescripcion")
        .textContent = datos.descripcion;


    document.getElementById("resultadoReto")
        .textContent = datos.reto;


    document.getElementById("resultadoPregunta")
        .textContent = datos.pregunta;


    document.getElementById("resultadoVersiculo")
        .textContent = datos.versiculo;


    document.getElementById("resultadoCita")
        .textContent = datos.cita;


    document.getElementById("resultadoIcono")
        .innerHTML = datos.icono;


    cambiarPantalla("pantallaResultado");
}


/* =========================================
   MOSTRAR TIPOS DE CRISTIANO
========================================= */

function mostrarTiposCristiano() {

    cambiarPantalla("pantallaCristiano");
}


/* =========================================
   MOSTRAR COMPROMISO
========================================= */

function mostrarCompromiso(tipo) {

    const datos =
        compromisos[tipo];


    if (!datos) {

        return;
    }


    document.getElementById("compromisoTitulo")
        .textContent = datos.titulo;


    document.getElementById("compromisoTexto")
        .textContent = datos.texto;


    cambiarPantalla("pantallaCompromiso");
}


/* =========================================
   MOSTRAR RECUERDO
========================================= */

function mostrarRecuerdo() {

    cambiarPantalla("pantallaRecuerdo");
}


/* =========================================
   REINICIAR
========================================= */

function reiniciar() {

    cambiarPantalla("pantallaInicio");
}


/* =========================================
   EFECTO AL CARGAR LA PÁGINA
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    cambiarPantalla("pantallaInicio");

});

