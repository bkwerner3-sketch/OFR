export interface Product {
  slug: string;
  name: string;
  category: "shirt" | "shorts" | "set";
  gender: "men" | "women" | "unisex";
  price: number;
  currency: "usd";
  stripePaymentLink: string;
  description: string;
  materials: string;
  careInstructions: string;
  sizes: string[];
  images: string[];
  designInspiration: string;
  isFeatured: boolean;
  setShirtSlug?: string;
  setShortsSlug?: string;
  exhibit?: string;
  fabric?: string;
}

export const products: Product[] = [
  {
    slug: "whale-shark-chambray-shirt",
    name: "Whale Shark Chambray Shirt",
    category: "shirt",
    gender: "men",
    price: 195,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "A lightweight chambray camp shirt featuring an original print inspired by the constellation of spots and stripes that mark the whale shark. The relaxed camp collar and straight hem make it effortless to wear — buttoned up for dinner or open over a tee on the boat. Cut from premium cotton chambray that softens with every wear.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/whale-shark-chambray-shirt.png"],
    designInspiration:
      "The star-like spotting pattern of the whale shark — the ocean's largest fish and gentlest giant.",
    isFeatured: true,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "whale-shark-chambray-shorts",
    name: "Whale Shark Chambray Shorts",
    category: "shorts",
    gender: "men",
    price: 125,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "Matching chambray shorts to the Whale Shark shirt, carrying the same original spotted print. Mid-length with an elasticated waist and drawcord for an adjustable, comfortable fit. Side pockets and a single back pocket. The chambray has a soft hand feel that moves with you.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/whale-shark-chambray-shirt.png"],
    designInspiration:
      "The star-like spotting pattern of the whale shark — the ocean's largest fish and gentlest giant.",
    isFeatured: false,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "wobbegong-shark-chambray-shirt",
    name: "Wobbegong Shark Chambray Shirt",
    category: "shirt",
    gender: "men",
    price: 195,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "Our Wobbegong Shark camp shirt draws from one of the reef's most ornate masters of disguise. The chambray carries an intricate, maze-like print that mimics the wobbegong's complex camouflage — a pattern that rewards a second look. Camp collar, relaxed fit, and a front chest pocket.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/wobbegong-shark-chambray-shirt.png"],
    designInspiration:
      "The ornate, carpet-like camouflage of the wobbegong shark, hidden in plain sight on the reef floor.",
    isFeatured: true,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "wobbegong-shark-chambray-shorts",
    name: "Wobbegong Shark Chambray Shorts",
    category: "shorts",
    gender: "men",
    price: 125,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The matching shorts to the Wobbegong Shark shirt — same intricate chambray print, cut for comfort. Mid-length with an elasticated waist, internal drawcord, and generous pockets. The complex pattern makes these shorts a conversation piece wherever the tide takes you.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/wobbegong-shark-chambray-shirt.png"],
    designInspiration:
      "The ornate, carpet-like camouflage of the wobbegong shark, hidden in plain sight on the reef floor.",
    isFeatured: false,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "leopard-shark-chambray-shirt",
    name: "Leopard Shark Chambray Shirt",
    category: "shirt",
    gender: "men",
    price: 195,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "Sleek and understated, the Leopard Shark camp shirt features a refined spotted-and-banded print inspired by the markings of its namesake. The chambray fabric has a subtle luster that catches coastal light. Finished with a notched camp collar and mother-of-pearl buttons.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/leopard-shark-chambray-shirt.png"],
    designInspiration:
      "The elegant saddle markings and spots of the leopard shark, gliding through shallow coastal waters.",
    isFeatured: true,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "leopard-shark-chambray-shorts",
    name: "Leopard Shark Chambray Shorts",
    category: "shorts",
    gender: "men",
    price: 125,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The Leopard Shark chambray shorts complete the set. Same premium cotton chambray with the distinctive spotted print, tailored to a relaxed mid-length fit. Elasticated waistband with drawcord, side pockets, and a back patch pocket. Pairs perfectly with the matching shirt or a plain linen tee.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/leopard-shark-chambray-shirt.png"],
    designInspiration:
      "The elegant saddle markings and spots of the leopard shark, gliding through shallow coastal waters.",
    isFeatured: false,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "jaguar-crochet-shirt",
    name: "Jaguar Crochet Shirt",
    category: "shirt",
    gender: "men",
    price: 195,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The Jaguar Crochet Shirt is our most ambitious piece — an open-stitch crochet camp shirt whose pattern evokes the rosette markings of a jaguar's coat. Hand-crocheted from 100% cotton, each shirt takes an artisan over 40 hours to complete. The result is a wearable work of art: breathable, textural, and unmistakably OFR.",
    materials: "100% Cotton Crochet",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/jaguar-crochet-shirt.png"],
    designInspiration:
      "The rosette patterns of the jaguar — the Americas' most powerful big cat — translated into crochet stitchwork.",
    isFeatured: true,
    exhibit: "Savanna",
    fabric: "Crochet",
  },
  {
    slug: "jaguar-crochet-shorts",
    name: "Jaguar Crochet Shorts",
    category: "shorts",
    gender: "men",
    price: 125,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The Jaguar Crochet Shorts pair with the matching shirt to create a full crochet ensemble. The same hand-crocheted rosette pattern flows across these relaxed-fit shorts, with an elasticated waistband and cotton drawcord. Lined through the seat for comfort. Each pair takes over 30 hours to produce.",
    materials: "100% Cotton Crochet",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/jaguar-crochet-shorts.png"],
    designInspiration:
      "The rosette patterns of the jaguar — the Americas' most powerful big cat — translated into crochet stitchwork.",
    isFeatured: false,
    exhibit: "Savanna",
    fabric: "Crochet",
  },
  {
    slug: "whale-shark-chambray-set",
    name: "Whale Shark Chambray Set",
    category: "set",
    gender: "men",
    price: 299,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The complete Whale Shark Chambray outfit — camp shirt and matching shorts in our original whale shark spot-and-stripe print. Save $21 versus buying each piece separately. The shirt features a relaxed camp collar and straight hem; the shorts have an elasticated waist with drawcord. Both pieces are cut from the same premium 100% cotton chambray that softens with every wear. Sizing is per individual piece — select your usual size for each.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/whale-shark-chambray-shirt.png", "/whale-shark-chambray-shirt.png"],
    setShirtSlug: "whale-shark-chambray-shirt",
    setShortsSlug: "whale-shark-chambray-shorts",
    designInspiration:
      "The star-like spotting pattern of the whale shark — the ocean's largest fish and gentlest giant. Complete the look with the matching set.",
    isFeatured: true,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "wobbegong-shark-chambray-set",
    name: "Wobbegong Shark Chambray Set",
    category: "set",
    gender: "men",
    price: 299,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The full Wobbegong Shark Chambray set — camp shirt and matching shorts in our intricate maze-like camouflage print. Save $21 versus buying separately. The shirt has a relaxed camp collar and chest pocket; the shorts feature an elasticated waist with drawcord and generous pockets. Premium 100% cotton chambray throughout. Sizing is per individual piece.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/wobbegong-shark-chambray-shirt.png", "/wobbegong-shark-chambray-shorts.png"],
    setShirtSlug: "wobbegong-shark-chambray-shirt",
    setShortsSlug: "wobbegong-shark-chambray-shorts",
    designInspiration:
      "The ornate, carpet-like camouflage of the wobbegong shark, hidden in plain sight on the reef floor. The complete set for maximum impact.",
    isFeatured: true,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "leopard-shark-chambray-set",
    name: "Leopard Shark Chambray Set",
    category: "set",
    gender: "men",
    price: 299,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The Leopard Shark Chambray set pairs our sophisticated spotted-and-banded camp shirt with matching shorts. Save $21 versus individual pricing. The shirt is finished with a notched camp collar and mother-of-pearl buttons; the shorts have an elasticated waistband with drawcord, side pockets, and a back patch pocket. Both in premium 100% cotton chambray. Sizing is per individual piece.",
    materials: "100% Cotton",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/leopard-shark-chambray-shirt.png", "/leopard-shark-chambray-shorts.png"],
    setShirtSlug: "leopard-shark-chambray-shirt",
    setShortsSlug: "leopard-shark-chambray-shorts",
    designInspiration:
      "The elegant saddle markings and spots of the leopard shark, gliding through shallow coastal waters. The complete matching set.",
    isFeatured: true,
    exhibit: "Open Ocean",
    fabric: "Chambray",
  },
  {
    slug: "jaguar-crochet-set",
    name: "Jaguar Crochet Set",
    category: "set",
    gender: "men",
    price: 299,
    currency: "usd",
    stripePaymentLink: "#",
    description:
      "The full Jaguar Crochet ensemble — hand-crocheted camp shirt and matching shorts, each piece taking over 30 hours to produce. Save $21 versus buying separately. The open-stitch rosette pattern flows across both pieces in 100% cotton crochet. The shirt is a wearable work of art; the shorts are lined through the seat for comfort with an elasticated waistband and cotton drawcord. Sizing is per individual piece.",
    materials: "100% Cotton Crochet",
    careInstructions: "Hand wash cold, lay flat to dry",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/jaguar-crochet-shirt.png", "/jaguar-crochet-shorts.png"],
    setShirtSlug: "jaguar-crochet-shirt",
    setShortsSlug: "jaguar-crochet-shorts",
    designInspiration:
      "The rosette patterns of the jaguar — the Americas' most powerful big cat — translated into crochet stitchwork. The complete head-to-toe look.",
    isFeatured: true,
    exhibit: "Savanna",
    fabric: "Crochet",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductsByCategory(
  category?: "shirt" | "shorts" | "set",
): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}

export function getProductsByGender(
  gender?: "men" | "women" | "unisex",
): Product[] {
  if (!gender) return products;
  return products.filter((p) => p.gender === gender);
}
