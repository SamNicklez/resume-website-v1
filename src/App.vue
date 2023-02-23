<script>
export default {
  data() {
    return {
      //Values below can be changed as needed easily in case something changes
      name: "Samuel Nicklaus", //Name displayed on the left card
      email: "snicklaus@uiowa.edu", //Email displayed on the left card
      phone: "(319)-333-5747", //Phone displayed on the left card
      bday: "Feb 6, 2002", //DOB displayed on the left card
      location: "Iowa City, Iowa", //Location displayed on the left card
      gitDisplay: "github.com/SamNicklez", //URL that is displayed to the user
      gitURL: "https://github.com/SamNicklez", //URL that the user goes to on click
      linkedInDisplay: "linkedin.com/sam-nicklaus", //URL that is displayed to the user to be clicked
      linkedInURL: "https://www.linkedin.com/in/sam-nicklaus/", //URL user goes to on link click
      photoSrc: "https://i.imgur.com/hCDgktV.jpg", //Source for headshot photo at top of screen
      publicPath: process.env.BASE_URL, //Base url, used to grab resume.pdf
      universityLogo: 'https://i.imgur.com/y7MGuUn.png', //Logo of the college
      university: 'University of Iowa', //University you attend
      major: 'Bachelor of Science in Engineering, Computer Science & Engineering', //Your current major
      focusArea: 'Focus Area in Big Data & Machine Learning', //Focus area
      minor: 'Minor in Mathematics', //Minor
      dateAttending: 'August 2020 - May 2024', //Date you are attending college
      resumeDownload: 'snicklausResume.pdf', //The resume that gets downloaded on click
      //Text that is displayed at the top of the right card
      biotext: [
        {
          text: `As a student at the University of Iowa pursuing a degree in Computer Science and Engineering, I have gained a solid foundation in software development, data structures, algorithms, and computer architecture. Prior to my current studies, I completed an internship as a software engineer at Collins Aerospace, where I was involved in developing and maintaining software applications for critical manufacturing processes.`
        },
        {
          text: `During my internship, I had the opportunity to work with a team of engineers and collaborate with other departments to ensure the successful delivery of projects. Through this experience, I developed skills in problem-solving, critical thinking, and effective communication. I am confident that these skills will be valuable in any future roles I take on.`
        },
        {
          text: `With my passion for technology, I am excited to contribute my skills and knowledge to any team I join. I am eager to continue learning and growing in my career and am open to new challenges and opportunities.`
        }
      ],
      //Formats timeline
      //Title: Displayed at the top of the event
      //description: description of the event
      //Date: date the event happened
      //Category: text displayed in the pill at the top of the event
      //photo: provided a link, the photo will be displayed alongside the event
      //color: changes the color theme of the event, available colors include
      //| "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
      //icon: pack can be found here https://fonts.google.com/icons?selected=Material+Icons
      events: [
        {
          title: 'Note',
          date: new Date('02/21/2023'),
          description: `Timeline is still in progress...`,
          category: 'Project Update',
          photo: '',
          color: 'purple',
          icon:'web'
        },
        {
          title: 'Start new Internship!',
          date: new Date('05/30/2023'),
          description: `This summer, I have the opportunity to further my skills in Raytheons Digital Leadership Development Program where
                        I will be exploring the world of project management in Denver, CO. As a participant in this program,
                         I will be joining a team of talented professionals who are dedicated to driving innovation and shaping the future of technology in defense.
                          I am excited to contribute my own skills and ideas to this dynamic environment and learn from the wealth of knowledge and expertise that exists within Raytheon Technologies.
                          `,
          category: 'Job Update',
          photo: 'https://i.imgur.com/j8mTrs9.jpg',
          color: 'red',
          icon: 'badge'
        },
        {
          title: 'Created this website',
          date: new Date('02/10/2023'),
          description: `I created my own resume website using Vue.js, a popular JavaScript framework for building user interfaces.
           I started by creating a basic template using HTML and CSS, and then used Vue.js to build out the various components of my website.
          To make my website more visually appealing, I incorporated various Vue.js plugins and libraries, such as Bootstrap Vue for styling.
           The source code can be found on my GitHub page!`,
          category: 'Project Update',
          photo: 'https://i.imgur.com/uVDq29v.jpg',
          color: 'blue',
          icon:'web'
        },
        {
          title: 'Research at The University of Iowa',
          date: new Date('08/30/2022'),
          description: `During the fall semester, I had the pleasure of assisting multiple professors in the restoration
          and documentation of the Universities old PDP-8 computer. Duties include the design and implementation of a circuit
          that displays pulse signals to the user, documentation of voltage on specific traces, and restoration of voltage amplifiers
          in the machine.`,
          category: 'Project Update',
          photo: 'https://i.imgur.com/mVtefZE.jpg',
          color: 'green',
          icon: 'memory'
        },
        {
          title: 'Switched to part-time with Collins Aerospace',
          date: new Date('08/16/2022'),
          description: `After a fantastic summer with Collins, I am excited to announce I will be staying with my team
          part-time during the school year! My focus will be continuining on improving core manufacturing infrastructure where my next project
          will deal with digitizing the process of defect reporting for our hardware manufacturing lines. The project will use a 
          mix of C#, Vue.js, and Oracle to ultimately make the creation, storage, and lookup of these defect tickets more efficient.`,
          category: 'Job Update',
          photo: 'https://i.imgur.com/fD9XUtg.jpg',
          color: 'red',
          icon: 'badge'
        },
        {
          title: 'Student Ambassador for Collins Aerospace',
          date: new Date('08/15/2022'),
          description: `Over the course of my summer internship with Collins, I was met with the opportunity of becomming a Student Ambassador, representing Collins Aerospace at the University of Iowa. Throughout the semester, I had the pleasure of engaging with fellow students at various campus events sponsored by Collins, including resume workshops, seminars, and career fairs. This invaluable experience also afforded me the opportunity to converse with numerous hiring managers for Collins in the Midwest region.`,
          photo: 'https://i.imgur.com/0fgu8JB.jpg',
          color: 'orange',
          category: 'Extracurricular Update',
          icon: 'supervisor_account',
        },
        {
          title: 'Started Summer Internship with Collins Aerospace',
          date: new Date('05/16/2022'),
          description: `I am excited to share my summer internship experience at Collins Aerospace. During my time there, I had the opportunity to work on a range of challenging projects that helped me develop my technical skills and problem-solving abilities.
                        I had the privilege of leading the migration of critical server information and developing data-focused software for improving warehouse efficiency.
                        My experience also involved facilitating daily infrastructure operations, such as diagnosing software and hardware issues, debugging code, upgrading server hardware, and general IT maintenance.
                        Working at Collins Aerospace was an invaluable opportunity that allowed me to develop new skills, collaborate with diverse teams, and make a tangible difference in the organization's operations.
                        I am grateful for the chance to have worked at Collins Aerospace and am excited to leverage the skills I developed during my internship in my future endeavors.`,
          category: 'Job Update',
          photo: 'https://i.imgur.com/fD9XUtg.jpg',
          color: 'red',
          icon: 'badge'
        },
        {
          title: 'Wordle Software Design Project',
          date: new Date('05/1/2022'),
          description: `Our rendition of the New York Times game 'Wordle' is a word guessing game where the player has to guess a five-letter word within six attempts. The game provides feedback on each guess by indicating the number of correct letters in the right position (green), correct letters in the wrong position (yellow), and incorrect letters (grey).
          The project was implemented in Java using the JavaFX framework and SceneBuilder for the user interface design. We also used SQL to store player data such as scores and usernames. The application was designed to have multiple user accounts, each with their own high scores and game progress.
          Our project was a team effort, with each team member contributing to different aspects of the project, such as coding, design, and testing.
          The source code for our project can be found on my GitHub page, along with documentation and instructions on how to run the application.`,
          photo: '',
          color: 'blue',
          category: 'Project Update',
          icon: 'extension'
        },
        {
          title: 'Vice President of The University of Iowa League of Legends eSports Club',
          date: new Date('03/1/2022'),
          description: `I'm excited to share that I've recently switched over to become the Vice President
                         of University of Iowa's League of Legends eSports club! As an Events Manager
                          for the past year, 
                         I've had the pleasure of organizing events for the club. 
                         I'm now looking forward to taking on a more significant leadership 
                         role and working with the club's members, officers, and advisors to 
                         continue developing and growing the eSports community at our college.
                        I'm passionate about eSports, and I'm excited to contribute to creating 
                        a welcoming and inclusive environment for all members!`,
          category: 'Extracurricular Update',
          photo: 'https://i.imgur.com/0yNW4hc.jpg',
          color: 'orange',
          icon: 'sports_esports'
        },

      ],
      //Used on displaying skills with the progress bar where
      //Name: what is displayed alongside the progress bar
      //progress: the percent you want the bar filled
      languages: [
        {
          name: 'C#',
          progress: '95'
        },
        {
          name: 'Python',
          progress: '75'
        },
        {
          name: 'Javascript',
          progress: '85',
        },
        {
          name: 'C++',
          progress: '70',
        },
        {
          name: 'Vue.js',
          progress: '90',
        },
        {
          name: 'SQL',
          progress: '80',
        },
        {
          name: 'Java',
          progress: '75',
        },
        {
          name: 'Haskell',
          progress: '50',
        },
        {
          name: 'Assembly',
          progress: '35',
        },
        {
          name: 'HTML',
          progress: '70'
        },
        {
          name: 'CSS',
          progress: '55'
        },
        {
          name: 'Verilog',
          progress: '40'
        },
        {
          name: '.Net Framework',
          progress: '70'
        },
        {
          name: 'Git',
          progress: '80',
        },
        {
          name: 'Subversion',
          progress: '85'
        }
      ],
    }
  },
  created(){
    let uri = window.location.href.split('?');
    console.log(uri);
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<template>
  <div v-if="!isMobile()">

      <div class="mainContainer" style="background-color: rgb(52, 73, 85);">
        <div style="display: flex;">
          <div class="desktopLeftContainer">
            <b-card style=" height: 100%;">
              <b-avatar :src="photoSrc" size="15rem"></b-avatar>
              <b-card-body>
                <b-card-title>{{ name }}</b-card-title>
                <b-card-sub-title class="h5 mb-2">Info</b-card-sub-title>
                <b-list-group flush>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="envelope-fill"></b-icon> Email</p>
                    <b-card-sub-title class="mb-2">{{ email }}</b-card-sub-title>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="telephone-fill"></b-icon> Phone</p>
                    <b-card-sub-title class="mb-2">{{ phone }}</b-card-sub-title>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="person-fill"></b-icon> Birthday</p>
                    <b-card-sub-title class="mb-2">{{ bday }}</b-card-sub-title>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="pin-map-fill"></b-icon> Residence</p>
                    <b-card-sub-title class="mb-2">{{ location }}</b-card-sub-title>
                  </b-list-group-item>
                </b-list-group>
                <b-card-sub-title class="h4 mb-2"> Socials</b-card-sub-title>
                <b-list-group flush>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="github"></b-icon> GitHub</p>
                    <b-card-sub-title class="mb-2"><a :href="gitURL" target="_blank"> {{ gitDisplay }}
                      </a></b-card-sub-title>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="linkedin"></b-icon> LinkedIn</p>
                    <b-card-sub-title class="mb-2"><a :href="linkedInURL" target="_blank">{{
                      linkedInDisplay
                    }}</a></b-card-sub-title>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="h4 mb-2"><b-icon icon="folder-fill"></b-icon> Full Resume</p>
                    <b-card-sub-title class="mb-2"><a :href="linkedInURL">
                        <a :href="`${publicPath}${resumeDownload}`" :download="resumeDownload">Click to Download</a>
                      </a></b-card-sub-title>
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
            </b-card>
          </div>
          <div class="desktopRightContainer">
            <b-card title="Bio" sub-title="Who Am I?" style=" height: 100%;">
              <b-card-text>
                <div v-for="text in biotext" :key="text.id">
                  {{ text.text }}<br><br>
                </div>
              </b-card-text>
              <b-card title="Education" sub-title="August 2020 - May 2024" :img-src="universityLogo"
                img-height="150" img-width="150" class="desktopCardFormat" img-alt="Card image" img-right>
                <b-card-text>
                  <b>{{ this.university }}</b>
                  <br>
                  <i>{{ this.major }}</i>
                  <br>
                  <i>{{ this.focusArea }}</i>
                  <br>
                  <i>{{ this.minor }}</i>
                </b-card-text>
              </b-card>
              <b-card title="Skills" sub-title="Languages and Frameworks (% are not absolute)" class="desktopCardFormat"
                horizontal>
                <b-card-group deck v-for="name in languages" :key="name.id">
                  <b-list-group-item style="  margin-bottom: 2.55vh; float: left; width: 50%;">
                    {{ name.name }}
                    <b-progress :value="name.progress" class="w-50" variant="secondary" height="5px"></b-progress>
                  </b-list-group-item>
                </b-card-group>
              </b-card>
            </b-card>
          </div>
        </div>
        <div class="bottomCard">
          <b-card title="My History" class="desktopTimeline">
            <div v-for="title in events" :key="title.id">
              <vue-timeline-update theme="light" :date="title.date" :title="title.title" :description="title.description"
                :thumbnail="title.photo" :category="title.category" :icon="title.icon" :color="title.color" />
            </div>
          </b-card>
        </div>
      </div>
  </div>
  <div v-else>
      Mobile device detected, please run in desktop mode 
      while I am working on the mobile site :)
  </div>
</template>

<style>
.desktopTimeline {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 2.5vh;
  margin-top: 2.5vh;
}
.desktopCardFormat {
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
}
.desktopLeftContainer {
  margin-top: 2vh;
  min-width: 24.5%;
  margin-left: 10%;
  text-align: center;
  margin-right: 1%;
}
.desktopRightContainer {
  float: right;
  margin-top: 2vh;
  margin-right: 10%;
  min-width: 49.5%;
}
</style>
