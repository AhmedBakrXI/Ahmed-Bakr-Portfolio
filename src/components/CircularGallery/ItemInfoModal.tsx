import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type GalleryItemInfo = {
  src: React.ReactNode
  label: string
  yoe?: number
  about?: string
}

interface ItemInfoModalProps {
  open: boolean
  item?: GalleryItemInfo
  onClose: () => void
}

export function ItemInfoModal({ open, item, onClose }: ItemInfoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none"
          />

          {/* Modal card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-[92vw] max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl"
            initial={{ scale: 0.96, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl text-accent">
                {item?.src}
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-white">
                  {item?.label}
                </h3>
                {typeof item?.yoe === 'number' && (
                  <p className="mt-1 text-sm text-white/70">
                    <span className="font-medium text-white">Years of experience:</span> {item?.yoe}
                  </p>
                )}
                {item?.about && (
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    {item.about}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-md bg-accent/90 px-4 py-2 text-sm font-medium text-black hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-black/30"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )}

export default ItemInfoModal
