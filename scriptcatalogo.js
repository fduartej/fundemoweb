let catalogoData = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("catalogo.json");
    const catalogoData = await response.json();
    mostrarCatalogo(catalogoData);
  } catch (error) {
    console.error("Error cargando el catálogo:", error);
  }
});

function mostrarCatalogo(catalogoData) {
  const catalogoGrid = document.querySelector(".catalog-grid");
  catalogoGrid.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    catalogoData.forEach((catalogo) => {
      const catalogoItem = document.createElement("div");
      catalogoItem.className = "catalogo-item";

      catalogoItem.style.cursor = "pointer";
      catalogoItem.setAttribute("data-catalogo-id", catalogo.id);

      catalogoItem.innerHTML = `
      <img src="${catalogo.image}" alt="${catalogo.name}" />
      <div class="movie-info">
        <h3>${catalogo.name}</h3>
        <p>${catalogo.price}</p>
      </div>
    `;

      catalogoGrid.appendChild(catalogoItem);
    });
  }
}
