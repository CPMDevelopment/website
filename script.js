// JavaScript code for the search functionality and pagination

// Sample data for the controller list (replace with your actual data)
const controllers = [
  { title: "GTL_1", version: "1.0.0", installation: "KAPITOL", lastConnected: "2023-08-02 12:34:56" },
  { title: "GTL_2", version: "1.0.0", installation: "KAPITOL", lastConnected: "2023-08-02 13:45:23" },
  // Add more controllers here
];

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
