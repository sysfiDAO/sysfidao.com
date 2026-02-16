import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90 hover:scale-105",
    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    outline:
      "border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
