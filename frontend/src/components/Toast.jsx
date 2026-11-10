import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ toast }) {
  return (
    <div aria-live="polite" className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className={`rounded-xl px-5 py-3 text-sm font-medium text-white shadow-xl ${toast.type === "error" ? "bg-red-600" : "bg-emerald-600"}`}
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
