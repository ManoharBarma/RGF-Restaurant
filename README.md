# RFG-Restaurant - React App

## Overview

RFG-Restaurant is a simple React app for a restaurant management system, allowing users to view menus, place orders, and manage their profiles. It is containerized using Docker and Docker Compose for easy deployment.

---

## Tech Stack

- Frontend: React.js
- Containerization: Docker, Docker Compose

---

## Prerequisites

Make sure you have the following installed:

- Docker (https://docs.docker.com/get-docker/)
- Docker Compose (https://docs.docker.com/compose/install/)

---

## Setup

### 1. Clone the repo

git clone https://github.com/ManoharBarma/RFG-Restaurant.git
cd RFG-Restaurant

### 2. Running with Docker Compose

To start the app with Docker, run:

docker-compose up -d

This will start the app on http://localhost:3000.

---

## Useful Docker Commands

- Start containers:  
  docker-compose up -d

- Stop containers:  
  docker-compose down

- View logs:  
  docker-compose logs -f

---

## Development

If you prefer running the app locally without Docker:

npm install
npm start

This will run the app at http://localhost:3000.

---
