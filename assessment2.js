const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/students"

//connection to database

MongoClient.connect(url, async (err,db)=>{
  if(err) console.log(err);
  console.log("Db connected");
  const database = db.db("Human_resource")
  
  //creating collection
  
  const dbCollection = database.collection("employee")
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
    
    //inserting documents into collection
    
    dbCollection.insertMany(stu,(err,res)=>{
      if(err) console.log(err)
      console.log(" document inserted");
    })
  
  //Display documents
  
    dbCollection.find({}).toArray((err,result)=>{
      console.log(result);
    });
  
  //salary graterthan 30000
  
    const salgt = {salary:{$gt:"30000"}}
    dbCollection.find(salgt).toArray((err,result)=>{
      console.log(result);
    });
  
  //experience graterthan 2
    const expgt = {overallExp:{$gt:"2"}}
    dbCollection.find(expgt).toArray((err,result)=>{
        console.log(result);
     })
  
  //graduate year grater than 2015 
         const gragt = {yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}
        dbCollection.find(gragt).toArray((err,result)=>{
            console.log(result);
        })
  
  //salary update 70000-65000
  
        const salup = {salary:{$gt:"70000"}}
        const valup = {$set:{salary:"65000"}}
        dbCollection.updateMany(salup,valup , (err,result)=>{
            console.log(result);
        })
  
  //delete document from the collection
  
        const emdel = {lastCompany:"Y"};
        dbCollection.deleteMany(emdel , (err,obj)=>{
              console.log(obj);
            });
})
