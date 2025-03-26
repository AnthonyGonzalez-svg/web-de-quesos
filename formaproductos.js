function mostrarDetalles(producto) {
    const detalles = {
      producto1: {
        titulo: 'Producto 1',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'queso1.jpg'
      },
      producto2: {
        titulo: 'Producto 2',
        descripcion: 'Producto 2 es sinónimo de innovación y elegancia, perfecto para quienes buscan lo mejor en rendimiento y estilo.',
        imagen: 'quesoaji.jpeg'
      },
      producto3: {
        titulo: 'Producto 3',
        descripcion: 'El Producto 3 destaca por su tecnología de punta y un diseño vanguardista que marca tendencia.',
        imagen: 'quesoamasado.jpeg'
      }
      producto4: {
        titulo: 'Producto 4',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'quesoandino.jpeg'
      },
      producto5: {
        titulo: 'Producto 5',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'quesohoja.jpeg'
      },
      producto6: {
        titulo: 'Producto 6',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'quesomozzarella.jpeg' 
      },
      producto7: {
        titulo: 'Producto 7',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'quesopasto.jpeg'
      },
      producto8: {
        titulo: 'Producto 8',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'queso1.jpg'
      },
      producto9: {
        titulo: 'Producto 9',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'queso1.jpg'
      },
      producto10: {
        titulo: 'Producto 10',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'queso1.jpg'
      },
      producto11: {
        titulo: 'Producto 11',
        descripcion: 'Este es un análisis detallado del Producto 1. Su diseño, calidad y funcionalidad lo hacen único en el mercado.',
        imagen: 'queso1.jpg'
      },
    };
  
    const modal = document.getElementById("modal");
    const detallesProducto = document.getElementById("detallesProducto");
    const info = detalles[producto];
  
    detallesProducto.innerHTML = `
      <h2>${info.titulo}</h2>
      <img src="${info.imagen}" alt="${info.titulo}">
      <p>${info.descripcion}</p>
    `;
    
    modal.style.display = "flex";
  }
  
  function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Cerrar el modal al hacer click fuera del contenido del modal
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      cerrarModal();
    }
  }
  