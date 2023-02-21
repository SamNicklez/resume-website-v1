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
      //Images and text that can be shown to show off your hobbies
      images: [
        {
          link: 'https://i.imgur.com/Y1gDzjX.jpg',
          description: 'My Hobbies',
        },
        {
          link: 'https://i.imgur.com/0yNW4hc.jpg',
          description: 'eSports Coaching'
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
      events: [
        {
          title: 'Note',
          date: new Date('02/21/2023'),
          description: `Timeline is still in progress...`,
          category: 'Project Update',
          photo: '',
          color: 'purple',
        },
        {
          title: 'Start new Internship!',
          date: new Date('05/30/2023'),
          description: `This summer, I have the opportunity to further my skills in Raytheons Digital Leadership Development Program where
                        I will be exploring the world of project management in Denver, CO. I hope to gain additional knowledge in the aerospace
                        and defense industry.
                          `,
          category: 'Job Update',
          photo: 'https://i.imgur.com/j8mTrs9.jpg',
          color: 'red',
        },
        {
          title: 'Created this website',
          date: new Date('02/10/2023'),
          description: `Started the creation of this very website! Using Vue.js I hope to show off my newly founded skills in
          web design while also providing additional information that could not fit on my resume. All source code
          for this project is on my GitHub!`,
          category: 'Project Update',
          photo: 'https://i.imgur.com/uVDq29v.jpg',
          color: 'blue',
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
        },
        {
          title: 'Student Ambassador for Collins Aerospace',
          date: new Date('08/15/2022'),
          description: `During my summer internship with Collins, I had the oppertunity to become a Student Ambassador
          where I get to represent Collins Aerospace at the University of Iowa. During the semester, I had the pleasure
          of connecting with students at Collins sponsored campus events such as resume workshops, seminars, and career fairs. This
          also gave the unique oppertunity to speak with many of the hiring managers for Collins in the midwest area.`,
          category: 'Extracurricular Update',
          photo: 'https://i.imgur.com/0fgu8JB.jpg',
          color: 'orange',
        },
        {
          title: 'Started Summer Internship with Collins Aerospace',
          date: new Date('05/16/2022'),
          description: `Started my first ever internship as a Software Engineer at Collins Aerospace where I focused
          on making existing manufacturing processes more efficient. [Add more info here]`,
          category: 'Job Update',
          photo: 'https://i.imgur.com/fD9XUtg.jpg',
          color: 'red',
        },
        {
          title: 'Wordle Software Design Project',
          date: new Date('05/1/2022'),
          description: `Our final project in ECE:3330: Intro to Software Design where a group of two other students and I
          created our own rendition the New York Times game 'Wordle'. This project was coded [FINISH DESCRIPTION]. Source
           code can be found on my GitHub page!`,
          category: 'Project Update',
          photo: '',
          color: 'blue',
        },
        {
          title: 'Vice President of The University of Iowa League of Legends eSports Club',
          date: new Date('03/1/2022'),
          description: 'After one year of being the events manager for the club, [Insert more stuff here]',
          category: 'Extracurricular Update',
          photo: 'https://i.imgur.com/0yNW4hc.jpg',
          color: 'orange',
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
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
}
</script>

<template>
  <div v-if="!isMobile()">
    <desktop>
      <div class="mainContainer">
        <div class="topContainer">
          <div class="leftCardContainer">
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
                        <a :href="`${publicPath}snicklausResume.pdf`" download="snicklausResume.pdf">Click to Download</a>
                      </a></b-card-sub-title>
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
            </b-card>
          </div>
          <div class="rightCardContainer">
            <b-card title="Bio" sub-title="Who Am I?" style=" height: 100%;">
              <b-card-text>
                <div v-for="text in biotext" :key="text.id">
                  {{ text.text }}<br><br>
                </div>
              </b-card-text>
              <b-card title="Education" sub-title="August 2020 - May 2024" img-src="https://i.imgur.com/y7MGuUn.png"
                img-height="150" img-width="150" class="cardFormat" img-alt="Card image" img-right>
                <b-card-text>
                  <b>University of Iowa</b>
                  <br>
                  <i>Bachelor of Science in Engineering, Computer Science & Engineering</i>
                  <br>
                  <i>Focus Area in Big Data & Machine Learning</i>
                  <br>
                  <i>Minor in Mathematics</i>
                </b-card-text>
              </b-card>
              <b-card title="Skills" sub-title="Languages and Frameworks (% are not absolute)" class="cardFormat"
                horizontal>
                <b-card-group deck v-for="name in languages" :key="name">
                  <b-list-group-item class="languages">
                    {{ name.name }}
                    <b-progress :value="name.progress" class="w-50" variant="secondary" height="5px"></b-progress>
                  </b-list-group-item>
                </b-card-group>
              </b-card>
            </b-card>
          </div>
        </div>
        <div class="bottomCard">
          <b-card title="Timeline" class="cardFormat">
            <div v-for="title in events" :key="title.id">
              <vue-timeline-update theme="light" :date="title.date" :title="title.title" :description="title.description"
                :thumbnail="title.photo" :category="title.category" :icon="title.icon" :color="title.color" />
          </div>
          </b-card>
        </div>
      </div>
    </desktop>
  </div>
  <div v-else>
    <mobile>
      Mobile device detected, please run in desktop mode while I am working on the mobile site :)
    </mobile>
  </div>
</template>

<style>
.bottomCard {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 2.5vh;
  margin-top: 2.5vh;
}

.languages {
  margin-bottom: 2.55vh;
  float: left;
  width: 50%;
}

.cardFormat {
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
}

.mb-5 {
  margin-left: 1vh;
  vertical-align: baseline;
}

.progressContainer {
  margin-top: 1vh;
  display: flex;
}

.topContainer {
  display: flex;
}

.leftCardContainer {
  margin-top: 2vh;
  min-width: 24.5%;
  margin-left: 10%;
  text-align: center;
  margin-right: 1%;
}

.rightCardContainer {
  float: right;
  margin-top: 2vh;
  margin-right: 10%;
  min-width: 49.5%;
}

.mainContainer {
  background-color: rgb(52, 73, 85);
}
</style>
