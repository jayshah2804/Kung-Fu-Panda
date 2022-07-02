var http = require("http");

var hostname = "192.168.0.102";
var port = 3000;

var app = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify([
      {
        key: "1",
        casts: "Jackie Chain, Jay Shah",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOSI3_Sizp1sH4jENEWUblbOxhs1RfOlDOUe8wh2-Fx03frAlO",
        genre: "Action, Comedy",
        name: "Kung Fu Panda (2018)",
        director: "Demon Salvator, Elena",
      },
      {
        key: "2",
        casts: "John Kapoor, Shefali",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeBj5O2s1c7WDeX-S5ahbQ0eq2K61d9y2riaur1XV0B9zVK3u",
        genre: "Action",
        name: "Kung Fu Panda 2",
        director: "John Kapoor, Shefali",
      },
      {
        key: "3",
        casts: "Jack Black, Jackie Chan",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSV0AaECLv2NRiyhDcSsKrtadm834WjBu1lrJlbdo_VuOkotX9d",
        genre: "Family/Comedy",
        name: "Kung Fu Panda 3",
        director: "Demon Salvator, Elena",
      },
      {
        key: "4",
        casts: "Rupert Grint",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhFKHnU5iDgLx2HFMcRmgj2e491OuyiwXvxjlBvFBoScCAEMB0",
        genre: "Adventure",
        name: "Harry Potter And The Deathly Hallows II",
        director: "Bonnie Weight",
      },
      {
        key: "5",
        casts: "Nagarjuna, Shamita",
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYGx6w4wW7xmC8h_UdhyzyxhOV4QZofI0lrgZ7JgMkCyqGG5M_",
        genre: "Comedy",
        name: "Harry Potter and the Philosopher's Stone",
        director: "Sanjay Sharma",
      },
      {
        key: "6",
        casts: "Daniel Radcliffe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltzcooPkGcy1fKKqzSuO8U6S9XBpNDR9MuYc9SS_L5AbAn66O",
        genre: "Fantasy",
        name: "Harry Potter and the Chamber of Secrets",
        director: "Warner Brothers",
      },
      {
        key: "7",
        casts: "Chris Columbus",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ0zi4n9FsH1q8fyGAXi_fkisY2Krs0_iMzNMYmwIh-DlDxiSR",
        genre: "Adventure",
        name: "Harry Potter and the Prisoner of Azkaban",
        director: "Warner Bros. Pictures",
      },
      {
        key: "8",
        casts: "Stanislav Ianevski, Emma watson",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT11kynaj_-X2LgSqeZVCBnO4ZcCPFdvS9x273sUEZNOWb9K8dt",
        genre: "Fantasy/Adventure ",
        name: "Harry Potter and the Goblet of Fire",
        director: "David Heyman",
      },
    ])
  );
});

app.listen(port, hostname);
