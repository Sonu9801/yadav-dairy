# Yadav Dairy — Python FastAPI Backend

A complete REST API backend for the Yadav Dairy e-commerce app, built with FastAPI + SQLite. Run it locally on your own machine.

---

## Quick Setup

### 1. Install dependencies
```bash
cd python_backend
pip install -r requirements.txt
```

### 2. Seed the database (69 products + categories + admin user)
```bash
python seed.py
```

### 3. Start the server
```bash
uvicorn main:app --reload
```

The API will be live at: **http://localhost:8000**  
Interactive docs (Swagger UI): **http://localhost:8000/docs**  
ReDoc: **http://localhost:8000/redoc**

---

## Admin Credentials

| Field    | Value                    |
|----------|--------------------------|
| Email    | admin@yadavdairy.com     |
| Password | admin123                 |

> ⚠️ Change the `SECRET_KEY` in `auth.py` before deploying to production.

---

## Database

- File: `yadav_dairy.db` (created automatically on first run)
- Engine: SQLite via aiosqlite
- To reset: delete `yadav_dairy.db` and run `python seed.py` again

---

## API Endpoints

### Auth
| Method | Endpoint           | Description              | Auth     |
|--------|--------------------|--------------------------|----------|
| POST   | /api/auth/register | Register new user        | None     |
| POST   | /api/auth/login    | Login, returns JWT token | None     |
| GET    | /api/auth/me       | Get current user profile | Required |
| PUT    | /api/auth/me       | Update profile           | Required |

### Products
| Method | Endpoint                         | Description              | Auth       |
|--------|----------------------------------|--------------------------|------------|
| GET    | /api/products                    | List all products        | None       |
| GET    | /api/products/featured           | Featured products        | None       |
| GET    | /api/products/trending           | Trending products        | None       |
| GET    | /api/products/best-sellers       | Best sellers             | None       |
| GET    | /api/products/fresh-arrivals     | Fresh arrivals           | None       |
| GET    | /api/products/recommended        | Recommended products     | None       |
| GET    | /api/products/{id}               | Single product detail    | None       |
| POST   | /api/products                    | Create product           | Admin only |
| PUT    | /api/products/{id}               | Update product           | Admin only |
| DELETE | /api/products/{id}               | Delete product           | Admin only |

**Query params for GET /api/products:**
- `category` — filter by category slug (e.g. `milk`, `cheese`)
- `search` — search by name (English or Hindi)
- `min_price` — minimum price filter
- `max_price` — maximum price filter
- `packaging_type` — filter by packaging type (e.g. `pouch`, `tetra_pack`)

### Categories
| Method | Endpoint         | Description           | Auth |
|--------|------------------|-----------------------|------|
| GET    | /api/categories  | List all categories   | None |

### Cart (requires authentication)
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /api/cart      | Get user's cart       |
| POST   | /api/cart      | Add item to cart      |
| PUT    | /api/cart/{id} | Update item quantity  |
| DELETE | /api/cart/{id} | Remove item from cart |
| DELETE | /api/cart      | Clear entire cart     |

### Orders (requires authentication)
| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | /api/orders       | Get user's orders        |
| POST   | /api/orders       | Place new order          |
| GET    | /api/orders/{id}  | Get order details        |

### Reviews
| Method | Endpoint                    | Description             | Auth     |
|--------|-----------------------------|-------------------------|----------|
| GET    | /api/reviews/{product_id}   | Get product reviews     | None     |
| POST   | /api/reviews/{product_id}   | Submit review           | Required |

### Admin (admin only)
| Method | Endpoint                  | Description           |
|--------|---------------------------|-----------------------|
| GET    | /api/admin/orders         | All orders            |
| PUT    | /api/admin/orders/{id}    | Update order status   |
| GET    | /api/admin/stats          | Dashboard stats       |

---

## Authentication

This API uses **JWT Bearer tokens** (HS256, 7-day expiry).

After login, include the token in all authenticated requests:
```
Authorization: Bearer <your_token_here>
```

---

## Order Status Values

`pending` → `confirmed` → `delivered` | `cancelled`

---

## Notes

- This backend is for **local development only**
- CORS is set to allow all origins (`*`) — restrict in production
- SQLite is used for simplicity; for production use PostgreSQL with asyncpg
- All 69 Yadav Dairy products are seeded with bilingual names (English + Hindi)
