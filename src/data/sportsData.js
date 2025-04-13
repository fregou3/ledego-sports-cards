// Sample data for sports cards
const sportsData = [
  {
    id: 2,
    name: "Michel Platini",
    profileImage: "/images/profiles/MichelPlatini/profil.jpg",
    sport: "Football",
    nationality: "France",
    birthDate: "21 juin 1955",
    description: "Michel Platini est une légende du football français. Triple Ballon d'Or (1983, 1984, 1985), il a brillé à la Juventus Turin et a mené l'équipe de France à la victoire lors de l'Euro 1984.",
    price: 180,
    forSale: true,
    events: [
      {
        id: 201,
        title: "Euro 1984",
        image: "/images/profiles/MichelPlatini/E1_1984_Euro.jpg",
        date: "1984",
        description: "Victoire de l'équipe de France à l'Euro 1984 avec 9 buts marqués par Platini, record toujours inégalé dans une phase finale.",
        price: 200,
        forSale: true,
      },
      {
        id: 202,
        title: "Coupe des Clubs Champions 1985",
        image: "/images/profiles/MichelPlatini/E2_1985_Juventus.jpg",
        date: "1985",
        description: "Victoire en Coupe des Clubs Champions (aujourd'hui Ligue des Champions) avec la Juventus Turin.",
        price: 185,
        forSale: true,
      },
      {
        id: 203,
        title: "Ballon d'Or 1983",
        image: "/images/profiles/MichelPlatini/E3_1983_BallonOr.jpg",
        date: "1983",
        description: "Premier Ballon d'Or remporté par Michel Platini, qui en gagnera trois consécutifs.",
        price: 170,
        forSale: true,
      },
      {
        id: 204,
        title: "Coupe du Monde 1982",
        image: "/images/profiles/MichelPlatini/E4_1982_CoupeDuMonde.jpg",
        date: "1982",
        description: "Demi-finale de la Coupe du Monde avec l'équipe de France, défaite mémorable contre l'Allemagne aux tirs au but.",
        price: 160,
        forSale: true,
      }
    ],
    magazines: [
      {
        id: 301,
        title: "France Football - Ballon d'Or 1983",
        image: "/images/profiles/MichelPlatini/M1_1983_FranceFootball.jpg",
        date: "1983",
        description: "Couverture de France Football pour le premier Ballon d'Or de Michel Platini",
        price: 75,
        forSale: true,
      },
      {
        id: 302,
        title: "L'Équipe Magazine - Euro 1984",
        image: "/images/profiles/MichelPlatini/M2_1984_LEquipe.jpg",
        date: "1984",
        description: "Couverture de L'Équipe Magazine célébrant la victoire à l'Euro 1984",
        price: 85,
        forSale: true,
      },
      {
        id: 303,
        title: "Onze Mondial - Juventus 1985",
        image: "/images/profiles/MichelPlatini/M3_1985_OnzeMondial.jpg",
        date: "1985",
        description: "Couverture de Onze Mondial après la victoire en Coupe des Clubs Champions",
        price: 70,
        forSale: true,
      },
      {
        id: 304,
        title: "World Soccer - Légende du Football",
        image: "/images/profiles/MichelPlatini/M4_1990_WorldSoccer.jpg",
        date: "1990",
        description: "Couverture de World Soccer consacrée à la carrière de Michel Platini",
        price: 65,
        forSale: true,
      },
      {
        id: 305,
        title: "France Football - Spécial Carrière",
        image: "/images/profiles/MichelPlatini/M5_1995_Retrospective.jpg",
        date: "1995",
        description: "Numéro spécial de France Football sur la carrière de Michel Platini",
        price: 90,
        forSale: true,
      }
    ]
  },
  {
    id: 1,
    name: "Henri Leconte",
    profileImage: "/images/profiles/HenriLeconte/profil.jpg",
    sport: "Tennis",
    nationality: "France",
    birthDate: "4 juillet 1963",
    description: "Henri Leconte est un joueur de tennis français. Il a atteint la 5e place mondiale en 1986 et a remporté la Coupe Davis en 1991.",
    price: 120,
    forSale: true,
    events: [
      {
        id: 101,
        title: "Roland-Garros 1984",
        image: "/images/profiles/HenriLeconte/P1_1984_Roland-Garros.jpg",
        date: "1984",
        description: "Demi-finaliste à Roland-Garros en 1984, Henri Leconte s'est incliné face à John McEnroe.",
        price: 85,
        forSale: true,
      },
      {
        id: 102,
        title: "Roland-Garros 1988",
        image: "/images/profiles/HenriLeconte/P2_1988_Roland-Garros.jpg",
        date: "1988",
        description: "Finaliste à Roland-Garros en 1988, Henri Leconte s'est incliné face à Mats Wilander.",
        price: 95,
        forSale: true,
      },
      {
        id: 103,
        title: "Coupe Davis 1991",
        image: "/images/profiles/HenriLeconte/P1_1991_CoupeDavis.jpg",
        date: "1991",
        description: "Victoire en Coupe Davis avec l'équipe de France contre les États-Unis à Lyon.",
        price: 150,
        forSale: true,
      }
    ],
    magazines: [
      {
        id: 201,
        title: "Tennis Magazine - Édition 1",
        image: "/images/profiles/HenriLeconte/Couverture_1.jpg",
        date: "1985",
        description: "Couverture de Tennis Magazine avec Henri Leconte",
        price: 45,
        forSale: true,
      },
      {
        id: 202,
        title: "Tennis Magazine - Édition 2",
        image: "/images/profiles/HenriLeconte/Couverture_2.jpg",
        date: "1987",
        description: "Couverture de Tennis Magazine avec Henri Leconte",
        price: 40,
        forSale: true,
      },
      {
        id: 203,
        title: "Tennis Magazine - Édition 3",
        image: "/images/profiles/HenriLeconte/Couverture_3.jpg",
        date: "1989",
        description: "Couverture de Tennis Magazine avec Henri Leconte",
        price: 42,
        forSale: true,
      },
      {
        id: 204,
        title: "Tennis Magazine - Édition 4",
        image: "/images/profiles/HenriLeconte/Couverture_4.jpg",
        date: "1991",
        description: "Couverture de Tennis Magazine après la victoire en Coupe Davis",
        price: 55,
        forSale: true,
      },
      {
        id: 205,
        title: "Tennis Magazine - Édition 5",
        image: "/images/profiles/HenriLeconte/Couverture_5.jpg",
        date: "1992",
        description: "Couverture de Tennis Magazine avec Henri Leconte",
        price: 38,
        forSale: true,
      }
    ]
  }
];

export default sportsData;
