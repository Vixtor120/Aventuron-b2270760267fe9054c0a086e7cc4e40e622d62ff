document.addEventListener("DOMContentLoaded", function () {
    const leftImage = document.getElementById("cantina-izquierda");
    const rightImage = document.getElementById("cantina-derecha");
    const backgroundMusic = document.getElementById("background-music");
    const waiterImage = document.getElementById("camarero-jesus");
    const alejandroImage = document.getElementById("alejandro-caminando");
    const javiImage = document.getElementById("javi-rosa");
    const options = document.getElementById("options");
    const chupito = document.getElementById("chupito");
    const cerveza = document.getElementById("cerveza");
    const nada = document.getElementById("nada");
    const ruidoDestructor = new Audio("../images/FarWest/bar/ruido_destructor.mp3");
    const caballoSonido = new Audio("../images/FarWest/bar/caballo_sonido.mp3");
    const javiDestructor = document.createElement("img");
    javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
    javiDestructor.id = "javi-destructor";
    javiDestructor.style.position = "absolute";
    javiDestructor.style.left = "-100%";
    javiDestructor.style.top = "60%";
    javiDestructor.style.height = "420px";
    javiDestructor.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(javiDestructor);

    const caballoVolador = document.createElement("img");
    caballoVolador.src = "../images/FarWest/bar/caballo_volador.png";
    caballoVolador.id = "caballo-volador";
    caballoVolador.style.position = "absolute";
    caballoVolador.style.left = "20%";
    caballoVolador.style.top = "69%";
    caballoVolador.style.height = "280px";
    caballoVolador.style.transform = "translate(-50%, -50%)";
    caballoVolador.style.opacity = "0";
    document.body.appendChild(caballoVolador);

    leftImage.style.left = "-100%";
    rightImage.style.right = "-100%";
    waiterImage.style.opacity = "0";
    alejandroImage.style.left = "-100%";
    javiImage.style.left = "-100%";

    setTimeout(() => {
        leftImage.style.transition = "left 4s";
        rightImage.style.transition = "right 4s";
        leftImage.style.left = "0";
        rightImage.style.right = "0";
    }, 1000);

    setTimeout(() => {
        waiterImage.style.transition = "opacity 4s";
        waiterImage.style.opacity = "1";
    }, 5000);

    setTimeout(() => {
        alejandroImage.style.transition = "left 12s";
        alejandroImage.style.left = "60%";
        javiImage.style.transition = "left 12s";
        javiImage.style.left = "70%";
    }, 7000);

    setTimeout(() => {
        waiterImage.src = "../images/FarWest/bar/camarero_jesus_charla1.png";
        waiterImage.style.top = "41%"; 
        waiterImage.style.left = "84%";
    }, 19000);

    setTimeout(() => {
        alejandroImage.src = "../images/FarWest/bar/alejandro_charla1.png";
        alejandroImage.style.height = "450px";
        alejandroImage.style.top = "60%"; 
        alejandroImage.style.left = "60%";
        options.style.display = "block";
        options.classList.add("pulse-animation");
    }, 21000);

    chupito.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", "chupito");
    });

    cerveza.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", "cerveza");
    });

    nada.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", "nada");
    });

    javiImage.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    javiImage.addEventListener("drop", function (event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        if (data === "chupito") {
            javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_chupito.png";
            setTimeout(() => {
                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_bueno.png";
                javiImage.style.height = "420px";
                javiImage.style.top = "60%"; 
                javiImage.style.left = "72%";
                alejandroImage.src = "../images/FarWest/bar/alejandro_bebe.png";
                alejandroImage.style.height = "420px";
                alejandroImage.style.top = "60%"; 
                alejandroImage.style.left = "55%";
            }, 2000);
            setTimeout(() => {
                backgroundMusic.pause();
                ruidoDestructor.play();
                setTimeout(() => {
                    waiterImage.src = "../images/FarWest/bar/camarero_jesus_miedo.png";
                    setTimeout(() => {
                        waiterImage.style.transition = "opacity 4s";
                        waiterImage.style.opacity = "0";
                        setTimeout(() => {
                            alejandroImage.src = "../images/FarWest/bar/alejandro_miedo.png";
                            setTimeout(() => {
                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_destructor.png";
                                setTimeout(() => {
                                    javiDestructor.style.transition = "left 5s ease";
                                    javiDestructor.style.left = "20%";
                                    setTimeout(() => {
                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla1.png";
                                        javiDestructor.style.height = "450px";
                                        javiDestructor.style.top = "60%";
                                        javiDestructor.style.left = "20%";
                                        setTimeout(() => {
                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla2.png";
                                            setTimeout(() => {
                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                setTimeout(() => {
                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla2.png";
                                                    setTimeout(() => {
                                                        alejandroImage.src = "../images/FarWest/bar/alejandro_charla3.png";
                                                        setTimeout(() => {
                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                            javiDestructor.style.transition = "left 10s ease";
                                                            javiDestructor.style.left = "-100%";
                                                            setTimeout(() => {
                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor_caballo.png";
                                                                javiDestructor.style.transition = "left 5s ease";
                                                                javiDestructor.style.left = "20%";
                                                                setTimeout(() => {
                                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_caballo_gritando.png";
                                                                    caballoSonido.play();
                                                                    setTimeout(() => {
                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla3.png";
                                                                        setTimeout(() => {
                                                                            caballoVolador.style.transition = "opacity 2s ease";
                                                                            caballoVolador.style.opacity = "1";
                                                                            setTimeout(() => {
                                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                                                setTimeout(() => {
                                                                                    caballoVolador.style.transition = "left 5s ease, top 5s ease";
                                                                                    caballoVolador.style.left = "80%";
                                                                                    caballoVolador.style.top = "30%";
                                                                                }, 2000);
                                                                                setTimeout(() => {
                                                                                    javiImage.src = "../images/FarWest/bar/rosa/javi_muerte_rosa.png";
                                                                                    setTimeout(() => {
                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_muerte_rosa2.png";
                                                                                        setTimeout(() => {
                                                                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla4.png";
                                                                                            setTimeout(() => {
                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_charla5.png";
                                                                                                setTimeout(() => {
                                                                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla4.png";
                                                                                                    setTimeout(() => {
                                                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                                                                        javiDestructor.style.transition = "left 10s ease";
                                                                                                        javiDestructor.style.left = "-100%";
                                                                                                        setTimeout(() => {
                                                                                                            const ambulanceImage = document.createElement("img");
                                                                                                            ambulanceImage.src = "../images/FarWest/bar/ambulancia.png";
                                                                                                            ambulanceImage.id = "ambulancia";
                                                                                                            ambulanceImage.style.position = "absolute";
                                                                                                            ambulanceImage.style.right = "-100%";
                                                                                                            ambulanceImage.style.top = "83%";
                                                                                                            ambulanceImage.style.height = "800px";
                                                                                                            ambulanceImage.style.transform = "translate(-50%, -50%)";
                                                                                                            document.body.appendChild(ambulanceImage);

                                                                                                            const sirenaAmbulancia = new Audio("../images/FarWest/bar/sirena_ambulancia.mp3");
                                                                                                            sirenaAmbulancia.play();

                                                                                                            setTimeout(() => {
                                                                                                                ambulanceImage.style.transition = "right 5s ease";
                                                                                                                ambulanceImage.style.right = "30%";
                                                                                                                setTimeout(() => {
                                                                                                                    const jesusMedicoImage = document.createElement("img");
                                                                                                                    jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico.png";
                                                                                                                    jesusMedicoImage.id = "jesus-medico";
                                                                                                                    jesusMedicoImage.style.position = "absolute";
                                                                                                                    jesusMedicoImage.style.right = "55%";
                                                                                                                    jesusMedicoImage.style.top = "69%";
                                                                                                                    jesusMedicoImage.style.height = "450px";
                                                                                                                    jesusMedicoImage.style.transform = "translate(-50%, -50%)";
                                                                                                                    document.body.appendChild(jesusMedicoImage);
                                                                                                                    setTimeout(() => {
                                                                                                                        jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_caminando.png";
                                                                                                                        jesusMedicoImage.style.transition = "left 5s ease";
                                                                                                                        jesusMedicoImage.style.left = "60%";
                                                                                                                        setTimeout(() => {
                                                                                                                            jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_confirma.png";
                                                                                                                            setTimeout(() => {
                                                                                                                                jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_lleva.png";
                                                                                                                                setTimeout(() => {
                                                                                                                                    jesusMedicoImage.src = "../images/FarWest/bar/rosa/medico_jesus_javi_rosa.png";
                                                                                                                                    javiImage.style.transition = "opacity 2s ease";
                                                                                                                                    javiImage.style.opacity = "0";
                                                                                                                                    setTimeout(() => {
                                                                                                                                        jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_caminando.png";
                                                                                                                                        jesusMedicoImage.style.transition = "left 5s ease";
                                                                                                                                        jesusMedicoImage.style.left = "30%";
                                                                                                                                        setTimeout(() => {
                                                                                                                                            jesusMedicoImage.style.transition = "opacity 2s ease";
                                                                                                                                            jesusMedicoImage.style.opacity = "0";
                                                                                                                                            setTimeout(() => {
                                                                                                                                                ambulanceImage.style.transition = "right 5s ease";
                                                                                                                                                ambulanceImage.style.right = "-100%";
                                                                                                                                                sirenaAmbulancia.play();
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    alejandroImage.src = "../images/FarWest/bar/alejandro_charla6.png";
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        caballoVolador.style.transition = "opacity 2s ease";
                                                                                                                                                        caballoVolador.style.opacity = "0";
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla7.png";
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_caballo.png";
                                                                                                                                                                alejandroImage.style.transition = "left 5s ease";
                                                                                                                                                                alejandroImage.style.left = "-100%";
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    leftImage.style.transition = "left 4s";
                                                                                                                                                                    rightImage.style.transition = "right 4s";
                                                                                                                                                                    leftImage.style.left = "-100%";
                                                                                                                                                                    rightImage.style.right = "-100%";
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        const tumbaImage = document.createElement("img");
                                                                                                                                                                        tumbaImage.src = "../images/FarWest/bar/tumba.png";
                                                                                                                                                                        tumbaImage.id = "tumba";
                                                                                                                                                                        tumbaImage.style.position = "absolute";
                                                                                                                                                                        tumbaImage.style.left = "50%";
                                                                                                                                                                        tumbaImage.style.top = "50%";
                                                                                                                                                                        tumbaImage.style.height = "450px";
                                                                                                                                                                        tumbaImage.style.transform = "translate(-50%, -50%)";
                                                                                                                                                                        tumbaImage.style.opacity = "0";
                                                                                                                                                                        document.body.appendChild(tumbaImage);
                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                            tumbaImage.style.transition = "opacity 2s ease";
                                                                                                                                                                            tumbaImage.style.opacity = "1";
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                javiImage.src = "../images/FarWest/bar/javi_inicio_profe.png";
                                                                                                                                                                                javiImage.style.transition = "left 5s ease, opacity 2s ease";
                                                                                                                                                                                javiImage.style.left = "10%";
                                                                                                                                                                                javiImage.style.opacity = "1";
                                                                                                                                                                                javiImage.style.zIndex = "10";
                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                    javiImage.src = "../images/FarWest/bar/javi_profe_charla1.png";
                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                        const returnButton = document.createElement("button");
                                                                                                                                                                                        returnButton.textContent = "Volver al inicio";
                                                                                                                                                                                        returnButton.style.position = "absolute";
                                                                                                                                                                                        returnButton.style.bottom = "10%";
                                                                                                                                                                                        returnButton.style.left = "50%";
                                                                                                                                                                                        returnButton.style.transform = "translateX(-50%)";
                                                                                                                                                                                        returnButton.style.padding = "10px 20px";
                                                                                                                                                                                        returnButton.style.fontSize = "16px";
                                                                                                                                                                                        returnButton.style.cursor = "pointer";
                                                                                                                                                                                        returnButton.addEventListener("click", () => {
                                                                                                                                                                                            window.location.href = "../html/index.html";
                                                                                                                                                                                        });
                                                                                                                                                                                        document.body.appendChild(returnButton);
                                                                                                                                                                                    }, 2000);
                                                                                                                                                                                }, 4000);
                                                                                                                                                                            }, 2000);
                                                                                                                                                                        }, 100);
                                                                                                                                                                    }, 2000);
                                                                                                                                                                }, 2000);
                                                                                                                                                            }, 2000);
                                                                                                                                                        }, 2000);
                                                                                                                                                    }, 2000);
                                                                                                                                                }, 2000);
                                                                                                                                            }, 2000);
                                                                                                                                        }, 2000);
                                                                                                                                    }, 2000);
                                                                                                                                }, 2000);
                                                                                                                            }, 2000);
                                                                                                                        }, 2000);
                                                                                                                    }, 2000);
                                                                                                                }, 2000);
                                                                                                            }, 100);
                                                                                                        }, 4000);
                                                                                                    }, 4000);
                                                                                                }, 4000);
                                                                                            }, 4000);
                                                                                        }, 2000);
                                                                                    }, 2000);
                                                                                }, 2000);
                                                                            }, 2000);
                                                                        }, 4000);
                                                                    }, 4000);
                                                                }, 4000);
                                                            }, 4000);
                                                        }, 4000);
                                                    }, 4000);
                                                }, 4000);
                                            }, 4000);
                                        }, 4000);
                                    }, 5000);
                                }, 4000);
                            }, 4000);
                        }, 4000);
                    }, 4000);
                }, 2000);
            }, 10000);
        } else if (data === "cerveza") {
            javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_cerveza.png";
            setTimeout(() => {
                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_bueno.png";
                javiImage.style.height = "420px";
                javiImage.style.top = "60%"; 
                javiImage.style.left = "72%";
                alejandroImage.src = "../images/FarWest/bar/alejandro_bebe.png";
                alejandroImage.style.height = "420px";
                alejandroImage.style.top = "60%"; 
                alejandroImage.style.left = "55%";
            }, 2000);
            setTimeout(() => {
                backgroundMusic.pause();
                ruidoDestructor.play();
                setTimeout(() => {
                    waiterImage.src = "../images/FarWest/bar/camarero_jesus_miedo.png";
                    setTimeout(() => {
                        waiterImage.style.transition = "opacity 4s";
                        waiterImage.style.opacity = "0";
                        setTimeout(() => {
                            alejandroImage.src = "../images/FarWest/bar/alejandro_miedo.png";
                            setTimeout(() => {
                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_destructor.png";
                                setTimeout(() => {
                                    javiDestructor.style.transition = "left 5s ease";
                                    javiDestructor.style.left = "20%";
                                    setTimeout(() => {
                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla1.png";
                                        javiDestructor.style.height = "450px";
                                        javiDestructor.style.top = "60%";
                                        javiDestructor.style.left = "20%";
                                        setTimeout(() => {
                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla2.png";
                                            setTimeout(() => {
                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                setTimeout(() => {
                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla2.png";
                                                    setTimeout(() => {
                                                        alejandroImage.src = "../images/FarWest/bar/alejandro_charla3.png";
                                                        setTimeout(() => {
                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                            javiDestructor.style.transition = "left 10s ease";
                                                            javiDestructor.style.left = "-100%";
                                                            setTimeout(() => {
                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor_caballo.png";
                                                                javiDestructor.style.transition = "left 5s ease";
                                                                javiDestructor.style.left = "20%";
                                                                setTimeout(() => {
                                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_caballo_gritando.png";
                                                                    caballoSonido.play();
                                                                    setTimeout(() => {
                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla3.png";
                                                                        setTimeout(() => {
                                                                            caballoVolador.style.transition = "opacity 2s ease";
                                                                            caballoVolador.style.opacity = "1";
                                                                            setTimeout(() => {
                                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                                                setTimeout(() => {
                                                                                    caballoVolador.style.transition = "left 5s ease, top 5s ease";
                                                                                    caballoVolador.style.left = "80%";
                                                                                    caballoVolador.style.top = "30%";
                                                                                }, 2000);
                                                                                setTimeout(() => {
                                                                                    javiImage.src = "../images/FarWest/bar/rosa/javi_muerte_rosa.png";
                                                                                    setTimeout(() => {
                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_muerte_rosa2.png";
                                                                                        setTimeout(() => {
                                                                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla4.png";
                                                                                            setTimeout(() => {
                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_charla5.png";
                                                                                                setTimeout(() => {
                                                                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla4.png";
                                                                                                    setTimeout(() => {
                                                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                                                                        javiDestructor.style.transition = "left 10s ease";
                                                                                                        javiDestructor.style.left = "-100%";
                                                                                                        setTimeout(() => {
                                                                                                            const ambulanceImage = document.createElement("img");
                                                                                                            ambulanceImage.src = "../images/FarWest/bar/ambulancia.png";
                                                                                                            ambulanceImage.id = "ambulancia";
                                                                                                            ambulanceImage.style.position = "absolute";
                                                                                                            ambulanceImage.style.right = "-100%";
                                                                                                            ambulanceImage.style.top = "83%";
                                                                                                            ambulanceImage.style.height = "800px";
                                                                                                            ambulanceImage.style.transform = "translate(-50%, -50%)";
                                                                                                            document.body.appendChild(ambulanceImage);

                                                                                                            const sirenaAmbulancia = new Audio("../images/FarWest/bar/sirena_ambulancia.mp3");
                                                                                                            sirenaAmbulancia.play();

                                                                                                            setTimeout(() => {
                                                                                                                ambulanceImage.style.transition = "right 5s ease";
                                                                                                                ambulanceImage.style.right = "30%";
                                                                                                                setTimeout(() => {
                                                                                                                    const jesusMedicoImage = document.createElement("img");
                                                                                                                    jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico.png";
                                                                                                                    jesusMedicoImage.id = "jesus-medico";
                                                                                                                    jesusMedicoImage.style.position = "absolute";
                                                                                                                    jesusMedicoImage.style.right = "55%";
                                                                                                                    jesusMedicoImage.style.top = "69%";
                                                                                                                    jesusMedicoImage.style.height = "450px";
                                                                                                                    jesusMedicoImage.style.transform = "translate(-50%, -50%)";
                                                                                                                    document.body.appendChild(jesusMedicoImage);
                                                                                                                    setTimeout(() => {
                                                                                                                        jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_caminando.png";
                                                                                                                        jesusMedicoImage.style.transition = "left 5s ease";
                                                                                                                        jesusMedicoImage.style.left = "60%";
                                                                                                                        setTimeout(() => {
                                                                                                                            jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_confirma.png";
                                                                                                                            setTimeout(() => {
                                                                                                                                jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_lleva.png";
                                                                                                                                setTimeout(() => {
                                                                                                                                    jesusMedicoImage.src = "../images/FarWest/bar/rosa/medico_jesus_javi_rosa.png";
                                                                                                                                    javiImage.style.transition = "opacity 2s ease";
                                                                                                                                    javiImage.style.opacity = "0";
                                                                                                                                    setTimeout(() => {
                                                                                                                                        jesusMedicoImage.src = "../images/FarWest/bar/jesus_medico_caminando.png";
                                                                                                                                        jesusMedicoImage.style.transition = "left 5s ease";
                                                                                                                                        jesusMedicoImage.style.left = "30%";
                                                                                                                                        setTimeout(() => {
                                                                                                                                            jesusMedicoImage.style.transition = "opacity 2s ease";
                                                                                                                                            jesusMedicoImage.style.opacity = "0";
                                                                                                                                            setTimeout(() => {
                                                                                                                                                ambulanceImage.style.transition = "right 5s ease";
                                                                                                                                                ambulanceImage.style.right = "-100%";
                                                                                                                                                sirenaAmbulancia.play();
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    alejandroImage.src = "../images/FarWest/bar/alejandro_charla6.png";
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        caballoVolador.style.transition = "opacity 2s ease";
                                                                                                                                                        caballoVolador.style.opacity = "0";
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla7.png";
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_caballo.png";
                                                                                                                                                                alejandroImage.style.transition = "left 5s ease";
                                                                                                                                                                alejandroImage.style.left = "-100%";
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    leftImage.style.transition = "left 4s";
                                                                                                                                                                    rightImage.style.transition = "right 4s";
                                                                                                                                                                    leftImage.style.left = "-100%";
                                                                                                                                                                    rightImage.style.right = "-100%";
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        const tumbaImage = document.createElement("img");
                                                                                                                                                                        tumbaImage.src = "../images/FarWest/bar/tumba.png";
                                                                                                                                                                        tumbaImage.id = "tumba";
                                                                                                                                                                        tumbaImage.style.position = "absolute";
                                                                                                                                                                        tumbaImage.style.left = "50%";
                                                                                                                                                                        tumbaImage.style.top = "50%";
                                                                                                                                                                        tumbaImage.style.height = "450px";
                                                                                                                                                                        tumbaImage.style.transform = "translate(-50%, -50%)";
                                                                                                                                                                        tumbaImage.style.opacity = "0";
                                                                                                                                                                        document.body.appendChild(tumbaImage);
                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                            tumbaImage.style.transition = "opacity 2s ease";
                                                                                                                                                                            tumbaImage.style.opacity = "1";
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                const javiViejoImage = document.createElement("img");
                                                                                                                                                                                javiViejoImage.src = "../images/FarWest/bar/javi_inicio_profe.png";
                                                                                                                                                                                javiViejoImage.id = "javi-viejo";
                                                                                                                                                                                javiViejoImage.style.position = "absolute";
                                                                                                                                                                                javiViejoImage.style.left = "-100%";
                                                                                                                                                                                javiViejoImage.style.top = "60%";
                                                                                                                                                                                javiViejoImage.style.height = "420px";
                                                                                                                                                                                javiViejoImage.style.transform = "translate(-50%, -50%)";
                                                                                                                                                                                document.body.appendChild(javiViejoImage);
                                                                                                                                                                                javiViejoImage.style.transition = "left 5s ease, opacity 2s ease";
                                                                                                                                                                                javiViejoImage.style.left = "10%";
                                                                                                                                                                                javiViejoImage.style.opacity = "1";
                                                                                                                                                                                javiViejoImage.style.zIndex = "10";
                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                    javiViejoImage.src = "../images/FarWest/bar/javi_profe_charla1.png";
                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                        const returnButton = document.createElement("button");
                                                                                                                                                                                        returnButton.textContent = "Volver al inicio";
                                                                                                                                                                                        returnButton.style.position = "absolute";
                                                                                                                                                                                        returnButton.style.bottom = "10%";
                                                                                                                                                                                        returnButton.style.left = "50%";
                                                                                                                                                                                        returnButton.style.transform = "translateX(-50%)";
                                                                                                                                                                                        returnButton.style.padding = "10px 20px";
                                                                                                                                                                                        returnButton.style.fontSize = "16px";
                                                                                                                                                                                        returnButton.style.cursor = "pointer";
                                                                                                                                                                                        returnButton.addEventListener("click", () => {
                                                                                                                                                                                            window.location.href = "../html/index.html";
                                                                                                                                                                                        });
                                                                                                                                                                                        document.body.appendChild(returnButton);
                                                                                                                                                                                    }, 2000);
                                                                                                                                                                                }, 4000);
                                                                                                                                                                            }, 2000);
                                                                                                                                                                        }, 100);
                                                                                                                                                                    }, 2000);
                                                                                                                                                                }, 2000);
                                                                                                                                                            }, 2000);
                                                                                                                                                        }, 2000);
                                                                                                                                                    }, 2000);
                                                                                                                                                }, 2000);
                                                                                                                                            }, 2000);
                                                                                                                                        }, 2000);
                                                                                                                                    }, 2000);
                                                                                                                                }, 2000);
                                                                                                                            }, 2000);
                                                                                                                        }, 2000);
                                                                                                                    }, 2000);
                                                                                                                }, 2000);
                                                                                                            }, 100);
                                                                                                        }, 4000);
                                                                                                    }, 4000);
                                                                                                }, 4000);
                                                                                            }, 4000);
                                                                                        }, 2000);
                                                                                    }, 2000);
                                                                                }, 2000);
                                                                            }, 2000);
                                                                        }, 4000);
                                                                    }, 4000);
                                                                }, 4000);
                                                            }, 4000);
                                                        }, 4000);
                                                    }, 4000);
                                                }, 4000);
                                            }, 4000);
                                        }, 4000);
                                    }, 5000);
                                }, 4000);
                            }, 4000);
                        }, 4000);
                    }, 4000);
                }, 2000);
            }, 10000);
        } else if (data === "nada") {
            javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
            setTimeout(() => {
                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_nada.png";
                javiImage.style.height = "420px";
                javiImage.style.top = "60%"; 
                javiImage.style.left = "72%";
                alejandroImage.src = "../images/FarWest/bar/alejandro_nada.png";
                alejandroImage.style.height = "420px";
                alejandroImage.style.top = "60%"; 
                alejandroImage.style.left = "55%";
            }, 2000);
            setTimeout(() => {
                backgroundMusic.pause();
                ruidoDestructor.play();
                setTimeout(() => {
                    waiterImage.src = "../images/FarWest/bar/camarero_jesus_miedo.png";
                    setTimeout(() => {
                        waiterImage.style.transition = "opacity 4s";
                        waiterImage.style.opacity = "0";
                        setTimeout(() => {
                            alejandroImage.src = "../images/FarWest/bar/alejandro_miedo.png";
                            setTimeout(() => {
                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_destructor.png";
                                setTimeout(() => {
                                    javiDestructor.style.transition = "left 5s ease";
                                    javiDestructor.style.left = "20%";
                                    setTimeout(() => {
                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla1.png";
                                        javiDestructor.style.height = "450px";
                                        javiDestructor.style.top = "60%";
                                        javiDestructor.style.left = "20%";
                                        setTimeout(() => {
                                            alejandroImage.src = "../images/FarWest/bar/alejandro_charla2.png";
                                            setTimeout(() => {
                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                setTimeout(() => {
                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla2.png";
                                                    setTimeout(() => {
                                                        alejandroImage.src = "../images/FarWest/bar/alejandro_charla3.png";
                                                        setTimeout(() => {
                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                            javiDestructor.style.transition = "left 10s ease";
                                                            javiDestructor.style.left = "-100%";
                                                            setTimeout(() => {
                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor_caballo.png";
                                                                javiDestructor.style.transition = "left 5s ease";
                                                                javiDestructor.style.left = "20%";
                                                                setTimeout(() => {
                                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_caballo_gritando.png";
                                                                    caballoSonido.play();
                                                                    setTimeout(() => {
                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_charla3.png";
                                                                        setTimeout(() => {
                                                                            caballoVolador.style.transition = "opacity 2s ease";
                                                                            caballoVolador.style.opacity = "1";
                                                                            setTimeout(() => {
                                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor.png";
                                                                                setTimeout(() => {
                                                                                    caballoVolador.style.transition = "left 5s ease, top 5s ease";
                                                                                    caballoVolador.style.left = "80%";
                                                                                    caballoVolador.style.top = "30%";
                                                                                    alejandroImage.transition = "left 2s ease";
                                                                                    alejandroImage.style.left = "45%";
                                                                                    javiImage.style.transition = "left 2s ease";
                                                                                    javiImage.style.left = "60%";
                                                                                    setTimeout(() => {
                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_venganza_rosa.png";
                                                                                        javiImage.style.opacity = "1";
                                                                                        const newOptions = document.createElement("div");
                                                                                        newOptions.id = "new-options";
                                                                                        newOptions.style.position = "absolute";
                                                                                        newOptions.style.bottom = "10%";
                                                                                        newOptions.style.left = "50%";
                                                                                        newOptions.style.transform = "translateX(-50%)";
                                                                                        newOptions.style.display = "flex";
                                                                                        newOptions.style.gap = "20px";
                                                                                        newOptions.style.justifyContent = "center";
                                                                                        newOptions.style.flexDirection = "row";

                                                                                        const spiderJavi = document.createElement("div");
                                                                                        spiderJavi.id = "spider-javi";
                                                                                        spiderJavi.textContent = "SpiderJavi";
                                                                                        spiderJavi.style.backgroundColor = "red";
                                                                                        spiderJavi.style.padding = "10px";
                                                                                        spiderJavi.style.cursor = "pointer";
                                                                                        spiderJavi.draggable = true;

                                                                                        const gokuJavi = document.createElement("div");
                                                                                        gokuJavi.id = "goku-javi";
                                                                                        gokuJavi.textContent = "GokuJavi";
                                                                                        gokuJavi.style.backgroundColor = "red";
                                                                                        gokuJavi.style.padding = "10px";
                                                                                        gokuJavi.style.cursor = "pointer";
                                                                                        gokuJavi.draggable = true;

                                                                                        const programacion = document.createElement("div");
                                                                                        programacion.id = "programacion";
                                                                                        programacion.textContent = "Programacion";
                                                                                        programacion.style.backgroundColor = "red";
                                                                                        programacion.style.padding = "10px";
                                                                                        programacion.style.cursor = "pointer";
                                                                                        programacion.draggable = true;

                                                                                        newOptions.appendChild(spiderJavi);
                                                                                        newOptions.appendChild(gokuJavi);
                                                                                        newOptions.appendChild(programacion);
                                                                                        document.body.appendChild(newOptions);

                                                                                        spiderJavi.addEventListener("dragstart", function (event) {
                                                                                            event.dataTransfer.setData("text", "spider-javi");
                                                                                        });

                                                                                        gokuJavi.addEventListener("dragstart", function (event) {
                                                                                            event.dataTransfer.setData("text", "goku-javi");
                                                                                        });

                                                                                        programacion.addEventListener("dragstart", function (event) {
                                                                                            event.dataTransfer.setData("text", "programacion");
                                                                                        });

                                                                                        javiImage.addEventListener("dragover", function (event) {
                                                                                            event.preventDefault();
                                                                                        });

                                                                                        javiImage.addEventListener("drop", function (event) {
                                                                                            event.preventDefault();
                                                                                            const data = event.dataTransfer.getData("text");
                                                                                            if (data === "spider-javi") {
                                                                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_caminando.png";
                                                                                                javiImage.style.transition = "left 10s ease";
                                                                                                javiImage.style.left = "120%";
                                                                                                setTimeout(() => {
                                                                                                    javiImage.src = "../images/FarWest/bar/spider_javi.png";
                                                                                                    setTimeout(() => {
                                                                                                        javiImage.style.transition = "left 10s ease";
                                                                                                        javiImage.style.left = "64%";
                                                                                                        setTimeout(() => {
                                                                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor_firma.png";
                                                                                                            setTimeout(() => {
                                                                                                                javiImage.src = "../images/FarWest/bar/spider_javi_charla1.png";
                                                                                                                setTimeout(() => {
                                                                                                                    alejandroImage.src = "../images/FarWest/bar/alejandro_eso.png";
                                                                                                                    setTimeout(() => {
                                                                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_losiento.png";
                                                                                                                        setTimeout(() => {
                                                                                                                            javiDestructor.style.transition = "left 10s ease";
                                                                                                                            javiDestructor.style.left = "-100%";
                                                                                                                            setTimeout(() => {
                                                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_despedida.png";
                                                                                                                                setTimeout(() => {
                                                                                                                                    alejandroImage.style.transition = "left 10s ease";
                                                                                                                                    alejandroImage.style.left = "-100%";
                                                                                                                                    caballoVolador.style.transition = "opacity 2s ease";
                                                                                                                                    caballoVolador.style.opacity = "0";
                                                                                                                                    setTimeout(() => {
                                                                                                                                        javiImage.src = "../images/FarWest/bar/spider_javi_charla2.png";
                                                                                                                                        setTimeout(() => {
                                                                                                                                            javiImage.src = "../images/FarWest/bar/spider_javi_jubilacion.png";
                                                                                                                                            setTimeout(() => {
                                                                                                                                                javiImage.src = "../images/FarWest/bar/spider_javi.png";
                                                                                                                                                javiImage.style.transition = "left 10s ease";
                                                                                                                                                javiImage.style.left = "-100%";
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    const retireButton = document.createElement("button");
                                                                                                                                                    retireButton.textContent = "Jubilarse";
                                                                                                                                                    retireButton.style.position = "absolute";
                                                                                                                                                    retireButton.style.top = "50%";
                                                                                                                                                    retireButton.style.color = "red";
                                                                                                                                                    retireButton.style.left = "50%";
                                                                                                                                                    retireButton.style.transform = "translate(-50%, -50%)";
                                                                                                                                                    retireButton.style.padding = "10px 20px";
                                                                                                                                                    retireButton.style.fontSize = "16px";
                                                                                                                                                    retireButton.style.cursor = "pointer";
                                                                                                                                                    retireButton.addEventListener("click", () => {
                                                                                                                                                        window.location.href = "../html/jubilarse.html";
                                                                                                                                                    });
                                                                                                                                                    document.body.appendChild(retireButton);
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        leftImage.style.transition = "left 4s";
                                                                                                                                                        leftImage.style.left = "-100%";
                                                                                                                                                        rightImage.style.transition = "right 4s";
                                                                                                                                                        rightImage.style.right = "-100%";
                                                                                                                                                    }, 4000);
                                                                                                                                                }, 4000);
                                                                                                                                            }, 4000);
                                                                                                                                        }, 4000);
                                                                                                                                    }, 4000);
                                                                                                                                }, 4000);
                                                                                                                            }, 4000);
                                                                                                                        }, 4000);
                                                                                                                    }, 4000);
                                                                                                                }, 4000);
                                                                                                            }, 4000);
                                                                                                        }, 4000);
                                                                                                    }, 4000);
                                                                                                }, 5000);
                                                                                            } else if (data === "goku-javi") {
                                                                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_caminando.png";
                                                                                                javiImage.style.transition = "left 10s ease";
                                                                                                javiImage.style.left = "120%";
                                                                                                setTimeout(() => {
                                                                                                    javiImage.src = "../images/FarWest/bar/goku_javi.png";
                                                                                                    setTimeout(() => {
                                                                                                        javiImage.style.transition = "left 8s ease";
                                                                                                        javiImage.style.left = "64%";
                                                                                                        setTimeout(() => {
                                                                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor_batman.png";
                                                                                                            setTimeout(() => {
                                                                                                                javiImage.src = "../images/FarWest/bar/goku_javi_charla1.png";
                                                                                                                setTimeout(() => {
                                                                                                                    const sonidoKamekameha = new Audio("../images/FarWest/bar/kamekameha.mp3");
                                                                                                                    javiImage.src = "../images/FarWest/bar/goku_javi_kamekameha.png";
                                                                                                                    sonidoKamekameha.play();
                                                                                                                    setTimeout(() => {
                                                                                                                        javiImage.src = "../images/FarWest/bar/goku_javi_poder.png"; 
                                                                                                                        setTimeout(() => {
                                                                                                                            javiImage.src = "../images/FarWest/bar/goku_javi.png";
                                                                                                                            const kamekameha = document.createElement("img");
                                                                                                                            kamekameha.src = "../images/FarWest/bar/kamekameha.png";
                                                                                                                            kamekameha.id = `kamekameha`;
                                                                                                                            kamekameha.style.position = "absolute";
                                                                                                                            kamekameha.style.right = `30%`;
                                                                                                                            kamekameha.style.top = `51%`;
                                                                                                                            kamekameha.style.height = "120px";
                                                                                                                            kamekameha.style.left = `54%`;
                                                                                                                            document.body.appendChild(kamekameha);
                                                                                                                            setTimeout(() => {
                                                                                                                                kamekameha.style.transition = "left 10s ease";
                                                                                                                                kamekameha.style.left = "-14%";
                                                                                                                                setTimeout(() => {
                                                                                                                                    javiDestructor.src = "../images/FarWest/bar/javi_destructor_suelo.png";
                                                                                                                                    setTimeout(() => {
                                                                                                                                        javiDestructor.src = "../images/FarWest/bar/javi_destructor_gritando.png";
                                                                                                                                        alejandroImage.src = "../images/FarWest/bar/alejandro_bestia.png";
                                                                                                                                        setTimeout(() => {
                                                                                                                                            javiImage.src = "../images/FarWest/bar/goku_javi_jubilacion.png";
                                                                                                                                            javiDestructor.style.transition = "left 10s ease";
                                                                                                                                            javiDestructor.style.left = "-100%";
                                                                                                                                            setTimeout(() => {
                                                                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_despedida.png";
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    alejandroImage.style.transition = "left 10s ease";
                                                                                                                                                    alejandroImage.style.left = "-100%";
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        caballoVolador.style.transition = "opacity 2s ease";
                                                                                                                                                        caballoVolador.style.opacity = "0";
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            javiImage.style.transition = "left 10s ease";
                                                                                                                                                            javiImage.style.left = "-100%";
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                caballoVolador.style.transition = "opacity 2s ease";
                                                                                                                                                                caballoVolador.style.opacity = "0";
                                                                                                                                                                const retireButton = document.createElement("button");
                                                                                                                                                                retireButton.textContent = "Jubilarse";
                                                                                                                                                                retireButton.style.position = "absolute";
                                                                                                                                                                retireButton.style.top = "50%";
                                                                                                                                                                retireButton.style.color = "red";
                                                                                                                                                                retireButton.style.left = "50%";
                                                                                                                                                                retireButton.style.transform = "translate(-50%, -50%)";
                                                                                                                                                                retireButton.style.padding = "10px 20px";
                                                                                                                                                                retireButton.style.fontSize = "16px";
                                                                                                                                                                retireButton.style.cursor = "pointer";
                                                                                                                                                                retireButton.addEventListener("click", () => {
                                                                                                                                                                    window.location.href = "../html/jubilarse.html";
                                                                                                                                                                });
                                                                                                                                                                document.body.appendChild(retireButton);
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    leftImage.style.transition = "left 4s";
                                                                                                                                                                    leftImage.style.left = "-100%";
                                                                                                                                                                    rightImage.style.transition = "right 4s";
                                                                                                                                                                    rightImage.style.right = "-100%";
                                                                                                                                                                }, 2000);
                                                                                                                                                            }, 2000); 
                                                                                                                                                        }, 2000);
                                                                                                                                                    }, 2000);
                                                                                                                                                }, 2000);
                                                                                                                                            }, 4000);
                                                                                                                                        }, 4000);
                                                                                                                                    }, 4000);
                                                                                                                                }, 4000);
                                                                                                                            }, 4000);
                                                                                                                        }, 4000);
                                                                                                                    }, 4000);
                                                                                                                }, 4000);
                                                                                                            }, 4000);
                                                                                                        }, 4000);
                                                                                                    }, 4000);
                                                                                                }, 4000);
                                                                                            } else if (data === "programacion") {
                                                                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_caminando.png";
                                                                                                    setTimeout(() => {
                                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_llamando.png";
                                                                                                        setTimeout(() => {
                                                                                                            javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_llamando2.png";
                                                                                                            setTimeout(() => {
                                                                                                                const robertoImage = document.createElement("img");
                                                                                                                robertoImage.src = "../images/FarWest/bar/roberto.png";
                                                                                                                robertoImage.id = "roberto";
                                                                                                                robertoImage.style.position = "absolute";
                                                                                                                robertoImage.style.right = "-100%";
                                                                                                                robertoImage.style.top = "60%";
                                                                                                                robertoImage.style.height = "420px";
                                                                                                                robertoImage.style.transform = "translate(-50%, -50%)";
                                                                                                                document.body.appendChild(robertoImage);
                                                                                                                setTimeout(() => {
                                                                                                                    robertoImage.style.transition = "right 8s ease";
                                                                                                                    robertoImage.style.right = "12%";
                                                                                                                    setTimeout(() => {
                                                                                                                        robertoImage.src = "../images/FarWest/bar/roberto_charla1.png";
                                                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_heroe.png";
                                                                                                                        setTimeout(() => {
                                                                                                                            robertoImage.src = "../images/FarWest/bar/roberto_charla2.png";
                                                                                                                            setTimeout(() => {
                                                                                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor_php.png";
                                                                                                                                setTimeout(() => {
                                                                                                                                    
                                                                                                                                        const php = document.createElement("img");
                                                                                                                                        php.src = "../images/FarWest/bar/php.png";
                                                                                                                                        php.id = `php`; 
                                                                                                                                        php.style.position = "absolute";
                                                                                                                                        php.style.right = `30%`;
                                                                                                                                        php.style.top = `60%`;   
                                                                                                                                        php.style.height = "40px";
                                                                                                                                        php.style.left = `66%`;
                                                                                                                                        document.body.appendChild(php);

                                                                                                                                        const php2 = document.createElement("img");
                                                                                                                                        php2.src = "../images/FarWest/bar/php.png";
                                                                                                                                        php2.id = `php2`; 
                                                                                                                                        php2.style.position = "absolute";
                                                                                                                                        php2.style.right = `30%`; 
                                                                                                                                        php2.style.top = `65%`;    
                                                                                                                                        php2.style.height = "40px";
                                                                                                                                        php2.style.left = `66%`;
                                                                                                                                        document.body.appendChild(php2);
                                                                                                                                    
                                                                                                                                    setTimeout(() => {
                                                                                                                                        php.style.transition = "left 10s ease";
                                                                                                                                        php2.style.transition = "left 15s ease";
                                                                                                                                        php.style.left = "-14%";
                                                                                                                                        php2.style.left = "-14%";
                                                                                                                                        javiImage.style.transition = "left 8s ease";
                                                                                                                                        javiImage.style.right = "-26%";
                                                                                                                                        setTimeout(() => {
                                                                                                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor_suelo.png";
                                                                                                                                            setTimeout(() => {
                                                                                                                                                javiDestructor.src = "../images/FarWest/bar/javi_destructor_gritando.png";
                                                                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_php.png";
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    robertoImage.style.transition = "right 5s ease";
                                                                                                                                                    robertoImage.style.right = "7%";
                                                                                                                                                    robertoImage.src = "../images/FarWest/bar/roberto_win.png";
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_win.png";
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            javiDestructor.src = "../images/FarWest/bar/javi_destructor_gritando.png";
                                                                                                                                                            javiDestructor.style.transition = "left 5s ease";
                                                                                                                                                            javiDestructor.style.left = "-100%";
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                alejandroImage.src = "../images/FarWest/bar/alejandro_adios.png";
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    alejandroImage.style.transition = "left 5s ease";
                                                                                                                                                                    alejandroImage.style.left = "-100%";
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        javiImage.src = "../images/FarWest/bar/rosa/javi_rosa_hacer.png";
                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                            robertoImage.src = "../images/FarWest/bar/roberto_jubilacion.png";
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                javiImage.src = "../images/FarWest/bar/rosa/javi_rosa.png";
                                                                                                                                                                                robertoImage.src = "../images/FarWest/bar/roberto.png";
                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                    javiImage.style.transition = "right 10s ease";
                                                                                                                                                                                    javiImage.style.right = "-100%"; 
                                                                                                                                                                                    javiImage.style.opacity = "0";
                                                                                                                                                                                    robertoImage.style.transition = "right 11s ease";
                                                                                                                                                                                    robertoImage.style.right = "-100%";
                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                        caballoVolador.style.transition = "opacity 2s ease";
                                                                                                                                                                                        caballoVolador.style.opacity = "0";
                                                                                                                                                                                        const retireButton = document.createElement("button");
                                                                                                                                                                                        retireButton.textContent = "Jubilarse";
                                                                                                                                                                                        retireButton.style.position = "absolute";
                                                                                                                                                                                        retireButton.style.top = "50%";
                                                                                                                                                                                        retireButton.style.color = "red";
                                                                                                                                                                                        retireButton.style.left = "50%";
                                                                                                                                                                                        retireButton.style.transform = "translate(-50%, -50%)";
                                                                                                                                                                                        retireButton.style.padding = "10px 20px";
                                                                                                                                                                                        retireButton.style.fontSize = "16px";
                                                                                                                                                                                        retireButton.style.cursor = "pointer";
                                                                                                                                                                                        retireButton.addEventListener("click", () => {
                                                                                                                                                                                            window.location.href = "../html/jubilarse.html";
                                                                                                                                                                                        });
                                                                                                                                                                                        document.body.appendChild(retireButton);
                                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                                            leftImage.style.transition = "left 4s";
                                                                                                                                                                                            leftImage.style.left = "-100%";
                                                                                                                                                                                            rightImage.style.transition = "right 4s";
                                                                                                                                                                                            rightImage.style.right = "-100%";
                                                                                                                                                                                        }, 2000);
                                                                                                                                                                                    }, 2000);
                                                                                                                                                                                }, 4000);
                                                                                                                                                                            }, 4000);
                                                                                                                                                                        }, 4000);
                                                                                                                                                                    }, 4000);
                                                                                                                                                                }, 4000);
                                                                                                                                                            }, 4000);
                                                                                                                                                        }, 4000);
                                                                                                                                                    }, 4000);
                                                                                                                                                }, 4000);
                                                                                                                                            }, 4000);
                                                                                                                                        }, 4000); 
                                                                                                                                    }, 4000);
                                                                                                                                }, 4000);
                                                                                                                            }, 4000);
                                                                                                                        }, 4000);
                                                                                                                    }, 4000);
                                                                                                                }, 4000);
                                                                                                            }, 4000);
                                                                                                        }, 4000);
                                                                                                    }, 4000);
                                                                                            }
                                                                                            newOptions.style.display = "none";
                                                                                        });
                                                                                    }, 2000);
                                                                                }, 2000);
                                                                            }, 2000);
                                                                        }, 4000);
                                                                    }, 4000);
                                                                }, 4000);
                                                            }, 4000);
                                                        }, 4000);
                                                    }, 4000);
                                                }, 4000);
                                            }, 4000);
                                        }, 4000);
                                    }, 5000);
                                }, 4000);
                            }, 4000);
                        }, 4000);
                    }, 4000);
                }, 2000);
            }, 10000);
        }
        options.style.display = "none";
    });

    nada.addEventListener("click", function () {
        options.style.display = "none";
    });

    backgroundMusic.play();
});
