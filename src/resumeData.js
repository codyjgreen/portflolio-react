import faker from 'faker';

let resumeData = {
  "imagebaseurl": "https://codyjgreen.github.io/portflolio-react/",
  "name": "Cody Green",
  "role": "Software Developer",
  "emailid": "codyjeromegreen@gmail.com",
  "skypeid": "lower_case_g",
  "roleDescription": "A passionate and tenacious developer. A Former Marine and current stay at home dad. Fast learner, offering the ability to assess an organization’s needs and create a complementary, robust web presence. Experienced in all five stages of the web development process including information gathering, planning, design, development, testing and deployment, and maintenance. Specialties include JavaScript, Node.js, CSS3, HTML5, and React, Redux, MongoDB.",
  "socialLinks": [
    {
      "name": "twitter",
      "url": "http://twitter.com/Cody_J_Green",
      "className": "fa fa-twitter"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/cody-green/",
      "className": "fa fa-linkedin"
    },
    {
      "name": "github",
      "url": "http://github.com/codyjgreen",
      "className": "fa fa-github"
    }
  ],
  "aboutme": "I love breaking things! Putting them back together is pretty cool too! I got into software development during my first year as a stay at home dad I have always been a tinkerer and love to solve problems with technology. So I decided to dive right in and started going to school at night while being a stay at home dad during the day and it was something that was incredibly tough but it is something that I am extremely proud of. Have something you want broken and put back together? I'd love to work with you.",
  "address": "Seattle, WA",
  "website": "",
  "education": [
    {
      "UniversityName": "Code Fellows",
      "specialization": "Certificate in advanced full stack javaScript",
      "MonthOfPassing": "June",
      "YearOfPassing": "2018",
      "Achievements": `Computer Science fundamentals.
      HTML5, CSS, ECMAScript 6, jQuery.
        HTTP, JSON, and AJAX.
          MongoDB, Postgres, mySQL.
            Express, SuperAgent.
              TDD, BDD, Jest.
                Webpack, Babel, Sass.
                  React, Redux.
                    Heroku, Amazon Web - Services.`
    },
    {
      "UniversityName": "United States Marine Corps",
      "specialization": "Marine",
      "MonthOfPassing": "",
      "YearOfPassing": "2008 - 2009",
      "Achievements": "Leadership, Confidence, Team Work, Communication"
    },
    {
      "UniversityName": "Blue Ridge Community College",
      "specialization": "Theater",
      "MonthOfPassing": "",
      "YearOfPassing": "2007",
      "Achievements": "Public Speaking, Leadership, Confidence, Team Work, Taking Direction, Communication"
    }
  ],
  "work": [
    {
      "CompanyName": "Code Fellows",
      "specialization": "Teachers Assistant",
      "MonthOfLeaving": "August - Present",
      "YearOfLeaving": "2018",
      "Achievements": `Provided high quality education, training, and mentorship for 100+ students.
      - Review and debug student code to provide feedback for improvement. 
      - Educated students on programming best practices as well as trained them to write clean, dynamic, functional code.
      - Oversaw the planning, execution, debugging and review of over 30 student projects.`
    },
    {
      "CompanyName": "Stay at home dad",
      "specialization": "Dad",
      "MonthOfLeaving": "July 2016 - Present",
      "YearOfLeaving": "",
      "Achievements": `Potty Training, Communication, Healthy meals, Learning activities, socialization, Teamwork, Leadership.
      `
    },
    {
      "CompanyName": "The Crab Pot",
      "specialization": "Server",
      "MonthOfLeaving": "March 2013",
      "YearOfLeaving": "July 2016",
      "Achievements": "Customer Service, Hospitality, Communication, Problem Solving, Teamwork"
    }
  ],
  "skillsDescription": "",
  "skills": [
    {
      "skillname": "HTML5"
    },
    {
      "skillname": "node.js"
    },
    {
      "skillname": "AJAX"
    },
    {
      "skillname": "jQuery"
    },
    {
      "skillname": "ECMAScript6"
    },
    {
      "skillname": "MongoDB"
    },
    {
      "skillname": "Postgres"
    },
    {
      "skillname": "Express"
    },
    {
      "skillname": "SuperAgent"
    },
    {
      "skillname": "Jest"
    },
    {
      "skillname": "Babel"
    },
    {
      "skillname": "Webpack"
    },
    {
      "skillname": "Sass"
    },
    {
      "skillname": "Redux"
    },
    {
      "skillname": "Heroku"
    },
    {
      "skillname": "AWS"
    },
    {
      "skillname": "REST"
    },
    {
      "skillname": "Agile"
    },
    {
      "skillname": "React-Native"
    },
    {
      "skillname": "Parcel"
    },
    {
      "skillname": "CSS3"
    },
    {
      "skillname": "Reactjs"
    }
  ],
  "portfolio": [
    {
      "name": "Nouri Meals",
      "description": "React application built at AngelHack Seattle. Still iterating on it with weekly standups and working toward a fully functioning startup.",
      "imgurl": "../public/images/portfolio/phone.jpg",
      "deployedUrl": "https://nourimeals.herokuapp.com/",
      "githubUrl": "https://github.com/nourimeals/nouri"
    },
    {
      "name": "Timeline Helper",
      "description": "React application ",
      "imgurl": "images/portfolio/phone.jpg",
      // "deployedUrl": "https://nourimeals.herokuapp.com/",
      "githubUrl": "https://github.com/TimeLineHelper/calendar-app"
    },
    {
      "name": "Soundwave",
      "description": "node application.",
      "imgurl": "images/portfolio/phone.jpg",
      "deployedUrl": "https://soundwavecf.herokuapp.com/home.html",
      "githubUrl": "https://github.com/soundwave-cf/soundwave"
    },
    {
      "name": "my media db",
      "description": "React application built at AngelHack Seattle. Still iterating on it with weekly standups and working toward a fully functioning startup.",
      "imgurl": "images/portfolio/phone.jpg",
      "deployedUrl": "https://github.com/my-media-db/media-client",
      "githubUrl": "https://github.com/my-media-db/media-server"
    },

  ],
  "testimonials": [
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    },
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    },
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    },
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    },
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    },
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    },
    {
      "description": "This is a sample testimonial",
      "name": "Some technical guy"
    }
  ]
}

export default resumeData
