interface ShimmerButtonProps {
  text: string;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({ text }) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 py-5 font-medium text-base text-white transition-colors focus:outline-none focus:ring-2  focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 we">
      {text}
    </button>
  );
};

export default ShimmerButton;
