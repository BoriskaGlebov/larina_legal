// Импорт стилей
import '../css/style.css';

/* ========================
   ИНИЦИАЛИЗАЦИЯ SWIPER
======================== */
const swiper = new Swiper('.testimonials-swiper', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* ========================
   ОБРАБОТКА ФОРМЫ
======================== */
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Получение значений полей
    const { name_project, message, privacy } = form;

    // Простая валидация
    if (
        !name_project.value.trim() ||
        !message.value.trim()
    ) {
        alert('Пожалуйста, заполните все обязательные поля и подтвердите согласие.');
        return;
    }

    // Подготовка данных
    const formData = new FormData(form);

    // Отключение кнопки отправки на время запроса
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
        const response = await fetch('https://formspree.io/f/mnnvobkq', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            alert('Заявка успешно отправлена!');
            form.reset();
        } else {
            alert('Ошибка при отправке. Попробуйте позже.');
        }
    } catch (error) {
        alert('Ошибка сети. Проверьте соединение.');
    } finally {
        submitBtn.disabled = false;
    }
});

/* ========================
   КНОПКА ПРОКРУТКИ ВВЕРХ (1)
======================== */
const scrollToTopBtn1 = document.getElementById('scrollToTopBtn');

scrollToTopBtn1?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ========================
   КНОПКА ПРОКРУТКИ ВВЕРХ (2) ПОСЛЕ СКРОЛЛА
======================== */
const scrollToTopBtn2 = document.getElementById('scrollToTopBtn2');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn2?.classList.remove('hidden');
    } else {
        scrollToTopBtn2?.classList.add('hidden');
    }
});

scrollToTopBtn2?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
