import { LazyLoadImage } from "react-lazy-load-image-component";
import as from "../images//New folder/as.jpg";
import vat from "../images/New folder/vat.jpg";
import tax from "../images/New folder/tax.jpg";
import pen from "../images/New folder/pen.jpg";
import pay from "../images/New folder/pay.jpg";
import work from "../images/New folder/work.jpg";
const Service = () => {
  const data = [
    {
      image: as,
      title: "Self-Assesmemnt ",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: tax,
      title: "Company Accounts  ",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: work,
      title: "CIS & IR35",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: pay,
      title: "Payroll ",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: pen,
      title: "Pension",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: vat,
      title: "Value Added Tax",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: tax,
      title: "Bookkeeping & Secretarial Services",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  return (
    <div className="mainterasab">
      {data.map((x, i) => {
        const { title, des, image } = x;
        return (
          <div
            className={`${i % 2 === 1 ? "lopps" : "koimilgaya"}`}
            key={title}
          >
            <h1>{title}</h1>
            <div className={`${i % 2 === 1 ? "skjskssjsjk" : "askdejne"}`}>
              <LazyLoadImage src={image} alt={image} />
              <p>{des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Service;
