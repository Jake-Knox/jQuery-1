$(document).ready(function () {
    // Task adding functionality
    $('#taskForm').submit(function (event) {
        event.preventDefault();
        var newTaskText = $('#newTask').val();
        if (newTaskText.trim() !== '') {
            $('#taskList').append('<li><input type="checkbox"><span>' + newTaskText + '</span><button class="deleteBtn">Delete</button></li>');
            $('#newTask').val('');
        }
    });

    // Task deleting functionality
    $(document).on('click', '.deleteBtn', function () {
        $(this).parent().remove();
    });

    // Task completion functionality
    $(document).on('change', 'input[type="checkbox"]', function () {
        $(this).siblings('span').toggleClass('completed');
    });

    // Enable drag-and-drop functionality
    $('#taskList').sortable();

    $('#books').sortable();
});
