# 🏫 School Management System (JavaScript)

A **School Management System** built using **HTML, CSS, JavaScript, and Firebase**, designed to manage **students, teachers, and admin operations** with separate login dashboards.

This project is suitable for **learning frontend development**, **Firebase authentication**, and **role-based access control**.

---

## 📌 Features

### 👨‍🎓 Student

* Student login
* View student dashboard
* Access student-specific data

### 👩‍🏫 Teacher

* Teacher login
* Teacher dashboard
* Manage assigned students

### 🛠️ Admin

* Admin login
* Manage students and teachers
* Control system data

---

## 📁 Project Structure

```
SchoolManagement_JS/
│
├── index.html            # Signup page
├── login.html            # Student login
├── teacherLogin.html     # Teacher login
├── admin.html            # Admin dashboard
│
├── studentpage.html      # Student dashboard
├── teacherpage.html      # Teacher dashboard
│
├── style.css             # Main stylesheet
│
├── firebase.js           # Firebase configuration
│
├── signup.js             # Signup logic
├── login.js              # Student login logic
├── teacherLogin.js       # Teacher login logic
├── admin.js              # Admin functionality
├── Student.js            # Student-related logic
├── studentpage.js        # Student dashboard logic
├── teacherpage.js        # Teacher dashboard logic
│
└── README.md
```

---

## 🔧 Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **Firebase Authentication**
* **Firebase Realtime Database / Firestore**

---

## ▶️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/ArsalJan34/SchoolManagement_JS.git
```

2. Open the project folder:

```bash
cd SchoolManagement_JS
```

3. Open `index.html` in your browser
   (or use **Live Server** in VS Code for best experience).

---

## 🔐 Authentication

* Firebase is used for:

  * User authentication
  * Role-based login (Student, Teacher, Admin)

Make sure you update your **Firebase configuration** in:

```js
firebase.js
```

---

## 🎯 Purpose of This Project

* Practice **JavaScript DOM manipulation**
* Learn **Firebase authentication**
* Understand **multi-role login systems**
* Build a real-world **school management workflow**

---

## 📌 Future Improvements

* Add password reset
* Improve UI/UX
* Add attendance management
* Add marks & report system
* Deploy using Firebase Hosting or Netlify

---

## 👤 Author

**Arsal Jan**
GitHub: [@ArsalJan34](https://github.com/ArsalJan34)

---

## ⭐ Support

If you like this project, don’t forget to **star the repository** ⭐
It helps others discover the project!
