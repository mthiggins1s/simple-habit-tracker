// Tick Checkboxes for Completion

document.getElementById('mark-complete').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let completedCount = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            completedCount++;
        }
    });

    document.getElementById('total-completed').textContent = completedCount;
});

// Add Habit
document.getElementById('add-habit-btn').addEventListener('click', function() {
    const habitName = document.getElementById('habit-name-input').value.trim();
    if (!habitName) return alert("Please enter a habit name!");

    const newHabitDiv = document.createElement('div');
    newHabitDiv.classList.add('habit');
    newHabitDiv.innerHTML = `<label>${habitName}</label><div class="checkbox-container"></div>`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    days.forEach(day => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${habitName.toLowerCase().replace(/\s+/g, '-')}-${day.toLowerCase()}`;
        newHabitDiv.querySelector('.checkbox-container').appendChild(checkbox);
    });

    document.getElementById('habit-container').appendChild(newHabitDiv);
    document.getElementById('habit-name-input').value = '';

    saveHabits(); // Save after adding a habit
});

// Delete Habit
document.getElementById('remove-habit-btn').addEventListener('click', function() {
    const habitContainer = document.getElementById('habit-container');
    const lastHabit = habitContainer.querySelector('.habit:last-child');

    if (!lastHabit) {
        alert("There are no habits to delete!");
    } else {
        habitContainer.removeChild(lastHabit);
        saveHabits(); // Save after deleting a habit
    }
});

// Mark Habit Complete
document.getElementById('mark-complete').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let completedCount = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) completedCount++;
    });

    document.getElementById('total-completed').textContent = completedCount;

    saveHabits(); // Save after marking habits complete
});

// Save Habits to localStorage
function saveHabits() {
    const habits = [];
    const habitDivs = document.querySelectorAll('.habit');

    habitDivs.forEach(function(habitDiv) {
        const habitName = habitDiv.querySelector('label').textContent;
        const checkboxes = habitDiv.querySelectorAll('input[type="checkbox"]');
        const checkboxStates = [];

        checkboxes.forEach(function(checkbox) {
            checkboxStates.push(checkbox.checked);
        });

        habits.push({ name: habitName, checkboxStates: checkboxStates });
    });

    // Save to localStorage as JSON string
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Load Habits from localStorage when page loads
function loadHabits() {
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
        const habits = JSON.parse(storedHabits);

        habits.forEach(function(habit) {
            const newHabitDiv = document.createElement('div');
            newHabitDiv.classList.add('habit');
            newHabitDiv.innerHTML = `<label>${habit.name}</label><div class="checkbox-container"></div>`;

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            days.forEach((day, index) => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `${habit.name.toLowerCase().replace(/\s+/g, '-')}-${day.toLowerCase()}`;
                checkbox.checked = habit.checkboxStates[index];
                newHabitDiv.querySelector('.checkbox-container').appendChild(checkbox);
            });

            document.getElementById('habit-container').appendChild(newHabitDiv);
        });
    }
}

// Load habits from localStorage when the page is refreshed
window.addEventListener('load', loadHabits);
