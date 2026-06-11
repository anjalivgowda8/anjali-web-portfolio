const profile = {
  name: "ANJALI.V",

  role:
    "AI |Cloud Computing | DevOps |",

  company:
    "SuprMentr Technologies Private Limited ",

  about: `
leaning 
linux, DevOps, Kubernetes, System Design , docker,python.

intership under SuprMentr Technologies Private Limited 

Passionate about cloude and AI and AWS devops.
  `,

  experience: [
    "AI with cloud computing",
    "AWS Devops",

  ],

  certifications: [
    "Certified AI with cloud computing",
    
  ],

  expertise: [
    "linux",
    "Docker",
    "DevOps",
    "Kubernetes",
    "System Design",
    "Cloud"
  ],

  github:
    "https://github.com/anjalivgowda8",

  linkedin:
    "https://www.linkedin.com/in/anjali-v-gowda-15088b337/",

  resume:
    "c:\Users\ADMIN\Downloads\anjali v (cv).pdf",

  projects: [
    {
      title: "Nginx-rotate-app",

      overview:
      `
      To rotate Nginx log files for a specific app project, you use the Linux logrotate utility. It prevents your server disk from filling up by splitting, compressing, and deleting old logs automatically. `,
      technical:
        ` 
      Nginx does not natively rotate log files. To handle log rotation properly without dropping requests, system administrators typically use the Logrotate utility alongside a kill -USR1 command to force Nginx to switch to a fresh log file.       `,

      techStack: [
        "Advance system",
        "web page",
        "Scripting"
      ],
      title:  "Third Eye for a Blind Person",

      overview:
       `
      The "Third Eye for a Blind Person" is a wearable assistive project that helps visually impaired individuals navigate their surroundings independently. It uses proximity sensors to detect obstacles and converts that data into real-time audio or haptic feedback. `, 
      technical: [
        "Microcontroller",
        "Sensors",
        "Perception",
      ]

      techStack: [
        "Core Processing Unit",
        "Sensors & Input Devices",
        "Software & Machine Learning",
      ]

      github:
        "https://github.com/anjalivgowda8/nginx-rotate-app-",

      youtube:
        "https://youtu.be/qncHRRI5K04",
    }
  ]
}

export default profile