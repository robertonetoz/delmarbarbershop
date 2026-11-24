// Everything the shop might want to edit lives here.

export const shop = {
  name: "Del Mar Barber Shop",
  tagline: "Shave & Haircut",
  phone: "956-602-0074",
  phoneHref: "tel:+19566020074",
  email: "delmarbarbershop@gmail.com",
  street: "1713 E Del Mar Blvd, Suite 3",
  cityLine: "Laredo, TX 78041",
  bookingUrl: "https://square.site/book/6JRPVT1GD12MQ/del-mar-barber-shop-laredo-tx",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Del+Mar+Barber+Shop%2C+1713+E+Del+Mar+Blvd+Ste+3%2C+Laredo%2C+TX+78041",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Del%20Mar%20Barber%20Shop%2C%201713%20E%20Del%20Mar%20Blvd%20Ste%203%2C%20Laredo%2C%20TX%2078041&z=15&hl=en&output=embed",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Del+Mar+Barber+Shop+Laredo+TX",
  instagram: "https://www.instagram.com/delmarbarbershop/",
  instagramHandle: "@delmarbarbershop",
  facebook: "https://www.facebook.com/delmarbarbershop",
  rating: { score: 4.4, count: 75 },
  timeZone: "America/Chicago",
} as const;

export type Hours = { day: string; short: string; open?: string; close?: string };

// Index matches Date#getDay(): 0 = Sunday.
export const hours: Hours[] = [
  { day: "Sunday", short: "Sun" },
  { day: "Monday", short: "Mon", open: "12:00", close: "20:00" },
  { day: "Tuesday", short: "Tue", open: "12:00", close: "20:00" },
  { day: "Wednesday", short: "Wed", open: "10:00", close: "20:00" },
  { day: "Thursday", short: "Thu", open: "10:00", close: "20:00" },
  { day: "Friday", short: "Fri", open: "10:00", close: "20:00" },
  { day: "Saturday", short: "Sat", open: "09:00", close: "18:00" },
];

export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}

export const services = [
  {
    name: "Men’s haircut",
    price: 25,
    note: "Finished with a hot-lather neck shave. Hair wash not included.",
  },
  {
    name: "Beard trim & line-up",
    price: 15,
    note: "Shaped and trimmed, edged with a straight razor.",
  },
  {
    name: "Full shave, face or head",
    price: 20,
    note: "The classic straight-razor shave with a hot towel, for the closest shave you can get.",
  },
  {
    name: "Kids’ haircut",
    price: 20,
    note: "Ages 10 and under. Hair wash not included.",
  },
];

export const extras = ["Eyebrow, nose & ear waxing", "Hair wash", "Face treatment", "Cuts for women"];

export type WorkItem = { src: string; alt: string; w: number; h: number; post?: string };

export const work: WorkItem[] = [
  { src: "/images/work/beard-skin-fade.jpg", alt: "Skin fade with a full, sculpted beard", w: 512, h: 640, post: "https://www.instagram.com/delmarbarbershop/p/DDH5ZYUJHbg/" },
  { src: "/images/work/pompadour-profile.jpg", alt: "Slicked-back pompadour with a tapered neckline", w: 640, h: 640, post: "https://www.instagram.com/delmarbarbershop/p/DK9-D7iBX7v/" },
  { src: "/images/work/hot-towel-shave.jpg", alt: "Hot towel during a straight-razor shave", w: 720, h: 864 },
  { src: "/images/work/beard-fade-profile.jpg", alt: "Hard part, high fade and beard, side profile", w: 360, h: 520, post: "https://www.instagram.com/delmarbarbershop/reel/DDLjhC0sAuQ/" },
  { src: "/images/work/textured-top.jpg", alt: "Textured curly top with a clean taper", w: 720, h: 864 },
  { src: "/images/work/kids-crop.jpg", alt: "Kids’ crop with a soft fade", w: 720, h: 864 },
  { src: "/images/work/slick-back.jpg", alt: "Volume slick-back, finished and styled", w: 361, h: 545, post: "https://www.instagram.com/delmarbarbershop/reel/DK9_I4mvHMc/" },
  { src: "/images/work/high-and-tight.jpg", alt: "High and tight, rear view", w: 360, h: 480, post: "https://www.instagram.com/delmarbarbershop/reel/DDLjDbfM0O2/" },
  { src: "/images/work/bald-fade.jpg", alt: "Bald fade with a short top", w: 720, h: 864 },
  { src: "/images/work/pompadour-side.jpg", alt: "Pompadour, side view in the shop", w: 360, h: 480, post: "https://www.instagram.com/delmarbarbershop/reel/DPwCAYODznH/" },
  { src: "/images/work/kids-side-part.jpg", alt: "Kids’ side part with a tapered side", w: 900, h: 599 },
];

export const reviews = [
  {
    name: "Luis P.",
    when: "Google review",
    text: "Jorge is my go-to barber, and his precision and professionalism are always spot-on. That said, the whole team here is talented — no matter who’s cutting, you’re in good hands.",
  },
  {
    name: "JT B.",
    when: "Local Guide, Google review",
    text: "Jorge is extremely professional and really takes his time and wants to get it right for you. Establishment is extremely clean and inviting. Will definitely be back.",
  },
  {
    name: "Rob B.",
    when: "Google review",
    text: "Probably one of the best haircuts I’ve ever gotten. It was late in the evening when I arrived. They were nice enough to get me in for a haircut and a shave.",
  },
  {
    name: "Noble W.",
    when: "Local Guide, Google review",
    text: "I loved that they took their time with my cut. They know how to fade well! I came to you guys for the very first time and I was treated as a returning customer.",
  },
  {
    name: "Antonio",
    when: "Google review",
    text: "Sandra did an amazing job. Very professional and pays attention to detail. I highly recommend it and will come here again.",
  },
  {
    name: "Nathan J.",
    when: "Google review",
    text: "First time coming here and honestly I have no complaints! Staff were amazing and the haircut came out great. Definitely my go-to in Laredo. Thank you Ricky.",
  },
];
