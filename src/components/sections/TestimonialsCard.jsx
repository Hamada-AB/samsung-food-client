// this tool to convert SVG string that is stored in an object into a react component
import parse from "html-react-parser";
import { svgIcons } from "../../data/testimonialsIcons";

export default function TestimonialsCard({ testimonial, className }) {
  const { title, content, author } = testimonial;

  return (
    <li className={className}>
      <div>
        <div className="card-heading">
          {parse(svgIcons.comma)}
          <h3>{title}</h3>
        </div>
        <p className="card-content">{content}</p>
      </div>
      <p className="card-author">{author}</p>
    </li>
  );
}
