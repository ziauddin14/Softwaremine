"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "Next.js", color: "from-zinc-600 to-zinc-400" },
  { name: "React", color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", color: "from-green-600 to-emerald-500" },
  { name: "MongoDB", color: "from-green-500 to-lime-500" },
  { name: "Supabase", color: "from-emerald-500 to-teal-500" },
  { name: "Vercel", color: "from-zinc-600 to-zinc-400" },
  { name: "OpenAI", color: "from-emerald-400 to-teal-400" },
  { name: "Cloud Architecture", color: "from-blue-500 to-indigo-500" },
]

export function TechStack() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology We Use
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern, battle-tested technologies for scalable products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative px-6 py-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
