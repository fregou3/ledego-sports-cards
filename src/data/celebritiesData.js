// Sample data for celebrities cards
const celebritiesData = [
  {
    id: 1,
    name: "Michel Jean",
    profileImage: "/images/profiles/PierreGagnaire/profil.png",
    profession: "Chef cuisinier",
    nationality: "France",
    birthDate: "9 avril 1950",
    description: "Michel Jean est un chef cuisinier français trois étoiles au Guide Michelin. Il est reconnu pour sa cuisine créative et innovante qui repousse les limites de la gastronomie.",
    price: 40,
    forSale: true,
    events: [
      {
        id: 101,
        title: "Ouverture restaurant Paris",
        image: "/images/profiles/PierreGagnaire/restaurant_paris.png",
        date: "1996",
        description: "Ouverture de son restaurant éponyme à Paris, qui a obtenu trois étoiles au Guide Michelin en seulement deux ans.",
        price: 20,
        forSale: true,
      }
    ],
    magazines: [
      {
        id: 101,
        title: "Le Chef 2010",
        image: "/images/profiles/PierreGagnaire/le_chef_2010.jpg",
        date: "2010",
        description: "Couverture du magazine Le Chef consacrée à Michel Jean et sa vision révolutionnaire de la cuisine française contemporaine.",
        price: 19,
        forSale: true,
      }
    ]
  }
];

export default celebritiesData;
