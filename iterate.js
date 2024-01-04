const Resume = {
    personal: {
      Name: "Logeswaran K",
      DOB : "01/06/2000",
      Age : "23",
      FatherName: "Kalimuthu",
      MotherName: "Maheswari",
      Occupation: "Agriculture",
      Address: " Jeeva st 4th sakthi nadar meenakari road pollachi",
      Phone: "+91 6369327027",
      email: "loges93321@gmail.com"
    
    },
    education: [
      {
        school: "10th KMG Matriculation school_2015",
        colleges: [
        "DIPLOMA in EEE_NPT College_2018",
        "BATCHELOR OF ENGG in EEE_MCET College_2022"
      ]
      }
    ],
    
    experience: {
        position: "Quality Control",
        company: "CRI pumps",
        location: "coimbatore",
        start_date: "july_2022",
        end_date: "july_2023",
        responsibilities: [
          "Monitor customer satisfaction levels",
          "Guide the production team about the quality control issues to enhance the quality of the product",
          "Carry out quality assessment measures of all the products ready to be shipped and incoming raw materials"
        ]
      }, 
    
      Skills: [
        "Leadership",
        "Problem Solving",
        "Creativity",
        "Team Work"
      ],

      Short_term_goal: [
        "My aim is to place in good company and to become a part of company"
      ],

      Long_term_goal: [
        "the Entrupreneur"
      ],

      Projects: {
        DIPLOMA: "IOT Based transformer monitering system",
        BE: "Automatic speed control of vehicle using micro controller",
        BE: "Automatic room light, fan controller with visitor counter"
      },
   
    certifications: [
       "Bosch",
       "Nptel in electrical ckts",
       "Nptel in electronics ckts"
    ],

    languages: [
      {
        language: "English",
        proficiency: "Fluent"
      },
      {
        language: "tamil",
        proficiency: "fluent"
      }
    ],
    
    Implant_Training: [
        "IOT Robotics",
        "Solar Planting",
        "Transformer Construction",
        "Bosch"

     ],
     };
  
  const jsonResume = JSON.stringify(Resume, null, 2);

  console.log("MY RESUME")


//------ for loop ---------//

for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  PERSONAL") //--- personal

    const personal = Object.keys(Resume.personal);
     for (let i = 0; i < personal.length; i++) {
       let key = personal[i];
       console.log(`${key}: ${Resume.personal[key]}`);
     }}
    
//-------for in loop ------//

for(j = 1; j == 1; j++){ //--- this two lines are used to print the sub title in resume
    console.log("<  EDUCATION") //--- education

for (const key in Resume.education[0]) {
    console.log(`${key}: ${Resume.education[0][key]}`);
  }
     }
  
  //-------for loop ------//

  for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  EXPERIENCE")//--- experience

  const experience = Object.keys(Resume.experience);
for (let i = 0; i < experience.length; i++) {
    let key = experience[i];
    console.log(`${key}: ${Resume.experience[key]}`);
  }
}

//-------for of loop ------//
for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  SKILLS")//--- skill

  for(key of Resume.Skills)[
    console.log(key)
  ]
  }

 //-------forEACH()----//

 for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  SHORT TERM GOAL")//--- short term goal

    Resume.Short_term_goal.forEach(sum)
    function sum(val){
        console.log(val)
    }
        
    }

     //-------forEACH()----//

 for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  LONG TERM GOAL")//--- long term goal

    Resume.Long_term_goal.forEach(sum)
    function sum(val){
        console.log(val)
    }
        
    }

    //-------for in loop----//

for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  PROJECTS")//--- projects
  
    for(key in Resume.Projects){
        console.log(key + ":", Resume.Projects[key])
    }
}

//-------forEACH()----//

for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  CERTIFICATIONS")//--- Certificates

    Resume.certifications.forEach(sum)
    function sum(val){
        console.log(val)
    }
        
    }
    
//-------for of loop----//

for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  COMMUNICATION")//--- communication

  for (const key of Resume.languages) {
    console.log(key.language);
  }
}

    //-------forEACH()----//

for(j = 1; j == 1; j++){//--- this two lines are used to print the sub title in resume
    console.log("<  IMPLANT TRAINING")//--- implant training

    Resume.Implant_Training.forEach(sum)
    function sum(val){
        console.log(val)
    }
        
    }
    
    




