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
    // this line attaches an event listener to the button with the ID "add-habit-btn". When the button is clicked, the following function is executed.
    const habitName = document.getElementById('habit-name-input').value.trim();
    // this retrieves the value of the input field with the ID "habit-name-input" and trims any leading or trailing whitespace.
    if (!habitName) return alert("Please enter a habit name!");
    // if the habitName is empty, an alert is shown asking the user to enter a habit, and the function stops working.
    const newHabitDiv = document.createElement('div');
    newHabitDiv.classList.add('habit');
    // creates a new div element, assigns it the class 'habit', and stores it in the newHabitDiv variable. This will be the container for the new habit.
    const newLabel = document.createElement('label');
    newLabel.textContent = habitName;
    // creates a new label element and sets its text content to the habitName value the user entered.
    const newCheckboxContainer = document.createElement('div');
    newCheckboxContainer.classList.add('checkbox-container');
    // creates a new div element with the class 'checkbox-container' to hold the checkboxes for the days of the week.
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].forEach((day, i) => {
    // Loops over each day of the week to generate a checkbox for that day. The variable 'day' will hold the name of the day (e.g. "sunday", "monday", etc.).
      const newCheckbox = document.createElement('input');
      newCheckbox.type = 'checkbox';
      newCheckbox.id = `${habitName.toLowerCase().replace(/\s+/g, '-')}-${day.toLowerCase()}`;
      newCheckboxContainer.appendChild(newCheckbox);
    // for each day, a new 'input' element (checkbox) is created.
    // The 'id' of the checkbox is dynamically set to include the habitName (converted to lowercase and spaces replaced with hyphens) and the name of the day, so each checkbox gets a unique ID.
    // the checkbox is then added to the newCheckboxContainer div.
    });
    newHabitDiv.append(newLabel, newCheckboxContainer);
    // the newly created label and checkboxContainer are added as children to the newHabitDiv.
    document.getElementById('habit-container').appendChild(newHabitDiv);
    // the newHabitDiv, which now contains the habit name and checkboxes for the days of the week, is added to the element with the ID habit-container.
    document.getElementById('habit-name-input').value = '';
    // the input field for the habit name is cleared, resetting it for the next habit.
  });

  // Delete Habit