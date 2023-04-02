//categories 

const questions = [
    {
        type: "france",
        question: "Which of these Bordeaux estates is NOT a 'First Growth'?",
        answers: [
            {
                answer: "Montrose",
                correct: true,
            },
            {
                answer: "Lafite Rotschild",
                correct: false,
            },
            {
                answer: "Haut Brion",
                correct: false,
            },
            {
                answer: "Latour",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "How many wine regions Hungary has?",
        answers: [
            {
                answer: "22",
                correct: true,
            },
            {
                answer: "15",
                correct: false,
            },
            {
                answer: "9",
                correct: false,
            },
            {
                answer: "27",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "Which Chateau has a second wine known as 'Le Petit Lion'?",
        answers: [
            {
                answer: "Leoville-Poyferre",
                correct: false,
            },
            {
                answer: "Domaine De Chevalier",
                correct: false,
            },
            {
                answer: "Leoville-Las-Cases",
                correct: true,
            },
            {
                answer: "Chateau Cheval Blanc",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "Which were the two estates that were upgraded to Premier Grand Cru Classe A status in the St-Emilion classification in 2012?",
        answers: [
            {
                answer: "Pavie and Angelus",
                correct: true,
            },
            {
                answer: "Angelus and Ausone",
                correct: false,
            },
            {
                answer: "Pavie and Cheval Blanc",
                correct: false,
            },
            {
                answer: "Angelus and Canon",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "Where is the wine region of Trentino?",
        answers: [
            {
                answer: "Trentino-Alto Adige",
                correct: true,
            },
            {
                answer: "Veneto",
                correct: false,
            },
            {
                answer: "Friuli-Venezia-Giula",
                correct: false,
            },
            {
                answer: "Piedmont",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "True or false? in Saint-Joseph, Syrah must be used excusively for wine production.",
        answers: [
            {
                answer: "False",
                correct: true,
            },
            {
                answer: "True",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "The most common grape for Cognac and Armagnac is...",
        answers: [
            {
                answer: "Ugni Blanc",
                correct: true,
            },
            {
                answer: "Colombard",
                correct: false,
            },
            {
                answer: "Folle Blanche",
                correct: false,
            },
            {
                answer: "Chenin Blanc",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "Where is Fixin located?",
        answers: [
            {
                answer: "Burgundy",
                correct: true,
            },
            {
                answer: "Bordeaux",
                correct: false,
            },
            {
                answer: "South West France",
                correct: false,
            },
            {
                answer: "Provance",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "What Burgundy Classification does the following Appellation have: 'Romanée Conti (Cote de Nuits)'",
        answers: [
            {
                answer: "Grand Cru",
                correct: true,
            },
            {
                answer: "Regional",
                correct: false,
            },
            {
                answer: "Village",
                correct: false,
            },
            {
                answer: "Village & Premier Cru",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "Where in France is the following located: 'Chateau Pape-Clement'",
        answers: [
            {
                answer: "Pessac-Leognan",
                correct: true,
            },
            {
                answer: "Saint-Estephe",
                correct: false,
            },
            {
                answer: "Saint Emilion",
                correct: false,
            },
            {
                answer: "Margaux",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "Which is the correct sort on these Port Wine Regions from west to east?",
        answers: [
            {
                answer: "Baixo Corgo, Cima Corgo, Douro Superior",
                correct: true,
            },
            {
                answer: "Cima Corgo, Baixo Corgo, Douro Superior",
                correct: false,
            },
            {
                answer: "Douro Superior, Baixo Corgo, Cima Corgo",
                correct: false,
            },
            {
                answer: "Baixo Corgo, Douro Superior, Cima Corgo",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "All of the following French appellations are in Bordeaux region expect for one - which is the odd one out?",
        answers: [
            {
                answer: "Volnay Santenots",
                correct: true,
            },
            {
                answer: "Graves",
                correct: false,
            },
            {
                answer: "Cremant de Bordeaux",
                correct: false,
            },
            {
                answer: "Pomerol",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "Which grape variety used for Gavi DOCG production?",
        answers: [
            {
                answer: "Cortese",
                correct: true,
            },
            {
                answer: "Nebbiolo",
                correct: false,
            },
            {
                answer: "Trebbiano",
                correct: false,
            },
            {
                answer: "Nerello Mascalese",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "Which grape variety used for Chianti DOC production?",
        answers: [
            {
                answer: "Sangiovese",
                correct: true,
            },
            {
                answer: "Barbera",
                correct: false,
            },
            {
                answer: "Malvasia",
                correct: false,
            },
            {
                answer: "Verdicchio",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "Which is the most widely planted black grape in California?",
        answers: [
            {
                answer: "Cabernet Sauvignon",
                correct: true,
            },
            {
                answer: "Syrah",
                correct: false,
            },
            {
                answer: "Merlot",
                correct: false,
            },
            {
                answer: "Zinfandel",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "What is the most widely planted white grape in California?",
        answers: [
            {
                answer: "Chardonnay",
                correct: true,
            },
            {
                answer: "Sauvignon Blanc",
                correct: false,
            },
            {
                answer: "Riesling",
                correct: false,
            },
            {
                answer: "Pinot Noir",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "What is the name of the mountain that seperates Oregon and Washington?",
        answers: [
            {
                answer: "Cascade Mountains",
                correct: true,
            },
            {
                answer: "Rocky Mountains",
                correct: false,
            },
            {
                answer: "Massif Central",
                correct: false,
            },
            {
                answer: "Coast Ranges",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "Which AVA shared between Napa and Sonoma Valley?",
        answers: [
            {
                answer: "Los Carneros",
                correct: true,
            },
            {
                answer: "Howell Mountain",
                correct: false,
            },
            {
                answer: "Mount Veeder",
                correct: false,
            },
            {
                answer: "St. Helena",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "Opus One is a joint venture between __ and __.",
        answers: [
            {
                answer: "Robert Mondavi and Baron Philippe de Rotschild",
                correct: true,
            },
            {
                answer: "Robert Mondavi and Paul Champoux",
                correct: false,
            },
            {
                answer: "Charles Krug and Baron Philippe de Rotschild",
                correct: false,
            },
            {
                answer: "Andre Lurton and Paul Champoux",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "True or false? Screaming eagle is made of 100% cabernet sauvignon.",
        answers: [
            {
                answer: "True",
                correct: true,
            },
            {
                answer: "False",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "On the following AVAs, which is the largest?",
        answers: [
            {
                answer: "Willamette Valley, Oregon",
                correct: false,
            },
            {
                answer: "Napa Valley, California",
                correct: false,
            },
            {
                answer: "North Fork of Long Island, New York",
                correct: true,
            },
            {
                answer: "Snake River Valley, Idaho and Oregon",
                correct: false,
            }
        ]
    },
    {
        type: "usa",
        question: "At the 2000s Auction Napa Valley, a 6 litre Imperial bottle of 1992 Screaming Eagle was sold for how much?",
        answers: [
            {
                answer: "$500.000",
                correct: true,
            },
            {
                answer: "$100.000",
                correct: false,
            },
            {
                answer: "$1.000.000",
                correct: false,
            },
            {
                answer: "$10.000",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: " If you were in the Italian Veneto region, drinking a local, strong, full-bodied Italian red wine, which of these Italian products might it be?",
        answers: [
            {
                answer: "Amarone",
                correct: true,
            },
            {
                answer: "Amaretto",
                correct: false,
            },
            {
                answer: "Amari",
                correct: false,
            },
            {
                answer: "Amatriciana",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "Northeastern Italy is home to many a white wine. Which of these is a sparkling white wine produced there?",
        answers: [
            {
                answer: "Prosecco",
                correct: true,
            },
            {
                answer: "Prodi",
                correct: false,
            },
            {
                answer: "Primitivo",
                correct: false,
            },
            {
                answer: "Profiterole",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "What is the grape variety they use in Prosecco production?",
        answers: [
            {
                answer: "Glera",
                correct: true,
            },
            {
                answer: "Cortese",
                correct: false,
            },
            {
                answer: "Chardonnay",
                correct: false,
            },
            {
                answer: "Pinot Noir",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "Which animal is on the crest of Chianti Classico?",
        answers: [
            {
                answer: "Black Rooster",
                correct: true,
            },
            {
                answer: "Red Boar",
                correct: false,
            },
            {
                answer: "Golden Goose",
                correct: false,
            },
            {
                answer: "White Horse",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "Where is Bolgheri DOC can be found?",
        answers: [
            {
                answer: "Tuscany",
                correct: true,
            },
            {
                answer: "Lazio",
                correct: false,
            },
            {
                answer: "Marche",
                correct: false,
            },
            {
                answer: "Umbria",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "What is Aglianico?",
        answers: [
            {
                answer: "Red grape variety",
                correct: true,
            },
            {
                answer: "The programmer of this app :)",
                correct: true,
            },
            {
                answer: "Winery in Barolo",
                correct: false,
            },
            {
                answer: "White grape variety",
                correct: false,
            }
        ]
    },
    {
        type: "italy",
        question: "What does Vin Santo means?",
        answers: [
            {
                answer: "Holy Wine",
                correct: true,
            },
            {
                answer: "Holy drink",
                correct: false,
            },
            {
                answer: "Catholic Wine",
                correct: false,
            },
            {
                answer: "Sacrament of Eucharist",
                correct: false,
            }
        ]
    },
    {
        type: "france",
        question: "True or false? Bandol wines are based on Mourvedre.",
        answers: [
            {
                answer: "True",
                correct: true,
            },
            {
                answer: "False",
                correct: false,
            },
        ]
    },
    {
        type: "usa",
        question: "True or false? Lodi is famous for its chardonnay production.",
        answers: [
            {
                answer: "False",
                correct: true,
            },
            {
                answer: "True",
                correct: false,
            },
        ]
    },
    {
        type: "usa",
        question: "Finger Lakes AVA is famous for __ grape.",
        answers: [
            {
                answer: "Riesling",
                correct: true,
            },
            {
                answer: "Chardonnay",
                correct: false,
            },
            {
                answer: "Syrah",
                correct: false,
            },
            {
                answer: "Furmint",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "During the Ottoman occupation of Hungary, __ fortified the defenders of castle Eger in 1552.",
        answers: [
            {
                answer: "Bull's Blood",
                correct: true,
            },
            {
                answer: "Beer",
                correct: false,
            },
            {
                answer: "Apple Juice",
                correct: false,
            },
            {
                answer: "Chicken Liver",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "True or false? In a 1571 document mentioned, Louis XIV of France christened Tokaji Aszu as 'Vinum Regum, Rex Vinorum'.",
        answers: [
            {
                answer: "True",
                correct: true,
            },
            {
                answer: "False",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "Port, one of Portugal's most famed exports, is made in which area?",
        answers: [
            {
                answer: "Douro",
                correct: true,
            },
            {
                answer: "Duero",
                correct: false,
            },
            {
                answer: "Baga",
                correct: false,
            },
            {
                answer: "Alentejo",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "Sercial, Verdelho, Bual and Malvasia are all grape varieties used in production of __.",
        answers: [
            {
                answer: "Madeira",
                correct: true,
            },
            {
                answer: "Port",
                correct: false,
            },
            {
                answer: "Sherry",
                correct: false,
            },
            {
                answer: "Moscatel de Setubal",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "What is the difference between ruby and tawny port?",
        answers: [
            {
                answer: "Ruby is younger, sweeter and fruitier, tawny aged in longer in wooden barrels",
                correct: true,
            },
            {
                answer: "Different grape varieties",
                correct: false,
            },
            {
                answer: "Tawny is younger, sweeter and fruitier, Ruby aged in longer in wooden barrels",
                correct: false,
            },
            {
                answer: "Nothing",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "Where port production is based?",
        answers: [
            {
                answer: "Douro",
                correct: true,
            },
            {
                answer: "Duero",
                correct: false,
            },
            {
                answer: "Baga",
                correct: false,
            },
            {
                answer: "Alentejo",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "The climate in portugal is __.",
        answers: [
            {
                answer: "Maritime",
                correct: true,
            },
            {
                answer: "Continental",
                correct: false,
            },
            {
                answer: "Tropical",
                correct: false,
            },
        ]
    },
    {
        type: "portugal",
        question: "Where is vino verde located?",
        answers: [
            {
                answer: "Northeast Portugal",
                correct: true,
            },
            {
                answer: "East Portugal",
                correct: false,
            },
            {
                answer: "South Portugal",
                correct: false,
            },
            {
                answer: "Central Portugal",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "Which are vinho verde's grape varieties?",
        answers: [
            {
                answer: "All of the above",
                correct: true,
            },
            {
                answer: "Arinto",
                correct: false,
            },
            {
                answer: "Loureiro",
                correct: false,
            },
            {
                answer: "Alvarinho",
                correct: false,
            }
        ]
    },
    {
        type: "portugal",
        question: "Colheita port is a __.",
        answers: [
            {
                answer: "single-vintage tawny port",
                correct: true,
            },
            {
                answer: "single-vintage ruby port",
                correct: false,
            },
        ]
    },
    {
        type: "portugal",
        question: "True or false? Rose port is a very decent variation of the market.",
        answers: [
            {
                answer: "True",
                correct: true,
            },
            {
                answer: "False",
                correct: false,
            },

        ]
    },
    {
        type: "hungary",
        question: "Badacsony is famous for its unique __ soil type.",
        answers: [
            {
                answer: "volcanic",
                correct: true,
            },
            {
                answer: "clay",
                correct: false,
            },
            {
                answer: "slate",
                correct: false,
            },
            {
                answer: "terra rossa",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "Which is the largest wine region in Hungary?",
        answers: [
            {
                answer: "Kunsag",
                correct: true,
            },
            {
                answer: "Hajos-Baja",
                correct: false,
            },
            {
                answer: "Tokaj",
                correct: false,
            },
            {
                answer: "Szekszard",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "Which of these regions can produce Bull's Blood?",
        answers: [
            {
                answer: "Szekszard",
                correct: true,
            },
            {
                answer: "Sopron",
                correct: false,
            },
            {
                answer: "Etyek",
                correct: false,
            },
            {
                answer: "Zala",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "True or false? Olaszrizling(Welschriesling) is related to the Rhine Riesling.",
        answers: [
            {
                answer: "False",
                correct: true,
            },
            {
                answer: "True",
                correct: false,
            },
        ]
    },
    {
        type: "hungary",
        question: "__ grape varieties are officially approved for Tokaji wine production.",
        answers: [
            {
                answer: "6",
                correct: true,
            },
            {
                answer: "3",
                correct: false,
            },
            {
                answer: "5",
                correct: false,
            },
            {
                answer: "1",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "Szamorodni can be made in __ styles.",
        answers: [
            {
                answer: "Dry and sweet",
                correct: true,
            },
            {
                answer: "Dry",
                correct: false,
            },
            {
                answer: "Fortified",
                correct: false,
            },
            {
                answer: "Dry and fortified",
                correct: false,
            }
        ]
    },
    {
        type: "hungary",
        question: "What is the cask name used in aszu production?",
        answers: [
            {
                answer: "Gönc",
                correct: true,
            },
            {
                answer: "Barrique",
                correct: false,
            },  
        ]
    },
    
];

let shuffle = array => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

shuffle(questions);

for (let question of questions) {
    shuffle(question.answers)
}

export default questions;