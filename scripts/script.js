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
        // turns my checkbox into a string (Ex. if I enter "morning walk" on Monday as my habit, and I check the box, it'll change the id to "morning-walk-monday", and then return it as "Morning Walk").
        newHabitDiv.querySelector('.checkbox-container').appendChild(checkbox);
    });

    document.getElementById('habit-container').appendChild(newHabitDiv);
    document.getElementById('habit-name-input').value = '';
});

  // Delete Habit

  document.getElementById('remove-habit-btn').addEventListener('click', function() {
    const habitContainer = document.getElementById('habit-container');
    const lastHabit = habitContainer.querySelector('.habit:last-child');

    if (!lastHabit) {
        alert("There are no habits to delete!");
    } else {
        habitContainer.removeChild(lastHabit);
    }
});