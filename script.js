const todayDate = document.getElementById('today-date');
const completeBtn = document.getElementById('complete-btn');
const themeBtn = document.getElementById('theme-btn');
const statusMessage = document.getElementById('status-message');

function renderTodayDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  todayDate.textContent = `今天日期：${formatted}`;
}

function markComplete() {
  statusMessage.textContent = '今日檢查已完成。';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

completeBtn.addEventListener('click', markComplete);
themeBtn.addEventListener('click', toggleDarkMode);

renderTodayDate();
