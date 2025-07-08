export default function SlideText() {
  const texto = "Surpreenda no Dia dos Pais com camisetas exclusivas, criativas e inesquecíveis";
  const icon = "🎁"

  return (
    <div className="overflow-hidden py-15 bg-neutral-100">
      <div className="marquee text-6xl font-bold whitespace-nowrap" style={{ color: "#ff5d2e", display: "inline-block" }}>
        <span style={{ paddingRight: "7rem" }}>{texto}</span>
        <span style={{ paddingRight: "7rem" }}>{icon}</span>
        <span style={{ paddingRight: "7rem" }}>{texto}</span>
        <span style={{ paddingRight: "7rem" }}>{icon}</span>
      </div>
    </div>
  );
}
