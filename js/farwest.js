window.addEventListener('load', () => {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.2;
    backgroundMusic.play();

    const javiVaqueroRosa = document.querySelector('.javi-vaquerorosa');
    const javiVaqueroMarron = document.querySelector('.javi-vaqueromarron');

    setTimeout(() => {
        document.querySelector('.background-image.left').style.left = '0';
        document.querySelector('.background-image.right').style.right = '0';
    }, 3000);

    setTimeout(() => {
        const javiWalking = document.querySelector('.javi-walking');
        javiWalking.style.left = '45%';
        javiWalking.style.opacity = '1';
    }, 8000);

    setTimeout(() => {
        const javiWalking = document.querySelector('.javi-walking');
        javiWalking.src = '../images/FarWest/javi_oeste.png';
    }, 15000);

    setTimeout(() => {
        const plantaRodante = document.querySelector('.planta-rodante');
        plantaRodante.style.left = '110%';
        plantaRodante.style.opacity = '1';
    }, 16000);

    setTimeout(() => {
        const javiWalking = document.querySelector('.javi-walking');
        javiWalking.src = '../images/FarWest/javi_oeste_caminando.png';
    }, 24000);

    setTimeout(() => {
        const alejandroWalking = document.querySelector('.alejandro-walking');
        alejandroWalking.style.right = '21%';
        alejandroWalking.style.opacity = '1';
    }, 25000);

    setTimeout(() => {
        const caballo = document.querySelector('.caballo');
        caballo.style.right = '3%';
        caballo.style.opacity = '1';
    }, 26000);

    setTimeout(() => {
        const caballo = document.querySelector('.caballo');
        caballo.src = '../images/FarWest/caballo_gritando.png';
        const caballoSonido = new Audio('../images/FarWest/caballo_sonido.mp3'); // Add sound
        caballoSonido.play();
    }, 32000);

    setTimeout(() => {
        const alejandroWalking = document.querySelector('.alejandro-walking');
        alejandroWalking.style.opacity = '0';
        const alejandroPoliciaCharlando = document.querySelector('.alejandro-policiacharlando');
        alejandroPoliciaCharlando.style.opacity = '1';
    }, 35000);

    setTimeout(() => {
        const caballo = document.querySelector('.caballo');
        caballo.src = '../images/FarWest/caballo.png';
    }, 37000);

    setTimeout(() => {
        const javiWalking = document.querySelector('.javi-walking');
        javiWalking.src = '../images/FarWest/javi_charla1.png';
    }, 39000);

    setTimeout(() => {
        const alejandroPoliciaCharlando = document.querySelector('.alejandro-policiacharlando');
        alejandroPoliciaCharlando.src = '../images/FarWest/alejandro_charla1.png';
    }, 41000);

    setTimeout(() => {
        const javiWalking = document.querySelector('.javi-walking');
        javiWalking.src = '../images/FarWest/javi_charla2.png';
    }, 42000);

    setTimeout(() => {
        const option1 = document.getElementById('option1');
        const option2 = document.getElementById('option2');
        const javiWalking = document.querySelector('.javi-walking');
        option1.style.opacity = '1';
        option2.style.opacity = '1';
        javiWalking.classList.add('pulse-animation');

        option1.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', 'option1');
        });

        option2.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', 'option2');
        });

        javiWalking.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        javiWalking.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text/plain');
            let color;

            if (data === 'option1') {
                javiWalking.style.opacity = '0';
                javiVaqueroMarron.style.opacity = '1';
                color = 'marron';
            } else if (data === 'option2') {
                javiWalking.style.opacity = '0';
                javiVaqueroRosa.style.opacity = '1';
                color = 'rosa';
            }

            if (color) {
                javiWalking.dataset.color = color;
            }

            const draggedElement = document.getElementById(data);
            javiWalking.appendChild(draggedElement);
            draggedElement.style.position = 'static';
            draggedElement.style.cursor = 'default';
            option1.style.animation = 'moveDownAndHide 2s forwards';
            option2.style.animation = 'moveDownAndHide 2s forwards';
            javiWalking.classList.remove('pulse-animation');

            setTimeout(() => {
                const alejandroPoliciaCharlando = document.querySelector('.alejandro-policiacharlando');
                alejandroPoliciaCharlando.src = '../images/FarWest/alejandro_charla2.png';

                setTimeout(() => {
                    if (color === 'marron') {
                        javiVaqueroMarron.style.opacity = '0';
                    } else if (color === 'rosa') {
                        javiVaqueroRosa.style.opacity = '0';
                    }

                    const javiColor = javiWalking.dataset.color;
                    if (javiColor) {
                        const newSrc = `../images/FarWest/javi_charla2_${javiColor}.png`;
                        javiWalking.src = newSrc;
                        javiWalking.style.opacity = '1';
                    }
                }, 1000);
            }, 2000);

            setTimeout(() => {
                const caballo = document.querySelector('.caballo');
                caballo.src = '../images/FarWest/caballo_gritando.png';
                const caballoSonido = new Audio('../images/FarWest/caballo_sonido.mp3');
                caballoSonido.play();

                setTimeout(() => {
                    caballo.src = '../images/FarWest/caballo_yendose.png';
                    caballo.style.right = '-50%';

                    setTimeout(() => {
                        const alejandroWalking = document.querySelector('.alejandro-policiacharlando');
                        alejandroWalking.src = '../images/FarWest/alejandro_caminando.png';
                        setTimeout(() => {
                            alejandroWalking.style.right = '-50%';
                            setTimeout(() => {
                                const javiWalking = document.querySelector('.javi-walking');
                                const color = javiWalking.dataset.color;
                                if (color === 'rosa') {
                                    javiWalking.src = '../images/FarWest/javi_vaquero_caminando_rosa.png';
                                } else if (color === 'marron') {
                                    javiWalking.src = '../images/FarWest/javi_vaquero_caminando_marron.png';
                                }
                                javiWalking.style.opacity = '0';
                                setTimeout(() => {
                                    document.querySelector('.background-image.left').style.left = '-100%';
                                    document.querySelector('.background-image.right').style.right = '-100%';
                                    setTimeout(() => {
                                        const javiWalking = document.querySelector('.javi-walking');
                                        const color = javiWalking.dataset.color;
                                        if (color === 'rosa') {
                                            window.location.href = 'bar_rosa.html';
                                        } else if (color === 'marron') {
                                            window.location.href = 'bar_marron.html';
                                        }
                                    }, 2000);
                                }, 2000);
                            }, 5000);

                        }, 2000);

                    }, 5000);
                }, 3000);

            }, 37000);

        });
    }, 48000);
});
