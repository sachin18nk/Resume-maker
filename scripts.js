function updateResume() {
  // 1. Get Basic Inputs
  const name = document.getElementById("inpName").value;
  const title = document.getElementById("inpTitle").value;
  const contact = document.getElementById("inpContact").value;
  const summary = document.getElementById("inpSummary").value;

  document.getElementById("outName").innerText = name ? name : "YOUR NAME";
  document.getElementById("outTitle").innerText = title ? title : "Job Title";
  document.getElementById("outContact").innerText = contact
    ? contact
    : "email@example.com | Phone | Address";
  // document.getElementById("outAddress").innerText = document.getElementById(
  //   "inpAddress",
  // ).value
  //   ? document.getElementById("inpAddress").value
  //   : "123 Main St, City, State, ZIP";
  document.getElementById("outSummary").innerText = summary
    ? summary
    : "A brief professional summary goes here.";

  const skillsInput = document.getElementById("inpSkills").value;
  const skillsList = document.getElementById("outSkills");
  skillsList.innerHTML = ""; // Clear current

  if (skillsInput.trim() !== "") {
    const skillsArray = skillsInput.split(",");
    skillsArray.forEach((skill) => {
      if (skill.trim()) {
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
      }
    });
  }

  const eduInput = document.getElementById("inpEducation").value;
  const eduList = document.getElementById("outEducation");
  eduList.innerHTML = "";

  if (eduInput.trim() !== "") {
    const eduArray = eduInput.split("\n"); // Split by new line
    eduArray.forEach((edu) => {
      if (edu.trim()) {
        let li = document.createElement("li");
        // Replace semicolons with commas for better formatting
        li.innerText = edu.trim().replace(/;/g, " - ");
        eduList.appendChild(li);
      }
    });
  }

  // 2.1 Handle Multiple Values: Hobbies (Comma separated)
  const hoppInput = document.getElementById("inpHobbs").value;
  const hoppList = document.getElementById("outHobbs");
  hoppList.innerHTML = ""; // Clear current

  if (hoppInput.trim() !== "") {
    const hoppArray = hoppInput.split(",");
    hoppArray.forEach((hopp) => {
      if (hopp.trim()) {
        let li = document.createElement("li");
        li.innerText = hopp.trim();
        hoppList.appendChild(li);
      }
    });
  }

  const langInput = document.getElementById("inpLang").value;
  const langList = document.getElementById("outLang");
  langList.innerHTML = ""; // Clear current

  if (langInput.trim() !== "") {
    const langArray = langInput.split(",");
    langArray.forEach((lang) => {
      if (lang.trim()) {
        let li = document.createElement("li");
        li.innerText = lang.trim();
        langList.appendChild(li);
      }
    });
  }

  // 2.1 Handle Multiple Values: Hobbies (Comma separated)
  const ProjInput = document.getElementById("inpProj").value;
  const ProjList = document.getElementById("outProj");
  ProjList.innerHTML = "";

  if (ProjInput.trim() !== "") {
    const ProjArray = ProjInput.split("\n"); // Split by new line
    ProjArray.forEach((Proj) => {
      if (Proj.trim()) {
        let li = document.createElement("li");
        // Replace semicolons with commas for better formatting
        li.innerText = Proj.trim().replace(/;/g, " - ");
        ProjList.appendChild(li);
      }
    });
  }

  // 4. Handle Complex Multiple Values: Experience
  // Format expected: Title; Company; Date; Description
  const expInput = document.getElementById("inpExperience").value;
  const expContainer = document.getElementById("outExperience");
  expContainer.innerHTML = "";

  if (expInput.trim() !== "") {
    const expArray = expInput.split("\n");

    expArray.forEach((entry) => {
      if (entry.trim()) {
        const parts = entry.split(";");

        // Create HTML structure for a job
        const div = document.createElement("div");
        div.className = "job-entry";

        let titleText = parts[0] ? parts[0].trim() : "";
        let companyText = parts[1] ? parts[1].trim() : "";
        let dateText = parts[2] ? parts[2].trim() : "";
        let descText = parts[3] ? parts[3].trim() : "";

        // Build the HTML
        div.innerHTML = `
                            <div>
                                <span class="job-title">${titleText}</span>
                                <span class="job-date">${dateText}</span>
                            </div>
                            <div class="job-company">${companyText}</div>
                            <div>${descText}</div>
                        `;
        expContainer.appendChild(div);
      }
    });
  }
}
