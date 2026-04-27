import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const ResetConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-[#1e1e1e] w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border border-red-100 dark:border-red-900/20 relative z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute left-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mt-4">
              {/* Warning Icon */}
              <motion.div
                initial={{ scale: 0.5, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-16 h-16 bg-red-50 dark:bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </motion.div>

              <h2 className="text-xl font-bold text-textMain dark:text-white mb-2">
                هل أنت متأكد؟
              </h2>
              <p className="text-textSecondary dark:text-gray-400 text-sm leading-relaxed mb-8">
                سيتم حذف جميع تقدمك الحالي في الحفظ والمراجعة. لا يمكن التراجع عن هذه الخطوة.
              </p>

              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onConfirm}
                  className="w-full bg-red-500 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-red-500/20 transition-all"
                >
                  نعم، أعد التعيين
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full bg-secondary dark:bg-white/5 text-textMain dark:text-white py-3.5 rounded-xl font-bold text-base transition-all"
                >
                  تراجع
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResetConfirmModal;
