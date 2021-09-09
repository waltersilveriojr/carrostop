import ProductCard from "components/ProductCard";
import Search from "components/Search";
import "./styles.css";

const Catalog = () => {
  const listaproducts = [
    {
      id: 1,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi.",
    },

    {
      id: 2,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },

    {
      id: 3,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },

    {
      id: 4,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },

    {
      id: 5,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },
    {
      id: 6,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },

    {
      id: 7,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },
    {
      id: 8,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },
    {
      id: 9,
      name: "Audi Supra TT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi",
    },
  ];

  return (
    <div className="container my-4 catalog-container">
      <div>
        <div className="base-card catalog-card-search">
          <Search />
        </div>
        <div className="row">
          {listaproducts.map((product) => (
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
