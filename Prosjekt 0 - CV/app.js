document.addEventListener('DOMContentLoaded', () => {
	let headers = document.querySelectorAll('.resume__entry-header');
	headers.forEach(header => {
			header.addEventListener('click', () => {
					let box = header.nextElementSibling;
					if (box && box.classList.contains('resume__box--collapsible')) {
							box.classList.toggle('resume__box--hidden');
					}
			});
	});
});
