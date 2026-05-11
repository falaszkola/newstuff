const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors & CARTO',
  maxZoom: 19
}).addTo(map);

// ====== KROPKI (MIASTA) ======

cities.forEach(city => {
  const marker = L.circleMarker(city.coords, {
    radius: 6,
    color: "black",
    fillColor: "white",
    fillOpacity: 1
  }).addTo(map);

  marker.on("click", () => {
    document.getElementById("info").innerHTML = `
      <h3>${city.name}</h3>
      <p>${city.country}</p>
      <img src="${city.img}" width="100%" />
    `;
  });
});

// ====== KABLE ======

cables.forEach(cable => {
  const line = L.polyline(cable.path, {
    color: cable.color,
    weight: 6
  }).addTo(map);

  line.on("click", () => {
    document.getElementById("info").innerHTML = `
      <h3>${cable.name}</h3>
      <p><b>Skąd:</b> ${cable.from}</p>
      <p><b>Dokąd:</b> ${cable.to}</p>
      <p><b>Długość:</b> ${cable.length} km</p>
      <p><b>Przepustowość:</b> ${cable.capacity}</p>
    `;
  });
});