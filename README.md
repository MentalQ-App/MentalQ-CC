# MentalQ - C242-PS246

![Screenshot 2024-12-12 122344](https://github.com/user-attachments/assets/63993c1b-4d13-4bfa-9b4d-2a94f90d09b4)

## Table of Contents

1. [Description](#Description)
2. [Team](#C242-PS246---cc)
3. [Google Architecture](#Google-Architecture)
4. [API Endpoint](#Api-Endpoint)

## Description
The MentalQ app utilizes **a robust cloud architecture** powered by **Google Cloud**. We’ve implemented a **CI/CD pipeline** that integrates our API from GitHub into Cloud Build, automatically packaging the app into a Dockerfile and storing it in **Artifact Registry**. The app is then deployed to two synchronized **Cloud Run** instances, **ensuring high availability**.

Our app services are powered by **Cloud Storage** and **Cloud SQL** for **efficient data management**. **Cloud IAM** and **Secret Manager** are **integrated** into the architecture to provide **secure environment** management, ensuring that sensitive information such as API keys and configurations are securely handled. This integration with Secret Manager ensures that our deployment pipeline meets the **highest standards of security** while providing **a seamless, automated process** from development to deployment.

**Once set up**, the API is ready to be **consumed** by the MentalQ app, **offering secure, scalable, and reliable mental health support to users.**


## C242-PS246 - CC

| Bangkit ID | Name | Learning Path | University | LinkedIn |
| ---      | ---       | ---       | ---       | ---       |
| C227B4KY2690  | Muhammad Afif Rohman Muzaky  | Cloud Computing | Universitas Jember | [![text](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammadafifrohmanmuzaky/) |
| C227B4KY1611  | Gharizah Ligar Indrastata Alexandri | Cloud Computing | Universitas Jember | [![text](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gharizahligar/) |

## Google Architecture

![image](https://github.com/user-attachments/assets/12b7e952-5138-494a-a723-aa5cb5a2d186)

## API Endpoint

| Endpoint | Type | Descriptions |
| ---   | ---      | ---         |
| /terms-of-service | get | Renders the "Terms of Service" page for the application. |
| /privacy-policy | get | Renders the "Privacy Policy" page for the application. |
| /register | post | Handles user registration by creating new credentials and user records, and sends an email verification token. |
| /users/update | put | Updating Users Photo Profile |
| //verify-email/:token | get | Verifies the user's email address using a token sent to their email. |
| /login | post | Authenticates a user using email and password.|
| /google-login | post | Users Login via Google, Authenticates a user using a Firebase token. |
| /request-reset | post | Initiates a password reset process by generating an OTP (One-Time Password) and sending it to the user's email. |
| /verify-otp | post | Verifies the OTP provided by the user for password reset. |
| /reset-password | post | Resets the user's password after verifying the OTP. |
| /notes | get | Retrieves all active notes for the authenticated user. |
| /notes/:id | get | Retrieves a single note by its ID for the authenticated user. |
| /notes | post | Creates a new note for the authenticated user. |
| /notes/:id | put | Updates an existing note by its ID for the authenticated user. Only fields provided in the request body will be updated. |
| /notes/delete/:id | put | Soft deletes a note by its ID for the authenticated user. The isActive field is set to false |
| /register-psikologi | post | Registers a new psychologist with the required personal and professional details. |
| /psychologist | get | Retrieves a list of all verified psychologists. |
| /psychologist/:id | get | Fetches details of a specific psychologist by their ID. |
| /analysis  | get | Getting Analysis Data From Model |
| /transaction | post | Creating New Transaction |
| /transaction/:id | get | Getting Status Transaction by Id |
| /transaction/:id/cancel | post | Canceling Transaction Process |
