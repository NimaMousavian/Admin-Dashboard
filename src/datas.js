const userAnalyticsData = [
  { month: "Feb", value: 50 },
  { month: "Mar", value: 75 },
  { month: "Apr", value: 70 },
  { month: "May", value: 45 },
  { month: "Jun", value: 40 },
  { month: "Jul", value: 60 },
  { month: "Agu", value: 55 },
  { month: "Sep", value: 65 },
  { month: "Oct", value: 30 },
  { month: "Nov", value: 70 },
  { month: "Dec", value: 50 },
];

const newJoinMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    job: "Software Engineer",
    imageUrl: "/images/user_profiles/alice.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    job: "Product Manager",
    imageUrl: "/images/user_profiles/bob.jpg",
  },
  {
    id: 3,
    name: "Charlie Brown",
    job: "UX Designer",
    imageUrl: "/images/user_profiles/charlie.jpg",
  },
  {
    id: 4,
    name: "Diana Prince",
    job: "Data Scientist",
    imageUrl: "/images/user_profiles/diana.jpg",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    job: "DevOps Engineer",
    imageUrl: "/images/user_profiles/ethan.jpg",
  },
];

const transactions = [
  {
    id: 1,
    name: "Alice Johnson",
    imageUrl: "/images/user_profiles/alice.jpg",
    date: "2024-06-15",
    amount: 250.75,
    status: "Completed",
  },
  {
    id: 2,
    name: "Bob Smith",
    imageUrl: "/images/user_profiles/bob.jpg",
    date: "2024-06-16",
    amount: 120.0,
    status: "Pending",
  },
  {
    id: 3,
    name: "Charlie Brown",
    imageUrl: "/images/user_profiles/charlie.jpg",
    date: "2024-06-17",
    amount: 500.5,
    status: "Completed",
  },
  {
    id: 4,
    name: "Diana Prince",
    imageUrl: "/images/user_profiles/diana.jpg",
    date: "2024-06-18",
    amount: 75.0,
    status: "Failed",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    imageUrl: "/images/user_profiles/ethan.jpg",
    date: "2024-06-19",
    amount: 300.0,
    status: "Completed",
  },
];

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    imageUrl: "/images/user_profiles/alice.jpg",
    status: "active",
    transaction: {
      date: "2024-06-15",
      amount: 250.75,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    imageUrl: "/images/user_profiles/bob.jpg",
    status: "not-active",
    transaction: {
      date: "2024-06-16",
      amount: 120.0,
    },
  },
  {
    id: 3,
    name: "Charlie Brown",
    imageUrl: "/images/user_profiles/charlie.jpg",
    status: "active",
    transaction: {
      date: "2024-06-17",
      amount: 500.5,
    },
  },
  {
    id: 4,
    name: "Diana Prince",
    imageUrl: "/images/user_profiles/diana.jpg",
    status: "active",
    transaction: {
      date: "2024-06-18",
      amount: 75.0,
    },
  },
  {
    id: 5,
    name: "Ethan Hunt",
    imageUrl: "/images/user_profiles/ethan.jpg",
    status: "not-active",
    transaction: {
      date: "2024-06-19",
      amount: 300.0,
    },
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    imageUrl: "/images/user_profiles/fiona.jpg",
    status: "active",
    transaction: {
      date: "2024-06-20",
      amount: 200.0,
    },
  },
  {
    id: 7,
    name: "George Weasley",
    imageUrl: "/images/user_profiles/george.jpg",
    status: "not-active",
    transaction: {
      date: "2024-06-21",
      amount: 150.75,
    },
  },
  {
    id: 8,
    name: "Hermione Granger",
    imageUrl: "/images/user_profiles/hermione.jpg",
    status: "active",
    transaction: {
      date: "2024-06-22",
      amount: 450.0,
    },
  },
  {
    id: 9,
    name: "Ian Malcolm",
    imageUrl: "/images/user_profiles/ian.jpg",
    status: "active",
    transaction: {
      date: "2024-06-23",
      amount: 320.25,
    },
  },
  {
    id: 10,
    name: "Jack Sparrow",
    imageUrl: "/images/user_profiles/jack.jpg",
    status: "not-active",
    transaction: {
      date: "2024-06-24",
      amount: 600.0,
    },
  },
];

const products = [
  {
    id: 1,
    model: "Dell XPS 13",
    imageUrl: "/images/products/dell-xps-13.jpg",
    price: 999.99,
  },
  {
    id: 2,
    model: "MacBook Air",
    imageUrl: "/images/products/macbook-air.jpg",
    price: 1199.99,
  },
  {
    id: 3,
    model: "HP Spectre x360",
    imageUrl: "/images/products/hp-spectre-x360.jpg",
    price: 1299.99,
  },
  {
    id: 4,
    model: "Lenovo ThinkPad X1 Carbon",
    imageUrl: "/images/products/lenovo-thinkpad-x1.jpg",
    price: 1399.99,
  },
  {
    id: 5,
    model: "Asus ZenBook 14",
    imageUrl: "/images/products/asus-zenbook-14.jpg",
    price: 899.99,
  },
  {
    id: 6,
    model: "Acer Swift 3",
    imageUrl: "/images/products/acer-swift-3.jpg",
    price: 799.99,
  },
  {
    id: 7,
    model: "Microsoft Surface Laptop 4",
    imageUrl: "/images/products/surface-laptop-4.jpg",
    price: 1499.99,
  },
  {
    id: 8,
    model: "Razer Blade Stealth 13",
    imageUrl: "/images/products/razer-blade-stealth-13.jpg",
    price: 1599.99,
  },
  {
    id: 9,
    model: "Samsung Galaxy Book Pro",
    imageUrl: "/images/products/galaxy-book-pro.jpg",
    price: 1199.99,
  },
  {
    id: 10,
    model: "LG Gram 17",
    imageUrl: "/images/products/lg-gram-17.jpg",
    price: 1699.99,
  },
];

export { userAnalyticsData, newJoinMembers, transactions, users, products };
