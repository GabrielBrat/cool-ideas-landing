import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-extrabold text-white mb-4">
              COOL<span className="text-gradient-cool">ideas</span>
            </div>
            <p className="text-white/60 max-w-sm mb-6">
              Agência de marketing digital em Itajaí - SC. Transformamos ideias
              criativas em resultados reais para sua marca.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/coolideas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/coolideas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/coolideas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-3">
              {["Serviços", "Resultados", "Depoimentos", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/60">
              <li>(47) 99999-9999</li>
              <li>contato@coolideas.com.br</li>
              <li>Itajaí, Santa Catarina</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Cool Ideas. Todos os direitos reservados.
          </p>
          <p className="text-white/50 text-sm">
            Feito com 💚 em Itajaí - SC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
