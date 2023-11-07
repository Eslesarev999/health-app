const dateElement = document.getElementById("H_date");
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
dateElement.textContent = formattedDate;