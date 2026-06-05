// ============================================================
// Datos de la página de inicio
// Separados del componente para mantener el código ordenado
// ============================================================

import {
  Flame, Award, CupSoda, Printer, Shirt, Scissors, BedDouble,
  Palette, Droplets, Users, ShoppingBag, CheckCircle2, Clock,
  Brush, PenTool, Stamp,
} from "lucide-react";

// ------------------------------------------------------------
// products  →  Catálogo de servicios personalizados
// ------------------------------------------------------------
export const products = [
  { icon: Flame,     title: "Termos Personalizados",   desc: "Termos térmicos personalizados para marcas, equipos o regalos especiales.",      img: "termos.jpeg",            tag: "TOP" },
  { icon: Award,     title: "Pijamas Médicas",          desc: "Pijamas médicas bordadas y personalizadas para profesionales de la salud.",      img: "borado de pigamas.jpeg", tag: "TOP" },
  { icon: CupSoda,   title: "Tazas Personalizadas",     desc: "Tazas únicas para detalles, negocios, cumpleaños y fechas especiales.",           img: "tasas.jpeg",             tag: "TOP" },
  { icon: Printer,   title: "DTF Profesional",          desc: "Impresión DTF con colores vivos, buena duración y acabado limpio.",               img: "dtf.jpeg",               tag: null  },
  { icon: Shirt,     title: "Camisas Personalizadas",   desc: "Camisas estampadas y bordadas con diseños exclusivos para tu marca o evento.",    img: "camisa.png",             tag: null  },
  { icon: Scissors,  title: "Bordados Personalizados",  desc: "Bordados de alta calidad en prendas, toallas y más con tu logo o diseño.",        img: "Bordados.jpeg",          tag: null  },
  { icon: BedDouble, title: "Pijamas Personalizadas",   desc: "Pijamas cómodas y personalizadas para familias, equipos y regalos.",              img: "pigamas.jpeg",           tag: null  },
  { icon: Palette,   title: "Sublimación",              desc: "Sublimación en tazas, termos, camisas y más con colores vibrantes.",               img: "sublimacion.jpeg",       tag: null  },
  { icon: Droplets,  title: "Toallas Personalizadas",   desc: "Toallas bordadas o estampadas con tu marca, ideal para negocios y eventos.",      img: "tuallas.jpeg",           tag: null  },
  { icon: Shirt,     title: "Uniformes",                desc: "Uniformes corporativos y deportivos con bordados y estampados profesionales.",     img: "camisas.png",            tag: null  },
];

// ------------------------------------------------------------
// catalogoFotos  →  Imágenes del portafolio
// ------------------------------------------------------------
export const catalogoFotos = [
  "WhatsApp Image 2026-05-16 at 5.24.38 PM (1).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.38 PM.jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.39 PM (1).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.39 PM (2).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.39 PM.jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.40 PM.jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.44 PM (1).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.44 PM (2).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.44 PM (3).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.44 PM (4).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.44 PM.jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.45 PM (1).jpeg",
  "WhatsApp Image 2026-05-16 at 5.24.45 PM.jpeg",
];

// ------------------------------------------------------------
// stats  →  Indicadores de la empresa
// ------------------------------------------------------------
export const stats = [
  { number: "500+", label: "Clientes felices",     icon: Users },
  { number: "2k+",  label: "Productos creados",    icon: ShoppingBag },
  { number: "98%",  label: "Recomendación",        icon: CheckCircle2 },
  { number: "24/7", label: "Atención al cliente",  icon: Clock },
];

// ------------------------------------------------------------
// services  →  Tipos de servicio que ofrecemos
// ------------------------------------------------------------
export const services = [
  { icon: Brush,   name: "Bordado Digital" },
  { icon: PenTool, name: "Sublimación" },
  { icon: Stamp,   name: "DTF Transfer" },
  { icon: Printer, name: "Estampado" },
];
