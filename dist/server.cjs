var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_supabase_js = require("@supabase/supabase-js");

// src/zod-schemas.ts
var import_zod = require("zod");
var categorySchema = import_zod.z.object({
  id: import_zod.z.string().min(2, "\u0627\u0644\u0645\u0639\u0631\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062D\u0631\u0641\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 / ID must be at least 2 chars"),
  name: import_zod.z.string().min(2, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064A \u0645\u0637\u0644\u0648\u0628 / Arabic Name is required"),
  name_en: import_zod.z.string().min(2, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0645\u0637\u0644\u0648\u0628 / English Name is required"),
  icon: import_zod.z.string().min(1, "\u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 / Icon is required"),
  description: import_zod.z.string().optional(),
  available: import_zod.z.boolean().default(true)
});
var productSpecSchema = import_zod.z.object({
  label: import_zod.z.string().min(1, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628 / Label is required"),
  value: import_zod.z.string().min(1, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 / Value is required")
});
var productSchema = import_zod.z.object({
  id: import_zod.z.string().min(2, "\u0627\u0644\u0645\u0639\u0631\u0641 \u0645\u0637\u0644\u0648\u0628 / ID is required"),
  category_id: import_zod.z.string().min(1, "\u0627\u0644\u0641\u0626\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 / Category is required"),
  name: import_zod.z.string().min(2, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064A \u0645\u0637\u0644\u0648\u0628 / Arabic Name is required"),
  name_en: import_zod.z.string().min(2, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0645\u0637\u0644\u0648\u0628 / English Name is required"),
  description: import_zod.z.string().min(10, "\u0627\u0644\u0648\u0635\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 10 \u062D\u0631\u0648\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 / Description must be at least 10 chars"),
  price: import_zod.z.number().positive("\u0627\u0644\u0633\u0639\u0631 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631 / Price must be greater than zero"),
  old_price: import_zod.z.number().positive("\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0642\u062F\u064A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u064A \u0648\u0644\u0643\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631").nullable().optional(),
  rating: import_zod.z.number().min(0).max(5).default(5),
  reviews_count: import_zod.z.number().int().nonnegative().default(0),
  image_url: import_zod.z.string().url("\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D / Invalid Image URL"),
  stock: import_zod.z.number().int().nonnegative("\u0627\u0644\u0643\u0645\u064A\u0629 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0633\u0627\u0644\u0628\u0629 / Stock must be >= 0"),
  is_featured: import_zod.z.boolean().default(false),
  features: import_zod.z.array(import_zod.z.string()).default([]),
  specs: import_zod.z.array(productSpecSchema).default([])
});
var orderItemSchema = import_zod.z.object({
  product_id: import_zod.z.string().min(1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0637\u0644\u0648\u0628"),
  product_name: import_zod.z.string().min(1, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0637\u0644\u0648\u0628"),
  price: import_zod.z.number().positive("\u0627\u0644\u0633\u0639\u0631 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"),
  quantity: import_zod.z.number().int().positive("\u0627\u0644\u0643\u0645\u064A\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631 / Quantity must be positive")
});
var orderSchema = import_zod.z.object({
  customer_name: import_zod.z.string().min(3, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u0645\u0637\u0644\u0648\u0628 / Full Name is required"),
  email: import_zod.z.string().email("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D / Invalid Email Address"),
  phone: import_zod.z.string().min(9, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 9 \u0623\u0631\u0642\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 / Phone must be at least 9 digits"),
  address: import_zod.z.string().min(5, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A \u0645\u0637\u0644\u0648\u0628 / Address is required"),
  city: import_zod.z.string().min(2, "\u064A\u0631\u062C\u0649 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0645\u062F\u064A\u0646\u0629 / Please select a valid city"),
  payment_method: import_zod.z.enum(["cod", "card"]).default("cod"),
  items: import_zod.z.array(orderItemSchema).min(1, "\u064A\u062C\u0628 \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0644\u0637\u0644\u0628 / Order must have items")
});
var settingsSchema = import_zod.z.object({
  key: import_zod.z.string(),
  value: import_zod.z.record(import_zod.z.string(), import_zod.z.any())
});
var guestCheckoutSchema = import_zod.z.object({
  name: import_zod.z.string().min(3, "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628 (\u062B\u0646\u0627\u0626\u064A \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644)"),
  phone: import_zod.z.string().regex(/^(07|5)\d{8,9}$/, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u060C \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 07 \u0623\u0648 5 \u0648\u064A\u062A\u0643\u0648\u0646 \u0645\u0646 10-11 \u0623\u0631\u0642\u0627\u0645\u064B\u0627"),
  governorate: import_zod.z.string().min(2, "\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0644\u0634\u062D\u0646"),
  city: import_zod.z.string().min(2, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0644\u0634\u062D\u0646"),
  address: import_zod.z.string().min(5, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A \u0645\u0637\u0644\u0648\u0628 \u0644\u0644\u0634\u062D\u0646 (5 \u062D\u0631\u0648\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644)"),
  nearbyLandmark: import_zod.z.string().optional(),
  notes: import_zod.z.string().optional(),
  paymentMethod: import_zod.z.literal("cod"),
  items: import_zod.z.array(import_zod.z.object({
    productId: import_zod.z.string().min(1),
    productName: import_zod.z.string().min(1),
    price: import_zod.z.number().positive(),
    quantity: import_zod.z.number().int().positive()
  })).min(1, "\u064A\u062C\u0628 \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0644\u0637\u0644\u0628")
});

// server.ts
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "10mb" }));
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https: http:; connect-src 'self' ws: wss: https://*.supabase.co wss://*.supabase.co https://api.telegram.org;"
  );
  next();
});
app.use((req, res, next) => {
  if (req.method === "POST") {
    const origin = req.headers.origin;
    const referer = req.headers.referer;
    const host = req.headers.host || "localhost:3000";
    if (origin) {
      const originUrl = new URL(origin);
      const isLocal = originUrl.hostname === "localhost" || originUrl.hostname === "127.0.0.1";
      if (!isLocal && originUrl.host !== host && !originUrl.host.includes("run.app")) {
        return res.status(403).json({ error: "CSRF protection: Invalid request origin" });
      }
    } else if (referer) {
      const refererUrl = new URL(referer);
      const isLocalRef = refererUrl.hostname === "localhost" || refererUrl.hostname === "127.0.0.1";
      if (!isLocalRef && refererUrl.host !== host && !refererUrl.host.includes("run.app")) {
        return res.status(403).json({ error: "CSRF protection: Invalid request referer" });
      }
    }
  }
  next();
});
var rateLimitStore = /* @__PURE__ */ new Map();
function rateLimiter(limit, windowMs) {
  return (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "anonymous";
    const now = Date.now();
    let record = rateLimitStore.get(ip);
    if (!record || now > record.resetTime) {
      record = { count: 1, resetTime: now + windowMs };
      rateLimitStore.set(ip, record);
      return next();
    }
    record.count++;
    if (record.count > limit) {
      const remainingSecs = Math.ceil((record.resetTime - now) / 1e3);
      return res.status(429).json({
        error: `\u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631 \u0642\u0644\u064A\u0644\u0627\u064B \u0642\u0628\u0644 \u0645\u062D\u0627\u0648\u0644\u0629 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F. (\u062D\u0638\u0631 \u0645\u0624\u0642\u062A \u0644\u0640 ${remainingSecs} \u062B\u0627\u0646\u064A\u0629)`
      });
    }
    next();
  };
}
var BOT_TOKEN = process.env.VITE_BOT_TOKEN || process.env.BOT_TOKEN || "";
var CHAT_ID = process.env.VITE_CHAT_ID || process.env.CHAT_ID || "";
var SUPABASE_URL = process.env.VITE_SUPABASE_URL || "";
var SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "";
var SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || "";
var supabase = (0, import_supabase_js.createClient)(
  SUPABASE_URL || "https://placeholder.supabase.co",
  SUPABASE_ANON_KEY || "placeholder"
);
var serviceSupabase = (0, import_supabase_js.createClient)(
  SUPABASE_URL || "https://placeholder.supabase.co",
  SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY || "placeholder"
);
function isSupabaseConfigured() {
  return !!SUPABASE_URL && !!SUPABASE_ANON_KEY && SUPABASE_URL !== "https://placeholder.supabase.co";
}
async function sendTelegramWithRetry(url, payload, retries = 3, delay = 1e3) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errText = await response.text().catch(() => "Unknown");
      throw new Error(`Telegram returned status ${response.status}: ${errText}`);
    }
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Telegram notification retry in ${delay}ms... (${retries} attempts left). Error:`, error);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return sendTelegramWithRetry(url, payload, retries - 1, delay * 2);
    }
    throw error;
  }
}
app.post("/api/upload-image", rateLimiter(10, 15 * 60 * 1e3), async (req, res) => {
  try {
    const { fileName, contentType, data } = req.body || {};
    if (!fileName || !data) {
      return res.status(400).json({ error: "Missing upload payload." });
    }
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || SUPABASE_SERVICE_ROLE_KEY === "placeholder") {
      return res.status(500).json({
        error: "The server is missing SUPABASE_SERVICE_ROLE_KEY. Add it to the server environment and restart the app."
      });
    }
    const safeName = String(fileName).replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = `products/${Date.now()}_${safeName}`;
    const base64Data = String(data).includes(",") ? String(data).split(",")[1] : String(data);
    const buffer = Buffer.from(base64Data, "base64");
    const { error } = await serviceSupabase.storage.from("images").upload(filePath, buffer, {
      contentType: contentType || "application/octet-stream",
      cacheControl: "3600",
      upsert: false
    });
    if (error) {
      console.error("Supabase server upload error:", error);
      return res.status(500).json({ error: `Upload failed: ${error.message}` });
    }
    const { data: { publicUrl } } = serviceSupabase.storage.from("images").getPublicUrl(filePath);
    return res.json({ publicUrl });
  } catch (error) {
    console.error("Image upload endpoint error:", error);
    return res.status(500).json({ error: error.message || "Unexpected upload error." });
  }
});
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow: /\nSitemap: /sitemap.xml");
});
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${req.headers.host || "omen-store.shop"}/</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  res.send(sitemap);
});
app.post("/api/checkout", rateLimiter(5, 15 * 60 * 1e3), async (req, res) => {
  try {
    const validationResult = guestCheckoutSchema.safeParse(req.body);
    if (!validationResult.success) {
      const errorMsg = validationResult.error?.issues?.map((e) => e.message).join(", ") || "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u062E\u0644\u0629";
      console.error("Validation failed:", validationResult.error);
      return res.status(400).json({ error: errorMsg });
    }
    const orderData = validationResult.data;
    if (!Array.isArray(orderData.items) || orderData.items.length === 0) {
      return res.status(400).json({ error: "\u064A\u062C\u0628 \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0644\u0637\u0644\u0628" });
    }
    const orderId = "OW-" + Math.floor(1e5 + Math.random() * 9e5);
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
    const itemsTotal = orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = 5e3;
    const grandTotal = itemsTotal + shippingFee;
    if (isSupabaseConfigured()) {
      const combinedAddressDetails = `\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629: ${orderData.governorate} | \u0627\u0644\u0639\u0646\u0648\u0627\u0646: ${orderData.address} | \u0627\u0644\u0645\u0639\u0644\u0645 \u0627\u0644\u0642\u0631\u064A\u0628: ${orderData.nearbyLandmark || "\u0644\u0627 \u064A\u0648\u062C\u062F"} | \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0645\u0646\u062F\u0648\u0628: ${orderData.notes || "\u0644\u0627 \u064A\u0648\u062C\u062F"}`;
      const { error: orderError } = await supabase.from("orders").insert([
        {
          id: orderId,
          customer_name: orderData.name,
          customer_phone: orderData.phone,
          address_details: combinedAddressDetails,
          city: orderData.city,
          items: orderData.items.map((item) => ({
            productId: item.productId,
            productName: item.productName,
            price: item.price,
            quantity: item.quantity
          })),
          total_amount: grandTotal,
          shipping_fee: shippingFee,
          status: "pending",
          created_at: createdAt
        }
      ]);
      if (orderError) {
        console.error("Supabase Order Insertion failed:", orderError);
        throw new Error("\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0641\u0638 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0641\u064A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.");
      }
      for (const item of orderData.items) {
        const { data: prodData } = await supabase.from("products").select("stock").eq("id", item.productId).maybeSingle();
        if (prodData) {
          const currentStock = prodData.stock || 0;
          const newStock = Math.max(0, currentStock - item.quantity);
          await supabase.from("products").update({ stock: newStock }).eq("id", item.productId);
        }
      }
    } else {
      console.warn("Supabase is not configured. Saving order locally in server logs only.");
    }
    if (BOT_TOKEN && CHAT_ID) {
      const dateObj = new Date(createdAt);
      const dateStr = dateObj.toLocaleDateString("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
      const timeStr = dateObj.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const itemsText = orderData.items.map((item) => `\u2022 <b>${item.productName}</b> (\u0627\u0644\u0639\u062F\u062F: ${item.quantity}) (\u0627\u0644\u0633\u0639\u0631: ${item.price.toLocaleString()} \u062F.\u0639)`).join("\n");
      const telegramMsg = `
<b>\u{1F514} \u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645\u0647 \u0628\u0646\u062C\u0627\u062D \u0643\u0632\u0627\u0626\u0631!</b>

<b>\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628:</b> <code>${orderId}</code>
<b>\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644:</b> ${orderData.name}
<b>\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644:</b> ${orderData.phone}
<b>\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629:</b> ${orderData.governorate}
<b>\u0627\u0644\u0645\u062F\u064A\u0646\u0629:</b> ${orderData.city}
<b>\u0627\u0644\u0639\u0646\u0648\u0627\u0646:</b> ${orderData.address}
<b>\u0645\u0639\u0644\u0645 \u0642\u0631\u064A\u0628:</b> ${orderData.nearbyLandmark || "\u0644\u0627 \u064A\u0648\u062C\u062F"}
<b>\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644:</b> ${orderData.notes || "\u0644\u0627 \u064A\u0648\u062C\u062F"}

<b>\u{1F4E6} \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629:</b>
${itemsText}

<b>\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0643\u0644\u064A:</b> ${grandTotal.toLocaleString()} \u062F.\u0639
<b>\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628:</b> \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 (Pending)
<b>\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639:</b> \u0627\u0644\u062F\u0641\u0639 \u0639\u0646\u062F \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 (Cash On Delivery)
<b>\u0627\u0644\u062A\u0627\u0631\u064A\u062E:</b> ${dateStr}
<b>\u0627\u0644\u0648\u0642\u062A:</b> ${timeStr}
`.trim();
      const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const payload = {
        chat_id: CHAT_ID,
        text: telegramMsg,
        parse_mode: "HTML"
      };
      try {
        await sendTelegramWithRetry(telegramUrl, payload);
      } catch (tgErr) {
        console.error("Telegram notification failed after all retries:", tgErr);
      }
    } else {
      console.warn("Telegram BOT_TOKEN or CHAT_ID is missing. Notification skipped.");
    }
    const responseOrder = {
      id: orderId,
      customerName: orderData.name,
      email: `guest-${orderId}@omen-store.shop`,
      phone: orderData.phone,
      governorate: orderData.governorate || "",
      city: orderData.city,
      address: orderData.address,
      nearbyLandmark: orderData.nearbyLandmark || void 0,
      notes: orderData.notes || void 0,
      totalAmount: grandTotal,
      paymentMethod: "cod",
      status: "pending",
      createdAt,
      items: Array.isArray(orderData.items) ? orderData.items : []
    };
    return res.status(200).json({
      success: true,
      order: responseOrder
    });
  } catch (error) {
    console.error("General API checkout handler error:", error);
    return res.status(500).json({
      error: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639 \u0623\u062B\u0646\u0627\u0621 \u0645\u0639\u0627\u0644\u062C\u0629 \u0637\u0644\u0628\u0643."
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\u{1F680} Store Server successfully running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
