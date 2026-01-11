import { useNavigate } from "react-router-dom";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
  children?: React.ReactNode;
  variantParam?: "photo" | "benefits" | "modal";
};

export default function StartFreeButton({
  size = "md",
  variant = "solid",
  className = "",
  children,
  variantParam,
}: Props) {
  const navigate = useNavigate();

  const sizeClasses =
    size === "sm"
      ? "text-[13px] px-3 py-1.5"
      : size === "lg"
      ? "text-[15px] px-5 py-2.5"
      : "text-[14px] px-4 py-2";

  const variantClasses =
    variant === "solid"
      ? "bg-[#0B5FFF] text-white font-semibold shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B5FFF] focus-visible:ring-offset-2 focus-visible:outline-none"
      : "bg-transparent text-white border-2 border-white font-semibold hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none";

  function handleClick() {
    const path = variantParam ? `/signup?v=${variantParam}` : "/signup";
    navigate(path);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-md inline-block text-center ${sizeClasses} ${variantClasses} ${className}`}
      data-testid="button-start-free"
    >
      {children || "Get Started Free"}
    </button>
  );
}
