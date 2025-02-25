export const habitContainer = document.getElementById('habit-container');
export const habitNameInput = document.getElementById('habit-name-input');
export const totalCompleted = document.getElementById('total-completed');
export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const habits = [];
export const storedHabits = localStorage.getItem('habits');