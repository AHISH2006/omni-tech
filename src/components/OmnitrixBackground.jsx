export default function OmnitrixBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      
      {/* Animated Energy Lines */}
      <div className="absolute inset-0 omnitrix-lines"></div>

      {/* Soft Green Glow */}
      <div className="absolute inset-0 omnitrix-glow"></div>
    </div>
  );
}
