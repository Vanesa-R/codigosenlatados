// 4. LOCATION

// Propiedades interesantes:
location.href; // Devuelve la URL completa de la página. Indicando una url podemos redirigir a esa página
location.hash; // Devuelve el contenido de la URL después del signo #
location.host; // Devuelve el nombre del servidor
location.protocol; // Devuelve el protocolo empleado por la URL
location.pathname; // Devuelve el contenido que se encuentra después del host
location.origin; // Devuelve el progocolo, hostname y número de puerto de la URL

// Métodos
location.reload(); // Recarga la página
location.assign(); // Carga una nueva página, igual que con location.href
location.replace(); // Similar a assing, pero elimina la página actual del array history del navegador
