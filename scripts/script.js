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
    // Get the habit name the user typed and remove any extra spaces
    const habitName = document.getElementById('habit-name-input').value.trim();

    // If there's no habit name, show an alert and stop the code
    if (!habitName) return alert("Please enter a habit name!");

    // Create a new div element to hold the new habit
    const newHabitDiv = document.createElement('div');
    
    // Add a class called 'habit' to the new div (for styling)
    newHabitDiv.classList.add('habit');
    
    // Create the HTML for the new habit: a label with the habit name and a container for checkboxes
    newHabitDiv.innerHTML = `<label>${habitName}</label><div class="checkbox-container"></div>`;

    // Array of days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Loop over each day and create a checkbox for each day
    days.forEach(day => {
        // Create a new checkbox
        const checkbox = document.createElement('input');
        
        // Set the checkbox type to 'checkbox'
        checkbox.type = 'checkbox';
        
        // Set a unique ID for the checkbox using the habit name and the day
        checkbox.id = `${habitName.toLowerCase().replace(/\s+/g, '-')}-${day.toLowerCase()}`;
        
        // Append the checkbox to the checkbox-container
        newHabitDiv.querySelector('.checkbox-container').appendChild(checkbox);
    });

    // Add the new habit to the habit-container on the page
    document.getElementById('habit-container').appendChild(newHabitDiv);

    // Clear the habit name input field so the user can add a new habit
    document.getElementById('habit-name-input').value = '';
});

// Delete Habit
document.getElementById('remove-habit-btn').addEventListener('click', function() {
    // Get the habit container where all the habits are stored
    const habitContainer = document.getElementById('habit-container');
    
    // Get the last habit in the container
    const lastHabit = habitContainer.querySelector('.habit:last-child');

    // If there are no habits, show an alert
    if (!lastHabit) {
        alert("There are no habits to delete!");
    } else {
        // Remove the last habit from the container
        habitContainer.removeChild(lastHabit);
    }
});