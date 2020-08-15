function filterIt(arr, searchKey) {
  return arr.filter(function(obj) {
    return Object.keys(obj).some(function(key) {
      return obj[key].includes(searchKey);
    })
  });
}

let files = [
  {
    tags: ["RPC", "homework", "Effect of Controls", "pdf"],
    link: "https://flightscope.gitlab.io/training/student-homework-sheets/effect-of-controls.pdf"
  },
  {
    tags: ["RPC", "homework", "Straight and Level", "pdf"],
    link: "https://flightscope.gitlab.io/training/student-homework-sheets/straight-and-level.pdf"
  },
  {
    tags: ["RAAus", "Operations", "Manual", "pdf"],
    link: "https://flightscope.gitlab.io/raaus-documentation/5-om-71-august-2016-single-pages.pdf"
  },
  {
    tags: ["Eurofox", "3K", "Flight Manual", "4844", "pdf"],
    link: "https://flightscope.gitlab.io/aircraft/manual/eurofox-3k/24-4844/eurofox-3k_24-4844.pdf"
  },
  {
    tags: ["RPC", "homework", "Navigation", "html"],
    link: "https://flightscope.gitlab.io/training/student-homework-sheets/nav-preparation.html"
  }
]
let input = document.getElementById("input");
let output = document.getElementById("results");

input.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    let results = filterIt(files, input.value);
    output.innerHTML = "";
    
    for (obj of results) {
      output.innerHTML += obj["link"];
      output.innerHTML += "<br>"
    }
  }
});