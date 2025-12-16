function enroll(course) {
  localStorage.setItem('selectedCourse', course);
  window.location.href = 'enroll.html';
}

var courseInput = document.getElementById('course');
if (courseInput) {
  courseInput.value = localStorage.getItem('selectedCourse') || '';
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById('message').innerText = 'Enrollment successful!';
}
var course = localStorage.getItem('selectedCourse');
document.getElementById('dashCourse').innerText = course;
if (!course) {
  alert('Please enroll first');
  window.location.href = 'index.html';
}
var progress = 40;
document.getElementById('progress').style.width = progress + '%';
document.getElementById('progressText').innerText = progress;


