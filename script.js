// This is where you will fill in your actual JSON data
var data = {
  education: [
    // Fill in with your own data
  ],
  workExperience: [
    // Fill in with your own data
  ],
  projects: [
    // Fill in with your own data
  ]
}

// Function to fill in the HTML sections with data from the JSON
function fillInData() {
  var educationSection = document.getElementById('education');
  var workExperienceSection = document.getElementById('workExperience');
  var projectsSection = document.getElementById('projects');

  educationSection.innerHTML = '<h2>Education</h2>' + data.education.join('<br>');
  workExperienceSection.innerHTML = '<h2>Work Experience</h2>' + data.workExperience.join('<br>');
  projectsSection.innerHTML = '<h2>Projects</h2>' + data.projects.join('<br>');
}

// Call the function to fill in the data when the page loads
window.onload = fillInData;
