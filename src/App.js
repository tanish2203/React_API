const apiUrl = "https://dummyjson.com/users";
async function fetchAndDisplayUserData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (Array.isArray(data.users)) {
      const tableBody = document.querySelector("#user-table tbody");
      data.users.forEach((user, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = user.id;
        const imgCell = row.insertCell();
        const img = document.createElement("img");
        img.src = user.image;
        img.alt = "User Image";
        imgCell.appendChild(img);
        row.insertCell().textContent = user.firstName;
        row.insertCell().textContent = user.lastName;
        row.insertCell().textContent = user.gender;
        row.insertCell().textContent = user.email;
        row.insertCell().textContent = user.username;
        row.insertCell().textContent = user.domain;
        row.insertCell().textContent = user.ip;
        row.insertCell().textContent = user.university;
      });
    } else {
      console.error("No user data found in the API response");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
fetchAndDisplayUserData();

const App = () => {
    return(
      <>
        <body class="bg-dark">
        <h1 class="text-center my-4">Dummy Data</h1>
        {/* <h1>Dummy Data</h1> */}
        <table id="user-table" class="table table-dark">
        <thead class="table-dark color-white">
        <tr>
          <th class="text-center" scope="col">ID</th>
          <th class="text-center" scope="col">Image</th>
          <th class="text-center" scope="col">First Name</th>
          <th class="text-center" scope="col">Last Name</th>
          <th class="text-center" scope="col">Gender</th>
          <th scope="col">Email</th>
          <th scope="col">Username</th>
          <th scope="col">Domain</th>
          <th scope="col">IP Address</th>
          <th scope="col">University</th>
        </tr>
        </thead>
        <tbody></tbody>
        </table>
        </body>
    </>
    )
}

export default App;
