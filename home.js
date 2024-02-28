function changeStyle(element) {
	element.classList.add("td-hgt");
 }

 function revertStyle(element) {
	element.classList.remove("td-hgt");
 }

 function displayUTCTime() {
	const now = new Date();

	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
	const dayOfWeek = daysOfWeek[now.getUTCDay()];
	const date = now.getUTCDate().toString().padStart(2, '0');
	const month = months[now.getUTCMonth()];
	const year = now.getUTCFullYear();
	const hours = now.getUTCHours().toString().padStart(2, '0');
	const minutes = now.getUTCMinutes().toString().padStart(2, '0');
 
	const formattedDateTime = `${dayOfWeek}, ${date} ${month} ${year} ${hours}:${minutes}`;
 
	const timeElement = document.getElementById("timeuniv");
	if (timeElement) {
	    timeElement.textContent = formattedDateTime;
	}
 }

 displayUTCTime();
 setInterval(displayUTCTime, 1000);