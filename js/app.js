const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    // console.log(data);
    banderillas(data);
    formularioCliente(data);
    filtros(data);
  } catch (error) {
    console.log(error);
  }
};

const banderillas = (data) => {
  let elementos = "";
  data.forEach((item) => {
    elementos += `
        <article class="card">
            <img src="${item.flags.png}" alt="bandera" class="img-fluid">
            <div class="card-content">
                <h3>${item.name.common}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
                <button class="btn my-1">                
                    <a href="pais.html?name=${item.name.common}">Detail</a>
                </button>
            </div>
        </article>
        `;
  });
  banderas.innerHTML = elementos;
};
