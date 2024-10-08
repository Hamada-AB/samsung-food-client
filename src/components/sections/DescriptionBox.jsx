import arrowLink from "../../assets/icons/arrowLink.svg";

export default function DescriptionBox({ h2, p, href, aText, className }) {
  return (
    <div className={className}>
      <h2 className="descBox-h2">{h2}</h2>
      <p>{p}</p>
      <div>
        <a href={href} className="section-link">
          {aText}
        </a>
        <span className="arrow-icon">
          <img src={arrowLink} alt="arrow icon." />
        </span>
      </div>
    </div>
  );
}
