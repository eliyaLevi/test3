let soldiers = JSON.parse(localStorage.getItem("soldiers")) || [];
const tbody = document.getElementById("test");

function renderSoldiers(filteredSoldiers = soldiers) {

  tbody.textContent = "";
  // רץ על כל החיילים
  filteredSoldiers.forEach((soldier) => {
    const tr = document.createElement("tr");
    //יוצר את התא של הACTIONS
    const actionsTd = document.createElement("td");
    
    const RemoveButton = document.createElement("button");
    
    RemoveButton.textContent = "Remove";
    RemoveButton.onclick = () => RemoveStatus(soldier.fullName);
    actionsTd.appendChild(RemoveButton);
    
    const MissionButton = document.createElement("button");
    MissionButton.textContent = "mission";
    MissionButton.onclick = () => MissionStatus(soldier.id);
    actionsTd.appendChild(MissionButton);
    
    const EditButton = document.createElement("button");
    EditButton.textContent = "Edit";
    EditButton.onclick = () => EditStatus(soldier.id);
    actionsTd.appendChild(EditButton);
    
    tr.appendChild(actionsTd);
    
    //יוצר את התא של ה STATUS
    const statusTd = document.createElement("td");
    tr.classList.add("hadash")
    statusTd.textContent = soldier.isActive ? "הושלם" : "לא הושלם";
    tr.appendChild(statusTd);

    //יוצר את התא של ה platoon
    const platoonTd = document.createElement("td");
    platoonTd.textContent = soldier.platoon;
    tr.appendChild(platoonTd);

    //יוצר את התא של ה position
    const positionTd = document.createElement("td");
    positionTd.textContent = soldier.position;
    tr.appendChild(positionTd);

    //יוצר את התא של ה rank
    const rankTd = document.createElement("td");
    rankTd.textContent = soldier.rank;
    tr.appendChild(rankTd);

    //יוצר את התא של ה full Name
    const fullNameTd = document.createElement("td");
    fullNameTd.textContent = soldier.fullName;
    tr.appendChild(fullNameTd);
   
    console.log(tbody);

    tbody.appendChild(tr);
  });
}
function addSoldier() {
  //   debugger;
  const myInput = document.getElementsByClassName("fromInput");
  const myFrom = document.getElementById("form");
  myFrom.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  const soldier = {
    fullName: myInput[0].value,
    rank: myInput[1].value,
    position: myInput[2].value,
    platoon: myInput[3].value,
    isActive: myInput[4].value,
    // isDone: false,
  };

  soldiers.push(soldier);
  console.log(soldiers);

  saveSoldiers();
  renderSoldiers();
  //   myInput.value = '';
}

function saveSoldiers() {
  localStorage.setItem("soldiers", JSON.stringify(soldiers));
}

//פונקציה למחיקת שורה מהטבלה
function RemoveStatus(fullName) {
    soldiers = soldiers.filter((t) => t.fullName !== fullName);
    saveSoldiers();
    renderSoldiers();
  }
renderSoldiers();
