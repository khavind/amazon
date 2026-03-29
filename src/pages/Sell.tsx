import { useState } from "react";
import AmazonHeader from "@/components/AmazonHeader";
import AmazonFooter from "@/components/AmazonFooter";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SellerFormData {
  businessName: string;
  gstin: string;
  panNumber: string;
  mobileNumber: string;
  email: string;
  bankAccount: string;
  ifscCode: string;
  accountHolderName: string;
  storeDisplayName: string;
  productCategory: string;
  agreedToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const feeHighlights = [
  {
    icon: "🏷️",
    color: "#FF6B35",
    title: "Zero Referral Fee",
    subtitle: "(Under ₹1000)",
    bg: "#FF6B35",
    label: "Zero",
  },
  {
    icon: "📦",
    color: "#FF6B35",
    title: "Save ₹15 per order",
    subtitle: "(Easy Ship under ₹300 Products)",
    bg: "#FF9500",
  },
  {
    icon: "📉",
    color: "#FF6B35",
    title: "4%–9.5% Lower Fees",
    subtitle: "(Products above ₹1,000)",
    bg: "#FF6B35",
  },
  {
    icon: "🚚",
    color: "#FF6B35",
    title: "Lower Closing Fees (₹20–₹26 per order)",
    subtitle: "(Self Ship)",
    bg: "#FF9500",
  },
];

const whyBecomeSellerStats = [
  {
    title: "Crores of customers",
    desc: "Reach crores of customers on ShopSpark, India's most visited shopping destination.",
  },
  {
    title: "26,800 crorepati sellers",
    desc: "91,500 lakhpati sellers in 2023 alone. You could be the next.",
    highlight: "26,800 crorepati sellers",
  },
  {
    title: "Unbeatable Reach",
    desc: "Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by ShopSpark.",
  },
];

const sellerTestimonials = [
  {
    brand: "CRAFT BY ARTISANS",
    quote: "From five members to fifteen, a little trust can go a long way.",
    name: "Sunita Sharma",
    role: "Founder, Craft by Artisans",
    avatar: "👩",
    side: "left",
  },
  {
    brand: "GOODNESS PET FOOD",
    quote: "We went from sales of ₹10,000 to ₹5 lakh in just two and a half years.",
    name: "Deepak Rajaram",
    role: "Founder, Goodness Pet Food",
    avatar: "👨",
    side: "right",
  },
];

const howToSteps = [
  {
    num: 1,
    icon: "📝",
    title: "Step 1: Register your account",
    desc: "Create your seller account with a valid GSTIN and an active bank account.",
  },
  {
    num: 2,
    icon: "🏪",
    title: "Step 2: Set up your store",
    desc: "Choose your business name and select shipping options.",
  },
  {
    num: 3,
    icon: "📱",
    title: "Step 3: List your products",
    desc: "List your products by providing product and brand details.",
  },
  {
    num: 4,
    icon: "💰",
    title: "Step 4: Complete orders & get paid",
    desc: "Deliver orders to customers on time and get paid within 7 days of delivery.",
  },
];

const productCategories = [
  "Electronics", "Fashion & Clothing", "Home & Kitchen", "Books",
  "Toys & Games", "Sports & Outdoors", "Beauty & Personal Care",
  "Automotive", "Grocery & Gourmet", "Health & Wellness",
  "Jewellery", "Baby Products", "Pet Supplies", "Other",
];

// ─── Per-field validators ─────────────────────────────────────────────────────
function validateField(field: keyof SellerFormData, value: string | boolean): string {
  switch (field) {
    case "businessName":
      return (value as string).trim() ? "" : "Business name is required";
    case "gstin": {
      const v = (value as string).trim().toUpperCase();
      if (!v) return "GSTIN is required";
      if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v))
        return "Invalid GSTIN format (e.g. 27ABCDE1234F1Z5)";
      return "";
    }
    case "panNumber": {
      const v = (value as string).trim().toUpperCase();
      if (!v) return "PAN number is required";
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v)) return "Invalid PAN format (e.g. ABCDE1234F)";
      return "";
    }
    case "mobileNumber": {
      const v = (value as string).trim();
      if (!v) return "Mobile number is required";
      if (!/^[6-9]\d{9}$/.test(v)) return "Enter a valid 10-digit Indian mobile number";
      return "";
    }
    case "email": {
      const v = (value as string).trim();
      if (!v) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address";
      return "";
    }
    case "accountHolderName":
      return (value as string).trim() ? "" : "Account holder name is required";
    case "bankAccount": {
      const v = (value as string).trim();
      if (!v) return "Bank account number is required";
      if (!/^\d{9,18}$/.test(v)) return "Account number must be 9–18 digits (numbers only)";
      return "";
    }
    case "ifscCode": {
      const v = (value as string).trim().toUpperCase();
      if (!v) return "IFSC code is required";
      if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(v)) return "Invalid IFSC format (e.g. SBIN0001234)";
      return "";
    }
    case "storeDisplayName":
      return (value as string).trim() ? "" : "Store display name is required";
    case "productCategory":
      return (value as string) ? "" : "Please select a product category";
    case "agreedToTerms":
      return (value as boolean) ? "" : "You must agree to the terms and conditions";
    default:
      return "";
  }
}

const STEP_FIELDS: Record<number, (keyof SellerFormData)[]> = {
  1: ["businessName", "gstin", "panNumber", "mobileNumber", "email"],
  2: ["accountHolderName", "bankAccount", "ifscCode"],
  3: ["storeDisplayName", "productCategory", "agreedToTerms"],
};

// ─── Selling Registration Modal ───────────────────────────────────────────────
function SellerRegistrationModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  // Track which steps have been completed (passed validation)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [form, setForm] = useState<SellerFormData>({
    businessName: "",
    gstin: "",
    panNumber: "",
    mobileNumber: "",
    email: "",
    bankAccount: "",
    ifscCode: "",
    accountHolderName: "",
    storeDisplayName: "",
    productCategory: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  // Update field value and clear its error immediately
  const update = (field: keyof SellerFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Re-validate only if already touched
    if (touched.has(field)) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  // Validate a single field on blur
  const handleBlur = (field: keyof SellerFormData) => {
    setTouched((prev) => new Set(prev).add(field));
    const err = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  // Validate all fields for the current step; returns true if clean
  const validateCurrentStep = (): boolean => {
    const fields = STEP_FIELDS[step];
    const newErrors: FormErrors = {};
    const newTouched = new Set(touched);
    fields.forEach((f) => {
      newTouched.add(f);
      const err = validateField(f, form[f]);
      if (err) newErrors[f] = err;
    });
    setTouched(newTouched);
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const goToStep = (target: 1 | 2 | 3) => {
    // Allow going back freely; going forward requires passing current step validation
    if (target < step) {
      setStep(target);
      return;
    }
    // Validate each intermediate step up to target
    for (let s = step; s < target; s++) {
      const fields = STEP_FIELDS[s];
      const newErrors: FormErrors = {};
      const newTouched = new Set(touched);
      fields.forEach((f) => {
        newTouched.add(f);
        const err = validateField(f, form[f]);
        if (err) newErrors[f] = err;
      });
      setTouched(newTouched);
      if (Object.keys(newErrors).length > 0) {
        setErrors((prev) => ({ ...prev, ...newErrors }));
        setStep(s as 1 | 2 | 3);
        return;
      }
      setCompletedSteps((prev) => new Set(prev).add(s));
    }
    setStep(target);
  };

  const next = () => {
    if (validateCurrentStep()) {
      setCompletedSteps((prev) => new Set(prev).add(step));
      setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : s));
    }
  };

  const back = () => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s));

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    onSuccess();
  };

  const inputCls = (field: string) =>
    `w-full border rounded-md px-3 py-2.5 text-sm outline-none transition-all ${
      errors[field] && touched.has(field)
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-300"
        : "border-gray-300 bg-white focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900]/20"
    }`;

  const tabs = [
    { num: 1 as const, label: "Business Info" },
    { num: 2 as const, label: "Bank Details" },
    { num: 3 as const, label: "Store Setup" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg flex flex-col" style={{ maxHeight: "92vh" }}>

        {/* ── Modal Header ── */}
        <div className="bg-[#131921] text-white px-6 py-4 flex items-center justify-between rounded-t-lg flex-shrink-0">
          <div>
            <h2 className="text-lg font-bold tracking-tight">Seller Registration</h2>
            <p className="text-xs text-gray-400 mt-0.5">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-lg"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex border-b border-gray-200 flex-shrink-0 bg-gray-50">
          {tabs.map(({ num, label }) => {
            const isDone = completedSteps.has(num);
            const isActive = step === num;
            return (
              <button
                key={num}
                type="button"
                onClick={() => goToStep(num)}
                className={`flex-1 py-3 text-xs font-semibold transition-all border-b-2 flex items-center justify-center gap-1.5 ${
                  isActive
                    ? "border-[#FF9900] text-[#FF9900] bg-white"
                    : isDone
                    ? "border-green-500 text-green-600 hover:bg-green-50"
                    : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold flex-shrink-0 ${
                    isActive ? "bg-[#FF9900] text-white" : isDone ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isDone && !isActive ? "✓" : num}
                </span>
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Scrollable Form Body ── */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4">

          {/* ── Step 1: Business Info ── */}
          {step === 1 && (
            <>
              <p className="text-sm text-gray-500">Enter your business &amp; contact details</p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Legal Business Name *</label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => update("businessName", e.target.value)}
                  onBlur={() => handleBlur("businessName")}
                  placeholder="As per GST registration"
                  className={inputCls("businessName")}
                />
                {errors.businessName && touched.has("businessName") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.businessName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GSTIN *</label>
                <input
                  type="text"
                  value={form.gstin}
                  onChange={(e) => update("gstin", e.target.value.toUpperCase())}
                  onBlur={() => handleBlur("gstin")}
                  placeholder="e.g. 27ABCDE1234F1Z5"
                  maxLength={15}
                  className={inputCls("gstin")}
                />
                {errors.gstin && touched.has("gstin") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.gstin}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number *</label>
                <input
                  type="text"
                  value={form.panNumber}
                  onChange={(e) => update("panNumber", e.target.value.toUpperCase())}
                  onBlur={() => handleBlur("panNumber")}
                  placeholder="e.g. ABCDE1234F"
                  maxLength={10}
                  className={inputCls("panNumber")}
                />
                {errors.panNumber && touched.has("panNumber") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.panNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-600 flex-shrink-0">+91</span>
                  <input
                    type="tel"
                    value={form.mobileNumber}
                    onChange={(e) => update("mobileNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    onBlur={() => handleBlur("mobileNumber")}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={inputCls("mobileNumber")}
                  />
                </div>
                {errors.mobileNumber && touched.has("mobileNumber") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.mobileNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="your@email.com"
                  className={inputCls("email")}
                />
                {errors.email && touched.has("email") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.email}</p>
                )}
              </div>
            </>
          )}

          {/* ── Step 2: Bank Details ── */}
          {step === 2 && (
            <>
              <p className="text-sm text-gray-500">Your earnings will be deposited here every 7 days</p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name *</label>
                <input
                  type="text"
                  value={form.accountHolderName}
                  onChange={(e) => update("accountHolderName", e.target.value)}
                  onBlur={() => handleBlur("accountHolderName")}
                  placeholder="As per bank records"
                  className={inputCls("accountHolderName")}
                />
                {errors.accountHolderName && touched.has("accountHolderName") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.accountHolderName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Number *</label>
                <input
                  type="text"
                  value={form.bankAccount}
                  onChange={(e) => update("bankAccount", e.target.value.replace(/\D/g, "").slice(0, 18))}
                  onBlur={() => handleBlur("bankAccount")}
                  placeholder="9–18 digit account number"
                  className={inputCls("bankAccount")}
                />
                {errors.bankAccount && touched.has("bankAccount") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.bankAccount}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code *</label>
                <input
                  type="text"
                  value={form.ifscCode}
                  onChange={(e) => update("ifscCode", e.target.value.toUpperCase())}
                  onBlur={() => handleBlur("ifscCode")}
                  placeholder="e.g. SBIN0001234"
                  maxLength={11}
                  className={inputCls("ifscCode")}
                />
                {errors.ifscCode && touched.has("ifscCode") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.ifscCode}</p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-xs text-blue-700 flex gap-2">
                <span>🔒</span>
                <span>Your bank details are encrypted and stored securely. ShopSpark never shares your financial information.</span>
              </div>
            </>
          )}

          {/* ── Step 3: Store Setup ── */}
          {step === 3 && (
            <>
              <p className="text-sm text-gray-500">Set up your public store profile</p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Store Display Name *</label>
                <input
                  type="text"
                  value={form.storeDisplayName}
                  onChange={(e) => update("storeDisplayName", e.target.value)}
                  onBlur={() => handleBlur("storeDisplayName")}
                  placeholder="e.g. Rahul's Electronics Store"
                  className={inputCls("storeDisplayName")}
                />
                {errors.storeDisplayName && touched.has("storeDisplayName") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.storeDisplayName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Product Category *</label>
                <select
                  value={form.productCategory}
                  onChange={(e) => update("productCategory", e.target.value)}
                  onBlur={() => handleBlur("productCategory")}
                  className={inputCls("productCategory")}
                >
                  <option value="">— Select a category —</option>
                  {productCategories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.productCategory && touched.has("productCategory") && (
                  <p className="text-xs text-red-500 mt-1">⚠ {errors.productCategory}</p>
                )}
              </div>

              {/* Summary card */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm space-y-2">
                <p className="font-semibold text-gray-700">📋 Registration Summary</p>
                {[
                  ["Business", form.businessName],
                  ["GSTIN", form.gstin],
                  ["Email", form.email],
                  ["Mobile", form.mobileNumber ? `+91 ${form.mobileNumber}` : ""],
                  ["Account Holder", form.accountHolderName],
                  ["IFSC", form.ifscCode],
                ].map(([label, val]) => (
                  <div key={label} className="flex gap-2">
                    <span className="text-gray-400 w-28 flex-shrink-0">{label}:</span>
                    <span className="font-medium text-gray-800 break-all">{val || "—"}</span>
                  </div>
                ))}
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.agreedToTerms}
                  onChange={(e) => {
                    update("agreedToTerms", e.target.checked);
                    handleBlur("agreedToTerms");
                  }}
                  className="mt-0.5 w-4 h-4 accent-[#FF9900]"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  I agree to ShopSpark's{" "}
                  <a href="#" className="text-[#007185] hover:underline" onClick={(e) => e.preventDefault()}>
                    Seller Services Agreement
                  </a>
                  ,{" "}
                  <a href="#" className="text-[#007185] hover:underline" onClick={(e) => e.preventDefault()}>
                    Privacy Policy
                  </a>
                  , and confirm all information provided is accurate.
                </span>
              </label>
              {errors.agreedToTerms && touched.has("agreedToTerms") && (
                <p className="text-xs text-red-500">⚠ {errors.agreedToTerms}</p>
              )}
            </>
          )}
        </div>

        {/* ── Footer Buttons ── */}
        <div className="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0 bg-white rounded-b-lg">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              className="flex-1 bg-[#FFD814] hover:bg-[#F7CA00] active:bg-[#e8ba00] text-[#0F1111] py-2.5 rounded-md text-sm font-bold transition-colors shadow-sm"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-[#FF9900] hover:bg-[#e88a00] active:bg-[#d47e00] text-white py-2.5 rounded-md text-sm font-bold transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Registering...
                </>
              ) : (
                "🎉 Complete Registration"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Success Modal ─────────────────────────────────────────────────────────────
function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-[#0F1111] mb-2">Welcome to ShopSpark!</h2>
        <p className="text-gray-600 mb-2">Your seller account has been registered successfully.</p>
        <p className="text-sm text-gray-500 mb-6">
          You'll receive a confirmation email shortly. Our team will verify your documents within 1–2 business days.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800 mb-6 text-left space-y-1">
          <p>✅ Account created successfully</p>
          <p>✅ Bank details saved securely</p>
          <p>✅ Verification email sent</p>
          <p>⏳ Document review: 1–2 business days</p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-[#FF9900] hover:bg-[#e88a00] text-white py-3 rounded font-bold transition-colors"
        >
          Go to Seller Dashboard →
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const Sell = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleSuccess = () => {
    setShowModal(false);
    setShowSuccess(true);
  };

  const scrollToForm = () => openModal();

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f3]" style={{ fontFamily: "'Amazon Ember', Arial, sans-serif" }}>
      <AmazonHeader />

      {/* ── Hero Banner ── */}
      <section className="bg-[#f7f0e6] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-gray-500 text-sm mb-2">Free Drop Live Now</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F1111] leading-tight mb-3">
              ZERO referral fee on over{" "}
              <span className="text-[#FF6B35]">12.5 crore<br />products</span>
            </h1>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              Register with a valid GSTIN and an active bank account to become a ShopSpark.in seller.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-[#FF9900] hover:bg-[#e88a00] text-white font-bold px-8 py-3 rounded transition-colors text-sm shadow-md"
            >
              Start Selling
            </button>
          </div>
          <div className="flex-shrink-0 text-9xl select-none">🏪</div>
        </div>
      </section>

      {/* ── Fee Drop Highlights ── */}
      <section className="bg-[#1a1f2e] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-center text-lg font-bold mb-8 tracking-wide">Fee Drop Highlights</h2>

          {/* Timeline dots */}
          <div className="relative flex items-start justify-between gap-4">
            {/* Line */}
            <div className="absolute top-[88px] left-[12%] right-[12%] h-0.5 bg-[#FF6B35] z-0" />

            {feeHighlights.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                {/* Illustration box */}
                <div className="w-28 h-24 bg-[#2a2f3e] rounded-lg flex items-center justify-center text-5xl mb-4 shadow-lg border border-[#3a3f4e]">
                  {i === 0 ? (
                    <div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-black text-xl">Zero</div>
                  ) : i === 1 ? "📦" : i === 2 ? "📉" : "🚚"}
                </div>
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-[#FF9900] border-2 border-white mb-3" />
                {/* Text */}
                <p className="text-center text-sm font-semibold leading-tight" style={{ color: i % 2 === 0 ? "#FF6B35" : "#fff" }}>
                  {i === 0 ? <><span className="text-[#FF6B35]">Zero</span> Referral Fee</> :
                   i === 1 ? <>Save <span className="text-[#FF6B35]">₹15</span> per order</> :
                   i === 2 ? <><span className="text-[#FF6B35]">4%–9.5%</span> Lower Fees</> :
                   <>Lower Closing Fees <span className="text-[#FF6B35]">(₹20–₹26 per order)</span></>}
                </p>
                <p className="text-xs text-gray-400 text-center mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-gray-500 text-gray-300 hover:bg-white/10 px-6 py-2 rounded text-sm transition-colors">
              Know more
            </button>
          </div>
        </div>
      </section>

      {/* ── Big Savings Grid ── */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-bold text-[#0F1111] mb-5">Big savings with the new fee reductions</h2>
          <div className="grid grid-cols-4 gap-2">
            {[
              { emoji: "👟", cat: "Shoes", save: "Save ₹15 (est)", badge: "Save ₹15 (est)", bg: "#f7f0e6" },
              { emoji: "🖥️", cat: "Screens", save: "Save ₹52 (est)", badge: "Save ₹52 (est)", bg: "#e8f0fe" },
              { emoji: "🛋️", cat: "Cushion Cover", save: "Save ₹25 (est)", badge: "Save ₹25 (est)", bg: "#fce4ec" },
              { emoji: "🔋", cat: "Power Bank", save: "Save ₹70 (est)", badge: "Save ₹70 (est)", bg: "#e8f5e9" },
              { emoji: "👟", cat: "Shoes", save: "Save ₹30 (est)", badge: "Save ₹30 (est)", bg: "#e8f0fe" },
              { emoji: "🧥", cat: "Jacket", save: "Save ₹53 (est)", badge: "Save ₹53 (est)", bg: "#fce4ec" },
              { emoji: "👗", cat: "Top Dress", save: "Save ₹20 (est)", badge: "Save ₹20 (est)", bg: "#f7f0e6" },
              { emoji: "🎧", cat: "Headphone", save: "Save ₹40 (est)", badge: "Save ₹40 (est)", bg: "#e8f5e9" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="h-20 flex items-center justify-center text-4xl" style={{ background: item.bg }}>
                  {item.emoji}
                </div>
                <div className="p-2 bg-white">
                  <p className="text-xs text-gray-700 font-medium truncate">{item.cat}</p>
                  <span className="inline-block mt-1 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded font-semibold">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How To Start Selling (4 Steps) ── */}
      <section className="bg-[#f3f3f3] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-[#00a0d2] rounded-lg p-6">
            <div className="grid grid-cols-2 gap-6">
              {howToSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e8f4fd] border-2 border-[#00a0d2] flex items-center justify-center text-xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0F1111]">{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Become a Seller ── */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center text-[#0F1111] mb-6">Why become a seller on ShopSpark.in?</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {whyBecomeSellerStats.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-sm text-[#00a0d2] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-[#FF9900] hover:bg-[#e88a00] text-white font-bold px-10 py-3 rounded transition-colors shadow-md"
            >
              Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* ── Seller Testimonials ── */}
      <section className="bg-[#f3f3f3] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-center text-[#0F1111] mb-8">Here's what ShopSpark.in sellers are saying:</h2>
          <div className="space-y-6">
            {sellerTestimonials.map((t, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 bg-white rounded-lg p-6 shadow-sm ${t.side === "right" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar with play button */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#FF9900] flex items-center justify-center text-4xl relative cursor-pointer shadow-md hover:shadow-lg transition-shadow">
                  {t.avatar}
                  <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                    <span className="text-white text-xl">▶</span>
                  </div>
                </div>
                {/* Quote */}
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-400 tracking-widest mb-2">{t.brand}</p>
                  <div className="text-[#00a0d2] text-3xl leading-none mb-1">"</div>
                  <p className="text-base font-medium text-[#0F1111] leading-snug italic">{t.quote}</p>
                  <p className="text-sm font-bold text-[#0F1111] mt-3">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Start Selling Footer CTA ── */}
      <section className="bg-[#e8e0d5] py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F1111] mb-2">Start selling today</h2>
          <p className="text-sm text-gray-600 mb-6 max-w-xs leading-relaxed">
            Put your products in front of crores of customers across India
          </p>
          <button
            onClick={openModal}
            className="bg-[#FF9900] hover:bg-[#e88a00] text-white font-bold px-8 py-3 rounded transition-colors shadow-md"
          >
            Start Selling
          </button>
        </div>
      </section>

      <AmazonFooter />

      {/* ── Modals ── */}
      {showModal && (
        <SellerRegistrationModal onClose={closeModal} onSuccess={handleSuccess} />
      )}
      {showSuccess && (
        <SuccessModal onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
};

export default Sell;
