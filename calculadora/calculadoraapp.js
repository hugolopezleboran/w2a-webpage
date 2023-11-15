window.onload = iniciar

let inputObjetos = document.getElementById('selectItem');
//inputObjetos.addEventListener('click', (e) => {
 //   alert("Los objetos no están disponibles, estamos trabajando en ellos, gracias por la paciencia")
//
//})
async function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton)
    
    
    //Campeones
    const lista_campeones = [
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "AurelionSol",
    "Azir",
    "Bard",
    "Belveth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Briar",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Chogath",
    "Corki",
    "Darius",
    "Diana",
    "Draven",
    "DrMundo",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "JarvanIV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kaisa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Khazix",
    "Kindred",
    "Kled",
    "KogMaw",
    "KSante",
    "Leblanc",
    "LeeSin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "MasterYi",
    "Milio",
    "MissFortune",
    "Mordekaiser",
    "Morgana",
    "Naafiri",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "RekSai",
    "Rell",
    "Renata",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "TahmKench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "TwistedFate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Velkoz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Wukong",
    "Xayah",
    "Xerath",
    "XinZhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra",
    ];
        const selectPersonaje = document.getElementById("selectPersonaje");

    for (let posicion in lista_campeones) {
        const campeon = lista_campeones[posicion]

        const opcionCampeon = document.createElement("option");
        if (campeon === "Wukong") {
            opcionCampeon.value = "MonkeyKing"
            opcionCampeon.text = campeon;
        } else {
            opcionCampeon.value = campeon;
            opcionCampeon.text = campeon;
        }
        selectPersonaje.appendChild(opcionCampeon);
    }
    //Niveles version 1
    // const lista_nivel = [
     //    "Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5", "Nivel 6", "Nivel 7",
     //    "Nivel 8", "Nivel 9", "Nivel 10", "Nivel 11", "Nivel 12", "Nivel 13", "Nivel 14", "Nivel 15", 
    //     "Nivel 16", "Nivel 17", "Nivel 18"
     //];
     //const selectNivel = document.getElementById("selectNivel");
    
     //for (let position in lista_nivel) {
    //     const nivel = lista_nivel[position];

     //    const opcionNivel = document.createElement("option");
     //    opcionNivel.value = position;
    //     opcionNivel.text = nivel;
//
     //    selectNivel.appendChild(opcionNivel);
     //}
    //Niveles version 2
    const selectNivel = document.getElementById("selectNivel");

    for (let i = 0 ; i < 18 ; i++ ) {
        let option = document.createElement("option");
        option.value = i
        option.text = "Nivel " + (i + 1)
        selectNivel.appendChild(option)
    }

    

    let urlItems = `https://ddragon.leagueoflegends.com/cdn/13.21.1/data/es_ES/item.json`
    let json = await cargarUrl(urlItems)

    delete(json.data)["3901"]
    delete(json.data)["3902"]
    delete(json.data)["3903"]
    delete(json.data)["1104"]
    

   /* const selectItem = document.getElementById("selectItem");
    for (let item in json.data) {
        let option = document.createElement("option")
        option.value = item
        option.text = json.data[item].name
        selectItem.appendChild(option)
}*/


    const itemsArray = Object.values(json.data);
    const selectItem = document.getElementById("selectItem");

    for (let item of itemsArray) {
        let option = document.createElement("option");
        option.value = item;
        option.text = item.name
        
        //console.log(item.stats)
        selectItem.appendChild(option)
    }
    
    
    
async function cargarUrl(url) {
    let response = await fetch(url);
    return response.json();
}
    async function cargarUrl(urlItems) {
        let response = await fetch(urlItems);
        return response.json();
}

async function clickBoton() {
    let nivel = document.getElementById('selectNivel').value
    let personaje = document.getElementById('selectPersonaje').value
    let items = document.getElementById('selectItem').value
    
    let urlPersonajes = `https://ddragon.leagueoflegends.com/cdn/13.19.1/data/es_ES/champion/${personaje}.json`
    let jsonPersonajes = await cargarUrl(urlPersonajes)

    let estadisticas = jsonPersonajes.data[personaje].stats

    //let urlItems = `https://ddragon.leagueoflegends.com/cdn/13.21.1/data/es_ES/item/${items}.json`
    //let jsonItems = await cargarUrl(urlItems)

    
    //let estadisticasObjetos = jsonItems.data[items]
    //console.log(estadisticasObjetos)

    


    
    
    //let estadisticas1 = itemsArray[items].stats
    

    

    //let estadisticas1 = jsonItems.data[items].stats
    //console.log(urlItems)

    
    document.getElementById('hp').innerHTML = Math.round(estadisticas.hp+(estadisticas.hpperlevel*nivel))//+estadisticasObjetos.FlatMPPoolMod
    document.getElementById('hpperlevel').innerHTML = Math.round(estadisticas.hpperlevel)
    document.getElementById('mp').innerHTML = Math.round(estadisticas.mp+(estadisticas.mpperlevel*nivel))
    document.getElementById('mpperlevel').innerHTML = Math.round(estadisticas.mpperlevel)
    document.getElementById('movespeed').innerHTML = Math.round(estadisticas.movespeed)
    document.getElementById('armor').innerHTML = estadisticas.armor+(estadisticas.armorperlevel*nivel)
    document.getElementById('armorperlevel').innerHTML = estadisticas.armorperlevel
    document.getElementById('spellblock').innerHTML = estadisticas.spellblock+(estadisticas.spellblockperlevel*nivel)
    document.getElementById('spellblockperlevel').innerHTML = estadisticas.spellblockperlevel
    document.getElementById('hpregen').innerHTML = estadisticas.hpregen+(estadisticas.hpregen*nivel)
    document.getElementById('hpregenperlevel').innerHTML = estadisticas.hpregenperlevel
    document.getElementById('attackrange').innerHTML = Math.round(estadisticas.attackrange)
    document.getElementById('mpregen').innerHTML = estadisticas.mpregenperlevel+(estadisticas.mpregenperlevel*nivel)
    document.getElementById('mpregenperlevel').innerHTML = estadisticas.mpregenperlevel
    document.getElementById('crit').innerHTML = Math.round(estadisticas.crit)
    document.getElementById('critperlevel').innerHTML = Math.round(estadisticas.critperlevel)
    document.getElementById('attackdamage').innerHTML = estadisticas.attackdamage+(estadisticas.attackdamageperlevel*nivel)
    document.getElementById('attackdamageperlevel').innerHTML = estadisticas.attackdamageperlevel
    document.getElementById('attackspeedperlevel').innerHTML = estadisticas.attackspeedperlevel
    document.getElementById('attackspeed').innerHTML = estadisticas.attackspeed+estadisticas.attackspeed*estadisticas.attackspeedperlevel/100*nivel
}






}

