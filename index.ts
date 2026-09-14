// User class definition

class User {
    id: number;
    name: string;
    email: string;
    role: string;

    constructor(id: number, name: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

// Sample user data
const users: User[] = [
    new User(1, "Henry Arinze Ohia", "henryohia@example.com", "Administrator"),
    new User(2, "Dinah Ohia", "dinahohia@example.com", "Manager"),
    new User(3, "Confidence Johnson", "confidentjohnson@example.com", "Employee"),
    new User(4, "Divine Johnson", "divinejohnson@example.com", "Employee"),
    new User(5, "Felix Ohia", "felixohia@example.com", "Employee"),
    new User(6, "Stanley Ohia", "stanleyohia@example.com", "Employee"),
    new User(7, "Harmony Ohia", "harmonyohia@example.com", "Employee")
];

// Function to add a new user to the users array
function addUser(id: number, name: string, email: string, role: string): void {
    const newUser = new User(id, name, email, role);
    users.push(newUser);

    console.log(`User ${name} was added successfully!`);
}

addUser(8, "Emmanuella Ohia", "emmanuellaohia@example.com", "Employee");
addUser(9, "MaryJane Ohia", "maryjaneohia@example.com", "Employee");

// Function to find a user by ID using recursion
function findUserById(
    userList: User[],
    id: number,
    index: number = 0
): User {
    // Base case: we reached the end of the list without finding the user
    if (index >= userList.length) {
        throw new Error(`User with ID ${id} not found.`);
    }

    //check if the current user has the matching ID
    if (userList[index].id === id) {
        return userList[index];
    }
    
    // Recursive case: check the next user in the list
    return findUserById(userList, id, index + 1);
}


// -------------------Stretch-----------------------------------------------

function updateUser(id: number, name: string, email: string, role: string): void {
    const user = findUserById(users, id);

    user.name = name;
    user.email = email;
    user.role = role;

    console.log(`User with ID ${id} was updated successfully!`);
}

updateUser(3, "Confidence Johnson", "confidentjohnson@example.com", "Team Lead");
updateUser(4, "Divine Johnson", "divinejohnson@example.com", "HR Manager");
updateUser(5, "Felix Ohia", "felixohia@example.com", "Sales Associate");
updateUser(6, "Stanley Ohia", "stanleyohia@example.com", "Operations Manager");
updateUser(7, "Harmony Ohia", "harmonyohia@example.com", "Marketing Coordinator");

function deleteUser(id: number): void {
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        throw new Error(`User with ID ${id} not found.`);
    }

    const deletedUser = users.splice(index, 1)[0];
    console.log(`User ${deletedUser.name} with ID ${id} was deleted successfully!`);
}

try {
    deleteUser(8); // Change the ID to test different cases
} catch (error) {
    console.log("Error:", (error as Error).message);
}


function getAllUsers(): void {

    console.log("");
    console.log("===============================");
    console.log("        Business USERS");
    console.log("===============================");
    console.log("");
    
    if (users.length === 0) {
        console.log("No users found.");
        return;
    }

    users.forEach((user: User) => {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Role: ${user.role}`);
        console.log("--------------------------------");
    });
}


async function loadUsers(): Promise<User[]> {

    console.log("Loading users...");

    // Simulate an asynchronous operation, such as fetching data from a database or API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Users loaded successfully!");

    return new Promise((resolve) => {
        resolve(users);
    });
}

// Example usage of the loadUsers function
loadUsers().then((loadedUsers) => {
    console.log("Loaded users:");
    loadedUsers.forEach((user) => {
        console.log(`- ${user.name} (${user.email})`);
    });
});

// Example usage of the findUserById function
// const foundUser = findUserById(users, 3);
// if (foundUser) {
//     console.log(`User found:`);
//     console.log(`Name: ${foundUser.name}`);
//     console.log(`Email: ${foundUser.email}`);
//     console.log(`Role: ${foundUser.role}`);
// } else {
//     console.log("User not found.");
// }

try {
    const foundUser = findUserById(users, 10); // Change the ID to test different cases
    console.log("User found:");
    console.log(`Name: ${foundUser.name}`);
    console.log(`Email: ${foundUser.email}`);
    console.log(`Role: ${foundUser.role}`);
} catch (error) {
    console.log("Error:", (error as Error).message);
}

const user = new User(
    1,
    "Henry Arinze Ohia",
    "henryohia@example.com",
    "Administrator"
);

console.log("================================");
console.log("          BIZACCESS");
console.log("================================");

// console.log("Business Users:");
// console.log("");

getAllUsers();

async function startApp(): Promise<void> {
    const loadedUsers: User[] = await loadUsers();

    console.log(`Total users loaded: ${loadedUsers.length}`);
}

startApp();