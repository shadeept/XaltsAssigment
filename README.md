# XaltsAssigment
## Installation
To use this project, you'll need to have Node.js and Docker installed on your local machine.

### Node.js Installation
If you don't have Node.js installed, follow these steps:

#### 1. For Windows or Mac:

Download the Node.js installer from the official [Node.js website](https://nodejs.org/en).

Run the installer and follow the prompts.

#### 2. For Linux:
Use your distribution's package manager to install Node.js. For example, on Ubuntu, you can use:

```
sudo apt-get install nodejs npm
```

Verify the installation by running:
```
node -v
npm -v
```

### Docker Installation
If you don't have Docker installed, follow these steps:

#### 1. For Windows or Mac:

Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop).
#### 2. For Linux:

Follow the instructions for your specific distribution from the [official Docker documentation](https://docs.docker.com/engine/install/).

Verify Docker Installation:

Open a terminal and run:
```
docker --version
```

## Usage
Follow these steps to clone the repository, run the project using Docker(optional), and test it using Postman:

1. Clone the repository to your local machine:
```
git clone https://github.com/shadeept/XaltsAssigment.git
```
2. Navigate to the project directory:
```
cd XaltsAssigment
```
3. Run `npm start` command.
This will start the server.

4.Testing with Postman:
  *  [Download Postman](https://www.postman.com/downloads/) if you don't have it installed.
  *  Open the application and select the API request methods(Like: GET, POST)
  *  Provide your API endpoint and click send button. 
     E.g. `http://localhost:3000/read`

#### Using Docker
Follow step 1 and 2 same as above.
3. Build the Docker image:
```
docker build -t xalts-assignment-image .
```
4. Run the Docker container:
```
docker run -p 3000:3000 -d xalts-assignment-image
```
5. Access the application:
Open your web browser and go to http://localhost:3000 to access the application.

6. Test the APIs using Postman.(Instructions provided in the above section)

