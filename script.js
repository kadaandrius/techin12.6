document.addEventListener('DOMContentLoaded', () => {
    const calendar = {
      month: document.querySelector('.month'),
      day: document.querySelector('.day'),
      date: document.querySelector('.date'),
      year: document.querySelector('.year'),
    };
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const today = new Date();
    calendar.month.textContent = months[today.getMonth()];
    calendar.day.textContent = days[today.getDay()];
    calendar.date.textContent = today.getDate();
    calendar.year.textContent = today.getFullYear();
  });
  