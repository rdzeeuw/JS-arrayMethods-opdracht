const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];

// deel 1 ----------------------------------------------------------------

const names = superheroes.map(superheroes => superheroes.name);


// console.log(names);


// deel 2 ----------------------------------------------------------------

const lightWeightHeroes = superheroes.filter(
    superheroes => superheroes.weight < 190);
//console.log(lightWeightHeroes);


// deel 3 ----------------------------------------------------------------

const lightWeightNames = superheroes.filter(
    superheroes => superheroes.weight === '200').map(superheroes => superheroes.name);
//console.log(lightWeightNames);


// deel 4 ----------------------------------------------------------------

const firstAppearance = superheroes.map(superheroes => superheroes.first_appearance);
//console.log(firstAppearance);


// deel 5 ----------------------------------------------------------------

const dcComics = superheroes.filter(superheroes => superheroes.publisher === "DC Comics");
//console.log(dcComics);

const marvel = superheroes.filter(superheroes => superheroes.publisher === "Marvel Comics");
//console.log(marvel);


// deel 6 ----------------------------------------------------------------

const dcComicsTotalWeight = dcComics.map(superheroes => parseInt(superheroes.weight))
.reduce((accumulator, currentValue) => accumulator + currentValue);

   //console.log(dcComicsTotalWeight);

// deel 7 ----------------------------------------------------------------

const marvelTotalWeight = marvel.filter(superheroes => superheroes.weight !== 'unknown')
    .map(superheroes => parseInt(superheroes.weight))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

   //console.log(marvelTotalWeight);

// deel 8 ----------------------------------------------------------------

const heaviestHero = superheroes.filter(superheroes => superheroes.weight !== 'unknown')
.map(superheroes => parseInt(superheroes.weight));


console.log(heaviestHero);