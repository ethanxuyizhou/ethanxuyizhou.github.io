import { Component, OnInit } from '@angular/core';

interface Education {
  school : string,
  grade : string,
  degree : string,
  class : string
}

interface Internship {
  company : string;
  description : string;
  url : string
}

interface Project {
  title : string;
  description : string
}

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})

export class IntroComponent implements OnInit {
  education : Education = {
    school: "Carnegie Mellon University",
    grade: "QPA: 3.74",
    degree: "Bachelor of Computer Science",
    class: "2016 - 2019"
  } 

  internships : Internship[] = [
    { company: "Jane Street",
      description: `I optimized the performance of our core trading activity distribution systems by developing
      a library that minimizes the amount of buffering during any manipulation or interleaving of pipes. 
      Ultimately, I improved the overall throughput of the system by 50%.
      `,
      url: "https://janestreet.com" 
    }, 
    { company: "Google",
      description: `I implemented web share target to progressive web app (PWA) to provide a more native experience. 
      Specifically, I added support to allow PWAs to be registered as a file share target, which allows other apps to share
      files directly to PWAs using POST request.
      `,
      url: "https://google.com"
    },
    { company: "Zensors",
      description: `I built prototypes of raspberry-based, cost-efficient cameras that deliver high-resolution images 
      to our deep learning platform. I implemented the backend infrastructure to support an easy camera-setup process to connect
      the cameras to wifi and send periodic images to our servers. 
      `,
      url: "https://zensors.com"
    }];

    projects : Project[] = [
     { title: "Terminal Strategy Bot",
       description: `My two other teammates and I developed a game strategy bot that competed in the Citadel Terminal competition
       and won first place against 30 other bots. I implemented a highly optimized stimulator used to determinal the next optimal
       move. I also built a self-adjusting strategy learner to predict opponent's moves. 
       `
     },
     { title: "Mobot",
       description: `Built a 'self-driving' mobile robot that uses computer vision to follow a given trail. I used
       OpenCV to implement image segmentation and contouring to process video streams. Won first place in the Carngie Mellon
       Mobot Competition, and Firce Place in the Hackberry Pi Award.`
     }

    ]

  constructor() { }

  ngOnInit(): void {
  }
}