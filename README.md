# Online Book Review Server-Side Application

Welcome to the Online Book Review Server-Side Application, the final project for the IBM Course "Developing back-end apps with Node.js and Express." This application allows users to manage books, write reviews, and interact with book-related data. It utilizes MySQL as the database and Sequelize.js as the ORM (Object-Relational Mapping) tool.

## Quick Brief

The Online Book Review Server-Side Application provides a RESTful API for managing user accounts, books, and reviews. Users can register, log in, and create reviews for books. Books can be added, updated, and deleted. Reviews can be read, edited, and deleted. The application aims to provide a seamless experience for book enthusiasts to share their thoughts on books.

## Getting Started

Follow these instructions to set up and run the application:

### Prerequisites

1. Node.js: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. MySQL: You will need a MySQL database server installed and running. You can download MySQL from [mysql.com](https://www.mysql.com/).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the database connection:
   
   - Create a MySQL database for the application (sample command below, replace `<password>` with your MySQL root password if you have one set up)
      ```bash
        mysql -u root -p<password> -e "CREATE DATABASE OnlineBook;"
      ```

   - Set your MySQL database credentials and other environment variables in the `.env` file. You can copy the `.env.example` file and update the values accordingly:
      ```
      PORT=8000
      DATABASE_NAME=OnlineBook
      DATABASE_USERNAME=root
      DATABASE_PASSWORD=""
      DATABASE_HOST=127.0.0.1
      SALT_ROUNDS=10
      TOKEN_SECRET_KEY=secret
      ```


5. Start the application:

   ```bash
   npm start
   ```

## API Documentation

For detailed API documentation and examples of how to use the endpoints, please take a look at the [API Documentation](https://documenter.getpostman.com/view/28416524/2s9YBxacHG).
