import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { c as content, S as SkeletonImage } from "../entry-server.js";
import { ZoomIn, Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import "react-dom/server";
function Gallery() {
  var _a;
  const { gallery } = content;
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const lightboxCloseRef = useRef(null);
  const lightboxRef = useRef(null);
  const filteredItems = activeFilter === "Tout" ? gallery.items : gallery.items.filter((item) => item.category === activeFilter);
  useEffect(() => {
    var _a2;
    if (lightboxIdx === null) return;
    (_a2 = lightboxCloseRef.current) == null ? void 0 : _a2.focus();
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIdx(null);
        setZoomLevel(1);
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Tab" && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll("button, [tabindex]");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIdx, filteredItems.length]);
  const prevImage = () => {
    setLightboxIdx((prev) => prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1);
    setZoomLevel(1);
  };
  const nextImage = () => {
    setLightboxIdx((prev) => prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0);
    setZoomLevel(1);
  };
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (zoomLevel > 1) return;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const SWIPE_THRESHOLD = 50;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setLightboxIdx(null);
  };
  return /* @__PURE__ */ jsxs("section", { id: "gallery", className: "py-24 md:py-32 bg-white dark:bg-bg-primary", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase", children: gallery.badge }) }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4", children: gallery.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto", children: gallery.subtitle })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          className: "flex flex-wrap items-center justify-center gap-2 mb-12",
          children: gallery.filters.map((filter) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleFilterChange(filter),
              className: `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? "text-slate-900 shadow-md" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-gold-400/50"}`,
              children: [
                activeFilter === filter && /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    layoutId: "activeFilterBg",
                    className: "absolute inset-0 bg-gold-500 rounded-full",
                    transition: { type: "spring", stiffness: 400, damping: 30 }
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "relative z-10", children: filter })
              ]
            },
            filter
          ))
        }
      ),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          className: "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]",
          children: filteredItems.map((item, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: {
                duration: 0.4,
                delay: index * 0.06,
                type: "spring",
                stiffness: 120
              },
              className: `group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`,
              onClick: () => setLightboxIdx(index),
              whileHover: { scale: 1.02 },
              children: [
                /* @__PURE__ */ jsx(
                  SkeletonImage,
                  {
                    src: item.src,
                    alt: item.alt,
                    containerClassName: "w-full h-full",
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                    width: 800,
                    height: 600,
                    quality: 85,
                    priority: index < 4
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm drop-shadow-lg", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-xs drop-shadow-md", children: item.location })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "bg-black/50 backdrop-blur-sm p-3 rounded-full", children: /* @__PURE__ */ jsx(ZoomIn, { className: "w-6 h-6 text-white" }) }) })
              ]
            },
            item.src
          ))
        },
        activeFilter
      ) }),
      filteredItems.length === 0 && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "text-center py-16 text-slate-400 dark:text-slate-600",
          children: /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Aucune réalisation dans cette catégorie" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: (_a = content.social) == null ? void 0 : _a.instagram,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 px-8 py-3 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-gold-400 hover:text-gold-600 dark:hover:text-gold-400 transition-all",
          children: [
            /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4" }),
            "Suivre nos chantiers sur Instagram"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: lightboxIdx !== null && filteredItems[lightboxIdx] && /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: lightboxRef,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Galerie photo en plein écran",
        onClick: () => {
          setLightboxIdx(null);
          setZoomLevel(1);
        },
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              ref: lightboxCloseRef,
              onClick: () => {
                setLightboxIdx(null);
                setZoomLevel(1);
              },
              className: "absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-50 focus-ring",
              "aria-label": "Fermer",
              children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-white" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-xs font-medium z-50", children: [
            lightboxIdx + 1,
            " / ",
            filteredItems.length
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                prevImage();
              },
              className: "absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all hover:scale-110 z-50 focus-ring",
              "aria-label": "Image précédente",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6 text-white" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                nextImage();
              },
              className: "absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-all hover:scale-110 z-50 focus-ring",
              "aria-label": "Image suivante",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 text-white" })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { scale: 0.9 },
              animate: { scale: zoomLevel },
              transition: { duration: 0.3 },
              className: "relative w-full flex items-center justify-center px-12 sm:px-16",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: filteredItems[lightboxIdx].src,
                    alt: filteredItems[lightboxIdx].alt,
                    className: "max-w-full max-h-[80vh] rounded-lg object-contain md:cursor-zoom-in block mx-auto",
                    onClick: () => {
                      if (!("ontouchstart" in window)) {
                        setZoomLevel((prev) => prev === 1 ? 2 : 1);
                      }
                    },
                    loading: "eager"
                  }
                ),
                zoomLevel === 1 && /* @__PURE__ */ jsxs("div", { className: "hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm items-center gap-2 pointer-events-none", children: [
                  /* @__PURE__ */ jsx(ZoomIn, { className: "w-4 h-4" }),
                  "Cliquez pour zoomer"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 text-center text-white pointer-events-none w-full px-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-base md:text-lg", children: filteredItems[lightboxIdx].title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm", children: filteredItems[lightboxIdx].location }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs mt-1 md:hidden", children: "← Glissez pour naviguer →" })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  Gallery as default
};
