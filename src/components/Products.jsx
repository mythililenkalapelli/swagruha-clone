import kaju from "../assets/kaju-katli.jpg";
import murukku from "../assets/murukku.jpg";
import pickle from "../assets/mango-pickle.jpg";

function Products({ addToCart }) {

  const products = [
    { name: "Kaju Katli", price: "₹500", image: kaju },
    { name: "Murukku", price: "₹300", image: murukku },
    { name: "Mango Pickle", price: "₹250", image: pickle }
  ];

  return (
    <div style={{ padding: "50px" }}>

      <h2 style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "28px"
      }}>
        Popular Products
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        maxWidth: "900px",
        margin: "auto"
      }}>

        {products.map((product, index) => (

          <div key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "pointer"
            }}

            onMouseOver={(e)=> e.currentTarget.style.transform="scale(1.05)"}
            onMouseOut={(e)=> e.currentTarget.style.transform="scale(1)"}
          >

            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <h3 style={{ marginTop: "10px" }}>
              {product.name}
            </h3>

            <p>{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "8px 15px",
                background: "#e11d48",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;