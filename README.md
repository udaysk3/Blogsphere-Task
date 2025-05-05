# BlogSphere - A Full-Stack Blogging Platform

BlogSphere is a full-stack blogging platform built with Django for the backend API and React for the frontend. It provides a complete solution for users to create, read, update, and delete blog posts, manage user authentication, and interact through comments.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (Linux/macOS)](#backend-setup-linuxmacos)
  - [Backend Setup (Windows)](#backend-setup-windows)
  - [Frontend Setup (Linux/macOS)](#frontend-setup-linuxmacos)
  - [Frontend Setup (Windows)](#frontend-setup-windows)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Frontend Components](#frontend-components)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Authentication
- User registration with email verification
- Secure login with JWT authentication
- Password reset functionality
- User profile management

### Blog Management
- Create, read, update, and delete blog posts
- Rich text editor with Markdown support
- Image upload for blog posts and user profiles
- Draft saving and post publishing control
- Post categorization and tagging

### User Interface
- Responsive design for all device sizes
- Light and dark theme toggle
- Infinite scroll or pagination for blog listings
- Skeleton loaders for enhanced UX during data fetching
- Search functionality with highlighting

### Social Features
- Comment system with threading
- Like/favorite functionality
- Share posts to social media
- Follow other users

## Technology Stack

### Backend
- **Django**: Python web framework
- **Django REST Framework**: RESTful API development
- **Simple JWT**: JWT authentication
- **Django CORS Headers**: Cross-origin resource sharing
- **Pillow**: Image processing
- **SQLite**: Development database
- **PostgreSQL**: Production database (recommended)

### Frontend
- **React**: JavaScript library for UI development
- **Redux Toolkit**: State management
- **RTK Query**: Data fetching and caching
- **React Router**: Routing
- **Formik & Yup**: Form handling and validation
- **React Quill**: Rich text editor
- **SCSS**: Styling
- **Material UI**: UI component library
- **React Toastify**: Toast notifications

## Project Structure

### Backend (Django)

```
blogsphere/
├── blogsphere/          # Project settings
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py      # Django settings
│   ├── urls.py          # Main URL routing
│   └── wsgi.py
├── api/                 # Root API app
│   ├── __init__.py
│   ├── urls.py          # API URL routing
│   └── views.py         # API root view
├── authentication/      # Authentication app
│   ├── __init__.py
│   ├── admin.py
│   ├── models.py
│   ├── serializers.py   # Auth serializers
│   ├── urls.py          # Auth URLs
│   └── views.py         # Auth views
├── blog/                # Blog app
│   ├── __init__.py
│   ├── admin.py         # Admin configuration
│   ├── models.py        # Blog models
│   ├── serializers.py   # Blog serializers
│   ├── urls.py          # Blog URLs
│   └── views.py         # Blog views
├── media/               # Uploaded media files
├── static/              # Static files
├── ER.pdf               # Database ER diagram
├── manage.py            # Django management script
└── requirements.txt     # Python dependencies
```

### Frontend (React)

```
blogsphere-frontend/
├── public/              # Public assets
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── app/             # Redux store
│   │   └── store.js
│   ├── components/      # Reusable components
│   │   ├── auth/
│   │   ├── blog/
│   │   ├── common/
│   │   └── layout/
│   ├── features/        # Redux slices
│   │   ├── auth/
│   │   └── blog/
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── styles/          # SCSS styles
│   ├── utils/           # Utility functions
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── .env                 # Environment variables
├── .gitignore
├── package.json         # JavaScript dependencies
└── README.md            # Frontend documentation
```

## Setup Instructions

### Prerequisites

- Python 3.8+ (Backend)
- Node.js 14+ (Frontend)
- npm or yarn (Frontend)
- Git

### Backend Setup (Linux/macOS)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blogsphere.git
   cd blogsphere
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```
   Follow the prompts to create an admin user.

6. Run the development server:
   ```bash
   python manage.py runserver
   ```

   The backend API will be available at http://localhost:8000/api/
   The admin interface will be available at http://localhost:8000/admin/

### Backend Setup (Windows)

1. Clone the repository:
   ```cmd
   git clone https://github.com/yourusername/blogsphere.git
   cd blogsphere
   ```

2. Create and activate a virtual environment:
   ```cmd
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```cmd
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```cmd
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser:
   ```cmd
   python manage.py createsuperuser
   ```
   Follow the prompts to create an admin user.

6. Run the development server:
   ```cmd
   python manage.py runserver
   ```

   The backend API will be available at http://localhost:8000/api/
   The admin interface will be available at http://localhost:8000/admin/

### Frontend Setup (Linux/macOS)

1. Navigate to the frontend directory:
   ```bash
   cd blogsphere-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. Create a `.env` file in the root of the frontend directory:
   ```bash
   touch .env
   ```

4. Add the backend API URL to the `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   ```

5. Run the development server:
   ```bash
   npm start
   # or if using yarn
   yarn start
   ```

   The frontend will be available at http://localhost:3000/

### Frontend Setup (Windows)

1. Navigate to the frontend directory:
   ```cmd
   cd blogsphere-frontend
   ```

2. Install dependencies:
   ```cmd
   npm install
   # or if using yarn
   yarn install
   ```

3. Create a `.env` file in the root of the frontend directory using Notepad or any text editor.

4. Add the backend API URL to the `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   ```

5. Run the development server:
   ```cmd
   npm start
   # or if using yarn
   yarn start
   ```

   The frontend will be available at http://localhost:3000/

## API Endpoints

### Authentication

- `POST /api/auth/register/`: Register a new user
  - Request body: `{username, email, password, password_confirm, first_name, last_name}`
  - Response: User details and confirmation message

- `POST /api/auth/login/`: Login and get JWT tokens
  - Request body: `{username, password}`
  - Response: `{access, refresh, user_id, username, email, first_name, last_name}`

- `POST /api/auth/login/refresh/`: Refresh JWT token
  - Request body: `{refresh}`
  - Response: `{access}`

- `POST /api/auth/logout/`: Logout and blacklist token
  - Request body: `{refresh_token}`
  - Response: Success message

- `GET /api/auth/user/`: Get current user details
  - Response: `{id, username, email, first_name, last_name}`

- `PATCH /api/auth/user/`: Update user details
  - Request body: `{email, first_name, last_name}`
  - Response: Updated user details

### Blog

- `GET /api/blog/posts/`: List all blog posts with pagination
  - Query parameters: `page`, `search`
  - Response: `{count, next, previous, results: [{id, title, slug, author, featured_image, created_at, comment_count}]}`

- `POST /api/blog/posts/`: Create a new blog post
  - Request body: `{title, content, featured_image (optional), published}`
  - Response: Created post details

- `GET /api/blog/posts/:slug/`: Get a specific blog post by slug
  - Response: `{id, title, slug, content, author, featured_image, created_at, updated_at, published, comments}`

- `PATCH /api/blog/posts/:slug/`: Update a blog post
  - Request body: `{title, content, featured_image (optional), published}`
  - Response: Updated post details

- `DELETE /api/blog/posts/:slug/`: Delete a blog post
  - Response: Success message

- `POST /api/blog/posts/:slug/add_comment/`: Add a comment to a post
  - Request body: `{content}`
  - Response: Created comment details

- `GET /api/blog/comments/`: List comments
  - Query parameters: `post` (filter by post ID)
  - Response: List of comments

- `DELETE /api/blog/comments/:id/`: Delete a comment
  - Response: Success message

## Database Schema

The database includes the following main models:

### User
- Standard Django User model with:
  - username
  - email
  - password
  - first_name
  - last_name
  - date_joined

### BlogPost
- title: CharField (max_length=255)
- slug: SlugField (unique, generated from title)
- content: TextField
- author: ForeignKey to User
- featured_image: ImageField (optional)
- created_at: DateTimeField (auto_now_add)
- updated_at: DateTimeField (auto_now)
- published: BooleanField (default=True)

### Comment
- post: ForeignKey to BlogPost
- author: ForeignKey to User
- content: TextField
- created_at: DateTimeField (auto_now_add)

Refer to the ER.pdf document in the repository for a visual representation of the database schema and relationships.

## Frontend Components

### Layout Components
- Header: Navigation and user controls
- Footer: Site information and links
- Layout: Main layout wrapper with theme support

### Authentication Components
- Login Form: User login
- Register Form: New user registration
- Private Route: Route protection for authenticated users

### Blog Components
- Post Card: Blog post preview card
- Post List: Grid of post cards with pagination
- Post Detail: Full blog post view with comments
- Post Form: Create/edit blog post with rich text editor
- Comment Form: Add comments to posts
- Comment List: Display post comments

### Common Components
- Button: Customizable button component
- Skeleton Loader: Loading placeholder
- Pagination: Page navigation
- ThemeToggle: Toggle light/dark theme

## Deployment

### Backend Deployment (Example with Heroku)

1. Install Heroku CLI:
   ```bash
   # Linux/macOS
   curl https://cli-assets.heroku.com/install.sh | sh
   
   # Windows (using Powershell)
   Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   choco install heroku-cli
   ```

2. Login to Heroku:
   ```bash
   heroku login
   ```

3. Create a new Heroku app:
   ```bash
   heroku create blogsphere-api
   ```

4. Add PostgreSQL addon:
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```

5. Configure environment variables:
   ```bash
   heroku config:set SECRET_KEY=your_secret_key
   heroku config:set DEBUG=False
   heroku config:set ALLOWED_HOSTS=blogsphere-api.herokuapp.com
   heroku config:set CORS_ALLOWED_ORIGINS=https://blogsphere.vercel.app
   ```

6. Create a `Procfile` in the project root:
   ```
   web: gunicorn blogsphere.wsgi
   ```

7. Add gunicorn to requirements.txt:
   ```
   gunicorn==20.1.0
   ```

8. Install django-heroku:
   ```bash
   pip install django-heroku
   ```

9. Update settings.py:
   ```python
   # Add at the bottom of settings.py
   import django_heroku
   django_heroku.settings(locals())
   ```

10. Deploy using Git:
    ```bash
    git add .
    git commit -m "Prepare for Heroku deployment"
    git push heroku main
    ```

11. Run migrations:
    ```bash
    heroku run python manage.py migrate
    ```

12. Create a superuser:
    ```bash
    heroku run python manage.py createsuperuser
    ```

### Frontend Deployment (Example with Vercel)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Create a `.env.production` file:
   ```
   REACT_APP_API_URL=https://blogsphere-api.herokuapp.com/api
   ```

4. Deploy using Vercel CLI:
   ```bash
   vercel
   ```

5. Set environment variables on Vercel:
   ```bash
   vercel env add REACT_APP_API_URL
   ```

6. Deploy to production:
   ```bash
   vercel --prod
   ```

## Troubleshooting

### Backend Issues

1. **Migrations not working**
   - Delete all migration files (except `__init__.py`) in each app's migrations folder
   - Delete the database file (SQLite)
   - Run `python manage.py makemigrations` followed by `python manage.py migrate`

2. **CORS errors**
   - Verify CORS settings in `settings.py`
   - Check that `CORS_ALLOWED_ORIGINS` includes your frontend URL

3. **Static/Media files not loading**
   - Check `STATIC_URL`, `STATIC_ROOT`, `MEDIA_URL`, and `MEDIA_ROOT` settings
   - Run `python manage.py collectstatic`
   - Ensure URLs in `urls.py` are set up correctly for serving files

### Frontend Issues

1. **API connection errors**
   - Confirm the correct API URL in `.env` file
   - Check that backend server is running
   - Verify network requests in browser dev tools

2. **Authentication issues**
   - Check browser localStorage for tokens
   - Verify token expiration and refresh logic
   - Check network requests for proper Authorization headers

3. **Build errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
   - Check for outdated or conflicting dependencies

## Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Coding Standards

- Backend: Follow PEP 8 style guide for Python
- Frontend: Use ESLint and Prettier for consistent JavaScript code
- Write tests for new features
- Document your code with docstrings and comments

