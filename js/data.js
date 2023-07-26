import { getRandomNumber } from './util.js';

const AVATAR = 6;

const avatarURL = (number) => `img/avatar-${number}.svg`;

const NAMES = [
  'Иван',
  'Александр',
  'Михаил',
  'Екатерина',
  'Алексей',
  'Анна',
  'Сергей',
  'Дарья',
  'Павел',
  'Наталья',
];

const SENTENCES = [
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

// Функция для генерации случайного комментария
function generateRandomComment() {
  const randomAvatarIndex = getRandomNumber(1, AVATAR);
  const randomNameIndex = getRandomNumber(0, NAMES.length - 1);
  const randomSentenceIndex = getRandomNumber(0, SENTENCES.length - 1);

  return {
    id: getRandomNumber(1, 1000),
    avatar: avatarURL(randomAvatarIndex),
    message: SENTENCES[randomSentenceIndex],
    name: NAMES[randomNameIndex],
  };
}

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
