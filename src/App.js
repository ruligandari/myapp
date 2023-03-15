import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduct />
      <ProductInfo isDiscount="coming" category="LEBARAN" name="Adadeh" />
    </div>
  );
}
function FotoProduct() {
  return (
    <div className="Foto">
      <img src="sneaker.jpeg" alt="Foto" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p> Diskon 50% Off</p>;
  } else if (isDiscount == "coming") {
    return <p>akan Ada Diskon</p>;
  }
}

function ProductInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = [
    "Tidak kusut Terkena Air",
    "Tidak kusut Jika diinjak",
    "Tidak akan rusak",
    "Tidak kusut Terkena Air",
    "Tidak kusut Jika diinjak",
    "Tidak akan rusak",
  ];
  const listBenefits = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);
  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR 700.000</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="Info">
        Sneaker pinky swag ini sangat cocok untuk kamu yang ingin tampil
      </p>
      {listBenefits}
      <a onClick={(e) => Tambahcart(name, e)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

function Tambahcart(e) {
  return console.log("Tambah cart " + e);
}
export default App;
