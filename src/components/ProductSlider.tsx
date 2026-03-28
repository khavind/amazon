import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductSliderProps {
  title: string;
  products: Product[];
  linkText?: string;
  linkHref?: string;
}

const ProductSlider = ({ title, products, linkText, linkHref }: ProductSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (products.length === 0) return null;

  return (
    <div className="bg-card p-5 shadow-sm">
      <div className="flex items-baseline gap-3 mb-4">
        <h3 className="font-bold text-xl text-foreground">{title}</h3>
        {linkText && linkHref && (
          <Link
            to={linkHref}
            className="text-sm text-amazon-link hover:text-amazon-orange hover:underline"
          >
            {linkText}
          </Link>
        )}
      </div>
      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 w-10 bg-card/80 hover:bg-card shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] group/item"
            >
              <div className="aspect-square bg-muted rounded overflow-hidden mb-2">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm text-foreground line-clamp-2 group-hover/item:text-amazon-orange transition-colors">
                {product.name}
              </p>
              <p className="text-sm font-bold text-foreground mt-1">
                ₹{product.price.toLocaleString()}
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through ml-2">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </p>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 w-10 bg-card/80 hover:bg-card shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
