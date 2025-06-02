"use client";

import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl z-50"
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <nav className="px-4 py-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 