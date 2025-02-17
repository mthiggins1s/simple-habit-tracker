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
    
    const newLabel = document.createElement('label');
    newLabel.textContent = habitName;
    
    const newCheckboxContainer = document.createElement('div');
    newCheckboxContainer.classList.add('checkbox-container');

    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].forEach((day, i) => {
      const newCheckbox = document.createElement('input');
      newCheckbox.type = 'checkbox';
      newCheckbox.id = `${habitName.toLowerCase().replace(/\s+/g, '-')}-${day.toLowerCase()}`;
      newCheckboxContainer.appendChild(newCheckbox);
    });
    newHabitDiv.append(newLabel, newCheckboxContainer);
    document.getElementById('habit-container').appendChild(newHabitDiv);
    document.getElementById('habit-name-input').value = '';
  });

  // Delete Habit
  