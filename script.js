// JavaScript code for the search functionality and pagination

// Function to get the current date and time in the format "YYYY-MM-DD HH:MM:SS"
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Sample data for the controller list
const controllers = [
  { title: "GTL_1", version: "1.0.0", installation: "KAPITOL", lastConnected: getCurrentDateTime() },
  { title: "GTL_2", version: "1.0.0", installation: "KAPITOL", lastConnected: getCurrentDateTime() },
];

// Function to populate the table with controller data
function populateTable(page = 1, itemsPerPage = 5, searchTerm = "") {
  // ... Rest of the function remains unchanged ...
}

// Rest of the script...


// Function to populate the table with controller data
function populateTable(page = 1, itemsPerPage = 5, searchTerm = "") {
  const table = document.getElementById("controllerTable");
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const filteredControllers = controllers.filter(
    controller =>
      controller.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      controller.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
      controller.installation.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedControllers = filteredControllers.slice(start, end);

  table.innerHTML = `
    <tr>
      <th>Title/Name</th>
      <th>Version Running</th>
      <th>Current Installation</th>
      <th>Last Connected</th>
      <th>Actions</th>
    </tr>
    ${paginatedControllers
      .map(
        controller => `
        <tr>
          <td>${controller.title}</td>
          <td>${controller.version}</td>
          <td>${controller.installation}</td>
          <td>${controller.lastConnected}</td>
          <td><a href="details_page.html" target="_blank">Details</a></td>
        </tr>
      `
      )
      .join("")}
  `;

  renderPagination(filteredControllers.length, page, itemsPerPage);
}

// Function to render pagination
function renderPagination(totalItems, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");

  let paginationHtml = `
    <button onclick="prevPage(${currentPage})">Previous</button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `
      <button ${currentPage === i ? "disabled" : ""} onclick="goToPage(${i})">${i}</button>
    `;
  }

  paginationHtml += `
    <button onclick="nextPage(${currentPage}, ${totalPages})">Next</button>
  `;

  pagination.innerHTML = paginationHtml;
}

// Function to go to the previous page
function prevPage(currentPage) {
  if (currentPage > 1) {
    populateTable(currentPage - 1);
  }
}

// Function to go to the next page
function nextPage(currentPage, totalPages) {
  if (currentPage < totalPages) {
    populateTable(currentPage + 1);
  }
}

// Function to go to a specific page
function goToPage(page) {
  populateTable(page);
}

// Function to handle the search input
function filterControllers() {
  const searchInput = document.getElementById("
