
1. **Initialize the project** using `npm init -y` to automatically create the `package.json` file.

2. **Install required packages** using `npm install express mongoose dotenv` to add backend framework, database ODM, and environment variable support.

3. **Create a `.env` file** to securely store environment variables like `PORT` and `DB_URL`.

4. **Import required modules** using `import exp from 'express'`, `import {config} from 'dotenv'`, and `import {connect} from 'mongoose'`.

5. **Load environment variables** using `config()` so values from `.env` can be accessed through `process.env`.

6. **Create an Express application** using `const app = exp()` to handle HTTP requests and responses.

7. **Assign a port number** using `const port = process.env.PORT || 5000` so the server runs on the specified or default port.

8. **Connect to MongoDB database** using `await connect(process.env.DB_URL)` to establish a database connection.

9. **Start the server** using `app.listen(port, () => console.log(...))` so the application begins listening for requests.

10. **Handle invalid routes** using middleware `app.use((req,res,next)=>{...})` to return a 404 response when a path does not exist.

11. **Implement error-handling middleware** using `app.use((err,req,res,next)=>{...})` to manage validation errors, cast errors, and server errors.
Define Schemas and Create Models 
    --UserTypeSchema
        firstName
        lastName
        email(unique)
        password
        role
        profileImageUrl
        isUserActive // 

    --ArticleSchema
    author
    title
    category
    content
    comments
    isArticleActive

6 Implement APIs
7. Create common api for register and login and logout