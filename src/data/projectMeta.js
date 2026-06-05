export const PROJECT_META = [
  {
    id: 1,
    slug: "wargakita",
    title: "Warga Kita",
    category: "Mobile Community Application",
    color: "bg-lime-400",
    img: "/dashboard-wargakita.png",
  },
  {
    id: 2,
    slug: "villanakey",
    title: "VillaNaKey",
    category: "Mobile Booking Application",
    color: "bg-purple-400",
    img: "/dashboard-villanakey.png",
  },
  {
    id: 3,
    slug: "kalorin-ai-testing",
    title: "Kalorin AI Testing (E2E)",
    category: "E2E Testing (Manual & Automation)",
    color: "bg-orange-400",
    img: "/dashboard-kalorinai.png",
  },
  {
    id: 4,
    slug: "fake-rest-api-books-testing",
    title: "Fake REST API - Books Testing",
    category: "API Testing",
    color: "bg-blue-400",
    img: "/dashboard-fakerestapi.png",
  },
  {
    id: 5,
    slug: "booking-com-automation",
    title: "Booking.com Selenium Automation Testing",
    category: "Test Automation",
    color: "bg-pink-400",
    img: "/dashboard-bookingcom.png",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
