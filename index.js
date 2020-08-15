import * as JsSearch from 'js-search';

let fileA = {
  tags: ["RPC", "homework", "Effect of Controls", "pdf"],
  link: "https://flightscope.gitlab.io/training/student-homework-sheets/effect-of-controls.pdf"
}

let fileB = {
  tags: ["RPC", "homework", "Straight and Level", "pdf"],
  link: "https://flightscope.gitlab.io/training/student-homework-sheets/straight-and-level.pdf"
}

let fileC = {
  tags: ["RAAus", "Operations", "Manual", "pdf"],
  link: "https://flightscope.gitlab.io/raaus-documentation/5-om-71-august-2016-single-pages.pdf"
}

let fileD = {
  tags: ["Eurofox", "3K", "Flight Manual", "4844", "pdf"],
  link: "https://flightscope.gitlab.io/aircraft/manual/eurofox-3k/24-4844/eurofox-3k_24-4844.pdf"
}

let fileE = {
  tags: ["RPC", "homework", "Navigation", "html"],
  link: "https://flightscope.gitlab.io/training/student-homework-sheets/nav-preparation.html"
}

let search = new JsSearch.Search('link');

search.addIndex('tags');

search.addDocuments([fileA, fileB, fileC, fileD, fileE]);

let input = document.getElementById("input");
let output = document.getElementById("results");

input.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    let results = search.search(input.value);
    console.log(results);

    output.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
      output.innerHTML += results[i]["link"];
      output.innerHTML += "<br>";
    }
  }
});