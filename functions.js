document.addEventListener('DOMContentLoaded', () => {
    const openResumeFormBtn = document.getElementById('openResumeForm');
    const resumeModal = document.getElementById('resumeModal');
    const closeBtn = document.querySelector('.close');
    const contactForm = document.querySelector('form');
    const themeSwitcher = document.getElementById('themeSwitcher');
    const header = document.querySelector('header');

    openResumeFormBtn.addEventListener('click', () => {
        resumeModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        resumeModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === resumeModal) {
            resumeModal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', (event) => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Пожалуйста, заполните все обязательные поля.');
            event.preventDefault();
        }
    });

    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeSwitcher.textContent = 'Светлая тема';
            header.style.background = '#0033664f';
        } else {
            themeSwitcher.textContent = 'Темная тема';
            header.style.background = '#009FE3';
        }
    });
});
