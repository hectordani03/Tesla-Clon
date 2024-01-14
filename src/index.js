const d = document;

d.addEventListener("DOMContentLoaded", e => {
    const sectionToObserve1 = d.querySelector(".section-2");
    const sectionToObserve2 = d.querySelector(".section-6");
    const sectionToObserve3 = d.querySelector(".section-10");
    const buttonsInfo = d.querySelector(".section-10 .buttons-info");
    const header = d.querySelector("header");

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer1 = new IntersectionObserver(entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            header.classList.add('text-white');
            header.classList.remove('text-black');
        } else {
            header.classList.remove('text-white');
            header.classList.add('text-black');
        }
    }, options);

    const observer2 = new IntersectionObserver(entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            header.classList.add('text-white');
            header.classList.remove('text-black');
        } else {
            header.classList.remove('text-white');
            header.classList.add('text-black');
        }
    }, options);

    const observer3 = new IntersectionObserver(entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            buttonsInfo.classList.add('shop-now-animation');
        } else {
            buttonsInfo.classList.remove('shop-now-animation');
        }
    }, options);


    observer1.observe(sectionToObserve1);
    observer2.observe(sectionToObserve2);
    observer3.observe(sectionToObserve3);

    // const secciones = document.querySelectorAll(".section");

    // // Detecta cuándo el usuario ha scrolleado 1/4 de pantalla de una sección
    // window.addEventListener("scroll", () => {
    //   // Recorre el arreglo de secciones
    //   for (const seccion of secciones) {
    //     // Obtén la altura de la sección
    //     const alturaSeccion = seccion.offsetHeight;
    
    //     // Comprueba si el usuario ha scrolleado 1/4 de pantalla de la sección
    //     if (window.scrollY >= alturaSeccion * unCuarto) {
    //       // Si la sección actual no es la sección anterior
    //       if (seccion !== this.seccionAnterior) {
    //         // Oculta el texto de la sección anterior
    //         this.seccionAnterior.classList.add("opacity-0");
    //         this.seccionAnterior.classList.remove("opacity-100");
    
    //         // Muestra el texto de la sección actual
    //         seccion.classList.add("opacity-100");
    //         seccion.classList.remove("opacity-0");
    
    //         // Actualiza la sección anterior
    //         this.seccionAnterior = seccion;
    //       }
    //     }
    //   }
    // });
    
    // // Define la variable local
    // this.seccionAnterior = null;
    
});
