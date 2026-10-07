/*
  ITEM CATALOG for Twenty Questions Duel
  ======================================
  To add an item, copy one { ... } block inside a category and change it:

    { name: "Display name", wiki: "Exact Wikipedia title (optional)", year: 1999, tags: ["rock"], hints: [
        "Hint 1: extremely vague",
        "Hint 2: vague",
        "Hint 3: moderate",
        "Hint 4: specific",
        "Hint 5: near giveaway"
    ] },

  Filter fields (see FILTERS at the bottom of this file):
    year: 1999          release year, or founding year for Brands & Companies.
                        Needed for Movies, Songs, TV Shows, Video Games, Anime, Brands & Companies.
    tags: ["rock"]      one or more keys from each of the category's tag groups.

  Rules for good hints:
  - Exactly 5 hints, going from very vague to almost a giveaway.
  - Never use any word from the item's name, and never name the category.
  - "wiki" is only needed when the name alone could land on the wrong
    Wikipedia page (for example "Titanic (1997 film)").

  To add a whole new category, add a new key like  Sports: [ ... ],
  It shows up in the game automatically. Keep at least 2 items per category.
*/
window.CATALOG = {

  Celebrities: [
    { name: "Taylor Swift", tags: ["music"], hints: [
      "This person is a woman who became famous as a teenager.",
      "She is an American known mainly for music.",
      "She started out in country music before switching to pop.",
      "Her tour celebrating each 'era' of her career became the highest-grossing tour ever.",
      "She re-recorded her old albums and released them as '(___'s Version)'."
    ] },
    { name: "Beyoncé", tags: ["music"], hints: [
      "This person is a woman famous for performing on stage.",
      "She is an American singer who first got famous in a girl group in the late 1990s.",
      "She was the lead singer of Destiny's Child.",
      "Her best-known work includes the visual album 'Lemonade' and the song 'Single Ladies'.",
      "She is married to Jay-Z and released the country album 'Cowboy Carter'."
    ] },
    { name: "Oprah Winfrey", tags: ["acting"], hints: [
      "This person is an American woman known to millions through TV.",
      "She became one of the most famous talk show hosts in the world.",
      "Her daytime talk show ran for 25 seasons, from 1986 to 2011.",
      "She once gave every member of her studio audience a free car.",
      "She runs the OWN network, and her book club can turn any book into a bestseller."
    ] },
    { name: "Tom Hanks", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is an actor known for warm, everyman roles.",
      "He won back-to-back Best Actor Oscars in the 1990s.",
      "He was stranded on an island with a volleyball named Wilson in 'Cast Away'.",
      "He played Forrest Gump and voices Woody in 'Toy Story'."
    ] },
    { name: "Michael Jordan", tags: ["sports"], hints: [
      "This person is an American man famous in sports.",
      "He played a team sport professionally in the 1980s and 1990s.",
      "He won six NBA championships.",
      "He played for the Chicago Bulls and wore number 23.",
      "His Nike sneaker line is called 'Air ___'."
    ] },
    { name: "Serena Williams", tags: ["sports"], hints: [
      "This person is an American woman famous in sports.",
      "She dominated an individual sport played with a racket.",
      "She won 23 Grand Slam singles titles.",
      "Her older sister Venus is also a champion in the same sport.",
      "She won the 2017 Australian Open while pregnant."
    ] },
    { name: "Elvis Presley", tags: ["music"], hints: [
      "This person is an American man who died in the 1970s.",
      "He was a hugely famous singer in the 1950s.",
      "He is known as the King of Rock and Roll.",
      "His Memphis home, Graceland, is a major tourist attraction.",
      "His hits include 'Hound Dog' and 'Jailhouse Rock', and his swiveling hips shocked TV audiences."
    ] },
    { name: "Marilyn Monroe", tags: ["acting"], hints: [
      "This person is an American woman who died in the 1960s.",
      "She was a Hollywood movie star of the 1950s.",
      "She was a famous blonde bombshell and sex symbol.",
      "A famous photo shows her white dress billowing up over a subway grate.",
      "She starred in 'Some Like It Hot' and sang a breathy birthday song to President Kennedy."
    ] },
    { name: "Leonardo DiCaprio", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is a movie actor who became a teen heartthrob in the 1990s.",
      "He won his first Oscar for 'The Revenant' after many nominations.",
      "He has made many films with director Martin Scorsese.",
      "He played Jack in 'Titanic' and shouted that he was king of the world at the ship's bow."
    ] },
    { name: "Dwayne Johnson", tags: ["acting", "sports"], hints: [
      "This person is a man famous for performing for huge audiences.",
      "He became famous in pro wrestling before he started acting.",
      "He played college football at the University of Miami.",
      "He voiced the demigod Maui in Disney's 'Moana'.",
      "His wrestling nickname is 'The Rock', and he is known for raising one eyebrow."
    ] },
    { name: "Lady Gaga", tags: ["music"], hints: [
      "This person is an American woman famous for performing on stage.",
      "She is a pop singer famous for outrageous outfits.",
      "She once wore a dress made of raw meat to an awards show.",
      "She won an Oscar for the song 'Shallow' from 'A Star Is Born'.",
      "Her hits include 'Poker Face' and 'Bad Romance'."
    ] },
    { name: "Michael Jackson", tags: ["music"], hints: [
      "This person is an American man who died in the 2000s.",
      "He was a singer who started performing as a child with his brothers.",
      "He is called the King of Pop.",
      "He was famous for the moonwalk and wearing a single sparkly glove.",
      "His album 'Thriller' is the best-selling album of all time."
    ] },
    { name: "Lionel Messi", tags: ["sports"], hints: [
      "This person is a man famous in sports.",
      "He plays the world's most popular team sport and is from South America.",
      "He has won the Ballon d'Or a record eight times.",
      "He spent most of his career at FC Barcelona and now plays in Miami.",
      "He captained Argentina to win the 2022 World Cup."
    ] },
    { name: "Rihanna", tags: ["music"], hints: [
      "This person is a woman famous in entertainment and business.",
      "She is a singer from the Caribbean.",
      "She is from Barbados.",
      "She founded the makeup line Fenty Beauty.",
      "Her hits include 'Umbrella' and 'Diamonds'."
    ] },
    { name: "Keanu Reeves", tags: ["acting"], hints: [
      "This person is a man famous for appearing on screen.",
      "He is an actor raised in Canada, known for action movies.",
      "He is known for being unusually kind and humble in real life.",
      "He plays a retired hitman who seeks revenge after someone kills his dog.",
      "He played Neo in 'The Matrix' and stars as John Wick."
    ] },
    { name: "Simone Biles", tags: ["sports"], hints: [
      "This person is an American woman famous in sports.",
      "She competes in an Olympic sport scored by judges.",
      "She is the most decorated gymnast in history.",
      "Several moves in her sport are officially named after her.",
      "She won the Olympic all-around gold in both 2016 and 2024."
    ] },
    { name: "Usain Bolt", tags: ["sports"], hints: [
      "This person is a man famous in sports.",
      "He is from the Caribbean and competed in the Olympics.",
      "He is from Jamaica.",
      "He holds the world records in both the 100m and 200m sprints.",
      "His victory pose looks like he's firing an arrow into the sky, and he ran 100m in 9.58 seconds."
    ] },
    { name: "Muhammad Ali", tags: ["sports"], hints: [
      "This person is an American man who died in 2016.",
      "He was a famous athlete in a combat sport.",
      "He was a heavyweight boxing champion who called himself 'The Greatest'.",
      "He was born Cassius Clay and refused to be drafted into the Vietnam War.",
      "He said he could float like a butterfly and sting like a bee."
    ] },
    { name: "Dolly Parton", tags: ["music"], hints: [
      "This person is an American woman famous for performing.",
      "She is a country singer from Tennessee.",
      "She has her own theme park in the Smoky Mountains.",
      "Her Imagination Library has given millions of free books to children.",
      "She wrote 'Jolene' and '9 to 5'."
    ] },
    { name: "LeBron James", tags: ["sports"], hints: [
      "This person is an American man famous in sports.",
      "He has played basketball professionally since 2003.",
      "He is the NBA's all-time leading scorer.",
      "He has won championships with Miami, Cleveland, and Los Angeles.",
      "He was drafted straight out of high school in Akron, Ohio, and now plays for the Lakers."
    ] },
    { name: "Ed Sheeran", tags: ["music"], hints: [
      "This person is a man famous for performing.",
      "He's a British singer-songwriter.",
      "He often performs alone on stage with a guitar and a loop pedal.",
      "He has red hair and made a cameo on 'Game of Thrones'.",
      "His hits include 'Shape of You' and 'Perfect'."
    ] },
    { name: "Billie Eilish", tags: ["music"], hints: [
      "This person is a woman who became famous as a teenager.",
      "She's an American singer.",
      "She writes and records her music with her brother Finneas.",
      "She won Oscars for songs from 'No Time to Die' and 'Barbie'.",
      "Her breakout hit was 'bad guy', and she once had green-and-black hair."
    ] },
    { name: "Bruno Mars", tags: ["music"], hints: [
      "This person is a man famous for performing.",
      "He's an American singer from Hawaii.",
      "He has performed at the Super Bowl halftime show twice.",
      "He formed the duo Silk Sonic with Anderson .Paak.",
      "He sang 'Just the Way You Are' and is featured on 'Uptown Funk'."
    ] },
    { name: "Ariana Grande", tags: ["music","acting"], hints: [
      "This person is a woman famous for performing.",
      "She's an American singer and actress.",
      "She first got famous on a Nickelodeon show.",
      "She played Glinda in the 'Wicked' movie.",
      "Her hits include 'thank u, next' and '7 rings', and she's known for a high ponytail."
    ] },
    { name: "Freddie Mercury", tags: ["music"], hints: [
      "This person is a man who died in 1991.",
      "He was a rock singer famous for his huge vocal range.",
      "He was born in Zanzibar and moved to England as a teen.",
      "His band's 1985 Live Aid set is called one of the greatest performances ever.",
      "He was the lead singer of Queen."
    ] },
    { name: "Frank Sinatra", tags: ["music","acting"], hints: [
      "This person is an American man who died in 1998.",
      "He was a singer and actor.",
      "He was nicknamed 'Ol' Blue Eyes'.",
      "He led the Rat Pack in Las Vegas.",
      "He sang 'My Way' and 'New York, New York'."
    ] },
    { name: "Madonna", tags: ["music"], hints: [
      "This person is an American woman famous for performing.",
      "She's a singer who rose to fame in the 1980s.",
      "She's called the Queen of Pop.",
      "She constantly reinvented her image, including a famous cone bra.",
      "Her hits include 'Like a Virgin' and 'Vogue'."
    ] },
    { name: "Drake", wiki: "Drake (musician)", tags: ["music"], hints: [
      "This person is a man famous for performing.",
      "He's a rapper and singer from Canada.",
      "He first got famous acting on the teen drama 'Degrassi'.",
      "He's from Toronto and calls it 'the 6'.",
      "His hits include 'Hotline Bling' and 'God's Plan'."
    ] },
    { name: "Will Smith", tags: ["acting","music"], hints: [
      "This person is an American man who works in entertainment.",
      "He was a rapper before becoming an actor.",
      "He starred in a 1990s sitcom set in a Bel-Air mansion.",
      "He fought aliens in 'Independence Day' and 'Men in Black'.",
      "He won an Oscar for 'King Richard' the same night he slapped Chris Rock."
    ] },
    { name: "Meryl Streep", tags: ["acting"], hints: [
      "This person is an American woman who works in entertainment.",
      "She's a movie actress.",
      "She holds the record for the most Oscar acting nominations.",
      "She played a cruel fashion editor in 'The Devil Wears Prada'.",
      "She sang ABBA songs in 'Mamma Mia!' and played Margaret Thatcher."
    ] },
    { name: "Zendaya", tags: ["acting"], hints: [
      "This person is a woman who became famous as a teenager.",
      "She's an American actress and singer.",
      "She started on the Disney Channel show 'Shake It Up'.",
      "She won two Emmys for playing Rue in 'Euphoria'.",
      "She played MJ in the 'Spider-Man' movies and Chani in 'Dune'."
    ] },
    { name: "Robert Downey Jr.", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He's a movie actor famous for a big career comeback.",
      "He won an Oscar for 'Oppenheimer'.",
      "He played Sherlock Holmes in two films.",
      "He played Tony Stark in the Marvel movies."
    ] },
    { name: "Morgan Freeman", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He's an actor famous for his deep, calm voice.",
      "He narrates documentaries and has played God on screen.",
      "He won an Oscar for 'Million Dollar Baby'.",
      "He played Red in 'The Shawshank Redemption'."
    ] },
    { name: "Jackie Chan", tags: ["acting"], hints: [
      "This person is a man who works in entertainment.",
      "He's an actor from Hong Kong.",
      "He's famous for doing his own dangerous stunts.",
      "His movies mix martial arts with slapstick comedy.",
      "He starred with Chris Tucker in 'Rush Hour'."
    ] },
    { name: "Charlie Chaplin", tags: ["acting"], hints: [
      "This person is a man who died in the 1970s.",
      "He was a movie star from England.",
      "He became famous in silent films.",
      "His film 'The Great Dictator' mocked Adolf Hitler.",
      "His character, the Little Tramp, wore a bowler hat and a toothbrush mustache."
    ] },
    { name: "Tom Brady", tags: ["sports"], hints: [
      "This person is an American man famous in sports.",
      "He played a team sport professionally for 23 seasons.",
      "He won seven Super Bowls, more than any other player.",
      "He played most of his career for the New England Patriots.",
      "He was an NFL quarterback who finished with the Tampa Bay Buccaneers."
    ] },
    { name: "Tiger Woods", tags: ["sports"], hints: [
      "This person is an American man famous in sports.",
      "He plays an individual sport.",
      "He has won 15 major championships.",
      "He famously wears a red shirt on the final day of tournaments.",
      "He's a golfer who won the Masters five times."
    ] },
    { name: "Cristiano Ronaldo", tags: ["sports"], hints: [
      "This person is a man famous in sports.",
      "He plays the world's most popular team sport and is from Europe.",
      "He is from Portugal.",
      "He has played for Manchester United, Real Madrid, and Juventus.",
      "He wears number 7 and celebrates goals with a leap and a loud 'Siuuu!'"
    ] },
    { name: "Wayne Gretzky", tags: ["sports"], hints: [
      "This person is a man famous in sports.",
      "He's from Canada.",
      "He played a team sport on ice.",
      "He held the NHL career goals record for decades and still holds the points record.",
      "He's called 'The Great One' and wore number 99."
    ] },
    { name: "Babe Ruth", tags: ["sports"], hints: [
      "This person is an American man who died in the 1940s.",
      "He was a famous athlete in a team sport.",
      "He started out as a star pitcher before becoming a slugger.",
      "His sale from the Red Sox led to the 'Curse of the Bambino'.",
      "He hit 714 home runs, mostly for the New York Yankees."
    ] }
  ],

  Places: [
    { name: "Eiffel Tower", tags: ["europe", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Europe.",
      "It was built in the late 1800s for a world's fair.",
      "Artists once called it an eyesore, and it was supposed to be temporary.",
      "It's the giant iron landmark of Paris."
    ] },
    { name: "Statue of Liberty", tags: ["north_america", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in North America.",
      "It was a gift from France in the 1880s.",
      "It turned green because its copper skin oxidized.",
      "It holds a torch high on an island in New York Harbor."
    ] },
    { name: "Grand Canyon", tags: ["north_america", "natural"], hints: [
      "It was formed by nature.",
      "It's in the United States.",
      "It was carved over millions of years by a river.",
      "It's in Arizona and is more than a mile deep in places.",
      "The Colorado River winds through the bottom of this huge gorge."
    ] },
    { name: "Great Wall of China", tags: ["asia", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Asia.",
      "It was built over many centuries to keep out invaders.",
      "It stretches for thousands of miles across mountains and deserts.",
      "Sections near Beijing, like Badaling, are packed with tourists, and a myth says you can see it from space."
    ] },
    { name: "Mount Everest", tags: ["asia", "natural"], hints: [
      "It was formed by nature.",
      "It's in Asia.",
      "It sits on the border between Nepal and Tibet.",
      "Edmund Hillary and Tenzing Norgay first reached its top in 1953.",
      "It's the highest point on Earth."
    ] },
    { name: "Taj Mahal", tags: ["asia", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Asia.",
      "It was built in the 1600s as a tomb.",
      "An emperor built it in memory of his beloved wife.",
      "It's a white marble mausoleum in Agra, India."
    ] },
    { name: "Colosseum", tags: ["europe", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Europe and is about 2,000 years old.",
      "It's in Italy.",
      "Gladiators once fought here in front of huge crowds.",
      "It's the giant ancient amphitheater in the center of Rome."
    ] },
    { name: "Machu Picchu", tags: ["south_america", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in South America.",
      "It sits high in the Andes mountains.",
      "It was built by the Inca in the 1400s.",
      "It's a mountaintop citadel in Peru that the outside world learned about in 1911."
    ] },
    { name: "Niagara Falls", tags: ["north_america", "natural"], hints: [
      "It was formed by nature.",
      "It's in North America.",
      "It sits on the border between the US and Canada.",
      "Daredevils have gone over it in barrels.",
      "This huge rush of water lies between Lake Erie and Lake Ontario."
    ] },
    { name: "Sydney Opera House", tags: ["oceania", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in the Southern Hemisphere.",
      "It's in Australia.",
      "Its roof looks like white sails or seashells.",
      "It's a performing arts venue on the harbor, next to the Harbour Bridge."
    ] },
    { name: "Stonehenge", tags: ["europe", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Europe and is thousands of years old.",
      "It's in England.",
      "Nobody knows for sure why it was built, and it lines up with the sun on the solstices.",
      "It's a prehistoric ring of giant standing stones."
    ] },
    { name: "Golden Gate Bridge", tags: ["north_america", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in the United States.",
      "It opened in 1937.",
      "Its official color is called 'International Orange'.",
      "It's the famous suspension span across the entrance to San Francisco Bay."
    ] },
    { name: "Great Pyramid of Giza", tags: ["africa", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Africa.",
      "It's more than 4,500 years old.",
      "It's the only one of the Seven Wonders of the Ancient World still standing.",
      "It was built as a pharaoh's tomb near Cairo, Egypt."
    ] },
    { name: "Venice", tags: ["europe", "city"], hints: [
      "It's a place where people live.",
      "It's in Europe.",
      "It's a city in Italy.",
      "It's built on more than 100 small islands in a lagoon.",
      "People get around by gondola on its canals."
    ] },
    { name: "Las Vegas", tags: ["north_america", "city"], hints: [
      "It's a place where people live.",
      "It's in the United States.",
      "It's a city in the Nevada desert.",
      "Its famous Strip is lined with giant themed hotels.",
      "It's nicknamed Sin City and is famous for casinos."
    ] },
    { name: "Antarctica", tags: ["oceania", "natural"], hints: [
      "It was formed by nature.",
      "It's in the Southern Hemisphere.",
      "Nobody lives there permanently, only visiting researchers.",
      "It holds most of the world's fresh water, frozen as ice.",
      "It's the continent at the South Pole."
    ] },
    { name: "Mount Rushmore", tags: ["north_america", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in the United States.",
      "It's in South Dakota.",
      "It was carved into a granite mountain between 1927 and 1941.",
      "It shows the giant faces of four presidents."
    ] },
    { name: "Big Ben", tags: ["europe", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Europe.",
      "It's in London.",
      "Technically its nickname belongs to the great bell inside, not the tower.",
      "It's the clock tower at the Houses of Parliament."
    ] },
    { name: "Great Barrier Reef", tags: ["oceania", "natural"], hints: [
      "It was formed by nature.",
      "It's in the Southern Hemisphere and is mostly underwater.",
      "It's off the coast of Australia.",
      "It's so large it can be seen from space, and tiny living animals built it.",
      "It's the world's largest coral system, home to clownfish and sea turtles."
    ] },
    { name: "Hollywood Sign", tags: ["north_america", "landmark"], hints: [
      "It was made by people, not nature.",
      "It's in the United States.",
      "It's in Los Angeles.",
      "It started as an ad for a real estate development and originally ended in 'LAND'.",
      "Its giant white letters sit on Mount Lee, overlooking the movie capital."
    ] },
    { name: "Christ the Redeemer", tags: ["south_america","landmark"], hints: [
      "It was made by people, not nature.",
      "It's in South America.",
      "It's in Brazil and was finished in 1931.",
      "It stands on top of Corcovado mountain.",
      "It's a giant statue with open arms overlooking Rio de Janeiro."
    ] },
    { name: "Iguazu Falls", tags: ["south_america","natural"], hints: [
      "It was formed by nature.",
      "It's in South America.",
      "It sits on the border of Argentina and Brazil.",
      "Its most dramatic section is called the Devil's Throat.",
      "It's a huge system of waterfalls, much wider than Niagara."
    ] },
    { name: "Galápagos Islands", tags: ["south_america","natural"], hints: [
      "It was formed by nature.",
      "It's out in the Pacific, belonging to a South American country.",
      "It belongs to Ecuador.",
      "Giant tortoises and marine iguanas live there.",
      "Charles Darwin's visit there helped inspire his theory of evolution."
    ] },
    { name: "Easter Island", tags: ["south_america","landmark"], hints: [
      "It's a place where people live.",
      "It's in the Pacific, belonging to a South American country.",
      "It belongs to Chile and is one of the most remote inhabited places on Earth.",
      "Its native name is Rapa Nui.",
      "It's famous for nearly 1,000 giant stone head statues called moai."
    ] },
    { name: "Victoria Falls", tags: ["africa","natural"], hints: [
      "It was formed by nature.",
      "It's in Africa.",
      "It sits on the border between Zambia and Zimbabwe.",
      "Locals call it 'The Smoke That Thunders'.",
      "It's a massive curtain of water on the Zambezi River."
    ] },
    { name: "Mount Kilimanjaro", tags: ["africa","natural"], hints: [
      "It was formed by nature.",
      "It's in Africa.",
      "It's in Tanzania.",
      "It's a dormant volcano that hikers can climb without ropes.",
      "It's the highest point in Africa, with snow near the equator."
    ] },
    { name: "Sahara", tags: ["africa","natural"], hints: [
      "It was formed by nature.",
      "It's in Africa.",
      "It stretches across about a dozen countries.",
      "Some of its sand dunes are taller than skyscrapers.",
      "It's the largest hot desert in the world."
    ] },
    { name: "Cape Town", tags: ["africa","city"], hints: [
      "It's a place where people live.",
      "It's in Africa.",
      "It's in South Africa.",
      "Nelson Mandela was imprisoned on Robben Island, just offshore.",
      "It sits below flat-topped Table Mountain near Africa's southern tip."
    ] },
    { name: "Tokyo", tags: ["asia","city"], hints: [
      "It's a place where people live.",
      "It's in Asia.",
      "It's the capital of Japan.",
      "Its Shibuya Crossing is one of the busiest intersections in the world.",
      "It's the world's biggest metro area and hosted the 2021 Summer Olympics."
    ] },
    { name: "Dubai", tags: ["asia","city"], hints: [
      "It's a place where people live.",
      "It's in the Middle East.",
      "It's in the United Arab Emirates.",
      "It built man-made islands shaped like palm trees.",
      "It's home to the Burj Khalifa, the world's tallest building."
    ] },
    { name: "Petra", tags: ["asia","landmark"], hints: [
      "It was made by people, not nature.",
      "It's in the Middle East.",
      "It's in Jordan.",
      "It was carved into rose-colored cliffs more than 2,000 years ago.",
      "Its Treasury building appears in 'Indiana Jones and the Last Crusade'."
    ] },
    { name: "Angkor Wat", tags: ["asia","landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Asia.",
      "It's in Cambodia.",
      "It was built in the 1100s and is the largest religious monument in the world.",
      "It's a huge temple complex shown on Cambodia's flag."
    ] },
    { name: "Mount Fuji", tags: ["asia","natural"], hints: [
      "It was formed by nature.",
      "It's in Asia.",
      "It's in Japan.",
      "It's an active volcano that last erupted in 1707.",
      "It's the snow-capped peak seen in countless Japanese prints."
    ] },
    { name: "New York City", tags: ["north_america","city"], hints: [
      "It's a place where people live.",
      "It's in the United States.",
      "It's the most populous place in the US.",
      "It's made up of five boroughs.",
      "It's nicknamed the Big Apple and is home to Times Square."
    ] },
    { name: "Yellowstone National Park", tags: ["north_america","natural"], hints: [
      "It was formed by nature.",
      "It's in the United States.",
      "It became the first protected area of its kind in the world, in 1872.",
      "It sits on top of a supervolcano, mostly in Wyoming.",
      "Its geyser Old Faithful erupts like clockwork."
    ] },
    { name: "London", tags: ["europe","city"], hints: [
      "It's a place where people live.",
      "It's in Europe.",
      "It's the capital of the United Kingdom.",
      "The River Thames runs through it.",
      "It's home to Buckingham Palace, Big Ben, and red double-decker buses."
    ] },
    { name: "Leaning Tower of Pisa", tags: ["europe","landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Europe.",
      "It's in Italy.",
      "It started tilting during construction in the 1100s because of soft ground.",
      "Tourists pose pretending to push this tilted bell structure upright."
    ] },
    { name: "Parthenon", tags: ["europe","landmark"], hints: [
      "It was made by people, not nature.",
      "It's in Europe and is about 2,500 years old.",
      "It's in Greece.",
      "It was built as a temple to the goddess Athena.",
      "It's the columned temple on top of the Acropolis in Athens."
    ] },
    { name: "Uluru", tags: ["oceania","natural"], hints: [
      "It was formed by nature.",
      "It's in the Southern Hemisphere.",
      "It's in the middle of Australia's outback.",
      "It's sacred to local Aboriginal people, and climbing it was banned in 2019.",
      "It's a giant red sandstone rock, once called Ayers Rock, that glows at sunset."
    ] },
    { name: "Hawaii", tags: ["north_america","city"], hints: [
      "It's a place where people live.",
      "It's part of the United States.",
      "It's the only US state made entirely of islands.",
      "Pearl Harbor is there.",
      "It's known for surfing, luaus, volcanoes, and the greeting 'Aloha'."
    ] }
  ],

  Movies: [
    { name: "The Godfather", year: 1972, tags: ["drama"], hints: [
      "It came out before 1980.",
      "It's a crime drama.",
      "It's about a powerful Italian-American family.",
      "Marlon Brando won an Oscar for it, and a horse's head ends up in someone's bed.",
      "Its most famous line is about making someone an offer he can't refuse."
    ] },
    { name: "Titanic", wiki: "Titanic (1997 film)", year: 1997, tags: ["drama"], hints: [
      "It came out in the 1990s.",
      "It's a romance wrapped around a disaster.",
      "It was directed by James Cameron and won 11 Oscars.",
      "Its theme song, 'My Heart Will Go On', was sung by Celine Dion.",
      "Leonardo DiCaprio and Kate Winslet fall in love on a doomed ocean liner."
    ] },
    { name: "Jurassic Park", wiki: "Jurassic Park (film)", year: 1993, tags: ["action"], hints: [
      "It came out in the 1990s.",
      "It's a sci-fi adventure based on a novel.",
      "It was directed by Steven Spielberg.",
      "Scientists bring back extinct creatures using DNA from mosquitoes trapped in amber.",
      "Dinosaurs escape their enclosures on an island attraction."
    ] },
    { name: "Star Wars", wiki: "Star Wars (film)", year: 1977, tags: ["action"], hints: [
      "It came out before 1980.",
      "It's a science fiction adventure.",
      "It was created by George Lucas.",
      "A farm boy joins a rebellion against an evil empire.",
      "It features Luke Skywalker, Darth Vader, and lightsabers."
    ] },
    { name: "The Lion King", wiki: "The Lion King (1994 film)", year: 1994, tags: ["animated"], hints: [
      "It came out in the 1990s.",
      "It's animated.",
      "It's a Disney film set in Africa.",
      "Its songs include 'Hakuna Matata' and 'Circle of Life'.",
      "A young cub named Simba must take back his rightful throne."
    ] },
    { name: "Jaws", wiki: "Jaws (film)", year: 1975, tags: ["action"], hints: [
      "It came out before 1980.",
      "It's a thriller.",
      "It was Steven Spielberg's breakout hit and is called the first summer blockbuster.",
      "It's set in a beach town called Amity Island.",
      "A great white shark terrorizes swimmers, and the crew needs a bigger boat."
    ] },
    { name: "Frozen", wiki: "Frozen (2013 film)", year: 2013, tags: ["animated"], hints: [
      "It came out in the 2010s.",
      "It's animated.",
      "It's a Disney musical about two royal sisters.",
      "It features a talking snowman named Olaf.",
      "Elsa sings 'Let It Go' while building an ice palace."
    ] },
    { name: "Toy Story", year: 1995, tags: ["animated"], hints: [
      "It came out in the 1990s.",
      "It's animated.",
      "It was the first fully computer-animated feature film, made by Pixar.",
      "A cowboy feels replaced by a flashy new space ranger.",
      "Woody and Buzz Lightyear belong to a boy named Andy."
    ] },
    { name: "The Wizard of Oz", wiki: "The Wizard of Oz (1939 film)", year: 1939, tags: ["drama"], hints: [
      "It came out before 1950.",
      "It's a fantasy musical.",
      "It's famous for switching from black-and-white to color.",
      "A girl from Kansas is swept away by a tornado.",
      "Dorothy follows the yellow brick road in ruby slippers."
    ] },
    { name: "The Dark Knight", year: 2008, tags: ["action"], hints: [
      "It came out in the 2000s.",
      "It's a superhero action movie.",
      "It was directed by Christopher Nolan.",
      "Heath Ledger won an Oscar after his death for playing the villain.",
      "Batman faces the Joker in Gotham City."
    ] },
    { name: "Forrest Gump", year: 1994, tags: ["drama", "comedy"], hints: [
      "It came out in the 1990s.",
      "It's a drama with comedy that spans decades of American history.",
      "It won the Oscar for Best Picture and stars Tom Hanks.",
      "The main character runs back and forth across the country for years.",
      "Its famous line compares life to a box of chocolates."
    ] },
    { name: "The Matrix", year: 1999, tags: ["action"], hints: [
      "It came out in the 1990s.",
      "It's a science fiction action movie.",
      "It made 'bullet time' slow-motion effects famous.",
      "The hero must choose between a red pill and a blue pill.",
      "Keanu Reeves plays Neo, who learns reality is a computer simulation."
    ] },
    { name: "Back to the Future", year: 1985, tags: ["comedy", "action"], hints: [
      "It came out in the 1980s.",
      "It's a sci-fi comedy.",
      "It stars Michael J. Fox and was produced by Steven Spielberg.",
      "A teenager accidentally travels to 1955 and meets his parents as teens.",
      "Marty McFly drives a DeLorean time machine that kicks in at 88 miles per hour."
    ] },
    { name: "E.T. the Extra-Terrestrial", year: 1982, tags: ["action"], hints: [
      "It came out in the 1980s.",
      "It's a family sci-fi film.",
      "It was directed by Steven Spielberg.",
      "A boy named Elliott hides a visitor in his house and lures him with Reese's Pieces.",
      "A bike flies across the moon, and the little visitor just wants to phone home."
    ] },
    { name: "Finding Nemo", year: 2003, tags: ["animated"], hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a Pixar film set mostly underwater.",
      "A forgetful blue tang named Dory helps on the journey.",
      "A clownfish dad crosses the ocean to find his missing son."
    ] },
    { name: "Home Alone", year: 1990, tags: ["comedy"], hints: [
      "It came out in the 1990s.",
      "It's a family comedy set at Christmas.",
      "It stars Macaulay Culkin.",
      "Two burglars get hit by booby trap after booby trap.",
      "Kevin's family flies to Paris and accidentally leaves him behind."
    ] },
    { name: "Shrek", year: 2001, tags: ["animated", "comedy"], hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a DreamWorks film that pokes fun at fairy tales.",
      "It features a talking donkey voiced by Eddie Murphy.",
      "A grumpy green ogre rescues Princess Fiona."
    ] },
    { name: "The Shawshank Redemption", year: 1994, tags: ["drama"], hints: [
      "It came out in the 1990s.",
      "It's a drama based on a Stephen King story.",
      "It flopped in theaters but later became one of the most loved films ever.",
      "Morgan Freeman narrates as an inmate named Red.",
      "Andy Dufresne secretly tunnels out of prison after nearly 20 years."
    ] },
    { name: "Barbie", wiki: "Barbie (film)", year: 2023, tags: ["comedy"], hints: [
      "It came out in the 2020s.",
      "It's a comedy.",
      "It was directed by Greta Gerwig and was the biggest film of 2023.",
      "Ryan Gosling plays Ken and sings 'I'm Just Ken'.",
      "Margot Robbie plays a doll who leaves her perfect pink Dreamhouse world."
    ] },
    { name: "Spirited Away", year: 2001, tags: ["animated"], hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a Japanese film from Studio Ghibli.",
      "It won the Oscar for Best Animated Feature and was directed by Hayao Miyazaki.",
      "A girl named Chihiro works at a bathhouse for gods after her parents turn into pigs."
    ] },
    { name: "Raiders of the Lost Ark", year: 1981, tags: ["action"], hints: [
      "It came out in the 1980s.",
      "It's an action adventure.",
      "It was directed by Steven Spielberg and produced by George Lucas.",
      "The hero hates snakes and races Nazis to find a holy relic.",
      "Harrison Ford plays an archaeologist with a fedora and a bullwhip."
    ] },
    { name: "The Breakfast Club", year: 1985, tags: ["comedy","drama"], hints: [
      "It came out in the 1980s.",
      "It's a teen comedy-drama.",
      "It was written and directed by John Hughes.",
      "Five very different students spend a Saturday in detention.",
      "A jock, a brain, a princess, a criminal, and a basket case bond in the school library."
    ] },
    { name: "Ghostbusters", year: 1984, tags: ["comedy","action"], hints: [
      "It came out in the 1980s.",
      "It's a supernatural comedy.",
      "It stars Bill Murray and Dan Aykroyd.",
      "A giant Stay Puft Marshmallow Man stomps through New York.",
      "Scientists with proton packs catch spirits around the city."
    ] },
    { name: "The Terminator", year: 1984, tags: ["action"], hints: [
      "It came out in the 1980s.",
      "It's a sci-fi action movie.",
      "It was directed by James Cameron.",
      "A soldier from the future protects a woman named Sarah Connor.",
      "Arnold Schwarzenegger plays a cyborg assassin who promises 'I'll be back.'"
    ] },
    { name: "Top Gun", year: 1986, tags: ["action","drama"], hints: [
      "It came out in the 1980s.",
      "It's an action drama.",
      "It stars Tom Cruise and got a hit sequel in 2022.",
      "Its soundtrack includes 'Danger Zone' and 'Take My Breath Away'.",
      "Navy fighter pilots Maverick and Goose train at an elite flight school."
    ] },
    { name: "Avengers: Endgame", year: 2019, tags: ["action"], hints: [
      "It came out in the 2010s.",
      "It's a superhero action movie.",
      "It was briefly the highest-grossing film of all time.",
      "Heroes use time travel to undo a devastating snap.",
      "Iron Man, Captain America, and Thor face Thanos in Marvel's big finale."
    ] },
    { name: "Inception", year: 2010, tags: ["action"], hints: [
      "It came out in the 2010s.",
      "It's a sci-fi thriller.",
      "It was directed by Christopher Nolan.",
      "Its final shot of a spinning top leaves viewers arguing.",
      "Leonardo DiCaprio leads a team that plants ideas inside people's dreams."
    ] },
    { name: "Coco", wiki: "Coco (2017 film)", year: 2017, tags: ["animated"], hints: [
      "It came out in the 2010s.",
      "It's animated.",
      "It's a Pixar film set in Mexico.",
      "Its song 'Remember Me' won an Oscar.",
      "A boy who loves music visits the Land of the Dead on Día de Muertos."
    ] },
    { name: "Black Panther", wiki: "Black Panther (film)", year: 2018, tags: ["action"], hints: [
      "It came out in the 2010s.",
      "It's a superhero action movie.",
      "It was the first superhero film nominated for Best Picture.",
      "It's set in Wakanda, a hidden, high-tech African nation.",
      "Chadwick Boseman plays King T'Challa."
    ] },
    { name: "Oppenheimer", wiki: "Oppenheimer (film)", year: 2023, tags: ["drama"], hints: [
      "It came out in the 2020s.",
      "It's a historical drama.",
      "It was directed by Christopher Nolan and won Best Picture.",
      "It opened the same weekend as 'Barbie', creating a double-feature craze.",
      "Cillian Murphy plays the physicist who led the Manhattan Project."
    ] },
    { name: "Get Out", year: 2017, tags: ["drama"], hints: [
      "It came out in the 2010s.",
      "It's a horror thriller.",
      "It was Jordan Peele's directing debut and won him an Oscar for the screenplay.",
      "Its victims are hypnotized into the 'Sunken Place'.",
      "A Black man's weekend visit to his white girlfriend's family turns sinister."
    ] },
    { name: "Inside Out", wiki: "Inside Out (2015 film)", year: 2015, tags: ["animated"], hints: [
      "It came out in the 2010s.",
      "It's animated.",
      "It's a Pixar film.",
      "Most of it takes place in the mind of an 11-year-old girl.",
      "Joy, Sadness, Anger, Fear, and Disgust run Riley's emotions."
    ] },
    { name: "Harry Potter and the Sorcerer's Stone", wiki: "Harry Potter and the Philosopher's Stone (film)", year: 2001, tags: ["action"], hints: [
      "It came out in the 2000s.",
      "It's a fantasy adventure based on a book.",
      "It was the first film in an eight-movie series.",
      "An orphan learns he's famous in a hidden world and plays Quidditch.",
      "Daniel Radcliffe plays a boy wizard starting at Hogwarts."
    ] },
    { name: "Pirates of the Caribbean", wiki: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, tags: ["action","comedy"], hints: [
      "It came out in the 2000s.",
      "It's an action adventure.",
      "It was based on a Disney theme park ride.",
      "Its villains turn into skeletons in the moonlight.",
      "Johnny Depp plays Captain Jack Sparrow."
    ] },
    { name: "Up", wiki: "Up (2009 film)", year: 2009, tags: ["animated"], hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a Pixar film that opens with a famously sad montage.",
      "A talking dog named Dug gets distracted by squirrels.",
      "An old man ties thousands of balloons to his house and flies to South America."
    ] },
    { name: "Mean Girls", year: 2004, tags: ["comedy"], hints: [
      "It came out in the 2000s.",
      "It's a teen comedy.",
      "It was written by Tina Fey.",
      "Its popular clique wears pink on Wednesdays.",
      "Lindsay Lohan's character joins the Plastics, led by Regina George."
    ] },
    { name: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, tags: ["action"], hints: [
      "It came out in the 2000s.",
      "It's a fantasy adventure based on a book.",
      "It was filmed in New Zealand by director Peter Jackson.",
      "Its group of nine includes a wizard, an elf, and a dwarf.",
      "Frodo the hobbit sets out to destroy a powerful piece of jewelry in Mordor."
    ] },
    { name: "Psycho", wiki: "Psycho (1960 film)", year: 1960, tags: ["drama"], hints: [
      "It came out before 1970.",
      "It's a horror thriller in black and white.",
      "It was directed by Alfred Hitchcock.",
      "Its main character is killed surprisingly early in the movie.",
      "Its shower scene at the Bates Motel is one of the most famous in film."
    ] },
    { name: "Grease", wiki: "Grease (film)", year: 1978, tags: ["comedy"], hints: [
      "It came out in the 1970s.",
      "It's a musical.",
      "It's set at a 1950s high school.",
      "Its songs include 'Summer Nights' and 'You're the One That I Want'.",
      "John Travolta and Olivia Newton-John play Danny and Sandy."
    ] },
    { name: "Rocky", year: 1976, tags: ["drama"], hints: [
      "It came out in the 1970s.",
      "It's a sports drama.",
      "It won Best Picture and was written by its star.",
      "Its hero trains by punching frozen meat and drinking raw eggs.",
      "Sylvester Stallone plays a Philadelphia boxer who runs up museum steps."
    ] }
  ],

  Songs: [
    { name: "Bohemian Rhapsody", year: 1975, tags: ["rock"], hints: [
      "It was released before 1980.",
      "It's a rock song by a British band.",
      "It's six minutes long with no real chorus, mixing ballad, opera, and hard rock.",
      "It was sung by Freddie Mercury of Queen.",
      "Friends headbang to it in a car in the movie 'Wayne's World'."
    ] },
    { name: "Billie Jean", year: 1983, tags: ["pop"], hints: [
      "It was released in the 1980s.",
      "It's a pop song by a male solo artist.",
      "It's from the best-selling album of all time.",
      "The singer debuted the moonwalk while performing it on TV in 1983.",
      "It's Michael Jackson's song denying that a woman's child is his."
    ] },
    { name: "Hey Jude", year: 1968, tags: ["rock"], hints: [
      "It was released before 1980.",
      "It's by a British band.",
      "It's by the Beatles and runs more than seven minutes.",
      "Paul McCartney wrote it to comfort John Lennon's son Julian.",
      "It ends with a famous four-minute crowd singalong."
    ] },
    { name: "Imagine", wiki: "Imagine (John Lennon song)", year: 1971, tags: ["rock"], hints: [
      "It was released before 1980.",
      "It's a ballad by a British male solo artist.",
      "It was written by a former Beatle.",
      "It's played on piano and dreams of a world without countries or possessions.",
      "It's John Lennon's most famous solo song."
    ] },
    { name: "Smells Like Teen Spirit", year: 1991, tags: ["rock"], hints: [
      "It was released in the 1990s.",
      "It's a rock song by an American band.",
      "It's a grunge anthem from the Seattle scene.",
      "Its music video is set in a high school gym with cheerleaders.",
      "It's Nirvana's breakout hit, sung by Kurt Cobain."
    ] },
    { name: "Hotel California", wiki: "Hotel California (song)", year: 1977, tags: ["rock"], hints: [
      "It was released before 1980.",
      "It's a rock song by an American band.",
      "It's famous for a long dual guitar solo at the end.",
      "It's about a mysterious luxury place that you can never really leave.",
      "It's the Eagles' most famous song."
    ] },
    { name: "Thriller", wiki: "Thriller (song)", year: 1983, tags: ["pop"], hints: [
      "It was released in the 1980s.",
      "It's a pop song by a male solo artist.",
      "Horror actor Vincent Price performs a spooky spoken-word section.",
      "Its 14-minute music video features dancing zombies.",
      "It's Michael Jackson's Halloween classic."
    ] },
    { name: "Sweet Child o' Mine", year: 1987, tags: ["rock"], hints: [
      "It was released in the 1980s.",
      "It's a rock song by an American band.",
      "It's famous for its looping opening guitar riff.",
      "Guitarist Slash reportedly came up with the riff as a warm-up exercise.",
      "It's Guns N' Roses' only No. 1 hit in the US."
    ] },
    { name: "Stairway to Heaven", year: 1971, tags: ["rock"], hints: [
      "It was released before 1980.",
      "It's a rock song by a British band.",
      "It starts as a quiet folk tune and builds to hard rock over eight minutes.",
      "It was never released as a regular single, yet became one of the most-played rock songs ever.",
      "It's Led Zeppelin's most famous song."
    ] },
    { name: "Purple Rain", wiki: "Purple Rain (song)", year: 1984, tags: ["rock", "rnb"], hints: [
      "It was released in the 1980s.",
      "It's a power ballad by a male solo artist.",
      "It's the title song of a 1984 movie the singer starred in.",
      "The singer, from Minneapolis, played it in a real downpour at the 2007 Super Bowl.",
      "It's Prince's signature song."
    ] },
    { name: "Respect", wiki: "Respect (song)", year: 1967, tags: ["rnb"], hints: [
      "It was released before 1980.",
      "It's a soul song by a female singer.",
      "It was first recorded by Otis Redding.",
      "It became an anthem for civil rights and women's rights, and it spells out its title.",
      "It's Aretha Franklin's signature song."
    ] },
    { name: "Rolling in the Deep", year: 2010, tags: ["pop", "rnb"], hints: [
      "It was released around 2010.",
      "It's a pop-soul song by a British female singer.",
      "It's the opening track of the album '21'.",
      "It's an angry breakup song with a stomping beat.",
      "It was Adele's first No. 1 hit in the US."
    ] },
    { name: "Shape of You", year: 2017, tags: ["pop"], hints: [
      "It was released in the 2010s.",
      "It's a pop song by a British male singer.",
      "It was Spotify's most-streamed song for years.",
      "It has a marimba-style tropical beat and is about a crush at a bar.",
      "It's Ed Sheeran's biggest hit."
    ] },
    { name: "Uptown Funk", year: 2014, tags: ["pop", "rnb"], hints: [
      "It was released in the 2010s.",
      "It's a retro, party-ready pop song.",
      "It's credited to a British producer featuring an American singer.",
      "It spent 14 weeks at No. 1 in the US.",
      "It's Mark Ronson and Bruno Mars' party anthem."
    ] },
    { name: "Despacito", year: 2017, tags: ["hiphop", "pop"], hints: [
      "It was released in the 2010s.",
      "It's sung mostly in Spanish.",
      "It's by Luis Fonsi and Daddy Yankee from Puerto Rico.",
      "A remix featuring Justin Bieber helped it top the US charts.",
      "Its music video was the first to pass 5 billion views on YouTube."
    ] },
    { name: "Old Town Road", year: 2019, tags: ["hiphop"], hints: [
      "It was released in the 2010s.",
      "It blends country and hip-hop.",
      "It was pulled from a country chart, which sparked a debate.",
      "A remix with Billy Ray Cyrus spent a record 19 weeks at No. 1.",
      "It's Lil Nas X's breakout hit about riding a horse."
    ] },
    { name: "Blinding Lights", year: 2019, tags: ["pop"], hints: [
      "It was released in late 2019.",
      "It's a pop song with a 1980s synth sound by a Canadian singer.",
      "Billboard named it the greatest Hot 100 song of all time in 2021.",
      "Its music video shows the singer in a red suit with a bloodied face.",
      "It's The Weeknd's biggest hit."
    ] },
    { name: "Dancing Queen", year: 1976, tags: ["pop"], hints: [
      "It was released before 1980.",
      "It's a disco-pop song by a group from Europe.",
      "The group is from Sweden.",
      "It's about a teenage girl ruling the dance floor.",
      "It's ABBA's only No. 1 hit in the US."
    ] },
    { name: "Don't Stop Believin'", year: 1981, tags: ["rock"], hints: [
      "It was released in the 1980s.",
      "It's a rock song by an American band.",
      "Its piano intro is instantly recognizable.",
      "It became huge again after the final scene of 'The Sopranos' and a cover on 'Glee'.",
      "It's Journey's best-known song, about a small-town girl and a city boy."
    ] },
    { name: "Shake It Off", year: 2014, tags: ["pop"], hints: [
      "It was released in the 2010s.",
      "It's a pop song by an American female singer.",
      "It was the lead single from the album '1989'.",
      "It's about ignoring haters and critics.",
      "It was Taylor Swift's first single after she went fully pop."
    ] },
    { name: "...Baby One More Time", year: 1998, tags: ["pop"], hints: [
      "It was released in the 1990s.",
      "It's a pop song by an American female singer.",
      "It was the singer's debut single, released when she was 16.",
      "Its music video shows her dancing in a school outfit in a hallway.",
      "It launched Britney Spears' career."
    ] },
    { name: "Wannabe", wiki: "Wannabe (song)", year: 1996, tags: ["pop"], hints: [
      "It was released in the 1990s.",
      "It's a pop song by a British girl group.",
      "It was the group's debut single and hit No. 1 in more than 30 countries.",
      "The group's members had nicknames like Scary, Sporty, Baby, Ginger, and Posh.",
      "It's the Spice Girls' debut hit about putting friendship first."
    ] },
    { name: "I Will Always Love You", year: 1992, tags: ["rnb","pop"], hints: [
      "Its most famous version was released in the 1990s.",
      "It's a power ballad by a female singer.",
      "It was written and first recorded by Dolly Parton.",
      "The famous version is from the movie 'The Bodyguard'.",
      "Whitney Houston's version is known for its huge key change and long-held notes."
    ] },
    { name: "Gangsta's Paradise", year: 1995, tags: ["hiphop"], hints: [
      "It was released in the 1990s.",
      "It's a rap song.",
      "It was recorded for the movie 'Dangerous Minds'.",
      "It's built on a sample of a 1976 Stevie Wonder song.",
      "It's Coolio's biggest hit."
    ] },
    { name: "Macarena", wiki: "Macarena (song)", year: 1995, tags: ["hiphop","pop"], hints: [
      "It was released in the 1990s.",
      "It's a dance song sung partly in Spanish.",
      "It's by Los del Río, a duo from Spain.",
      "A remix topped the US charts for 14 weeks in 1996.",
      "It comes with a famous dance of arm moves, hands on head, and a hip shake."
    ] },
    { name: "Livin' la Vida Loca", year: 1999, tags: ["pop","hiphop"], hints: [
      "It was released in the 1990s.",
      "It's a Latin pop song by a male singer.",
      "The singer is from Puerto Rico and was once in the boy band Menudo.",
      "It kicked off a Latin pop boom in the US.",
      "It's Ricky Martin's biggest hit, about a wild party girl."
    ] },
    { name: "Waterfalls", wiki: "Waterfalls (TLC song)", year: 1995, tags: ["rnb"], hints: [
      "It was released in the 1990s.",
      "It's an R&B song by a female group.",
      "It was a No. 1 hit for a trio from Atlanta.",
      "Its message warns against drug dealing and risky choices.",
      "It's TLC's biggest hit, from the album 'CrazySexyCool'."
    ] },
    { name: "Crazy in Love", year: 2003, tags: ["rnb","pop"], hints: [
      "It was released in the 2000s.",
      "It's an R&B song by a female singer.",
      "It features Jay-Z.",
      "It opens with a famous blaring horn sample.",
      "It was Beyoncé's first big solo hit after Destiny's Child."
    ] },
    { name: "Hey Ya!", year: 2003, tags: ["hiphop"], hints: [
      "It was released in the 2000s.",
      "It's an upbeat song by a hip-hop duo.",
      "The duo is from Atlanta.",
      "It made shaking a Polaroid picture famous, even though that's bad for the photo.",
      "It's OutKast's biggest hit, sung by André 3000."
    ] },
    { name: "Umbrella", wiki: "Umbrella (song)", year: 2007, tags: ["rnb","pop"], hints: [
      "It was released in the 2000s.",
      "It's a pop-R&B song by a female singer.",
      "It features Jay-Z.",
      "It spent 10 weeks at No. 1 in the UK during a famously rainy summer.",
      "It was Rihanna's breakout hit."
    ] },
    { name: "In da Club", year: 2003, tags: ["hiphop"], hints: [
      "It was released in the 2000s.",
      "It's a rap song.",
      "It was produced by Dr. Dre.",
      "It's a party anthem built around someone's birthday.",
      "It was 50 Cent's breakout hit."
    ] },
    { name: "Lose Yourself", year: 2002, tags: ["hiphop"], hints: [
      "It was released in the 2000s.",
      "It's a rap song.",
      "It was the first rap song to win the Oscar for Best Original Song.",
      "It's from the movie '8 Mile'.",
      "It's Eminem's song about seizing your one big chance."
    ] },
    { name: "Mr. Brightside", year: 2003, tags: ["rock"], hints: [
      "It was released in the 2000s.",
      "It's a rock song by an American band.",
      "The band is from Las Vegas.",
      "It's about jealousy and has stayed on the UK charts for years.",
      "It's The Killers' signature song."
    ] },
    { name: "Hips Don't Lie", year: 2006, tags: ["pop","hiphop"], hints: [
      "It was released in the 2000s.",
      "It's a Latin pop song by a female singer.",
      "The singer is from Colombia.",
      "It features Wyclef Jean.",
      "It's Shakira's biggest hit, known for her belly dancing."
    ] },
    { name: "Single Ladies", wiki: "Single Ladies (Put a Ring on It)", year: 2008, tags: ["rnb","pop"], hints: [
      "It was released in the 2000s.",
      "It's an R&B song by a female singer.",
      "Its black-and-white music video features three dancers.",
      "Its hand-twisting dance became a worldwide craze.",
      "It's Beyoncé's anthem telling an ex he should have committed."
    ] },
    { name: "Seven Nation Army", year: 2003, tags: ["rock"], hints: [
      "It was released in the 2000s.",
      "It's a rock song by an American duo.",
      "The band is from Detroit.",
      "Its riff is chanted by crowds at sports stadiums worldwide.",
      "It's The White Stripes' most famous song."
    ] },
    { name: "Bad Romance", year: 2009, tags: ["pop"], hints: [
      "It was released in the 2000s.",
      "It's a pop song by an American female singer.",
      "Its bathhouse-themed music video was once YouTube's most-viewed.",
      "It opens with a chant of nonsense syllables.",
      "It's one of Lady Gaga's biggest hits."
    ] },
    { name: "Gangnam Style", year: 2012, tags: ["pop","hiphop"], hints: [
      "It was released in the 2010s.",
      "It's a K-pop song.",
      "The singer is from South Korea.",
      "It was the first YouTube video to reach 1 billion views.",
      "PSY dances like he's riding an invisible horse."
    ] },
    { name: "Happy", wiki: "Happy (Pharrell Williams song)", year: 2013, tags: ["pop","rnb"], hints: [
      "It was released in the 2010s.",
      "It's an upbeat pop-soul song by a male singer.",
      "It was written for the movie 'Despicable Me 2'.",
      "Its music video is 24 hours long.",
      "It's Pharrell Williams' feel-good hit."
    ] },
    { name: "Sweet Caroline", year: 1969, tags: ["pop"], hints: [
      "It was released before 1980.",
      "It's a pop song by an American male singer.",
      "It was written and sung by Neil Diamond.",
      "Fans sing it at Boston Red Sox games in the eighth inning.",
      "Crowds famously shout along with its horn hits after the chorus."
    ] }
  ],

  Animals: [
    { name: "Giraffe", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Africa.",
      "It eats leaves from tall acacia trees.",
      "It has a dark blue-purple tongue up to 20 inches long.",
      "It's the tallest animal on Earth."
    ] },
    { name: "Penguin", tags: ["bird", "sea"], hints: [
      "It's a bird.",
      "It lives mostly in the Southern Hemisphere.",
      "It can't fly, but it's an excellent swimmer.",
      "In one species, fathers keep the egg warm on their feet all winter.",
      "This black-and-white bird waddles across Antarctic ice."
    ] },
    { name: "Octopus", tags: ["sea"], hints: [
      "It lives in the ocean.",
      "It has no bones.",
      "It has three hearts and blue blood.",
      "It can change color and squirt ink to escape.",
      "It has eight arms."
    ] },
    { name: "Elephant", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Africa and Asia.",
      "It's the largest land animal.",
      "It has huge ears and ivory tusks.",
      "It uses its trunk to drink and grab food."
    ] },
    { name: "Kangaroo", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Australia.",
      "It carries its babies, called joeys, in a pouch.",
      "It uses its big tail for balance and can't easily move backward.",
      "It hops on powerful back legs and is known for boxing."
    ] },
    { name: "Platypus", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Australia.",
      "It's one of the very few mammals that lay eggs.",
      "Males have venomous spurs on their back legs.",
      "It has a duck-like bill and a beaver-like tail."
    ] },
    { name: "Bald eagle", tags: ["bird"], hints: [
      "It's a bird.",
      "It lives in North America.",
      "It's a bird of prey that eats mostly fish.",
      "It builds the largest nests of any North American bird.",
      "It's the national bird of the United States, with a white head."
    ] },
    { name: "Great white shark", tags: ["sea"], hints: [
      "It lives in the ocean.",
      "It's a fish.",
      "It's a top predator that can sense tiny amounts of blood in the water.",
      "It has about 300 jagged teeth arranged in rows.",
      "It's the villain in the movie 'Jaws'."
    ] },
    { name: "Koala", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Australia.",
      "It sleeps up to 20 hours a day.",
      "It eats almost nothing but eucalyptus leaves.",
      "It's a fluffy gray marsupial often wrongly called a bear."
    ] },
    { name: "Cheetah", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives mostly in Africa.",
      "It's a big cat that hunts during the day.",
      "It has black 'tear marks' running down from its eyes.",
      "It's the fastest land animal."
    ] },
    { name: "Giant panda", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Asia.",
      "It lives in the mountain forests of central China.",
      "It spends most of its day eating bamboo.",
      "It's a black-and-white bear."
    ] },
    { name: "Sloth", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Central and South America.",
      "It spends almost its whole life hanging upside down in trees.",
      "Algae can grow in its fur and turn it green.",
      "It's famous for moving extremely slowly."
    ] },
    { name: "Flamingo", tags: ["bird"], hints: [
      "It's a bird.",
      "It lives in warm wetlands and lagoons.",
      "It often stands on one leg.",
      "Its color comes from the shrimp and algae it eats.",
      "It's a tall pink wading bird."
    ] },
    { name: "Blue whale", tags: ["sea", "mammal"], hints: [
      "It lives in the ocean.",
      "It's a mammal.",
      "It eats tiny shrimp-like animals called krill.",
      "Its heart is about the size of a small car.",
      "It's the largest animal that has ever lived."
    ] },
    { name: "Chameleon", tags: ["reptile"], hints: [
      "It's a reptile.",
      "Many species live in Madagascar and Africa.",
      "Its eyes can move in two different directions at once.",
      "It catches insects with a lightning-fast, sticky tongue.",
      "It's famous for changing its skin color."
    ] },
    { name: "Polar bear", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in the far north.",
      "It hunts seals on the sea ice.",
      "Its skin is actually black under its fur.",
      "It's the big white predator of the Arctic."
    ] },
    { name: "Owl", tags: ["bird"], hints: [
      "It's a bird.",
      "It lives on every continent except Antarctica.",
      "It's mostly active at night.",
      "It can turn its head about 270 degrees.",
      "It hoots and is a symbol of wisdom."
    ] },
    { name: "Axolotl", tags: ["reptile"], hints: [
      "It lives in water.",
      "It's an amphibian.",
      "In the wild it lives only in lakes near Mexico City.",
      "It can regrow lost legs and even parts of its heart and brain.",
      "It's a pink salamander with feathery gills that looks like it's smiling."
    ] },
    { name: "Zebra", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Africa.",
      "It's related to horses and lives in herds.",
      "No two of them have exactly the same pattern.",
      "It has black and white stripes."
    ] },
    { name: "Bat", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives on every continent except Antarctica.",
      "It's active at night and sleeps upside down.",
      "Many species find food using echolocation.",
      "It's the only mammal that can truly fly."
    ] },
    { name: "Lion", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives mostly in Africa.",
      "It's a big cat that lives in groups called prides.",
      "Males are recognized by their big manes.",
      "It's called the king of the jungle and is famous for its roar."
    ] },
    { name: "Tiger", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Asia.",
      "It's the largest wild cat.",
      "Unlike most cats, it loves swimming.",
      "It has orange fur with black stripes."
    ] },
    { name: "Gorilla", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Africa.",
      "It's the largest primate.",
      "Adult males are called silverbacks.",
      "This great ape is known for beating its chest."
    ] },
    { name: "Wolf", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in North America, Europe, and Asia.",
      "It hunts in packs.",
      "It's the wild ancestor of the pet dog.",
      "It howls at night."
    ] },
    { name: "Camel", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in deserts of Africa and Asia.",
      "It can go weeks without drinking.",
      "Its humps store fat, not water.",
      "It's called the ship of the desert."
    ] },
    { name: "Raccoon", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in North America.",
      "It's mostly active at night and often raids trash cans.",
      "It has nimble front paws and seems to wash its food.",
      "It has a black 'bandit mask' and a ringed tail."
    ] },
    { name: "Hippopotamus", tags: ["mammal"], hints: [
      "It's a mammal.",
      "It lives in Africa.",
      "It spends most of the day in rivers and lakes.",
      "It's one of the most dangerous animals to humans in Africa.",
      "Its name means 'river horse', and it has an enormous mouth."
    ] },
    { name: "Ostrich", tags: ["bird"], hints: [
      "It's a bird.",
      "It lives in Africa.",
      "It can't fly but can run about 45 miles per hour.",
      "It lays the largest eggs of any living bird.",
      "It's the largest bird in the world."
    ] },
    { name: "Peacock", wiki: "Indian peafowl", tags: ["bird"], hints: [
      "It's a bird.",
      "It comes from South Asia.",
      "It's the national bird of India.",
      "Only the males have the dazzling display; the females are called peahens.",
      "It fans out a huge tail covered in eye-like spots."
    ] },
    { name: "Parrot", tags: ["bird"], hints: [
      "It's a bird.",
      "Most species live in warm, tropical places.",
      "It has a curved beak and grips with two toes forward and two back.",
      "Some species can live more than 60 years.",
      "It's famous for copying human speech."
    ] },
    { name: "Hummingbird", tags: ["bird"], hints: [
      "It's a bird.",
      "It lives only in the Americas.",
      "It's the smallest kind of bird.",
      "Its heart can beat more than 1,000 times a minute.",
      "It hovers at flowers and can even fly backward."
    ] },
    { name: "Dolphin", tags: ["sea","mammal"], hints: [
      "It lives in the ocean.",
      "It's a mammal.",
      "It's very intelligent and lives in groups called pods.",
      "It finds food using echolocation clicks.",
      "It's a playful, smiley-looking swimmer, like Flipper."
    ] },
    { name: "Jellyfish", tags: ["sea"], hints: [
      "It lives in the ocean.",
      "It has no brain, heart, or bones.",
      "It's made mostly of water.",
      "One species can turn back into its young form and is called 'immortal'.",
      "It drifts through the water trailing stinging tentacles."
    ] },
    { name: "Sea turtle", tags: ["sea","reptile"], hints: [
      "It lives in the ocean.",
      "It's a reptile.",
      "Females return to the beach where they hatched to lay eggs.",
      "Its babies race across the sand to the ocean after hatching.",
      "It swims with flippers and carries a shell on its back."
    ] },
    { name: "Seahorse", tags: ["sea"], hints: [
      "It lives in the ocean.",
      "It's a fish.",
      "It swims upright and grips seagrass with its tail.",
      "The fathers carry and give birth to the babies.",
      "Its head looks like a tiny horse's."
    ] },
    { name: "Orca", tags: ["sea","mammal"], hints: [
      "It lives in the ocean.",
      "It's a mammal.",
      "It's the largest member of the dolphin family.",
      "It's a top predator that even hunts sharks.",
      "It's the black-and-white 'killer whale' from 'Free Willy'."
    ] },
    { name: "Komodo dragon", tags: ["reptile"], hints: [
      "It's a reptile.",
      "It lives in Asia.",
      "It lives only on a few islands in Indonesia.",
      "Its bite contains venom.",
      "It's the largest lizard in the world."
    ] },
    { name: "Crocodile", tags: ["reptile"], hints: [
      "It's a reptile.",
      "It lives in tropical rivers and coasts around the world.",
      "Its family has been around since the age of the dinosaurs.",
      "Its saltwater species is the largest living reptile.",
      "It has a long snout and lurks with just its eyes above the water."
    ] },
    { name: "Frog", tags: ["reptile"], hints: [
      "It's an amphibian.",
      "It lives on every continent except Antarctica.",
      "It starts life as a tadpole.",
      "It absorbs water through its skin and has no tail as an adult.",
      "It croaks and hops on long back legs."
    ] },
    { name: "King cobra", tags: ["reptile"], hints: [
      "It's a reptile.",
      "It lives in Asia.",
      "It's the longest venomous snake in the world.",
      "It mainly eats other snakes.",
      "It rears up and spreads a hood when threatened."
    ] }
  ],

  Foods: [
    { name: "Pizza", tags: ["mains", "italian"], hints: [
      "It's usually eaten warm.",
      "It's a savory dish.",
      "It comes from Italy.",
      "It's baked in a very hot oven, and Naples is famous for it.",
      "It's flat dough topped with tomato sauce and cheese, cut into slices."
    ] },
    { name: "Sushi", tags: ["mains", "asian"], hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's from Japan.",
      "It's often eaten with soy sauce, wasabi, and pickled ginger.",
      "It's vinegared rice with raw fish or seafood."
    ] },
    { name: "Taco", tags: ["mains", "mexican"], hints: [
      "It's a savory dish.",
      "It's from North America.",
      "It comes from Mexico.",
      "Tuesday is a popular day to eat it in the US.",
      "It's a folded tortilla stuffed with fillings."
    ] },
    { name: "Hamburger", tags: ["mains", "american"], hints: [
      "It's a savory dish.",
      "It's hugely popular in the United States.",
      "It's a classic fast-food item.",
      "McDonald's Big Mac is a famous version.",
      "It's a ground beef patty served in a bun."
    ] },
    { name: "Croissant", tags: ["breakfast", "european"], hints: [
      "It's often eaten for breakfast.",
      "It's a baked good.",
      "It's strongly associated with France.",
      "It's made from many thin layers of buttery dough.",
      "It's a flaky, crescent-shaped pastry."
    ] },
    { name: "Ramen", tags: ["mains", "asian"], hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's hugely popular in Japan.",
      "Cheap instant versions are a famous college-student staple.",
      "It's wheat noodles in a hot broth."
    ] },
    { name: "Pancake", tags: ["breakfast", "american"], hints: [
      "It's usually eaten for breakfast.",
      "It's cooked on a hot griddle.",
      "It's often served in a stack.",
      "It's usually topped with butter and maple syrup.",
      "It's a flat, fluffy round of batter that gets flipped once."
    ] },
    { name: "Guacamole", tags: ["snacks", "mexican"], hints: [
      "It's usually eaten cold.",
      "It comes from Mexico.",
      "It's a dip or spread.",
      "It includes lime juice, onion, and cilantro.",
      "It's made from mashed avocados."
    ] },
    { name: "Bagel", tags: ["breakfast", "american"], hints: [
      "It's often eaten for breakfast.",
      "It's a baked good.",
      "New York City is famous for it.",
      "It's boiled before it's baked, which makes it chewy.",
      "It's a round bread with a hole, often topped with cream cheese."
    ] },
    { name: "Lasagna", tags: ["mains", "italian"], hints: [
      "It's a savory dish.",
      "It comes from Italy.",
      "It's baked in a rectangular dish.",
      "Garfield the cat loves it.",
      "It's layers of wide flat pasta, meat sauce, and cheese."
    ] },
    { name: "Burrito", tags: ["mains", "mexican"], hints: [
      "It's a savory dish.",
      "It's linked to Mexico and the southwestern US.",
      "It's often filled with rice, beans, and meat.",
      "Its name means 'little donkey' in Spanish.",
      "It's a big flour tortilla rolled up around fillings."
    ] },
    { name: "Hot dog", tags: ["mains", "snacks", "american"], hints: [
      "It's a savory food.",
      "It's hugely popular in the United States.",
      "It's a classic food at baseball games.",
      "A famous eating contest for it happens every Fourth of July at Coney Island.",
      "It's a sausage served in a long bun."
    ] },
    { name: "Pad thai", wiki: "Pad thai", tags: ["mains", "asian"], hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's a popular street food.",
      "It's often topped with crushed peanuts and a wedge of lime.",
      "It's stir-fried rice noodles from the street stalls of Bangkok."
    ] },
    { name: "Apple pie", tags: ["desserts", "american"], hints: [
      "It's a dessert.",
      "It's baked.",
      "It's a symbol of American culture.",
      "It's often served warm with a scoop of vanilla ice cream.",
      "It's a fruit-filled pastry flavored with cinnamon, often with a lattice crust."
    ] },
    { name: "Ice cream", tags: ["desserts"], hints: [
      "It's a dessert.",
      "It's served cold.",
      "It's often served in a cone or a cup.",
      "Popular flavors include vanilla, chocolate, and strawberry.",
      "It's a frozen dairy treat that melts fast in summer."
    ] },
    { name: "Popcorn", tags: ["snacks", "american"], hints: [
      "It's a snack.",
      "It's made from a grain.",
      "It's a classic movie theater snack.",
      "It's often topped with butter and salt.",
      "Its kernels burst open when heated."
    ] },
    { name: "Dumpling", tags: ["mains", "asian"], hints: [
      "It's a savory food.",
      "Versions of it exist in many cultures around the world.",
      "It's often steamed, boiled, or pan-fried.",
      "Potstickers and gyoza are types of it.",
      "It's a small pocket of dough filled with meat or vegetables."
    ] },
    { name: "Cheesecake", tags: ["desserts", "american"], hints: [
      "It's a dessert.",
      "It's usually served chilled.",
      "New York style is a famous version.",
      "It usually has a graham cracker crust.",
      "Its rich, creamy filling is made from the soft spread often put on bagels."
    ] },
    { name: "Waffle", tags: ["breakfast", "european"], hints: [
      "It's often eaten for breakfast.",
      "It's cooked in a special hinged iron.",
      "Belgium is famous for it.",
      "It has a grid pattern of little square pockets.",
      "It's a crispy batter treat whose pockets hold pools of syrup."
    ] },
    { name: "Mac and cheese", wiki: "Macaroni and cheese", tags: ["mains", "american"], hints: [
      "It's a savory dish.",
      "It's hugely popular in the United States.",
      "It's a classic comfort food for kids.",
      "A famous boxed version comes with a powdered orange sauce mix.",
      "It's elbow pasta in a creamy cheddar sauce."
    ] },
    { name: "Nachos", tags: ["snacks","mexican"], hints: [
      "It's usually eaten warm.",
      "It's a snack made for sharing.",
      "It was invented in Mexico, near the Texas border, in the 1940s.",
      "It's a stadium and movie theater favorite.",
      "It's tortilla chips covered in melted cheese and jalapeños."
    ] },
    { name: "French fries", tags: ["snacks","european"], hints: [
      "It's a savory food.",
      "It's often a side dish.",
      "Belgium and France both claim to have invented it.",
      "It's often dipped in ketchup, or mayo in much of Europe.",
      "It's thin strips of potato deep-fried until crispy."
    ] },
    { name: "Pretzel", tags: ["snacks","european"], hints: [
      "It's a savory snack.",
      "It's a baked good.",
      "It's popular in Germany, especially at Oktoberfest.",
      "It's dipped in a lye bath before baking, giving it a dark, shiny crust.",
      "It's twisted into a knot and sprinkled with coarse salt."
    ] },
    { name: "Spring rolls", wiki: "Spring roll", tags: ["snacks","asian"], hints: [
      "It's a savory snack.",
      "It's from Asia.",
      "It's a common appetizer at Chinese and Vietnamese restaurants.",
      "It can be fried until crispy or served fresh in rice paper.",
      "It's a thin wrapper wound tightly around vegetables or meat."
    ] },
    { name: "Chocolate chip cookie", tags: ["desserts","american"], hints: [
      "It's a sweet treat.",
      "It's baked.",
      "It was invented in the 1930s at the Toll House Inn in Massachusetts.",
      "It's often dunked in milk.",
      "It's a round treat studded with melty cocoa morsels."
    ] },
    { name: "Tiramisu", tags: ["desserts","italian"], hints: [
      "It's a dessert.",
      "It comes from Italy.",
      "It's served chilled and doesn't need baking.",
      "It's made with mascarpone and dusted with cocoa.",
      "It's layers of coffee-soaked ladyfingers and cream."
    ] },
    { name: "Churros", wiki: "Churro", tags: ["desserts","mexican"], hints: [
      "It's a sweet treat.",
      "It's popular in Spain and Mexico.",
      "It's often sold at theme parks and street stalls.",
      "It's often dipped in thick hot chocolate.",
      "It's ridged sticks of fried dough rolled in cinnamon sugar."
    ] },
    { name: "Donut", wiki: "Doughnut", tags: ["desserts","breakfast","american"], hints: [
      "It's a sweet treat.",
      "It's often eaten for breakfast.",
      "Homer Simpson loves them.",
      "It's often sold by the dozen, glazed or covered in sprinkles.",
      "It's a ring of fried dough with a hole in the middle."
    ] },
    { name: "Macaron", tags: ["desserts","european"], hints: [
      "It's a sweet treat.",
      "It's strongly associated with France.",
      "It's made with almond flour and egg whites.",
      "It comes in pastel colors and is sold in fancy boxes.",
      "It's a small sandwich of two crisp shells with filling in between."
    ] },
    { name: "Spaghetti", tags: ["mains","italian"], hints: [
      "It's a savory dish.",
      "It comes from Italy.",
      "It's often eaten by twirling it on a fork.",
      "'Lady and the Tramp' has a famous scene sharing a plate of it.",
      "It's long, thin pasta, often served with meatballs."
    ] },
    { name: "Quesadilla", tags: ["mains","mexican"], hints: [
      "It's a savory dish.",
      "It comes from Mexico.",
      "It's quick to make in a pan.",
      "It's usually cut into triangles.",
      "It's a tortilla folded around melted cheese and grilled."
    ] },
    { name: "Fried chicken", tags: ["mains","american"], hints: [
      "It's a savory dish.",
      "It's hugely popular in the United States.",
      "It's strongly associated with the American South.",
      "KFC built an empire on a secret recipe of 11 herbs and spices.",
      "It's breaded poultry pieces cooked in hot oil until crispy."
    ] },
    { name: "Fish and chips", tags: ["mains","european"], hints: [
      "It's a savory dish.",
      "It's from Europe.",
      "It's a classic British takeout meal.",
      "It's traditionally sprinkled with malt vinegar and wrapped in paper.",
      "It's battered, deep-fried cod or haddock with thick-cut fried potatoes."
    ] },
    { name: "Paella", tags: ["mains","european"], hints: [
      "It's a savory dish.",
      "It's from Europe.",
      "It comes from Valencia, Spain.",
      "It's cooked in a wide, shallow pan, and the crispy bottom is prized.",
      "It's a saffron rice dish often loaded with seafood."
    ] },
    { name: "Pho", tags: ["mains","asian"], hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's the national dish of Vietnam.",
      "It's served with fresh herbs, lime, and bean sprouts on the side.",
      "It's a beef broth soup with rice noodles."
    ] },
    { name: "Omelette", tags: ["breakfast","european"], hints: [
      "It's usually eaten for breakfast.",
      "It's cooked in a pan.",
      "Making a perfect French version is a classic test for chefs.",
      "It's often filled with cheese, ham, or vegetables.",
      "It's beaten eggs cooked flat and folded over."
    ] },
    { name: "French toast", tags: ["breakfast","american"], hints: [
      "It's usually eaten for breakfast.",
      "It's cooked on a griddle or in a pan.",
      "It's a good way to use up stale bread.",
      "It's often topped with powdered sugar and syrup.",
      "It's slices of bread soaked in egg and milk, then fried."
    ] },
    { name: "Avocado toast", tags: ["breakfast","american"], hints: [
      "It's often eaten for breakfast or brunch.",
      "It's a trendy café item.",
      "It became a joke symbol of millennial spending.",
      "It's often topped with a poached egg and chili flakes.",
      "It's a slice of bread topped with smashed green fruit."
    ] },
    { name: "Brownie", wiki: "Chocolate brownie", tags: ["desserts","american"], hints: [
      "It's a dessert.",
      "It's baked.",
      "It was invented in the United States in the 1890s.",
      "It's cut into squares from a pan, and people fight over the corner pieces.",
      "It's a dense, fudgy chocolate square."
    ] },
    { name: "Grilled cheese", wiki: "Cheese sandwich", tags: ["mains","american"], hints: [
      "It's a savory dish.",
      "It's a classic American comfort food.",
      "It's often paired with tomato soup.",
      "It's cooked in a buttered pan until golden.",
      "It's a toasted sandwich with melted cheddar inside."
    ] }
  ],

  "TV Shows": [
    { name: "Friends", wiki: "Friends", year: 1994, tags: ["comedy"], hints: [
      "It first aired in the 1990s.",
      "It's a sitcom set in a big American city.",
      "It follows six twentysomethings in Manhattan over ten seasons.",
      "Its characters hang out at a coffee shop called Central Perk.",
      "Ross, Rachel, Monica, Chandler, Joey, and Phoebe star in it."
    ] },
    { name: "The Office", wiki: "The Office (American TV series)", year: 2005, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a comedy filmed like a documentary.",
      "It's an American remake of a British series created by Ricky Gervais.",
      "It's set at a paper company in Scranton, Pennsylvania.",
      "Steve Carell plays regional manager Michael Scott at Dunder Mifflin."
    ] },
    { name: "Breaking Bad", year: 2008, tags: ["drama"], hints: [
      "It first aired in the 2000s.",
      "It's a crime drama.",
      "It's set in Albuquerque, New Mexico.",
      "A high school chemistry teacher becomes a drug kingpin.",
      "Bryan Cranston plays Walter White, who goes by the alias Heisenberg."
    ] },
    { name: "Game of Thrones", year: 2011, tags: ["drama", "scifi"], hints: [
      "It first aired in the 2010s.",
      "It's a fantasy drama full of violence and politics.",
      "It aired on HBO and is based on books by George R.R. Martin.",
      "Noble families fight for control of the Seven Kingdoms of Westeros.",
      "It features dragons, Jon Snow, and the Night King, and warns that winter is coming."
    ] },
    { name: "Stranger Things", year: 2016, tags: ["scifi", "drama"], hints: [
      "It first aired in the 2010s.",
      "It's a sci-fi horror drama with kids as the heroes.",
      "It's a Netflix original set in the 1980s.",
      "It's set in Hawkins, Indiana, near a secret government lab.",
      "A girl named Eleven with psychic powers fights monsters from the Upside Down."
    ] },
    { name: "The Simpsons", year: 1989, tags: ["animated", "comedy"], hints: [
      "It first aired in the 1980s.",
      "It's animated.",
      "It's the longest-running American scripted primetime series.",
      "It's set in the town of Springfield.",
      "Homer, Marge, Bart, Lisa, and Maggie are a yellow-skinned family."
    ] },
    { name: "SpongeBob SquarePants", year: 1999, tags: ["animated", "comedy"], hints: [
      "It first aired in the 1990s.",
      "It's animated and made for kids.",
      "It airs on Nickelodeon.",
      "It's set in the underwater town of Bikini Bottom.",
      "A sea creature flips Krabby Patties next door to his best friend Patrick the starfish."
    ] },
    { name: "Seinfeld", year: 1989, tags: ["comedy"], hints: [
      "It first aired in the 1980s.",
      "It's a sitcom set in New York City.",
      "It's famously described as being about nothing.",
      "Its characters meet at Monk's Café, and one episode features the Soup Nazi.",
      "Jerry, George, Elaine, and Kramer are four self-absorbed pals."
    ] },
    { name: "Grey's Anatomy", year: 2005, tags: ["drama"], hints: [
      "It first aired in the 2000s.",
      "It's a medical drama.",
      "It's set in a Seattle hospital.",
      "It's the longest-running primetime medical drama in US history.",
      "Ellen Pompeo plays surgeon Meredith, and Patrick Dempsey plays 'McDreamy'."
    ] },
    { name: "The Walking Dead", wiki: "The Walking Dead (TV series)", year: 2010, tags: ["drama"], hints: [
      "It first aired in the 2010s.",
      "It's a horror drama based on a comic book.",
      "It aired on AMC.",
      "Survivors led by sheriff's deputy Rick Grimes struggle after the world falls apart.",
      "Flesh-eating zombies overrun the world, and the villain Negan carries a bat named Lucille."
    ] },
    { name: "Squid Game", year: 2021, tags: ["drama"], hints: [
      "It first aired in the 2020s.",
      "It's a survival thriller.",
      "It's from South Korea and became Netflix's most-watched series.",
      "Contestants in green tracksuits compete for a huge cash prize.",
      "Losing a children's playground challenge like Red Light, Green Light means death."
    ] },
    { name: "The Big Bang Theory", year: 2007, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a sitcom.",
      "Its main characters are scientists at Caltech in Pasadena.",
      "One character shouts 'Bazinga!' and insists on his own spot on the couch.",
      "Sheldon, Leonard, and their neighbor Penny star in it."
    ] },
    { name: "Sesame Street", year: 1969, tags: ["animated"], hints: [
      "It first aired in the 1960s.",
      "It's an educational program for young children.",
      "It aired on PBS for decades.",
      "It's set on a city block filled with puppets from Jim Henson's team.",
      "Big Bird, Elmo, and Cookie Monster live there."
    ] },
    { name: "Survivor", wiki: "Survivor (American TV series)", year: 2000, tags: ["reality"], hints: [
      "It first aired in the US in 2000.",
      "It's a reality competition.",
      "Contestants are stranded in a remote location and split into tribes.",
      "Contestants vote each other out at Tribal Council.",
      "Jeff Probst hosts, and the last player standing wins a million dollars."
    ] },
    { name: "Saturday Night Live", year: 1975, tags: ["reality", "comedy"], hints: [
      "It first aired in the 1970s.",
      "It's a sketch comedy program.",
      "It's broadcast from Rockefeller Center in New York.",
      "Lorne Michaels created it, and each episode has a celebrity host and a musical guest.",
      "It airs late on weekends on NBC and includes the Weekend Update news segment."
    ] },
    { name: "Wednesday", wiki: "Wednesday (TV series)", year: 2022, tags: ["comedy", "scifi"], hints: [
      "It first aired in the 2020s.",
      "It's a dark comedy mystery.",
      "It's a Netflix series directed partly by Tim Burton.",
      "Its star went viral for a strange, stiff dance in a school ballroom scene.",
      "Jenna Ortega plays the gloomy daughter of the Addams Family."
    ] },
    { name: "The Mandalorian", year: 2019, tags: ["scifi"], hints: [
      "It first aired in 2019.",
      "It's a science fiction adventure.",
      "It was the flagship series that launched Disney+.",
      "It's set in the Star Wars universe after the fall of the Empire.",
      "A helmeted bounty hunter protects Grogu, nicknamed 'Baby Yoda'."
    ] },
    { name: "Bluey", wiki: "Bluey (2018 TV series)", year: 2018, tags: ["animated"], hints: [
      "It first aired in 2018.",
      "It's animated and made for preschoolers.",
      "It's from Australia.",
      "Parents love it as much as kids for its realistic family moments.",
      "It follows a playful Blue Heeler puppy, her sister Bingo, and their mom and dad."
    ] },
    { name: "Star Trek", wiki: "Star Trek: The Original Series", year: 1966, tags: ["scifi"], hints: [
      "It first aired in the 1960s.",
      "It's science fiction.",
      "It launched a franchise with many spin-off series and movies.",
      "Its crew's mission is to explore strange new worlds aboard a starship.",
      "Captain Kirk and Mr. Spock serve on the USS Enterprise."
    ] },
    { name: "Ted Lasso", year: 2020, tags: ["comedy"], hints: [
      "It first aired in 2020.",
      "It's a feel-good comedy.",
      "It's an Apple TV+ series set in England.",
      "An American college football coach is hired to manage a London soccer team.",
      "Jason Sudeikis stars, and AFC Richmond's locker room has a 'Believe' sign."
    ] },
    { name: "I Love Lucy", year: 1951, tags: ["comedy"], hints: [
      "It first aired in the 1950s.",
      "It's a sitcom filmed in black and white.",
      "Its star was married to her co-star in real life.",
      "In a famous episode, the star stuffs chocolates in her mouth at a speeding conveyor belt.",
      "Lucille Ball plays a redhead always scheming behind her husband Ricky's back."
    ] },
    { name: "The Twilight Zone", wiki: "The Twilight Zone (1959 TV series)", year: 1959, tags: ["scifi"], hints: [
      "It first aired in the 1950s.",
      "It's a sci-fi anthology with a different story each episode.",
      "It was created and introduced by Rod Serling.",
      "Its stories often end with a shocking twist.",
      "A famous episode has a gremlin on an airplane wing."
    ] },
    { name: "Scooby-Doo, Where Are You!", year: 1969, tags: ["animated","comedy"], hints: [
      "It first aired in the 1960s.",
      "It's animated.",
      "It was made by Hanna-Barbera.",
      "Its villains are usually people in masks who blame 'meddling kids'.",
      "Mystery Inc. rides in the Mystery Machine with a cowardly Great Dane."
    ] },
    { name: "M*A*S*H", wiki: "M*A*S*H (TV series)", year: 1972, tags: ["comedy","drama"], hints: [
      "It first aired in the 1970s.",
      "It's a comedy-drama.",
      "It's set at an Army hospital during the Korean War.",
      "Its 1983 finale was the most-watched TV episode in US history for decades.",
      "Alan Alda plays Hawkeye Pierce, a wisecracking surgeon."
    ] },
    { name: "Cheers", year: 1982, tags: ["comedy"], hints: [
      "It first aired in the 1980s.",
      "It's a sitcom.",
      "It's set in a bar in Boston.",
      "A regular named Norm gets greeted by everyone when he walks in.",
      "Ted Danson plays Sam Malone, a former Red Sox pitcher who runs the bar."
    ] },
    { name: "The Golden Girls", year: 1985, tags: ["comedy"], hints: [
      "It first aired in the 1980s.",
      "It's a sitcom.",
      "It's set in Miami.",
      "Its characters often bond over cheesecake at the kitchen table.",
      "Four older women, Dorothy, Rose, Blanche, and Sophia, share a house."
    ] },
    { name: "Full House", year: 1987, tags: ["comedy"], hints: [
      "It first aired in the 1980s.",
      "It's a family sitcom.",
      "It's set in San Francisco.",
      "The Olsen twins shared the role of the youngest daughter.",
      "Widowed dad Danny Tanner raises three girls with Uncle Jesse and Joey."
    ] },
    { name: "The Fresh Prince of Bel-Air", year: 1990, tags: ["comedy"], hints: [
      "It first aired in the 1990s.",
      "It's a sitcom.",
      "Its theme song tells the whole backstory.",
      "Carlton's dance became one of TV's most famous.",
      "Will Smith plays a teen from West Philadelphia sent to live with rich relatives."
    ] },
    { name: "The X-Files", year: 1993, tags: ["scifi","drama"], hints: [
      "It first aired in the 1990s.",
      "It's a sci-fi drama.",
      "Its tagline says the truth is out there.",
      "It follows two FBI agents who investigate unexplained cases.",
      "Mulder believes in aliens, and Scully is the skeptic."
    ] },
    { name: "The Sopranos", year: 1999, tags: ["drama"], hints: [
      "It first aired in the 1990s.",
      "It's a crime drama.",
      "It aired on HBO and is set in New Jersey.",
      "Its main character sees a therapist for panic attacks.",
      "James Gandolfini plays mob boss Tony."
    ] },
    { name: "Family Guy", year: 1999, tags: ["animated","comedy"], hints: [
      "It first aired in the 1990s.",
      "It's animated.",
      "It was created by Seth MacFarlane.",
      "It's famous for random cutaway gags.",
      "Peter Griffin's household includes a talking dog and an evil baby named Stewie."
    ] },
    { name: "American Idol", year: 2002, tags: ["reality"], hints: [
      "It first aired in the 2000s.",
      "It's a reality competition.",
      "Viewers vote to pick the winner.",
      "Simon Cowell was its famously harsh original judge.",
      "Kelly Clarkson and Carrie Underwood became stars by winning this singing contest."
    ] },
    { name: "The Amazing Race", year: 2001, tags: ["reality"], hints: [
      "It first aired in the 2000s.",
      "It's a reality competition.",
      "Teams of two travel around the world.",
      "Teams follow clues to reach each Pit Stop.",
      "Host Phil Keoghan greets teams on a mat at the end of each leg."
    ] },
    { name: "Shark Tank", year: 2009, tags: ["reality"], hints: [
      "It first aired in the 2000s.",
      "It's a reality program about business.",
      "It's based on a Japanese format, known in the UK as 'Dragons' Den'.",
      "Mark Cuban was one of its investors.",
      "Entrepreneurs pitch their products to wealthy investors, hoping for a deal."
    ] },
    { name: "The Great British Bake Off", year: 2010, tags: ["reality"], hints: [
      "It first aired in the 2010s.",
      "It's a reality competition.",
      "It's filmed in a tent in the English countryside.",
      "Judge Paul Hollywood is known for his rare handshakes.",
      "Amateur home cooks compete at cakes, breads, and pastries."
    ] },
    { name: "Avatar: The Last Airbender", year: 2005, tags: ["animated","scifi"], hints: [
      "It first aired in the 2000s.",
      "It's animated.",
      "It aired on Nickelodeon.",
      "Its world has four nations: Water, Earth, Fire, and Air.",
      "Aang, a young monk with an arrow tattoo, must master all four elements."
    ] },
    { name: "Lost", wiki: "Lost (2004 TV series)", year: 2004, tags: ["drama","scifi"], hints: [
      "It first aired in the 2000s.",
      "It's a mystery drama.",
      "It was filmed in Hawaii.",
      "Its mysteries include a smoke monster, a hatch, and the numbers 4 8 15 16 23 42.",
      "Survivors of Oceanic Flight 815 are stranded on a strange island."
    ] },
    { name: "Modern Family", year: 2009, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a sitcom filmed like a documentary.",
      "It won the Emmy for Outstanding Comedy five years in a row.",
      "It's set in Los Angeles.",
      "Phil, Claire, Jay, Gloria, Mitchell, and Cam are part of one big extended household."
    ] },
    { name: "Rick and Morty", year: 2013, tags: ["animated","comedy","scifi"], hints: [
      "It first aired in the 2010s.",
      "It's animated.",
      "It airs on Adult Swim.",
      "In a famous episode, a character turns himself into a pickle.",
      "A drunk mad scientist drags his grandson on wild adventures across dimensions."
    ] },
    { name: "The Crown", wiki: "The Crown (TV series)", year: 2016, tags: ["drama"], hints: [
      "It first aired in the 2010s.",
      "It's a historical drama.",
      "It's a Netflix series that recast its lead actors every two seasons.",
      "It covers Winston Churchill, Princess Diana, and decades of British history.",
      "It follows the reign of Queen Elizabeth II."
    ] }
  ],

  "Video Games": [
    { name: "Minecraft", year: 2011, tags: ["sandbox"], hints: [
      "It came out in the 2010s.",
      "Players can build almost anything.",
      "It's the best-selling title of its kind ever.",
      "It was created by Markus 'Notch' Persson and bought by Microsoft in 2014.",
      "Its blocky world has creepers, diamonds, and the Ender Dragon."
    ] },
    { name: "Super Mario Bros.", year: 1985, tags: ["adventure"], hints: [
      "It came out in the 1980s.",
      "It was made in Japan.",
      "It was made by Nintendo for the NES.",
      "Players stomp on Goombas and grab mushrooms to grow bigger.",
      "A plumber in a red cap rescues Princess Peach from Bowser."
    ] },
    { name: "Tetris", year: 1984, tags: ["puzzle"], hints: [
      "It was created in the 1980s.",
      "It's a puzzle.",
      "It was invented in the Soviet Union.",
      "It was famously bundled with Nintendo's first handheld.",
      "Falling shapes made of four squares must complete full lines."
    ] },
    { name: "Fortnite", year: 2017, tags: ["shooter"], hints: [
      "It came out in 2017.",
      "It's played online with lots of other people.",
      "It's free to play, from the studio behind Unreal Engine.",
      "It's famous for in-app dances and live concerts by stars like Travis Scott.",
      "100 players parachute from a flying bus in a battle royale."
    ] },
    { name: "Pac-Man", year: 1980, tags: ["puzzle"], hints: [
      "It came out in 1980.",
      "It started in arcades.",
      "It's from Japan, made by Namco.",
      "Its ghosts are named Blinky, Pinky, Inky, and Clyde.",
      "A yellow circle gobbles dots in a maze."
    ] },
    { name: "The Legend of Zelda", year: 1986, tags: ["adventure"], hints: [
      "It first came out in the 1980s.",
      "It's a fantasy adventure.",
      "It's a Nintendo series.",
      "The hero wields the Master Sword and battles Ganon.",
      "A green-clad hero named Link explores the kingdom of Hyrule."
    ] },
    { name: "Pokémon", year: 1996, tags: ["adventure"], hints: [
      "It began in the 1990s.",
      "It's from Japan.",
      "It started on Nintendo's handheld and became the highest-grossing media franchise ever.",
      "Players catch creatures and train them to battle at gyms.",
      "Ash's partner is the electric mouse Pikachu."
    ] },
    { name: "Grand Theft Auto V", year: 2013, tags: ["adventure"], hints: [
      "It came out in the 2010s.",
      "It's an open-world crime adventure.",
      "It was made by Rockstar.",
      "It's set in Los Santos, a fictional version of Los Angeles.",
      "Players control three criminals: Michael, Franklin, and Trevor."
    ] },
    { name: "Mario Kart", year: 1992, tags: ["racing", "party"], hints: [
      "It first came out in the 1990s.",
      "It's a racing series.",
      "It's made by Nintendo.",
      "The dreaded blue shell targets whoever is in first place.",
      "Nintendo mascots race each other on tracks like Rainbow Road."
    ] },
    { name: "Call of Duty", year: 2003, tags: ["shooter"], hints: [
      "It first came out in the 2000s.",
      "It's a first-person shooter.",
      "It's published by Activision, now owned by Microsoft.",
      "Its 'Modern Warfare' and 'Black Ops' series are hugely popular.",
      "Its free battle royale mode is called Warzone."
    ] },
    { name: "Among Us", year: 2018, tags: ["party"], hints: [
      "It came out in 2018 but exploded in popularity in 2020.",
      "It's a multiplayer social deduction experience.",
      "It went viral during the 2020 pandemic lockdowns.",
      "Crewmates call emergency meetings to vote someone out.",
      "Colorful astronauts try to find the impostor sabotaging their spaceship."
    ] },
    { name: "Roblox", year: 2006, tags: ["sandbox", "party"], hints: [
      "It launched in the 2000s.",
      "It's an online platform especially popular with kids.",
      "Most of what people play on it is made by other users.",
      "Hits on it include Adopt Me! and Brookhaven.",
      "Its blocky avatars spend a currency called Robux."
    ] },
    { name: "The Sims", wiki: "The Sims (video game)", year: 2000, tags: ["sandbox"], hints: [
      "It came out in 2000.",
      "It's a life simulation.",
      "It was created by Will Wright, who also made SimCity.",
      "Players control people's careers, homes, and relationships, and can remove the pool ladder.",
      "Its characters speak a made-up language called Simlish and have green diamonds over their heads."
    ] },
    { name: "Animal Crossing: New Horizons", year: 2020, tags: ["sandbox"], hints: [
      "It came out in 2020.",
      "It's a relaxing life simulation.",
      "It's a Nintendo Switch exclusive that boomed during pandemic lockdowns.",
      "Players pay off loans to a raccoon named Tom Nook.",
      "You build a life on a deserted island with friendly villagers."
    ] },
    { name: "Pong", year: 1972, tags: ["party"], hints: [
      "It came out in the 1970s.",
      "It started in arcades.",
      "It was Atari's first big hit.",
      "It's often called the first commercially successful title of its kind.",
      "Two paddles bounce a ball back and forth, like table tennis."
    ] },
    { name: "Halo: Combat Evolved", year: 2001, tags: ["shooter"], hints: [
      "It came out in 2001.",
      "It's a sci-fi first-person shooter.",
      "It launched alongside Microsoft's first Xbox.",
      "Humans battle an alien alliance called the Covenant.",
      "Its armored hero is Master Chief, guided by the AI Cortana."
    ] },
    { name: "Street Fighter II", year: 1991, tags: ["racing"], hints: [
      "It came out in the 1990s.",
      "It started in arcades.",
      "It's from Capcom in Japan.",
      "It popularized one-on-one combat with special move button combos.",
      "Ryu throws Hadoukens, and Chun-Li has lightning-fast kicks."
    ] },
    { name: "Sonic the Hedgehog", wiki: "Sonic the Hedgehog (1991 video game)", year: 1991, tags: ["adventure"], hints: [
      "It came out in the 1990s.",
      "It's a fast-paced platformer.",
      "It was Sega's answer to Nintendo's famous mascot.",
      "The hero collects golden rings and fights Dr. Robotnik.",
      "A speedy blue hero with red sneakers spins into a ball to attack."
    ] },
    { name: "Angry Birds", year: 2009, tags: ["puzzle"], hints: [
      "It came out in 2009.",
      "It started on smartphones.",
      "It's from Finland, made by Rovio.",
      "Players use a slingshot to knock down structures.",
      "Furious feathered heroes attack green pigs who stole their eggs."
    ] },
    { name: "Candy Crush Saga", year: 2012, tags: ["puzzle"], hints: [
      "It came out in 2012.",
      "It started on Facebook and phones.",
      "It's a match-three puzzle made by King.",
      "It's known for thousands of levels and asking friends for extra lives.",
      "Players swap colorful sweets to line up three or more."
    ] },
    { name: "Space Invaders", year: 1978, tags: ["shooter"], hints: [
      "It came out in the 1970s.",
      "It started in arcades.",
      "It's from Japan, made by Taito.",
      "Its enemies march faster as you defeat them.",
      "Players shoot rows of descending pixel aliens."
    ] },
    { name: "Asteroids", wiki: "Asteroids (video game)", year: 1979, tags: ["shooter"], hints: [
      "It came out in the 1970s.",
      "It started in arcades.",
      "It was made by Atari.",
      "A flying saucer sometimes appears and shoots at you.",
      "A triangle-shaped ship blasts floating space rocks into smaller pieces."
    ] },
    { name: "Donkey Kong", wiki: "Donkey Kong (1981 video game)", year: 1981, tags: ["adventure"], hints: [
      "It came out in the 1980s.",
      "It started in arcades.",
      "It was Mario's first appearance, made by Nintendo.",
      "Players climb ladders and jump over rolling barrels.",
      "A giant ape carries a woman to the top of a construction site."
    ] },
    { name: "Frogger", year: 1981, tags: ["puzzle"], hints: [
      "It came out in the 1980s.",
      "It started in arcades.",
      "It was made by Konami.",
      "Players hop across logs and turtles on a river.",
      "A small green amphibian tries to cross a busy road."
    ] },
    { name: "Galaga", year: 1981, tags: ["shooter"], hints: [
      "It came out in the 1980s.",
      "It started in arcades.",
      "It's from Namco, the makers of Pac-Man.",
      "Enemies can capture your ship with a tractor beam.",
      "Swooping insect-like aliens attack your fighter ship."
    ] },
    { name: "Doom", wiki: "Doom (1993 video game)", year: 1993, tags: ["shooter"], hints: [
      "It came out in the 1990s.",
      "It's a first-person shooter.",
      "It was made by id Software and helped create its whole genre.",
      "It's famous for being ported to almost anything, even calculators.",
      "A space marine fights demons from Hell on the moons of Mars."
    ] },
    { name: "Mortal Kombat", wiki: "Mortal Kombat (1992 video game)", year: 1992, tags: ["racing"], hints: [
      "It came out in the 1990s.",
      "It started in arcades.",
      "Its violence helped lead to video age ratings in the US.",
      "Its gruesome finishing moves are called Fatalities.",
      "Scorpion pulls opponents in with a spear and yells 'Get over here!'"
    ] },
    { name: "Need for Speed", year: 1994, tags: ["racing"], hints: [
      "It first came out in the 1990s.",
      "It's a racing series.",
      "It's published by Electronic Arts.",
      "Many entries involve escaping police chases.",
      "Players race and tune real sports cars in street races."
    ] },
    { name: "Gran Turismo", year: 1997, tags: ["racing"], hints: [
      "It first came out in the 1990s.",
      "It's a realistic racing series.",
      "It's a PlayStation exclusive from Japan.",
      "Some of its top players became real professional race drivers.",
      "Its tagline calls it 'The Real Driving Simulator'."
    ] },
    { name: "Super Smash Bros.", year: 1999, tags: ["racing","party"], hints: [
      "It first came out in the 1990s.",
      "It's a fighting series.",
      "It's made by Nintendo.",
      "Instead of health bars, damage percentages rise until you're launched off the stage.",
      "Mario, Pikachu, Link, and Kirby battle each other."
    ] },
    { name: "Super Mario 64", year: 1996, tags: ["adventure"], hints: [
      "It came out in the 1990s.",
      "It's a 3D platformer.",
      "It launched alongside Nintendo's N64 console.",
      "Players collect Power Stars by jumping into paintings.",
      "The famous plumber explores Princess Peach's castle in full 3D."
    ] },
    { name: "Wii Sports", year: 2006, tags: ["party"], hints: [
      "It came out in the 2000s.",
      "It's a party-friendly collection of athletic events.",
      "It came bundled with a Nintendo console.",
      "Its bowling became a hit in retirement homes.",
      "Players swing a motion controller to play tennis, baseball, golf, and boxing."
    ] },
    { name: "Guitar Hero", year: 2005, tags: ["party"], hints: [
      "It came out in the 2000s.",
      "It's a music rhythm title.",
      "It was developed by Harmonix, who later made Rock Band.",
      "Players hit colored buttons in time with rock songs.",
      "Players strum a plastic six-string-shaped controller."
    ] },
    { name: "Portal", wiki: "Portal (video game)", year: 2007, tags: ["puzzle"], hints: [
      "It came out in the 2000s.",
      "It's a first-person puzzle.",
      "It was made by Valve.",
      "A passive-aggressive AI named GLaDOS promises you cake.",
      "Players solve test rooms with a device that creates linked blue and orange doorways."
    ] },
    { name: "The Last of Us", year: 2013, tags: ["adventure"], hints: [
      "It came out in the 2010s.",
      "It's a post-apocalyptic action adventure.",
      "It was made by Naughty Dog and became an HBO series.",
      "A fungal infection turns people into creatures called Clickers.",
      "Joel escorts a teenager named Ellie across a ruined America."
    ] },
    { name: "Rocket League", year: 2015, tags: ["racing","party"], hints: [
      "It came out in the 2010s.",
      "It's an online multiplayer sports title.",
      "It's free to play and owned by Epic.",
      "Players can boost, jump, and fly through the air.",
      "Jet-powered cars play soccer with a giant ball."
    ] },
    { name: "Overwatch", wiki: "Overwatch (video game)", year: 2016, tags: ["shooter"], hints: [
      "It came out in the 2010s.",
      "It's a team-based first-person shooter.",
      "It was made by Blizzard.",
      "Its heroes include Tracer, Mercy, and Reinhardt.",
      "Two teams of heroes with unique powers battle over objectives."
    ] },
    { name: "Pokémon GO", year: 2016, tags: ["adventure","party"], hints: [
      "It came out in 2016.",
      "It's played on smartphones while walking around outside.",
      "It uses augmented reality and real-world maps.",
      "Players gather at real landmarks that act as gyms and stops.",
      "Players catch creatures like Pikachu out in the real world."
    ] },
    { name: "Stardew Valley", year: 2016, tags: ["sandbox"], hints: [
      "It came out in 2016.",
      "It's a relaxing life simulation.",
      "It was made almost entirely by one developer.",
      "The hero inherits a run-down farm from their grandfather.",
      "Players grow crops, fish, mine, and befriend the residents of Pelican Town."
    ] },
    { name: "Elden Ring", year: 2022, tags: ["adventure"], hints: [
      "It came out in the 2020s.",
      "It's a dark fantasy action adventure.",
      "It's from FromSoftware, the makers of Dark Souls.",
      "George R.R. Martin helped write its world's backstory.",
      "Players explore the Lands Between, known for brutally hard bosses."
    ] }
  ],

  "Brands & Companies": [
    { name: "Apple", wiki: "Apple Inc.", year: 1976, tags: ["tech"], hints: [
      "It was founded in the 1970s.",
      "It's an American tech business.",
      "It's based in Cupertino, California.",
      "It was co-founded by Steve Jobs and Steve Wozniak.",
      "It makes the iPhone, Mac, and iPad."
    ] },
    { name: "Nike", wiki: "Nike, Inc.", year: 1964, tags: ["sportswear"], hints: [
      "It was founded in the 1960s.",
      "It's an American maker of sportswear.",
      "It's based in Beaverton, Oregon.",
      "Its slogan is 'Just Do It'.",
      "Its logo is a swoosh, and it makes Air Jordan sneakers."
    ] },
    { name: "McDonald's", year: 1940, tags: ["food"], hints: [
      "It traces its roots to the 1940s.",
      "It's a restaurant chain.",
      "It's one of the largest fast-food chains in the world.",
      "Its longtime mascot, Ronald, is a clown.",
      "It sells Big Macs and Happy Meals under the Golden Arches."
    ] },
    { name: "Coca-Cola", wiki: "The Coca-Cola Company", year: 1892, tags: ["food"], hints: [
      "Its signature product was invented in the 1880s.",
      "It sells drinks.",
      "It's based in Atlanta, Georgia.",
      "Its secret formula is famously guarded in a vault.",
      "It makes the world's best-known soda, famous for holiday ads with polar bears and Santa."
    ] },
    { name: "Amazon", wiki: "Amazon (company)", year: 1994, tags: ["retail", "tech"], hints: [
      "It was founded in the 1990s.",
      "It started as an online bookstore.",
      "It was founded by Jeff Bezos in Seattle.",
      "It runs AWS, the biggest cloud computing service.",
      "Its Prime membership gets fast free shipping, and its boxes have a smile logo."
    ] },
    { name: "Google", year: 1998, tags: ["tech"], hints: [
      "It was founded in the 1990s.",
      "It's an American tech business.",
      "It was founded by Larry Page and Sergey Brin at Stanford.",
      "Its parent is called Alphabet, and it owns YouTube.",
      "Its name became a verb meaning to search the web."
    ] },
    { name: "LEGO", wiki: "The Lego Group", year: 1932, tags: ["entertainment"], hints: [
      "It was founded in the 1930s.",
      "It makes toys.",
      "It's from Denmark.",
      "Its name comes from Danish words meaning 'play well'.",
      "Its interlocking plastic bricks are painful to step on."
    ] },
    { name: "Disney", wiki: "The Walt Disney Company", year: 1923, tags: ["entertainment"], hints: [
      "It was founded in the 1920s.",
      "It's an entertainment business.",
      "It owns Pixar, Marvel, and Lucasfilm.",
      "It runs theme parks in Florida, California, Paris, Tokyo, and more.",
      "Its mascot is Mickey Mouse."
    ] },
    { name: "Tesla", wiki: "Tesla, Inc.", year: 2003, tags: ["cars"], hints: [
      "It was founded in the 2000s.",
      "It makes vehicles and energy products.",
      "It's led by Elon Musk.",
      "It also sells home batteries and solar roofs.",
      "It's the best-known electric car maker, with the Model S, 3, X, and Y."
    ] },
    { name: "Starbucks", year: 1971, tags: ["food"], hints: [
      "It was founded in the 1970s.",
      "It's a café chain.",
      "Its first store was in Seattle's Pike Place Market.",
      "It's known for writing (and misspelling) customers' names on cups.",
      "Its green logo shows a two-tailed siren, and it sells Frappuccinos."
    ] },
    { name: "Netflix", year: 1997, tags: ["entertainment", "tech"], hints: [
      "It was founded in the 1990s.",
      "It started by mailing DVDs.",
      "It's based in Los Gatos, California.",
      "It made 'Stranger Things' and 'Squid Game'.",
      "It's the streaming service with the 'ta-dum' sound and a red N logo."
    ] },
    { name: "IKEA", year: 1943, tags: ["retail"], hints: [
      "It was founded in the 1940s.",
      "It sells home furniture.",
      "It's from Sweden.",
      "Its stores have a one-way maze layout and a café that sells meatballs.",
      "Its flat-pack furniture comes with wordless assembly instructions and an Allen key."
    ] },
    { name: "Toyota", wiki: "Toyota", year: 1937, tags: ["cars"], hints: [
      "It was founded in the 1930s.",
      "It makes vehicles.",
      "It's from Japan.",
      "It pioneered 'just-in-time' manufacturing and makes the Prius hybrid.",
      "It makes the Camry and the Corolla, one of the best-selling cars ever."
    ] },
    { name: "Samsung", year: 1938, tags: ["tech"], hints: [
      "It was founded in the 1930s.",
      "It's a giant electronics maker.",
      "It's from South Korea.",
      "It started as a small trading business selling dried fish and noodles.",
      "It makes Galaxy phones and is Apple's biggest smartphone rival."
    ] },
    { name: "Walmart", year: 1962, tags: ["retail"], hints: [
      "It was founded in the 1960s.",
      "It's a retail chain.",
      "It was founded by Sam Walton in Arkansas.",
      "It's the world's largest retailer and largest private employer.",
      "Its logo is a yellow spark, and its slogan is 'Save money. Live better.'"
    ] },
    { name: "Microsoft", year: 1975, tags: ["tech"], hints: [
      "It was founded in the 1970s.",
      "It's an American tech business.",
      "It's based in Redmond, Washington.",
      "It was co-founded by Bill Gates and Paul Allen.",
      "It makes Windows, Office, and the Xbox."
    ] },
    { name: "Adidas", year: 1949, tags: ["sportswear"], hints: [
      "It was founded in the 1940s.",
      "It makes sportswear.",
      "It's from Germany.",
      "Its founder's brother started rival sportswear maker Puma.",
      "Its logo has three stripes."
    ] },
    { name: "Nintendo", year: 1889, tags: ["entertainment"], hints: [
      "It was founded in the 1880s.",
      "It started by making playing cards.",
      "It's from Japan, based in Kyoto.",
      "It made the NES, the Game Boy, and the Wii.",
      "It's home to Mario and Zelda, and its current console is the Switch."
    ] },
    { name: "Red Bull", wiki: "Red Bull GmbH", year: 1987, tags: ["food"], hints: [
      "It was founded in the 1980s.",
      "It sells drinks.",
      "It's from Austria.",
      "It sponsors extreme sports, a Formula 1 team, and a famous skydive from the edge of space.",
      "Its energy drink slogan says it gives you wings."
    ] },
    { name: "Costco", year: 1983, tags: ["retail"], hints: [
      "It was founded in the 1980s.",
      "It's a retail chain.",
      "It's based in Issaquah, Washington, near Seattle.",
      "Its $1.50 hot dog and soda combo hasn't changed price since the 1980s.",
      "It's a members-only warehouse club that sells Kirkland Signature products."
    ] },
    { name: "Puma", wiki: "Puma (brand)", year: 1948, tags: ["sportswear"], hints: [
      "It was founded in the 1940s.",
      "It makes sportswear.",
      "It's from Germany.",
      "Its founder's brother started rival Adidas.",
      "Its logo is a leaping big cat."
    ] },
    { name: "Under Armour", year: 1996, tags: ["sportswear"], hints: [
      "It was founded in the 1990s.",
      "It makes athletic clothing.",
      "It's based in Baltimore, Maryland.",
      "It started with sweat-wicking shirts worn beneath football pads.",
      "Its logo is an interlocking U and A."
    ] },
    { name: "Lululemon", year: 1998, tags: ["sportswear"], hints: [
      "It was founded in the 1990s.",
      "It makes athletic clothing.",
      "It's from Vancouver, Canada.",
      "It became famous for women's yoga pants.",
      "Its red logo is a stylized letter A that looks like a curl of hair."
    ] },
    { name: "Ford", wiki: "Ford Motor Company", year: 1903, tags: ["cars"], hints: [
      "It was founded in the 1900s.",
      "It makes vehicles.",
      "It's based in Dearborn, Michigan.",
      "Its founder popularized the moving assembly line with the Model T.",
      "It makes the Mustang and the F-150, America's best-selling pickup."
    ] },
    { name: "Ferrari", year: 1947, tags: ["cars"], hints: [
      "It was founded in the 1940s.",
      "It makes vehicles.",
      "It's from Maranello, Italy.",
      "It's the most successful team in Formula 1 history.",
      "Its red sports cars carry a prancing horse logo."
    ] },
    { name: "BMW", year: 1916, tags: ["cars"], hints: [
      "It was founded in the 1910s.",
      "It makes vehicles.",
      "It's from Munich, Germany.",
      "It started out making aircraft engines.",
      "Its blue-and-white round logo appears on cars and motorcycles, and it owns Mini."
    ] },
    { name: "Honda", year: 1948, tags: ["cars"], hints: [
      "It was founded in the 1940s.",
      "It makes vehicles and engines.",
      "It's from Japan.",
      "It's the world's largest motorcycle maker.",
      "It makes the Civic and the Accord."
    ] },
    { name: "Meta", wiki: "Meta Platforms", year: 2004, tags: ["tech"], hints: [
      "It was founded in the 2000s.",
      "It's an American tech business.",
      "It was started by Mark Zuckerberg in a Harvard dorm room.",
      "It owns Instagram and WhatsApp.",
      "It renamed itself in 2021, but most people still call it Facebook."
    ] },
    { name: "YouTube", year: 2005, tags: ["entertainment","tech"], hints: [
      "It was founded in the 2000s.",
      "It's an online platform.",
      "Google bought it in 2006.",
      "Its first upload was a 19-second clip filmed at the San Diego Zoo.",
      "It's the world's biggest video-sharing site."
    ] },
    { name: "Spotify", year: 2006, tags: ["entertainment","tech"], hints: [
      "It was founded in the 2000s.",
      "It's an online platform.",
      "It's from Sweden.",
      "It sends every user a personalized year-end recap called Wrapped.",
      "It's the world's most popular music streaming service, with a green logo."
    ] },
    { name: "TikTok", year: 2016, tags: ["entertainment","tech"], hints: [
      "It launched in the 2010s.",
      "It's a smartphone app.",
      "It's owned by ByteDance, from China.",
      "Its 'For You' page is famous for its powerful algorithm.",
      "It's the short-video app known for viral dances and trends."
    ] },
    { name: "Uber", year: 2009, tags: ["tech"], hints: [
      "It was founded in the 2000s.",
      "It's a tech business based in San Francisco.",
      "Its name became a verb for getting a ride.",
      "It also delivers food through its Eats service.",
      "It's the app that lets you hail a ride in a stranger's car."
    ] },
    { name: "Airbnb", year: 2008, tags: ["tech"], hints: [
      "It was founded in the 2000s.",
      "It's a tech business based in San Francisco.",
      "Its founders started by renting out air mattresses in their apartment.",
      "Its looping logo is called the Bélo.",
      "It's the app for booking stays in people's homes."
    ] },
    { name: "Pepsi", year: 1898, tags: ["food"], hints: [
      "It was created in the 1890s.",
      "It sells drinks.",
      "It was invented by a pharmacist in North Carolina.",
      "Its 'Challenge' blind taste tests targeted its biggest rival.",
      "It's Coca-Cola's main rival, with a red, white, and blue logo."
    ] },
    { name: "Subway", wiki: "Subway (restaurant)", year: 1965, tags: ["food"], hints: [
      "It was founded in the 1960s.",
      "It's a restaurant chain.",
      "It has more locations than almost any other restaurant chain.",
      "Its slogan was 'Eat Fresh'.",
      "It sells footlong sandwiches made to order."
    ] },
    { name: "Chick-fil-A", year: 1946, tags: ["food"], hints: [
      "It traces its roots to the 1940s.",
      "It's a restaurant chain.",
      "It's based in Atlanta, Georgia.",
      "Its restaurants are closed on Sundays.",
      "Its cow mascots tell people to eat more chicken."
    ] },
    { name: "Target", wiki: "Target Corporation", year: 1902, tags: ["retail"], hints: [
      "It was founded in the 1900s.",
      "It's a retail chain.",
      "It's based in Minneapolis, Minnesota.",
      "Its mascot is a white bull terrier named Bullseye.",
      "Its logo is a red bullseye."
    ] },
    { name: "Mattel", year: 1945, tags: ["entertainment"], hints: [
      "It was founded in the 1940s.",
      "It makes toys.",
      "It's based in California.",
      "It makes Hot Wheels and UNO.",
      "It created the Barbie doll."
    ] },
    { name: "Sony", year: 1946, tags: ["tech","entertainment"], hints: [
      "It was founded in the 1940s.",
      "It's a giant electronics and entertainment business.",
      "It's from Japan.",
      "It invented the Walkman portable music player.",
      "It makes the PlayStation."
    ] },
    { name: "Domino's", year: 1960, tags: ["food"], hints: [
      "It was founded in the 1960s.",
      "It's a restaurant chain.",
      "It was founded in Michigan.",
      "It once promised delivery in 30 minutes or less.",
      "It's a pizza chain whose logo is a game tile with three dots."
    ] }
  ],

  Anime: [
    { name: "Naruto", year: 2002, tags: ["action"], hints: [
      "It first aired in the 2000s.",
      "It's an action series based on a manga.",
      "It's about ninjas.",
      "The hero has a nine-tailed fox sealed inside him.",
      "An orange-clad ninja from the Hidden Leaf Village dreams of becoming Hokage."
    ] },
    { name: "One Piece", year: 1999, tags: ["action"], hints: [
      "It first aired in the 1990s.",
      "It's an adventure series based on a manga.",
      "It has more than 1,000 episodes and is still going.",
      "Its hero has a stretchy rubber body after eating a Devil Fruit.",
      "Monkey D. Luffy and the Straw Hat Pirates hunt for the ultimate treasure."
    ] },
    { name: "Dragon Ball Z", year: 1989, tags: ["action"], hints: [
      "It first aired in the 1980s.",
      "It's an action series based on a manga.",
      "It was created by Akira Toriyama.",
      "Fighters power up with screaming transformations and battle Frieza and Cell.",
      "Goku goes Super Saiyan and fires the Kamehameha."
    ] },
    { name: "Attack on Titan", year: 2013, tags: ["action", "dark"], hints: [
      "It first aired in the 2010s.",
      "It's a dark action series based on a manga.",
      "Humanity lives behind enormous walls.",
      "Soldiers use grappling gear to slash the napes of giant monsters' necks.",
      "Eren Yeager vows to wipe out the man-eating giants."
    ] },
    { name: "Death Note", year: 2006, tags: ["dark"], hints: [
      "It first aired in the 2000s.",
      "It's a psychological thriller based on a manga.",
      "A genius student battles a mysterious detective known only as L.",
      "A grim reaper called Ryuk is obsessed with apples.",
      "A notebook kills anyone whose name is written in it."
    ] },
    { name: "Demon Slayer", wiki: "Demon Slayer: Kimetsu no Yaiba", year: 2019, tags: ["action"], hints: [
      "It first aired in 2019.",
      "It's an action series based on a manga.",
      "It's set in Japan in the early 1900s.",
      "Its 'Mugen Train' movie became Japan's highest-grossing film ever.",
      "Tanjiro fights man-eating creatures to save his sister Nezuko, who wears a bamboo muzzle."
    ] },
    { name: "My Hero Academia", year: 2016, tags: ["action"], hints: [
      "It first aired in the 2010s.",
      "It's a superhero action series based on a manga.",
      "Almost everyone in its world has a superpower called a Quirk.",
      "Students train at U.A. High School to become pro heroes.",
      "Deku, born without powers, inherits All Might's power, One For All."
    ] },
    { name: "Sailor Moon", year: 1992, tags: ["action"], hints: [
      "It first aired in the 1990s.",
      "It's a magical girl series based on a manga.",
      "Its heroines transform using magical brooches and wands.",
      "Each heroine is named after a planet in the solar system.",
      "Usagi Tsukino and her talking cat Luna lead a team of teen warriors."
    ] },
    { name: "Fullmetal Alchemist: Brotherhood", year: 2009, tags: ["action"], hints: [
      "It first aired in the 2000s.",
      "It's a fantasy adventure based on a manga.",
      "Its magic follows a rule called equivalent exchange.",
      "Two young siblings lose parts of their bodies trying to bring their mother back to life.",
      "Edward Elric has a metal arm, and his younger sibling Alphonse lives in a suit of armor."
    ] },
    { name: "Neon Genesis Evangelion", year: 1995, tags: ["scifi", "dark"], hints: [
      "It first aired in the 1990s.",
      "It's a sci-fi series about giant robots.",
      "It's known for its psychological themes and a famously confusing ending.",
      "Teenagers pilot giant bio-machines to fight beings called Angels.",
      "Shinji Ikari is ordered by his father to get in the robot."
    ] },
    { name: "Cowboy Bebop", year: 1998, tags: ["scifi"], hints: [
      "It first aired in the 1990s.",
      "It's a sci-fi series with a jazz soundtrack.",
      "It's set in 2071, across the solar system.",
      "Its crew travels aboard a spaceship and is always broke.",
      "Bounty hunter Spike Spiegel smokes, slouches, and does kung fu."
    ] },
    { name: "Jujutsu Kaisen", year: 2020, tags: ["action", "dark"], hints: [
      "It first aired in 2020.",
      "It's a supernatural action series based on a manga.",
      "Sorcerers fight cursed spirits born from negative human emotions.",
      "Its most powerful teacher, Gojo, wears a blindfold.",
      "Yuji Itadori swallows a finger of the King of Curses, Sukuna."
    ] },
    { name: "Spy × Family", wiki: "Spy × Family", year: 2022, tags: ["comedy", "action"], hints: [
      "It first aired in 2022.",
      "It's an action comedy based on a manga.",
      "It's set during a cold war between two made-up countries.",
      "Its stand-in mother is secretly a professional assassin.",
      "A secret agent's adopted daughter, Anya, can read minds."
    ] },
    { name: "Hunter × Hunter", wiki: "Hunter × Hunter", year: 2011, tags: ["action"], hints: [
      "It first aired in 1999, with a famous remake in 2011.",
      "It's an adventure series based on a manga.",
      "Its creator is known for long breaks between chapters.",
      "Its power system is called Nen.",
      "Gon Freecss takes a brutal exam hoping to find his father."
    ] },
    { name: "One-Punch Man", year: 2015, tags: ["comedy", "action"], hints: [
      "It first aired in the 2010s.",
      "It's a superhero comedy.",
      "It started as a webcomic.",
      "The hero is bored because no enemy can give him a real fight.",
      "Bald hero Saitama defeats every enemy with a single hit."
    ] },
    { name: "Sword Art Online", year: 2012, tags: ["scifi", "action"], hints: [
      "It first aired in the 2010s.",
      "It's a sci-fi adventure based on light novels.",
      "Thousands of players get trapped inside a virtual reality world.",
      "Dying in the virtual world means dying in real life.",
      "Kirito fights with two blades alongside Asuna."
    ] },
    { name: "Chainsaw Man", year: 2022, tags: ["dark", "action"], hints: [
      "It first aired in 2022.",
      "It's a gory action series based on a manga.",
      "In its world, devils are born from human fears.",
      "Its hero, Denji, is a poor teenager buried in debt.",
      "Denji merges with his little devil dog Pochita and sprouts roaring power-tool blades."
    ] },
    { name: "Bleach", wiki: "Bleach (TV series)", year: 2004, tags: ["action"], hints: [
      "It first aired in the 2000s.",
      "It's a supernatural action series based on a manga.",
      "Its warriors carry swords called Zanpakutō.",
      "Soul Reapers protect the living from evil spirits called Hollows.",
      "Orange-haired teen Ichigo Kurosaki becomes a Soul Reaper."
    ] },
    { name: "Haikyu!!", wiki: "Haikyu!!", year: 2014, tags: ["sports"], hints: [
      "It first aired in the 2010s.",
      "It's a sports series based on a manga.",
      "It follows a high school team in Miyagi Prefecture.",
      "Its short hero idolizes a former player called 'the Little Giant'.",
      "Hinata and Kageyama play volleyball for Karasuno High."
    ] },
    { name: "Yu-Gi-Oh!", wiki: "Yu-Gi-Oh! Duel Monsters", year: 2000, tags: ["action"], hints: [
      "Its best-known version first aired in 2000.",
      "It's an action series based on a manga.",
      "It launched a hugely successful trading card franchise.",
      "The hero solves an ancient Egyptian puzzle and gains a spirit partner.",
      "Yugi summons the Dark Magician and duels Kaiba's Blue-Eyes White Dragon."
    ] },
    { name: "Astro Boy", wiki: "Astro Boy (1963 TV series)", year: 1963, tags: ["scifi","action"], hints: [
      "It first aired in the 1960s.",
      "It's a black-and-white sci-fi series based on a manga.",
      "It was created by Osamu Tezuka, called the 'God of Manga'.",
      "Its hero has rocket boots and machine guns in his hips.",
      "A robot child built to replace a scientist's lost son fights for justice."
    ] },
    { name: "Speed Racer", year: 1967, tags: ["action"], hints: [
      "It first aired in the 1960s.",
      "It's an action series based on a manga.",
      "Its original Japanese title is 'Mach GoGoGo'.",
      "A mysterious masked rival turns out to be the hero's long-lost brother.",
      "A young driver competes in the gadget-filled Mach 5 car."
    ] },
    { name: "Mobile Suit Gundam", year: 1979, tags: ["scifi","action"], hints: [
      "It first aired in the 1970s.",
      "It's a sci-fi war series.",
      "It started a huge franchise famous for plastic model kits.",
      "Its masked rival pilot Char Aznable flies a red machine.",
      "Amuro Ray pilots the giant white RX-78-2 robot."
    ] },
    { name: "Doraemon", year: 1979, tags: ["comedy"], hints: [
      "It first aired in the 1970s.",
      "It's a comedy series for kids, based on a manga.",
      "Japan named its main character an official cultural ambassador.",
      "Its hero pulls futuristic gadgets from a four-dimensional pocket.",
      "A blue robot cat from the 22nd century helps a lazy boy named Nobita."
    ] },
    { name: "Captain Tsubasa", year: 1983, tags: ["sports"], hints: [
      "It first aired in the 1980s.",
      "It's a sports series based on a manga.",
      "It inspired many real professional players in Japan and Europe.",
      "Its matches are famous for impossibly long fields and dramatic shots.",
      "A boy who loves soccer dreams of winning the World Cup for Japan."
    ] },
    { name: "Akira", wiki: "Akira (1988 film)", year: 1988, tags: ["scifi","dark"], hints: [
      "It came out in the 1980s.",
      "It's a dark sci-fi movie based on a manga.",
      "It's set in Neo-Tokyo after a world war.",
      "Its red motorcycle slide has been copied countless times.",
      "Biker gang leader Kaneda tries to stop his friend Tetsuo, who gains psychic powers."
    ] },
    { name: "Ranma ½", year: 1989, tags: ["comedy","action"], hints: [
      "It first aired in the 1980s.",
      "It's a martial arts comedy based on a manga.",
      "It was created by Rumiko Takahashi.",
      "Its characters fell into cursed springs in China.",
      "A teen martial artist turns into a girl when splashed with cold water."
    ] },
    { name: "Slam Dunk", wiki: "Slam Dunk (manga)", year: 1993, tags: ["sports"], hints: [
      "It first aired in the 1990s.",
      "It's a sports series based on a manga.",
      "It made basketball hugely popular in Japan.",
      "Its 2022 movie was a huge box office hit.",
      "Delinquent Hanamichi Sakuragi joins Shohoku High's team to impress a girl."
    ] },
    { name: "Detective Conan", wiki: "Case Closed", year: 1996, tags: ["dark"], hints: [
      "It first aired in the 1990s.",
      "It's a mystery series based on a manga.",
      "It has more than 1,000 episodes.",
      "In the US, it's known as 'Case Closed'.",
      "A teen sleuth shrunk into a child's body solves murders with gadgets."
    ] },
    { name: "Gintama", year: 2006, tags: ["comedy","action"], hints: [
      "It first aired in the 2000s.",
      "It's a comedy series based on a manga.",
      "It's set in an alternate Edo-period Japan taken over by aliens.",
      "It constantly breaks the fourth wall and parodies other series.",
      "Silver-haired samurai Gintoki takes odd jobs and loves strawberry milk."
    ] },
    { name: "Ouran High School Host Club", year: 2006, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a romantic comedy based on a manga.",
      "It's set at an elite private academy.",
      "A scholarship student breaks a vase worth 8 million yen.",
      "Haruhi pays off a debt by dressing as a boy and entertaining girls."
    ] },
    { name: "Code Geass", year: 2006, tags: ["scifi","dark"], hints: [
      "It first aired in the 2000s.",
      "It's a sci-fi drama with giant robots.",
      "In it, Japan has been conquered by the Holy Britannian Empire.",
      "Its hero can command anyone with a single glance.",
      "Exiled prince Lelouch leads a rebellion as the masked Zero."
    ] },
    { name: "Steins;Gate", year: 2011, tags: ["scifi"], hints: [
      "It first aired in the 2010s.",
      "It's a sci-fi thriller based on a visual novel.",
      "It's set in Tokyo's Akihabara district.",
      "Its characters send texts to the past using a microwave.",
      "Self-proclaimed mad scientist Okabe battles to undo time-travel disasters."
    ] },
    { name: "Kuroko's Basketball", year: 2012, tags: ["sports"], hints: [
      "It first aired in the 2010s.",
      "It's a sports series based on a manga.",
      "Its main team is from Seirin High.",
      "Its rivals were all part of the legendary 'Generation of Miracles'.",
      "A nearly invisible player specializes in sneaky passes on the court."
    ] },
    { name: "Tokyo Ghoul", year: 2014, tags: ["dark","action"], hints: [
      "It first aired in the 2010s.",
      "It's a dark fantasy based on a manga.",
      "Its creatures can only survive by eating human flesh.",
      "Its opening song 'Unravel' is hugely famous.",
      "College student Kaneki becomes half-monster after an organ transplant."
    ] },
    { name: "Mob Psycho 100", year: 2016, tags: ["comedy","action"], hints: [
      "It first aired in the 2010s.",
      "It's an action comedy based on a manga.",
      "It was created by ONE, who also made One-Punch Man.",
      "Its hero's emotions build toward an explosion meter.",
      "A shy middle schooler with huge psychic powers works for a con-artist medium."
    ] },
    { name: "Kaguya-sama: Love Is War", year: 2019, tags: ["comedy"], hints: [
      "It first aired in 2019.",
      "It's a romantic comedy based on a manga.",
      "It's set in an elite academy's student council.",
      "A narrator dramatically announces who 'won' each episode.",
      "Two proud geniuses each refuse to confess their feelings first."
    ] },
    { name: "Blue Lock", year: 2022, tags: ["sports"], hints: [
      "It first aired in 2022.",
      "It's a sports series based on a manga.",
      "It's about soccer.",
      "Japan's football union locks 300 strikers in a prison-like training facility.",
      "Isagi competes to become the world's most selfish striker."
    ] },
    { name: "Frieren: Beyond Journey's End", year: 2023, tags: ["action"], hints: [
      "It first aired in 2023.",
      "It's a fantasy adventure based on a manga.",
      "It begins after the heroes have already defeated the Demon King.",
      "Its main character lives for more than 1,000 years.",
      "An elf mage reflects on her late human companion Himmel."
    ] },
    { name: "Dandadan", year: 2024, tags: ["comedy","action"], hints: [
      "It first aired in 2024.",
      "It's a supernatural action comedy based on a manga.",
      "It mixes aliens with Japanese ghosts and spirits.",
      "Its first opening song, 'Otonoke', went viral.",
      "Momo believes in ghosts, and Okarun believes in aliens."
    ] }
  ]
};

/*
  FILTERS
  =======
  Each category lists its filter groups. Two kinds:
  - Year groups ("years"): use the item's  year: 1999  and the buckets in YEAR_BUCKETS.
  - Tag groups ("options"): use the item's  tags: ["rock", "pop"]  (keys on the left below).
  Every item needs a year if its category has a year group, and at least one tag
  from each tag group (except where a group is marked optional).
  Picking several options in one group = any of them. Across groups = all of them.
*/
window.YEAR_BUCKETS = {
  era: [
    { key: "pre1980", label: "Before 1980", to: 1979 },
    { key: "1980s", label: "1980s", from: 1980, to: 1989 },
    { key: "1990s", label: "1990s", from: 1990, to: 1999 },
    { key: "2000s", label: "2000s", from: 2000, to: 2009 },
    { key: "2010s", label: "2010s and later", from: 2010 }
  ],
  founded: [
    { key: "pre1950", label: "Before 1950", to: 1949 },
    { key: "1950to1999", label: "1950–1999", from: 1950, to: 1999 },
    { key: "2000plus", label: "2000+", from: 2000 }
  ]
};

window.FILTERS = {
  Celebrities: [
    { id: "field", label: "Field", options: { music: "Music", acting: "Acting & TV", sports: "Sports" } }
  ],
  Places: [
    { id: "region", label: "Region", options: { north_america: "North America", south_america: "South America", europe: "Europe", asia: "Asia", africa: "Africa", oceania: "Oceania & Antarctica" } },
    { id: "type", label: "Type", options: { natural: "Natural wonder", landmark: "Landmark", city: "City & Region" } }
  ],
  Movies: [
    { id: "era", label: "Era", years: "era" },
    { id: "genre", label: "Genre", options: { animated: "Animated", action: "Action & Sci-fi", drama: "Drama", comedy: "Comedy" } }
  ],
  Songs: [
    { id: "era", label: "Era", years: "era" },
    { id: "genre", label: "Genre", options: { rock: "Rock", pop: "Pop", rnb: "R&B & Soul", hiphop: "Hip-hop & Latin" } }
  ],
  Animals: [
    { id: "group", label: "Group", options: { mammal: "Mammals", bird: "Birds", sea: "Sea life", reptile: "Reptiles & Amphibians" } }
  ],
  Foods: [
    { id: "type", label: "Type", options: { breakfast: "Breakfast", mains: "Mains", snacks: "Snacks", desserts: "Desserts" } },
    { id: "origin", label: "Origin", optional: true, options: { american: "American", italian: "Italian", asian: "Asian", mexican: "Mexican", european: "European" } }
  ],
  "TV Shows": [
    { id: "era", label: "Era", years: "era" },
    { id: "genre", label: "Genre", options: { comedy: "Comedy", drama: "Drama", scifi: "Sci-fi & Fantasy", animated: "Animated & Kids", reality: "Reality & Variety" } }
  ],
  "Video Games": [
    { id: "era", label: "Era", years: "era" },
    { id: "type", label: "Type", options: { adventure: "Adventure & Platformer", shooter: "Shooter", puzzle: "Puzzle", racing: "Racing & Fighting", sandbox: "Sandbox & Life sim", party: "Party & Social" } }
  ],
  Anime: [
    { id: "era", label: "Era", years: "era" },
    { id: "genre", label: "Genre", options: { action: "Action & Adventure", scifi: "Sci-fi", dark: "Dark & Thriller", comedy: "Comedy", sports: "Sports" } }
  ],
  "Brands & Companies": [
    { id: "industry", label: "Industry", options: { tech: "Tech", food: "Food & Drink", retail: "Retail", sportswear: "Sportswear", entertainment: "Entertainment & Toys", cars: "Cars" } },
    { id: "founded", label: "Founded", years: "founded" }
  ]
};
