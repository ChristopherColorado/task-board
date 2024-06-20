# Task Board

## Overview

Task Board is a simple Kanban board for task management. It allows project team members to add individual project tasks, manage their state of progress, and track overall project progress accordingly. This application is built using HTML, CSS, JavaScript, and jQuery.

## Features

- **Add Task:** Users can add new tasks by entering the title, description, and deadline date.
- **Task Progress Columns:** Tasks are displayed in columns representing their progress state: Not Yet Started, In Progress, and Completed.
- **Color Coding:** Tasks are color-coded to indicate whether they are nearing the deadline (yellow) or are overdue (red).
- **Drag and Drop:** Tasks can be dragged and dropped between columns to update their progress state.
- **Persistent Storage:** Tasks are stored in `localStorage` so that they persist across page refreshes.
- **Delete Task:** Tasks can be deleted from the board and will not reappear after refreshing.

## Usage

1. **Open the Task Board:**

   - Open `index.html` in a web browser.

2. **Add a New Task:**

   - Click the "Add Task" button.
   - Fill in the task title, description, and deadline in the modal form.
   - Click "Save Task" to add the task to the board.

3. **Manage Tasks:**

   - Tasks will be displayed in the "To Do" column initially.
   - Drag and drop tasks to the "In Progress" or "Done" columns as their status changes.
   - Tasks nearing the deadline will be highlighted in yellow, and overdue tasks will be highlighted in red.

4. **Delete a Task:**
   - Click the "Delete" button on a task card to remove the task from the board.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `index.html` in your preferred web browser.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
