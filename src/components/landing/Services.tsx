import { motion } from "framer-motion";
import { Megaphone, Palette, Globe, BarChart3, Video, Target } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding",
    description:
      "Criamos identidades visuais memoráveis que destacam sua marca e conectam com seu público-alvo.",
  },
  {
    icon: Globe,
    title: "Redes Sociais",
    description:
      "Gestão completa das suas redes sociais com conteúdo estratégico que gera engajamento e conversão.",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description:
      "Campanhas otimizadas em Google Ads e Meta Ads para atrair leads qualificados para seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description:
      "Estratégias completas de marketing digital focadas em resultados mensuráveis e ROI.",
  },
  {
    icon: Video,
    title: "Produção de Conteúdo",
    description:
      "Vídeos, fotos e materiais de alta qualidade que contam a história da sua marca.",
  },
  {
    icon: Megaphone,
    title: "Mídia Offline",
    description:
      "Ações integradas em rádio, TV e mídia impressa para amplificar sua presença.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-6">
            Soluções completas para
            <br />
            <span className="text-gradient-cool">sua marca crescer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da estratégia à execução, oferecemos tudo que sua empresa precisa
            para dominar o mercado digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl gradient-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
