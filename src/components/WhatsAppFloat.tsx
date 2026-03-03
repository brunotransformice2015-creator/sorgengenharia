import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5511999231384?text=Quero%20fazer%20um%20or%C3%A7amento";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
    </motion.a>
  );
};

export default WhatsAppFloat;
