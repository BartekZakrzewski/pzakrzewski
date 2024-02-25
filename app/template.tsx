"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Template({
    children
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, 
                transition: { 
                ease: "easeOut",
                duration: 1,
                }
            }}
            exit={{ opacity: 0,
                transition: { 
                ease: "easeOut",
                duration: 1,
                }
            }}
             className={`z-0 pt-12 md:pt-0`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
        
    )
}