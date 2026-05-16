import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi" | "kn";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    kn: string;
  };
}

const translations: Translations = {
  "header.delivering": {
    en: "Delivering to Delhi 110008",
    hi: "दिल्ली 110008 में डिलीवरी",
    kn: "ದೆಹಲಿ 110008ಕ್ಕೆ ಡೆಲಿವರಿ",
  },
  "header.update_location": {
    en: "Update location",
    hi: "स्थान अपडेट करें",
    kn: "ಸ್ಥಳ ನವೀಕರಿಸಿ",
  },
  "header.search_placeholder": {
    en: "Search Amazon.in",
    hi: "Amazon.in पर खोजें",
    kn: "Amazon.in ನಲ್ಲಿ ಹುಡುಕಿ",
  },
  "header.hello_signin": {
    en: "Hello, sign in",
    hi: "नमस्ते, साइन इन करें",
    kn: "ಹಲೋ, ಸೈನ್ ಇನ್ ಮಾಡಿ",
  },
  "header.account_lists": {
    en: "Account & Lists",
    hi: "खाता और सूचियां",
    kn: "ಖಾತೆ ಮತ್ತು ಪಟ್ಟಿಗಳು",
  },
  "header.returns": {
    en: "Returns",
    hi: "रिटर्न",
    kn: "ರಿಟರ್ನ್‌ಗಳು",
  },
  "header.orders": {
    en: "& Orders",
    hi: "और ऑर्डर",
    kn: "ಮತ್ತು ಆದೇಶಗಳು",
  },
  "header.wishlist": {
    en: "Wishlist",
    hi: "विशलिस्ट",
    kn: "ಇಚ್ಛಾಪಟ್ಟಿ",
  },
  "header.cart": {
    en: "Cart",
    hi: "कार्ट",
    kn: "ಕಾರ್ಟ್",
  },
  "nav.all": {
    en: "All",
    hi: "सभी",
    kn: "ಎಲ್ಲ",
  },
  "nav.fresh": {
    en: "Fresh",
    hi: "ताज़ा",
    kn: "ताज",
  },
  "nav.mx_player": {
    en: "MX Player",
    hi: "MX Player",
    kn: "MX Player",
  },
  "nav.sell": {
    en: "Sell",
    hi: "बेचना",
    kn: "ಮಾರಾಟ ಮಾಡಿ",
  },
  "nav.bestsellers": {
    en: "Bestsellers",
    hi: "बेस्टसेलर",
    kn: "ಬೆಸ್ಟಸೆಲರ್‌ಗಳು",
  },
  "nav.mobiles": {
    en: "Mobiles",
    hi: "मोबाइल",
    kn: "ಮೊಬೈಲ್‌ಗಳು",
  },
  "nav.todays_deals": {
    en: "Today's Deals",
    hi: "आज के सौदे",
    kn: "ಇಂದಿನ ಡೀಲ್‌ಗಳು",
  },
  "nav.customer_service": {
    en: "Customer Service",
    hi: "ग्राहक सेवा",
    kn: "ಗ್ರಾಹಕ ಸೇವೆ",
  },
  "nav.new_releases": {
    en: "New Releases",
    hi: "नई रिलीज़",
    kn: "ಹೊಸ ಸಂಚಯನಗಳು",
  },
  "nav.prime": {
    en: "Prime",
    hi: "प्राइम",
    kn: "ಪ್ರೈಮ್",
  },
  "nav.fashion": {
    en: "Fashion",
    hi: "फैशन",
    kn: "ಫ್ಯಾಷನ್",
  },
  "nav.electronics": {
    en: "Electronics",
    hi: "इलेक्ट्रॉनिक्स",
    kn: "ಇಲೆಕ್ಟ್ರಾನಿಕ್ಸ್",
  },
  "nav.home_kitchen": {
    en: "Home & Kitchen",
    hi: "होम और किचन",
    kn: "ಮನೆ ಮತ್ತು ಪಾಕಗೃಹ",
  },
  "nav.gift_cards": {
    en: "Gift Cards",
    hi: "गिफ्ट कार्ड",
    kn: "ಗಿಫ್ಟ್ ಕಾರ್ಡ್‌ಗಳು",
  },
  "nav.books": {
    en: "Books",
    hi: "किताबें",
    kn: "ಪುಸ್ತಕಗಳು",
  },
  "category.all": {
    en: "All",
    hi: "सभी",
    kn: "ಎಲ್ಲ",
  },
  "category.electronics": {
    en: "Electronics",
    hi: "इलेक्ट्रॉनिक्स",
    kn: "ಇಲೆಕ್ಟ್ರಾನಿಕ್ಸ್",
  },
  "category.fashion": {
    en: "Fashion",
    hi: "फैशन",
    kn: "ಫ್ಯಾಷನ್",
  },
  "category.home_kitchen": {
    en: "Home & Kitchen",
    hi: "होम और किचन",
    kn: "ಮನೆ ಮತ್ತು ಪಾಕಗೃಹ",
  },
  "category.books": {
    en: "Books",
    hi: "किताबें",
    kn: "ಪುಸ್ತಕಗಳು",
  },
  "category.fitness": {
    en: "Fitness",
    hi: "फिटनेस",
    kn: "ಫಿಟ್ನೆಸ್",
  },
  "category.beauty": {
    en: "Beauty",
    hi: "सौंदर्य",
    kn: "ಸೌಂದರ್ಯ",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
