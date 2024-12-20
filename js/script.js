function startGame() {
    const centeredText = document.querySelector('.centered-text');
    const footer = document.querySelector('.footer-guapo');
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.2;
    
    centeredText.style.transition = 'opacity 2s ease';
    centeredText.style.opacity = '0';
    footer.style.transition = 'opacity 2s ease';
    footer.style.opacity = '0';
    
    const fadeOutMusic = setInterval(() => {
        if (backgroundMusic.volume > 0.01) {
            backgroundMusic.volume -= 0.01;
        } else {
            backgroundMusic.volume = 0;
            backgroundMusic.pause();
            clearInterval(fadeOutMusic);
        }
    }, 200);

    setTimeout(() => {
        centeredText.style.display = 'none';
        footer.style.display = 'none';
        openCurtain();
        moveJaviToTable();
    }, 2000);
}

function openCurtain() {
    const leftHalf = document.querySelector('.left-half');
    const rightHalf = document.querySelector('.right-half');
    const lampLight = document.querySelector('.luz');
    const lightSound = new Audio('../images/luz.mp3'); 
    
    lampLight.style.display = 'none';
    
    leftHalf.style.transition = 'transform 3s ease';
    rightHalf.style.transition = 'transform 3s ease';
    leftHalf.style.transform = 'translateX(-100%)';
    rightHalf.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
        leftHalf.style.display = 'none';
        rightHalf.style.display = 'none';
        lampLight.style.display = 'block'; 
        lightSound.play(); 
    }, 3000);
}

function moveJaviToTable() {
    const javiImage = document.querySelector('.javi-image');
    const tableImage = document.querySelector('.table-image');
    const cafeImage = document.querySelector('.cafe-image');
    const lampLight = document.querySelector('.luz');
    
    javiImage.style.transition = 'transform 8s linear';
    javiImage.style.transform = 'translateX(60vw)';
    
    setTimeout(() => {
        cafeImage.style.display = 'flex';
        javiImage.src = '../images/javi_charla.png';
        cafeImage.classList.add('animate-size');
        enableDragAndDrop();
    }, 8000);

    setTimeout(() => {
        tableImage.src = '../images/mesa.png';
        lampLight.style.display = 'block'; 
    }, 10000);
}

function enableDragAndDrop() {
    const cafeImage = document.querySelector('.cafe-image');
    const drinkSound = new Audio('../images/beber_cafe.mp3');
    cafeImage.draggable = true;
    cafeImage.classList.add('animate-size');

    cafeImage.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    const javiImage = document.querySelector('.javi-image');
    javiImage.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    javiImage.addEventListener('drop', (event) => {
        event.preventDefault();
        const cafeImage = document.querySelector('.cafe-image');
        cafeImage.style.display = 'none';
        javiImage.src = '../images/javi_con_cafe.png';
        drinkSound.play();
        setTimeout(() => {
            javiImage.src = '../images/javi_camino_a_butaca.png';
            cafeImage.draggable = false; 
            moveJaviToChair();
        }, 2000);
    });
}

function moveJaviToChair() {
    const javiImage = document.querySelector('.javi-image');
    const javiSentadoContainer = document.querySelector('.javi-sentado-container');
    const javiSentado = document.querySelector('.javi-sentado');
    const javiSentadoCharla1 = document.querySelector('.javi-sentado-charla1');
    const javiSentadoCharla2 = document.querySelector('.javi-sentado-charla2');
    const cafe2Container = document.querySelector('.cafe2-container');
    const chairImage = document.querySelector('.chair-image');
    javiImage.style.transition = 'transform 8s linear';
    javiImage.style.transform = 'translateX(10vw)';

    javiImage.addEventListener('transitionend', () => {
        javiImage.style.display = 'none';
        javiSentadoContainer.style.display = 'block';
        javiSentado.style.width = '100%';
        javiSentado.style.display = 'block';
        chairImage.style.display = 'none';
        setTimeout(() => {
            javiSentado.style.display = 'none';
            javiSentadoCharla1.style.width = '100%';
            javiSentadoCharla1.style.display = 'block';
            cafe2Container.style.display = 'block';
            setTimeout(() => {
                javiSentadoCharla1.style.display = 'none';
                javiSentadoCharla2.style.display = 'block';
                throwCafeOut();
                setTimeout(() => {
                    dropVolador();
                }, 3000);
            }, 5000);
        }, 3000);
    }, { once: true });
}

function throwCafeOut() {
    const cafe2Container = document.querySelector('.cafe2-container');
    cafe2Container.style.transition = 'transform 8s ease';
    cafe2Container.style.transform = 'translateX(10vw)';

    setTimeout(() => {
        cafe2Container.style.transition = 'transform 4s ease';
        cafe2Container.style.transform += ' translateY(15vh)';
    }, 8000); // Move down after moving horizontally
}

function dropVolador() {
    const voladorContainer = document.querySelector('.volador-container');
    voladorContainer.style.display = 'block';
    setTimeout(() => {
        voladorContainer.style.top = '50%';
        setTimeout(() => {
            voladorContainer.style.display = 'none';
            const javiSentadoCharla2 = document.querySelector('.javi-sentado-charla2');
            const javiSentadoCharla3 = document.querySelector('.javi-sentado-charla3');
            const javiSentadoCharla4 = document.querySelector('.javi-sentado-charla4');
            const nuveImage = document.querySelector('.nuve-image');
            const barrenderoImage = document.querySelector('.barrendero-image');
            javiSentadoCharla2.style.display = 'none';
            javiSentadoCharla3.style.display = 'block';
            setTimeout(() => {
                javiSentadoCharla3.style.display = 'none';
                javiSentadoCharla4.style.display = 'block';
                setTimeout(() => {
                    nuveImage.style.display = 'block';
                    setTimeout(() => {
                        nuveImage.style.display = 'none';
                        barrenderoImage.style.display = 'block';
                        javiSentadoCharla4.src = '../images/javi_sentado_porro.png';
                        moveBarrendero();
                    }, 4000);
                }, 4000);
            }, 3000);
        }, 6000); 
    }, 100); 
}

function moveBarrendero() {
    const barrenderoContainer = document.querySelector('.barrendero-container');
    const barrenderoImage = document.querySelector('.barrendero-image');
    const cafe2Container = document.querySelector('.cafe2-container');
    const javiSentadoCharla4 = document.querySelector('.javi-sentado-charla4');
    const broomSound = new Audio('../images/escoba.mp3');

    barrenderoContainer.style.transition = 'transform 8s linear';
    barrenderoContainer.style.transform = 'translateX(20vw)';

    barrenderoContainer.addEventListener('transitionend', () => {
        broomSound.play();
        barrenderoImage.src = '../images/barrendero_con_cafe.png';
        cafe2Container.style.display = 'none';
        setTimeout(() => {
            barrenderoImage.src = '../images/barrendero_charla1.png';
            setTimeout(() => {
                broomSound.play();
                barrenderoImage.src = '../images/barrendero_con_cafe.png';
                barrenderoContainer.style.transition = 'transform 8s linear';
                barrenderoContainer.style.transform = 'translateX(140vw)';
                barrenderoContainer.addEventListener('transitionend', () => {
                    javiSentadoCharla4.src = '../images/javi_sentado_charla5.png';
                    setTimeout(() => {
                        const bocadillo = document.querySelector('.bocadillo-redondo');
                        const choicesContainer = document.querySelector('.choices-container');
                        bocadillo.style.display = 'block';
                        choicesContainer.style.display = 'block';
                        javiSentadoCharla4.src = '../images/javi_sentado_porro.png';
                        enableDragAndDropForChoices();
                    }, 6000);
                }, { once: true });
            }, 5000); 
        }, 4000); 
    }, { once: true });
}

function enableDragAndDropForChoices() {
    const choices = document.querySelectorAll('.choice');
    const inputField = document.querySelector('.bocadillo-redondo input');
    const confirmButton = document.querySelector('.confirm-button');

    choices.forEach(choice => {
        choice.draggable = true;

        choice.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.textContent);
        });
    });

    inputField.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    inputField.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        inputField.value = data;
    });

    confirmButton.addEventListener('click', () => {
        const tableContainer = document.querySelector('.table-container');
        const bocadillo = document.querySelector('.bocadillo-redondo');
        const choicesContainer = document.querySelector('.choices-container');
        const javiSentadoCharla4 = document.querySelector('.javi-sentado-charla4');
        const chairImage = document.querySelector('.chair-image');
        const javiDepiePorro = document.createElement('img');
        const lamp = document.querySelector('.lampara');
        const lampLight = document.querySelector('.luz');
        const lightSound = new Audio('../images/luz.mp3');
        const inputField = document.querySelector('.bocadillo-redondo input');
        javiDepiePorro.src = '../images/javi_depie_porro.png';
        javiDepiePorro.classList.add('javi-depie-porro');
        document.body.appendChild(javiDepiePorro);

        choicesContainer.style.transition = 'transform 2s ease, opacity 2s ease';
        choicesContainer.style.transform = 'translateY(100vh)';
        choicesContainer.style.opacity = '0';

        setTimeout(() => {
            choicesContainer.style.display = 'none';
            bocadillo.style.transition = 'transform 2s ease, opacity 2s ease';
            bocadillo.style.transform = 'translateX(-100vw)';
            bocadillo.style.opacity = '0';

            tableContainer.style.transition = 'transform 2s ease, opacity 2s ease';
            tableContainer.style.transform = 'translateX(100vw)';
            tableContainer.style.opacity = '0';

            setTimeout(() => {
                bocadillo.style.display = 'none';
                tableContainer.style.display = 'none';
                javiSentadoCharla4.style.display = 'none';
                chairImage.style.display = 'block';
                javiDepiePorro.style.display = 'block';

                setTimeout(() => {
                    chairImage.style.transition = 'transform 2s ease';
                    chairImage.style.transform = 'translateX(-100vw)';

                    setTimeout(() => {
                        javiDepiePorro.src = '../images/javi_depie_porro.png';

                        setTimeout(() => {
                            javiDepiePorro.style.transition = 'transform 5s ease'; 
                            javiDepiePorro.style.transform = 'translateX(100vw)';

                            setTimeout(() => {
                                lampLight.style.transition = 'opacity 2s ease';
                                lampLight.style.opacity = '0';
                                lightSound.play();

                                setTimeout(() => {
                                    lamp.style.transition = 'transform 2s ease';
                                    lamp.style.transform = 'translateY(-100vh)';

                                    setTimeout(() => {
                                        const choice = inputField.value.toLowerCase();
                                        if (choice === 'hotel') {
                                            window.location.href = 'hotel.html';
                                        } else if (choice === 'far west') {
                                            window.location.href = 'farwest.html';
                                        } else {
                                            window.location.href = 'sorpresa.html';
                                        }
                                    }, 2000);
                                }, 2000);
                            }, 5000); 
                        }, 3000); 
                    }, 2000); 
                }, 3000); 
            }, 2000);
        }, 2000);
    });
}

function clearInput() {
    document.querySelector('.bocadillo-redondo input').value = '';
}

let encendidas = [true];
let luces = document.querySelectorAll(".luz");

