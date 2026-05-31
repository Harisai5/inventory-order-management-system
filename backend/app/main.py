from fastapi import FastAPI
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import engine
from app.database import Base
from app.database import SessionLocal 
from app.models import Product, Customer, Order
from app.schemas import ProductCreate, CustomerCreate, OrderCreate
import app.models
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Inventory System Running"
    }

@app.post("/products")
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    print("STEP 1")

    new_product = Product(
        name=product.name,
        sku=product.sku,
        price=product.price,
        stock_quantity=product.stock_quantity
    )

    print("STEP 2")

    db.add(new_product)

    print("STEP 3")

    db.commit()

    print("STEP 4")

    db.refresh(new_product)

    print("STEP 5")

    return {
        "message": "Product Created",
        "product_id": new_product.id
    }    
@app.get("/products")
def get_products(
    db: Session = Depends(get_db)
):
    products = db.query(Product).all()

    return products 
@app.get("/products/{product_id}")
def get_product(
    product_id: int,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == product_id
    ).first()

    return product 

@app.post("/customers")
def create_customer(
    customer: CustomerCreate,
    db: Session = Depends(get_db)
):

    new_customer = Customer(
        full_name=customer.full_name,
        email=customer.email,
        phone=customer.phone
    )

    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)

    return {
        "message": "Customer Created",
        "customer_id": new_customer.id
    }
    


@app.get("/customers")
def get_customers(
    db: Session = Depends(get_db)
):
    return db.query(Customer).all()


@app.get("/customers/{customer_id}")
def get_customer(
    customer_id: int,
    db: Session = Depends(get_db)
):
    return db.query(Customer).filter(
        Customer.id == customer_id
    ).first() 
@app.post("/orders")
def create_order(
    order: OrderCreate,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == order.product_id
    ).first()

    if not product:
        return {"error": "Product not found"}

    if product.stock_quantity < order.quantity:
        return {"error": "Insufficient stock"}

    product.stock_quantity -= order.quantity

    new_order = Order(
        customer_id=order.customer_id,
        product_id=order.product_id,
        quantity=order.quantity
    )

    db.add(new_order)

    db.commit()

    return {
        "message": "Order Created Successfully"
    }


@app.get("/orders")
def get_orders(
    db: Session = Depends(get_db)
):
    return db.query(Order).all()
    


@app.delete("/products/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db)
):
    product = db.query(Product).filter(
        Product.id == product_id
    ).first()

    if not product:
        return {"error": "Product not found"}

    db.delete(product)
    db.commit()

    return {
        "message": "Product Deleted"
    }

    
