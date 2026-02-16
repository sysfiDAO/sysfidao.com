import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Active Users", suffix: "" },
  { value: "500+", label: "DAOs Created", suffix: "" },
  { value: "$50k+", label: "Treasury Managed", suffix: "" },
  { value: "99.9%", label: "Uptime", suffix: "" },
];

const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
