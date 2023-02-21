<script>
export default {
  data() {
    return {
      //Values below can be changed as needed easily in case something changes
      name: "Samuel Nicklaus",
      email: "snicklaus@uiowa.edu",
      phone: "(319)-333-5747",
      bday: "Feb 6, 2002",
      location: "Iowa City, Iowa",
      gitDisplay: "github.com/SamNicklez",
      gitURL: "https://github.com/SamNicklez",
      linkedInDisplay: "linkedin.com/sam-nicklaus",
      linkedInURL: "https://www.linkedin.com/in/sam-nicklaus/",
      photoSrc: "https://i.imgur.com/hCDgktV.jpg",
      publicPath: process.env.BASE_URL,
      biotext:`As a Software Engineering Intern at Collins Aerospace, I am dedicated to developing innovative products and
            services that streamline manufacturing processes and increase efficiency. With a strong background in
            engineering and a passion for technology, I am excited to take on new challenges and continue learning in
            the dynamic aerospace and defense industry. In the near future, I will have the opportunity to further my
            skills and knowledge as a DLDP Intern at Raytheon Technologies, a leading global provider of advanced
            defense and aerospace technologies.`,
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
  }
}
</script>

<template>
  <div class="mainContainer">
    <div class="topContainer">
      <div class="leftCardContainer">
        <b-card class="text-center">
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
                <b-card-sub-title class="mb-2"><a :href="gitURL"> {{ gitDisplay }} </a></b-card-sub-title>
              </b-list-group-item>
              <b-list-group-item>
                <p class="h4 mb-2"><b-icon icon="linkedin"></b-icon> LinkedIn</p>
                <b-card-sub-title class="mb-2"><a :href="linkedInURL">{{
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
        <b-card title="Bio" sub-title="Who Am I?">
          <b-card-text>
            {{ this.biotext }}
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
          <b-card title="Skills" sub-title="Languages and Frameworks (% are not absolute)" class="cardFormat" horizontal>
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
        <li v-for="title in events" :key="title.id">
          <vue-timeline-update theme="light" :date="title.date" :title="title.title" :description="title.description"
            :thumbnail="title.photo" :category="title.category" :icon="title.icon" :color="title.color" />
        </li>
      </b-card>
    </div>
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

.ProgressText {
  min-width: 75vh;
}

.progressContainer {
  margin-top: 1vh;
  display: flex;
}

.topContainer {
  display: flex;
}

.leftCardContainer {
  float: left;
  margin-top: 2vh;
  min-width: 24.5%;
  margin-left: 10%;
}

.rightCardContainer {
  margin-top: 2vh;
  margin-right: 10%;
  min-width: 49.5%;
  margin-left: 1%;
  float: left;
}

.mainContainer {
  background-color: rgb(52, 73, 85);
}
</style>
