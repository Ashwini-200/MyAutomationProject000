# QA Intern Assignment – User Authentication & Authorization (JWT)

## Project Overview
This repository contains **manual and automation test cases** for a web application with **JWT-based authentication**.  
The assignment evaluates:

- Understanding of authentication and authorization
- Manual test case writing for positive, negative, and boundary scenarios
- Basic automation of key workflows
- QA thinking applied to real-world features

**Application Stack:**
- Frontend: React.js  
- Backend: Spring Boot  
- Authentication: JWT (JSON Web Token)

---

## Folder Structure
# MyAutomationProject000
Automation project using Playwright.

---

## Features Tested

### 1. User Registration
- Fields: Name, Email, Password, Confirm Password
- Validation rules:
  - Name: 5–24 characters
  - Email: valid format, unique, converted to lowercase
  - Password: minimum 12 characters, letters + numbers
  - Confirm Password: must match Password
- API responses:
  - 201 Created → success
  - 400 Bad Request → validation failure
  - 409 Conflict → duplicate email
  - 429 Too Many Requests → >10 attempts/hour/IP

### 2. User Login
- Email & Password authentication
- Successful login → returns JWT + redirects to Dashboard
- Invalid credentials → 401 Unauthorized

### 3. Dashboard (Protected Page)
- Accessible only with valid JWT
- Shows logged-in user email and route
- Access without JWT → redirects to Login page

---

## Automated Test Scenarios
1. Successful registration  
2. Registration with duplicate email  
3. Successful login  
4. Login with invalid password  
5. Access dashboard without login (redirect)  

---

## How to Run Automation (Playwright)
### Prerequisites
- Node.js (v16 or higher)
- Playwright installed

```bash
npm install
npx playwright install
Run All Tests (Headless)
npx playwright test

Run Tests in Browser (Headed)
npx playwright test --headed

Run Specific Test File
npx playwright test Automation/filename.spec.js
Assumptions

Application environment (frontend + backend) is properly running

JWT tokens are valid for session duration

Token expiration handled by backend

Validation rules applied at both UI and API layers

---

If you want, I can **also make a shorter, more visually appealing version with badges and headings** that looks really professional on GitHub.  

Do you want me to do that version too?

