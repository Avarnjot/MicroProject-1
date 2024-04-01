document.addEventListener('DOMContentLoaded', () => {
    const fetchData = document.getElementById('fetchData');
    const dataContainer = document.getElementById('dataContainer');
  
    fetchData.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        displayData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    });
  
    function displayData(data) {
      // Clear previous data
      dataContainer.innerHTML = '';
  
      // Format and display the fetched JSON data
      const dataList = document.createElement('ul');
      dataList.classList.add('data-list');
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.description}`;
        dataList.appendChild(listItem);
      });
      dataContainer.appendChild(dataList);
    }
  });
  