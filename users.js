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

// Sample data for the users list
const users = [
  { firstName: "", lastName: "", username: "2c_duncanm2c", company: "" },
  { firstName: "", lastName: "", username: "2c_garrys2c", company: "" },
  // Add more users here
];

function addUser() {
  alert("Add Users functionality is not implemented in this demo.");
}

// Function to populate the table with user data
function populateTable(page = 1, itemsPerPage = 5, searchTerm = "") {
  const table = document.getElementById("userTable");
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const filteredUsers = users.filter(
    user =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedUsers = filteredUsers.slice(start, end);

  table.innerHTML = `
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Company</th>
      <th>Actions</th>
    </tr>
    ${paginatedUsers
      .map(
        user => `
        <tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.username}</td>
          <td>${user.company}</td>
          <td><a href="user_details.html?username=${user.username}" target="_blank">Details</a></td>
        </tr>
      `
      )
      .join("")}
  `;

  renderPagination(filteredUsers.length, page, itemsPerPage);
}

// Function to render pagination
// ... (Same as in the previous script.js) ...

// Function to handle the search input
function filterUsers() {
  const searchInput = document.getElementById("userSearch");
  populateTable(1, 5, searchInput.value);
}

// Call the populateTable function when the page loads
document.addEventListener('DOMContentLoaded', function() {
  populateTable();
});
