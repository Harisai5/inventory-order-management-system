# Inventory Order Management System

A full-stack Inventory Order Management System designed to manage Products, Customers, and Orders through a modern web interface and RESTful APIs. The application provides inventory tracking, customer management, and order processing capabilities with a scalable architecture using React, FastAPI, PostgreSQL, Docker, Render, and Netlify.

---

## Project Overview

This project demonstrates the development and deployment of a complete inventory management solution using modern full-stack technologies.

### Key Features

- Product Management (Create, View, Delete Products)
- Customer Management (Create, View Customers)
- Order Management (Create, View Orders)
- Inventory Tracking
- REST API Documentation using Swagger UI
- PostgreSQL Database Integration
- Docker Containerization
- Cloud Deployment using Render and Netlify

---

# Live Project Links

### Frontend Application
https://inventory-order-management.netlify.app
<img width="1917" height="988" alt="image" src="https://github.com/user-attachments/assets/5df6daa3-5c30-4fdc-a05f-51742e31162e" />
<img width="1912" height="933" alt="image" src="https://github.com/user-attachments/assets/c908553b-dfc2-46fa-869f-c01bfc4731f4" />



### Backend API
https://inventory-backend-81ta.onrender.com

### API Documentation (Swagger UI)
https://inventory-backend-81ta.onrender.com/docs
<img width="1916" height="976" alt="image" src="https://github.com/user-attachments/assets/945b7968-42bd-4383-9cf6-7599168b5358" />


### GitHub Repository
https://github.com/Harisai5/inventory-order-management-system

### Docker Hub Image
https://hub.docker.com/r/harisai1h/inventory-system
<img width="1914" height="952" alt="image" src="https://github.com/user-attachments/assets/10a1f18b-44dc-495d-8478-88fdb63a32c6" />


---

# System Architecture

```text
┌─────────────────────┐
│      Frontend       │
│      React.js       │
│      Netlify        │
└──────────┬──────────┘
           │ REST API
           ▼
┌─────────────────────┐
│      Backend        │
│      FastAPI        │
│      Render         │
└──────────┬──────────┘
           │ SQLAlchemy ORM
           ▼
┌─────────────────────┐
│     PostgreSQL      │
│      Render DB      │
└─────────────────────┘

           ▲
           │
┌─────────────────────┐
│      Docker         │
│ Containerized App   │
└─────────────────────┘
## Technology Stack

### Frontend
The frontend of the application is built using **React.js** and **Vite**, providing a fast and responsive user interface. Axios is used for API communication between the frontend and backend services, while modern CSS is used for styling and layout management.

### Backend
The backend is developed using **FastAPI**, a high-performance Python web framework for building RESTful APIs. The application uses **Pydantic** for data validation and **SQLAlchemy ORM** for database operations and object-relational mapping.

### Database
The project uses **PostgreSQL** as the production database, hosted on **Render PostgreSQL**. PostgreSQL provides reliable, scalable, and persistent data storage for products, customers, and orders.

### Containerization
The backend application is fully containerized using **Docker**, ensuring consistent deployment across different environments. The Docker image is published to **Docker Hub** for easy distribution and deployment.

### Deployment & Hosting
The frontend is deployed on **Netlify**, while the backend API is hosted on **Render**. The PostgreSQL database is managed through **Render PostgreSQL**, creating a complete cloud-based deployment architecture.

### Version Control
**Git** and **GitHub** are used for source code management, version control, collaboration, and continuous deployment workflows.
<img width="916" height="363" alt="image" src="https://github.com/user-attachments/assets/a69bdec8-03c4-4a4b-906d-315165ad07b6" />
<img width="955" height="790" alt="image" src="https://github.com/user-attachments/assets/34595a45-340c-4882-8c25-9bb0d5524952" />
<img width="1147" height="503" alt="image" src="https://github.com/user-attachments/assets/e5a4d0bd-2dcc-4370-981f-dd0eaa8f7643" />

Harisai

GitHub:
https://github.com/Harisai5
