import { Link } from "react-router-dom";
import { products } from "@/data/products";

interface CardConfig {
  title: string;
  category: string;
  items: { label: string; productIndex: number }[];
}

const cardConfigs: CardConfig[] = [
  {
    title: "Best of Electronics",
    category: "Electronics",
    items: [
      { label: "Headphones", productIndex: 0 },
      { label: "Smartwatches", productIndex: 1 },
      { label: "Speakers", productIndex: 2 },
      { label: "Accessories", productIndex: 3 },
    ],
  },
  {
    title: "Revamp your home in style",
    category: "Home & Kitchen",
    items: [
      { label: "Cookware", productIndex: 0 },
      { label: "Desk Lamps", productIndex: 1 },
      { label: "Kitchen tools", productIndex: 2 },
      { label: "Home decor", productIndex: 3 },
    ],
  },
  {
    title: "Deals on Sports & Fitness",
    category: "Sports & Outdoors",
    items: [
      { label: "Yoga Mats", productIndex: 0 },
      { label: "Water Bottles", productIndex: 1 },
      { label: "Fitness gear", productIndex: 2 },
      { label: "Outdoor", productIndex: 3 },
    ],
  },
  {
    title: "Top picks in Books & More",
    category: "Books",
    items: [
      { label: "Programming", productIndex: 0 },
      { label: "Bestsellers", productIndex: 1 },
      { label: "New releases", productIndex: 2 },
      { label: "Study guides", productIndex: 3 },
    ],
  },
];

// Get images for each card from actual product data
const getProductsByCategory = (category: string) => {
  return products.filter((p) => p.category === category);
};

const CategoryDealCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto -mt-8 md:-mt-16 relative z-10">
      {cardConfigs.map((config) => {
        const catProducts = getProductsByCategory(config.category);
        return (
          <div key={config.title} className="bg-card p-5 shadow-sm">
            <h3 className="font-bold text-lg text-foreground mb-3">{config.title}</h3>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {config.items.slice(0, 4).map((item, i) => {
                const product = catProducts[i] || catProducts[0];
                return (
                  <Link
                    key={i}
                    to={product ? `/product/${product.id}` : "#"}
                    className="block"
                  >
                    <div className="aspect-square bg-muted rounded overflow-hidden mb-1">
                      {product && (
                        <img
                          src={product.images[0]}
                          alt={item.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <p className="text-xs text-foreground truncate">{item.label}</p>
                  </Link>
                );
              })}
            </div>
            <Link
              to={`/?category=${encodeURIComponent(config.category)}`}
              className="text-sm text-amazon-link hover:text-amazon-orange hover:underline"
            >
              See all offers
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryDealCards;
