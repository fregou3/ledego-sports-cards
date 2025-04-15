// Sample data for artists cards
const artistsData = [
  {
    id: 1,
    name: "Bob Sinclar",
    profileImage: "/images/profiles/BobSinclar/profil.jpg",
    art: "Musique",
    nationality: "France",
    birthDate: "10 mai 1969",
    description: "Bob Sinclar est un DJ et producteur de musique électronique français. Il est connu pour ses tubes comme 'Love Generation' et 'World, Hold On'.",
    price: 180,
    forSale: true,
    events: [
      {
        id: 101,
        title: "Tournée mondiale 2012",
        image: "/images/profiles/BobSinclar/tournee_2012.jpg",
        date: "2012",
        description: "Tournée mondiale de Bob Sinclar qui a marqué l'apogée de sa carrière avec des concerts dans plus de 30 pays.",
        price: 120,
        forSale: true,
      }
    ],
    magazines: [
      {
        id: 101,
        title: "DJ Mag 2008",
        image: "/images/profiles/BobSinclar/dj_mag_2008.jpg",
        date: "2008",
        description: "Couverture du magazine DJ Mag avec Bob Sinclar classé parmi les meilleurs DJs mondiaux.",
        price: 90,
        forSale: true,
      }
    ]
  }
];

export default artistsData;
