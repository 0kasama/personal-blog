<div align="center">
  <h1>Personal Blog</h1>
  <p>A personal blog application where users can create, manage, and publish personal blog content. The front end features a rich text editor powered by Tiptap, allowing users to easily format their posts with a variety of styles.</p>
</div>

## Tech Stacks
<p  align="center"> 
<b>Backend</b><br>
<img  src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> 
<img  src="https://img.shields.io/badge/Node.JS-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"> 
<img  src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt="Express"> 
<br><b>Frontend</b><br>
<img  src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React"> 
<img  src="https://img.shields.io/badge/Next.JS-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"  alt="Next.JS"> 
<br><b>Database</b><br>
<img  src="https://img.shields.io/badge/Sequelize-52B0E7.svg?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize"> 
<img  src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"> 
<img  src="https://img.shields.io/badge/postman-FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" alt="postman"> 
</p>

## Getting Started

### Requirements
 - Code Editor (ex. VS Code, Sublime Text, etc.)
 - Web Browser (ex. Chrome, Firefox, Microsfot Edges, etc.)
 - [Node.JS LTS Version or Latest](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

### Step-by-step  how to run the app locally
1. Clone the repository
   ```
   git clone https://github.com/0kasama/personal-blog.git
   cd personal-blog
   ```
2. Open backend directory and install all packages
	```
   cd backend
   npm install
   ```
3. Create and set `.env` file [(check env-examples)](https://github.com/0kasama/questify/blob/main/backend/env-examples)
4. Setup the database
	```
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
5. Run the backend
	```
   npm run dev
   ```
6. Open the frontend directory and install all packages
	```
	cd ..
   cd frontend
   npm install
   ```
7. Set the `BASE_URL`: Adjust the `BASE_URL` in the [(frontend/src/utils/BaseUrl)](https://github.com/0kasama/personal-blog/blob/main/frontend/src/utils/BaseUrl.js) file
8. Run the frontend
	```
   npm run dev
   ```

## Previews
### Visitor
![main](https://github.com/user-attachments/assets/c9cb617b-f1b4-4dba-8053-d4214407cff0)
![read](https://github.com/user-attachments/assets/a4e7f1fb-05e4-47a5-87b2-d398580f56f4)

### Owner / Admin
![main](https://github.com/user-attachments/assets/cdff83d3-04ba-445a-8b40-351b69ec609d)
![edit](https://github.com/user-attachments/assets/621e97ee-bf50-4824-a4a3-5c0222317444)
