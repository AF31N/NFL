"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"


const PageTransition = ({ children }) => {
    const pathname = usePathname()

    return (
        <AnimatePresence >
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                        ease:'easeInOut',
                        duration: 3,
                        x: { duration: 1 }
                      }}
className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}

            </div>
        </AnimatePresence>
    )
}

export default PageTransition
