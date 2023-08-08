import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string ="";
  email: string ="";
  studentbirth: string ="";
  studentaddress:String="";
  mobile: Number =0;
  password:String="";
  CV:any=null;
  Lettre_motivation:any=null;
  Image:any=null;
 
  currentStudentID = "";


  constructor(private http: HttpClient ){
    this.getAllStudent();
 
  }

  StudentArray : any[] = [];


 




  register()
  {
  
    let bodyData = {
      studentname : this.username,
      email:this.email,
      studentbirth:this.studentbirth,
      studentaddress : this.studentaddress,
      password:this.password,
      mobile : this.mobile,
      CV:this.CV,
      Lettre_motivation:this.Lettre_motivation,
      Image:this.Image,
 
    };
    
 
    this.http.post("http://localhost:8085/api/v1/student/upload",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.getAllStudent();
        this.username='',
        this.email='',
        this.studentbirth='',
        this.studentaddress='',
        this.password='',
        this.mobile=0,
        this.CV=[],
        this.Lettre_motivation=[],
       this.Image=[]
  });
  }


  getAllStudent()
  {
    
    this.http.get("http://localhost:8085/api/v1/student/getall")
  
    .subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }


  setUpdate(data: any)
  {
   this.username = data.studentname;
   this.studentaddress = data.studentaddress;
   this.mobile = data.mobile;
   this.currentStudentID = data._id;
   
  }


 
  UpdateRecords()
  {
    let bodyData = {
     
      studentname : this.username,
      email:this.email,
      studentbirth:this.studentbirth,
      studentaddress : this.studentaddress,
      password:this.password,
      mobile : this.mobile,
      CV:this.CV,
      Lettre_motivation:this.Lettre_motivation,
      Image:this.Image,

    };
    
    this.http.put("http://localhost:8085/api/v1/student/edit"+ "/" + this.currentStudentID , bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
       
        this.username='',
        this.email='',
        this.studentbirth='',
        this.studentaddress='',
        this.password='',
        this.mobile=0,
        this.CV=[],
        this.Lettre_motivation=[],
        this.Image=[]
    });
  }
 
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8081/api/v1/student/delete"+ "/"+ data._id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
       
        this.username='',
        this.email='',
        this.studentbirth='',
        this.studentaddress='',
        this.password='',
        this.mobile=0,
        this.CV=[],
        this.Lettre_motivation=[],
        this.Image=[]
    });
 
  }}

