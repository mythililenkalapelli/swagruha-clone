function Cart({ cart }) {

    return (
      <div style={{ padding: "40px" }}>
  
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Your Cart
        </h2>
  
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cart is empty</p>
        ) : (
  
          <div style={{
            maxWidth: "600px",
            margin: "auto"
          }}>
  
            {cart.map((item, index) => (
  
              <div key={index} style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px"
              }}>
  
                <span>{item.name}</span>
                <span>{item.price}</span>
  
              </div>
  
            ))}
  
          </div>
  
        )}
  
      </div>
    )
  }
  
  export default Cart