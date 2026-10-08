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
    ] },
    { name: "Whitney Houston", tags: ["music"], hints: [
      "This person is an American woman who worked in entertainment.",
      "She was a singer famous for her powerful, soaring voice.",
      "She was nicknamed 'The Voice' and was a cousin of singer Dionne Warwick.",
      "She starred alongside Kevin Costner in the 1992 film 'The Bodyguard'.",
      "Her cover of 'I Will Always Love You' became one of the best-selling singles ever."
    ] },
    { name: "Elton John", tags: ["music"], hints: [
      "This person is a British man known worldwide.",
      "He is a singer and pianist with a career spanning more than 50 years.",
      "He is famous for flamboyant costumes and oversized glasses, and was knighted.",
      "He wrote songs for Disney's 'The Lion King,' including 'Can You Feel the Love Tonight.'",
      "He sang 'Rocket Man' and 'Tiny Dancer' and was played by Taron Egerton in 'Rocketman.'"
    ] },
    { name: "Prince", wiki: "Prince (musician)", tags: ["music"], hints: [
      "This person was an American man from the Midwest.",
      "He was a musician who played many instruments and wrote his own songs.",
      "He was from Minneapolis and was known for his short stature and bold fashion.",
      "For a time he changed his name to an unpronounceable symbol.",
      "He is famous for the album and film 'Purple Rain.'"
    ] },
    { name: "John Lennon", tags: ["music"], hints: [
      "This person was a British man known worldwide.",
      "He was a singer and songwriter in the 1960s and 1970s.",
      "He wore round glasses and was married to artist Yoko Ono.",
      "He was a member of the Beatles from Liverpool.",
      "His solo song 'Imagine' became an anthem for peace."
    ] },
    { name: "Bob Marley", tags: ["music"], hints: [
      "This person was a man from the Caribbean.",
      "He was a singer and songwriter who died young in 1981.",
      "He was from Jamaica and wore dreadlocks.",
      "He led a band called the Wailers and is the most famous figure of reggae.",
      "He sang 'One Love,' 'Three Little Birds,' and 'No Woman, No Cry.'"
    ] },
    { name: "Aretha Franklin", tags: ["music"], hints: [
      "This person was an American woman who worked in entertainment.",
      "She was a singer whose career began in church in Detroit.",
      "She was the first woman inducted into the Rock and Roll Hall of Fame.",
      "She was known as the 'Queen of Soul.'",
      "She famously spelled out R-E-S-P-E-C-T in her biggest hit."
    ] },
    { name: "Stevie Wonder", tags: ["music"], hints: [
      "This person is an American man known worldwide.",
      "He is a singer, songwriter, and multi-instrumentalist.",
      "He has been blind since infancy and signed with Motown as a child.",
      "He often plays keyboards and harmonica on stage.",
      "He sang 'Superstition' and 'I Just Called to Say I Love You.'"
    ] },
    { name: "Justin Bieber", tags: ["music"], hints: [
      "This person is a man from North America.",
      "He is a pop singer who became famous as a teenager.",
      "He is Canadian and was discovered through YouTube videos.",
      "His devoted fans call themselves 'Beliebers.'",
      "His early hit 'Baby' featured Ludacris, and later hits include 'Sorry' and 'Peaches.'"
    ] },
    { name: "Adele", tags: ["music"], hints: [
      "This person is a British woman known worldwide.",
      "She is a singer famous for emotional ballads.",
      "Her albums are named after numbers, like '21' and '25.'",
      "She sang the theme song for the James Bond film 'Skyfall.'",
      "Her hits include 'Rolling in the Deep,' 'Someone Like You,' and 'Hello.'"
    ] },
    { name: "Johnny Cash", tags: ["music"], hints: [
      "This person was an American man from the South.",
      "He was a singer and songwriter with a deep baritone voice.",
      "He was nicknamed 'The Man in Black' for his dark clothing.",
      "He famously performed concerts at Folsom and San Quentin prisons.",
      "He sang 'Ring of Fire' and 'I Walk the Line,' and Joaquin Phoenix played him in a film."
    ] },
    { name: "Mariah Carey", tags: ["music"], hints: [
      "This person is an American woman who works in entertainment.",
      "She is a singer who has had huge success since 1990.",
      "She is famous for her five-octave range and whistle notes.",
      "She has more number-one hits on the Billboard Hot 100 than any other solo artist.",
      "Her song 'All I Want for Christmas Is You' returns to the charts every December."
    ] },
    { name: "Shakira", tags: ["music"], hints: [
      "This person is a woman from South America.",
      "She is a singer who performs in both Spanish and English.",
      "She is from Colombia and is known for her belly dancing.",
      "She performed 'Waka Waka' for the 2010 World Cup.",
      "Her hit 'Hips Don't Lie' says her hips tell the truth."
    ] },
    { name: "Louis Armstrong", tags: ["music"], hints: [
      "This person was an American man who lived in the 1900s.",
      "He was a musician and singer with a famously gravelly voice.",
      "He was from New Orleans and was nicknamed 'Satchmo.'",
      "He was one of the most influential jazz trumpet players ever.",
      "He sang 'What a Wonderful World' and 'Hello, Dolly!'"
    ] },
    { name: "Jennifer Aniston", tags: ["acting"], hints: [
      "This person is an American woman who works in entertainment.",
      "She is an actress best known for comedy.",
      "Her 1990s haircut was so popular it was named after her character.",
      "She has starred in 'The Morning Show' and 'Murder Mystery' with Adam Sandler.",
      "She played Rachel Green on the sitcom 'Friends.'"
    ] },
    { name: "Brad Pitt", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is an actor often called one of the most handsome men in Hollywood.",
      "He grew up in Missouri and has also produced films like '12 Years a Slave.'",
      "He won an Oscar for 'Once Upon a Time in Hollywood.'",
      "He starred in 'Fight Club' and 'Ocean's Eleven' and was married to Angelina Jolie."
    ] },
    { name: "Tom Cruise", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is an actor known for doing his own dangerous stunts.",
      "He famously jumped on Oprah's couch in 2005.",
      "He plays agent Ethan Hunt in the 'Mission: Impossible' films.",
      "He played the fighter pilot Maverick in 'Top Gun.'"
    ] },
    { name: "Audrey Hepburn", tags: ["acting"], hints: [
      "This person was a woman who became famous in the 1950s.",
      "She was an actress and later a humanitarian for UNICEF.",
      "She was born in Belgium and is a lasting fashion icon.",
      "She won an Oscar for 'Roman Holiday.'",
      "She played Holly Golightly in 'Breakfast at Tiffany's' in a little black dress."
    ] },
    { name: "Denzel Washington", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is an actor known for intense, commanding performances.",
      "He has won two Oscars, one for 'Glory' and one for 'Training Day.'",
      "He played a civil rights leader in 'Malcolm X.'",
      "He starred as a football coach in 'Remember the Titans' and as a vigilante in 'The Equalizer.'"
    ] },
    { name: "Jim Carrey", tags: ["acting"], hints: [
      "This person is a man from North America who works in entertainment.",
      "He is a Canadian-born comedic actor.",
      "He is famous for rubbery facial expressions and wild physical comedy.",
      "He played the Grinch and a pet detective named Ace Ventura.",
      "He starred in 'The Mask,' 'Liar Liar,' and 'The Truman Show.'"
    ] },
    { name: "Ellen DeGeneres", tags: ["acting"], hints: [
      "This person is an American woman who worked in entertainment.",
      "She is a comedian who became a famous TV host.",
      "Her daytime talk show often opened with her dancing through the audience.",
      "She took a record-breaking group selfie while hosting the 2014 Oscars.",
      "She voiced Dory, the forgetful fish in 'Finding Nemo.'"
    ] },
    { name: "Robin Williams", tags: ["acting"], hints: [
      "This person was an American man who worked in entertainment.",
      "He was a comedian and actor known for rapid-fire improvisation.",
      "He first became famous playing an alien on the sitcom 'Mork & Mindy.'",
      "He won an Oscar for 'Good Will Hunting' and voiced the Genie in 'Aladdin.'",
      "He dressed up as a nanny in 'Mrs. Doubtfire.'"
    ] },
    { name: "Julia Roberts", tags: ["acting"], hints: [
      "This person is an American woman who works in entertainment.",
      "She is an actress famous for her big smile.",
      "She was one of the top romantic comedy stars of the 1990s.",
      "She won an Oscar for 'Erin Brockovich.'",
      "She starred in 'Pretty Woman' and 'Notting Hill.'"
    ] },
    { name: "Scarlett Johansson", tags: ["acting"], hints: [
      "This person is an American woman who works in entertainment.",
      "She is an actress who started her career as a child.",
      "She voiced an AI assistant in the movie 'Her.'",
      "She starred in 'Lost in Translation' and 'Marriage Story.'",
      "She played Black Widow in the Marvel movies."
    ] },
    { name: "Lucille Ball", tags: ["acting"], hints: [
      "This person was an American woman who worked in entertainment.",
      "She was a comedic actress who became a TV pioneer in the 1950s.",
      "She was famous for her red hair and slapstick comedy.",
      "She co-founded the studio Desilu with her husband, Desi Arnaz.",
      "She starred in 'I Love Lucy,' including the famous chocolate factory scene."
    ] },
    { name: "Harrison Ford", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is an actor who was a carpenter before he became famous.",
      "He starred in many blockbuster adventure films of the 1970s and 1980s.",
      "He played the archaeologist Indiana Jones.",
      "He played Han Solo in 'Star Wars.'"
    ] },
    { name: "Kevin Hart", tags: ["acting"], hints: [
      "This person is an American man who works in entertainment.",
      "He is a comedian and actor known for his energetic style.",
      "He is from Philadelphia and often jokes about being short.",
      "He has co-starred in several movies with Dwayne Johnson, including 'Jumanji.'",
      "He starred in 'Ride Along' and 'Central Intelligence.'"
    ] },
    { name: "Sandra Bullock", tags: ["acting"], hints: [
      "This person is an American woman who works in entertainment.",
      "She is an actress known for both comedies and dramas.",
      "She won an Oscar for playing a football player's adoptive mom in 'The Blind Side.'",
      "She was stranded in space in 'Gravity.'",
      "She drove a runaway bus with Keanu Reeves in 'Speed.'"
    ] },
    { name: "Kobe Bryant", tags: ["sports"], hints: [
      "This person was an American man known worldwide.",
      "He was a professional athlete who played his whole career for one team.",
      "He won five championships and was nicknamed 'Black Mamba.'",
      "He wore numbers 8 and 24 for the Los Angeles Lakers.",
      "He scored 81 points in a single NBA game in 2006."
    ] },
    { name: "Stephen Curry", tags: ["sports"], hints: [
      "This person is an American man known worldwide.",
      "He is a professional basketball player.",
      "He is known for his incredible long-range shooting and changed how the game is played.",
      "He has won multiple championships with the Golden State Warriors.",
      "He holds the NBA record for most career three-pointers made."
    ] },
    { name: "Pelé", tags: ["sports"], hints: [
      "This person was a man from South America.",
      "He was an athlete who became famous as a teenager in the 1950s.",
      "He was from Brazil and later played for the New York Cosmos.",
      "He is the only player to win three World Cups.",
      "He was often called the greatest soccer player of all time and went by a one-word nickname."
    ] },
    { name: "Jackie Robinson", tags: ["sports"], hints: [
      "This person was an American man who lived in the 1900s.",
      "He was a professional athlete and a civil rights icon.",
      "He played for the Brooklyn Dodgers.",
      "In 1947, he broke Major League Baseball's color barrier.",
      "His number 42 is retired across all of MLB, and every player wears it on a special day each April."
    ] },
    { name: "Michael Phelps", tags: ["sports"], hints: [
      "This person is an American man known worldwide.",
      "He is a retired athlete from Baltimore.",
      "He competed in five Olympic Games.",
      "He won 8 gold medals at the 2008 Beijing Olympics.",
      "He is the most decorated Olympian ever, with 28 medals in swimming."
    ] },
    { name: "Shaquille O'Neal", tags: ["sports"], hints: [
      "This person is an American man known worldwide.",
      "He is a retired athlete who is now a TV analyst and pitchman.",
      "He is over seven feet tall and goes by a short nickname.",
      "He won three straight NBA titles with Kobe Bryant on the Lakers.",
      "He was famous for thunderous dunks and poor free-throw shooting, and starred in the movie 'Kazaam.'"
    ] },
    { name: "Patrick Mahomes", tags: ["sports"], hints: [
      "This person is an American man who is a pro athlete.",
      "He plays football and is the son of a former MLB pitcher.",
      "He is famous for no-look and sidearm throws.",
      "He is the quarterback of the Kansas City Chiefs.",
      "He has won multiple Super Bowls with tight end Travis Kelce."
    ] },
    { name: "Mia Hamm", tags: ["sports"], hints: [
      "This person is an American woman who is a retired athlete.",
      "She was a star of women's sports in the 1990s and 2000s.",
      "She won two Olympic gold medals with the U.S. national team.",
      "She played forward and was one of the best goal scorers of her time.",
      "She helped the U.S. win the 1999 Women's World Cup in soccer."
    ] },
    { name: "Roger Federer", tags: ["sports"], hints: [
      "This person is a European man known worldwide.",
      "He is a retired athlete known for his graceful style.",
      "He is from Switzerland.",
      "He won 20 Grand Slam singles titles in tennis.",
      "He won Wimbledon a record eight times among men."
    ] },
    { name: "Shohei Ohtani", tags: ["sports"], hints: [
      "This person is a man from Asia who is a pro athlete.",
      "He is from Japan and plays in the U.S.",
      "He is famous for being both an elite pitcher and an elite hitter.",
      "He signed a record $700 million contract with the Los Angeles Dodgers.",
      "He became the first MLB player with 50 home runs and 50 stolen bases in a season."
    ] },
    { name: "Caitlin Clark", tags: ["sports"], hints: [
      "This person is an American woman who is a pro athlete.",
      "She became a sensation while playing in college.",
      "She played for the University of Iowa and became the NCAA's all-time leading scorer.",
      "She is famous for shooting threes from very deep, near the logo.",
      "She was the No. 1 WNBA draft pick in 2024 and plays for the Indiana Fever."
    ] },
    { name: "Jesse Owens", tags: ["sports"], hints: [
      "This person was an American man who lived in the 1900s.",
      "He was an athlete who starred at Ohio State University.",
      "He set several world records in a single afternoon in 1935.",
      "He competed in sprinting and the long jump.",
      "He won four gold medals at the 1936 Berlin Olympics, defying Hitler."
    ] },
    { name: "Derek Jeter", tags: ["sports"], hints: [
      "This person is an American man who is a retired athlete.",
      "He played his entire career for one team, from 1995 to 2014.",
      "He was a shortstop and team captain, known as 'The Captain.'",
      "He won five World Series titles with the New York Yankees.",
      "He wore number 2 and collected more than 3,000 hits."
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
    ] },
    { name: "Chichen Itza", tags: ["north_america", "landmark"], hints: [
      "This is an ancient site that draws millions of visitors.",
      "It sits in Mexico's Yucatán Peninsula.",
      "It was a major center of the Maya civilization.",
      "Its step pyramid, El Castillo, is dedicated to Kukulcán, the feathered serpent.",
      "On the equinoxes, shadows make a serpent appear to slither down the pyramid's steps."
    ] },
    { name: "Space Needle", tags: ["north_america", "landmark"], hints: [
      "This is a famous structure in the United States.",
      "It is located in the Pacific Northwest.",
      "It was built for the 1962 World's Fair.",
      "It is a tall observation tower with a flying-saucer-shaped top.",
      "It is the most famous symbol of Seattle's skyline."
    ] },
    { name: "Alcatraz Island", tags: ["north_america", "landmark"], hints: [
      "This is a historic site in the United States.",
      "It is surrounded by cold, choppy water.",
      "It once housed some of America's most notorious criminals, including Al Capone.",
      "It was nicknamed 'The Rock' and was said to be escape-proof.",
      "It is a former federal prison on a small isle in San Francisco Bay."
    ] },
    { name: "Times Square", tags: ["north_america", "landmark"], hints: [
      "This is a busy spot in the United States.",
      "It is famous for crowds, tourists, and bright lights.",
      "It is surrounded by huge digital billboards and Broadway theaters.",
      "It is known as 'The Crossroads of the World.'",
      "A giant ball drops here every New Year's Eve in Manhattan."
    ] },
    { name: "Chicago", tags: ["north_america", "city"], hints: [
      "This is a large place in the United States.",
      "It sits in the Midwest on the shore of a Great Lake.",
      "It is nicknamed 'The Windy City.'",
      "It is known for deep-dish pizza and 'The Bean' sculpture.",
      "It is the biggest metropolis in Illinois and home of the Cubs and Bulls."
    ] },
    { name: "New Orleans", tags: ["north_america", "city"], hints: [
      "This is a place in the southern United States.",
      "It sits near the mouth of the Mississippi River.",
      "It is considered the birthplace of jazz and is known for beignets and gumbo.",
      "Its French Quarter and Bourbon Street draw huge crowds.",
      "It is famous for its Mardi Gras celebrations and is nicknamed 'The Big Easy.'"
    ] },
    { name: "Death Valley", tags: ["north_america", "natural"], hints: [
      "This is a natural area in the United States.",
      "It is extremely dry and mostly barren.",
      "It lies mainly in eastern California near the Nevada border.",
      "Its Badwater Basin is the lowest point in North America.",
      "It holds the record for the hottest air temperature ever measured on Earth, 134 degrees Fahrenheit."
    ] },
    { name: "Paris", tags: ["europe", "city"], hints: [
      "This is a famous place in Europe.",
      "It is known for fashion, art, and romance.",
      "The Louvre museum, home of the 'Mona Lisa,' is here.",
      "The Seine River flows through it and the Arc de Triomphe stands here.",
      "It is the capital of France, nicknamed 'The City of Light.'"
    ] },
    { name: "Rome", tags: ["europe", "city"], hints: [
      "This is a famous place in Europe.",
      "It is thousands of years old and full of ancient ruins.",
      "Legend says it was founded by twins raised by a wolf.",
      "Visitors toss coins into its Trevi Fountain, and Vatican City lies within it.",
      "It is the capital of Italy and is called 'The Eternal City.'"
    ] },
    { name: "Amsterdam", tags: ["europe", "city"], hints: [
      "This is a well-known place in Europe.",
      "It is famous for bicycles and tulips.",
      "It has a ring of historic canals lined with narrow houses.",
      "The Anne Frank House and the Van Gogh Museum are here.",
      "It is the capital of the Netherlands."
    ] },
    { name: "Neuschwanstein Castle", tags: ["europe", "landmark"], hints: [
      "This is a famous building in Europe.",
      "It sits on a hilltop surrounded by mountains and forests.",
      "It was commissioned in the 1800s by King Ludwig II, the 'Fairy Tale King.'",
      "It is in Bavaria, in southern Germany.",
      "It is said to have inspired the palace in Disney's 'Sleeping Beauty.'"
    ] },
    { name: "Sagrada Família", tags: ["europe", "landmark"], hints: [
      "This is a famous building in Europe.",
      "It has been under construction for more than 140 years.",
      "It was designed by the architect Antoni Gaudí.",
      "It is a huge basilica with tall, spiky, sandcastle-like towers.",
      "It is the most famous church in Barcelona, Spain."
    ] },
    { name: "Matterhorn", tags: ["europe", "natural"], hints: [
      "This is a natural wonder in Europe.",
      "It is covered in snow and ice and draws climbers from around the world.",
      "It sits on the border between Switzerland and Italy in the Alps.",
      "Its sharp, pyramid-shaped peak is one of the most recognizable on Earth.",
      "It appears on Toblerone boxes and has a ride named after it at Disneyland."
    ] },
    { name: "Cliffs of Moher", tags: ["europe", "natural"], hints: [
      "This is a natural wonder in Europe.",
      "It overlooks the Atlantic Ocean.",
      "It rises more than 700 feet straight out of the sea.",
      "It stood in for a famous spot in 'The Princess Bride' and in a Harry Potter film.",
      "It is a famous stretch of sea-facing rock walls in County Clare, Ireland."
    ] },
    { name: "Hong Kong", tags: ["asia", "city"], hints: [
      "This is a famous place in Asia.",
      "It is known for a dense skyline of skyscrapers and a busy harbor.",
      "It was a British colony until 1997.",
      "It is now a special administrative region of China.",
      "Victoria Harbour and Victoria Peak are its most famous sights."
    ] },
    { name: "Singapore", tags: ["asia", "city"], hints: [
      "This is a place in Southeast Asia.",
      "It is very small but very wealthy and extremely clean.",
      "It is known for strict rules, including limits on selling chewing gum.",
      "Its Marina Bay Sands hotel has a famous rooftop infinity pool.",
      "It is an island city-state at the southern tip of the Malay Peninsula, mascot the Merlion."
    ] },
    { name: "Bali", tags: ["asia", "city"], hints: [
      "This is a popular travel destination in Asia.",
      "It is a tropical island known for beaches, surfing, and yoga retreats.",
      "It has terraced rice fields and many Hindu temples.",
      "Towns like Ubud and Kuta are found here.",
      "It is the most famous island in Indonesia."
    ] },
    { name: "Burj Khalifa", tags: ["asia", "landmark"], hints: [
      "This is a famous structure in the Middle East.",
      "It is a modern building that opened in 2010.",
      "Tom Cruise dangled from its outside in a 'Mission: Impossible' movie.",
      "It is more than 2,700 feet tall.",
      "It is the tallest building in the world, located in Dubai."
    ] },
    { name: "Forbidden City", tags: ["asia", "landmark"], hints: [
      "This is a historic site in Asia.",
      "It is a huge complex with nearly a thousand buildings.",
      "For about 500 years, ordinary people were not allowed inside.",
      "It was the home of Chinese emperors during the Ming and Qing dynasties.",
      "It is the imperial palace in the heart of Beijing, next to Tiananmen Square."
    ] },
    { name: "Ha Long Bay", wiki: "Hạ Long Bay", tags: ["asia", "natural"], hints: [
      "This is a natural wonder in Asia.",
      "It features emerald-green water and is popular for boat cruises.",
      "It is dotted with nearly 2,000 limestone islands and pillars.",
      "Its name is often translated as 'descending dragon.'",
      "It is the most famous seascape in northern Vietnam."
    ] },
    { name: "Dead Sea", tags: ["asia", "natural"], hints: [
      "This is a natural wonder in the Middle East.",
      "It is a body of water with no outlet.",
      "Its shore is the lowest land point on Earth.",
      "Its water is so salty that people float easily on the surface.",
      "It lies between Jordan and Israel, and almost nothing can live in it."
    ] },
    { name: "Gobi Desert", tags: ["asia", "natural"], hints: [
      "This is a natural wonder in Asia.",
      "It is a vast, dry region with freezing winters and hot summers.",
      "It is one of the best places in the world to find dinosaur fossils.",
      "Bactrian camels, with two humps, live here.",
      "It stretches across southern Mongolia and northern China."
    ] },
    { name: "Rio de Janeiro", tags: ["south_america", "city"], hints: [
      "This is a famous place in South America.",
      "It is known for beaches, samba music, and soccer.",
      "Copacabana and Ipanema beaches are here.",
      "Sugarloaf Mountain and the Christ the Redeemer statue overlook it.",
      "It is the Brazilian metropolis famous for its huge Carnival celebration."
    ] },
    { name: "Nazca Lines", tags: ["south_america", "landmark"], hints: [
      "This is an ancient site in South America.",
      "It is located in a dry desert region of Peru.",
      "It was created by an ancient culture more than 1,500 years ago.",
      "It is best seen from an airplane flying overhead.",
      "It is a set of giant drawings in the ground, including a hummingbird, a monkey, and a spider."
    ] },
    { name: "Amazon Rainforest", wiki: "Amazon rainforest", tags: ["south_america", "natural"], hints: [
      "This is a natural wonder in South America.",
      "It is home to an incredible variety of plants and animals.",
      "It is sometimes called 'the lungs of the planet.'",
      "Most of it lies in Brazil, and jaguars, sloths, and piranhas live there.",
      "It is the largest tropical jungle in the world, named after a great river."
    ] },
    { name: "Angel Falls", tags: ["south_america", "natural"], hints: [
      "This is a natural wonder in South America.",
      "It is very remote and is usually reached by plane and boat.",
      "It is in Venezuela and spills off a flat-topped mountain called Auyán-tepui.",
      "It inspired the giant waterfall in Pixar's 'Up.'",
      "It is the world's tallest uninterrupted waterfall, at over 3,200 feet."
    ] },
    { name: "Atacama Desert", tags: ["south_america", "natural"], hints: [
      "This is a natural wonder in South America.",
      "Some parts of it have gone years without any recorded rainfall.",
      "It lies mainly in northern Chile.",
      "Its landscape is so Mars-like that NASA tests rovers there.",
      "It is often called the driest non-polar place on Earth, and its clear skies attract astronomers."
    ] },
    { name: "Lake Titicaca", tags: ["south_america", "natural"], hints: [
      "This is a natural wonder in South America.",
      "It sits high in the Andes mountains.",
      "It lies on the border between Peru and Bolivia.",
      "The Uros people live there on floating islands made of reeds.",
      "It is often called the highest navigable body of fresh water in the world."
    ] },
    { name: "Melbourne", tags: ["oceania", "city"], hints: [
      "This is a large place in the Southern Hemisphere.",
      "It is famous for coffee culture, street art, and laneways.",
      "It hosts the Australian Open tennis tournament every January.",
      "Its Cricket Ground is one of the largest stadiums in the world.",
      "It is the capital of Victoria and the second-largest metropolis in Australia."
    ] },
    { name: "Tasmania", tags: ["oceania", "city"], hints: [
      "This is a region in the Southern Hemisphere.",
      "It is an island known for rugged wilderness and clean air.",
      "It is separated from the mainland by the Bass Strait.",
      "Its capital is Hobart.",
      "It is an Australian state famous for a cartoon 'devil.'"
    ] },
    { name: "Sydney Harbour Bridge", tags: ["oceania", "landmark"], hints: [
      "This is a famous structure in the Southern Hemisphere.",
      "It opened in 1932 and is made of steel.",
      "Its arch shape earned it the nickname 'The Coathanger.'",
      "Visitors can climb over its top, and it is the center of famous New Year's fireworks.",
      "It crosses the water right next to the Opera House in Australia's largest metropolis."
    ] },
    { name: "Hobbiton Movie Set", tags: ["oceania", "landmark"], hints: [
      "This is a popular tourist attraction in the Southern Hemisphere.",
      "It is located on a farm with rolling green hills.",
      "It has dozens of tiny round doors built into hillsides.",
      "It was built for Peter Jackson's films based on Tolkien's books.",
      "It is the Shire village from 'The Lord of the Rings,' in New Zealand."
    ] },
    { name: "Milford Sound", tags: ["oceania", "natural"], hints: [
      "This is a natural wonder in the Southern Hemisphere.",
      "It is one of the rainiest inhabited places on Earth.",
      "It is a fiord with steep walls and waterfalls, carved by glaciers.",
      "Its most famous peak is Mitre Peak.",
      "It is in Fiordland National Park on New Zealand's South Island."
    ] },
    { name: "Bora Bora", tags: ["oceania", "natural"], hints: [
      "This is a tropical paradise in the Pacific Ocean.",
      "It is famous for honeymoons and luxury resorts.",
      "It is known for overwater bungalows on a turquoise lagoon.",
      "Mount Otemanu rises from its center.",
      "It is an island in French Polynesia, near Tahiti."
    ] },
    { name: "Cairo", tags: ["africa", "city"], hints: [
      "This is a large place in Africa.",
      "It is one of the biggest metropolitan areas in the Arab world.",
      "The Nile River flows right through it.",
      "The pyramids of Giza stand on its outskirts.",
      "It is the capital of Egypt."
    ] },
    { name: "Marrakesh", tags: ["africa", "city"], hints: [
      "This is a historic place in Africa.",
      "It is known for bustling markets called souks.",
      "Its main square, Jemaa el-Fnaa, features snake charmers and storytellers.",
      "It is nicknamed 'the Red City' for its reddish walls.",
      "It is a famous city in Morocco near the Atlas Mountains."
    ] },
    { name: "Great Sphinx", wiki: "Great Sphinx of Giza", tags: ["africa", "landmark"], hints: [
      "This is an ancient monument in Africa.",
      "It is carved out of limestone bedrock.",
      "It is more than 4,000 years old and its nose is missing.",
      "It has the body of a lion and the head of a human.",
      "It guards the pyramids of Giza in Egypt."
    ] },
    { name: "Abu Simbel", tags: ["africa", "landmark"], hints: [
      "This is an ancient site in Africa.",
      "It is in southern Egypt near the border with Sudan.",
      "In the 1960s it was cut into blocks and moved to higher ground to escape a rising reservoir.",
      "Four giant seated statues of Pharaoh Ramesses II guard its entrance.",
      "It is a pair of massive rock-cut temples beside Lake Nasser."
    ] },
    { name: "Serengeti", tags: ["africa", "natural"], hints: [
      "This is a natural wonder in Africa.",
      "It is a vast grassland plain full of wildlife.",
      "It is one of the most famous places in the world to go on safari.",
      "Every year, over a million wildebeest travel across it in the Great Migration.",
      "It is a national park in Tanzania, bordering Kenya's Maasai Mara."
    ] },
    { name: "Nile", tags: ["africa", "natural"], hints: [
      "This is a natural wonder in Africa.",
      "It has supported human civilization for thousands of years.",
      "It flows north and empties into the Mediterranean Sea.",
      "Ancient Egypt depended on its yearly floods for farming.",
      "It is often called the longest river in the world."
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
    ] },
    { name: "Casablanca", wiki: "Casablanca (film)", year: 1942, tags: ["drama"], hints: [
      "This is a black-and-white classic from Hollywood's golden age.",
      "It is a wartime romance set in North Africa.",
      "Humphrey Bogart plays a cynical nightclub owner named Rick.",
      "Ingrid Bergman's character asks the pianist to play 'As Time Goes By.'",
      "Famous lines include \"Here's looking at you, kid\" and \"We'll always have Paris.\""
    ] },
    { name: "Snow White and the Seven Dwarfs", wiki: "Snow White and the Seven Dwarfs (1937 film)", year: 1937, tags: ["animated"], hints: [
      "This is a very old, hand-drawn family classic.",
      "It was Disney's first full-length feature.",
      "A jealous queen asks a magic mirror who is the fairest of them all.",
      "A princess eats a poisoned apple and falls into a deathlike sleep.",
      "Little miners named Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, and Dopey sing 'Heigh-Ho.'"
    ] },
    { name: "Alien", wiki: "Alien (film)", year: 1979, tags: ["action"], hints: [
      "This is a tense science fiction horror story.",
      "It takes place aboard a commercial spaceship called the Nostromo.",
      "Ridley Scott directed it, and Sigourney Weaver plays Ripley.",
      "A creature bursts out of a crew member's chest at dinner.",
      "Its tagline was \"In space no one can hear you scream.\""
    ] },
    { name: "Singin' in the Rain", year: 1952, tags: ["comedy"], hints: [
      "This is a classic Hollywood musical.",
      "It is set during the switch from silent pictures to talkies.",
      "Gene Kelly stars and co-directed it, with Debbie Reynolds and Donald O'Connor.",
      "A star with a terrible voice is secretly dubbed by a young chorus girl.",
      "Its most famous scene has a man dancing joyfully with an umbrella under a lamppost in a downpour."
    ] },
    { name: "The Sound of Music", wiki: "The Sound of Music (film)", year: 1965, tags: ["drama"], hints: [
      "This is a beloved 1960s musical set in Europe.",
      "It is set in Austria just before World War II.",
      "Julie Andrews plays a young woman who leaves a convent to become a governess.",
      "She teaches seven children of Captain von Trapp to sing.",
      "Songs include 'Do-Re-Mi,' 'Edelweiss,' and 'My Favorite Things.'"
    ] },
    { name: "Cinderella", wiki: "Cinderella (1950 film)", year: 1950, tags: ["animated"], hints: [
      "This is a hand-drawn Disney fairy tale from the mid-20th century.",
      "Its heroine is mistreated by her stepmother and two stepsisters.",
      "A fairy godmother sings 'Bibbidi-Bobbidi-Boo' and turns a pumpkin into a coach.",
      "The magic wears off at the stroke of midnight.",
      "A prince searches the kingdom for the woman whose foot fits a glass slipper."
    ] },
    { name: "Some Like It Hot", year: 1959, tags: ["comedy"], hints: [
      "This is a black-and-white classic from the 1950s.",
      "It is set during Prohibition and was directed by Billy Wilder.",
      "Two musicians witness a gangland massacre in Chicago and must flee.",
      "Tony Curtis and Jack Lemmon disguise themselves as women in an all-female band.",
      "Marilyn Monroe co-stars, and the closing line is \"Well, nobody's perfect!\""
    ] },
    { name: "It's a Wonderful Life", year: 1946, tags: ["drama"], hints: [
      "This is a black-and-white classic from the 1940s.",
      "It is a holiday favorite shown on TV every December.",
      "Frank Capra directed it, and Jimmy Stewart stars as George Bailey of Bedford Falls.",
      "An angel named Clarence shows a desperate man what his town would be like if he had never been born.",
      "\"Every time a bell rings, an angel gets his wings.\""
    ] },
    { name: "The Empire Strikes Back", year: 1980, tags: ["action"], hints: [
      "This is a science fiction sequel from 1980.",
      "It is the second entry in a famous space saga.",
      "Luke trains with Yoda on the swamp planet Dagobah, and Han Solo is frozen in carbonite.",
      "The heroes fight giant walkers on the ice planet Hoth.",
      "Darth Vader reveals, \"No, I am your father.\""
    ] },
    { name: "Ferris Bueller's Day Off", year: 1986, tags: ["comedy"], hints: [
      "This is a teen classic from the 1980s.",
      "It was written and directed by John Hughes and is set in Chicago.",
      "A high school senior fakes being sick to skip class.",
      "He borrows his friend's dad's red Ferrari and sings 'Twist and Shout' on a parade float.",
      "Matthew Broderick plays the title character, who often talks directly to the camera."
    ] },
    { name: "Die Hard", year: 1988, tags: ["action"], hints: [
      "This is a 1980s blockbuster known for explosions and gunfights.",
      "It takes place almost entirely in a Los Angeles skyscraper on Christmas Eve.",
      "Bruce Willis plays New York cop John McClane.",
      "Alan Rickman plays the villain Hans Gruber, who takes partygoers hostage.",
      "Fans love debating whether it counts as a Christmas movie."
    ] },
    { name: "The Little Mermaid", wiki: "The Little Mermaid (1989 film)", year: 1989, tags: ["animated"], hints: [
      "This is a hand-drawn Disney musical from the late 1980s.",
      "It is based on a fairy tale by Hans Christian Andersen.",
      "A sea witch named Ursula trades legs for a beautiful voice.",
      "A crab named Sebastian sings 'Under the Sea' and 'Kiss the Girl.'",
      "Ariel, a red-haired princess with a fish tail, longs to live on land with Prince Eric."
    ] },
    { name: "Beetlejuice", year: 1988, tags: ["comedy"], hints: [
      "This is a quirky, spooky comedy from the 1980s.",
      "Tim Burton directed it.",
      "A recently deceased couple tries to scare a new family out of their house.",
      "Winona Ryder plays a goth teen, and the guests are possessed into singing the 'Banana Boat Song.'",
      "Michael Keaton's ghost appears if you say his name three times."
    ] },
    { name: "Rain Man", year: 1988, tags: ["drama"], hints: [
      "This is a road trip story from the late 1980s that won Best Picture.",
      "Two brothers drive across the country together.",
      "Tom Cruise plays a selfish car dealer who learns he has an older brother.",
      "Dustin Hoffman won an Oscar playing an autistic savant with an amazing memory.",
      "The brothers count cards at a Las Vegas casino, and one insists on watching 'Judge Wapner' at 3 p.m."
    ] },
    { name: "The Princess Bride", wiki: "The Princess Bride (film)", year: 1987, tags: ["comedy"], hints: [
      "This is a fantasy adventure from the 1980s, framed as a story read to a sick boy.",
      "Rob Reiner directed it.",
      "A farm boy named Westley loves Buttercup and replies to her with \"As you wish.\"",
      "Characters battle Rodents of Unusual Size and a man named Vizzini keeps saying \"Inconceivable!\"",
      "\"Hello. My name is Inigo Montoya. You killed my father. Prepare to die.\""
    ] },
    { name: "Dead Poets Society", year: 1989, tags: ["drama"], hints: [
      "This is a coming-of-age story from the late 1980s.",
      "It is set at a strict boys' prep school in 1959.",
      "Robin Williams plays an inspiring English teacher named John Keating.",
      "He urges his students to stand on their desks and \"Seize the day\" with the Latin phrase carpe diem.",
      "The boys salute him at the end with \"O Captain! My Captain!\""
    ] },
    { name: "Beauty and the Beast", wiki: "Beauty and the Beast (1991 film)", year: 1991, tags: ["animated"], hints: [
      "This is a hand-drawn Disney musical from the early 1990s.",
      "It was the first animated feature nominated for Best Picture.",
      "A book-loving girl named Belle trades her freedom for her father's.",
      "Enchanted objects like Lumiere, Cogsworth, and Mrs. Potts sing 'Be Our Guest.'",
      "A cursed prince must earn true love before the last petal falls from an enchanted rose."
    ] },
    { name: "Aladdin", wiki: "Aladdin (1992 Disney film)", year: 1992, tags: ["animated"], hints: [
      "This is a hand-drawn Disney musical from the early 1990s.",
      "It is set in the fictional desert city of Agrabah.",
      "A street thief and his monkey Abu find a magic lamp in the Cave of Wonders.",
      "Robin Williams voices a wisecracking Genie who grants three wishes.",
      "Jasmine and her love ride a magic carpet singing 'A Whole New World.'"
    ] },
    { name: "Men in Black", wiki: "Men in Black (1997 film)", year: 1997, tags: ["action"], hints: [
      "This is a sci-fi action comedy from the late 1990s.",
      "It is about a secret government agency.",
      "Agents monitor extraterrestrials living on Earth in disguise.",
      "Will Smith and Tommy Lee Jones wear dark suits and sunglasses.",
      "They erase people's memories with a flashy device called the neuralyzer."
    ] },
    { name: "Independence Day", wiki: "Independence Day (1996 film)", year: 1996, tags: ["action"], hints: [
      "This is a 1990s disaster blockbuster.",
      "Huge spaceships hover over the world's major cities.",
      "The White House is famously blown up by an alien laser.",
      "Will Smith plays a Marine pilot, and Jeff Goldblum uploads a computer virus to the mothership.",
      "The President gives a rousing speech before the big battle on the Fourth of July."
    ] },
    { name: "Groundhog Day", wiki: "Groundhog Day (film)", year: 1993, tags: ["comedy"], hints: [
      "This is a comedy from the early 1990s with a time twist.",
      "A grumpy TV weatherman travels to Punxsutawney, Pennsylvania.",
      "He wakes up every morning to 'I Got You Babe' on the clock radio.",
      "He is stuck living February 2 over and over again.",
      "Bill Murray stars alongside a famous furry forecaster named Phil."
    ] },
    { name: "Mrs. Doubtfire", year: 1993, tags: ["comedy"], hints: [
      "This is a family comedy from the early 1990s.",
      "It is set in San Francisco.",
      "A divorced dad desperately wants to spend more time with his three kids.",
      "He disguises himself as an elderly Scottish nanny.",
      "Robin Williams stars, and his disguise famously ends up with a face full of cake frosting."
    ] },
    { name: "Good Will Hunting", year: 1997, tags: ["drama"], hints: [
      "This is a drama from the late 1990s.",
      "It is set in Boston and features students and professors at MIT.",
      "Matt Damon and Ben Affleck won an Oscar for writing the screenplay.",
      "A janitor secretly solves hard math problems left on a hallway chalkboard.",
      "Robin Williams plays a therapist who repeats, \"It's not your fault.\""
    ] },
    { name: "Apollo 13", wiki: "Apollo 13 (film)", year: 1995, tags: ["drama"], hints: [
      "This is a 1990s drama based on a true story.",
      "It was directed by Ron Howard.",
      "Three astronauts must get home after an explosion on their spacecraft in 1970.",
      "Engineers on the ground must fit a square filter into a round hole.",
      "Tom Hanks says, \"Houston, we have a problem.\""
    ] },
    { name: "Monsters, Inc.", year: 2001, tags: ["animated"], hints: [
      "This is a computer-animated Pixar feature from the early 2000s.",
      "Its creatures power their city with the screams of children.",
      "A big blue furry creature named Sulley teams up with his one-eyed green buddy Mike.",
      "A little girl they call Boo sneaks through a closet door into their world.",
      "Billy Crystal and John Goodman voice the stars, who discover laughter is more powerful than fear."
    ] },
    { name: "The Incredibles", year: 2004, tags: ["animated"], hints: [
      "This is a computer-animated Pixar feature from 2004.",
      "It is about a family hiding special powers in suburbia.",
      "Bob Parr was once Mr. Incredible, and his wife Helen is Elastigirl.",
      "Their kids Violet and Dash can turn invisible and run super fast.",
      "The costume designer Edna Mode insists, \"No capes!\""
    ] },
    { name: "Elf", wiki: "Elf (film)", year: 2003, tags: ["comedy"], hints: [
      "This is a holiday comedy from the early 2000s.",
      "A man raised at the North Pole travels to New York City to find his father.",
      "He puts maple syrup on spaghetti and loves candy, candy canes, and cotton candy.",
      "Will Ferrell stars as Buddy in a green costume and yellow tights.",
      "\"The best way to spread Christmas cheer is singing loud for all to hear.\""
    ] },
    { name: "School of Rock", year: 2003, tags: ["comedy"], hints: [
      "This is a music-themed comedy from the early 2000s.",
      "A broke musician gets kicked out of his band.",
      "He pretends to be a substitute teacher at a fancy private academy.",
      "He turns the fifth-grade class into a band and enters a Battle of the Bands contest.",
      "Jack Black stars as Dewey Finn, and it later became a Broadway musical."
    ] },
    { name: "Gladiator", wiki: "Gladiator (2000 film)", year: 2000, tags: ["action"], hints: [
      "This is an epic that won Best Picture in 2000.",
      "It is set in the ancient Roman Empire.",
      "A betrayed general becomes a slave and must fight in the arena.",
      "Russell Crowe stars as Maximus, and Joaquin Phoenix plays the emperor Commodus.",
      "\"Are you not entertained?\""
    ] },
    { name: "Avatar", wiki: "Avatar (2009 film)", year: 2009, tags: ["action"], hints: [
      "This is a sci-fi blockbuster from 2009 famous for its 3D effects.",
      "James Cameron directed it, and it became the highest-grossing film ever.",
      "A paralyzed Marine controls a genetically engineered body on a distant moon.",
      "It is set on Pandora, home to tall blue people called the Na'vi.",
      "Jake Sully falls for Neytiri while humans try to mine a valuable mineral called unobtanium."
    ] },
    { name: "The Pursuit of Happyness", year: 2006, tags: ["drama"], hints: [
      "This is a drama from 2006 based on a true story.",
      "It is set in San Francisco in the early 1980s.",
      "A struggling salesman tries to sell bulky bone-density scanners.",
      "He and his young son are homeless while he works an unpaid stockbroker internship.",
      "Will Smith stars alongside his real-life son Jaden, and the title is famously misspelled."
    ] },
    { name: "Ratatouille", wiki: "Ratatouille (film)", year: 2007, tags: ["animated"], hints: [
      "This is a computer-animated Pixar feature from 2007.",
      "It is set in Paris.",
      "A rodent named Remy dreams of becoming a great chef.",
      "He steers a clumsy kitchen worker named Linguini by pulling his hair.",
      "The motto is \"Anyone can cook,\" and the dish he serves wins over a harsh food critic."
    ] },
    { name: "Moana", wiki: "Moana (2016 film)", year: 2016, tags: ["animated"], hints: [
      "This is a computer-animated Disney musical from 2016.",
      "It is set on a Polynesian island.",
      "A chief's daughter sails across the ocean with a dimwitted rooster named Heihei.",
      "Dwayne Johnson voices a shapeshifting demigod named Maui who sings 'You're Welcome.'",
      "The heroine sings 'How Far I'll Go' and must restore the heart of Te Fiti."
    ] },
    { name: "Encanto", wiki: "Encanto (film)", year: 2021, tags: ["animated"], hints: [
      "This is a computer-animated Disney musical from 2021.",
      "It is set in the mountains of Colombia.",
      "Every member of the Madrigal family has a magical gift, except one.",
      "Mirabel tries to save the family's enchanted house, called Casita, as it cracks.",
      "Its hit song is \"We Don't Talk About Bruno.\""
    ] },
    { name: "Mad Max: Fury Road", year: 2015, tags: ["action"], hints: [
      "This is an action film from 2015 that won six Oscars.",
      "It is set in a desert wasteland after civilization has collapsed.",
      "Charlize Theron plays Imperator Furiosa, who drives a war rig to rescue five wives.",
      "A tyrant named Immortan Joe leads a gang of War Boys, and one plays a flame-throwing guitar.",
      "It is mostly one long chase scene, and Tom Hardy plays the title wasteland drifter."
    ] },
    { name: "Interstellar", wiki: "Interstellar (film)", year: 2014, tags: ["action"], hints: [
      "This is a science fiction epic from 2014.",
      "Christopher Nolan directed it.",
      "Dust storms and crop failures threaten humanity's survival on Earth.",
      "Astronauts travel through a wormhole near Saturn to find a new home, and time slows near a black hole.",
      "Matthew McConaughey plays Cooper, who communicates with his daughter Murph through a bookshelf."
    ] },
    { name: "La La Land", year: 2016, tags: ["drama"], hints: [
      "This is a modern musical from 2016.",
      "It is set in Los Angeles.",
      "A jazz pianist and an aspiring actress fall in love while chasing their dreams.",
      "Ryan Gosling and Emma Stone star, and songs include 'City of Stars.'",
      "It was briefly announced by mistake as Best Picture at the Oscars."
    ] },
    { name: "The Social Network", year: 2010, tags: ["drama"], hints: [
      "This is a drama from 2010 based on true events.",
      "David Fincher directed it, and Aaron Sorkin wrote it.",
      "It is set at Harvard and in Silicon Valley.",
      "A college student is sued by former friends and twin brothers over the website he created.",
      "Jesse Eisenberg plays Mark Zuckerberg, the founder of Facebook."
    ] },
    { name: "Crazy Rich Asians", wiki: "Crazy Rich Asians (film)", year: 2018, tags: ["comedy"], hints: [
      "This is a romantic comedy from 2018.",
      "It is based on a bestselling novel by Kevin Kwan.",
      "An economics professor from New York travels to Singapore to meet her boyfriend's family.",
      "She discovers he is from one of the wealthiest families in the country.",
      "Constance Wu stars, and Michelle Yeoh plays the disapproving mother, Eleanor Young."
    ] },
    { name: "Top Gun: Maverick", year: 2022, tags: ["action"], hints: [
      "This is a blockbuster sequel from 2022.",
      "It came out 36 years after the original.",
      "A veteran Navy pilot trains young aviators for a dangerous mission.",
      "He clashes with Rooster, the son of his late friend Goose.",
      "Tom Cruise returns as Pete Mitchell, flying fighter jets for real."
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
    ] },
    { name: "Johnny B. Goode", year: 1958, tags: ["rock"], hints: [
      "This is a classic American recording from the early days of rock.",
      "It was written and performed by a guitarist from St. Louis known for his duckwalk.",
      "Its opening guitar riff is one of the most imitated intros in rock history.",
      "It was included on the Golden Record sent into space aboard the Voyager probes.",
      "Marty McFly plays it at the high school dance in 'Back to the Future'; Chuck Berry recorded it."
    ] },
    { name: "(I Can't Get No) Satisfaction", year: 1965, tags: ["rock"], hints: [
      "This is a 1960s British rock hit.",
      "It was the band's first No. 1 single in the United States.",
      "Its fuzz-toned guitar riff reportedly came to the guitarist in a dream.",
      "Keith Richards wrote the riff and Mick Jagger wrote the words.",
      "It is the signature song of the Rolling Stones, famous for its frustrated complaint in the title."
    ] },
    { name: "Like a Rolling Stone", year: 1965, tags: ["rock"], hints: [
      "This is a 1960s rock recording by an American singer-songwriter.",
      "It runs about six minutes, which was unusually long for a hit single at the time.",
      "It famously features a swirling organ part played by Al Kooper.",
      "It was recorded shortly before the artist shocked folk fans by going electric at Newport.",
      "This Bob Dylan classic mocks a once-privileged young woman who has lost everything."
    ] },
    { name: "My Girl", wiki: "My Girl (The Temptations song)", year: 1964, tags: ["rnb"], hints: [
      "This is a 1960s soul recording from Detroit.",
      "It was released on the Motown label and became a No. 1 hit.",
      "Smokey Robinson co-wrote it, and David Ruffin sang lead.",
      "It opens with an instantly recognizable bass line and finger snaps.",
      "This Temptations classic is a joyful love song about a sweetheart who brightens every day."
    ] },
    { name: "What's Going On", wiki: "What's Going On (Marvin Gaye song)", year: 1971, tags: ["rnb"], hints: [
      "This is a 1970s soul recording.",
      "It was released by Motown, though the label's founder initially resisted it as too political.",
      "It was inspired by police brutality at an antiwar protest and the Vietnam War.",
      "It is the title track of an album often ranked among the greatest ever made.",
      "Marvin Gaye sang this plea for peace and understanding."
    ] },
    { name: "Superstition", wiki: "Superstition (song)", year: 1972, tags: ["rnb"], hints: [
      "This is a 1970s funk and soul hit.",
      "It was recorded by a musician who signed with Motown as a child prodigy.",
      "Its funky groove is built around a clavinet riff.",
      "It was originally intended for guitarist Jeff Beck.",
      "Stevie Wonder's song warns against believing in bad-luck omens."
    ] },
    { name: "Rapper's Delight", year: 1979, tags: ["hiphop"], hints: [
      "This is a recording from the late 1970s.",
      "It is widely credited with bringing its genre to mainstream radio for the first time.",
      "It was performed by a trio from New Jersey on the Sugar Hill label.",
      "It borrows its groove from Chic's disco hit 'Good Times'.",
      "The Sugarhill Gang released this roughly 15-minute track in 1979."
    ] },
    { name: "Stayin' Alive", year: 1977, tags: ["pop"], hints: [
      "This is a 1970s dance hit.",
      "It was performed by a trio of brothers famous for their falsetto harmonies.",
      "It appeared on one of the best-selling movie soundtracks of all time.",
      "Its tempo is often recommended as a guide for doing CPR chest compressions.",
      "John Travolta struts down a Brooklyn street to this Bee Gees song in 'Saturday Night Fever'."
    ] },
    { name: "Livin' on a Prayer", year: 1986, tags: ["rock"], hints: [
      "This is a 1980s rock anthem from New Jersey.",
      "It was a No. 1 hit from the album 'Slippery When Wet'.",
      "It features a famous talk box guitar effect.",
      "It tells the story of a working-class couple named Tommy and Gina.",
      "This Bon Jovi song is a karaoke and stadium sing-along favorite."
    ] },
    { name: "Every Breath You Take", year: 1983, tags: ["rock"], hints: [
      "This is a 1980s hit by a British band.",
      "It was the biggest U.S. hit of 1983 and won a Grammy for Song of the Year.",
      "Many people mistake it for a love song, but its writer described it as being about obsession and surveillance.",
      "Puff Daddy sampled it for a 1997 tribute to The Notorious B.I.G.",
      "Sting wrote this song for The Police, on the album 'Synchronicity'."
    ] },
    { name: "Back in Black", wiki: "Back in Black (song)", year: 1980, tags: ["rock"], hints: [
      "This is a hard rock recording from 1980.",
      "It was made by an Australian band famous for loud, guitar-driven anthems.",
      "It honors the band's original singer, Bon Scott, who had died earlier that year.",
      "It is the title track of one of the best-selling albums in history.",
      "AC/DC recorded it with new singer Brian Johnson, and Angus Young plays its iconic riff."
    ] },
    { name: "Like a Prayer", wiki: "Like a Prayer (song)", year: 1989, tags: ["pop"], hints: [
      "This is a late-1980s hit by a female superstar.",
      "It features a gospel choir.",
      "Its music video, featuring burning crosses and a saint, caused major controversy.",
      "Pepsi pulled a commercial built around it after the backlash.",
      "Madonna released this song as the title track of her 1989 album."
    ] },
    { name: "Girls Just Want to Have Fun", year: 1983, tags: ["pop"], hints: [
      "This is a 1980s hit by a female singer.",
      "It was a breakthrough for a New York singer known for her colorful hair and quirky style.",
      "Its music video featured pro wrestling manager Captain Lou Albano.",
      "It became a feminist anthem about women seeking the same freedom as men.",
      "Cyndi Lauper's debut album 'She's So Unusual' opens with this upbeat hit."
    ] },
    { name: "I Wanna Dance with Somebody", wiki: "I Wanna Dance with Somebody (Who Loves Me)", year: 1987, tags: ["pop"], hints: [
      "This is a 1980s pop hit by a female singer.",
      "The singer was famous for her powerful voice and was the cousin of Dionne Warwick.",
      "It won a Grammy for Best Female Pop Vocal Performance.",
      "A 2022 biopic of the singer took its title from this song.",
      "Whitney Houston's upbeat hit is about longing for someone to share a night out on the floor."
    ] },
    { name: "When Doves Cry", year: 1984, tags: ["rnb"], hints: [
      "This is a 1980s hit by a Minneapolis musician.",
      "It was the best-selling single in the U.S. in 1984.",
      "It is famous for having no bass line at all.",
      "It appeared on a soundtrack for a film in which the artist starred.",
      "Prince wrote this song for the movie and album 'Purple Rain'."
    ] },
    { name: "The Message", wiki: "The Message (Grandmaster Flash and the Furious Five song)", year: 1982, tags: ["hiphop"], hints: [
      "This is an early 1980s recording from New York.",
      "It was one of the first tracks in its genre to focus on serious social commentary.",
      "It describes the stress of poverty and crime in the inner city.",
      "It was among the first recordings of its kind added to the Library of Congress National Recording Registry.",
      "Grandmaster Flash and the Furious Five released this track, with Melle Mel rapping."
    ] },
    { name: "Fight the Power", wiki: "Fight the Power (Public Enemy song)", year: 1989, tags: ["hiphop"], hints: [
      "This is a late-1980s track by a New York group.",
      "It was featured prominently in a Spike Lee film.",
      "It plays repeatedly on a boombox carried by Radio Raheem in 'Do the Right Thing'.",
      "The group was led by Chuck D, with Flavor Flav as hype man.",
      "Public Enemy's politically charged anthem urges listeners to resist authority."
    ] },
    { name: "Wonderwall", wiki: "Wonderwall (song)", year: 1995, tags: ["rock"], hints: [
      "This is a 1990s rock hit from England.",
      "It was performed by a Manchester band led by two feuding brothers.",
      "It became a famous cliché as the song every beginner strums on acoustic guitar at parties.",
      "It appears on the album '(What's the Story) Morning Glory?'",
      "Liam Gallagher sang this Oasis hit, written by Noel Gallagher."
    ] },
    { name: "Creep", wiki: "Creep (Radiohead song)", year: 1992, tags: ["rock"], hints: [
      "This is an early-1990s rock recording from England.",
      "It was the debut single of a band that later became known for experimental albums like 'OK Computer'.",
      "Its guitarist adds loud, crunching guitar blasts just before the chorus.",
      "The singer describes feeling like a weirdo who doesn't belong.",
      "Thom Yorke sings this breakthrough hit for Radiohead."
    ] },
    { name: "No Diggity", year: 1996, tags: ["rnb"], hints: [
      "This is a 1990s R&B hit.",
      "It was performed by a group fronted by Teddy Riley, a pioneer of new jack swing.",
      "Dr. Dre delivers a guest verse.",
      "Its slinky piano groove samples Bill Withers' 'Grandma's Hands'.",
      "Blackstreet topped the charts with this song whose title is slang for 'no doubt'."
    ] },
    { name: "No Scrubs", year: 1999, tags: ["rnb"], hints: [
      "This is a late-1990s R&B hit by a female group.",
      "The group's members were known as T-Boz, Left Eye, and Chilli.",
      "It topped the Billboard Hot 100 and won a Grammy.",
      "It rejects men who have no money, no car, and no ambition.",
      "TLC released this anthem from the album 'FanMail'."
    ] },
    { name: "Juicy", wiki: "Juicy (The Notorious B.I.G. song)", year: 1994, tags: ["hiphop"], hints: [
      "This is a 1990s track from New York.",
      "It was the debut single of a Brooklyn artist also called Biggie Smalls.",
      "It samples a 1983 funk-soul hit by the band Mtume.",
      "It is a rags-to-riches story about going from poverty to fame.",
      "The Notorious B.I.G. released this classic on his album 'Ready to Die'."
    ] },
    { name: "California Love", year: 1995, tags: ["hiphop"], hints: [
      "This is a mid-1990s West Coast hit.",
      "It was the comeback single of an artist just released from prison.",
      "Its music video was inspired by the post-apocalyptic movie 'Mad Max Beyond Thunderdome'.",
      "It features Roger Troutman's talk box vocals.",
      "Tupac Shakur and Dr. Dre celebrate their home state in this anthem."
    ] },
    { name: "Ice Ice Baby", year: 1990, tags: ["hiphop"], hints: [
      "This is a 1990 hit by a performer from Texas.",
      "It was the first track of its genre to top the Billboard Hot 100.",
      "Its bass line is famously borrowed from Queen and David Bowie's 'Under Pressure'.",
      "The performer's real name is Robert Van Winkle.",
      "Vanilla Ice released this hit, whose title is a chant repeated in the chorus."
    ] },
    { name: "My Heart Will Go On", year: 1997, tags: ["pop"], hints: [
      "This is a 1990s ballad by a female singer.",
      "It was sung by a Canadian superstar from Quebec.",
      "It won the Academy Award for Best Original Song.",
      "Its melody is often played on a tin whistle or recorder as a joke.",
      "Celine Dion sang this love theme from 'Titanic'."
    ] },
    { name: "In the End", wiki: "In the End (Linkin Park song)", year: 2000, tags: ["rock"], hints: [
      "This is an early-2000s rock hit.",
      "It blends heavy guitars with rapped verses, a style called nu metal.",
      "It appeared on the band's debut album, 'Hybrid Theory'.",
      "Mike Shinoda raps the verses while Chester Bennington belts the chorus.",
      "Linkin Park's biggest hit is about giving everything to something that ultimately fell apart."
    ] },
    { name: "Boulevard of Broken Dreams", wiki: "Boulevard of Broken Dreams (Green Day song)", year: 2004, tags: ["rock"], hints: [
      "This is a 2000s rock hit.",
      "It was performed by a punk trio from California.",
      "It won the Grammy for Record of the Year.",
      "It appeared on the rock opera album 'American Idiot'.",
      "Billie Joe Armstrong of Green Day sings about loneliness and isolation."
    ] },
    { name: "Yeah!", wiki: "Yeah! (Usher song)", year: 2004, tags: ["rnb"], hints: [
      "This is a 2000s R&B and club hit.",
      "It was the biggest song of 2004 on the Billboard charts.",
      "It features Lil Jon and Ludacris and helped popularize crunk music.",
      "It came from the singer's best-selling album 'Confessions'.",
      "Usher's smash hit is named after Lil Jon's famous catchphrase."
    ] },
    { name: "Fallin'", wiki: "Fallin' (Alicia Keys song)", year: 2001, tags: ["rnb"], hints: [
      "This is a 2000s R&B ballad by a female singer.",
      "It was the debut single of a classically trained pianist from New York.",
      "It topped the Billboard Hot 100 and won the Grammy for Song of the Year.",
      "It appeared on the debut album 'Songs in A Minor'.",
      "Alicia Keys sings about the ups and downs of a love she can't escape."
    ] },
    { name: "Toxic", wiki: "Toxic (song)", year: 2003, tags: ["pop"], hints: [
      "This is a 2000s pop hit by a female superstar.",
      "It features a dramatic, Bollywood-inspired string riff.",
      "It won the singer her first Grammy, for Best Dance Recording.",
      "In its music video the singer plays a flight attendant and secret agent.",
      "Britney Spears compares a dangerous love to poison in this hit."
    ] },
    { name: "Since U Been Gone", year: 2004, tags: ["pop"], hints: [
      "This is a 2000s pop-rock hit by a female singer.",
      "The singer first became famous by winning a TV singing competition.",
      "It was co-written by hitmakers Max Martin and Dr. Luke.",
      "It is a cathartic breakup anthem that builds to a loud, crunchy chorus.",
      "Kelly Clarkson, the first 'American Idol' winner, celebrates being free of an ex."
    ] },
    { name: "Gasolina", year: 2004, tags: ["hiphop"], hints: [
      "This is a 2000s Spanish-language party hit.",
      "It was performed by a Puerto Rican artist often called a king of his genre.",
      "It helped bring reggaeton to a worldwide audience.",
      "It appeared on the album 'Barrio Fino'.",
      "Daddy Yankee's breakout hit is named after a type of car fuel."
    ] },
    { name: "Gold Digger", wiki: "Gold Digger (Kanye West song)", year: 2005, tags: ["hiphop"], hints: [
      "This is a 2005 hit.",
      "It was performed by a Chicago artist who started as a producer.",
      "Jamie Foxx sings on it, imitating Ray Charles.",
      "It samples Ray Charles' 'I Got a Woman'.",
      "Kanye West warns about women who are only after a man's money."
    ] },
    { name: "Radioactive", wiki: "Radioactive (Imagine Dragons song)", year: 2012, tags: ["rock"], hints: [
      "This is a 2010s rock hit.",
      "It was performed by a band from Las Vegas.",
      "It set a record for the longest run on the Billboard Hot 100 at the time.",
      "It won a Grammy for Best Rock Performance and has a post-apocalyptic feel.",
      "Imagine Dragons' booming anthem is about waking up in a ruined, apocalyptic world."
    ] },
    { name: "Bad Guy", wiki: "Bad Guy (Billie Eilish song)", year: 2019, tags: ["pop"], hints: [
      "This is a late-2010s pop hit.",
      "It was written and produced by a teenage singer and her older brother, Finneas.",
      "It ended the record-breaking run of 'Old Town Road' at No. 1.",
      "It won the Grammy for Record of the Year and Song of the Year.",
      "Billie Eilish's hit mocks a guy who acts tough, ending with a beat switch."
    ] },
    { name: "Leave the Door Open", year: 2021, tags: ["rnb"], hints: [
      "This is a 2020s R&B hit.",
      "It was performed by a duo that formed while on tour together.",
      "It is a smooth, 1970s-style soul ballad.",
      "It won four Grammys, including Record and Song of the Year.",
      "Bruno Mars and Anderson .Paak, known as Silk Sonic, invite a lover to come over."
    ] },
    { name: "Kill Bill", wiki: "Kill Bill (song)", year: 2022, tags: ["rnb"], hints: [
      "This is a 2020s R&B hit by a female singer.",
      "It was performed by a singer from St. Louis signed to Top Dawg Entertainment.",
      "It appeared on the acclaimed album 'SOS'.",
      "Its title references a Quentin Tarantino revenge film, and the video mimics it.",
      "SZA darkly jokes about getting revenge on an ex and his new girlfriend."
    ] },
    { name: "Hotline Bling", year: 2015, tags: ["hiphop"], hints: [
      "This is a 2010s hit by a Canadian artist.",
      "The artist was a former child actor on 'Degrassi'.",
      "Its music video, with colorful lights and awkward dance moves, became a massive meme.",
      "It is about an ex who used to call late at night.",
      "Drake's hit is about a cell phone that used to ring for him."
    ] },
    { name: "HUMBLE.", wiki: "Humble (song)", year: 2017, tags: ["hiphop"], hints: [
      "This is a 2017 hit by an artist from California.",
      "It was produced by Mike WiLL Made-It and features a booming piano line.",
      "The artist later became the first musician outside classical and jazz to win a Pulitzer Prize.",
      "It appeared on the album 'DAMN.'",
      "Kendrick Lamar tells boastful rivals to sit down and stay modest."
    ] },
    { name: "Mi Gente", year: 2017, tags: ["hiphop"], hints: [
      "This is a 2017 Spanish-language dance hit.",
      "It was performed by a Colombian reggaeton star and a French DJ.",
      "A remix featuring Beyoncé donated proceeds to hurricane relief.",
      "It is built on Willy William's earlier track 'Voodoo Song' and has a buzzing, distinctive hook.",
      "J Balvin and Willy William's hit calls on 'my people' to dance."
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
    ] },
    { name: "Moose", tags: ["mammal"], hints: [
      "This creature lives in cold northern forests.",
      "It is the largest member of the deer family.",
      "Males grow huge, flat, shovel-shaped antlers.",
      "It has a long face and a flap of skin called a bell hanging from its throat.",
      "Bullwinkle from 'Rocky and Bullwinkle' is a cartoon one."
    ] },
    { name: "Skunk", tags: ["mammal"], hints: [
      "This creature is common across North America.",
      "It is a small, mostly nocturnal animal with a bushy tail.",
      "It is famous for black fur with bold white stripes.",
      "When threatened, it sprays a foul-smelling liquid from glands under its tail.",
      "Pepé Le Pew is a cartoon one, and smelling like one is not a compliment."
    ] },
    { name: "Beaver", tags: ["mammal"], hints: [
      "This creature lives near water in North America and Europe.",
      "It is a large rodent that works mostly at night.",
      "It has a flat, paddle-shaped tail it slaps on the water as a warning.",
      "It gnaws down trees with its orange teeth.",
      "It is famous for building dams and lodges out of sticks and mud."
    ] },
    { name: "Porcupine", tags: ["mammal"], hints: [
      "This creature lives in forests and deserts on several continents.",
      "It is a slow-moving rodent that often climbs trees.",
      "Its body is covered with thousands of sharp, defensive spikes.",
      "Its quills detach easily and get stuck in predators.",
      "Its name comes from Latin words meaning 'quill pig.'"
    ] },
    { name: "Armadillo", tags: ["mammal"], hints: [
      "This creature lives in the Americas, including Texas.",
      "It digs burrows and eats insects with a long sticky tongue.",
      "Its body is protected by a leathery, plated shell.",
      "One species can roll itself up into a tight ball.",
      "Its name is Spanish for 'little armored one.'"
    ] },
    { name: "Red panda", tags: ["mammal"], hints: [
      "This creature lives in mountain forests of Asia.",
      "It is about the size of a house cat and spends much of its life in trees.",
      "It eats mostly bamboo despite being in the order of meat-eaters.",
      "It has rusty fur, a white-marked face, and a fluffy ringed tail.",
      "It is often called the 'firefox,' and it shares a name with a famous black-and-white bear."
    ] },
    { name: "Meerkat", tags: ["mammal"], hints: [
      "This creature lives in the deserts and grasslands of southern Africa.",
      "It is a small member of the mongoose family that lives in large groups.",
      "Group members take turns standing upright on guard duty.",
      "It digs burrows and eats insects, scorpions, and lizards.",
      "Timon from 'The Lion King' is one."
    ] },
    { name: "Rhinoceros", tags: ["mammal"], hints: [
      "This creature lives in Africa and Asia.",
      "It is a huge, thick-skinned plant-eater.",
      "Its horns are made of keratin, the same material as human fingernails.",
      "Several species are critically endangered because of poaching for their horns.",
      "Its name means 'nose horn,' and it is often called a 'rhino.'"
    ] },
    { name: "Toucan", tags: ["bird"], hints: [
      "This creature lives in the rainforests of Central and South America.",
      "It is a colorful tree-dwelling bird that eats mostly fruit.",
      "Its bill can be about a third of its body length but is surprisingly light.",
      "Its oversized beak is often bright orange, yellow, and black.",
      "A cartoon one named Sam is the mascot on boxes of Froot Loops cereal."
    ] },
    { name: "Pelican", tags: ["bird"], hints: [
      "This creature lives near coasts, lakes, and rivers.",
      "It is a large water bird with a very long bill.",
      "It has a stretchy throat pouch it uses to scoop up fish.",
      "The brown species is the state bird of Louisiana.",
      "A famous limerick says its beak can hold more than its belly can."
    ] },
    { name: "Woodpecker", tags: ["bird"], hints: [
      "This creature lives in forests around the world.",
      "It is a bird that clings to tree trunks with stiff tail feathers.",
      "Its skull and tongue are specially built to absorb repeated impacts.",
      "It drums rapidly on trees to find insects and make nesting holes.",
      "Woody, a classic cartoon character with a famous laugh, is one."
    ] },
    { name: "Emu", tags: ["bird"], hints: [
      "This creature is native to Australia.",
      "It is a large bird that cannot fly but can run very fast.",
      "It is the second-tallest bird in the world, after the ostrich.",
      "It appears on Australia's coat of arms alongside a kangaroo.",
      "In 1932, Australia fought a so-called 'war' against these birds and lost."
    ] },
    { name: "Cardinal", wiki: "Northern cardinal", tags: ["bird"], hints: [
      "This creature is common in backyards across the eastern United States.",
      "It is a songbird with a crest of feathers on its head.",
      "Males are bright red with a black mask around the beak.",
      "It is the state bird of seven states, more than any other bird.",
      "It is the mascot of St. Louis's baseball team and Arizona's football team."
    ] },
    { name: "Blue jay", tags: ["bird"], hints: [
      "This creature is common in North American woods and backyards.",
      "It is a noisy, intelligent bird related to crows.",
      "It has a crest and bright plumage with black and white markings.",
      "It can mimic the call of a red-tailed hawk.",
      "Toronto's Major League Baseball team is named after it."
    ] },
    { name: "Robin", wiki: "American robin", tags: ["bird"], hints: [
      "This creature is common across North America.",
      "It is a songbird often seen hopping on lawns hunting earthworms.",
      "It has a gray-brown back and a rusty orange-red breast.",
      "It lays eggs famous for their distinctive sky-blue color.",
      "It is seen as a sign of spring, and Batman's sidekick shares its name."
    ] },
    { name: "Puffin", wiki: "Atlantic puffin", tags: ["bird"], hints: [
      "This creature lives on cold northern seacoasts and islands.",
      "It is a seabird that dives underwater to catch small fish.",
      "It can carry a dozen or more fish crosswise in its bill at once.",
      "It has a black-and-white body and a big, colorful striped beak in summer.",
      "It is nicknamed the 'clown of the sea' or 'sea parrot.'"
    ] },
    { name: "Kiwi", wiki: "Kiwi (bird)", tags: ["bird"], hints: [
      "This creature is found only in New Zealand.",
      "It is a small, flightless, nocturnal bird with hair-like feathers.",
      "Unlike most birds, its nostrils are at the tip of its long beak.",
      "It lays one of the largest eggs relative to body size of any bird.",
      "It is New Zealand's national symbol and shares its name with a fuzzy fruit."
    ] },
    { name: "Swan", tags: ["bird"], hints: [
      "This creature lives on lakes and rivers in many parts of the world.",
      "It is a large water bird known for its grace.",
      "It has a very long, curved neck and often mates for life.",
      "Most species are white, but Australia has a black one.",
      "'The Ugly Duckling' grows up to become one, and a famous ballet is named after its lake."
    ] },
    { name: "Roadrunner", tags: ["bird"], hints: [
      "This creature lives in the deserts of the American Southwest and Mexico.",
      "It is a ground-dwelling bird in the cuckoo family.",
      "It can run around 20 miles per hour and eats lizards and even rattlesnakes.",
      "It is the state bird of New Mexico.",
      "In Looney Tunes it says 'Meep meep!' while Wile E. Coyote chases it."
    ] },
    { name: "Starfish", tags: ["sea"], hints: [
      "This creature lives on the ocean floor and in tide pools.",
      "It is an invertebrate with no brain and no blood.",
      "It can regrow lost limbs, and some species can regrow a whole body from one arm.",
      "It eats clams by pushing its stomach out of its body.",
      "Patrick from 'SpongeBob SquarePants' is one, and scientists prefer to call it a sea star."
    ] },
    { name: "Clownfish", wiki: "Amphiprioninae", tags: ["sea"], hints: [
      "This creature lives on coral reefs in the Indian and Pacific Oceans.",
      "It is a small, brightly colored fish.",
      "It lives safely among the stinging tentacles of sea anemones.",
      "It is orange with white stripes outlined in black.",
      "Nemo and his dad Marlin from 'Finding Nemo' are this kind of fish."
    ] },
    { name: "Manatee", tags: ["sea"], hints: [
      "This creature lives in warm, shallow coastal waters and rivers.",
      "It is a large, slow, gentle plant-eating mammal.",
      "It has a paddle-shaped tail and is related to elephants.",
      "Many in Florida carry scars from boat propellers.",
      "It is nicknamed the 'sea cow,' and sailors may have mistaken it for mermaids."
    ] },
    { name: "Sea otter", tags: ["sea"], hints: [
      "This creature lives along the North Pacific coast.",
      "It is a marine mammal with the densest fur of any animal.",
      "It floats on its back and uses rocks as tools to crack open shellfish.",
      "It sometimes holds paws with others while sleeping so they don't drift apart.",
      "It is a common sight in Monterey Bay, California, wrapped in kelp."
    ] },
    { name: "Walrus", tags: ["sea"], hints: [
      "This creature lives in the icy Arctic.",
      "It is a huge marine mammal that hauls out on sea ice in large herds.",
      "It has thick whiskers and uses them to find clams on the seafloor.",
      "Both males and females have long ivory tusks.",
      "The Beatles sang 'I am the ___' about it, and it appears with the Carpenter in 'Alice.'"
    ] },
    { name: "Stingray", tags: ["sea"], hints: [
      "This creature lives in warm, shallow ocean waters, and some live in rivers.",
      "It is a flat fish related to sharks, with a skeleton made of cartilage.",
      "It often hides buried in sand on the seafloor.",
      "It has a venomous barb on its long whip-like tail.",
      "Beachgoers do the 'shuffle' to avoid stepping on one when wading in shallow water."
    ] },
    { name: "Hammerhead shark", tags: ["sea"], hints: [
      "This creature lives in warm oceans around the world.",
      "It is a predator with rows of sharp teeth.",
      "Its eyes are set far apart, giving it nearly all-around vision.",
      "Its wide, flat head helps it sense prey like stingrays hiding in sand.",
      "Its head is shaped like a T, resembling a carpenter's tool."
    ] },
    { name: "Lobster", tags: ["sea"], hints: [
      "This creature lives on the rocky ocean floor.",
      "It is a crustacean with a hard shell and ten legs.",
      "It has two big front claws, one for crushing and one for cutting.",
      "It turns bright red when cooked.",
      "Maine is famous for it, often served in a buttered roll."
    ] },
    { name: "Narwhal", tags: ["sea"], hints: [
      "This creature lives in the icy waters of the Arctic.",
      "It is a medium-sized whale that travels in groups called pods.",
      "It has no dorsal fin and has mottled gray skin.",
      "Its long spiral tusk is actually a tooth that grows through its upper lip.",
      "It is often called the 'unicorn of the sea.'"
    ] },
    { name: "Pufferfish", wiki: "Tetraodontidae", tags: ["sea"], hints: [
      "This creature lives mostly in warm ocean waters.",
      "It is a slow-swimming fish with a beak-like mouth.",
      "Many contain a deadly toxin, yet in Japan it is served as a delicacy called fugu.",
      "When threatened, it gulps water to swell up into a spiky ball.",
      "Bloat from 'Finding Nemo' is one that blows up like a balloon."
    ] },
    { name: "Squid", tags: ["sea"], hints: [
      "This creature lives in oceans all over the world.",
      "It is a fast-swimming invertebrate related to the octopus.",
      "It has eight arms and two longer tentacles and squirts ink to escape.",
      "The giant and colossal species have the largest eyes of any animal.",
      "Fried rings of it are served as calamari."
    ] },
    { name: "Alligator", wiki: "American alligator", tags: ["reptile"], hints: [
      "This creature lives in the southeastern United States.",
      "It is a large reptile that spends much of its time in freshwater.",
      "It has a broad, rounded U-shaped snout, unlike its close relative.",
      "Florida and Louisiana have more than a million of them each.",
      "The University of Florida's teams, the Gators, are named after it."
    ] },
    { name: "Rattlesnake", tags: ["reptile"], hints: [
      "This creature lives in the Americas, especially in deserts.",
      "It is a venomous pit viper.",
      "It senses heat from prey through pits on its face.",
      "It shakes the tip of its tail to make a warning buzz.",
      "The 'Don't Tread on Me' flag features a coiled one."
    ] },
    { name: "Iguana", wiki: "Green iguana", tags: ["reptile"], hints: [
      "This creature lives in tropical Central and South America and the Caribbean.",
      "It is a large plant-eating lizard that often lives in trees.",
      "It has a row of spines down its back and a flap of skin under its chin.",
      "It can drop from high branches and survive, and is a common exotic pet.",
      "In Florida, cold snaps sometimes make them fall from trees."
    ] },
    { name: "Gecko", tags: ["reptile"], hints: [
      "This creature lives in warm climates around the world.",
      "It is a small lizard, and many species are active at night.",
      "Most species cannot blink, so they lick their eyes to clean them.",
      "Tiny hairs on its toes let it climb walls and even walk upside down on ceilings.",
      "A green one with a British accent is the mascot of GEICO insurance."
    ] },
    { name: "Galápagos tortoise", tags: ["reptile"], hints: [
      "This creature lives on a group of islands in the Pacific Ocean.",
      "It is a giant, slow-moving reptile that can weigh over 500 pounds.",
      "It can live well over 100 years and survive months without food or water.",
      "Its islands were named after it, since an old Spanish word for saddle referred to its shell.",
      "Charles Darwin studied it, and the famous Lonesome George was one."
    ] },
    { name: "Salamander", tags: ["reptile"], hints: [
      "This creature lives in damp forests and streams.",
      "It is an amphibian with smooth, moist skin and a long tail.",
      "Many species can regrow lost legs and tails.",
      "It looks like a lizard but has no scales or claws.",
      "In old legends, it was said to live in fire."
    ] },
    { name: "Gila monster", tags: ["reptile"], hints: [
      "This creature lives in the deserts of the American Southwest and Mexico.",
      "It is a slow, heavy-bodied lizard that spends most of its life underground.",
      "It has beaded orange-pink and black skin.",
      "It is one of the few venomous lizards in the world.",
      "A drug for diabetes was developed from a compound in its saliva."
    ] },
    { name: "Python", wiki: "Pythonidae", tags: ["reptile"], hints: [
      "This creature lives in Africa, Asia, and Australia.",
      "It is a large reptile that is not venomous.",
      "It kills prey by squeezing it until it suffocates.",
      "An invasive Burmese species has spread through Florida's Everglades.",
      "Kaa in 'The Jungle Book' is one, and a programming language shares its name."
    ] },
    { name: "Toad", tags: ["reptile"], hints: [
      "This creature lives on every continent except Antarctica.",
      "It is an amphibian that lays eggs that hatch into tadpoles.",
      "It has dry, bumpy skin and short legs for hopping and walking.",
      "Glands behind its eyes can release a bitter toxin.",
      "An old myth says touching one gives you warts."
    ] },
    { name: "Anaconda", wiki: "Green anaconda", tags: ["reptile"], hints: [
      "This creature lives in the rainforests and swamps of South America.",
      "It is a powerful reptile that spends lots of time in the water.",
      "It is the heaviest snake in the world, weighing over 200 pounds.",
      "It squeezes its prey and swallows it whole.",
      "A 1997 horror movie starring Jennifer Lopez is named after it."
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
    ] },
    { name: "Ravioli", tags: ["mains", "italian"], hints: [
      "This is a savory dish served hot.",
      "It is a type of pasta.",
      "Each piece is a little pillow with a filling sealed inside.",
      "The square pockets are often stuffed with cheese or meat and topped with tomato sauce.",
      "Chef Boyardee famously sells it in a can."
    ] },
    { name: "Risotto", tags: ["mains", "italian"], hints: [
      "This is a savory dish usually eaten with a fork or spoon.",
      "It comes from northern Italy.",
      "It is made from a grain that is stirred slowly while hot broth is added a ladle at a time.",
      "Arborio rice gives it a rich, creamy texture.",
      "Gordon Ramsay often scolds contestants about it on 'Hell's Kitchen'; a classic version uses saffron and comes from Milan."
    ] },
    { name: "Enchiladas", wiki: "Enchilada", tags: ["mains", "mexican"], hints: [
      "This is a savory dish usually baked and served hot.",
      "It comes from Mexico.",
      "Corn tortillas are wrapped around a filling and lined up in a pan.",
      "They are smothered in red or green chile sauce and topped with melted cheese.",
      "Their name comes from a Spanish word meaning 'seasoned with chili.'"
    ] },
    { name: "Fajitas", wiki: "Fajita", tags: ["mains", "mexican"], hints: [
      "This is a savory dish served hot.",
      "It is a Tex-Mex favorite.",
      "It is served with warm tortillas so diners can build their own wraps.",
      "Strips of grilled meat, peppers, and onions are brought out on a skillet.",
      "At restaurants it arrives loudly sizzling, turning heads across the room."
    ] },
    { name: "Fried rice", tags: ["mains", "asian"], hints: [
      "This is a savory dish served hot.",
      "It is a staple of Chinese takeout.",
      "It is a great way to use up leftover cooked grains from the day before.",
      "It is tossed in a wok with scrambled egg, peas, carrots, and soy sauce.",
      "Hibachi chefs often make it on a flat grill, sometimes shaping a heart out of it."
    ] },
    { name: "Meatloaf", tags: ["mains", "american"], hints: [
      "This is a savory dish served hot.",
      "It is classic American comfort food often made at home.",
      "Ground beef is mixed with breadcrumbs and egg, then baked.",
      "It is shaped like a loaf of bread and often glazed with ketchup on top.",
      "It shares its name with the singer of 'Bat Out of Hell.'"
    ] },
    { name: "Chicken tikka masala", tags: ["mains", "asian"], hints: [
      "This is a savory dish served hot.",
      "It is one of the most popular items at Indian restaurants in the West.",
      "It is often served with basmati rice and naan.",
      "Pieces of marinated, grilled poultry simmer in a creamy, orange-colored tomato sauce.",
      "It has been called Britain's national dish."
    ] },
    { name: "Tamales", wiki: "Tamale", tags: ["mains", "mexican"], hints: [
      "This is a savory food served warm.",
      "It comes from Mexico and Central America and dates back thousands of years.",
      "A corn-based dough called masa surrounds a filling of meat, cheese, or chiles.",
      "It is steamed while wrapped in a corn husk or banana leaf, which you remove before eating.",
      "Families often gather to make them by the dozen around Christmas."
    ] },
    { name: "Oatmeal", tags: ["breakfast"], hints: [
      "This is a warm morning food.",
      "It is often recommended as a heart-healthy choice.",
      "It is made by cooking a grain in water or milk until soft.",
      "People top the bowl with brown sugar, raisins, berries, or cinnamon.",
      "Quaker sells it in a round cardboard canister."
    ] },
    { name: "Eggs Benedict", tags: ["breakfast", "american"], hints: [
      "This is a morning dish often ordered at brunch.",
      "It is believed to have been invented in New York City.",
      "It is served on a toasted English muffin.",
      "It is topped with Canadian bacon and a poached egg on each half.",
      "Everything is covered in rich, yellow hollandaise sauce."
    ] },
    { name: "Biscuits and gravy", tags: ["breakfast", "american"], hints: [
      "This is a hearty morning dish.",
      "It is a beloved part of Southern cooking in the United States.",
      "It starts with soft, flaky baked rolls split in half.",
      "They are smothered in a thick, white, peppery sauce.",
      "The sauce is made with pan drippings and crumbled pork sausage."
    ] },
    { name: "Huevos rancheros", tags: ["breakfast", "mexican"], hints: [
      "This is a morning dish served hot.",
      "It comes from Mexico, where it was a traditional farm meal.",
      "It is served on lightly fried corn tortillas.",
      "Fried eggs are topped with a warm tomato-chili salsa.",
      "Its Spanish name means 'ranch-style eggs.'"
    ] },
    { name: "Breakfast burrito", tags: ["breakfast", "mexican", "american"], hints: [
      "This is a morning food you can eat with your hands.",
      "It is popular in the American Southwest, especially New Mexico.",
      "Everything is rolled up inside a large flour tortilla.",
      "It is filled with scrambled eggs, potatoes, cheese, and often bacon or chorizo.",
      "It is a morning version of a big Mexican-style wrap, sold at fast-food chains like Taco Bell and McDonald's."
    ] },
    { name: "Hash browns", tags: ["breakfast", "american"], hints: [
      "This is a morning side dish.",
      "It is a diner and fast-food staple.",
      "It is made from just one main vegetable.",
      "Shredded potatoes are fried on a griddle until golden and crispy.",
      "At Waffle House you can order them 'scattered, smothered, and covered.'"
    ] },
    { name: "Bacon", tags: ["breakfast"], hints: [
      "This is a morning food that is cooked until crispy.",
      "It comes from an animal.",
      "It is sold in thin strips and sizzles loudly in a frying pan.",
      "It is cured pork belly, often served alongside eggs.",
      "It is the 'B' in a BLT sandwich."
    ] },
    { name: "Cinnamon roll", tags: ["breakfast"], hints: [
      "This is a sweet baked treat often eaten in the morning.",
      "It is a soft, yeasted pastry.",
      "Dough is spread with butter and sugar, then rolled into a log and sliced.",
      "It has a spiral shape and is topped with white icing or cream cheese frosting.",
      "Cinnabon is famous for selling them at malls and airports."
    ] },
    { name: "Crepe", wiki: "Crêpe", tags: ["breakfast", "european"], hints: [
      "This is a food that can be sweet or savory.",
      "It comes from France, especially the region of Brittany.",
      "It is made from a thin batter poured onto a hot, flat pan.",
      "It is very thin and is often folded and filled with Nutella, fruit, or ham and cheese.",
      "It is like a very thin pancake sold at street stands in Paris."
    ] },
    { name: "Granola", tags: ["breakfast", "american"], hints: [
      "This is a crunchy food often eaten in the morning.",
      "It is often seen as a healthy, outdoorsy choice.",
      "It is made from rolled oats baked with honey or syrup.",
      "It often includes nuts and dried fruit and is sprinkled over yogurt.",
      "Its name is also slang for a crunchy, nature-loving hippie type, and it comes pressed into bars."
    ] },
    { name: "Potato chips", wiki: "Potato chip", tags: ["snacks", "american"], hints: [
      "This is a salty food usually eaten by the handful.",
      "It usually comes in a crinkly bag.",
      "It is made by frying thin slices of a vegetable until crisp.",
      "Popular flavors include sour cream and onion, barbecue, and salt and vinegar.",
      "Lay's and Pringles are famous brands of it."
    ] },
    { name: "Edamame", tags: ["snacks", "asian"], hints: [
      "This is a healthy food often served as an appetizer.",
      "It is common at Japanese restaurants.",
      "It is a green legume, usually boiled or steamed and sprinkled with salt.",
      "You squeeze the pods to pop the beans into your mouth.",
      "They are young soybeans."
    ] },
    { name: "Mozzarella sticks", tags: ["snacks", "american"], hints: [
      "This is a fried appetizer.",
      "It is a favorite on bar and restaurant menus in the US.",
      "It is coated in breadcrumbs and deep-fried until golden.",
      "When you bite in and pull, the melted cheese stretches out.",
      "It is usually dipped in marinara sauce."
    ] },
    { name: "Buffalo wings", wiki: "Buffalo wing", tags: ["snacks", "american"], hints: [
      "This is a finger food often eaten while watching sports.",
      "It was invented in a city in western New York in 1964.",
      "It comes from poultry and is served with celery and carrot sticks.",
      "It is tossed in a spicy sauce made from hot sauce and butter.",
      "It is dipped in blue cheese or ranch, and is a Super Bowl party staple."
    ] },
    { name: "Bruschetta", tags: ["snacks", "italian"], hints: [
      "This is an appetizer.",
      "It comes from Italy.",
      "It starts with slices of grilled or toasted bread rubbed with garlic.",
      "It is topped with chopped tomatoes, basil, and olive oil.",
      "Many Americans mispronounce it; Italians say it with a hard 'k' sound in the middle."
    ] },
    { name: "Garlic bread", tags: ["snacks", "italian"], hints: [
      "This is a side often served with pasta.",
      "It is an Italian-American favorite.",
      "It is baked until warm, crusty, and golden.",
      "It is a loaf spread with butter, herbs, and a pungent bulb.",
      "Its strong smell is said to keep vampires away."
    ] },
    { name: "Beef jerky", wiki: "Jerky", tags: ["snacks", "american"], hints: [
      "This is a chewy food that lasts a long time without a fridge.",
      "It is popular with hikers, truckers, and road-trippers.",
      "It is lean meat that has been seasoned and dried.",
      "It is sold in resealable bags at gas stations, often in teriyaki or peppered flavors.",
      "Jack Link's and its Bigfoot mascot sell it."
    ] },
    { name: "Trail mix", tags: ["snacks", "american"], hints: [
      "This is a food you eat by the handful.",
      "It is a favorite of hikers and campers because it is easy to carry.",
      "It is a combination of several different ingredients in one bag.",
      "It usually includes peanuts, raisins, and other nuts or dried fruit.",
      "Many versions include M&M's; one style is nicknamed 'gorp.'"
    ] },
    { name: "Samosa", tags: ["snacks", "asian"], hints: [
      "This is a savory food you can eat with your hands.",
      "It is popular in India and South Asia.",
      "It is a fried or baked pastry with a filling inside.",
      "It is triangle-shaped and usually stuffed with spiced potatoes and peas.",
      "It is often served with tamarind or mint chutney."
    ] },
    { name: "Hummus", tags: ["snacks"], hints: [
      "This is a savory food usually served cold.",
      "It comes from the Middle East.",
      "It is a smooth, creamy dip.",
      "It is made from mashed chickpeas, tahini, lemon juice, and garlic.",
      "People scoop it up with pita bread, carrots, or pretzels."
    ] },
    { name: "Elote", tags: ["snacks", "mexican"], hints: [
      "This is a food often sold by street vendors.",
      "It comes from Mexico.",
      "It is a vegetable that is grilled and eaten off the cob.",
      "It is slathered in mayo, sprinkled with cotija cheese and chili powder, and served with lime.",
      "It is often called Mexican street corn."
    ] },
    { name: "Gelato", tags: ["desserts", "italian"], hints: [
      "This is a sweet treat served cold.",
      "It comes from Italy.",
      "It is denser and silkier than its American cousin because less air is whipped in.",
      "It is served with a small flat spade at shops in Florence and Rome.",
      "It is the Italian version of ice cream."
    ] },
    { name: "Cannoli", tags: ["desserts", "italian"], hints: [
      "This is a sweet pastry.",
      "It comes from Sicily.",
      "It is a crispy fried shell shaped like a tube.",
      "It is filled with sweet ricotta cream and sometimes chocolate chips or pistachios.",
      "'Leave the gun. Take the ...' is a famous line from 'The Godfather.'"
    ] },
    { name: "Panna cotta", tags: ["desserts", "italian"], hints: [
      "This is a sweet treat served chilled.",
      "It comes from northern Italy.",
      "It is made by setting sweetened cream with gelatin.",
      "It is smooth and jiggly and is often topped with berry sauce or caramel.",
      "Its name means 'cooked cream' in Italian."
    ] },
    { name: "Flan", wiki: "Crème caramel", tags: ["desserts", "mexican"], hints: [
      "This is a sweet treat served chilled.",
      "It is extremely popular in Mexico, Spain, and Latin America.",
      "It is a baked custard made from eggs, milk, and sugar.",
      "It is turned upside down onto a plate so syrup runs down its sides.",
      "It has a golden caramel top and is also known as crème caramel."
    ] },
    { name: "Tres leches cake", tags: ["desserts", "mexican"], hints: [
      "This is a sweet baked treat.",
      "It is popular in Mexico and across Latin America.",
      "It is a light, airy sponge that ends up very moist.",
      "It is soaked in a mixture of evaporated milk, condensed milk, and cream.",
      "Its Spanish name means 'three milks.'"
    ] },
    { name: "Mochi", tags: ["desserts", "asian"], hints: [
      "This is a sweet treat.",
      "It comes from Japan.",
      "It is made from glutinous rice pounded into a soft, sticky, chewy dough.",
      "It is often filled with sweet red bean paste, and is traditionally eaten at New Year's.",
      "Trader Joe's sells a popular frozen version with ice cream inside."
    ] },
    { name: "Crème brûlée", tags: ["desserts", "european"], hints: [
      "This is a sweet treat served at fancy restaurants.",
      "It is associated with France.",
      "It is a rich vanilla custard served in a small shallow dish.",
      "Sugar on top is caramelized with a small blowtorch.",
      "You crack the hard, glassy top with a spoon; Amélie loved doing it."
    ] },
    { name: "Banana split", tags: ["desserts", "american"], hints: [
      "This is a sweet treat served cold.",
      "It is a classic American soda fountain order from the early 1900s.",
      "It is served in a long, narrow boat-shaped dish.",
      "It has three scoops of ice cream with fruit cut lengthwise underneath.",
      "It is topped with whipped cream, nuts, chocolate syrup, and cherries."
    ] },
    { name: "S'mores", wiki: "S'more", tags: ["desserts", "american"], hints: [
      "This is a sweet treat.",
      "It is a classic camping tradition.",
      "It is made outdoors over an open flame.",
      "A toasted marshmallow and a piece of chocolate are squished together.",
      "It is sandwiched between graham crackers; its name is short for 'some more.'"
    ] },
    { name: "Key lime pie", tags: ["desserts", "american"], hints: [
      "This is a sweet treat served chilled.",
      "It comes from Florida.",
      "It has a graham cracker crust and a tangy, creamy filling.",
      "The filling is made with sweetened condensed milk, egg yolks, and a small citrus fruit's juice.",
      "It is the official pie of Florida and is named after the islands at the state's southern tip."
    ] },
    { name: "Baklava", tags: ["desserts", "european"], hints: [
      "This is a sweet pastry.",
      "It is popular in Turkey, Greece, and the Middle East.",
      "It is made from many thin layers of phyllo dough brushed with butter.",
      "Chopped walnuts or pistachios are layered inside.",
      "It is cut into diamonds and soaked in honey or sugar syrup."
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
    ] },
    { name: "The Brady Bunch", year: 1969, tags: ["comedy"], hints: [
      "This is a classic American sitcom.",
      "It follows a blended household formed when a widower and a widow marry.",
      "The parents have six kids between them: three boys and three girls.",
      "Their housekeeper Alice and the line \"Marcia, Marcia, Marcia!\" are famous.",
      "The opening shows the whole clan in a tic-tac-toe grid of squares."
    ] },
    { name: "Happy Days", year: 1974, tags: ["comedy"], hints: [
      "This is a classic American sitcom.",
      "It looks back nostalgically at life in the 1950s and early '60s.",
      "It is set in Milwaukee and follows the Cunningham household.",
      "Ron Howard starred as Richie, and the show spun off 'Laverne & Shirley'.",
      "Its cool leather-jacketed star was the Fonz, who once \"jumped the shark.\""
    ] },
    { name: "Everybody Loves Raymond", year: 1996, tags: ["comedy"], hints: [
      "This is an American sitcom from the late 20th century.",
      "It centers on a married couple and their meddling in-laws.",
      "The main character is a sportswriter on Long Island.",
      "His parents Marie and Frank live right across the street, and his brother Robert is a cop.",
      "Ray Romano starred as Ray Barone."
    ] },
    { name: "Family Matters", year: 1989, tags: ["comedy"], hints: [
      "This is an American sitcom from the TGIF era.",
      "It follows a Chicago police officer and his household.",
      "It was originally a spin-off of 'Perfect Strangers'.",
      "A nerdy neighbor in suspenders became the breakout star.",
      "Steve Urkel's catchphrase was \"Did I do that?\""
    ] },
    { name: "Parks and Recreation", year: 2009, tags: ["comedy"], hints: [
      "This is a 21st-century American sitcom.",
      "It is filmed in a mockumentary style about local government workers.",
      "It is set in the fictional town of Pawnee, Indiana.",
      "Ron Swanson loves breakfast food and hates government.",
      "Amy Poehler starred as the relentlessly upbeat Leslie Knope."
    ] },
    { name: "Dallas", wiki: "Dallas (1978 TV series)", year: 1978, tags: ["drama"], hints: [
      "This is a prime-time American soap opera.",
      "It follows a wealthy, feuding Texas oil family.",
      "The Ewing clan lives on the Southfork Ranch.",
      "Its villain was the scheming J.R., played by Larry Hagman.",
      "A famous cliffhanger asked the nation \"Who shot J.R.?\""
    ] },
    { name: "Little House on the Prairie", wiki: "Little House on the Prairie (TV series)", year: 1974, tags: ["drama"], hints: [
      "This is a family drama from the 1970s.",
      "It is set in the 1870s and 1880s on the American frontier.",
      "It is based on books by Laura Ingalls Wilder.",
      "The Ingalls family lives near Walnut Grove, Minnesota.",
      "Michael Landon played Pa, and Nellie Oleson was the snobby rival."
    ] },
    { name: "Magnum, P.I.", year: 1980, tags: ["drama"], hints: [
      "This is an American crime show from the 1980s.",
      "It follows a private investigator in a tropical setting.",
      "The hero is a Navy veteran living on an estate in Hawaii.",
      "He drives a red Ferrari, and Higgins manages the estate.",
      "Tom Selleck starred, famous for his mustache and Hawaiian shirts."
    ] },
    { name: "Miami Vice", year: 1984, tags: ["drama"], hints: [
      "This is an American police drama from the 1980s.",
      "It was known for its stylish fashion and pop music soundtrack.",
      "Two undercover detectives work in South Florida.",
      "The detectives were Crockett and Tubbs, and Crockett had a pet alligator.",
      "Don Johnson wore pastel suits with T-shirts and no socks."
    ] },
    { name: "ER", wiki: "ER (TV series)", year: 1994, tags: ["drama"], hints: [
      "This is an American drama from the 1990s.",
      "It is a fast-paced medical show.",
      "It is set at County General Hospital in Chicago.",
      "It was created by author Michael Crichton and ran for 15 seasons.",
      "George Clooney became a star playing Dr. Doug Ross in the emergency room."
    ] },
    { name: "Law & Order", year: 1990, tags: ["drama"], hints: [
      "This is a long-running American drama.",
      "It is a crime show set in New York City.",
      "Each episode is split between police investigation and courtroom prosecution.",
      "Created by Dick Wolf, it spawned spin-offs like 'Special Victims Unit'.",
      "Its famous \"dun dun\" sound effect separates scenes."
    ] },
    { name: "Mad Men", year: 2007, tags: ["drama"], hints: [
      "This is an American cable drama from the 2000s.",
      "It is a period piece set in the 1960s.",
      "It follows employees at a New York advertising agency.",
      "Peggy Olson rises from secretary to copywriter at Sterling Cooper.",
      "Jon Hamm starred as the mysterious ad man Don Draper."
    ] },
    { name: "This Is Us", year: 2016, tags: ["drama"], hints: [
      "It is a 21st-century network drama.",
      "It is known for making viewers cry every week.",
      "It jumps between timelines to follow a set of siblings called the Big Three.",
      "The Pearson triplets are Kevin, Kate, and adopted Randall.",
      "Milo Ventimiglia played Jack, whose fate was tied to a faulty slow cooker."
    ] },
    { name: "Yellowstone", wiki: "Yellowstone (American TV series)", year: 2018, tags: ["drama"], hints: [
      "This is a 21st-century American drama.",
      "It is a modern-day Western.",
      "It follows a ranching family defending their land in Montana.",
      "It spawned prequels like '1883' and '1923'.",
      "Kevin Costner starred as rancher John Dutton."
    ] },
    { name: "Succession", wiki: "Succession (TV series)", year: 2018, tags: ["drama"], hints: [
      "This is a 21st-century HBO drama.",
      "It is a dark satire about the super-rich.",
      "Siblings fight to take over their father's media empire.",
      "The company is Waystar Royco, and the kids are Kendall, Shiv, Roman, and Connor.",
      "Brian Cox played the gruff patriarch Logan Roy."
    ] },
    { name: "Doctor Who", year: 1963, tags: ["scifi"], hints: [
      "This is a long-running science fiction show.",
      "It comes from Britain and has run on and off since the 1960s.",
      "Its alien hero can regenerate into a new body, letting new actors take the role.",
      "Enemies include the Daleks and the Cybermen.",
      "The hero travels through time in the TARDIS, which looks like a blue police box."
    ] },
    { name: "Knight Rider", wiki: "Knight Rider (1982 TV series)", year: 1982, tags: ["scifi"], hints: [
      "This is an action show from the 1980s.",
      "Its hero fights crime with the help of advanced technology.",
      "His partner is an artificially intelligent car that can talk.",
      "The car, KITT, is a black Pontiac Trans Am with a scanning red light.",
      "David Hasselhoff starred as Michael, a lone crusader driving KITT."
    ] },
    { name: "Quantum Leap", year: 1989, tags: ["scifi"], hints: [
      "This is a science fiction show from the late 1980s.",
      "Its hero is a scientist stuck after an experiment goes wrong.",
      "He bounces through time into other people's bodies, fixing their lives.",
      "His hologram buddy Al helps him with a handheld computer.",
      "Each episode ends with Sam Beckett saying \"Oh, boy.\""
    ] },
    { name: "Buffy the Vampire Slayer", wiki: "Buffy the Vampire Slayer (TV series)", year: 1997, tags: ["scifi"], hints: [
      "This is a fantasy show from the 1990s.",
      "It mixes high school drama with horror.",
      "The heroine lives in Sunnydale, a town sitting on a Hellmouth.",
      "Her allies include Willow, Xander, and her Watcher Giles.",
      "Sarah Michelle Gellar starred as a teen who fights the undead with wooden stakes."
    ] },
    { name: "Smallville", year: 2001, tags: ["scifi"], hints: [
      "This is a superhero show from the 2000s.",
      "It is an origin story about a famous comic book character as a teen.",
      "It is set on a Kansas farm and in a small town.",
      "Lex Luthor starts out as the hero's friend.",
      "It follows young Clark Kent before he becomes Superman."
    ] },
    { name: "Supernatural", wiki: "Supernatural (American TV series)", year: 2005, tags: ["scifi"], hints: [
      "This is a fantasy horror show that ran for 15 seasons.",
      "It follows two brothers on a road trip across America.",
      "They hunt monsters, ghosts, and demons.",
      "They drive a black 1967 Chevy Impala.",
      "Jared Padalecki and Jensen Ackles played Sam and Dean Winchester."
    ] },
    { name: "Westworld", wiki: "Westworld (TV series)", year: 2016, tags: ["scifi"], hints: [
      "This is a 21st-century HBO science fiction show.",
      "It is based on a 1973 Michael Crichton movie.",
      "Wealthy guests visit a theme park filled with lifelike robots.",
      "The android hosts begin to become self-aware.",
      "The park is styled like the Old West, and Evan Rachel Wood played Dolores."
    ] },
    { name: "The Last of Us", wiki: "The Last of Us (TV series)", year: 2023, tags: ["scifi"], hints: [
      "This is a 2020s HBO drama.",
      "It is set after a pandemic collapses society.",
      "It is based on a hit PlayStation video game.",
      "A fungus called cordyceps turns people into monsters.",
      "Pedro Pascal plays Joel, who escorts a teen named Ellie across America."
    ] },
    { name: "The Flintstones", year: 1960, tags: ["animated"], hints: [
      "This is a classic cartoon.",
      "It was the first animated sitcom to air in prime time.",
      "It is set in the Stone Age town of Bedrock.",
      "The neighbors are Barney and Betty Rubble.",
      "Fred's catchphrase is \"Yabba dabba doo!\""
    ] },
    { name: "Mister Rogers' Neighborhood", year: 1968, tags: ["animated"], hints: [
      "This is a classic kids' show on PBS.",
      "Its gentle host spoke directly to children about feelings.",
      "A toy trolley carried viewers to a make-believe kingdom with puppets like Daniel Striped Tiger and King Friday.",
      "The host was a Presbyterian minister from Pittsburgh.",
      "Each episode began with him changing into sneakers and a cardigan sweater."
    ] },
    { name: "Teenage Mutant Ninja Turtles", wiki: "Teenage Mutant Ninja Turtles (1987 TV series)", year: 1987, tags: ["animated"], hints: [
      "This is a cartoon from the late 1980s.",
      "Its heroes are four brothers who live in the sewers.",
      "They are trained in martial arts by a rat named Splinter.",
      "They love pizza and fight Shredder and the Foot Clan.",
      "They are named Leonardo, Donatello, Raphael, and Michelangelo."
    ] },
    { name: "Arthur", wiki: "Arthur (TV series)", year: 1996, tags: ["animated"], hints: [
      "This is a kids' cartoon on PBS.",
      "It ran for 25 seasons, one of the longest-running children's cartoons.",
      "It is based on books by Marc Brown.",
      "His friends include Buster, Francine, and his little sister D.W.",
      "Its hero is an aardvark who wears round glasses."
    ] },
    { name: "Gravity Falls", year: 2012, tags: ["animated"], hints: [
      "This is a cartoon that aired on a kids' channel.",
      "It follows twin siblings spending a summer with their great-uncle.",
      "The town they stay in is full of cryptids, codes and strange mysteries.",
      "Their great-uncle runs a tourist-trap museum called the Mystery Shack.",
      "Dipper and Mabel Pines face off against the triangle-shaped villain Bill Cipher."
    ] },
    { name: "Dora the Explorer", year: 2000, tags: ["animated"], hints: [
      "This is a preschool cartoon.",
      "It teaches kids some Spanish words.",
      "The heroine goes on adventures with a monkey named Boots.",
      "She checks with Map and carries a talking Backpack.",
      "Viewers shout \"Swiper, no swiping!\" to stop a sneaky fox."
    ] },
    { name: "Phineas and Ferb", year: 2007, tags: ["animated"], hints: [
      "This is a Disney Channel cartoon.",
      "Two stepbrothers try to make the most of every day of summer vacation.",
      "Their older sister Candace keeps trying to bust them.",
      "Their pet platypus is secretly Agent P.",
      "Perry battles the evil Dr. Doofenshmirtz and his \"-inators.\""
    ] },
    { name: "Adventure Time", year: 2010, tags: ["animated"], hints: [
      "This is a Cartoon Network show from the 2010s.",
      "It is set in a strange, colorful fantasy world.",
      "The Land of Ooo is home to Princess Bubblegum and the Ice King.",
      "Its hero is a boy named Finn who wears a white hat with ears.",
      "Finn's best friend is Jake, a magical stretchy dog."
    ] },
    { name: "Jeopardy!", year: 1964, tags: ["reality"], hints: [
      "This is a long-running game show.",
      "Three contestants compete on general knowledge.",
      "Ken Jennings won 74 games in a row on it.",
      "Contestants must phrase their responses in the form of a question.",
      "Alex Trebek hosted it for over 35 years."
    ] },
    { name: "Wheel of Fortune", wiki: "Wheel of Fortune (American game show)", year: 1975, tags: ["reality"], hints: [
      "This is a long-running game show.",
      "Contestants solve word puzzles.",
      "They buy vowels and call out consonants.",
      "Vanna White turns the letters on the board.",
      "Pat Sajak hosted it for over 40 years as players spun for cash."
    ] },
    { name: "The Price Is Right", year: 1972, tags: ["reality"], hints: [
      "This is a long-running daytime game show.",
      "Audience members are called down with the line \"Come on down!\"",
      "Contestants guess what products cost, without going over.",
      "Famous games include Plinko and the Big Wheel.",
      "Bob Barker hosted it for 35 years before Drew Carey took over."
    ] },
    { name: "America's Funniest Home Videos", year: 1989, tags: ["reality"], hints: [
      "This is a long-running clip show.",
      "Viewers send in recordings for a chance to win cash prizes.",
      "The clips often feature pets, kids, and people falling down.",
      "Lots of clips involve hits to the groin and wedding mishaps.",
      "Bob Saget was its first host, followed by Tom Bergeron and Alfonso Ribeiro."
    ] },
    { name: "The Real World", wiki: "The Real World (TV series)", year: 1992, tags: ["reality"], hints: [
      "This is an MTV show from the 1990s.",
      "It is considered one of the first modern reality shows.",
      "Seven strangers are picked to live in a house and have their lives taped.",
      "Its first season was set in New York City.",
      "It launched the long-running MTV franchise that later paired cast members on 'The Challenge'."
    ] },
    { name: "Who Wants to Be a Millionaire", wiki: "Who Wants to Be a Millionaire (American game show)", year: 1999, tags: ["reality"], hints: [
      "This is a prime-time game show that started in Britain.",
      "One contestant answers increasingly valuable multiple-choice trivia questions.",
      "Lifelines include 50:50, Ask the Audience, and Phone a Friend.",
      "The host asks, \"Is that your final answer?\"",
      "Regis Philbin hosted the American version, offering a top prize of one million dollars."
    ] },
    { name: "Dancing with the Stars", wiki: "Dancing with the Stars (American TV series)", year: 2005, tags: ["reality"], hints: [
      "This is a prime-time competition show.",
      "Celebrities pair up against each other.",
      "Each celebrity partners up alongside a professional ballroom performer.",
      "Judges score routines like the cha-cha and the waltz.",
      "Couples compete for the Mirrorball Trophy."
    ] },
    { name: "The Bachelor", wiki: "The Bachelor (American TV series)", year: 2002, tags: ["reality"], hints: [
      "This is an ABC reality show.",
      "It is a dating competition.",
      "Many women compete for the heart of one single man.",
      "Each week ends with a rose ceremony.",
      "Chris Harrison hosted it for nearly two decades, and it spun off a version with a woman choosing."
    ] },
    { name: "The Voice", wiki: "The Voice (American TV series)", year: 2011, tags: ["reality"], hints: [
      "This is an NBC competition show.",
      "Contestants are singers hoping for a record deal.",
      "It starts with blind auditions where coaches have their backs turned.",
      "Coaches hit a button to spin their red chairs around.",
      "Blake Shelton was a longtime coach alongside Adam Levine."
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
    ] },
    { name: "The Oregon Trail", wiki: "The Oregon Trail (1971 video game)", year: 1971, tags: ["adventure"], hints: [
      "It came out in the 1970s.",
      "It was made as an educational tool for schoolkids.",
      "Players lead a wagon party westward in the 1840s, buying supplies and hunting for food.",
      "Fording rivers and running out of oxen could end your journey.",
      "It's famous for the message \"You have died of dysentery.\""
    ] },
    { name: "Metroid", wiki: "Metroid (video game)", year: 1986, tags: ["adventure"], hints: [
      "It came out in the 1980s.",
      "It was made by Nintendo for the NES.",
      "Players explore a sprawling alien planet called Zebes, unlocking new areas with new abilities.",
      "Its armored bounty hunter was revealed to be a woman at the end, a big surprise for its time.",
      "Samus Aran fights Mother Brain and rolls up into a Morph Ball."
    ] },
    { name: "Mega Man", wiki: "Mega Man (video game)", year: 1987, tags: ["adventure"], hints: [
      "It came out in the 1980s.",
      "It was made by the Japanese company Capcom.",
      "Players can pick which boss stage to tackle first and steal each defeated boss's power.",
      "Its bosses include Cut Man, Guts Man, and Ice Man.",
      "A blue robot hero with an arm cannon battles the evil Dr. Wily."
    ] },
    { name: "Crash Bandicoot", wiki: "Crash Bandicoot (video game)", year: 1996, tags: ["adventure"], hints: [
      "It came out in the 1990s.",
      "It was an early mascot for Sony's PlayStation.",
      "It was made by Naughty Dog, the studio later behind 'Uncharted'.",
      "Players spin into wooden boxes to collect Wumpa Fruit.",
      "An orange marsupial in blue jeans battles the evil Dr. Neo Cortex."
    ] },
    { name: "Final Fantasy VII", year: 1997, tags: ["adventure"], hints: [
      "It came out in the 1990s.",
      "It's a long role-playing epic made in Japan by Square.",
      "It was a massive hit on the original PlayStation and got a big remake starting in 2020.",
      "Its heroes fight the Shinra corporation in the city of Midgar.",
      "Cloud Strife wields a giant sword against the villain Sephiroth, and Aerith's fate shocked players."
    ] },
    { name: "Hollow Knight", year: 2017, tags: ["adventure"], hints: [
      "It came out in the 2010s.",
      "It was made by a tiny independent studio in Australia.",
      "It's a challenging, hand-drawn exploration title known for tough boss fights.",
      "It's set in Hallownest, a ruined underground kingdom of insects.",
      "A small silent bug hero with a nail for a sword explores; its sequel is 'Silksong'."
    ] },
    { name: "Galaxian", year: 1979, tags: ["shooter"], hints: [
      "It came out in the 1970s.",
      "It was a coin-operated arcade machine made by Namco.",
      "Players control a ship at the bottom of the screen firing upward.",
      "Alien enemies break formation and swoop down to attack, and it was one of the first arcade titles in full color.",
      "It came just before its more famous sequel, 'Galaga'."
    ] },
    { name: "Missile Command", year: 1980, tags: ["shooter"], hints: [
      "It came out in the 1980s.",
      "It was an Atari arcade machine controlled with a trackball.",
      "Its theme reflected Cold War fears of nuclear war.",
      "Players defend six cities from incoming warheads by firing from three bases.",
      "When all is lost, the screen shows \"THE END\" in a big explosion."
    ] },
    { name: "Duck Hunt", year: 1984, tags: ["shooter"], hints: [
      "It came out in the 1980s.",
      "It was made by Nintendo and often came bundled with the NES.",
      "Players aim a light-gun accessory called the Zapper at the TV screen.",
      "Flying birds appear and you must shoot them before they escape.",
      "A snickering dog pops up to laugh at you when you miss."
    ] },
    { name: "GoldenEye 007", year: 1997, tags: ["shooter"], hints: [
      "It came out in the 1990s.",
      "It was made by Rare for the Nintendo 64.",
      "It was based on a hit movie starring Pierce Brosnan.",
      "Its four-player split-screen matches were legendary, and picking Oddjob was considered cheating.",
      "Players are James Bond on a mission to stop a satellite weapon."
    ] },
    { name: "Gears of War", year: 2006, tags: ["shooter"], hints: [
      "It came out in the 2000s.",
      "It was a big exclusive for the Xbox 360, made by Epic Games.",
      "It made taking cover behind walls a core part of combat.",
      "Soldiers fight an underground monster army called the Locust Horde.",
      "Marcus Fenix wields a rifle with a chainsaw bayonet called the Lancer."
    ] },
    { name: "Apex Legends", year: 2019, tags: ["shooter"], hints: [
      "It came out in the 2010s.",
      "It's free to play and made by Respawn Entertainment.",
      "It's a battle royale where squads of three fight to be the last team standing.",
      "It takes place in the 'Titanfall' universe and introduced a popular ping system.",
      "Players choose heroes like Wraith, Bloodhound, and Lifeline."
    ] },
    { name: "Breakout", wiki: "Breakout (video game)", year: 1976, tags: ["puzzle"], hints: [
      "It came out in the 1970s.",
      "It was an Atari arcade machine.",
      "Steve Wozniak and Steve Jobs worked on it before founding Apple.",
      "Players move a paddle to bounce a ball.",
      "The goal is to smash through rows of colored bricks at the top of the screen."
    ] },
    { name: "Q*bert", year: 1982, tags: ["puzzle"], hints: [
      "It came out in the 1980s.",
      "It was a coin-operated arcade machine.",
      "Players hop around a pyramid of cubes, changing each top's color.",
      "Enemies include a purple snake named Coily.",
      "Its orange hero with a long tube-shaped nose swears in a speech balloon of symbols like \"@!#?@!\"."
    ] },
    { name: "Myst", year: 1993, tags: ["puzzle"], hints: [
      "It came out in the 1990s.",
      "It was one of the first blockbuster CD-ROM titles for home computers.",
      "Players explore a quiet island full of strange machines and riddles, with no enemies.",
      "Magical books transport you to other worlds called Ages.",
      "Brothers Sirrus and Achenar are trapped in red and blue books."
    ] },
    { name: "Bejeweled", year: 2001, tags: ["puzzle"], hints: [
      "It came out in the 2000s.",
      "It was a casual hit made by PopCap Games.",
      "It was popular in web browsers and on early cell phones.",
      "Players swap neighboring pieces to line up three or more of the same kind.",
      "Colorful gems sparkle and vanish when matched, and a voice says \"Excellent!\""
    ] },
    { name: "Plants vs. Zombies", year: 2009, tags: ["puzzle"], hints: [
      "It came out in the 2000s.",
      "It was made by PopCap Games.",
      "It's a tower defense title where you protect your house lane by lane.",
      "Sunflowers produce sun that you spend on defenses like Peashooters and Wall-nuts.",
      "Brain-hungry undead invade your lawn, and your neighbor is Crazy Dave."
    ] },
    { name: "Fruit Ninja", year: 2010, tags: ["puzzle"], hints: [
      "It came out in the 2010s.",
      "It was a huge early hit on smartphones and tablets.",
      "Players swipe their finger across the touchscreen.",
      "Watermelons, oranges, and bananas are tossed in the air to be sliced.",
      "Hitting a bomb ends your run."
    ] },
    { name: "Wordle", year: 2021, tags: ["puzzle"], hints: [
      "It came out in the 2020s.",
      "It's played for free in a web browser and was bought by The New York Times in 2022.",
      "Everyone gets the same puzzle each day.",
      "Players have six tries to guess a five-letter word.",
      "Green and yellow squares show which letters are right, and people share their grids online."
    ] },
    { name: "Pole Position", year: 1982, tags: ["racing"], hints: [
      "It came out in the 1980s.",
      "It was a Namco arcade machine with a steering wheel and pedals.",
      "It was one of the highest-earning arcade titles in North America in 1983.",
      "Players must finish a qualifying lap to earn a starting spot.",
      "Formula One-style cars zoom around the Fuji Speedway track."
    ] },
    { name: "Excitebike", year: 1984, tags: ["racing"], hints: [
      "It came out in the 1980s.",
      "It was made by Nintendo for the NES.",
      "It had a built-in track editor so players could design their own courses.",
      "Players hit ramps and must avoid overheating their engine.",
      "Riders race motocross motorcycles over dirt jumps."
    ] },
    { name: "Mike Tyson's Punch-Out!!", year: 1987, tags: ["racing"], hints: [
      "It came out in the 1980s.",
      "It was made by Nintendo for the NES.",
      "Players face a series of colorful opponents by reading their tells and dodging.",
      "Little Mac is coached by Doc Louis, and the first opponent is Glass Joe.",
      "It's a boxing title whose final boss was a real heavyweight champion."
    ] },
    { name: "Tekken", wiki: "Tekken (video game)", year: 1994, tags: ["racing"], hints: [
      "It came out in the 1990s.",
      "It was made by Namco and became a major PlayStation series.",
      "It's a 3D one-on-one fighting title where each button controls a different limb.",
      "The Mishima family feud is at the center of its story.",
      "Heihachi Mishima runs the King of Iron Fist Tournament."
    ] },
    { name: "Crash Team Racing", year: 1999, tags: ["racing"], hints: [
      "It came out in the 1990s.",
      "It was made by Naughty Dog for the original PlayStation.",
      "Players drift around corners and use power-ups like rockets and TNT boxes.",
      "Its villain is an alien speed demon named Nitros Oxide.",
      "An orange bandicoot and his friends compete in go-karts."
    ] },
    { name: "Burnout 3: Takedown", year: 2004, tags: ["racing"], hints: [
      "It came out in the 2000s.",
      "It was made by Criterion Games and published by EA.",
      "Players earn boost by driving dangerously, like near misses and oncoming traffic.",
      "Its Crash Mode lets you cause huge pileups at intersections.",
      "Ramming rivals into walls to wreck them is the core of this high-speed car title."
    ] },
    { name: "Forza Horizon", wiki: "Forza Horizon (video game)", year: 2012, tags: ["racing"], hints: [
      "It came out in the 2010s.",
      "It was an Xbox exclusive made by Playground Games.",
      "It's an open-world driving title set during a music festival.",
      "It was set in Colorado, and later entries visited Australia, Britain, Mexico, and Japan.",
      "It's a spin-off of Microsoft's 'Motorsport' car series."
    ] },
    { name: "SimCity", wiki: "SimCity (1989 video game)", year: 1989, tags: ["sandbox"], hints: [
      "It came out in the 1980s.",
      "It was designed by Will Wright, who later made 'The Sims'.",
      "It has no real ending or way to win.",
      "Players zone land, build roads and power plants, and manage taxes as mayor.",
      "Disasters like earthquakes and a Godzilla-style monster can wreck your urban creation."
    ] },
    { name: "RollerCoaster Tycoon", wiki: "RollerCoaster Tycoon (video game)", year: 1999, tags: ["sandbox"], hints: [
      "It came out in the 1990s.",
      "It was a PC title programmed almost entirely by one person, Chris Sawyer.",
      "Players manage an amusement park's prices, staff, and food stands.",
      "Guests may get sick or say they want to go home, and you can hire handymen to clean up.",
      "Players design their own thrill rides with loops and drops."
    ] },
    { name: "Zoo Tycoon", wiki: "Zoo Tycoon (2001 video game)", year: 2001, tags: ["sandbox"], hints: [
      "It came out in the 2000s.",
      "It was a PC title published by Microsoft.",
      "Players build exhibits and keep guests happy while managing a budget.",
      "You must match the right terrain, foliage, and fencing to keep animals content.",
      "Expansions added dinosaurs and sea creatures to your wildlife park."
    ] },
    { name: "Nintendogs", year: 2005, tags: ["sandbox"], hints: [
      "It came out in the 2000s.",
      "It was made for the Nintendo DS.",
      "Players used the touchscreen and microphone to interact with a pet.",
      "You could teach tricks by voice, take walks, and enter competitions.",
      "Players raise virtual puppies of breeds like Labradors and Dachshunds."
    ] },
    { name: "Spore", wiki: "Spore (2008 video game)", year: 2008, tags: ["sandbox"], hints: [
      "It came out in the 2000s.",
      "It was designed by Will Wright, creator of 'The Sims'.",
      "It has stages that go from a single cell all the way to space exploration.",
      "Its creature editor let players build wild creatures with legs, mouths, and eyes.",
      "Players guide a species through evolution, tribes, and civilization."
    ] },
    { name: "Terraria", year: 2011, tags: ["sandbox"], hints: [
      "It came out in the 2010s.",
      "It's an indie title made by Re-Logic.",
      "It's a 2D side-view world of digging, crafting, and building.",
      "It has many bosses, like the Eye of Cthulhu and the Wall of Flesh.",
      "It's often described as a 2D version of 'Minecraft'."
    ] },
    { name: "Goat Simulator", year: 2014, tags: ["sandbox"], hints: [
      "It came out in the 2010s.",
      "It started as a joke project made in a short game jam.",
      "It's intentionally buggy and silly, with ragdoll physics.",
      "Players headbutt people, lick objects, and cause chaos around a suburban town.",
      "You play as a farm animal with horns that wrecks everything."
    ] },
    { name: "Cities: Skylines", year: 2015, tags: ["sandbox"], hints: [
      "It came out in the 2010s.",
      "It was made by the small Finnish studio Colossal Order.",
      "It's a PC city builder praised for its mod support.",
      "Players fix traffic jams, lay out water pipes, and zone neighborhoods.",
      "It was seen as the successor to 'SimCity' after that series stumbled in 2013."
    ] },
    { name: "Dance Dance Revolution", year: 1998, tags: ["party"], hints: [
      "It came out in the 1990s.",
      "It was made by Konami and became a hit in arcades.",
      "Players perform using their feet instead of their hands.",
      "Arrows scroll up the screen to the beat of the music.",
      "You step on a floor pad with up, down, left, and right panels."
    ] },
    { name: "Mario Party", wiki: "Mario Party (video game)", year: 1998, tags: ["party"], hints: [
      "It came out in the 1990s.",
      "It was made for the Nintendo 64.",
      "It plays like a digital board game for four players.",
      "Players roll dice, play minigames, and collect coins and stars.",
      "Its spinning-stick minigames famously gave players blisters on their palms."
    ] },
    { name: "Tony Hawk's Pro Skater", year: 1999, tags: ["party"], hints: [
      "It came out in the 1990s.",
      "It was a sports title published by Activision.",
      "Players chain kickflips, grinds, and manuals to rack up points.",
      "Its soundtrack featured punk songs like 'Superman' by Goldfinger.",
      "It's named after the famous skateboarder who landed the first 900."
    ] },
    { name: "Wii Fit", year: 2007, tags: ["party"], hints: [
      "It came out in the 2000s.",
      "It was made by Nintendo.",
      "It came with a special balance board players stood on.",
      "It included yoga, push-ups, and activities like ski jumping and hula hoop.",
      "It's an exercise title that tracked your weight and BMI."
    ] },
    { name: "Just Dance", wiki: "Just Dance (video game)", year: 2009, tags: ["party"], hints: [
      "It came out in the 2000s.",
      "It was made by Ubisoft and debuted on the Wii.",
      "Players copy the moves of colorful on-screen performers.",
      "You hold a motion controller or phone, which scores your accuracy.",
      "It's a choreography title set to popular songs, with new versions released every year."
    ] },
    { name: "Fall Guys", year: 2020, tags: ["party"], hints: [
      "It came out in the 2020s.",
      "It's a battle royale, but without any weapons.",
      "Dozens of players compete in rounds of obstacle-course challenges until one wins a crown.",
      "It was an online smash hit during the pandemic and is now owned by Epic Games.",
      "Players control colorful, wobbly jelly-bean characters."
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
    ] },
    { name: "IBM", year: 1911, tags: ["tech"], hints: [
      "This is a very old American company.",
      "It is a computing giant nicknamed 'Big Blue.'",
      "It is headquartered in Armonk, New York.",
      "Its Deep Blue computer beat chess champion Garry Kasparov in 1997.",
      "Its Watson computer won on 'Jeopardy!' in 2011."
    ] },
    { name: "Intel", year: 1968, tags: ["tech"], hints: [
      "This is an American company founded in the late 1960s.",
      "It is based in Santa Clara, California, in Silicon Valley.",
      "One of its co-founders, Gordon Moore, is famous for a 'law' about chips.",
      "It makes computer processors like Pentium and Core.",
      "Its five-note jingle and 'Inside' stickers appear on countless PCs."
    ] },
    { name: "Nvidia", year: 1993, tags: ["tech"], hints: [
      "This is an American company founded in the 1990s.",
      "It is led by its co-founder Jensen Huang, known for his leather jacket.",
      "Gamers know it for its GeForce graphics cards.",
      "Its chips power much of the modern AI boom.",
      "It briefly became the world's most valuable company in the 2020s."
    ] },
    { name: "Instagram", year: 2010, tags: ["tech"], hints: [
      "This is a company founded in the 2010s.",
      "It is a free app used by over a billion people.",
      "Facebook bought it in 2012 for about $1 billion.",
      "It is known for photo filters, Stories, and Reels.",
      "Its logo is a colorful camera icon."
    ] },
    { name: "Snapchat", year: 2011, tags: ["tech"], hints: [
      "This is a company founded in the 2010s.",
      "It is a mobile app especially popular with teens.",
      "It was co-founded by Evan Spiegel at Stanford.",
      "It is famous for photos and messages that disappear, plus 'streaks.'",
      "Its logo is a white ghost on a yellow background."
    ] },
    { name: "Hershey's", wiki: "The Hershey Company", year: 1894, tags: ["food"], hints: [
      "This is an American company that is over 100 years old.",
      "It makes sweets and is based in Pennsylvania.",
      "A Pennsylvania town is named after its founder, Milton.",
      "Its theme park and 'Chocolate World' attract many visitors.",
      "It makes Kisses, the little foil-wrapped chocolate drops."
    ] },
    { name: "Kellogg's", year: 1906, tags: ["food"], hints: [
      "This is an American company that is over 100 years old.",
      "It is based in Battle Creek, Michigan.",
      "It is famous for breakfast foods.",
      "It makes Pop-Tarts, Froot Loops, and Rice Krispies.",
      "Tony the Tiger says its Frosted Flakes are 'Gr-r-reat!'"
    ] },
    { name: "Krispy Kreme", year: 1937, tags: ["food"], hints: [
      "This is an American company founded before World War II.",
      "It was founded in Winston-Salem, North Carolina.",
      "It sells sweet treats with coffee.",
      "A glowing 'Hot Now' sign means fresh batches are coming off the line.",
      "It is famous for its Original Glazed doughnuts."
    ] },
    { name: "Taco Bell", year: 1962, tags: ["food"], hints: [
      "This is an American restaurant chain founded in the 1960s.",
      "It was started by a man named Glen in Southern California.",
      "Its slogan is 'Live Más.'",
      "A talking Chihuahua starred in its famous 1990s ads.",
      "It serves Mexican-inspired fast food like the Crunchwrap Supreme."
    ] },
    { name: "Wendy's", year: 1969, tags: ["food"], hints: [
      "This is an American restaurant chain founded in the 1960s.",
      "It was founded by Dave Thomas in Columbus, Ohio.",
      "Its burgers famously have square patties.",
      "Its 1984 ad asked, 'Where's the beef?'",
      "Its logo is a red-haired girl with pigtails, and it sells the Frosty."
    ] },
    { name: "Chipotle", wiki: "Chipotle Mexican Grill", year: 1993, tags: ["food"], hints: [
      "This is an American restaurant chain founded in the 1990s.",
      "It was founded by Steve Ells in Denver, Colorado.",
      "Customers move down a line choosing fillings.",
      "It is known for burritos, bowls, and 'guac is extra.'",
      "Its full name ends with 'Mexican Grill.'"
    ] },
    { name: "Shake Shack", year: 2004, tags: ["food"], hints: [
      "This is an American restaurant chain founded in the 2000s.",
      "It grew out of a hot dog cart in a Manhattan park.",
      "It was started by restaurateur Danny Meyer.",
      "Its first permanent stand opened in Madison Square Park.",
      "It is known for burgers, crinkle-cut fries, and frozen custard."
    ] },
    { name: "Macy's", year: 1858, tags: ["retail"], hints: [
      "This is an American company founded in the 1800s.",
      "It is a big department store chain.",
      "Its flagship store is at Herald Square in New York City.",
      "Its logo has a red star.",
      "It hosts a famous Thanksgiving Day Parade with giant balloons."
    ] },
    { name: "Kroger", year: 1883, tags: ["retail"], hints: [
      "This is an American company founded in the 1800s.",
      "It is based in Cincinnati, Ohio.",
      "It was founded by a man named Bernard and still bears his name.",
      "It is one of the largest supermarket chains in the United States.",
      "It also owns grocery chains like Ralphs, Fred Meyer, and King Soopers."
    ] },
    { name: "Home Depot", wiki: "The Home Depot", year: 1978, tags: ["retail"], hints: [
      "This is an American company founded in the 1970s.",
      "It was founded in Atlanta by Bernie Marcus and Arthur Blank.",
      "It sells tools, lumber, paint, and supplies for DIY projects.",
      "Its workers wear bright orange aprons.",
      "Its logo is an orange square, and its slogan is 'How doers get more done.'"
    ] },
    { name: "Best Buy", year: 1966, tags: ["retail"], hints: [
      "This is an American company founded in the 1960s.",
      "It started as a stereo shop called Sound of Music in Minnesota.",
      "It sells TVs, laptops, video games, and appliances.",
      "Its store workers wear blue shirts.",
      "Its tech support team is called the Geek Squad, and its logo is a yellow price tag."
    ] },
    { name: "eBay", year: 1995, tags: ["retail"], hints: [
      "This is an American company founded in the 1990s.",
      "It is a website where people buy and sell things.",
      "It was founded by Pierre Omidyar and was first called AuctionWeb.",
      "The first item ever sold on it was a broken laser pointer.",
      "It is famous for online auctions where you place bids."
    ] },
    { name: "Etsy", year: 2005, tags: ["retail"], hints: [
      "This is an American company founded in the 2000s.",
      "It is an online marketplace based in Brooklyn, New York.",
      "Its sellers are often small independent makers.",
      "It is known for handmade, vintage, and craft items.",
      "Its logo is a simple word in orange letters."
    ] },
    { name: "Shein", year: 2008, tags: ["retail"], hints: [
      "This is a company founded in the 2000s.",
      "It was founded in China and sells mainly online.",
      "It sells huge amounts of very cheap clothing.",
      "Social media 'haul' videos made it hugely popular with teens.",
      "It is the giant of ultra-fast fashion."
    ] },
    { name: "Temu", year: 2022, tags: ["retail"], hints: [
      "This is a company launched in the 2020s.",
      "It is an online shopping app owned by the Chinese company PDD Holdings.",
      "It sells extremely cheap goods shipped from overseas.",
      "Its Super Bowl ads told people to 'Shop like a billionaire.'",
      "Its orange app is often compared to Shein and Wish."
    ] },
    { name: "New Balance", year: 1906, tags: ["sportswear"], hints: [
      "This is an American company founded in the early 1900s.",
      "It is based in Boston, Massachusetts.",
      "It started by making arch supports for shoes.",
      "Its gray 990 sneakers are a 'dad shoe' classic.",
      "Its logo is a big slanted 'N' with stripes, often shortened to 'NB.'"
    ] },
    { name: "Converse", wiki: "Converse (company)", year: 1908, tags: ["sportswear"], hints: [
      "This is an American company founded in the early 1900s.",
      "It was founded in Malden, Massachusetts.",
      "Nike bought it in 2003.",
      "Its logo features a star.",
      "Its most famous shoe is the Chuck Taylor All Star."
    ] },
    { name: "Champion", wiki: "Champion (sportswear)", year: 1919, tags: ["sportswear"], hints: [
      "This is an American company founded in the early 1900s.",
      "It started in Rochester, New York, as a knitting company.",
      "It is known for sweatshirts and its 'Reverse Weave' fabric.",
      "It made uniforms and gear for many college and pro teams.",
      "Its logo is a small 'C' in red, white, and blue."
    ] },
    { name: "Vans", year: 1966, tags: ["sportswear"], hints: [
      "This is an American company founded in the 1960s.",
      "It was founded in Anaheim, California, by a family of brothers.",
      "Its shoes are hugely popular with skateboarders.",
      "Its slogan is 'Off the Wall.'",
      "It is famous for checkerboard slip-on sneakers."
    ] },
    { name: "Skechers", year: 1992, tags: ["sportswear"], hints: [
      "This is an American company founded in the 1990s.",
      "It is based in Manhattan Beach, California.",
      "It is known for comfy memory-foam shoes.",
      "It made kids' sneakers that light up with every step.",
      "Its 'Slip-ins' shoes let you step in hands-free."
    ] },
    { name: "Hoka", wiki: "Hoka One One", year: 2009, tags: ["sportswear"], hints: [
      "This is a company founded in the 2000s.",
      "It was founded in France by two trail runners.",
      "It is now owned by Deckers, the maker of UGG boots.",
      "Its name comes from a Maori phrase meaning 'fly over the earth.'",
      "Its running shoes are famous for super-thick, cushioned soles."
    ] },
    { name: "Gymshark", year: 2012, tags: ["sportswear"], hints: [
      "This is a company founded in the 2010s.",
      "It was started in England by a 19-year-old named Ben Francis.",
      "It grew huge through YouTube and fitness influencers.",
      "It sells workout clothes like leggings and fitted tees.",
      "Its logo is a shark head, and its name mentions a place to work out."
    ] },
    { name: "Hasbro", year: 1923, tags: ["entertainment"], hints: [
      "This is an American company founded in the 1920s.",
      "It was started by three brothers in Rhode Island.",
      "It makes toys and board games.",
      "It created Mr. Potato Head, G.I. Joe, and the Transformers toy line.",
      "It owns Monopoly, Nerf, and Play-Doh."
    ] },
    { name: "Warner Bros.", year: 1923, tags: ["entertainment"], hints: [
      "This is an American company founded in the 1920s.",
      "It was founded by four brothers: Harry, Albert, Sam, and Jack.",
      "It is a major Hollywood film studio.",
      "It made the Harry Potter and 'The Matrix' movies.",
      "Its cartoons star Bugs Bunny, and its logo is a shield with 'WB.'"
    ] },
    { name: "Pixar", year: 1986, tags: ["entertainment"], hints: [
      "This is an American company founded in the 1980s.",
      "Steve Jobs bought it from Lucasfilm.",
      "It made the first fully computer-animated feature film.",
      "Its logo features a hopping desk lamp.",
      "It made 'Toy Story,' 'Finding Nemo,' and 'Up.'"
    ] },
    { name: "PlayStation", year: 1994, tags: ["entertainment"], hints: [
      "This is a brand launched in the 1990s.",
      "It comes from the Japanese electronics company Sony.",
      "It is a video game console line.",
      "Its controllers have triangle, circle, X, and square buttons.",
      "Its exclusive games include 'God of War' and 'Spider-Man.'"
    ] },
    { name: "Xbox", year: 2001, tags: ["entertainment"], hints: [
      "This is a brand launched in the 2000s.",
      "It comes from Microsoft.",
      "It is a video game console line with a green logo.",
      "It launched alongside the game 'Halo: Combat Evolved.'",
      "Its subscription service is called Game Pass."
    ] },
    { name: "Roblox", wiki: "Roblox Corporation", year: 2004, tags: ["entertainment"], hints: [
      "This is an American company founded in the 2000s.",
      "It was co-founded by David Baszucki and Erik Cassel.",
      "It runs an online platform hugely popular with kids.",
      "Players build and share their own games with blocky avatars.",
      "Its virtual currency is called Robux."
    ] },
    { name: "Chevrolet", year: 1911, tags: ["cars"], hints: [
      "This is an American company founded in the early 1900s.",
      "It was co-founded by a Swiss-born race car driver named Louis.",
      "It is part of General Motors.",
      "Its logo is a gold 'bowtie.'",
      "It makes the Corvette, Camaro, and Silverado."
    ] },
    { name: "Volkswagen", year: 1937, tags: ["cars"], hints: [
      "This is a European company founded in the 1930s.",
      "It is based in Wolfsburg, Germany.",
      "Its name means 'people's car' in German.",
      "It makes the Golf and the Jetta.",
      "Its round Beetle was Herbie in 'The Love Bug.'"
    ] },
    { name: "Jeep", year: 1941, tags: ["cars"], hints: [
      "This is an American brand founded in the 1940s.",
      "It began as a military vehicle in World War II.",
      "It is known for rugged off-road SUVs.",
      "Its grille has seven vertical slots.",
      "It makes the Wrangler, and owners often wave to each other."
    ] },
    { name: "Subaru", year: 1953, tags: ["cars"], hints: [
      "This is a Japanese company founded in the 1950s.",
      "Its name is the Japanese word for a star cluster.",
      "Its logo shows six stars of the Pleiades.",
      "Nearly all its cars come with all-wheel drive.",
      "It makes the Outback, Forester, and WRX."
    ] },
    { name: "Lamborghini", year: 1963, tags: ["cars"], hints: [
      "This is a European company founded in the 1960s.",
      "Its founder, Ferruccio, made tractors before cars.",
      "It is based near Bologna, Italy.",
      "Its logo is a raging bull.",
      "It makes supercars like the Countach, Aventador, and Huracán."
    ] },
    { name: "Hyundai", wiki: "Hyundai Motor Company", year: 1967, tags: ["cars"], hints: [
      "This is an Asian company founded in the 1960s.",
      "It is based in Seoul, South Korea.",
      "It is a sister company to Kia.",
      "It makes the Elantra, Sonata, and Tucson.",
      "Its logo is a slanted 'H' in an oval."
    ] },
    { name: "Rivian", year: 2009, tags: ["cars"], hints: [
      "This is an American company founded in the 2000s.",
      "It was founded by RJ Scaringe.",
      "Amazon invested heavily and ordered its delivery vans.",
      "It builds its vehicles in Normal, Illinois.",
      "It makes the R1T electric pickup truck and R1S SUV."
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
    ] },
    { name: "Pokémon", wiki: "Pokémon (TV series)", year: 1997, tags: ["action"], hints: [
      "It first aired in the 1990s.",
      "It's a long-running adventure series for kids tied to a hugely popular video game franchise.",
      "Its young hero travels from town to town collecting creatures and battling gym leaders.",
      "Team Rocket's Jessie, James, and a talking cat keep trying to steal the hero's partner.",
      "Ash Ketchum wants to be the very best, with his electric mouse Pikachu at his side."
    ] },
    { name: "Inuyasha", year: 2000, tags: ["action"], hints: [
      "It first aired in the 2000s.",
      "It's a fantasy action series based on a manga by the creator of 'Ranma ½'.",
      "A modern schoolgirl falls down an old well and lands in feudal Japan.",
      "She and a half-demon hunt for shards of the shattered Shikon Jewel.",
      "Kagome can make the dog-eared half-demon hero crash to the ground by saying 'Sit, boy!'"
    ] },
    { name: "Yu Yu Hakusho", year: 1992, tags: ["action"], hints: [
      "It first aired in the 1990s.",
      "It's a martial arts and supernatural action series based on a manga by the creator of 'Hunter × Hunter'.",
      "Its teen hero dies saving a child in the very first episode.",
      "Brought back to life, he becomes a Spirit Detective working for the ruler of the afterlife.",
      "Yusuke Urameshi fires his Spirit Gun alongside Kuwabara, Kurama, and Hiei."
    ] },
    { name: "Saint Seiya", year: 1986, tags: ["action"], hints: [
      "It first aired in the 1980s.",
      "It's an action series known in the US as 'Knights of the Zodiac'.",
      "Its young warriors wear magical armor based on constellations.",
      "They fight to protect the reincarnation of the Greek goddess Athena.",
      "Pegasus, Dragon, Cygnus, Andromeda, and Phoenix lead the Bronze-rank warriors."
    ] },
    { name: "JoJo's Bizarre Adventure", wiki: "JoJo's Bizarre Adventure (TV series)", year: 2012, tags: ["action"], hints: [
      "It first aired in the 2010s, adapting a manga from the 1980s.",
      "It's a flamboyant action saga known for dramatic poses.",
      "Each part follows a different member of the same family across generations.",
      "Characters fight using ghostly fighting spirits called Stands.",
      "The Joestar family battles the vampire Dio, who shouts 'Za Warudo!' to stop time."
    ] },
    { name: "Howl's Moving Castle", year: 2004, tags: ["action"], hints: [
      "This is an animated film from Japan.",
      "It was made by the studio behind 'My Neighbor Totoro'.",
      "It is based on a British fantasy novel by Diana Wynne Jones.",
      "A young hatmaker is cursed by a witch and turned into an old woman.",
      "She finds work with a vain wizard whose home walks on mechanical legs, powered by a fire demon named Calcifer."
    ] },
    { name: "Princess Mononoke", year: 1997, tags: ["action"], hints: [
      "It came out in the 1990s.",
      "It's an epic fantasy film from Studio Ghibli.",
      "A young warrior is cursed after killing a demon boar and travels west for a cure.",
      "He gets caught in a war between an ironworks town and the gods of the forest.",
      "Ashitaka meets San, a girl raised by wolves who fights for the forest spirit."
    ] },
    { name: "Space Battleship Yamato", year: 1974, tags: ["scifi"], hints: [
      "It first aired in the 1970s.",
      "It's a sci-fi opera that was adapted in the US as 'Star Blazers'.",
      "Earth is dying from radiation bombs dropped by an alien empire.",
      "A rebuilt World War II warship flies to a distant planet for a device to save Earth.",
      "The crew travels to Iscandar while fighting the Gamilas empire."
    ] },
    { name: "Science Ninja Team Gatchaman", year: 1972, tags: ["scifi"], hints: [
      "It first aired in the 1970s.",
      "It's a superhero sci-fi series that was adapted in the US as 'Battle of the Planets'.",
      "A group of five young heroes wears bird-themed costumes.",
      "They fight the evil organization Galactor and its masked leader Berg Katse.",
      "Ken the Eagle leads the squad, and their vehicles combine into the God Phoenix."
    ] },
    { name: "The Super Dimension Fortress Macross", year: 1982, tags: ["scifi"], hints: [
      "It first aired in the 1980s.",
      "It's a sci-fi series that became part of 'Robotech' in the US.",
      "Humans rebuild a crashed alien starship and get pulled into an interstellar war.",
      "Its fighter jets transform into giant robots, and a pop singer helps win the war.",
      "Pilot Hikaru Ichijyo and idol Lynn Minmay are caught in a love triangle against the Zentradi."
    ] },
    { name: "Castle in the Sky", year: 1986, tags: ["scifi"], hints: [
      "It came out in the 1980s.",
      "It's an adventure film and the first official release from Studio Ghibli.",
      "A girl with a glowing crystal necklace floats gently down into a boy's arms.",
      "Air pirates and government agents race to find a floating island.",
      "Pazu and Sheeta search for the lost flying city of Laputa."
    ] },
    { name: "Ghost in the Shell", wiki: "Ghost in the Shell (1995 film)", year: 1995, tags: ["scifi"], hints: [
      "It came out in the 1990s.",
      "It's a cyberpunk film that inspired 'The Matrix'.",
      "Its heroine is a cyborg with an artificial body who works for a government security unit.",
      "She hunts a mysterious hacker known as the Puppet Master.",
      "Major Motoko Kusanagi of Section 9 questions whether she still has a soul."
    ] },
    { name: "Trigun", year: 1998, tags: ["scifi"], hints: [
      "It first aired in the 1990s.",
      "It's a sci-fi Western set on a desert planet.",
      "Its goofy hero has a $60 billion bounty on his head but refuses to kill anyone.",
      "He wears a red coat and is nicknamed 'The Humanoid Typhoon'.",
      "Vash the Stampede loves donuts and says 'Love and peace!'"
    ] },
    { name: "Digimon Adventure", year: 1999, tags: ["scifi"], hints: [
      "It first aired in the 1990s.",
      "It's a kids' series often compared to Pokémon.",
      "A group of kids at summer camp is pulled into a computer-made world.",
      "Each kid is paired with a creature that evolves into stronger forms.",
      "Tai and his partner Agumon, who digivolves into Greymon, lead the DigiDestined."
    ] },
    { name: "Gurren Lagann", year: 2007, tags: ["scifi"], hints: [
      "It first aired in the 2000s.",
      "It's an over-the-top giant robot series from Studio Gainax.",
      "Two young men escape their underground village to the surface world.",
      "Their robots combine and grow bigger until they're fighting at galaxy scale.",
      "Simon and Kamina tell each other to 'pierce the heavens' with their drill."
    ] },
    { name: "Dr. Stone", year: 2019, tags: ["scifi"], hints: [
      "It first aired in the 2010s.",
      "It's a sci-fi adventure series based on a manga.",
      "A mysterious flash turns every human on Earth to rock for thousands of years.",
      "A teen genius wakes up and rebuilds civilization from scratch with chemistry.",
      "Senku Ishigami calls everything '10 billion percent' exciting."
    ] },
    { name: "Grave of the Fireflies", year: 1988, tags: ["dark"], hints: [
      "It came out in the 1980s.",
      "It's a heartbreaking Studio Ghibli war film.",
      "Two siblings try to survive on their own near the end of World War II.",
      "A teen boy looks after his little sister after bombings in Kobe.",
      "Seita and Setsuko keep a tin of fruit drops and catch glowing insects at night."
    ] },
    { name: "Serial Experiments Lain", year: 1998, tags: ["dark"], hints: [
      "It first aired in the 1990s.",
      "It's a surreal, unsettling psychological series.",
      "A quiet schoolgirl gets an email from a classmate who recently died.",
      "She becomes obsessed with a vast computer network called the Wired.",
      "The line between the internet and reality blurs for a 14-year-old girl named Iwakura."
    ] },
    { name: "Monster", wiki: "Monster (manga)", year: 2004, tags: ["dark"], hints: [
      "It first aired in the 2000s.",
      "It's a slow-burn psychological thriller set mostly in Germany.",
      "A surgeon saves a young boy's life instead of the town's mayor.",
      "Years later, he learns the boy grew up to be a serial killer.",
      "Dr. Kenzo Tenma hunts down the charming, cold-blooded Johan Liebert."
    ] },
    { name: "Psycho-Pass", year: 2012, tags: ["dark"], hints: [
      "It first aired in the 2010s.",
      "It's a dark sci-fi crime thriller.",
      "In future Japan, a system scans people's minds to predict who will commit crimes.",
      "Police carry guns called Dominators that only fire on people judged dangerous.",
      "Rookie Akane Tsunemori works alongside enforcer Shinya Kogami under the Sibyl System."
    ] },
    { name: "Parasyte", year: 2014, tags: ["dark"], hints: [
      "Its TV series first aired in the 2010s, adapting a manga from the late 1980s.",
      "It's a sci-fi horror series.",
      "Alien worms invade Earth and take over human brains.",
      "One fails to reach a teen's brain and ends up living in his right hand instead.",
      "Shinichi Izumi shares his body with a curious creature he names Migi."
    ] },
    { name: "Erased", wiki: "Erased (manga)", year: 2016, tags: ["dark"], hints: [
      "It first aired in the 2010s.",
      "It's a mystery thriller involving time travel.",
      "A struggling manga artist is sometimes sent back in time to stop tragedies.",
      "After his mother is murdered, he jumps back 18 years to his childhood.",
      "Satoru Fujinuma tries to save his classmate Kayo from a serial kidnapper."
    ] },
    { name: "The Promised Neverland", year: 2019, tags: ["dark"], hints: [
      "It first aired in the 2010s.",
      "It's a dark fantasy thriller based on a manga.",
      "Kids at a cheerful orphanage are told they'll be adopted at age 12.",
      "They discover they're actually being raised as food for demons.",
      "Emma, Norman, and Ray plot to escape from Grace Field House."
    ] },
    { name: "Vinland Saga", year: 2019, tags: ["dark"], hints: [
      "It first aired in the 2010s.",
      "It's a historical epic based on a manga.",
      "It's set in Europe about a thousand years ago.",
      "A young Viking boy seeks revenge on the man who killed his father.",
      "Thorfinn serves Askeladd's band of warriors, waiting for a chance at a duel."
    ] },
    { name: "Lupin the Third", year: 1971, tags: ["comedy"], hints: [
      "Its first TV series aired in the 1970s.",
      "It's a comedy caper series about a charming criminal.",
      "Its hero is the grandson of a famous French gentleman thief.",
      "He's always chased by Inspector Zenigata of Interpol.",
      "He pulls off heists with Jigen, Goemon, and the femme fatale Fujiko."
    ] },
    { name: "Urusei Yatsura", year: 1981, tags: ["comedy"], hints: [
      "It first aired in the 1980s.",
      "It's a wacky romantic comedy based on a manga by Rumiko Takahashi.",
      "An unlucky, girl-crazy teen wins a game of tag that decides Earth's fate.",
      "The alien princess he beat thinks he proposed and moves in with him.",
      "Lum, an alien girl in a tiger-striped bikini, zaps Ataru with electricity."
    ] },
    { name: "My Neighbor Totoro", year: 1988, tags: ["comedy"], hints: [
      "It came out in the 1980s.",
      "It's a gentle family film from Studio Ghibli.",
      "Two young sisters move to the countryside while their mother is in the hospital.",
      "They meet friendly forest spirits and ride a bus shaped like a cat.",
      "Satsuki and Mei wait at a bus stop in the rain with a giant furry creature."
    ] },
    { name: "Kiki's Delivery Service", year: 1989, tags: ["comedy"], hints: [
      "It came out in the 1980s.",
      "It's a gentle coming-of-age film from Studio Ghibli.",
      "A 13-year-old girl leaves home to spend a year living on her own.",
      "She settles in a seaside town and starts a business using her flying broom.",
      "A young witch and her black cat Jiji run errands by air for a bakery."
    ] },
    { name: "Crayon Shin-chan", year: 1992, tags: ["comedy"], hints: [
      "It first aired in the 1990s.",
      "It's a family comedy series that's hugely popular in Asia.",
      "Its hero is a mischievous 5-year-old boy who embarrasses his parents.",
      "He loves the superhero Action Kamen and flirts with grown-up women.",
      "Shinnosuke Nohara does his famous butt dance."
    ] },
    { name: "Azumanga Daioh", year: 2002, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a slice-of-life comedy based on a four-panel comic strip.",
      "It follows a group of high school girls through three years of school.",
      "A 10-year-old genius skips ahead into their class.",
      "Chiyo-chan, spacey Osaka, and cat-loving Sakaki hang out with their teacher Yukari."
    ] },
    { name: "Fruits Basket", year: 2001, tags: ["comedy"], hints: [
      "Its first series aired in the early 2000s, with a remake in 2019.",
      "It's a romantic comedy-drama based on a shojo manga.",
      "An orphaned high school girl ends up living in a tent, then moves in with a wealthy family.",
      "Family members turn into animals when hugged by the opposite sex.",
      "Tohru Honda learns the secret of the Sohma family and the Chinese zodiac curse."
    ] },
    { name: "K-On!", year: 2009, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a laid-back slice-of-life comedy from Kyoto Animation.",
      "A group of high school girls joins a club to save it from shutting down.",
      "They spend more time eating cake and drinking tea than practicing.",
      "Yui Hirasawa plays the guitar she named Gitah in the light music club."
    ] },
    { name: "Toradora!", year: 2008, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a high school romantic comedy based on light novels.",
      "A gentle boy with scary-looking eyes makes an unlikely alliance with a tiny, fierce girl.",
      "They agree to help each other win over their crushes, who happen to be best friends.",
      "Ryuji Takasu teams up with Taiga Aisaka, the 'Palmtop Tiger.'"
    ] },
    { name: "The Melancholy of Haruhi Suzumiya", year: 2006, tags: ["comedy"], hints: [
      "It first aired in the 2000s.",
      "It's a quirky school comedy with sci-fi twists, from Kyoto Animation.",
      "An eccentric high school girl starts a club to find aliens, time travelers, and espers.",
      "She doesn't realize she might secretly be able to reshape reality.",
      "Kyon narrates the antics of the SOS Brigade, and the 'Endless Eight' arc repeats the same episode eight times."
    ] },
    { name: "Ashita no Joe", year: 1970, tags: ["sports"], hints: [
      "It first aired in 1970.",
      "It's a gritty sports drama that became a cultural icon in Japan.",
      "A rebellious orphan from the slums of Tokyo is discovered by a washed-up trainer.",
      "He learns to fight while in a juvenile detention center.",
      "Joe Yabuki boxes his rival Rikiishi and ends up 'burned out to pure white ash.'"
    ] },
    { name: "Initial D", year: 1998, tags: ["sports"], hints: [
      "It first aired in the 1990s.",
      "It's a street racing series based on a manga.",
      "A quiet teen gets amazing driving skills from delivering tofu down a mountain at dawn.",
      "He drives a Toyota AE86 and masters the drift.",
      "Takumi Fujiwara races rivals on the mountain passes of Gunma to Eurobeat music."
    ] },
    { name: "The Prince of Tennis", year: 2001, tags: ["sports"], hints: [
      "It first aired in the 2000s.",
      "It's a sports series based on a manga.",
      "A 12-year-old prodigy returns to Japan after winning youth titles in America.",
      "He joins the powerful team at Seigaku middle school.",
      "Ryoma Echizen tells opponents 'Mada mada dane' and uses his Twist Serve."
    ] },
    { name: "Hajime no Ippo", year: 2000, tags: ["sports"], hints: [
      "It first aired in the 2000s.",
      "It's a sports series based on a manga that started in the 1980s.",
      "A shy, bullied teen who helps at his mom's fishing boat business is rescued by a pro fighter.",
      "He takes up boxing at the Kamogawa Gym.",
      "Makunouchi becomes a featherweight known for his Dempsey Roll."
    ] },
    { name: "Free!", year: 2013, tags: ["sports"], hints: [
      "It first aired in the 2010s.",
      "It's a sports series from Kyoto Animation.",
      "A group of childhood friends reunites in high school to start a new club.",
      "Its hero only swims one stroke and loves water more than anything.",
      "Haruka Nanase and his friends compete against Rin Matsuoka's team at Samezuka."
    ] },
    { name: "Yuri!!! on Ice", year: 2016, tags: ["sports"], hints: [
      "It first aired in the 2010s.",
      "It's a sports series about a sport performed in costumes to music.",
      "A Japanese competitor falls into a slump after a disastrous Grand Prix Final.",
      "A video of him copying his idol's routine goes viral, and the idol flies in to coach him.",
      "Katsuki is coached by Russian champion Victor Nikiforov in figure skating."
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
