# 🛒 E-commerce

## 📋 Descripción
Plataforma de comercio electrónico moderna y escalable construida con React. Este proyecto permite a los usuarios navegar productos, gestionar carritos de compras.

## ✨ Características Principales
- **Catálogo de Productos**: Búsqueda, filtrado y categorización de productos
- **Carrito de Compras**: Gestión dinámica de productos y cantidades
- **Responsive Design**: Interfaz adaptable a todos los dispositivos

## 💻 Tecnologías Utilizadas
- **Frontend**: React
- **Estado**: Context Carrito / React Hooks
- **Routing**: React Router
- **UI Library**: Chakra UI

## 🗄️ Backend & Base de Datos
- **Firebase**: Cloud Firestore (NoSQL)
- **Colección**: products

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

El proyecto se abrirá en `http://localhost:3000`

## 🏗️ Estructura del Proyecto
```
ReactEcommers/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CartWidget/
│   │   │   ├── CartWidget.jsx
│   │   │   └── CartWidget.css
│   │   ├── Item/
│   │   │   ├── Item.jsx
│   │   │   └── Item.css
│   │   ├── ItemCount/
│   │   │   ├── ItemCount.jsx
│   │   │   └── ItemCount.css
│   │   ├── ItemDetailContainer/
│   │   │   └── ItemDetailContainer.jsx
│   │   ├── ItemList/
│   │   │   ├── ItemList.jsx
│   │   │   ├── ItemList.css
│   │   │   └── ItemListContainer.jsx
│   │   └── NavBar/
│   │       ├── NavBar.jsx
│   │       └── NavBar.css
│   ├── context/
│   │   └── CartContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
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