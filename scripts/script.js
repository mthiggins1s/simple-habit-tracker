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
