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
      detailed: false, //bool that enables detailed view of the timeline
      events: [
        {
          title: 'Start new Internship!',
          date: new Date('05/30/2023'),
          description: 'This is a test',
          category: 'Job Update',
          photo: '',
          color: 'red',
        },
        {
          title: 'Created this website',
          date: new Date('02/10/2023'),
          description: '',
          category: 'Project Update',
          photo: '',
          color: 'blue',
        },
        {
          title: 'Started 3-month research project',
          date: new Date('08/30/2022'),
          description: '',
          category: 'Project Update',
          photo: '',
          color: 'blue',
        },
        {
          title: 'Switched to part-time with Collins Aerospace',
          date: new Date('08/16/2022'),
          description: '',
          category: 'Job Update',
          photo: '',
          color: 'black',
        },
        {
          title: 'Began Student Ambassador role with Collins Aerospace',
          date: new Date('08/15/2022'),
          description: '',
          category: 'Job Update',
          photo: '',
          color: 'black',
        },
        {
          title: 'Internship with Collins Aerospace',
          date: new Date('05/16/2022'),
          description: '',
          category: 'Job Update',
          photo: '',
          color: 'black',
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
            <b-card-sub-title class="h4 mb-2">Socials</b-card-sub-title>
            <b-list-group flush>
              <b-list-group-item>
                <p class="h4 mb-2"><b-icon icon="github"></b-icon> GitHub</p>
                <b-card-sub-title class="mb-2"><a :href="gitURL"> {{ gitDisplay }} </a></b-card-sub-title>
              </b-list-group-item>
              <b-list-group-item>
                <p class="h4 mb-2"><b-icon icon="linkedin"></b-icon>LinkedIn</p>
                <b-card-sub-title class="mb-2"><a :href="linkedInURL">{{
                  linkedInDisplay
                }}</a></b-card-sub-title>
              </b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-card>
      </div>
      <div class="rightCardContainer">
        <b-card title="Bio" sub-title="Who Am I?">
          <b-card-text>
            As a Software Engineering Intern at Collins Aerospace, I am dedicated to developing innovative products and
            services that streamline manufacturing processes and increase efficiency. With a strong background in
            engineering and a passion for technology, I am excited to take on new challenges and continue learning in
            the dynamic aerospace and defense industry. In the near future, I will have the opportunity to further my
            skills and knowledge as a DLDP Intern at Raytheon Technologies, a leading global provider of advanced
            defense and aerospace technologies.
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
      <b-card title="My Hobbies">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
        img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <b-carousel-slide img-src="https://i.imgur.com/Y1gDzjX.jpg">
          <h1>Example Photo</h1>
        </b-carousel-slide>
      </b-carousel>
      </b-card>
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
  margin-bottom: 2.85vh;
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
  float: right;
}

.mainContainer {
  background-color: rgb(52, 73, 85);
}
</style>
