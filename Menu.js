let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector('timerdisplay');
let int = null;

document.getElementById('startTimer')
	.addEventListener('click', () => {
		if (int!==null) {
			clearInterval(int);
		}
	if milliseconds = 1000 {
		int = setTimeout(displayTimer){()
		milliseconds ++
		}, 1000);
	}
})