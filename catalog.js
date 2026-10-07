/*
  ITEM CATALOG for Twenty Questions Duel
  ======================================
  To add an item, copy one { ... } block inside a category and change it:

    { name: "Display name", wiki: "Exact Wikipedia title (optional)", hints: [
        "Hint 1: extremely vague",
        "Hint 2: vague",
        "Hint 3: moderate",
        "Hint 4: specific",
        "Hint 5: near giveaway"
    ] },

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
    { name: "Taylor Swift", hints: [
      "This person is a woman who became famous as a teenager.",
      "She is an American known mainly for music.",
      "She started out in country music before switching to pop.",
      "Her tour celebrating each 'era' of her career became the highest-grossing tour ever.",
      "She re-recorded her old albums and released them as '(___'s Version)'."
    ] },
    { name: "Beyoncé", hints: [
      "This person is a woman famous for performing on stage.",
      "She is an American singer who first got famous in a girl group in the late 1990s.",
      "She was the lead singer of Destiny's Child.",
      "Her best-known work includes the visual album 'Lemonade' and the song 'Single Ladies'.",
      "She is married to Jay-Z and released the country album 'Cowboy Carter'."
    ] },
    { name: "Oprah Winfrey", hints: [
      "This person is an American woman known to millions through TV.",
      "She became one of the most famous talk show hosts in the world.",
      "Her daytime talk show ran for 25 seasons, from 1986 to 2011.",
      "She once gave every member of her studio audience a free car.",
      "She runs the OWN network, and her book club can turn any book into a bestseller."
    ] },
    { name: "Tom Hanks", hints: [
      "This person is an American man who works in entertainment.",
      "He is an actor known for warm, everyman roles.",
      "He won back-to-back Best Actor Oscars in the 1990s.",
      "He was stranded on an island with a volleyball named Wilson in 'Cast Away'.",
      "He played Forrest Gump and voices Woody in 'Toy Story'."
    ] },
    { name: "Michael Jordan", hints: [
      "This person is an American man famous in sports.",
      "He played a team sport professionally in the 1980s and 1990s.",
      "He won six NBA championships.",
      "He played for the Chicago Bulls and wore number 23.",
      "His Nike sneaker line is called 'Air ___'."
    ] },
    { name: "Serena Williams", hints: [
      "This person is an American woman famous in sports.",
      "She dominated an individual sport played with a racket.",
      "She won 23 Grand Slam singles titles.",
      "Her older sister Venus is also a champion in the same sport.",
      "She won the 2017 Australian Open while pregnant."
    ] },
    { name: "Elvis Presley", hints: [
      "This person is an American man who died in the 1970s.",
      "He was a hugely famous singer in the 1950s.",
      "He is known as the King of Rock and Roll.",
      "His Memphis home, Graceland, is a major tourist attraction.",
      "His hits include 'Hound Dog' and 'Jailhouse Rock', and his swiveling hips shocked TV audiences."
    ] },
    { name: "Marilyn Monroe", hints: [
      "This person is an American woman who died in the 1960s.",
      "She was a Hollywood movie star of the 1950s.",
      "She was a famous blonde bombshell and sex symbol.",
      "A famous photo shows her white dress billowing up over a subway grate.",
      "She starred in 'Some Like It Hot' and sang a breathy birthday song to President Kennedy."
    ] },
    { name: "Leonardo DiCaprio", hints: [
      "This person is an American man who works in entertainment.",
      "He is a movie actor who became a teen heartthrob in the 1990s.",
      "He won his first Oscar for 'The Revenant' after many nominations.",
      "He has made many films with director Martin Scorsese.",
      "He played Jack in 'Titanic' and shouted that he was king of the world at the ship's bow."
    ] },
    { name: "Dwayne Johnson", hints: [
      "This person is a man famous for performing for huge audiences.",
      "He became famous in pro wrestling before he started acting.",
      "He played college football at the University of Miami.",
      "He voiced the demigod Maui in Disney's 'Moana'.",
      "His wrestling nickname is 'The Rock', and he is known for raising one eyebrow."
    ] },
    { name: "Lady Gaga", hints: [
      "This person is an American woman famous for performing on stage.",
      "She is a pop singer famous for outrageous outfits.",
      "She once wore a dress made of raw meat to an awards show.",
      "She won an Oscar for the song 'Shallow' from 'A Star Is Born'.",
      "Her hits include 'Poker Face' and 'Bad Romance'."
    ] },
    { name: "Michael Jackson", hints: [
      "This person is an American man who died in the 2000s.",
      "He was a singer who started performing as a child with his brothers.",
      "He is called the King of Pop.",
      "He was famous for the moonwalk and wearing a single sparkly glove.",
      "His album 'Thriller' is the best-selling album of all time."
    ] },
    { name: "Lionel Messi", hints: [
      "This person is a man famous in sports.",
      "He plays the world's most popular team sport and is from South America.",
      "He has won the Ballon d'Or a record eight times.",
      "He spent most of his career at FC Barcelona and now plays in Miami.",
      "He captained Argentina to win the 2022 World Cup."
    ] },
    { name: "Rihanna", hints: [
      "This person is a woman famous in entertainment and business.",
      "She is a singer from the Caribbean.",
      "She is from Barbados.",
      "She founded the makeup brand Fenty Beauty.",
      "Her hits include 'Umbrella' and 'Diamonds'."
    ] },
    { name: "Keanu Reeves", hints: [
      "This person is a man famous for appearing on screen.",
      "He is an actor raised in Canada, known for action movies.",
      "He is known for being unusually kind and humble in real life.",
      "He plays a retired hitman who seeks revenge after someone kills his dog.",
      "He played Neo in 'The Matrix' and stars as John Wick."
    ] },
    { name: "Simone Biles", hints: [
      "This person is an American woman famous in sports.",
      "She competes in an Olympic sport scored by judges.",
      "She is the most decorated gymnast in history.",
      "Several moves in her sport are officially named after her.",
      "She won the Olympic all-around gold in both 2016 and 2024."
    ] },
    { name: "Usain Bolt", hints: [
      "This person is a man famous in sports.",
      "He is from the Caribbean and competed in the Olympics.",
      "He is from Jamaica.",
      "He holds the world records in both the 100m and 200m sprints.",
      "His victory pose looks like he's firing an arrow into the sky, and he ran 100m in 9.58 seconds."
    ] },
    { name: "Muhammad Ali", hints: [
      "This person is an American man who died in 2016.",
      "He was a famous athlete in a combat sport.",
      "He was a heavyweight boxing champion who called himself 'The Greatest'.",
      "He was born Cassius Clay and refused to be drafted into the Vietnam War.",
      "He said he could float like a butterfly and sting like a bee."
    ] },
    { name: "Dolly Parton", hints: [
      "This person is an American woman famous for performing.",
      "She is a country singer from Tennessee.",
      "She has her own theme park in the Smoky Mountains.",
      "Her Imagination Library has given millions of free books to children.",
      "She wrote 'Jolene' and '9 to 5'."
    ] },
    { name: "LeBron James", hints: [
      "This person is an American man famous in sports.",
      "He has played basketball professionally since 2003.",
      "He is the NBA's all-time leading scorer.",
      "He has won championships with Miami, Cleveland, and Los Angeles.",
      "He was drafted straight out of high school in Akron, Ohio, and now plays for the Lakers."
    ] }
  ],

  Places: [
    { name: "Eiffel Tower", hints: [
      "It was made by people, not nature.",
      "It's in Europe.",
      "It was built in the late 1800s for a world's fair.",
      "Artists once called it an eyesore, and it was supposed to be temporary.",
      "It's the giant iron landmark of Paris."
    ] },
    { name: "Statue of Liberty", hints: [
      "It was made by people, not nature.",
      "It's in North America.",
      "It was a gift from France in the 1880s.",
      "It turned green because its copper skin oxidized.",
      "It holds a torch high on an island in New York Harbor."
    ] },
    { name: "Grand Canyon", hints: [
      "It was formed by nature.",
      "It's in the United States.",
      "It was carved over millions of years by a river.",
      "It's in Arizona and is more than a mile deep in places.",
      "The Colorado River winds through the bottom of this huge gorge."
    ] },
    { name: "Great Wall of China", hints: [
      "It was made by people, not nature.",
      "It's in Asia.",
      "It was built over many centuries to keep out invaders.",
      "It stretches for thousands of miles across mountains and deserts.",
      "Sections near Beijing, like Badaling, are packed with tourists, and a myth says you can see it from space."
    ] },
    { name: "Mount Everest", hints: [
      "It was formed by nature.",
      "It's in Asia.",
      "It sits on the border between Nepal and Tibet.",
      "Edmund Hillary and Tenzing Norgay first reached its top in 1953.",
      "It's the highest point on Earth."
    ] },
    { name: "Taj Mahal", hints: [
      "It was made by people, not nature.",
      "It's in Asia.",
      "It was built in the 1600s as a tomb.",
      "An emperor built it in memory of his beloved wife.",
      "It's a white marble mausoleum in Agra, India."
    ] },
    { name: "Colosseum", hints: [
      "It was made by people, not nature.",
      "It's in Europe and is about 2,000 years old.",
      "It's in Italy.",
      "Gladiators once fought here in front of huge crowds.",
      "It's the giant ancient amphitheater in the center of Rome."
    ] },
    { name: "Machu Picchu", hints: [
      "It was made by people, not nature.",
      "It's in South America.",
      "It sits high in the Andes mountains.",
      "It was built by the Inca in the 1400s.",
      "It's a mountaintop citadel in Peru that the outside world learned about in 1911."
    ] },
    { name: "Niagara Falls", hints: [
      "It was formed by nature.",
      "It's in North America.",
      "It sits on the border between the US and Canada.",
      "Daredevils have gone over it in barrels.",
      "This huge rush of water lies between Lake Erie and Lake Ontario."
    ] },
    { name: "Sydney Opera House", hints: [
      "It was made by people, not nature.",
      "It's in the Southern Hemisphere.",
      "It's in Australia.",
      "Its roof looks like white sails or seashells.",
      "It's a performing arts venue on the harbor, next to the Harbour Bridge."
    ] },
    { name: "Stonehenge", hints: [
      "It was made by people, not nature.",
      "It's in Europe and is thousands of years old.",
      "It's in England.",
      "Nobody knows for sure why it was built, and it lines up with the sun on the solstices.",
      "It's a prehistoric ring of giant standing stones."
    ] },
    { name: "Golden Gate Bridge", hints: [
      "It was made by people, not nature.",
      "It's in the United States.",
      "It opened in 1937.",
      "Its official color is called 'International Orange'.",
      "It's the famous suspension span across the entrance to San Francisco Bay."
    ] },
    { name: "Great Pyramid of Giza", hints: [
      "It was made by people, not nature.",
      "It's in Africa.",
      "It's more than 4,500 years old.",
      "It's the only one of the Seven Wonders of the Ancient World still standing.",
      "It was built as a pharaoh's tomb near Cairo, Egypt."
    ] },
    { name: "Venice", hints: [
      "It's a place where people live.",
      "It's in Europe.",
      "It's a city in Italy.",
      "It's built on more than 100 small islands in a lagoon.",
      "People get around by gondola on its canals."
    ] },
    { name: "Las Vegas", hints: [
      "It's a place where people live.",
      "It's in the United States.",
      "It's a city in the Nevada desert.",
      "Its famous Strip is lined with giant themed hotels.",
      "It's nicknamed Sin City and is famous for casinos."
    ] },
    { name: "Antarctica", hints: [
      "It was formed by nature.",
      "It's in the Southern Hemisphere.",
      "Nobody lives there permanently, only visiting researchers.",
      "It holds most of the world's fresh water, frozen as ice.",
      "It's the continent at the South Pole."
    ] },
    { name: "Mount Rushmore", hints: [
      "It was made by people, not nature.",
      "It's in the United States.",
      "It's in South Dakota.",
      "It was carved into a granite mountain between 1927 and 1941.",
      "It shows the giant faces of four presidents."
    ] },
    { name: "Big Ben", hints: [
      "It was made by people, not nature.",
      "It's in Europe.",
      "It's in London.",
      "Technically its nickname belongs to the great bell inside, not the tower.",
      "It's the clock tower at the Houses of Parliament."
    ] },
    { name: "Great Barrier Reef", hints: [
      "It was formed by nature.",
      "It's in the Southern Hemisphere and is mostly underwater.",
      "It's off the coast of Australia.",
      "It's so large it can be seen from space, and tiny living animals built it.",
      "It's the world's largest coral system, home to clownfish and sea turtles."
    ] },
    { name: "Hollywood Sign", hints: [
      "It was made by people, not nature.",
      "It's in the United States.",
      "It's in Los Angeles.",
      "It started as an ad for a real estate development and originally ended in 'LAND'.",
      "Its giant white letters sit on Mount Lee, overlooking the movie capital."
    ] }
  ],

  Movies: [
    { name: "The Godfather", hints: [
      "It came out before 1980.",
      "It's a crime drama.",
      "It's about a powerful Italian-American family.",
      "Marlon Brando won an Oscar for it, and a horse's head ends up in someone's bed.",
      "Its most famous line is about making someone an offer he can't refuse."
    ] },
    { name: "Titanic", wiki: "Titanic (1997 film)", hints: [
      "It came out in the 1990s.",
      "It's a romance wrapped around a disaster.",
      "It was directed by James Cameron and won 11 Oscars.",
      "Its theme song, 'My Heart Will Go On', was sung by Celine Dion.",
      "Leonardo DiCaprio and Kate Winslet fall in love on a doomed ocean liner."
    ] },
    { name: "Jurassic Park", wiki: "Jurassic Park (film)", hints: [
      "It came out in the 1990s.",
      "It's a sci-fi adventure based on a novel.",
      "It was directed by Steven Spielberg.",
      "Scientists bring back extinct creatures using DNA from mosquitoes trapped in amber.",
      "Dinosaurs escape their enclosures on an island attraction."
    ] },
    { name: "Star Wars", wiki: "Star Wars (film)", hints: [
      "It came out before 1980.",
      "It's a science fiction adventure.",
      "It was created by George Lucas.",
      "A farm boy joins a rebellion against an evil empire.",
      "It features Luke Skywalker, Darth Vader, and lightsabers."
    ] },
    { name: "The Lion King", wiki: "The Lion King (1994 film)", hints: [
      "It came out in the 1990s.",
      "It's animated.",
      "It's a Disney film set in Africa.",
      "Its songs include 'Hakuna Matata' and 'Circle of Life'.",
      "A young cub named Simba must take back his rightful throne."
    ] },
    { name: "Jaws", wiki: "Jaws (film)", hints: [
      "It came out before 1980.",
      "It's a thriller.",
      "It was Steven Spielberg's breakout hit and is called the first summer blockbuster.",
      "It's set in a beach town called Amity Island.",
      "A great white shark terrorizes swimmers, and the crew needs a bigger boat."
    ] },
    { name: "Frozen", wiki: "Frozen (2013 film)", hints: [
      "It came out in the 2010s.",
      "It's animated.",
      "It's a Disney musical about two royal sisters.",
      "It features a talking snowman named Olaf.",
      "Elsa sings 'Let It Go' while building an ice palace."
    ] },
    { name: "Toy Story", hints: [
      "It came out in the 1990s.",
      "It's animated.",
      "It was the first fully computer-animated feature film, made by Pixar.",
      "A cowboy feels replaced by a flashy new space ranger.",
      "Woody and Buzz Lightyear belong to a boy named Andy."
    ] },
    { name: "The Wizard of Oz", wiki: "The Wizard of Oz (1939 film)", hints: [
      "It came out before 1950.",
      "It's a fantasy musical.",
      "It's famous for switching from black-and-white to color.",
      "A girl from Kansas is swept away by a tornado.",
      "Dorothy follows the yellow brick road in ruby slippers."
    ] },
    { name: "The Dark Knight", hints: [
      "It came out in the 2000s.",
      "It's a superhero action movie.",
      "It was directed by Christopher Nolan.",
      "Heath Ledger won an Oscar after his death for playing the villain.",
      "Batman faces the Joker in Gotham City."
    ] },
    { name: "Forrest Gump", hints: [
      "It came out in the 1990s.",
      "It's a drama with comedy that spans decades of American history.",
      "It won the Oscar for Best Picture and stars Tom Hanks.",
      "The main character runs back and forth across the country for years.",
      "Its famous line compares life to a box of chocolates."
    ] },
    { name: "The Matrix", hints: [
      "It came out in the 1990s.",
      "It's a science fiction action movie.",
      "It made 'bullet time' slow-motion effects famous.",
      "The hero must choose between a red pill and a blue pill.",
      "Keanu Reeves plays Neo, who learns reality is a computer simulation."
    ] },
    { name: "Back to the Future", hints: [
      "It came out in the 1980s.",
      "It's a sci-fi comedy.",
      "It stars Michael J. Fox and was produced by Steven Spielberg.",
      "A teenager accidentally travels to 1955 and meets his parents as teens.",
      "Marty McFly drives a DeLorean time machine that kicks in at 88 miles per hour."
    ] },
    { name: "E.T. the Extra-Terrestrial", hints: [
      "It came out in the 1980s.",
      "It's a family sci-fi film.",
      "It was directed by Steven Spielberg.",
      "A boy named Elliott hides a visitor in his house and lures him with Reese's Pieces.",
      "A bike flies across the moon, and the little visitor just wants to phone home."
    ] },
    { name: "Finding Nemo", hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a Pixar film set mostly underwater.",
      "A forgetful blue tang named Dory helps on the journey.",
      "A clownfish dad crosses the ocean to find his missing son."
    ] },
    { name: "Home Alone", hints: [
      "It came out in the 1990s.",
      "It's a family comedy set at Christmas.",
      "It stars Macaulay Culkin.",
      "Two burglars get hit by booby trap after booby trap.",
      "Kevin's family flies to Paris and accidentally leaves him behind."
    ] },
    { name: "Shrek", hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a DreamWorks film that pokes fun at fairy tales.",
      "It features a talking donkey voiced by Eddie Murphy.",
      "A grumpy green ogre rescues Princess Fiona."
    ] },
    { name: "The Shawshank Redemption", hints: [
      "It came out in the 1990s.",
      "It's a drama based on a Stephen King story.",
      "It flopped in theaters but later became one of the most loved films ever.",
      "Morgan Freeman narrates as an inmate named Red.",
      "Andy Dufresne secretly tunnels out of prison after nearly 20 years."
    ] },
    { name: "Barbie", wiki: "Barbie (film)", hints: [
      "It came out in the 2020s.",
      "It's a comedy.",
      "It was directed by Greta Gerwig and was the biggest film of 2023.",
      "Ryan Gosling plays Ken and sings 'I'm Just Ken'.",
      "Margot Robbie plays a doll who leaves her perfect pink Dreamhouse world."
    ] },
    { name: "Spirited Away", hints: [
      "It came out in the 2000s.",
      "It's animated.",
      "It's a Japanese film from Studio Ghibli.",
      "It won the Oscar for Best Animated Feature and was directed by Hayao Miyazaki.",
      "A girl named Chihiro works at a bathhouse for gods after her parents turn into pigs."
    ] }
  ],

  Songs: [
    { name: "Bohemian Rhapsody", hints: [
      "It was released before 1980.",
      "It's a rock song by a British band.",
      "It's six minutes long with no real chorus, mixing ballad, opera, and hard rock.",
      "It was sung by Freddie Mercury of Queen.",
      "Friends headbang to it in a car in the movie 'Wayne's World'."
    ] },
    { name: "Billie Jean", hints: [
      "It was released in the 1980s.",
      "It's a pop song by a male solo artist.",
      "It's from the best-selling album of all time.",
      "The singer debuted the moonwalk while performing it on TV in 1983.",
      "It's Michael Jackson's song denying that a woman's child is his."
    ] },
    { name: "Hey Jude", hints: [
      "It was released before 1980.",
      "It's by a British band.",
      "It's by the Beatles and runs more than seven minutes.",
      "Paul McCartney wrote it to comfort John Lennon's son Julian.",
      "It ends with a famous four-minute crowd singalong."
    ] },
    { name: "Imagine", wiki: "Imagine (John Lennon song)", hints: [
      "It was released before 1980.",
      "It's a ballad by a British male solo artist.",
      "It was written by a former Beatle.",
      "It's played on piano and dreams of a world without countries or possessions.",
      "It's John Lennon's most famous solo song."
    ] },
    { name: "Smells Like Teen Spirit", hints: [
      "It was released in the 1990s.",
      "It's a rock song by an American band.",
      "It's a grunge anthem from the Seattle scene.",
      "Its music video is set in a high school gym with cheerleaders.",
      "It's Nirvana's breakout hit, sung by Kurt Cobain."
    ] },
    { name: "Hotel California", wiki: "Hotel California (song)", hints: [
      "It was released before 1980.",
      "It's a rock song by an American band.",
      "It's famous for a long dual guitar solo at the end.",
      "It's about a mysterious luxury place that you can never really leave.",
      "It's the Eagles' most famous song."
    ] },
    { name: "Thriller", wiki: "Thriller (song)", hints: [
      "It was released in the 1980s.",
      "It's a pop song by a male solo artist.",
      "Horror actor Vincent Price performs a spooky spoken-word section.",
      "Its 14-minute music video features dancing zombies.",
      "It's Michael Jackson's Halloween classic."
    ] },
    { name: "Sweet Child o' Mine", hints: [
      "It was released in the 1980s.",
      "It's a rock song by an American band.",
      "It's famous for its looping opening guitar riff.",
      "Guitarist Slash reportedly came up with the riff as a warm-up exercise.",
      "It's Guns N' Roses' only No. 1 hit in the US."
    ] },
    { name: "Stairway to Heaven", hints: [
      "It was released before 1980.",
      "It's a rock song by a British band.",
      "It starts as a quiet folk tune and builds to hard rock over eight minutes.",
      "It was never released as a regular single, yet became one of the most-played rock songs ever.",
      "It's Led Zeppelin's most famous song."
    ] },
    { name: "Purple Rain", wiki: "Purple Rain (song)", hints: [
      "It was released in the 1980s.",
      "It's a power ballad by a male solo artist.",
      "It's the title song of a 1984 movie the singer starred in.",
      "The singer, from Minneapolis, played it in a real downpour at the 2007 Super Bowl.",
      "It's Prince's signature song."
    ] },
    { name: "Respect", wiki: "Respect (song)", hints: [
      "It was released before 1980.",
      "It's a soul song by a female singer.",
      "It was first recorded by Otis Redding.",
      "It became an anthem for civil rights and women's rights, and it spells out its title.",
      "It's Aretha Franklin's signature song."
    ] },
    { name: "Rolling in the Deep", hints: [
      "It was released around 2010.",
      "It's a pop-soul song by a British female singer.",
      "It's the opening track of the album '21'.",
      "It's an angry breakup song with a stomping beat.",
      "It was Adele's first No. 1 hit in the US."
    ] },
    { name: "Shape of You", hints: [
      "It was released in the 2010s.",
      "It's a pop song by a British male singer.",
      "It was Spotify's most-streamed song for years.",
      "It has a marimba-style tropical beat and is about a crush at a bar.",
      "It's Ed Sheeran's biggest hit."
    ] },
    { name: "Uptown Funk", hints: [
      "It was released in the 2010s.",
      "It's a retro, party-ready pop song.",
      "It's credited to a British producer featuring an American singer.",
      "It spent 14 weeks at No. 1 in the US.",
      "It's Mark Ronson and Bruno Mars' party anthem."
    ] },
    { name: "Despacito", hints: [
      "It was released in the 2010s.",
      "It's sung mostly in Spanish.",
      "It's by Luis Fonsi and Daddy Yankee from Puerto Rico.",
      "A remix featuring Justin Bieber helped it top the US charts.",
      "Its music video was the first to pass 5 billion views on YouTube."
    ] },
    { name: "Old Town Road", hints: [
      "It was released in the 2010s.",
      "It blends country and hip-hop.",
      "It was pulled from a country chart, which sparked a debate.",
      "A remix with Billy Ray Cyrus spent a record 19 weeks at No. 1.",
      "It's Lil Nas X's breakout hit about riding a horse."
    ] },
    { name: "Blinding Lights", hints: [
      "It was released in late 2019.",
      "It's a pop song with a 1980s synth sound by a Canadian singer.",
      "Billboard named it the greatest Hot 100 song of all time in 2021.",
      "Its music video shows the singer in a red suit with a bloodied face.",
      "It's The Weeknd's biggest hit."
    ] },
    { name: "Dancing Queen", hints: [
      "It was released before 1980.",
      "It's a disco-pop song by a group from Europe.",
      "The group is from Sweden.",
      "It's about a teenage girl ruling the dance floor.",
      "It's ABBA's only No. 1 hit in the US."
    ] },
    { name: "Don't Stop Believin'", hints: [
      "It was released in the 1980s.",
      "It's a rock song by an American band.",
      "Its piano intro is instantly recognizable.",
      "It became huge again after the final scene of 'The Sopranos' and a cover on 'Glee'.",
      "It's Journey's best-known song, about a small-town girl and a city boy."
    ] },
    { name: "Shake It Off", hints: [
      "It was released in the 2010s.",
      "It's a pop song by an American female singer.",
      "It was the lead single from the album '1989'.",
      "It's about ignoring haters and critics.",
      "It was Taylor Swift's first single after she went fully pop."
    ] }
  ],

  Animals: [
    { name: "Giraffe", hints: [
      "It's a mammal.",
      "It lives in Africa.",
      "It eats leaves from tall acacia trees.",
      "It has a dark blue-purple tongue up to 20 inches long.",
      "It's the tallest animal on Earth."
    ] },
    { name: "Penguin", hints: [
      "It's a bird.",
      "It lives mostly in the Southern Hemisphere.",
      "It can't fly, but it's an excellent swimmer.",
      "In one species, fathers keep the egg warm on their feet all winter.",
      "This black-and-white bird waddles across Antarctic ice."
    ] },
    { name: "Octopus", hints: [
      "It lives in the ocean.",
      "It has no bones.",
      "It has three hearts and blue blood.",
      "It can change color and squirt ink to escape.",
      "It has eight arms."
    ] },
    { name: "Elephant", hints: [
      "It's a mammal.",
      "It lives in Africa and Asia.",
      "It's the largest land animal.",
      "It has huge ears and ivory tusks.",
      "It uses its trunk to drink and grab food."
    ] },
    { name: "Kangaroo", hints: [
      "It's a mammal.",
      "It lives in Australia.",
      "It carries its babies, called joeys, in a pouch.",
      "It uses its big tail for balance and can't easily move backward.",
      "It hops on powerful back legs and is known for boxing."
    ] },
    { name: "Platypus", hints: [
      "It's a mammal.",
      "It lives in Australia.",
      "It's one of the very few mammals that lay eggs.",
      "Males have venomous spurs on their back legs.",
      "It has a duck-like bill and a beaver-like tail."
    ] },
    { name: "Bald eagle", hints: [
      "It's a bird.",
      "It lives in North America.",
      "It's a bird of prey that eats mostly fish.",
      "It builds the largest nests of any North American bird.",
      "It's the national bird of the United States, with a white head."
    ] },
    { name: "Great white shark", hints: [
      "It lives in the ocean.",
      "It's a fish.",
      "It's a top predator that can sense tiny amounts of blood in the water.",
      "It has about 300 jagged teeth arranged in rows.",
      "It's the villain in the movie 'Jaws'."
    ] },
    { name: "Koala", hints: [
      "It's a mammal.",
      "It lives in Australia.",
      "It sleeps up to 20 hours a day.",
      "It eats almost nothing but eucalyptus leaves.",
      "It's a fluffy gray marsupial often wrongly called a bear."
    ] },
    { name: "Cheetah", hints: [
      "It's a mammal.",
      "It lives mostly in Africa.",
      "It's a big cat that hunts during the day.",
      "It has black 'tear marks' running down from its eyes.",
      "It's the fastest land animal."
    ] },
    { name: "Giant panda", hints: [
      "It's a mammal.",
      "It lives in Asia.",
      "It lives in the mountain forests of central China.",
      "It spends most of its day eating bamboo.",
      "It's a black-and-white bear."
    ] },
    { name: "Sloth", hints: [
      "It's a mammal.",
      "It lives in Central and South America.",
      "It spends almost its whole life hanging upside down in trees.",
      "Algae can grow in its fur and turn it green.",
      "It's famous for moving extremely slowly."
    ] },
    { name: "Flamingo", hints: [
      "It's a bird.",
      "It lives in warm wetlands and lagoons.",
      "It often stands on one leg.",
      "Its color comes from the shrimp and algae it eats.",
      "It's a tall pink wading bird."
    ] },
    { name: "Blue whale", hints: [
      "It lives in the ocean.",
      "It's a mammal.",
      "It eats tiny shrimp-like animals called krill.",
      "Its heart is about the size of a small car.",
      "It's the largest animal that has ever lived."
    ] },
    { name: "Chameleon", hints: [
      "It's a reptile.",
      "Many species live in Madagascar and Africa.",
      "Its eyes can move in two different directions at once.",
      "It catches insects with a lightning-fast, sticky tongue.",
      "It's famous for changing its skin color."
    ] },
    { name: "Polar bear", hints: [
      "It's a mammal.",
      "It lives in the far north.",
      "It hunts seals on the sea ice.",
      "Its skin is actually black under its fur.",
      "It's the big white predator of the Arctic."
    ] },
    { name: "Owl", hints: [
      "It's a bird.",
      "It lives on every continent except Antarctica.",
      "It's mostly active at night.",
      "It can turn its head about 270 degrees.",
      "It hoots and is a symbol of wisdom."
    ] },
    { name: "Axolotl", hints: [
      "It lives in water.",
      "It's an amphibian.",
      "In the wild it lives only in lakes near Mexico City.",
      "It can regrow lost legs and even parts of its heart and brain.",
      "It's a pink salamander with feathery gills that looks like it's smiling."
    ] },
    { name: "Zebra", hints: [
      "It's a mammal.",
      "It lives in Africa.",
      "It's related to horses and lives in herds.",
      "No two of them have exactly the same pattern.",
      "It has black and white stripes."
    ] },
    { name: "Bat", hints: [
      "It's a mammal.",
      "It lives on every continent except Antarctica.",
      "It's active at night and sleeps upside down.",
      "Many species find food using echolocation.",
      "It's the only mammal that can truly fly."
    ] }
  ],

  Foods: [
    { name: "Pizza", hints: [
      "It's usually eaten warm.",
      "It's a savory dish.",
      "It comes from Italy.",
      "It's baked in a very hot oven, and Naples is famous for it.",
      "It's flat dough topped with tomato sauce and cheese, cut into slices."
    ] },
    { name: "Sushi", hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's from Japan.",
      "It's often eaten with soy sauce, wasabi, and pickled ginger.",
      "It's vinegared rice with raw fish or seafood."
    ] },
    { name: "Taco", hints: [
      "It's a savory dish.",
      "It's from North America.",
      "It comes from Mexico.",
      "Tuesday is a popular day to eat it in the US.",
      "It's a folded tortilla stuffed with fillings."
    ] },
    { name: "Hamburger", hints: [
      "It's a savory dish.",
      "It's hugely popular in the United States.",
      "It's a classic fast-food item.",
      "McDonald's Big Mac is a famous version.",
      "It's a ground beef patty served in a bun."
    ] },
    { name: "Croissant", hints: [
      "It's often eaten for breakfast.",
      "It's a baked good.",
      "It's strongly associated with France.",
      "It's made from many thin layers of buttery dough.",
      "It's a flaky, crescent-shaped pastry."
    ] },
    { name: "Ramen", hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's hugely popular in Japan.",
      "Cheap instant versions are a famous college-student staple.",
      "It's wheat noodles in a hot broth."
    ] },
    { name: "Pancake", hints: [
      "It's usually eaten for breakfast.",
      "It's cooked on a hot griddle.",
      "It's often served in a stack.",
      "It's usually topped with butter and maple syrup.",
      "It's a flat, fluffy round of batter that gets flipped once."
    ] },
    { name: "Guacamole", hints: [
      "It's usually eaten cold.",
      "It comes from Mexico.",
      "It's a dip or spread.",
      "It includes lime juice, onion, and cilantro.",
      "It's made from mashed avocados."
    ] },
    { name: "Bagel", hints: [
      "It's often eaten for breakfast.",
      "It's a baked good.",
      "New York City is famous for it.",
      "It's boiled before it's baked, which makes it chewy.",
      "It's a round bread with a hole, often topped with cream cheese."
    ] },
    { name: "Lasagna", hints: [
      "It's a savory dish.",
      "It comes from Italy.",
      "It's baked in a rectangular dish.",
      "Garfield the cat loves it.",
      "It's layers of wide flat pasta, meat sauce, and cheese."
    ] },
    { name: "Burrito", hints: [
      "It's a savory dish.",
      "It's linked to Mexico and the southwestern US.",
      "It's often filled with rice, beans, and meat.",
      "Its name means 'little donkey' in Spanish.",
      "It's a big flour tortilla rolled up around fillings."
    ] },
    { name: "Hot dog", hints: [
      "It's a savory food.",
      "It's hugely popular in the United States.",
      "It's a classic food at baseball games.",
      "A famous eating contest for it happens every Fourth of July at Coney Island.",
      "It's a sausage served in a long bun."
    ] },
    { name: "Pad thai", wiki: "Pad thai", hints: [
      "It's a savory dish.",
      "It's from Asia.",
      "It's a popular street food.",
      "It's often topped with crushed peanuts and a wedge of lime.",
      "It's stir-fried rice noodles from the street stalls of Bangkok."
    ] },
    { name: "Apple pie", hints: [
      "It's a dessert.",
      "It's baked.",
      "It's a symbol of American culture.",
      "It's often served warm with a scoop of vanilla ice cream.",
      "It's a fruit-filled pastry flavored with cinnamon, often with a lattice crust."
    ] },
    { name: "Ice cream", hints: [
      "It's a dessert.",
      "It's served cold.",
      "It's often served in a cone or a cup.",
      "Popular flavors include vanilla, chocolate, and strawberry.",
      "It's a frozen dairy treat that melts fast in summer."
    ] },
    { name: "Popcorn", hints: [
      "It's a snack.",
      "It's made from a grain.",
      "It's a classic movie theater snack.",
      "It's often topped with butter and salt.",
      "Its kernels burst open when heated."
    ] },
    { name: "Dumpling", hints: [
      "It's a savory food.",
      "Versions of it exist in many cultures around the world.",
      "It's often steamed, boiled, or pan-fried.",
      "Potstickers and gyoza are types of it.",
      "It's a small pocket of dough filled with meat or vegetables."
    ] },
    { name: "Cheesecake", hints: [
      "It's a dessert.",
      "It's usually served chilled.",
      "New York style is a famous version.",
      "It usually has a graham cracker crust.",
      "Its rich, creamy filling is made from the soft spread often put on bagels."
    ] },
    { name: "Waffle", hints: [
      "It's often eaten for breakfast.",
      "It's cooked in a special hinged iron.",
      "Belgium is famous for it.",
      "It has a grid pattern of little square pockets.",
      "It's a crispy batter treat whose pockets hold pools of syrup."
    ] },
    { name: "Mac and cheese", wiki: "Macaroni and cheese", hints: [
      "It's a savory dish.",
      "It's hugely popular in the United States.",
      "It's a classic comfort food for kids.",
      "A famous boxed version comes with a powdered orange sauce mix.",
      "It's elbow pasta in a creamy cheddar sauce."
    ] }
  ]
};
