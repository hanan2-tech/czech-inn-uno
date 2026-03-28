/* ═══════════════════════════════════════════════════════════
   DATA.JS — All Platform Data
   Tours · Extras · Partner Venues · Analytics · Gold Label
   ═══════════════════════════════════════════════════════════ */

/* ── SIGNATURE TOURS ─────────────────────────────────────── */
const TOURS = [
  {
    id: "kafka", name: "Kafka's Prague",
    sub: "Literature · Philosophy · Solitude",
    badge: "KAFKA", badgeClass: "bg-kafka",
    img: "assets/tours/kafka/hero.jpg",
    photos: [
      "assets/tours/kafka/gallery-1.jpg",
      "assets/tours/kafka/gallery-2.jpg",
      "assets/tours/kafka/gallery-3.jpg",
      "assets/tours/kafka/gallery-4.jpg",
      "assets/tours/kafka/gallery-5.webp"
    ],
    dur: "~5 hrs", grp: "25–35 guests", type: "Walking + Tram",
    lang: "12 languages", price: 59, season: "Year-round",
    desc: "Follow Kafka's footsteps from his birthplace in Old Town Square through the winding streets where he wrote, suffered, and dreamed, to the tiny rooms of Golden Lane.",
    includes: ["Licensed literary guide", "Tram pass", "Coffee & pastries at Café Louvre", "Museum entry", "Kafka souvenir bookmark"],
    stops: [
      { n:"Old Town Square: Birthplace", a:"Staroměstské nám. 5", dur:"20 min",
        lat:50.0874, lng:14.4213,
        photo:"assets/tours/kafka/stop-1-old-town-square.jpg",
        story:"Kafka was born July 3, 1883 in this very square, into a middle-class Jewish family, torn between Czech, German, and Jewish identity. He grew up under a domineering father who never understood him.",
        quote:'"Everything that is not literature bores me."',
        activity:"Stand still. Close your eyes. What does this square feel like in silence?" },
      { n:"Childhood Homes (3 addresses)", a:"Near Old Town Square", dur:"15 min",
        lat:50.0871, lng:14.4207,
        photo:"assets/tours/kafka/stop-2-josefov.jpg",
        story:"His family moved repeatedly. Each apartment was a reflection of his father's ambition, and Franz's quiet resistance. He lived in at least 5 apartments in this same neighborhood.",
        quote:'"I am made of literature."',
        activity:"Look at the buildings. Imagine the same streets at night, in 1905." },
      { n:"Charles University: Law Faculty", a:"Ovocný trh 5", dur:"15 min",
        lat:50.0856, lng:14.4218,
        photo:"assets/tours/kafka/stop-3-university.jpg",
        story:"Studied law 1901–1906. Not from passion, but from compromise with his father. Led a complete double life: insurance clerk by day, writer by night. Few colleagues knew who he truly was.",
        quote:'"The true path goes over a rope not stretched too high."',
        activity:"Consider: what are you doing out of compromise vs. true calling?" },
      { n:"Café Louvre: Coffee and Conversation", a:"Národní 22", dur:"45 min",
        lat:50.0809, lng:14.4162,
        photo:"assets/tours/kafka/stop-4-cafe-louvre.jpg",
        story:"The famous intellectual café where Kafka met Max Brod, his closest friend, the man who saved all his manuscripts from destruction after his death.",
        quote:'"This is where small stories begin."',
        activity:"Write one sentence about what you see. Any sentence. Don't think.",
        food:"Viennese coffee + house pastries for the group" },
      { n:"Golden Lane, Prague Castle", a:"Zlatá ulička, Pražský hrad", dur:"30 min",
        lat:50.0909, lng:14.3991,
        photo:"assets/tours/kafka/stop-5-golden-lane.jpg",
        story:"He rented tiny house #22. Wrote parts of 'The Trial' and 'The Castle' here, in a space so small you can barely turn around. The rooms mirror his sense of being trapped inside his own mind.",
        quote:'"A small room can hold a whole world."',
        activity:"Stand in the room. Feel the tightness. He wrote masterpieces here." },
      { n:"Kafka Museum", a:"Cihelná 2b, Malá Strana", dur:"30 min",
        lat:50.0881, lng:14.4061,
        photo:"assets/tours/kafka/stop-6-kafka-museum.jpg",
        story:"His manuscripts, letters, childhood photos. The museum is designed to disorient: deliberately Kafkaesque architecture that makes you feel lost.",
        quote:'"A book must be the axe for the frozen sea within us."',
        activity:"Find one object that speaks to you. Ask yourself why." },
      { n:"Vltava Riverbank: Final Reflection", a:"Cihelná Embankment", dur:"15 min",
        lat:50.0886, lng:14.4055,
        photo:"assets/tours/kafka/stop-7-vltava.jpg",
        story:"A place for quiet. Kafka wrote extensively about the river, about solitude, about watching life from the outside. He died of tuberculosis at 40, asking Brod to burn everything.",
        quote:'"Stand a moment. Let it settle."',
        activity:"Watch the water. Think about today's journey. What stays with you?" }
    ],
    venues: [
      { name:"Café Louvre", type:"Historic Café", addr:"Národní 22, Praha 1", what:"Order the Viennese Melange and the apple strudel, unchanged since Kafka's time. The upstairs billiard room is unchanged.", tip:"Arrive early: tables fill by 10am. Ask for a window seat overlooking Národní třída.", icon:'<iconify-icon icon="tabler:coffee" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Kafka Museum Bookshop", type:"Museum and Shop", addr:"Cihelná 2b, Malá Strana", what:"One of Prague's best bookshops. Editions of The Trial and The Castle in 30+ languages. Kafka postcards, posters, limited prints.", tip:"The staff speak English and are genuinely knowledgeable: ask them anything.", icon:'<lord-icon src="https://cdn.lordicon.com/kipaqhoz.json" trigger="hover" colors="primary:#C9A84C" style="width:20px;height:20px"></lord-icon>' },
      { name:"Hemingway Bar", type:"Cocktail Bar", addr:"Karoliny Světlé 26, Praha 1", what:"The finest cocktail bar in Prague. Pre-Prohibition recipes, fresh ingredients, and an atmosphere that feels like 1930s Paris. The Kafka Sour is on the menu.", tip:"No reservations: arrive before 7pm or expect a wait. Worth every minute.", icon:'<iconify-icon icon="tabler:glass-cocktail" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Shakespeare & Sons", type:"English Bookshop", addr:"Krymská 12, Praha 10", what:"Beloved independent bookshop. Best selection of Prague literature in English. Staff picks are excellent.", tip:"Check their events calendar: readings happen regularly in the back room.", icon:'<lord-icon src="https://cdn.lordicon.com/kipaqhoz.json" trigger="hover" colors="primary:#C9A84C" style="width:20px;height:20px"></lord-icon>' },
      { name:"Golden Lane Wine Bar", type:"Wine Bar", addr:"Zlatá ulička courtyard area", what:"Small, atmospheric. Czech wines and Moravian reds. Perfect post-Golden Lane stop.", tip:"Sit outside in summer: the castle walls are 5 metres away.", icon:'<iconify-icon icon="tabler:glass-wine" style="font-size:20px;color:#C9A84C"></iconify-icon>' }
    ]
  },
  {
    id: "mucha", name: "Mucha's Art Nouveau Prague",
    sub: "Art · Color · Inspiration · Design",
    badge: "MUCHA", badgeClass: "bg-mucha",
    img: "assets/tours/mucha/hero.jpg",
    photos: [
      "assets/tours/mucha/gallery-1.jpg",
      "assets/tours/mucha/gallery-2.jpg",
      "assets/tours/mucha/gallery-3.jpg",
      "assets/tours/mucha/gallery-4.jpg",
      "assets/tours/mucha/gallery-5.jpg"
    ],
    dur: "~6 hrs", grp: "25–35 guests", type: "Walking + Tram",
    lang: "12 languages", price: 65, season: "Year-round",
    desc: "A full day tracing Alphonse Mucha's life, from his museum and the artists' cafés through the ornate Municipal House to the inspiration of Charles Bridge.",
    includes: ["Licensed art historian guide", "Mucha Museum entry", "Coffee & pastries at Kavárna Obecní dům", "Art print souvenir"],
    stops: [
      { n:"Alfons Mucha Museum", a:"Panská 7, Praha 1", dur:"45 min",
        lat:50.0839, lng:14.4279,
        photo:"assets/tours/mucha/stop-1-mucha-museum.jpg",
        story:"The museum showcases Mucha's finest Art Nouveau posters: Sarah Bernhardt, the Slav Epic studies, decorative panels that changed how the world saw Czech art. He was born in Moravia, made famous in Paris, returned to create Czech identity.",
        quote:'"Art should be for all, not for the few."',
        activity:"Pick one poster. Notice every small detail: which line or color speaks to you?" },
      { n:"Kavárna Obecní dům, Municipal House", a:"nám. Republiky 5", dur:"50 min",
        lat:50.0877, lng:14.4282,
        photo:"assets/tours/mucha/stop-2-municipal-house.jpg",
        story:"Mucha co-designed the Mayor's Salon of this building. The most ornate Art Nouveau building in Prague: every ceiling, lamp, and doorknob is a work of art. Built 1905–1912.",
        quote:'"Art is life, and life is art."',
        activity:"Look up. The ceiling is the point. How long can you stare without blinking?",
        food:"Coffee and seasonal pastries at the historic café" },
      { n:"National Theatre", a:"Národní 2, Praha 1", dur:"25 min",
        lat:50.0798, lng:14.4146,
        photo:"assets/tours/mucha/stop-3-national-theatre.jpg",
        story:"Mucha designed posters and sets for the National Theatre. The façade is a masterpiece of national romanticism. The Czechs crowdfunded its rebuilding after it burned in 1881, paid for entirely by the public.",
        quote:'"Every detail tells a story."',
        activity:"Spot the decorative details: how many styles can you count in one façade?" },
      { n:"Wenceslas Square: Art Nouveau Walk", a:"Václavské nám.", dur:"20 min",
        lat:50.0814, lng:14.4267,
        photo:"assets/tours/mucha/stop-4-wenceslas.jpg",
        story:"The hotels and buildings lining Wenceslas Square from 1900–1920 are textbook Art Nouveau. The Grand Hotel Europa is the finest example. This is where Prague's modern identity was built.",
        quote:'"The city speaks to those who listen."',
        activity:"Find three Art Nouveau façade details you'd never noticed before." },
      { n:"Charles Bridge: Inspiration Point", a:"Karlův most", dur:"30 min",
        lat:50.0865, lng:14.4118,
        photo:"assets/tours/mucha/stop-5-charles-bridge.jpg",
        story:"Mucha drew endless inspiration from this bridge. The 30 baroque statues, the river, the castle in the background: it's the single most visually dense spot in Prague.",
        quote:'"This city is made for artists."',
        activity:"Find the lucky bronze dog on St. John of Nepomuk and touch it for luck." }
    ],
    venues: [
      { name:"Kavárna Obecní dům", type:"Historic Café", addr:"nám. Republiky 5", what:"One of the most beautiful café interiors in Europe. Art Nouveau at its absolute finest. The hot chocolate is legendary.", tip:"Sit in the main hall, not the side room. Worth the slightly higher prices.", icon:'<iconify-icon icon="tabler:coffee" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Alfons Mucha Museum Shop", type:"Art Shop", addr:"Panská 7", what:"Finest quality Mucha prints, postcards, and art books. Official reproductions of every major poster.", tip:"The large-format prints (A2) are worth the price: they're printed on archival paper.", icon:'<iconify-icon icon="tabler:palette" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"DOX Centre for Contemporary Art", type:"Gallery", addr:"Poupětova 1, Praha 7", what:"Prague's finest contemporary art gallery. Regularly features Czech artists influenced by the Mucha legacy. The architecture itself is worth a visit.", tip:"The café has excellent coffee and the terrace overlooks a sculpture garden.", icon:'<iconify-icon icon="tabler:building-monument" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Grand Café Orient", type:"Cubist Café", addr:"Ovocný trh 19", what:"The world's only Cubist café: the style that emerged in direct response to and rebellion against Art Nouveau. Understanding the contrast completes the story.", tip:"Try the Cubist cake: it's actually delicious, not just a novelty.", icon:'<iconify-icon icon="tabler:building-monument" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Galerie Moderního Umění", type:"Art Gallery", addr:"Husova 19–21, Praha 1", what:"Excellent collection of Czech modern art from 1890–1950. The Mucha and Art Nouveau rooms are the highlight.", tip:"Combined ticket with the adjacent Kinský Palace is worth it.", icon:'<iconify-icon icon="tabler:photo" style="font-size:20px;color:#C9A84C"></iconify-icon>' }
    ]
  },
  {
    id: "jewish", name: "Jewish Prague: Heritage and Continuity",
    sub: "Identity · Spirit · Memory · Legacy",
    badge: "JEWISH", badgeClass: "bg-jewish",
    img: "assets/tours/jewish/hero.jpg",
    photos: [
      "assets/tours/jewish/gallery-1.jpg",
      "assets/tours/jewish/gallery-2.jpg",
      "assets/tours/jewish/gallery-3.jpg",
      "assets/tours/jewish/gallery-4.jpg",
      "assets/tours/jewish/gallery-5.jpg"
    ],
    dur: "~4 hrs", grp: "25–35 guests", type: "Walking",
    lang: "12 languages (Hebrew specialist available)", price: 69, season: "Year-round",
    desc: "An emotional journey through layers of Jewish life in Prague, from the ghetto streets to Europe's oldest active synagogue, authentic kosher lunch, and the Walls of Names.",
    includes: ["Licensed heritage guide", "All synagogue entries (Josefov)", "Kosher lunch at King Solomon Restaurant", "Old Jewish Cemetery entry"],
    stops: [
      { n:"Josefov: Entering the Story", a:"Maiselova street, Praha 1", dur:"20 min",
        lat:50.0897, lng:14.4180,
        photo:"assets/tours/jewish/stop-1-josefov.jpg",
        story:"This was a ghetto: closed, cramped, restricted. Today it's one of Prague's most elegant neighbourhoods. The Jewish people didn't just survive here. They left an indelible mark on this city.",
        quote:'"Identity is not what you are given. It is what you create."',
        activity:"Walk slowly through the streets. What do you feel in the contrast between past and present?" },
      { n:"Old-New Synagogue", a:"Maiselova 18, Praha 1", dur:"25 min",
        lat:50.0903, lng:14.4188,
        photo:"assets/tours/jewish/stop-2-old-new-synagogue.jpg",
        story:"Europe's oldest active synagogue, built c.1270. 750 years of continuous prayer, even under Nazi occupation. Connected to Rabbi Loew and the Golem legend. The original 13th-century brickwork is intact.",
        quote:'"This is not just a place. It is living continuity."',
        activity:"Enter if possible. Feel the weight of 750 years of prayer in this room." },
      { n:"King Solomon Restaurant: Kosher Lunch", a:"Široká 8, Praha 1", dur:"50 min",
        lat:50.0896, lng:14.4165,
        photo:"assets/tours/jewish/stop-3-king-solomon.jpg",
        story:"Authentic kosher cuisine in the heart of Josefov. Traditional Ashkenazi dishes unchanged for generations. One of the finest kosher restaurants in Central Europe.",
        quote:'"Food is memory on a plate."',
        activity:"Taste chicken soup with kneidlach, gefilte fish, chopped liver. Ask the waiter about each dish.",
        food:"Full kosher lunch: soup, main course, dessert, tea" },
      { n:"Old Jewish Cemetery", a:"Široká 3, Praha 1", dur:"25 min",
        lat:50.0897, lng:14.4170,
        photo:"assets/tours/jewish/stop-4-cemetery.jpg",
        story:"No room left for burials, so they layered on top of each other, up to 12 layers deep. Over 12,000 visible headstones, but 100,000+ people beneath. The oldest stones date to 1439.",
        quote:'"These stones hold more stories than any book."',
        activity:"Walk quietly. Find a name you respond to. Stand before it for a moment." },
      { n:"Pinkas Synagogue: Walls of Names", a:"Široká 3, Praha 1", dur:"30 min",
        lat:50.0896, lng:14.4168,
        photo:"assets/tours/jewish/stop-5-pinkas.jpg",
        story:"The walls bear the hand-painted names of 77,297 Bohemian and Moravian Jewish victims of the Holocaust. Upstairs: drawings by children from the Terezín ghetto. They drew homes, butterflies, and dreams.",
        quote:'"A name is the last thread between a person and the world."',
        activity:"Find a name that speaks to you. Read it aloud if you feel ready." }
    ],
    venues: [
      { name:"King Solomon Restaurant", type:"Kosher Restaurant", addr:"Široká 8, Praha 1", what:"The finest kosher restaurant in Prague, possibly in Central Europe. Traditional Ashkenazi cuisine with impeccable service. Fully certified.", tip:"Reservations essential. Ask for the chef's recommendation: it changes seasonally.", icon:'<iconify-icon icon="tabler:tools-kitchen-2" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Judaica Shop Josefov", type:"Heritage Shop", addr:"Maiselova 15, Praha 1", what:"Authentic Judaica: menorahs, mezuzot, books, art. Everything here is made by real craftspeople, not tourist factories.", tip:"The handmade silver items are genuinely exceptional quality and fairly priced.", icon:'<iconify-icon icon="tabler:star-of-david" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Café Savoy", type:"Elegant Café", addr:"Vítězná 5, Praha 1", what:"Prague's most beautiful café interior: a restored Neo-Renaissance masterpiece. Perfect for a reflective coffee after the Pinkas Synagogue.", tip:"The pastry counter is extraordinary. The Savoy cake is their signature: order it.", icon:'<iconify-icon icon="tabler:coffee" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Prague Jewish Town Hall", type:"Cultural Site", addr:"Maiselova 18, Praha 1", what:"The only Jewish Town Hall in the world with two clocks: one Hebrew (running right to left), one Czech. A symbol of two identities coexisting.", tip:"The clock tower is visible from the street: look for it above the entrance.", icon:'<lord-icon src="https://cdn.lordicon.com/abgtphux.json" trigger="hover" colors="primary:#C9A84C" style="width:20px;height:20px"></lord-icon>' },
      { name:"Terezín Memorial", type:"Day Trip Extension", addr:"Terezín (45 min from Prague)", what:"The concentration camp and ghetto museum: an essential extension for groups wanting the complete historical context.", tip:"Full day needed. Combine with the Pinkas tour for maximum impact.", icon:'<iconify-icon icon="tabler:building-arch" style="font-size:20px;color:#C9A84C"></iconify-icon>' }
    ]
  },
  {
    id: "kids", name: "Prague Legend Quest: Kids and Families",
    sub: "Adventure · Imagination · Legends · Ice Cream",
    badge: "KIDS", badgeClass: "bg-kids",
    img: "assets/tours/kids/hero.jpg",
    photos: [
      "assets/tours/kids/gallery-1.jpg",
      "assets/tours/kids/gallery-2.jpg",
      "assets/tours/kids/gallery-3.jpg",
      "assets/tours/kids/gallery-4.jpg",
      "assets/tours/kids/gallery-5.jpg"
    ],
    dur: "~5 hrs", grp: "Families, up to 30", type: "Walking + Tram",
    lang: "12 languages", price: 49, season: "Year-round (Summer best)",
    desc: "A magical family adventure through Prague's legends, from the skeleton in the Astronomical Clock to the Golem, treasure hunts, mirror maze, and puppet shows.",
    includes: ["Specialist family guide", "Ice cream at Angelato (2 scoops each)", "Puppet painting workshop", "Prague Hero Certificate (kids)", "Mission booklet"],
    stops: [
      { n:"Old Town Square: The Magic Clock", a:"Staroměstské nám.", dur:"25 min",
        lat:50.0875, lng:14.4213,
        photo:"https://images.pexels.com/photos/17307598/pexels-photo-17307598.jpeg?auto=compress&cs=tinysrgb&w=500&q=80",
        story:"The 600-year-old Astronomical Clock. Every hour, a skeleton rings its bell, 12 apostles march past, and a rooster crows. No machine in Europe has run longer without stopping.",
        quote:'"Even time tells a story in Prague."',
        activity:"Mission: Count all 12 apostles! Find the skeleton, the rooster, the miser. Who spots them first wins a sticker.",
        food:"" },
      { n:"The Golem of Prague", a:"Old Jewish Cemetery area", dur:"30 min",
        lat:50.0897, lng:14.4170,
        photo:"assets/tours/kids/stop-2-golem.jpg",
        story:"Hundreds of years ago, Rabbi Loew created a giant clay creature to protect the Jewish people. He brought it to life with a magic word. Some say the Golem still sleeps in the attic of the Old-New Synagogue.",
        quote:'"Even mud can come alive when you believe."',
        activity:"Every child gets a piece of clay and sculpts their own mini-Golem! Best one gets a special sticker.",
        food:"Cookies and juice for all children" },
      { n:"Charles Bridge: Statue Treasure Hunt", a:"Karlův most", dur:"30 min",
        lat:50.0865, lng:14.4118,
        photo:"assets/tours/kids/stop-3-charles-bridge.jpg",
        story:"30 statues guard this ancient bridge. One is magic: the bronze dog beside St. John of Nepomuk. Touch it and make a wish. Thousands do it every year.",
        quote:'"Touch the dog. Make a wish."',
        activity:"Treasure hunt: 1) Find the lucky dog, 2) Count the statues, 3) Find the hidden star in the pavement, 4) Find the best view of the castle." },
      { n:"Angelato: World's Best Gelato", a:"Rytířská 27, Praha 1", dur:"30 min",
        lat:50.0849, lng:14.4230,
        photo:"assets/tours/kids/stop-4-gelato.jpg",
        story:"Authentic Italian gelato made fresh every morning with natural Czech ingredients. 40 flavours. The blue flavour (bubblegum) is the bravest choice.",
        quote:'"Life is short. Eat the ice cream first."',
        activity:"Every child picks 2 flavours. The Bravery Sticker goes to anyone who tries the weirdest combination.",
        food:"2 scoops and 1 topping per child, unlimited sprinkles" },
      { n:"Petřín Hill: Mirror Maze and Tower", a:"Petřín Hill, Praha 1", dur:"45 min",
        lat:50.0835, lng:14.3989,
        photo:"assets/tours/kids/stop-5-petrin.jpg",
        story:"A tower built to look like a tiny Eiffel Tower. 299 steps to the top of Prague. And at the bottom, a mirror maze where you might lose yourself (and your parents) forever.",
        quote:'"The world looks different from the top."',
        activity:"Race through the mirror maze! Climb 299 steps = earn the Prague Hero Certificate!" },
      { n:"Puppet Theatre: Show and Workshop", a:"Žatecká 1, Praha 1", dur:"60 min",
        lat:50.0898, lng:14.4178,
        photo:"assets/tours/kids/stop-6-puppets.jpg",
        story:"Prague is the world capital of marionette puppets. For 400 years, Czech puppet theatre has been a national art. These handmade wooden puppets can cost thousands of euros each.",
        quote:'"In Prague, even puppets have souls."',
        activity:"After the show, every child paints a small wooden puppet to take home as a souvenir.",
        food:"Popcorn and juice during the show" }
    ],
    venues: [
      { name:"Angelato Gelato", type:"Gelateria", addr:"Rytířská 27, Praha 1", what:"The best gelato in Central Europe, made fresh each morning with natural Czech ingredients. 40 flavours. The seasonal fruit sorbets are extraordinary.", tip:"The wild strawberry sorbet in summer is the best thing you'll eat in Prague. Guaranteed.", icon:'<iconify-icon icon="tabler:ice-cream" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"National Marionette Theatre", type:"Puppet Theatre", addr:"Žatecká 1, Praha 1", what:"The finest puppet theatre in Prague: Don Giovanni performed by marionettes is their signature show. Genuinely moving for adults, magical for children.", tip:"Book the Don Giovanni evening show for parents: one of Prague's most unique cultural experiences.", icon:'<iconify-icon icon="tabler:masks-theater" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Prague Castle Toy Museum", type:"Museum", addr:"Jiřská 6, Praha Castle", what:"Europe's largest private collection of toys, from ancient Greece to Barbie. Children and adults are equally enchanted.", tip:"Allow 90 minutes minimum. The mechanical toy section is extraordinary.", icon:'<iconify-icon icon="tabler:mood-happy" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Hamleys Prague", type:"Toy Shop", addr:"Na Příkopě 14, Praha 1", what:"Five floors of toys, games, and magic. Staff demonstrate products in the aisles: it's a show as much as a shop.", tip:"The Harry Potter section has Prague-exclusive items. Check the basement for LEGO.", icon:'<iconify-icon icon="tabler:device-gamepad-2" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
      { name:"Petřín Funicular", type:"Transport + Experience", addr:"Újezd, Praha 1", what:"The historic funicular railway up Petřín Hill: a ride in itself. Has run since 1891.", tip:"Buy the ticket at the bottom. Ride up, take the tower + maze, walk down through the orchards.", icon:'<iconify-icon icon="tabler:roller-coaster" style="font-size:20px;color:#C9A84C"></iconify-icon>' }
    ]
  }
];

/* ── EXTRAS / ADD-ONS ────────────────────────────────────── */
const EXTRAS = [
  // Food & Drink
  { id:"beer-tour",     cat:"Food and Drink",  name:"Czech Food and Beer Tour",          desc:"Pub crawl through 3 historic Prague breweries with traditional Czech bites at each stop.",                    price:45, img:"https://images.pexels.com/photos/3009799/pexels-photo-3009799.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"beer-spa",      cat:"Food and Drink",  name:"Beer Spa Experience",             desc:"Soak in a private oak barrel of hops & malt with unlimited cold beer from your own tap.",                   price:65, img:"https://images.pexels.com/photos/5690802/pexels-photo-5690802.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"medieval",      cat:"Food and Drink",  name:"Medieval Dinner Show",            desc:"5-course feast with unlimited beer, fire dancers, jugglers, and swordfighting, a full spectacle.",          price:55, img:"https://images.pexels.com/photos/7919683/pexels-photo-7919683.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"cooking-class", cat:"Food and Drink",  name:"Czech Cooking Masterclass",       desc:"Private cooking class with a Czech chef: svíčková, trdelník, and traditional dumplings from scratch.",    price:75, img:"https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"wine-cellar",   cat:"Food and Drink",  name:"Moravian Wine Cellar Tasting",    desc:"Guided tasting of 8 premium Moravian wines in a historic underground cellar with a sommelier.",           price:55, img:"https://images.pexels.com/photos/17765439/pexels-photo-17765439.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  // River & Water
  { id:"river-cruise",  cat:"River and Water", name:"Vltava Dinner Cruise",            desc:"2-hour scenic dinner cruise with live jazz, sunset views, and full Czech dinner service.",                   price:50, img:"https://images.pexels.com/photos/12999311/pexels-photo-12999311.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"beer-bike",     cat:"River and Water", name:"Swimming Beer Bike",              desc:"Pedal-powered party boat on the Vltava, unlimited draft beer, great views, great laughs.",                 price:35, img:"https://images.pexels.com/photos/1796705/pexels-photo-1796705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"car-boat",      cat:"River and Water", name:"Antique Car Boat Ride",           desc:"Vintage-style car boat cruise past Prague's landmarks, charming and completely unique.",                   price:30, img:"https://images.pexels.com/photos/13276140/pexels-photo-13276140.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"paddle",        cat:"River and Water", name:"Paddle Boating",                  desc:"Relaxing paddle boat on the Vltava, unique perspective on Charles Bridge and the Castle.",                  price:15, img:"https://images.pexels.com/photos/1172569/pexels-photo-1172569.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  // Cultural
  { id:"castle-skip",   cat:"Cultural",      name:"Prague Castle Skip-the-Line",     desc:"VIP fast-track entry to the world's largest ancient castle complex. No queuing, ever.",                     price:25, img:"https://images.pexels.com/photos/9979602/pexels-photo-9979602.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"clock-tower",   cat:"Cultural",      name:"Astronomical Clock Tower",        desc:"Private after-hours climb of the clock tower for panoramic views of Old Town Square at dusk.",              price:22, img:"https://images.pexels.com/photos/17307598/pexels-photo-17307598.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"underground",   cat:"Cultural",      name:"Underground Prague",              desc:"Explore medieval cellars, tunnels, and secret corridors beneath Old Town, 700 years of history below.",   price:30, img:"https://images.pexels.com/photos/18800112/pexels-photo-18800112.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"communist",     cat:"Cultural",      name:"Communist Prague & Nuclear Bunker",desc:"Cold War tour: secret police cells, Velvet Revolution memorial & an actual nuclear bunker.",               price:35, img:"https://images.pexels.com/photos/9204747/pexels-photo-9204747.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"concert",       cat:"Cultural",      name:"Classical Concert: Municipal House",desc:"Live symphony orchestra in Prague's stunning Art Nouveau concert hall. Dress code: smart.",              price:40, img:"https://images.pexels.com/photos/4028878/pexels-photo-4028878.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"opera",         cat:"Cultural",      name:"Opera at the State Opera",        desc:"World-class opera in a gorgeous neo-Rococo venue. Subtitles in 3 languages.",                               price:35, img:"https://images.pexels.com/photos/5468933/pexels-photo-5468933.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"lennon",        cat:"Cultural",      name:"Lennon Wall and Street Art Tour",   desc:"Guided walk through Prague's most expressive street art scene, the story of rebellion in colour.",         price:20, img:"https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"vysehrad",      cat:"Cultural",      name:"Vyšehrad Fortress Walk",          desc:"Panoramic views, ancient basilica, and the cemetery where Czech legends are buried.",                       price:20, img:"https://images.pexels.com/photos/18682112/pexels-photo-18682112.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"glassblowing",  cat:"Cultural",      name:"Czech Glass Blowing Workshop",    desc:"Create your own glass piece with a master glassblower in a Bohemian studio. Keep your creation.",         price:55, img:"https://images.pexels.com/photos/3182105/pexels-photo-3182105.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"photoshoot",    cat:"Cultural",      name:"Old Town Photography Session",    desc:"2-hour shoot with a professional photographer in Prague's most photogenic locations, at golden hour.",    price:120, img:"https://images.pexels.com/photos/11388583/pexels-photo-11388583.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  // Day Trips
  { id:"bohemia",       cat:"Day Trips",     name:"Bohemian Switzerland",            desc:"Full-day hike: Pravčická Gate arch, Edmund Gorge boat ride, pine forest trails.",                           price:85, img:"https://images.pexels.com/photos/2591408/pexels-photo-2591408.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"krumlov",       cat:"Day Trips",     name:"Český Krumlov",                   desc:"UNESCO fairy-tale castle town: castle tour, river rafting, medieval tavern lunch.",                        price:75, img:"https://images.pexels.com/photos/17911110/pexels-photo-17911110.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"kutna",         cat:"Day Trips",     name:"Kutná Hora & Bone Church",        desc:"Sedlec Ossuary (the famous bone church), St. Barbara's Cathedral, silver mining history.",                 price:60, img:"https://images.pexels.com/photos/2733267/pexels-photo-2733267.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"karlovy",       cat:"Day Trips",     name:"Karlovy Vary Spa Town",           desc:"Hot springs, Moser crystal glass factory, Becherovka distillery tasting, thermal spa.",                   price:70, img:"https://images.pexels.com/photos/15247702/pexels-photo-15247702.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  // Adventure
  { id:"segway",        cat:"Adventure",     name:"Segway / E-Scooter Tour",         desc:"Glide through Prague's hidden districts and riverside paths, away from tourist crowds.",                  price:40, img:"https://images.pexels.com/photos/13019654/pexels-photo-13019654.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"ebike",         cat:"Adventure",     name:"E-Bike River Trail",              desc:"Scenic cycling along the Vltava with stops at local riverside beer gardens.",                               price:35, img:"https://images.pexels.com/photos/2248713/pexels-photo-2248713.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { id:"helicopter",    cat:"Adventure",     name:"Helicopter Tour of Prague",       desc:"15-minute private helicopter flight over Prague Castle, Old Town, and the Vltava. Unforgettable.",        price:220, img:"https://images.pexels.com/photos/5848239/pexels-photo-5848239.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" }
];

/* ── GOLD LABEL PACKAGES ─────────────────────────────────── */
const GOLD_LABEL = {
  private_tours: [
    { name:"Private Kafka Literary Evening",  guests:"2 max", price:290, dur:"4 hrs", desc:"Exclusive evening tour for couples or close friends. Candlelit café stop included. Guide is a published literary scholar." },
    { name:"Private Mucha Art Salon",          guests:"4 max", price:310, dur:"5 hrs", desc:"Private access to Mucha Museum before opening hours. Coffee with a Prague art historian. Behind-the-scenes visit." },
    { name:"Private Jewish Heritage Walk",     guests:"6 max", price:350, dur:"4 hrs", desc:"With a specialist who grew up in Prague's Jewish community. Includes private dinner reservation at King Solomon." },
    { name:"Private Family Legend Quest",      guests:"1 family", price:280, dur:"5 hrs", desc:"Your family, your pace, your guide. All activities exclusive to your group. Photo album included." }
  ],
  room_upgrades: [
    { name:"Penthouse for a Night",    price:180, desc:"Upgrade any room to a castle-view penthouse suite. Champagne and hand-written welcome note included.", icon:'<iconify-icon icon="tabler:castle" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
    { name:"Honeymoon Surprise",       price:120, desc:"Rose petals, French Champagne, in-room flowers, and a private table at a rooftop restaurant.", icon:'<iconify-icon icon="tabler:diamond" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
    { name:"Business Elite Package",   price: 95, desc:"Premium check-in, newspaper, express breakfast, car transfer to any meeting in Prague 1.", icon:'<iconify-icon icon="tabler:briefcase" style="font-size:20px;color:#C9A84C"></iconify-icon>' },
    { name:"Family Welcome Kit",       price: 65, desc:"Kids' activity pack, Czech phrase cards, folding city map, and a bag of local Czech sweets.", icon:'<iconify-icon icon="tabler:users-group" style="font-size:20px;color:#C9A84C"></iconify-icon>' }
  ],
  concierge: [
    { name:"Airport Private Car Transfer",      price: 65, desc:"Mercedes-class vehicle, professional driver, nameplate pickup at arrivals." },
    { name:"Restaurant Reservation + Tasting",  price: 95, desc:"Curated booking at one of Prague's 5 finest restaurants. 6-course tasting menu pre-arranged." },
    { name:"Private Wine Cellar Evening",        price:120, desc:"Exclusive after-hours access to a historic Prague wine cellar. Sommelier-guided 8-wine tasting." },
    { name:"Spa Day Coordination",              price: 85, desc:"Full-day spa booking at Hotel Mandarin Oriental or Corinthia Spa. Transport included." }
  ],
  packages: [
    { name:"Gold Starter",     price:395, badge:"Most Popular",   includes:["1 private tour (your choice)", "Airport car transfer", "Restaurant tasting reservation", "Room upgrade"] },
    { name:"Gold Complete",    price:795, badge:"Best Value",     includes:["2 private tours (any combination)", "Helicopter tour (15 min)", "Spa day", "Private wine cellar evening", "Penthouse upgrade", "Personal Prague Memory Book"] },
    { name:"Gold Corporate",   price:2200, badge:"For Groups",   includes:["Private Prague experience for 10 people", "All-day guided programme", "Group dinner at premium venue", "Welcome gifts for each guest", "Dedicated account manager"] }
  ]
};

/* ── AFTER DARK — EVENING EXPERIENCES ───────────────────── */
const AFTER_DARK = {
  jazz: [
    { name:"Jazz Dock", addr:"Janáčkovo nábřeží 2, Praha 5", type:"Jazz Club", desc:"Prague's finest jazz club, built directly on the Vltava riverbank. Live jazz nightly from 9pm. Book the riverside table for the best view.", price_from:15, img:"https://images.pexels.com/photos/4028878/pexels-photo-4028878.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"The whisky selection is exceptional: 80+ single malts. Arrive by 8:30pm for the best seats." },
    { name:"AghaRTA Jazz Centrum", addr:"Železná 16, Praha 1", type:"Jazz Club", desc:"Old Town's legendary jazz basement. Running since 1991, it's a Prague institution. Traditional and fusion jazz every night from 9pm.", price_from:12, img:"https://images.pexels.com/photos/4028878/pexels-photo-4028878.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"The Thursday night jam sessions are legendary. Check the website for headline acts." },
    { name:"Reduta Jazz Club", addr:"Národní 20, Praha 1", type:"Jazz Club", desc:"Prague's oldest jazz club, opened in 1958. President Clinton played here in 1994. Historic, intimate, unmissable.", price_from:14, img:"https://images.pexels.com/photos/4028878/pexels-photo-4028878.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Book online: it sells out. The Dixieland nights on Fridays are extraordinary." }
  ],
  rooftop: [
    { name:"T-Anker Rooftop Bar", addr:"nám. Republiky 8, Praha 1", type:"Rooftop Bar", desc:"360° panoramic view of Old Town from a rooftop terrace. Best sunset view in the city. Czech craft beers and creative cocktails.", price_from:12, img:"https://images.pexels.com/photos/3980364/pexels-photo-3980364.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Go at 7pm for golden hour. The Municipal House dome is directly opposite." },
    { name:"Cloud 9 Sky Bar and Lounge", addr:"Pobřežní 1, Praha 8 (Hilton)", type:"Sky Bar", desc:"Hilton's rooftop bar, sophisticated, quiet, and with arguably the best view of the Vltava from any bar in Prague.", price_from:15, img:"https://images.pexels.com/photos/3980364/pexels-photo-3980364.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Dress code applies after 9pm. The espresso martini is their signature." },
    { name:"Estrella Sky Bar", addr:"Zlatnická 12, Praha 1", type:"Rooftop Bar", desc:"Open-air rooftop with a view over Charles Bridge and Prague Castle. Fire pits in winter. One of the most romantic bars in Europe.", price_from:14, img:"https://images.pexels.com/photos/3980364/pexels-photo-3980364.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Book the VIP section for groups of 4+. The table service is excellent." }
  ],
  cocktail_bars: [
    { name:"Hemingway Bar", addr:"Karoliny Světlé 26, Praha 1", type:"Cocktail Bar", desc:"Prague's most celebrated cocktail bar. Pre-Prohibition recipes, fresh ingredients, and an atmosphere that feels genuinely 1930s. Flawless.", price_from:16, img:"https://images.pexels.com/photos/3641322/pexels-photo-3641322.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"No reservations: queue is worth it. The Hemingway Daiquiri is non-negotiable. Ask the barman about the gin collection." },
    { name:"Black Angel's Bar", addr:"Staroměstské nám. 29, Praha 1", type:"Cocktail Bar", desc:"Hidden underground bar beneath the Old Town. Gothic arches, candlelight, and some of the most creative cocktails in Central Europe. Theatrical.", price_from:14, img:"https://images.pexels.com/photos/3641322/pexels-photo-3641322.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Try the Absinthe ceremony: a genuine Czech absinthe ritual performed tableside." },
    { name:"Banker's Bar", addr:"Senovážné nám. 5, Praha 1", type:"Cocktail Bar", desc:"1920s banking hall converted into a bar of extraordinary elegance. Marble columns, brass fittings, and a cocktail menu that changes monthly.", price_from:15, img:"https://images.pexels.com/photos/3641322/pexels-photo-3641322.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"The bar food is exceptional: the wagyu sliders at midnight are remarkable." }
  ],
  shows: [
    { name:"Czech Medieval Tavern", addr:"Mostecká 21, Praha 1", type:"Dinner Show", desc:"Theatrical 5-course medieval feast with fire eaters, jesters, live music and sword fights. Unlimited mead and beer. A complete spectacle.", price:55, img:"https://images.pexels.com/photos/7919683/pexels-photo-7919683.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Book the VIP table near the stage for the best show. Vegetarian menu available on request." },
    { name:"Black Light Theatre Image", addr:"Pařížská 4, Praha 1", type:"Theatre", desc:"Prague's world-famous Black Light Theatre, an optical illusion performance unlike anything else in Europe. No language barrier. All ages.", price:28, img:"https://images.pexels.com/photos/4722577/pexels-photo-4722577.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", tip:"Sit in the centre of the stalls, not the sides. The 3D effects only work from the front." }
  ]
};

/* ── ANALYTICS DATA ──────────────────────────────────────── */
const ANALYTICS = {
  // REAL: Prague 2024 season performance data
  prague_2024: {
    label: "Prague 2024: Actual Season Data",
    type: "real",
    total_tours: 847,
    total_revenue: 52904,
    avg_rating: 4.91,
    top_tour: "Jewish Heritage",
    nationality_breakdown: [
      { country:"USA", pct:28, flag:"US" },
      { country:"UK",  pct:18, flag:"UK" },
      { country:"Germany", pct:14, flag:"DE" },
      { country:"Israel", pct:11, flag:"IL" },
      { country:"France", pct:9, flag:"FR" },
      { country:"Other",  pct:20, flag:"OTHER" }
    ],
    monthly: [
      { m:"Jan", v:38 },{ m:"Feb", v:52 },{ m:"Mar", v:89 },
      { m:"Apr", v:118 },{ m:"May", v:142 },{ m:"Jun", v:168 },
      { m:"Jul", v:195 },{ m:"Aug", v:188 },{ m:"Sep", v:145 },
      { m:"Oct", v:112 },{ m:"Nov", v:67 },{ m:"Dec", v:89 }
    ]
  },
  // PROJECTED: Czech Inn Hotels Year 1 (at 8% guest conversion)
  projected_y1: {
    label: "Year 1 Projection: Czech Inn Hotels (8% conversion)",
    type: "projected",
    bookings: 34504,
    gross_revenue: 1897720,
    commission: 474430,
    avg_ticket: 55,
    properties: [
      { name:"Grand Mark Prague (5-star)",       bookings:4120,  rev:226600,  tour:"Mucha Art Nouveau",   trend:"+18%" },
      { name:"Corinthia Prague (5-star)",        bookings:3870,  rev:212850,  tour:"Jewish Heritage",     trend:"+12%" },
      { name:"Grand Hotel International (4-star)", bookings:2980,  rev:163900,  tour:"Kafka's Prague",      trend:"+24%" },
      { name:"Hotel Voyage (4-star)",             bookings:2450,  rev:134750,  tour:"Kids Legend Quest",   trend:"+9%"  },
      { name:"Other Properties (24)",          bookings:21084, rev:1159620, tour:"Mixed",               trend:"+15%" }
    ]
  }
};
