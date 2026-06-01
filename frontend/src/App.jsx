import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
const [customerEmail, setCustomerEmail] = useState("");
const [customerPhone, setCustomerPhone] = useState("");

 useEffect(() => {
  fetchProducts();
  fetchCustomers();
  fetchOrders();
}, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://inventory-backend-81ta.onrender.com/products"
    );

    const data = await response.json();
    setProducts(data);
  };

  const fetchCustomers = async () => {
    const response = await fetch(
      
      "https://inventory-backend-81ta.onrender.com/customers"
    );

    const data = await response.json();
    setCustomers(data);
  };
  const fetchOrders = async () => {

  const response = await fetch(
   "https://inventory-backend-81ta.onrender.com/orders"
  );

  const data = await response.json();

  setOrders(data);
};

  const createProduct = async () => {

    const response = await fetch(
     "https://inventory-backend-81ta.onrender.com/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          sku: sku,
          price: Number(price),
          stock_quantity: Number(stockQuantity),
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    fetchProducts();

    setName("");
    setSku("");
    setPrice("");
    setStockQuantity("");
  };
  
    const createCustomer = async () => {

  const response = await fetch(
    "https://inventory-backend-81ta.onrender.com/customers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: customerName,
        email: customerEmail,
        phone: customerPhone,
      }),
    }
  );

  const data = await response.json();

  alert(data.message);

  fetchCustomers();

  setCustomerName("");
  setCustomerEmail("");
  setCustomerPhone("");
};

 const deleteProduct = async (id) => {
  
  await fetch(
  `https://inventory-backend-81ta.onrender.com/products/${id}`,
  {
    method: "DELETE",
  }
);

  fetchProducts();
};


  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Inventory Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-gray-400">Products</h2>
          <p className="text-3xl font-bold mt-2">
            {products.length}
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-gray-400">Customers</h2>
          <p className="text-3xl font-bold mt-2">
            {customers.length}
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-gray-400">Orders</h2>
          <p className="text-3xl font-bold mt-2">
  {orders.length}
</p>
        </div>

      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">

        <h2 className="text-2xl font-semibold mb-4">
          Create Product
        </h2>
        <input
  type="text"
  placeholder="Search Product"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="bg-gray-800 p-3 rounded-lg mb-4 w-full"
/>

        <div className="grid gap-4">

          <input
            className="bg-gray-800 p-3 rounded-lg"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="bg-gray-800 p-3 rounded-lg"
            placeholder="SKU"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />

          <input
            className="bg-gray-800 p-3 rounded-lg"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            className="bg-gray-800 p-3 rounded-lg"
            placeholder="Stock Quantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />

          <button
            onClick={createProduct}
            className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg"
          >
            Create Product
          </button>

        </div>

      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-8">

        <h2 className="text-2xl font-semibold mb-4">
          Products List
        </h2>

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">SKU</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>

            {products
  .filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((product) => (

              <tr
                key={product.id}
                className="border-b border-gray-800"
              >
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">
  {product.stock_quantity}

  {product.stock_quantity < 5 && (
    <span className="text-red-500 font-bold ml-2">
      ⚠ LOW STOCK
    </span>
  )}
</td>
<td className="p-2">

  <button
    onClick={() =>
      deleteProduct(product.id)
    }
    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
  >
    Delete
  </button>

</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div> 
      
<div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-8">

  <h2 className="text-2xl font-semibold mb-4">
    Orders List
  </h2>

  <table className="w-full text-left">

    <thead>
      <tr className="border-b border-gray-700">
        <th className="p-2">Order ID</th>
        <th className="p-2">Customer ID</th>
        <th className="p-2">Product ID</th>
        <th className="p-2">Quantity</th>
      </tr>
    </thead>

    <tbody>

      {orders.map((order) => (

        <tr
          key={order.id}
          className="border-b border-gray-800"
        >
          <td className="p-2">{order.id}</td>
          <td className="p-2">{order.customer_id}</td>
          <td className="p-2">{order.product_id}</td>
          <td className="p-2">{order.quantity}</td>
        </tr>

      ))}

    </tbody>

  </table>

</div>



<div className="bg-gray-900 p-6 rounded-xl shadow-lg mt-8">

  <h2 className="text-2xl font-semibold mb-4">
    Customers List
  </h2>
    

  

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
            </tr>
          </thead>

          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer.id}
                className="border-b border-gray-800"
              >
                <td className="p-2">{customer.id}</td>
                <td className="p-2">{customer.full_name}</td>
                <td className="p-2">{customer.email}</td>
                <td className="p-2">{customer.phone}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default App;