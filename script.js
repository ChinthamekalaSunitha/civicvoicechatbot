// Load a complaint template into the textarea when a type is selected
function loadTemplate() {
  const complaintBox = document.getElementById("complaint");
  const value = document.getElementById("templateSelect").value;
  
  const templates = {
    street: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nThere is a broken streetlight near Gate 4 that has been non-functional for days, causing safety concerns at night.",
    garbage: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nGarbage has been piling up near Sector B for the past 3 days. It is attracting insects and posing health risks.",
    water: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nWe have had no water supply since morning in Block A. This is affecting our daily routines and needs urgent attention.",
    harassment: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nA harassment incident occurred around 7 PM at the main market area. Immediate action and surveillance is needed.",
    drugs: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nThere have been frequent sightings of suspected drug deals happening behind the community center.",
    noise: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nLoud and disturbing music continues past midnight from the event hall next to our apartments, disrupting our sleep.",
    road: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nThe road connecting the highway to our colony has large potholes, making it difficult and dangerous to travel daily.",
    sewer: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nOpen manholes and overflowing sewage pose a health risk in our locality. Immediate cleaning and maintenance required.",
    tree: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nA fallen tree is blocking the street since yesterday. It needs to be cleared urgently to avoid traffic issues.",
    traffic: "Date: [Enter Date]\nTime: [Enter Time]\nLocation: [Enter Place]\n\nThe absence of traffic signals at the intersection near our school is causing accidents daily. Kindly install signals soon."
  };
  
  complaintBox.value = templates[value] || "";
}

// Preview the uploaded image
function previewImage() {
  const fileInput = document.getElementById("image");
  const preview = document.getElementById("preview");
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}

// Form submission with popup confirmation
document.getElementById("complaintForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("popupMessage").style.display = "block";
    
    setTimeout(() => {
      document.getElementById("popupMessage").style.display = "none";
    }, 3000);

    this.reset();
    document.getElementById("preview").style.display = "none";
  }, 1500);
});

// Redirect to CPGRAMS
function goToCPGRAMS() {
  window.open("https://pgportal.gov.in", "_blank");
}
