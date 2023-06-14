// Define the data object to store personal data, contact information, and project details.
var data = {
  // A brief introduction to be shown in the 'About' section.
  introduction: "As a software developer and emerging AI researcher, I bring military and nuclear engineering principles to the tech world. With a passion for safety and detail, I'm navigating the intersection of established practices and cutting-edge innovation.",
  
  // Contact information with links to social media profiles.
  contact: {
    twitter: "https://twitter.com/artificialsean",
    github: "https://github.com/mrplants",
    linkedin: "https://linkedin.com/in/mrplants",
    email: "fitzgerald.sean.t@gmail.com"
  },
  
  // A link to the resume file.
  resumeLink: "https://mrplants.github.io/Sean_Fitzgerald_Resume.pdf",

  // Modified projects array
  projects: [
    {
      "name": "Personal Deep Learning Lab",
      "coverImage": "https://mrplants.github.io/project_1_cover.png", 
      "coverImageAlt": "/imagine prompt:A visual representation of a neural network is superimposed on a subtly lit background representing an array of computing devices. The image subtly conveys activity and processing power without highlighting the specific setup of the hardware. This design signifies the core functionality of the lab - an active, robust system for deep learning exploration. --ar 4:1",
      "summary": "Constructed and manage an innovative deep learning lab hosting 8 GPUs.",
      "description": "Within the confines of my lab, I have deployed an array of 8 different GPUs, housed in a streamlined and efficient setup. Leveraging the flexibility of this non-traditional infrastructure, I've installed deep learning libraries on each server, essentially creating my own personal sandbox for AI exploration. Beyond just hardware configuration, I also undertake remote server administration, honing my skills in managing and optimizing computing resources. This personal project underscores my capability to create effective solutions, regardless of conventional boundaries, and represents my relentless pursuit of knowledge in the AI domain.",
      "skills": "GPU Computing, Remote Server Management, Deep Learning Libraries (TensorFlow, PyTorch)",
    },
    {
      "name": "Bonsai Cultivation - Juniper and Japanese Maple",
      "coverImage": "https://mrplants.github.io/project_2_cover.png", 
      "coverImageAlt": "/imagine prompt:A Juniper bonsai and a Japanese Maple bonsai stand side by side against a tranquil backdrop, showcasing their distinct shapes and foliage. The Juniper, with its resilient, sun-loving nature, and the Japanese Maple, with its delicate leaves and preference for indirect light, represent the balance between strength and finesity. The image exudes a sense of patience, growth, and harmony, reflecting the essential traits required in a collaborative tech environment. --ar 2:1",
      "summary": "Cultivation and care of two bonsai trees, a Juniper and a Japanese Maple, fostering an environment of continual growth, learning, and adaptability.",
      "description": "In the pursuit of understanding and appreciating the ancient art of bonsai, I have been nurturing a resilient Juniper and a delicate Japanese Maple. The diverse care requirements and growth patterns of these two species have provided invaluable lessons in patience, adaptability, and problem-solving. I have balanced the different light and water needs, ensured healthy growth conditions, and monitored their progress over time. This experience echoes the intricacies of working in a team environment, where balancing diverse project requirements, adapting to changing circumstances, and finding innovative solutions are paramount. My bonsai cultivation journey symbolizes my dedication, attention to detail, and capability to manage and nurture growth in diverse environments.",
      "skills": "Project Management, Problem Solving, Adaptability, Attention to Detail"
    }
      ]
}

// Function to fill in the data from the data object into the HTML.
function fillInData() {
  var contactSection = document.getElementById('contact');
  var aboutSection = document.getElementById('about');
  var projectsSection = document.getElementById('projects');

  // Add the contact information to the 'Contact' section.
  contactSection.innerHTML += '<a href="' + data.contact.twitter + '" target="_blank"><i class="fa fa-twitter contact-icon"></i></a>';
  contactSection.innerHTML += '<a href="' + data.contact.github + '" target="_blank"><i class="fa fa-github contact-icon"></i></a>';
  contactSection.innerHTML += '<a href="' + data.contact.linkedin + '" target="_blank"><i class="fa fa-linkedin contact-icon"></i></a>';
  contactSection.innerHTML += '<a href="mailto:' + data.contact.email + '"><i class="fa fa-envelope contact-icon"></i></a>';

  // Add the introduction and resume download button to the 'About' section.
  aboutSection.innerHTML += '<h2>About Me</h2><p>' + data.introduction + '</p>';
  aboutSection.innerHTML += '<p id="resume"><a href="' + data.resumeLink + '" download><button>Download My Resume</button></a></p>';

  // Add the project list to the 'Projects' section.
  projectsSection.innerHTML = '';
  data.projects.forEach(function(project, index) {
    var projectDiv = document.createElement('div');
    projectDiv.id = 'container'
    projectDiv.innerHTML = `
      <img src="${project.coverImage}" alt="${project.coverImageAlt}" />
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <button onclick="toggleDescription(${index})" id="toggle-button-${index}">Read More</button>
      <div id="description-${index}">
        <p>${project.description}</p>
        <p><strong>Skills:</strong> ${project.skills}</p>
      </div>
    `;
    projectsSection.appendChild(projectDiv);
  });
}

// Function to switch between tabs.
function switchTab(tabId) {
  // Get all the tab elements.
  var tabs = document.getElementsByClassName('tab-content');

  // Remove the 'active' class from all tabs.
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Add the 'active' class to the selected tab.
  document.getElementById(tabId).classList.add('active');
}

function toggleDescription(index) {
  var descriptionDiv = document.getElementById('description-' + index);
  var toggleButton = document.getElementById('toggle-button-' + index);
  
  if (descriptionDiv.classList.contains('show')) {
    descriptionDiv.classList.remove('show');
    toggleButton.textContent = 'Read More';
  } else {
    descriptionDiv.classList.add('show');
    toggleButton.textContent = 'Read Less';
  }
}

// Call the fillInData function when the window is loaded.
window.onload = fillInData;
