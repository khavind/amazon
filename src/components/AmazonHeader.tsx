import { Search, ShoppingCart, MapPin, ChevronDown, Menu, Globe, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState, useRef, useEffect } from "react";
import amazonLogo from "@/assets/amazon-logo.png";
import SideMenu from "./SideMenu";

const subNavItems = [
  { label: "Fresh", link: "/?category=Fresh" },
  { label: "MX Player", link: "/" },
  { label: "Sell", link: "/sell" },
  { label: "Bestsellers", link: "/?category=Bestsellers" },
  { label: "Mobiles", link: "/?category=Mobiles" },
  { label: "Today's Deals", link: "/?category=Today's Deals" },
  { label: "Customer Service", link: "/customer-service" },
  { label: "New Releases", link: "/?category=New Releases" },
  { label: "Prime", link: "/?category=Prime" },
  { label: "Fashion", link: "/?category=Fashion" },
  { label: "Electronics", link: "/?category=Electronics" },
  { label: "Home & Kitchen", link: "/?category=Home %26 Kitchen" },
  { label: "Gift Cards", link: "/?category=Gift Cards" },
  { label: "Books", link: "/?category=Books" },
];

const categories = ["All", "Electronics", "Fashion", "Home & Kitchen", "Books", "Fitness", "Beauty"];
const languages = ["English", "हिन्दी", "ಕನ್ನಡ"];

const AmazonHeader = () => {
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const user = JSON.parse(localStorage.getItem("amazon_user") || "null");

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}&category=${selectedCategory === "All" ? "All" : selectedCategory}`);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <header>
      {/* Top Nav */}
      <div className="bg-amazon-navy px-2 py-1 flex items-center gap-1">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded">
          <img src={amazonLogo} alt="Amazon.in" className="h-8 object-contain" />
        </Link>

        {/* Deliver to */}
        <div className="hidden md:flex items-center gap-1 text-secondary-foreground text-xs px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded cursor-pointer">
          <MapPin size={18} className="text-secondary-foreground" />
          <div>
            <p className="text-secondary-foreground/70 text-[11px]">Delivering to Delhi 110008</p>
            <p className="font-bold text-sm">Update location</p>
          </div>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 flex h-10 rounded-md overflow-hidden relative">
          <div ref={categoryDropdownRef} className="hidden md:flex items-center relative">
            <button
              type="button"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="bg-muted px-2 text-xs text-foreground border-r border-border gap-0.5 cursor-pointer flex items-center gap-1 h-full hover:bg-muted/80"
            >
              <span className="text-muted-foreground text-[12px]">{selectedCategory}</span>
              <ChevronDown size={12} className="text-muted-foreground" />
            </button>
            {showCategoryDropdown && (
              <div className="absolute top-full left-0 bg-card border border-border rounded shadow-lg z-50 min-w-[150px] mt-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                      selectedCategory === cat ? "font-bold text-amazon-link" : "text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 text-sm text-foreground bg-card outline-none"
          />
          <button type="submit" className="bg-amazon-orange hover:bg-amazon-orange-hover px-3 flex items-center rounded-r-md">
            <Search size={22} className="text-secondary" />
          </button>
        </form>

        {/* Language */}
        <div
          ref={languageDropdownRef}
          className="hidden lg:flex items-center relative"
        >
          <button
            type="button"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-1 text-secondary-foreground text-xs px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded cursor-pointer"
          >
            <Globe size={16} />
            <span className="font-bold text-sm">{selectedLanguage.substring(0, 2).toUpperCase()}</span>
            <ChevronDown size={10} />
          </button>
          {showLanguageDropdown && (
            <div className="absolute top-full right-0 bg-card border border-border rounded shadow-lg z-50 min-w-[150px] mt-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLanguageSelect(lang)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                    selectedLanguage === lang ? "font-bold text-amazon-link" : "text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Account */}
        <Link
          to={user ? "/account" : "/signin"}
          className="hidden md:block text-secondary-foreground text-xs px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded"
        >
          <p className="text-secondary-foreground/70 text-[11px]">
            Hello, {user ? user.name : "sign in"}
          </p>
          <p className="font-bold text-sm flex items-center gap-0.5">
            Account & Lists <ChevronDown size={10} />
          </p>
        </Link>

        {/* Returns & Orders */}
        <Link to="/orders" className="hidden md:block text-secondary-foreground text-xs px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded">
          <p className="text-secondary-foreground/70 text-[11px]">Returns</p>
          <p className="font-bold text-sm">& Orders</p>
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className="flex items-center gap-0 text-secondary-foreground px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded relative">
          <div className="relative">
            <Heart size={24} />
            <span className="absolute -top-1 right-0 text-amazon-orange font-bold text-sm">{getWishlistCount()}</span>
          </div>
          <span className="hidden md:inline font-bold text-sm">Wishlist</span>
        </Link>

        {/* Cart */}
        <Link to="/cart" className="flex items-center gap-0 text-secondary-foreground px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded relative">
          <div className="relative">
            <ShoppingCart size={28} />
            <span className="absolute -top-1 right-0 text-amazon-orange font-bold text-sm">{getCartCount()}</span>
          </div>
          <span className="hidden md:inline font-bold text-sm">Cart</span>
        </Link>
      </div>

      {/* Sub Nav */}
      <div className="bg-amazon-navy-light px-2 py-0.5 flex items-center gap-0 overflow-x-auto text-secondary-foreground text-sm">
        <button
          onClick={() => setSideMenuOpen(true)}
          className="flex items-center gap-1 whitespace-nowrap px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded font-bold"
        >
          <Menu size={18} />
          <span>All</span>
        </button>
        {subNavItems.map((item) => (
          <Link
            key={item.label}
            to={item.link}
            className="whitespace-nowrap px-2 py-1 border border-transparent hover:border-secondary-foreground/50 rounded text-[13px]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <SideMenu open={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
    </header>
  );
};

export default AmazonHeader;
