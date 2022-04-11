$(document).ready(function () {
	$('.card').hover(
		function () {
			$(this).css('opacity', '0.7');
		},
		function () {
			$(this).css('opacity', '1');
		}
	);

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
    
	var myModal = document.getElementById('modal');
	var myInput = document.getElementById('input');

	modal.addEventListener('shown.bs.modal', function () {
		input.focus();
	});
});
