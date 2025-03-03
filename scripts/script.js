import {  habitContainer,  habitNameInput,  totalCompleted,  daysOfWeek, habits,storedHabits,} from "./data.js";

// Add Habit
function addHabit() {
  const habitName = habitNameInput.value.trim();

  if (!habitName) return alert("Please enter a habit name!");
  let newHabitDiv = createHabitDiv(habitName);
  habitContainer.appendChild(newHabitDiv);
  habitNameInput.value = "";

  saveHabits();
}
document.getElementById("add-habit-btn").addEventListener("click", addHabit);

// Delete Habit
document
  .getElementById("remove-habit-btn")
  .addEventListener("click", function () {
    const lastHabit = habitContainer.querySelector(".habit:last-child");

    if (!lastHabit) {
      alert("There are no habits to delete!");
    } else {
      habitContainer.removeChild(lastHabit);
      saveHabits();
    }
  });
document.getElementById("mark-complete").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let completedCount = 0;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) completedCount++;
    });
    totalCompleted.textContent = completedCount;

    saveHabits();
});
function createHabitDiv(habitName) {
  const newHabitDiv = document.createElement("div");
  newHabitDiv.classList.add("habit");
  newHabitDiv.innerHTML = `<label>${habitName}</label><div class="checkbox-container"></div>`;

  daysOfWeek.forEach((day) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${habitName
      .toLowerCase()
      .replace(/\s+/g, "-")}-${day.toLowerCase()}`;
    newHabitDiv.querySelector(".checkbox-container").appendChild(checkbox);
  });

  return newHabitDiv;
}

// Save Habits to localStorage (Mark Habits as Complete)
function saveHabits() {
  habits.length = 0;

  const habitDivs = document.querySelectorAll(".habit");
  habitDivs.forEach(function (habitDiv) {
    const habitName = habitDiv.querySelector("label").textContent;
    const checkboxes = habitDiv.querySelectorAll('input[type="checkbox"]');
    const checkboxStates = [];

    checkboxes.forEach(function (checkbox) {
      checkboxStates.push(checkbox.checked);
    });

    habits.push({ name: habitName, checkboxStates: checkboxStates });
  });
  localStorage.setItem("habits", JSON.stringify(habits));
}
function loadHabits() {
  if (storedHabits) {
    const habits = JSON.parse(storedHabits);

    habits.forEach(function (habit) {
      const newHabitDiv = createHabitDiv(habit.name);
      const checkboxes = newHabitDiv.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox, index) => {
        checkbox.checked = habit.checkboxStates[index];
      });

      habitContainer.appendChild(newHabitDiv);
    });
  }
}
window.addEventListener("load", loadHabits);