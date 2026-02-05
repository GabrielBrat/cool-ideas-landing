import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Silva",
    role: "CEO, Loja Fitness",
    content:
      "A Cool Ideas transformou completamente nossa presença digital. Em 6 meses, triplicamos nossas vendas online. Equipe excepcional!",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Diretor, Construtora RMG",
    content:
      "Profissionalismo e criatividade de alto nível. Os leads que chegam através das campanhas são extremamente qualificados.",
    rating: 5,
  },
  {
    name: "Carla Pereira",
    role: "Sócia, Clínica Estética Belle",
    content:
      "Melhor investimento que fizemos. O branding e as redes sociais elevaram nossa marca a outro patamar. Super recomendo!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-6">
            O que nossos clientes
            <br />
            <span className="text-gradient-cool">dizem sobre nós</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista.
            Confira alguns depoimentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all shadow-card hover:shadow-lg relative">
                {/* Quote icon */}
                <div className="absolute -top-4 right-8 w-10 h-10 rounded-full gradient-cool flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-cool-orange text-cool-orange"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-teal flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
