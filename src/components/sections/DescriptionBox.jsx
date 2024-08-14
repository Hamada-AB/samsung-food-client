export default function DescriptionBox({ h2, p, href, aText, className }) {
  return (
    <div className={className}>
      <h2 className="descBox-h2">{h2}</h2>
      <p>{p}</p>
      <a href={href} className="section-link">
        {aText}
      </a>
    </div>
  );
}
