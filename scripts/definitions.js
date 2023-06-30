const provinceCoordinates = {
    'coruña': { x: 84, y: 43 },
    'pontevedra': { x: 85, y: 93 },
    'lugo': { x: 127, y: 60 },
    'ourense': { x: 124, y: 106 },
    'asturias': { x: 192, y: 44 },
    'cantabria': { x: 262, y: 51 },
    //'gipuzkoa': { x: 341, y: 58 },
    'Bizkaia': { x: 314, y: 51 }, //más o menos queda en la parte central
    //'alava': { x: 321, y: 72 },
    'navarra': { x: 358, y: 78 },
    'zaragoza': { x: 384, y: 142 },
    'huesca': { x: 432, y: 112 },
    'lleida': { x: 472, y: 116 },
    'barcelona': { x:517 , y: 138 },
    'girona': { x: 545, y: 105 },
    'tarragona': { x: 466, y: 166 },
    'castellon': { x: 432, y: 220 },
    'teruel': { x: 396, y: 197 },
    'cuenca': { x: 335, y: 234 },
    'albacete': { x: 344, y: 301 },
    'valencia': { x: 406, y: 268 },
    'leon': { x: 188, y: 83 },
    'zamora': { x: 189, y: 136 },
    'salamanca': { x: 179, y: 183 },
    'valladolid': { x: 229, y: 142 }, 
    'palencia': { x: 245, y: 103 }, 
    'burgos': { x: 286, y: 103 }, //
    'segovia': { x: 262, y: 167 },
    'soria': { x: 325, y: 140 },
    'avila': { x: 224, y: 200 },
    'rioja': { x: 328, y: 103 }, //
    'guadalajara': { x: 322, y: 184 },
    'madrid': { x: 276, y: 202 },
    'caceres': { x: 170, y: 242 },
    'badajoz': { x: 168, y: 304 },
    'toledo': { x: 257, y: 238 },
    'ciudad real': { x: 269, y: 293 },
    'jaen': { x: 284, y: 340 },
    'cordoba': { x: 230, y: 343 },
    'sevilla': { x: 183, y: 366 },
    'huelva': { x: 139, y: 365 },
    'cadiz': { x: 184, y: 425 },
    'malaga': { x: 228, y: 403 },
    'granada': { x: 289, y: 386 },
    'almeria': { x: 344, y: 385 },
    'murcia': { x: 376, y: 345 },
    'alicante': { x: 416, y: 315 },
    //islas
    'ibiza': { x: 496, y: 285 },
    'formentera': { x: 504, y: 301 },
    'Palma de Mallorca': { x: 560, y: 245 }, // majorca
    'Mahón': { x: 612, y: 222 }, //menorca
    //canarias
    'hierro': { x: 400, y: 497 },
    'palma': { x: 408, y: 444 },
    'San Sebastián de la Gomera': { x: 440, y: 478 },//gomera
    'Santa Cruz de Tenerife': { x: 479, y: 468 }, //tenerife
    'Las Palmas de Gran Canaria': { x: 523, y: 486 }, //(gran canaria)
    'Puerto del Rosario': { x: 592, y: 465 },//fuerteventura no funcionan con la api, pongo la capital
    'Arrecife': { x: 611, y: 429 }, //lanzarote no funcionan con la api, pongo la capital
  //  'Caleta del Sebo': { x: 619, y: 409 },//graciosa
    //
    'ceuta': { x:206 , y:461  },
    'melilla': { x:315 , y: 487 },
  };
//https://www.iso.org/obp/ui/#iso:code:3166:ES
const climates = {
    'Thunderstorm': "tormenta.png",
    'Rain': "lluvia.png",
    'Drizzle': "lluvia2.png", //Llovizna
    'Clouds': "nuboso.png",
    'Mist': "mist.png", //niebla
    'Snow': "nieve.png",
    'nieve2': "nieve2.png",
    'Frio': "frio.png",
    'Helado': "helado.png",
    'clear': "sol.png",
    'calor': "calor.png",
    'calor2': "calor2.png",
    'calor3': "calor3.png",
    'sol2': "sol2.png",
    'noimage': "noimage.png",
   
};