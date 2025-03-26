function mostrarSucursal(sucursal) {
    const informacion = {
        sucursal1: {
            titulo: "Sucursal1 - Saraguro",
            descripcion: "La primera sucrusal de nuestra empresa esta ubicada en la via sarguro loja en el 5 km aqui ademas se ubica la fabrica de nuestros quesos donde puedes ver la produccion en serie de los mismos ofrecemos desayunos, cafe, chocolate entre muchas mas cosas para degustar",
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2802.1509410328417!2d-78.47001136471053!3d-0.10765378486888863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cca9afd93abe27%3A0x3cec56f6c0a247b8!2sQuesos%20Saraguros!5e0!3m2!1ses!2sec!4v1742911606890!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        sucursal2: {
            titulo: "Sucursal2 - El cajas",
            descripcion: "Esta sucursal esta ubiucada estrategicamente en una via que lleva a Molleturo asi que si usted regresa a Guayaquil por esta via ya tine una parada obligatoria en nuestra sucursal, donde encutras todos los tipos de quesos de nuestra empresa a eso le sumamos las ricas humitas, los tamales, desayunos contientales, pizzas y mucho mas.",
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9729827682067!2d-79.14413172448523!3d-2.824015339241488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd3dd69c323e47%3A0x72e10de7f106b4ac!2sQuesos%20Saraguros%20Cajas!5e0!3m2!1ses!2sec!4v1742912140652!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        sucursal3: {
            titulo: "Sucursal3 - Cuenca1",
            descripcion: "Esta sucursal esta ubicada en el centro de Cuenca para que si usted visita Cuenca tine una parada obligatoria en nuestra sucursal, donde encutras todos los tipos de quesos de nuestra empresa a eso le sumamos las ricas humitas, los tamales, desayunos contientales, pizzas y mucho mas.",
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.6220751505444!2d-79.00324321844343!3d-2.8982541745190096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd192c4bc814d9%3A0x6d81c020d587a6c7!2sQUESOS%20SARAGUROS%20(CUENCA)!5e0!3m2!1ses!2sec!4v1742912972341!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        sucursal4: {
            titulo: "Sucursal3 - Cuenca2",
            descripcion: "Esta sucursal esta ubicada en el centro de Cuenca para que si usted visita Cuenca tine una parada obligatoria en nuestra sucursal, donde encuentras todos los tipos de quesos de nuestra empresa a eso le sumamos las ricas humitas, los tamales, desayunos contientales, pizzas y mucho mas.",
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992.3534764540475!2d-79.00687861057222!3d-2.9005208825544404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd19f49b4731f9%3A0x7bd005fb2f599722!2sQuesos%20Saraguros%20Benigno%20Malo!5e0!3m2!1ses!2sec!4v1742913210726!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        sucursal5: {
            titulo: "Sucursal3 - Tarqui",
            descripcion: "Nuestra sucursale en tarqui es una de las mas concurridas ya que esta serca de las union de las via cuanca-giron-pasaje esto quiere decir que si regresas de cuenca y olvidaste comprar tu queso en Cuenca lo puedes comprar aqui donde encuentras todos los tipos de quesos de nuestra empresa a eso le sumamos las ricas humitas, los tamales, desayunos contientales, pizzas y mucho mas.",
            mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0144943069463!2d-79.08454022448319!3d-3.0908001402622367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ccdf8c84c6b5bd%3A0x41c367b4897ad45c!2sQuesos%20Saraguros-Tarqui!5e0!3m2!1ses!2sec!4v1742913373543!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
    };

    const infoDiv = document.getElementById("informacionSucursal");
    infoDiv.innerHTML = `
        <h2>${informacion[sucursal].titulo}</h2>
        <p>${informacion[sucursal].descripcion}</p>
        ${informacion[sucursal].mapa}
    `;
}
