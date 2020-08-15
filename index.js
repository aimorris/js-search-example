const JsSearch = window.JsSearch;

let files = [
  {
    text: "Effect of Controls",
    tags: ["RPC", "homework", "Effect of Controls"],
    link: "https://flightscope.gitlab.io/training/student-homework-sheets/effect-of-controls.pdf"
  },
  {
    text: "Straight and Level",
    tags: ["RPC", "homework", "Straight and Level"],
    link: "https://flightscope.gitlab.io/training/student-homework-sheets/straight-and-level.pdf"
  },
  {
    text: "Operations Manual",
    tags: ["RAAus", "Operations", "Manual"],
    link: "https://flightscope.gitlab.io/raaus-documentation/5-om-71-august-2016-single-pages.pdf"
  },
  {
    text: "Flight Manual",
    tags: ["Eurofox", "3K", "Flight Manual", "4844"],
    link: "https://flightscope.gitlab.io/aircraft/manual/eurofox-3k/24-4844/eurofox-3k_24-4844.pdf"
  },
  {
    text: "Navigation",
    tags: ["RPC", "homework", "Navigation"],
    link: "https://flightscope.gitlab.io/training/student-homework-sheets/nav-preparation.html"
  }
]

// Add file extension to tags
for (let i = 0; i < files.length; i++) {
  let fileExt = files[i]["link"].split('.').pop();
  files[i].tags.push(fileExt);
}

// Create new search object with the file link as the result
let search = new JsSearch.Search('link');

// Add the tags as what we are searching through
search.addIndex('tags');

// Add the files
search.addDocuments(files);

let input = document.getElementById("input");
let output = document.getElementById("results");

// When enter key is pressed
input.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    let results = search.search(input.value);

    console.log(results);


    // Show the links in the site
    output.innerHTML = '';
    for (let obj of results) {
      output.innerHTML += `<a href="${obj["link"]}">${obj["text"]}</a>`;
      output.innerHTML += "<br>";
    }
  }
});