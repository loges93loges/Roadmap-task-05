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
  
  console.log(jsonResume);
