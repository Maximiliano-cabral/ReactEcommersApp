# 🛒 E-commerce

## 📋 Descripción
Plataforma de comercio electrónico moderna y escalable construida con React. Este proyecto permite a los usuarios navegar productos, gestionar carritos de compras.

## ✨ Características Principales
- **Catálogo de Productos**: Búsqueda, filtrado y categorización de productos
- **Carrito de Compras**: Gestión dinámica de productos y cantidades
- **Proceso de Compra**: Formulario de datos y generación de órdenes
- **Responsive Design**: Interfaz adaptable a todos los dispositivos

## 💻 Tecnologías Utilizadas
- **Frontend**: React + Vite
- **Estado**: Context API / React Hooks
- **Routing**: React Router
- **Estilos**: CSS puro con variables y diseño responsivo


## 🗄️ Backend & Base de Datos
- **Firebase**: Cloud Firestore (NoSQL)
- **Colecciones**: `products`, `orders`

## 📦 Configuración del Proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/Maximiliano-cabral/ReactEcommers.git
cd ReactEcommers
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el proyecto
```bash
npm start
```

El proyecto se abrirá en `http://localhost:5173`

## 🏗️ Estructura del Proyecto
```
ReactEcommers/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CartContainer/
│   │   │   ├── CartContainer.jsx
│   │   │   └── CartContainer.css
│   │   ├── CartWidget/
│   │   │   ├── CartWidget.jsx
│   │   │   └── CartWidget.css
│   │   ├── CheckoutForm/
│   │   │   ├── CheckoutForm.jsx
│   │   │   └── CheckoutForm.css
│   │   ├── Item/
│   │   │   ├── Item.jsx
│   │   │   └── Item.css
│   │   ├── ItemCount/
│   │   │   ├── ItemCount.jsx
│   │   │   └── ItemCount.css
│   │   ├── ItemDetailContainer/
│   │   │   ├── ItemDetailContainer.jsx
│   │   │   └── ItemDetailContainer.css
│   │   ├── ItemList/
│   │   │   ├── ItemList.jsx
│   │   │   ├── ItemList.css
│   │   │   └── ItemListContainer.jsx
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx
│   │   │   └── NavBar.css
│   │   └── ItemCount/
│   │       ├── ItemCount.jsx
│   │       └── ItemCount.css
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── FirestoreService.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 👥 Autor
**Maximiliano Cabral** - [GitHub](https://github.com/Maximiliano-cabral)