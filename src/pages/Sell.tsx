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

// ─── Validation ───────────────────────────────────────────────────────────────
function validateForm(data: SellerFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.businessName.trim()) errors.businessName = "Business name is required";
  if (!data.gstin.trim()) {
    errors.gstin = "GSTIN is required";
  } else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(data.gstin.toUpperCase())) {
    errors.gstin = "Enter a valid 15-digit GSTIN (e.g. 27ABCDE1234F1Z5)";
  }
  if (!data.panNumber.trim()) {
    errors.panNumber = "PAN number is required";
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.panNumber.toUpperCase())) {
    errors.panNumber = "Enter a valid PAN (e.g. ABCDE1234F)";
  }
  if (!data.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(data.mobileNumber)) {
    errors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!data.bankAccount.trim()) {
    errors.bankAccount = "Bank account number is required";
  } else if (data.bankAccount.length < 9 || data.bankAccount.length > 18) {
    errors.bankAccount = "Account number must be 9–18 digits";
  }
  if (!data.ifscCode.trim()) {
    errors.ifscCode = "IFSC code is required";
  } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(data.ifscCode.toUpperCase())) {
    errors.ifscCode = "Enter a valid IFSC code (e.g. SBIN0001234)";
  }
  if (!data.accountHolderName.trim()) errors.accountHolderName = "Account holder name is required";
  if (!data.storeDisplayName.trim()) errors.storeDisplayName = "Store display name is required";
  if (!data.productCategory) errors.productCategory = "Please select a product category";
  if (!data.agreedToTerms) errors.agreedToTerms = "You must agree to the terms and conditions";
  return errors;
}

// ─── Selling Registration Modal ───────────────────────────────────────────────
function SellerRegistrationModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [step, setStep] = useState(1);
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
  const [loading, setLoading] = useState(false);

  const update = (field: keyof SellerFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  };

  const validateStep = () => {
    const allErrors = validateForm(form);
    const stepFields: Record<number, (keyof SellerFormData)[]> = {
      1: ["businessName", "gstin", "panNumber", "mobileNumber", "email"],
      2: ["bankAccount", "ifscCode", "accountHolderName"],
      3: ["storeDisplayName", "productCategory", "agreedToTerms"],
    };
    const currentFields = stepFields[step];
    const stepErrors: FormErrors = {};
    currentFields.forEach((f) => { if (allErrors[f]) stepErrors[f] = allErrors[f]; });
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => s + 1); };
  const back = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    onSuccess();
  };

  const inputCls = (field: string) =>
    `w-full border rounded px-3 py-2 text-sm outline-none transition-colors ${
      errors[field] ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600]"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#131921] text-white px-6 py-4 flex items-center justify-between rounded-t-lg">
          <div>
            <h2 className="text-lg font-bold">Seller Registration</h2>
            <p className="text-xs text-gray-300">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl leading-none">✕</button>
        </div>

        {/* Progress bar */}
        <div className="flex bg-gray-100">
          {["Business Info", "Bank Details", "Store Setup"].map((label, i) => (
            <div key={i} className={`flex-1 text-center py-2 text-xs font-medium border-b-2 transition-colors ${
              step === i + 1 ? "border-[#e77600] text-[#e77600]" : step > i + 1 ? "border-green-500 text-green-600" : "border-transparent text-gray-400"
            }`}>
              {step > i + 1 ? "✓ " : `${i + 1}. `}{label}
            </div>
          ))}
        </div>

        <div className="p-6 space-y-4">
          {/* Step 1: Business Info */}
          {step === 1 && (
            <>
              <p className="text-sm text-gray-500 mb-2">Enter your business & contact details</p>
              {[
                { field: "businessName", label: "Legal Business Name", placeholder: "As per GST registration", type: "text" },
                { field: "gstin", label: "GSTIN", placeholder: "e.g. 27ABCDE1234F1Z5", type: "text" },
                { field: "panNumber", label: "PAN Number", placeholder: "e.g. ABCDE1234F", type: "text" },
                { field: "mobileNumber", label: "Mobile Number", placeholder: "10-digit mobile number", type: "tel" },
                { field: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
              ].map(({ field, label, placeholder, type }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                  <input
                    type={type}
                    value={form[field as keyof SellerFormData] as string}
                    onChange={(e) => update(field as keyof SellerFormData, field === "gstin" || field === "panNumber" || field === "ifscCode" ? e.target.value.toUpperCase() : e.target.value)}
                    placeholder={placeholder}
                    className={inputCls(field)}
                  />
                  {errors[field] && <p className="text-xs text-red-500 mt-1">{errors[field]}</p>}
                </div>
              ))}
            </>
          )}

          {/* Step 2: Bank Details */}
          {step === 2 && (
            <>
              <p className="text-sm text-gray-500 mb-2">Your earnings will be deposited here every 7 days</p>
              {[
                { field: "accountHolderName", label: "Account Holder Name", placeholder: "As per bank records", type: "text" },
                { field: "bankAccount", label: "Bank Account Number", placeholder: "9–18 digit account number", type: "text" },
                { field: "ifscCode", label: "IFSC Code", placeholder: "e.g. SBIN0001234", type: "text" },
              ].map(({ field, label, placeholder, type }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                  <input
                    type={type}
                    value={form[field as keyof SellerFormData] as string}
                    onChange={(e) => update(field as keyof SellerFormData, field === "ifscCode" ? e.target.value.toUpperCase() : e.target.value)}
                    placeholder={placeholder}
                    className={inputCls(field)}
                  />
                  {errors[field] && <p className="text-xs text-red-500 mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-xs text-blue-700">
                🔒 Your bank details are encrypted and stored securely. ShopSpark never shares your financial information.
              </div>
            </>
          )}

          {/* Step 3: Store Setup */}
          {step === 3 && (
            <>
              <p className="text-sm text-gray-500 mb-2">Set up your store profile</p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Store Display Name *</label>
                <input
                  type="text"
                  value={form.storeDisplayName}
                  onChange={(e) => update("storeDisplayName", e.target.value)}
                  placeholder="e.g. Rahul's Electronics Store"
                  className={inputCls("storeDisplayName")}
                />
                {errors.storeDisplayName && <p className="text-xs text-red-500 mt-1">{errors.storeDisplayName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Product Category *</label>
                <select
                  value={form.productCategory}
                  onChange={(e) => update("productCategory", e.target.value)}
                  className={inputCls("productCategory")}
                >
                  <option value="">Select a category</option>
                  {productCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.productCategory && <p className="text-xs text-red-500 mt-1">{errors.productCategory}</p>}
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1 border">
                <p className="font-semibold text-gray-700 mb-2">📋 Registration Summary</p>
                <p><span className="text-gray-500">Business:</span> <span className="font-medium">{form.businessName || "—"}</span></p>
                <p><span className="text-gray-500">GSTIN:</span> <span className="font-medium">{form.gstin || "—"}</span></p>
                <p><span className="text-gray-500">Email:</span> <span className="font-medium">{form.email || "—"}</span></p>
                <p><span className="text-gray-500">Mobile:</span> <span className="font-medium">{form.mobileNumber || "—"}</span></p>
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreedToTerms}
                  onChange={(e) => update("agreedToTerms", e.target.checked)}
                  className="mt-0.5"
                />
                <span className="text-xs text-gray-600">
                  I agree to ShopSpark's{" "}
                  <a href="#" className="text-[#007185] hover:underline">Seller Services Agreement</a>,{" "}
                  <a href="#" className="text-[#007185] hover:underline">Privacy Policy</a>, and confirm all information provided is accurate.
                </span>
              </label>
              {errors.agreedToTerms && <p className="text-xs text-red-500">{errors.agreedToTerms}</p>}
            </>
          )}
        </div>

        {/* Footer buttons */}
        <div className="px-6 pb-6 flex gap-3">
          {step > 1 && (
            <button onClick={back} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
              ← Back
            </button>
          )}
          {step < 3 ? (
            <button onClick={next} className="flex-1 bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] py-2 rounded text-sm font-bold transition-colors">
              Continue →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-[#FF9900] hover:bg-[#e88a00] text-white py-2 rounded text-sm font-bold transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <><span className="animate-spin">⟳</span> Registering...</>
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
