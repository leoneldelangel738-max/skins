const defaultSkins = [
    {
        name: "Default 01",
        image: "images/sora/default/D01.png"
    }
];


const customSkins = [
    {
        name: "Skin 01",
        image: "images/sora/custom/01.png"
    },
    {
        name: "Skin 02",
        image: "images/sora/custom/02.png"
    },
    {
        name: "Skin 03",
        image: "images/sora/custom/03.png"
    }
];


function mostrarSkins(lista, contenedor) {

    lista.forEach(skin => {

        const card = document.createElement("div");

        card.classList.add("skin-card");


        const nombre = document.createElement("div");

        nombre.classList.add("skin-name");

        nombre.textContent = skin.name;


        const imagen = document.createElement("img");

        imagen.src = skin.image;

        imagen.alt = skin.name;


        card.appendChild(nombre);

        card.appendChild(imagen);


        card.addEventListener("click", function () {

            mostrarPreview(
                skin.image,
                skin.name
            );

        });


        contenedor.appendChild(card);

    });

}


function mostrarPreview(imagen, nombre) {

    const previewImage =
        document.getElementById("previewImage");

    const previewText =
        document.getElementById("previewText");


    previewImage.src = imagen;

    previewImage.alt = nombre;

    previewImage.style.display = "block";

    previewText.style.display = "none";

}


const defaultContainer =
    document.getElementById("defaultSkins");

const customContainer =
    document.getElementById("customSkins");


mostrarSkins(defaultSkins, defaultContainer);

mostrarSkins(customSkins, customContainer);
