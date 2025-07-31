document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Show success message
    document.getElementById("successMessage").classList.remove("hidden");

    // Reset form after 3 seconds
    setTimeout(() => {
        document.getElementById("eventForm").reset();
        document.getElementById("successMessage").classList.add("hidden");
    }, 3000);
});