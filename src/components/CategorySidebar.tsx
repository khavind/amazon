import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import StarRating from "@/components/StarRating";

interface CategorySidebarProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  onPriceFilter?: (min: number, max: number | null) => void;
  onRatingFilter?: (rating: number) => void;
}

const categoryTree: Record<string, string[]> = {
  Electronics: ["Headphones", "Smartwatches", "Speakers", "Accessories", "Cameras", "Laptops"],
  Books: ["Programming", "Bestsellers", "New Releases", "Study Guides", "Fiction", "Non-Fiction"],
  Clothing: ["Men's Wear", "Women's Wear", "Kids", "Footwear", "Accessories", "Activewear"],
  "Home & Kitchen": ["Cookware", "Desk Lamps", "Kitchen Tools", "Home Decor", "Furniture", "Storage"],
  "Sports & Outdoors": ["Yoga Mats", "Water Bottles", "Fitness Gear", "Outdoor", "Camping", "Cycling"],
  Beauty: ["Face Care", "Serums", "Moisturizers", "Makeup", "Hair Care", "Fragrances"],
  "Toys & Games": ["Building Blocks", "Board Games", "Puzzles", "Action Figures", "Dolls", "Outdoor Toys"],
  Fashion: ["Men's Fashion", "Women's Fashion", "Kids Fashion", "Footwear", "Watches", "Bags"],
};

const priceRanges = [
  { label: "Under ₹100", min: 0, max: 100 },
  { label: "₹100 - ₹500", min: 100, max: 500 },
  { label: "₹500 - ₹1,000", min: 500, max: 1000 },
  { label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
  { label: "Over ₹5,000", min: 5000, max: null },
];

const brands = ["SoundMax", "FitPro", "BassBoost", "TechBooks", "SportsGear"];

const CategorySidebar = ({
  activeCategory,
  onCategoryChange,
  onPriceFilter,
  onRatingFilter,
}: CategorySidebarProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const subcategories = categoryTree[activeCategory] || [];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <aside className="w-56 flex-shrink-0 text-sm space-y-5">
      {/* Category breadcrumb */}
      <div>
        <h3 className="font-bold text-foreground mb-2">Category</h3>
        <button
          onClick={() => onCategoryChange("All")}
          className="text-amazon-link hover:text-amazon-orange hover:underline text-xs flex items-center gap-0.5 mb-1"
        >
          <ChevronLeft size={12} /> All Categories
        </button>
        <p className="font-bold text-foreground text-sm pl-2">{activeCategory}</p>
        {subcategories.length > 0 && (
          <ul className="pl-4 mt-1 space-y-0.5">
            {subcategories.map((sub) => (
              <li key={sub}>
                <button className="text-foreground hover:text-amazon-orange text-xs hover:underline">
                  {sub}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Customer Reviews */}
      <div>
        <h3 className="font-bold text-foreground mb-2">Customer Reviews</h3>
        {[4, 3, 2, 1].map((r) => (
          <button
            key={r}
            onClick={() => {
              setSelectedRating(r);
              onRatingFilter?.(r);
            }}
            className={`flex items-center gap-1 py-0.5 text-xs hover:text-amazon-orange ${
              selectedRating === r ? "font-bold" : ""
            }`}
          >
            <StarRating rating={r} size="sm" />
            <span className="text-foreground">& Up</span>
          </button>
        ))}
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold text-foreground mb-2">Price</h3>
        <ul className="space-y-0.5">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                onClick={() => {
                  setSelectedPrice(range.label);
                  onPriceFilter?.(range.min, range.max);
                }}
                className={`text-xs hover:text-amazon-orange ${
                  selectedPrice === range.label
                    ? "font-bold text-amazon-orange"
                    : "text-foreground"
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Deals */}
      <div>
        <h3 className="font-bold text-foreground mb-2">Deals & Discounts</h3>
        <button className="text-amazon-link hover:underline text-xs block">All Discounts</button>
        <button className="text-amazon-link hover:underline text-xs block">Today's Deals</button>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-bold text-foreground mb-2">Brands</h3>
        <ul className="space-y-1">
          {brands.map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-foreground hover:text-amazon-orange">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="rounded border-border accent-amazon-orange"
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategorySidebar;
