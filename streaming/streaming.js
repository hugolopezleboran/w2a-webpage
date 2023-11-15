const botonAzul = document.getElementById('btn-azul')

botonAzul.addEventListener('click', (e) => {

    const json = {
        "config":{
           },
        "origin":"web",
        "status":null,
        "type":"CREATE",
        "user":"latra"
    }

    let valoresEquipoAzul = [];
    const valoresEquipoRojo = [];

    const inputRojoEquipo = document.getElementById('input-red-equipo').value;
    const inputRojoTop = document.getElementById('input-red-top').value;
    const inputRojoJungla = document.getElementById('input-red-jungla').value;
    const inputRojoMid = document.getElementById('input-red-mid').value;
    const inputRojoAdc = document.getElementById('input-red-adc').value;
    const inputRojoSuport = document.getElementById('input-red-suport').value;
    const inputAzulEquipo = document.getElementById('input-blue-equipo').value;
    const inputAzulTop = document.getElementById('input-blue-top').value;
    const inputAzulJungla = document.getElementById('input-blue-jungla').value;
    const inputAzulMid = document.getElementById('input-blue-mid').value;
    const inputAzulAdc = document.getElementById('input-blue-adc').value;
    const inputAzulSuport = document.getElementById('input-blue-suport').value;
    const inputLogoAzul = document.getElementById('input-blue-logo').value;
    const inputLogoRojo = document.getElementById('input-red-logo').value;
    const nombreTorneo = document.getElementById('input-nombre-torneo').value;
    const logoTorneo = document.getElementById('input-logo-torneo').value;
    const dawe = document.getElementById('input-dawe').value;

    valoresEquipoRojo.push(`"${inputRojoTop}"`)
    valoresEquipoRojo.push(`"${inputRojoJungla}"`)
    valoresEquipoRojo.push(`"${inputRojoMid}"`)
    valoresEquipoRojo.push(`"${inputRojoAdc}"`)
    valoresEquipoRojo.push(`"${inputRojoSuport}"`)
       
    valoresEquipoAzul.push(`"${inputAzulTop}"`)
    valoresEquipoAzul.push(`"${inputAzulJungla}"`)
    valoresEquipoAzul.push(`"${inputAzulMid}"`)
    valoresEquipoAzul.push(`"${inputAzulAdc}"`)
    valoresEquipoAzul.push(`"${inputAzulSuport}"`)

    json.config["blue_team_name"] = inputAzulEquipo
    json.config["red_team_name"] = inputRojoEquipo
    json.config["blue_team_players"] = valoresEquipoAzul
    json.config["red_team_players"] = valoresEquipoRojo
    json.config["blue_team_logo"] = inputLogoAzul;
    json.config["red_team_logo"] = inputLogoRojo;
    json.config["tournament_name"] = nombreTorneo;
    json.config["tournament_logo"] = logoTorneo;
    json.config["dawe_id"] = dawe;
    json["dawe_id"] = dawe;

    console.log(json)
    
    const url = 'http://unaip:8080/api/game/create';

   const requestOptions = {
    method: 'POST',
     headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify(json),
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(json => {
    console.log('Respuesta de la API:', json);
  })
  .catch(error => {
     console.error('Error en la solicitud:', error);
  });    
})
















