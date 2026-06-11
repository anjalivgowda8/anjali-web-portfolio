const profile = {
  name: "Anjali V Gowda",

  role:
    "AI | Cloud Computing | DevOps Enthusiast",

  company:
    "SuprMentr Technologies Private Limited",

  about: `
Passionate about Artificial Intelligence, Cloud Computing, and DevOps technologies.

Currently learning Linux, Docker, Kubernetes, System Design, Python, and AWS DevOps while gaining hands-on experience through projects and internships.

Interested in building scalable cloud-native applications and continuously improving technical skills in cloud and automation technologies.
  `,

  experience: [
    "AI with Cloud Computing Internship",
    "AWS DevOps Training",
    "Cloud and DevOps Projects"
  ],

  certifications: [
    "Certified AI with Cloud Computing"
  ],

  expertise: [
    "Linux",
    "Docker",
    "DevOps",
    "Kubernetes",
    "System Design",
    "AWS",
    "Cloud Computing",
    "Python"
  ],

  github:
    "https://github.com/anjalivgowda8",

  linkedin:
    "https://www.linkedin.com/in/anjali-v-gowda-15088b337/",

  resume:
    "/resume.pdf",

  projects: [
    {
      title: "Nginx Rotate App",

      overview: `
This project automates Nginx log rotation using the Linux Logrotate utility. It helps prevent disk space issues by compressing, archiving, and removing old log files automatically.
      `,

      technical: `
Nginx does not rotate logs by itself. This project uses Logrotate along with the USR1 signal to safely switch Nginx to a new log file without interrupting running services.
      `,

      techStack: [
        "Linux",
        "Nginx",
        "Logrotate",
        "Shell Scripting"
      ],

      github:
        "https://github.com/anjalivgowda8/nginx-rotate-app-",

      youtube:
        ""
    },

    {
      title: "Third Eye for a Blind Person",

      overview: `
A wearable assistive technology project designed for visually impaired individuals. The system detects nearby obstacles and provides real-time audio or vibration feedback to help users navigate safely.
      `,

      technical: `
The project uses sensors and a microcontroller to detect obstacles in the user's path. The collected data is processed and converted into alerts that improve mobility and safety.
      `,

      techStack: [
        "Microcontroller",
        "Sensors",
        "Embedded Systems",
        "Hardware Integration"
      ],

      github:
        "",

      youtube:
        "https://youtu.be/qncHRRI5K04"
    }
  ]
}

export default profile