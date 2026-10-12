const galleryFallbacks = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687931-cebf667104bd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
];

const featuresByType = {
  Villa: ["Private garden", "Swimming pool", "Covered parking", "Built-in wardrobes", "Balcony or terrace", "Gymnasium access"],
  Apartment: ["City views", "Concierge service", "Covered parking", "Built-in wardrobes", "Swimming pool access", "Gymnasium access"],
  Penthouse: ["Panoramic views", "Private terrace", "Concierge service", "Smart-home features", "Swimming pool access", "Gymnasium access"],
  Townhouse: ["Private garden", "Community pool", "Covered parking", "Built-in wardrobes", "Family room", "Children's play area"],
};

function createProperty({
  slug,
  name,
  price,
  purchasePrice,
  beds,
  baths,
  sqft,
  image,
  location,
  type,
  description,
  features,
  plotArea,
}) {
  const detailCode = slug.replace(/[^a-z0-9]/g, "").slice(0, 6).toUpperCase();

  return {
    slug,
    name,
    title: name,
    price,
    purchasePrice,
    beds,
    baths,
    sqft,
    specs: `${beds} Bedrooms | ${baths} Bathrooms | ${sqft} SQ.FT`,
    image,
    images: [image, ...galleryFallbacks.filter((fallback) => fallback !== image).slice(0, 2)],
    location,
    type,
    reference: `REA-${detailCode}-${String(purchasePrice).slice(0, 4)}`,
    permit: `681${String(purchasePrice).slice(0, 9).padEnd(9, "0")}`,
    plotArea: plotArea || `${Math.round(Number(String(sqft).replace(/,/g, "")) * 1.3).toLocaleString()} sqft`,
    ownership: "Freehold",
    usage: "Residential",
    description: description || `${name} is a thoughtfully designed ${type.toLowerCase()} in ${location}. It balances generous living space, refined finishes, and a well-connected Dubai address.`,
    highlights: [
      `${beds} Bedrooms`,
      `${baths} Bathrooms`,
      `${sqft} Sq Ft built-up area`,
      `Located in ${location}`,
      "Ready for occupancy",
    ],
    features: features || featuresByType[type] || featuresByType.Villa,
  };
}

export const featuredProperties = [
  createProperty({
    slug: "cedarwood-estates",
    name: "Cedarwood Estates",
    price: "$1,600,000",
    purchasePrice: 1600000,
    beds: 5,
    baths: 6,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    location: "Dubai Hills Estate, Dubai",
    type: "Villa",
    description: "Cedarwood Estates is a refined five-bedroom residence in Dubai Hills Estate. Its generous living spaces, landscaped setting, and considered finishes create a private home designed for effortless family living.",
  }),
  createProperty({
    slug: "goldencrest-villas",
    name: "Goldencrest Villas",
    price: "$1,875,000",
    purchasePrice: 1875000,
    beds: 6,
    baths: 8,
    sqft: "3,800",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    location: "Emirates Hills, Dubai",
    type: "Villa",
    description: "Goldencrest Villas offers a spacious six-bedroom layout in the sought-after Emirates Hills community, with expansive entertaining areas and a peaceful residential setting.",
  }),
  createProperty({
    slug: "serenity-villas",
    name: "Serenity Villas",
    price: "$1,450,000",
    purchasePrice: 1450000,
    beds: 5,
    baths: 5,
    sqft: "5,000",
    image: "https://images.unsplash.com/photo-1600607687931-cebf667104bd?q=80&w=2070&auto=format&fit=crop",
    location: "Arabian Ranches, Dubai",
    type: "Villa",
    description: "Serenity Villas is a five-bedroom family home in Arabian Ranches, balancing bright open-plan rooms with comfortable private spaces for a quiet, connected lifestyle.",
  }),
  createProperty({
    slug: "silverstone-manor",
    name: "Silverstone Manor",
    price: "$2,250,000",
    purchasePrice: 2250000,
    beds: 5,
    baths: 5,
    sqft: "4,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    location: "Palm Jumeirah, Dubai",
    type: "Villa",
    description: "Silverstone Manor pairs generous five-bedroom accommodation with an exceptional Palm Jumeirah address, tailored for relaxed indoor-outdoor living and refined entertaining.",
  }),
];

export const additionalProperties = [
  createProperty({
    slug: "horizon-villa",
    name: "Horizon Villa",
    price: "$2,350,000",
    purchasePrice: 2350000,
    beds: 3,
    baths: 7,
    sqft: "5,000",
    image: "https://picsum.photos/seed/horizon/800/600",
    location: "Dubai Creek Harbour, Dubai",
    type: "Villa",
  }),
  createProperty({
    slug: "cedarwood-garden-residence",
    name: "Cedarwood Garden Residence",
    price: "$1,600,000",
    purchasePrice: 1600000,
    beds: 5,
    baths: 6,
    sqft: "4,500",
    image: "https://picsum.photos/seed/cedarwood/800/600",
    location: "Dubai Hills Estate, Dubai",
    type: "Villa",
  }),
  createProperty({
    slug: "oasis-penthouse",
    name: "Oasis Penthouse",
    price: "$3,100,000",
    purchasePrice: 3100000,
    beds: 4,
    baths: 4,
    sqft: "3,800",
    image: "https://picsum.photos/seed/oasis/800/600",
    location: "Business Bay, Dubai",
    type: "Penthouse",
  }),
  createProperty({
    slug: "palm-meadows",
    name: "Palm Meadows",
    price: "$1,200,000",
    purchasePrice: 1200000,
    beds: 3,
    baths: 3,
    sqft: "2,400",
    image: "https://picsum.photos/seed/palm/800/600",
    location: "Palm Jumeirah, Dubai",
    type: "Townhouse",
  }),
  createProperty({
    slug: "downtown-loft",
    name: "Downtown Loft",
    price: "$850,000",
    purchasePrice: 850000,
    beds: 2,
    baths: 2,
    sqft: "1,200",
    image: "https://picsum.photos/seed/loft/800/600",
    location: "Downtown Dubai, Dubai",
    type: "Apartment",
  }),
  createProperty({
    slug: "marina-penthouse",
    name: "Marina Penthouse",
    price: "$4,200,000",
    purchasePrice: 4200000,
    beds: 4,
    baths: 5,
    sqft: "6,000",
    image: "https://picsum.photos/seed/marina/800/600",
    location: "Dubai Marina, Dubai",
    type: "Penthouse",
  }),
];

export const allExploreProperties = [...featuredProperties, ...additionalProperties];

const propertyDetails = Object.fromEntries(allExploreProperties.map((property) => [property.slug, property]));

featuredProperties.forEach((property, index) => {
  propertyDetails[String(index + 1)] = property;
});

export default propertyDetails;
