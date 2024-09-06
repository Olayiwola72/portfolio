## **Professional Multipage Developer Portfolio 🚀**

## **[https://olayiwola-akinnagbe.netlify.app](https://olayiwola-akinnagbe.netlify.app) 🔗**

## **🔭 Table of Contents**
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Usage Instructions](#usage-instructions)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [Connect With Me](#-connect-with-me)
- [License](#-license)

## **💼 Tech Stack**
- **![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26)**
- **![](https://img.shields.io/badge/Style-CSS3-informational?style=flat&logo=CSS3&color=1572B6)**
- **![](https://img.shields.io/badge/Style-SAAS-informational?style=flat&logo=SASS&color=7952B3)**
- **![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E)**
- **![](https://img.shields.io/badge/Tools-FormSpree-informational?style=flat&logo=FormSpree&color=61DAFB)**
- **![](https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=Docker&color=CB3837)**
- **Node v16 🚀**

## **🔧 Getting Started**
To set up the project locally:

1. **Clone the Repository:**

    ```sh 
    git clone https://github.com/Olayiwola72/portfolio
    ```

    ```sh 
    cd portfolio
    ```

    ```sh 
    git remote remove origin
    ```

1. **Install Dependencies:**

   Then you can install the dependencies using NPM:

      ```sh 
      npm install
      ```

1. **Listen to changes in CSS Preprocessor files (SASS files):**

    Use the provided script to compile SASS and watch for changes.

      ```sh
      npm run compile:scss
      ```

    Once you run `npm run compile:scss`, then open the `index.html` inside your favorite browser or using the live server extension.

1. **Using the live-server extension:**

   For development purposes, this project leverages live-server to serve this application. Use the provided script to start the application.

      ```sh
      npm start
      ```
  
  Once you run `npm start`, your application will be served at http://localhost:8080/


## **Usage Instructions**
Styles

1. **Make sure you have started the SASS to CSS compilation by running:**

    ```sh 
    npm run compile:scss
    ```

1. **If you wish to leverage live-server, make sure that live-server is running:**

    ```sh
    npm start
    ```

1. **Change the color theme of the website:**

    Go to `sass/abstracts/_variables.scss` and change the value of this sass variable called `$themeClrPrimary` to your preferred HEX color.

      ```scss
      // Default value
      $themeClrPrimary: #0062b9;
      ```
  
    Once you run `npm start`, your application will be served at [http://localhost:8080/](http://localhost:8080/)

    **Note**: I highly recommend to checkout the [Dopefolio Playground Link](https://dopefolio-playground.netlify.app) to test the template with different colors and see which color do you like the most.


## **📦 Deployment**

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

Whenever you wanna host a new site on Netlify. You will need to press the **Create New Site** button from the Netlify's dashboard once you login into Netlify.

Once you press the **Create Site Button** then you will have to follow the 3 steps:

1. You will have to select your Github account.

2. Then select the Repository which you wanna host, in this case its your Portfolio website

3. In the 3rd step, you will have to modify the **Site settings and deploy**, keep everything as it is but just make sure to modify the **Build command** and set its value to **npm run build** and then modify the **Publish directory** and set its value to **/** as shown in the  **image** below

<br />

<div align="center">
  <img src="https://i.ibb.co/hDTTrPB/Set-Build-Command-to.png" alt="Dopefolio Build Command Example and Publish Directory Value" width="100%" />
  <br>
</div>

Then hit the **Deploy site** button and your **Portfolio Site** is live 🥳


## **Docker Support**
This application can be deployed using Docker and Docker Compose, which simplifies the process of setting up and running the application in a containerized environment. Follow these instructions to get the application running using Docker.

<br />

🛠 Prerequisites
- **Docker: Install Docker**
- **Docker Compose: Install Docker Compose**

<br />

🚀 Quick Start
1. **Clone the Repository:**

   If you haven't already cloned the repository, do so with:

      ```sh
      git clone https://github.com/Olayiwola72/fastcash-backend

1. **Build and Start the Application::**

   Use Docker Compose to build and start the application. This will build the Docker images and start the containers defined in docker-compose.yml in the root directory.

      ```sh 
      docker-compose up --build

   --build forces Docker Compose to rebuild the images. You can omit this flag if you don't need to rebuild.

  Once the container is up, your application will be served at [http://localhost:8080/](http://localhost:8080/)
   
## **Contributing**
Contributions to this project are welcome. Please follow the standard GitHub fork, branch, and pull request workflow. Feel free to raise issues or feature requests to enhance this project.

## **📈 GitHub Stats**
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=Olayiwola72&layout=compact)](https://github.com/Olayiwola72)

## **🤝 Connect With Me**
<a href="https://www.linkedin.com/in/olayiwola-akinnagbe-371686172/" target="_blank">
   <img 
      align="left" 
      src="https://github.com/Olayiwola72/my-profile/blob/main/linkedin.png" 
      alt="Olayiwola Akinnagbe | LinkedIn" 
      width="21px"
   />
</a>

<a href="https://twitter.com/OlayiwolaAkinn1" target="_blank">
   <img 
      align="left" 
      src="https://github.com/Olayiwola72/my-profile/blob/main/twitter.png" 
      alt="Olayiwola Akinnagbe | Twitter" 
      width="21px"
   />
</a>

<a href="https://drive.google.com/file/d/10uXqISOnCIMsoLgmxOJor1kdrrflcnAy/view?usp=sharing" target="_blank">
   <img 
      align="left" 
      src="https://github.com/Olayiwola72/my-profile/blob/main/cv.png" 
      alt="Olayiwola Akinnagbe | Resume" 
      width="21px"
   />
</a>

<br />
<br />
<p style="text-align: justify"></p>

## **📄 License**

This project is licensed under the  **GPL-3.0** License - see the [LICENSE](LICENSE) file for details

