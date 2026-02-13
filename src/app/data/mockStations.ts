
export interface Station {
  id: string;
  name: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  lat: number;
  lng: number;
  fuelTypes: string[];
  services: string[];
  openingHours: string[];
  phone: string;
}

export const mockStations: Station[] = [
  // VIC - Melbourne Inner (Cluster of ~10)
  {
    id: "1",
    name: "Ampol Foodary Abbotsford",
    address: "28-40 Hoddle Street",
    suburb: "Abbotsford",
    state: "VIC",
    postcode: "3067",
    lat: -37.8080,
    lng: 144.9910,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel", "E10"],
    services: ["Foodary", "Coffee", "Toilets", "ATM", "Trailer Hire"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "03 9417 1234"
  },
  {
    id: "2",
    name: "Ampol Foodary Richmond",
    address: "600 Victoria Street",
    suburb: "Richmond",
    state: "VIC",
    postcode: "3121",
    lat: -37.8120,
    lng: 145.0100,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "03 9428 5678"
  },
  {
    id: "3",
    name: "Ampol Foodary Collingwood",
    address: "150 Johnston Street",
    suburb: "Collingwood",
    state: "VIC",
    postcode: "3066",
    lat: -37.7990,
    lng: 144.9850,
    fuelTypes: ["Unleaded 91", "Premium 98", "Diesel"],
    services: ["Foodary", "Car Wash"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "03 9419 2345"
  },
  {
    id: "4",
    name: "Ampol Foodary Fitzroy",
    address: "95 Alexandra Parade",
    suburb: "Fitzroy",
    state: "VIC",
    postcode: "3065",
    lat: -37.7950,
    lng: 144.9780,
    fuelTypes: ["Unleaded 91", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 6am - 11pm"],
    phone: "03 9416 3456"
  },
  {
    id: "5",
    name: "Ampol Foodary South Melbourne",
    address: "200 Kings Way",
    suburb: "South Melbourne",
    state: "VIC",
    postcode: "3205",
    lat: -37.8330,
    lng: 144.9600,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "03 9690 4567"
  },
  {
    id: "6",
    name: "Ampol Foodary Docklands",
    address: "100 Harbour Esplanade",
    suburb: "Docklands",
    state: "VIC",
    postcode: "3008",
    lat: -37.8180,
    lng: 144.9450,
    fuelTypes: ["Unleaded 91", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 5am - 12am"],
    phone: "03 9600 5678"
  },
  {
    id: "7",
    name: "Ampol Foodary Carlton",
    address: "350 Lygon Street",
    suburb: "Carlton",
    state: "VIC",
    postcode: "3053",
    lat: -37.7980,
    lng: 144.9680,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "03 9347 6789"
  },
  {
    id: "8",
    name: "Ampol Foodary North Melbourne",
    address: "500 Spencer Street",
    suburb: "North Melbourne",
    state: "VIC",
    postcode: "3051",
    lat: -37.8090,
    lng: 144.9500,
    fuelTypes: ["Unleaded 91", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee", "Car Wash"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "03 9329 7890"
  },
  {
    id: "9",
    name: "Ampol Foodary St Kilda",
    address: "150 Barkly Street",
    suburb: "St Kilda",
    state: "VIC",
    postcode: "3182",
    lat: -37.8680,
    lng: 144.9800,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "03 9534 8901"
  },
  {
    id: "10",
    name: "Ampol Foodary Brunswick",
    address: "800 Sydney Road",
    suburb: "Brunswick",
    state: "VIC",
    postcode: "3056",
    lat: -37.7650,
    lng: 144.9620,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "Car Wash"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "03 9387 9012"
  },
  
  // NSW - Sydney (Adding more to create a cluster)
  {
    id: "11",
    name: "Ampol Foodary Sydney Airport",
    address: "100 Ross Smith Avenue",
    suburb: "Mascot",
    state: "NSW",
    postcode: "2020",
    lat: -33.9399,
    lng: 151.1753,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel"],
    services: ["Foodary", "Coffee", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 9667 1234"
  },
  {
    id: "13",
    name: "Ampol Foodary Bondi Beach",
    address: "150 Campbell Parade",
    suburb: "Bondi Beach",
    state: "NSW",
    postcode: "2026",
    lat: -33.8915,
    lng: 151.2767,
    fuelTypes: ["Unleaded 91", "Premium 95"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "02 9130 1234"
  },
  {
    id: "14",
    name: "Ampol Foodary North Sydney",
    address: "200 Miller Street",
    suburb: "North Sydney",
    state: "NSW",
    postcode: "2060",
    lat: -33.8390,
    lng: 151.2072,
    fuelTypes: ["Unleaded 91", "Premium 98", "Diesel"],
    services: ["Foodary", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 9955 6789"
  },
  {
    id: "15",
    name: "Ampol Foodary Parramatta",
    address: "300 Church Street",
    suburb: "Parramatta",
    state: "NSW",
    postcode: "2150",
    lat: -33.8150,
    lng: 151.0011,
    fuelTypes: ["Unleaded 91", "Diesel", "E10"],
    services: ["Foodary", "Car Wash"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 9635 4321"
  },

  // QLD - Brisbane (Adding more)
  {
    id: "12",
    name: "Ampol Foodary Brisbane City",
    address: "200 Ann Street",
    suburb: "Brisbane City",
    state: "QLD",
    postcode: "4000",
    lat: -27.4698,
    lng: 153.0251,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "07 3221 2345"
  },
  {
    id: "16",
    name: "Ampol Foodary Fortitude Valley",
    address: "100 Wickham Street",
    suburb: "Fortitude Valley",
    state: "QLD",
    postcode: "4006",
    lat: -27.4580,
    lng: 153.0330,
    fuelTypes: ["Unleaded 91", "Premium 98"],
    services: ["Foodary", "Coffee", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "07 3252 6789"
  },
  {
    id: "17",
    name: "Ampol Foodary South Brisbane",
    address: "50 Melbourne Street",
    suburb: "South Brisbane",
    state: "QLD",
    postcode: "4101",
    lat: -27.4760,
    lng: 153.0150,
    fuelTypes: ["Unleaded 91", "Diesel"],
    services: ["Foodary"],
    openingHours: ["Mon-Sun: 5am - 11pm"],
    phone: "07 3844 1234"
  },

  // SA - Adelaide
  {
    id: "18",
    name: "Ampol Foodary Adelaide CBD",
    address: "80 Currie Street",
    suburb: "Adelaide",
    state: "SA",
    postcode: "5000",
    lat: -34.9250,
    lng: 138.5950,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "08 8231 4567"
  },
  {
    id: "19",
    name: "Ampol Foodary North Adelaide",
    address: "120 O'Connell Street",
    suburb: "North Adelaide",
    state: "SA",
    postcode: "5006",
    lat: -34.9080,
    lng: 138.5960,
    fuelTypes: ["Unleaded 91", "Premium 98"],
    services: ["Foodary", "Car Wash"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "08 8267 8901"
  },

  // WA - Perth
  {
    id: "20",
    name: "Ampol Foodary Perth City",
    address: "100 William Street",
    suburb: "Perth",
    state: "WA",
    postcode: "6000",
    lat: -31.9505,
    lng: 115.8605,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "ATM"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "08 9221 2345"
  },
  {
    id: "21",
    name: "Ampol Foodary East Perth",
    address: "50 Adelaide Terrace",
    suburb: "East Perth",
    state: "WA",
    postcode: "6004",
    lat: -31.9600,
    lng: 115.8800,
    fuelTypes: ["Unleaded 91", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 5am - 11pm"],
    phone: "08 9225 6789"
  },
  {
    id: "22",
    name: "Ampol Foodary Fremantle",
    address: "20 Queen Victoria Street",
    suburb: "Fremantle",
    state: "WA",
    postcode: "6160",
    lat: -32.0500,
    lng: 115.7500,
    fuelTypes: ["Unleaded 91", "Premium 95", "Premium 98", "Diesel"],
    services: ["Foodary", "Car Wash"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "08 9335 4321"
  },

  // ACT - Canberra
  {
    id: "23",
    name: "Ampol Foodary Braddon",
    address: "50 Lonsdale Street",
    suburb: "Braddon",
    state: "ACT",
    postcode: "2612",
    lat: -35.2750,
    lng: 149.1330,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "02 6247 1234"
  },

  // TAS - Hobart
  {
    id: "24",
    name: "Ampol Foodary Hobart CBD",
    address: "100 Liverpool Street",
    suburb: "Hobart",
    state: "TAS",
    postcode: "7000",
    lat: -42.8821,
    lng: 147.3272,
    fuelTypes: ["Unleaded 91", "Premium 95", "Diesel"],
    services: ["Foodary", "ATM"],
    openingHours: ["Mon-Sun: 6am - 10pm"],
    phone: "03 6234 5678"
  },

  // NT - Darwin
  {
    id: "25",
    name: "Ampol Foodary Darwin City",
    address: "50 Smith Street",
    suburb: "Darwin",
    state: "NT",
    postcode: "0800",
    lat: -12.4634,
    lng: 130.8456,
    fuelTypes: ["Unleaded 91", "Diesel"],
    services: ["Foodary", "Coffee"],
    openingHours: ["Mon-Sun: 24 Hours"],
    phone: "08 8941 2345"
  }
];
