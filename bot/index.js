// Импортируем бота
const ICQ = require("icq-bot").default;

// Создаём фасад пакета ICQ
const bot = new ICQ.Bot("");

// Создаём обработчик для новых сообщений
const handlerNewMessage = new ICQ.Handler.Message(null, (bot, event) => {
  // Получаем номер чата из объекта event
  const chatId = event.fromChatId;
  // Выводим в консоль тип события и номер чата
  console.log(`New Message event.fromChatID = ${chatId}`);
  // Отправляем сообщение в чат отправителя
  bot.sendText(chatId, "Привет!");
});

// Получаем диспетчер бота и добавляем в него обработчики
bot.getDispatcher().addHandler(handlerNewMessage);
bot.getDispatcher().addHandler(handlerDeleteMessage);

// Запускаем пулинг для получения команд обработчикам
bot.startPolling();
