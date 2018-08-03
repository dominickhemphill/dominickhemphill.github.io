//Get modal element
const button = document.getElementById('bioModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal(){
	button.style.display = 'block';

}

function closeModal(){
	button.style.display = 'none';

}

function outsideClick(e){
	if(e.target == button){
	button.style.display = 'none';
}
}

function toggleSidebar(ref) {
	ref.classList.toggle('active');
	document.getElementById('sidebar').classList.toggle('active');
}