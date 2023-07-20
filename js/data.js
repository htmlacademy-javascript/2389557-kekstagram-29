import { getRandomNumber } from './util.js';

// Функция для генерации случайного комментария
export function generateRandomComment() {
  const avatars = [
    'img/avatar-1.svg',
    'img/avatar-2.svg',
    'img/avatar-3.svg',
    'img/avatar-4.svg',
    'img/avatar-5.svg',
    'img/avatar-6.svg',
  ];

  const names = [
    'Иван',
    'Александра',
    'Михаил',
    'Екатерина',
    'Алексей',
    'Анна',
    'Сергей',
    'Дарья',
    'Павел',
    'Наталья',
  ];

  const sentences = [
    'Очень красивая фотография!',
    'Отличный кадр!',
    'Супер!',
    'Мне нравится!',
    'Прекрасное место!',
    'Очаровательно!',
    'Интересный ракурс!',
    'Сказочно!',
    'Отличная работа!',
    'Красивые цвета!',
    'Замечательно!',
  ];

  const randomAvatarIndex = getRandomNumber(0, avatars.length - 1);
  const randomNameIndex = getRandomNumber(0, names.length - 1);
  const randomSentenceIndex = getRandomNumber(0, sentences.length - 1);

  return {
    id: getRandomNumber(1, 1000),
    avatar: avatars[randomAvatarIndex],
    message: sentences[randomSentenceIndex],
    name: names[randomNameIndex],
  };
}

// Функция для генерации массива комментариев
export function generateCommentsArray() {
  const commentsArray = [];
  const usedIds = new Set();

  for (let i = 1; i <= 25; i++) {
    const commentsCount = getRandomNumber(0, 30);
    const comments = [];

    // Генерация случайных комментариев
    for (let j = 0; j < commentsCount; j++) {
      const comment = generateRandomComment();
      // Проверка на уникальность id комментария
      while (usedIds.has(comment.id)) {
        comment.id = getRandomNumber(1, 1000);
      }
      usedIds.add(comment.id);
      comments.push(comment);
    }

    commentsArray.push(comments);
  }

  return commentsArray;
}
