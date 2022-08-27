const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/students"

MongoClient.connect(url, async (err,db)=>{
  if(err) console.log(err);
  console.log("Db connected");
  const database = db.db("Human_resource")
  const dbCollection = database.collection("employee")
    // console.log("collection created",dbCollection);
    const stu =[{"firstName": "John",
    "lastName": "Doe",
    "salary": "25000",
    "department": "HR",
    "lastCompany": "X",
    "lastSalary": "10000",
    "overallExp": "2",
    "contactInfo": "1234567890",
    "yearGrad": "2016",
    "gradStream": "CSE"
  },{
    "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
{
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
},
{
  "firstName": "Sao",
  "lastName": "Avika",
  "salary": "30000",
  "department": "Sales",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
},
{
  "firstName": "Jame",
  "lastName": "roh",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
},
{
  "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
},
{
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
},
{
  "firstName": "Sao",
  "lastName": "Avika",
  "salary": "30000",
  "department": "Sales",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
},
{
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
},
{
  "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
},
{
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
},
{
  "firstName": "Sao",
  "lastName": "Avika",
  "salary": "30000",
  "department": "Sales",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
},
{
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
}]
    dbCollection.insertMany(stu,(err,res)=>{
      if(err) console.log(err)
      console.log(" document inserted");
    })
    dbCollection.find({}).toArray((err,result)=>{
      console.log(result);
    });
    const salgt = {salary:{$gt:"30000"}}
    dbCollection.find(salgt).toArray((err,result)=>{
      console.log(result);
    });
    const expgt = {overallExp:{$gt:"2"}}
    dbCollection.find(expgt).toArray((err,result)=>{
        console.log(result);
     })
        const gragt = {yearGrad:{$gt:"2015"}}
        dbCollection.find(gragt).toArray((err,result)=>{
            console.log(result);
        })
        const salup = {salary:{$gt:"70000"}}
        const valup = {$set:{salary:"65000"}}
        dbCollection.updateMany(salup,valup , (err,result)=>{
            console.log(result);
        })
        const emdel = {lastCompany:"Y"};
        dbCollection.deleteMany(emdel , (err,obj)=>{
              console.log(obj);
            });
})
