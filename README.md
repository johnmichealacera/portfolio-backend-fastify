# Portfolio Backend - Fastify API

A lightweight and fast backend API built with Fastify for serving portfolio project data. This API provides endpoints to fetch project information for a personal portfolio website.

## 🚀 Features

- **Fast & Lightweight**: Built with Fastify for high performance
- **MongoDB Integration**: Uses Mongoose for database operations
- **CORS Support**: Configured for frontend integration
- **Environment Configuration**: Secure environment variable management
- **RESTful API**: Clean and simple API endpoints

## 📋 API Endpoints

### Projects

- `GET /api/projects` - Fetch all portfolio projects
  - Returns an array of project objects with the following structure:
    ```json
    {
      "title": "Project Title",
      "description": "Project description",
      "url": "https://project-url.com",
      "imageLink": "https://image-url.com"
    }
    ```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Fastify
- **Database**: MongoDB with Mongoose ODM
- **Environment**: @fastify/env
- **CORS**: @fastify/cors

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-backend-fastify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_DB_STRING_CONNECTION=mongodb://localhost:27017/portfolio
   PORTFOLIO_FRONTEND_URL=https://your-frontend-url.com
   ```

## 🚀 Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. The server will start on port 5000. You can access it at:
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
src/
├── controllers/
│   └── projectControllers.ts    # Project-related business logic
├── routes/
│   └── projectRoutes.ts         # API route definitions
├── schema/
│   └── project.ts              # MongoDB schema for projects
└── index.ts                    # Main application entry point
```

## 🔧 Configuration

The application uses environment variables for configuration:

- `MONGO_DB_STRING_CONNECTION`: MongoDB connection string
- `PORTFOLIO_FRONTEND_URL`: Frontend URL for CORS configuration

## 📝 Database Schema

### Project Model
```javascript
{
  title: String (required),
  description: String (required),
  url: String (required),
  imageLink: String (required)
}
```

## 🌐 CORS Configuration

The API is configured to allow requests from your portfolio frontend. Update the CORS origin in `src/index.ts` to match your frontend URL.

## 📄 License

ISC

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: This is a lightweight backend specifically designed for portfolio project management. For production use, consider adding authentication, validation middleware, and additional error handling.
