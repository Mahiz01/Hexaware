const express = require('express')
// const mongo_connect = require('./mongooseConnect')
const dotenv = require('dotenv');
const mongo_connect = require('./mongooseConnect');
const routerCourse = require('./routers/courseRoute');
const routerStudent = require('./routers/studentRoute');
const routerEnrollment = require('./routers/enrollmentRoute');
const routerInstructor = require('./routers/instructorRoute');
const routerFaculty = require('./routers/facultyRoute');
const routerUser = require('./routers/userRoute');
const routerAdmin = require("./routers/adminRoute");
dotenv.config();

const PORT = process.env.PORT;
const app  = express();

app.use(express.json())
app.use("/api/course",routerCourse);
app.use("/api/student",routerStudent);
app.use("/api/enrollment",routerEnrollment);
app.use("/api/instructor",routerInstructor);
app.use("/api/faculty",routerFaculty);
app.use("/api/user",routerUser);
app.use("/api/admin",routerAdmin);
app.listen((process.env.PORT),()=>console.log(`Server connected to PORT ${PORT}`));

mongo_connect();