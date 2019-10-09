window.onload = () => {
  // po kliknuti na btnaddtask chcem aby zobral moj text v inpute a pridal tento text do zoznamu vramci ul elementu a do neho vlozim li.collection-item
  const taskInput = document.getElementById('task');
  const taskList = document.getElementsByClassName('collection')[0];

  document.getElementById('form-add-task').addEventListener('submit', () => {
    const taskInputValue = taskInput.value.trim();

    if (taskInputValue.trim().length === 0) {
      return M.toast({ html: 'Your input is empty. Please define!' });
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    const vytvorenyText = document.createTextNode(taskInputValue);
    li.className = 'collection-item';
    span.appendChild(vytvorenyText);
    li.appendChild(span);

    const link = document.createElement('a');
    link.href = '#';
    link.className = 'orange-text secondary-content delete-item';
    link.innerHTML = '<i class="material-icons">add</i>';
    li.appendChild(link);

    link.addEventListener('click', e => {
      e.target.parentElement.previousSibling.parentElement.remove();
    });
    taskList.appendChild(li);
  });

  document.getElementById('filter').addEventListener('keyup', e => {
    document.querySelectorAll('.collection-item span').forEach(element => {
      element.parentElement.style.display = 'block';

      if (!element.textContent.includes(e.target.value)) {
        element.parentElement.style.display = 'none';
      }
    });
  });
};
