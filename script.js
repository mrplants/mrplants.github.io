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
      "coverImage": "https://mrplants.github.io/project_0_cover.png",
      "coverImageAlt": "/imagine prompt:A visual representation of a neural network.",
      "summary": "Built a deep learning lab with 8 GPUs.",
      "description": "I set up 8 GPUs in a lab at my house, installed deep learning libraries on each server, and managed remote server administration. This setup serves as a personal environment for AI exploration.",
      "skills": "GPU Computing, Remote Server Management, Deep Learning Libraries (TensorFlow, PyTorch)"
    },
    {
      "name": "ArXiv Dailies",
      "coverImage": "https://mrplants.github.io/project_2_cover.png",
      "coverImageAlt": "/imagine prompt: --ar 4:1",
      "summary": "Daily summaries of AI research papers from arXiv.",
      "description": "I create daily summaries of interesting AI papers from the arXiv preprint server. This project keeps me updated on AI research and has helped me develop skills in data collection, analysis, and presentation. <br>The five most recent summaries are listed below.<br>(Thank you to arXiv for use of its open access interoperability.)<br><br><span id=\"arxiv_dailies\"><!-- Links to summaries will be inserted here --></span>",
      "skills": "Data Collection, Data Analysis, Data Visualization, Project Management"
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
  aboutSection.innerHTML += '<p>' + data.introduction + '</p>';
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

  // Update the URL's hash to reflect the current tab.
  window.location.hash = tabId;
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

// Function to check if a file exists
function checkFileExists(url) {
  return fetch(url, { method: 'HEAD' })
      .then(response => response.ok)
      .catch(() => false);
}

// Function to generate YYYY-MM-DD format date string
function getDateStr(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Function to get 5 most recent existing files
async function getRecentFiles() {
  let today = new Date();
  let foundCount = 0;
  let files = [];

  while (foundCount < 5) {
      let dateStr = getDateStr(today);
      let url = `arxiv_dailies/${dateStr}.html`;

      if (await checkFileExists(url)) {
          files.push({ url, dateStr });
          foundCount++;
      }

      // Decrement the date
      today.setDate(today.getDate() - 1);
  }

  return files;
}

// Function to update the HTML with the found files
function updateHTML(files) {
  let html = '';

  for (let file of files) {
      html += `<a href="${file.url}">${file.dateStr}</a><br/>`;
  }

  document.getElementById('arxiv_dailies').innerHTML = html;
}

// Call the fillInData function when the window is loaded.
// Call the fillInData function when the window is loaded.
window.onload = function() {
  fillInData();

  // If there is a hash in the URL, switch to that tab.
  if (window.location.hash) {
    switchTab(window.location.hash.slice(1)); // Remove the '#' from the hash before passing it to switchTab.
  }

  // Call the function to get the arxiv files and then update the HTML
  getRecentFiles().then(updateHTML);
};