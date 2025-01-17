const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = "https://sushusdvehmowcevvhtt.supabase.co"; // Replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1c2h1c2R2ZWhtb3djZXZ2aHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNDc2ODEsImV4cCI6MjA0NDgyMzY4MX0.HYQ7LVPWjQh8VKc8fH6zhKNuX10UXIsZPbQWNYEzGyI"; // Replace with your Supabase ANON KEY
const supabase = createClient(supabaseUrl, supabaseKey);

// Define bucket and file information
const bucketName = "hello"; // Replace with your bucket name
const localFilePath = "playwright-report/index.html"; // Local file path

// Function to generate filename with current date and time
function generateFileName() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(now.getFullYear()).slice(-2); // Get last 2 digits of year
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${day}${month}${year}${hours}${minutes}${seconds}.html`;
}

// Function to upload file to Supabase Storage
async function uploadFile() {
  try {
    // Read the file from the filesystem
    const fileContent = fs.readFileSync(localFilePath);

    // Generate dynamic remote file name
    const remoteFilePath = `uploaded/${generateFileName()}`;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(remoteFilePath, fileContent, {
        contentType: "text/html", // Adjust content type if needed
      });

    if (error) {
      console.error("Error uploading file:", error.message);
    } else {
      console.log("File uploaded successfully:", data);
    }
  } catch (err) {
    console.error("Error reading or uploading file:", err.message);
  }
}

// Run uploadFile on server start
uploadFile();
