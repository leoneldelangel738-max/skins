document.addEventListener("DOMContentLoaded", function () {

    const defaultSkins = [
        {
            name: "Default 01",
            image: "./images/sora/default/D01.png"
        }
    ];

    const customSkins = [
        {
            name: "Skin 01",
            image: "./images/sora/custom/01.png"
        },
        {
            name: "Skin 02",
            image: "./images/sora/custom/02.png"
        },
        {
            name: "Skin 03",
            image: "./images/sora/custom/03.png"
        }
    ];


    function crearSkin(skin) {

        const card = document.createElement("div");
        card.className = "skin-card";

        const nombre = document.createElement("div");
        nombre.className = "skin-name";
        nombre.textContent = skin.name;

        const imagen = document.createElement("img");
        imagen.src = skin.image;
        imagen.alt = skin.name;

        card.appendChild(nombre);
        card.appendChild(imagen);

        card.addEventListener("click", function () {

            const previewImage =
                document.getElementById("previewImage");

            const previewText =
                document.getElementById("previewText");

            previewImage.src = skin.image;
            previewImage.alt = skin.name;

            previewImage.style.display = "block";
            previewText.style.display = "none";

        });

        return card;
    }


    const defaultContainer =
        document.getElementById("defaultSkins");

    const customContainer =
        document.getElementById("customSkins");


    defaultSkins.forEach(function (skin) {

        defaultContainer.appendChild(
            crearSkin(skin)
        );

    });


    customSkins.forEach(function (skin) {

        customContainer.appendChild(
            crearSkin(skin)
        );

    });

});
