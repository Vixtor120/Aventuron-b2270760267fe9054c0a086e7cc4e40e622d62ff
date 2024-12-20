document.addEventListener("DOMContentLoaded", function() {
    const playaIzquierda = document.getElementById("playa_izquierda");
    const playaDerecha = document.getElementById("playa_derecha");
    const olasMar = document.getElementById("olas_mar");
    const hamacaIzquierda = document.getElementById("hamaca_izquierda");
    const hamacaDerecha = document.getElementById("hamaca_derecha");
    const robertoJubilado = document.getElementById("roberto_jubilado");
    const javiJubilado = document.getElementById("javi_jubilado");

    playaIzquierda.style.position = "absolute";
    playaIzquierda.style.left = "-50%";
    playaIzquierda.style.width = "50%";
    playaIzquierda.style.height = "100%";
    playaIzquierda.style.transition = "left 2s";

    playaDerecha.style.position = "absolute";
    playaDerecha.style.right = "-50%";
    playaDerecha.style.width = "50%";
    playaDerecha.style.height = "100%";
    playaDerecha.style.transition = "right 2s";

    hamacaIzquierda.style.position = "absolute";
    hamacaIzquierda.style.right = "-25%";
    hamacaIzquierda.style.bottom = "5%";
    hamacaIzquierda.style.width = "8%";
    hamacaIzquierda.style.opacity = "0";
    hamacaIzquierda.style.transition = "right 4s, opacity 2s";

    hamacaDerecha.style.position = "absolute";
    hamacaDerecha.style.right = "-25%";
    hamacaDerecha.style.bottom = "5%";
    hamacaDerecha.style.width = "8%";
    hamacaDerecha.style.opacity = "0";
    hamacaDerecha.style.transition = "right 4s, opacity 2s";

    robertoJubilado.style.position = "absolute";
    robertoJubilado.style.right = "-25%";
    robertoJubilado.style.bottom = "5%";
    robertoJubilado.style.width = "10%";
    robertoJubilado.style.opacity = "0";
    robertoJubilado.style.transition = "right 6s, opacity 2s";

    javiJubilado.style.position = "absolute";
    javiJubilado.style.right = "-25%";
    javiJubilado.style.bottom = "5%";
    javiJubilado.style.width = "7%";
    javiJubilado.style.opacity = "0";
    javiJubilado.style.transition = "right 6s, opacity 2s";

    setTimeout(() => {
        playaIzquierda.style.left = "0";
        playaDerecha.style.right = "0";
        olasMar.play();
    }, 100);

    setTimeout(() => {
        hamacaIzquierda.style.right = "35%";
        hamacaIzquierda.style.opacity = "1";
        hamacaDerecha.style.right = "25%";
        hamacaDerecha.style.opacity = "1";
    }, 2100);

    setTimeout(() => {
        robertoJubilado.style.right = "55%";
        robertoJubilado.style.opacity = "1";
        javiJubilado.style.right = "45%";
        javiJubilado.style.opacity = "1";
    }, 4200);

    setTimeout(() => {
        javiJubilado.src = "../images/paraiso/javi_jubilado.png";
    }, 6200);

    setTimeout(() => {
        robertoJubilado.src = "../images/paraiso/roberto_jubilado.png";
    }, 6200);

    setTimeout(() => {
        javiJubilado.src = "../images/paraiso/javi_jubilado_charla1.png";
        javiJubilado.style.width = "12%";
    }, 8200);

    setTimeout(() => {
        robertoJubilado.src = "../images/paraiso/roberto_jubilado_charla1.png";
        robertoJubilado.style.width = "14%";
    }, 10200);

    setTimeout(() => {
        const finImage = document.createElement("img");
        finImage.src = "../images/paraiso/fin.png";
        finImage.style.position = "absolute";
        finImage.style.top = "10%";
        finImage.style.left = "50%";
        finImage.style.transform = "translateX(-50%)";
        finImage.style.width = "20%";
        finImage.style.opacity = "0";
        finImage.style.transition = "opacity 2s ease";
        document.body.appendChild(finImage);

        setTimeout(() => {
            finImage.style.opacity = "1";
        }, 100);

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
            returnButton.style.backgroundColor = "red";
            returnButton.style.color = "white";
            returnButton.addEventListener("click", () => {
                window.location.href = "../html/index.html";
            });
            document.body.appendChild(returnButton);
        }, 4000);
    }, 12200);
});
