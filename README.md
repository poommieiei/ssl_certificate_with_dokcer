# SSL Certificate with Docker

This project demonstrates how to set up an SSL certificate using Docker Compose.

## Prerequisites

- Docker and Docker Compose installed on your machine
- Basic knowledge of Docker, Docker Compose, and SSL certificates

## Getting Started

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ssl_certificate_with_docker.git
    cd ssl_certificate_with_docker
    ```

2. Generate a self-signed SSL certificate:
    ```sh
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout mysig.key -out mysig.crt
    ```

3. Ensure you have your SSL certificate (`mysig.crt`) and key (`mysig.key`) files in the `certs` directory.

4. Update the `nginx.conf` file to point to your certificate and key files.

5. Run the Docker Compose:
    ```sh
    docker-compose up -d
    ```

## Usage

Access your application via `https://localhost` running on port 443.