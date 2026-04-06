import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionHeader({
  title,
  link,
  showLink = true,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {/* タイトル */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-thin tracking-wide"
      >
        {title}
      </motion.h2>

      {/* view more */}
      {showLink && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href={link}
            className="relative font-en font-light text-base group"
          >
            view more
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
