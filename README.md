# CI/CD Pipeline for a Web App (with Self-Hosted EC2 Runner)

This repository demonstrates an end-to-end **CI/CD pipeline** for a web application using **GitHub Actions**, **Docker**, and a **self-hosted EC2 runner**.  
The entire build and deployment process runs directly on the EC2 instance that is configured as a self-hosted GitHub Actions runner.

---

## 🚀 Overview
- **CI (Continuous Integration):** Build and test the application automatically on every push.
- **CD (Continuous Deployment):** Deploy the application to an AWS EC2 instance acting as a **self-hosted runner**.
- **Dockerized Deployment:** Ensures consistent environment across development, CI, and production.

---

## 🛠️ Technologies Used
- **GitHub Actions** – CI/CD automation.
- **AWS EC2 (Self-Hosted Runner)** – Runs GitHub Actions workflows directly.
- **Docker** – Containerization for reliable deployment.
- **Node.js / Express (example web app)** – Application layer.

---

## ✨ Features
- Fully automated CI/CD pipeline.
- Self-hosted EC2 GitHub runner (no SSH required).
- Docker builds and deployments run natively inside EC2.
- Reproducible builds using GitHub Actions.

---

## 📋 Prerequisites
Before setting up:
1. **AWS EC2 Instance** with:
   - Ubuntu (or any Linux) OS.
   - Docker installed and running.
   - GitHub Actions runner installed and registered.
2. **GitHub Repository Secrets** (if needed):
   - `DOCKER_USERNAME` / `DOCKER_PASSWORD` (if pushing to Docker Hub).
   - Any environment variables your app requires.

---

## ⚙️ Setup Instructions

### 1. Configure EC2 as Self-Hosted Runner
- Launch an EC2 instance.
- Install Docker:
  ```bash
  sudo apt update && sudo apt install docker.io -y
  sudo usermod -aG docker ubuntu
