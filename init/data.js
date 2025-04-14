const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description:
      "Perfect getaway nestled in the mountains, surrounded by pine trees and serenity.",
    image: {
      filename: "cabin-mountain.jpg",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000",
    },
    price: 150,
    location: "Manali",
    country: "India",
    latitude: "32.2396",
    longitude: "77.1887",
    host: "Priya Sharma",
    ratings: [],
  },
  {
    title: "Urban Apartment in City Center",
    description:
      "Modern apartment with city views and quick access to public transportation.",
    image: {
      filename: "urban-apartment.jpg",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000",
    },
    price: 200,
    location: "Bangalore",
    country: "India",
    latitude: "12.9716",
    longitude: "77.5946",
    host: "Rahul Mehta",
    ratings: [],
  },
  
  {
    title: 'Luxury Houseboat',
    description: 'Cruise in luxury on a traditional houseboat.',
    image: {
      filename: 'houseboat.jpg',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
    },
    price: 500,
    location: 'Alleppey',
    country: 'India',
    latitude: 9.4981,
    longitude: 76.3388,
    host: 'Lakshmi Nair',
    ratings: []
  },
  
  {
    title: 'Urban Apartment in City Center',
    description: 'Modern apartment located in the heart of the city.',
    image: {
      filename: 'urban-apartment.jpg',
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914'
    },
    price: 200,
    location: 'Mumbai',
    country: 'India',
    latitude: 19.0760,
    longitude: 72.8777,
    host: 'Priya Desai',
    ratings: []
  },
  {
    title: 'Beachside Bungalow',
    description: 'Relax in a cozy bungalow steps away from the beach.',
    image: {
      filename: 'beachside-bungalow.jpg',
      url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
    },
    price: 400,
    location: 'Kochi',
    country: 'India',
    latitude: 9.9312,
    longitude: 76.2673,
    host: 'Rahul Menon',
    ratings: []
  },
  {
    title: 'Heritage Home Stay',
    description: 'Experience traditional living in a heritage home.',
    image: {
      filename: 'heritage-home.jpg',
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
    },
    price: 250,
    location: 'Jaipur',
    country: 'India',
    latitude: 26.9124,
    longitude: 75.7873,
    host: 'Meera Singh',
    ratings: []
  },
  {
    title: 'Lakeview Cottage',
    description: 'Charming cottage with stunning lake views.',
    image: {
      filename: 'lakeview-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
    },
    price: 300,
    location: 'Nainital',
    country: 'India',
    latitude: 29.3919,
    longitude: 79.4542,
    host: 'Karan Joshi',
    ratings: []
  },
  {
    title: 'Desert Camp Experience',
    description: 'Unique stay in a desert camp under the stars.',
    image: {
      filename: 'desert-camp.jpg',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    price: 180,
    location: 'Jaisalmer',
    country: 'India',
    latitude: 26.9157,
    longitude: 70.9083,
    host: 'Anita Rathore',
    ratings: []
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    latitude: "34.0259",
    longitude: "-118.7798",
    host: "host123",
    ratings: []
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    latitude: "40.7128",
    longitude: "-74.0060",
    host: "host456",
    ratings: []
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    latitude: "39.1911",
    longitude: "-106.8175",
    host: "host789",
    ratings: []
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    latitude: "43.7696",
    longitude: "11.2558",
    host: "host321",
    ratings: []
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    latitude: "45.5051",
    longitude: "-122.6750",
    host: "host654",
    ratings: []
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    latitude: "21.1619",
    longitude: "-86.8515",
    host: "host111",
    ratings: []
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    latitude: "39.0968",
    longitude: "-120.0324",
    host: "host222",
    ratings: []
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    latitude: "34.0522",
    longitude: "-118.2437",
    host: "host333",
    ratings: []
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    latitude: "46.0964",
    longitude: "7.2276",
    host: "host444",
    ratings: []
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    latitude: "-2.3333",
    longitude: "34.8333",
    host: "host555",
    ratings: []
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    latitude: "52.3676",
    longitude: "4.9041",
    host: "host666",
    ratings: []
  },
  {
    title: "Rustic Desert Camp",
    description:
      "Feel the desert breeze and enjoy starry nights in this unique camp experience.",
    image: {
      filename: "desert-camp.jpg",
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=2000",
    },
    price: 90,
    location: "Jaisalmer",
    country: "India",
    latitude: "26.9157",
    longitude: "70.9083",
    host: "Imran Khan",
    ratings: [],
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    latitude: "-17.7134",
    longitude: "178.0650",
    host: "host777",
    ratings: []
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    latitude: "51.8330",
    longitude: "-1.8433",
    host: "host888",
    ratings: []
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    latitude: "42.3601",
    longitude: "-71.0589",
    host: "host999",
    ratings: []
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    latitude: "-8.3405",
    longitude: "115.0920",
    host: "host1000",
    ratings: []
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    latitude: "51.1784",
    longitude: "-115.5708",
    host: "host1001",
    ratings: []
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    latitude: "25.7617",
    longitude: "-80.1918",
    host: "host1002",
    ratings: []
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    latitude: "7.8804",
    longitude: "98.3923",
    host: "host1003",
    ratings: []
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    latitude: "57.1200",
    longitude: "-4.7100",
    host: "host1004",
    ratings: []
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    latitude: "25.2048",
    longitude: "55.2708",
    host: "host1005",
    ratings: []
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    latitude: "46.8797",
    longitude: "-110.3626",
    host: "host1006",
    ratings: []
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    latitude: "37.4467",
    longitude: "25.3289",
    host: "host1007",
    ratings: []
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    latitude: "9.7489",
    longitude: "-83.7534",
    host: "host1008",
    ratings: []
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    latitude: "32.7765",
    longitude: "-79.9311",
    host: "host1009",
    ratings: []
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    latitude: "35.6895",
    longitude: "139.6917",
    host: "host1010",
    ratings: []
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    latitude: "43.1939",
    longitude: "-71.5724",
    host: "host1011",
    ratings: []
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    latitude: "3.2028",
    longitude: "73.2207",
    host: "host1012",
    ratings: []
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    latitude: "39.1911",
    longitude: "-106.8175",
    host: "host1013",
    ratings: []
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    latitude: "9.7489",
    longitude: "-83.7534",
    host: "host1014",
    ratings: []
  },
  {
    title: 'Mountain Cabin Retreat',
    description: 'Escape to a serene cabin nestled in the mountains.',
    image: {
      filename: 'mountain-cabin.jpg',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    price: 350,
    location: 'Manali',
    country: 'India',
    latitude: 32.2396,
    longitude: 77.1887,
    host: 'Aarav Sharma',
    ratings: []
  },
];

module.exports = { sampleListings };