var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    
    {name: "Yosemite N.P.",
    image: "http://images.fineartamerica.com/images-medium-large/yosemite-national-park-glacier-point-half-dome-sunset-scott-mcguire.jpg"
    },
    
    {name: "Bryce Canyon",
    image: "http://www.letsbewild.com/wp-content/uploads/2013/01/bryce-canyon.jpg"
    },
    
    {name: "Dodge Ridge",
    image: "http://www.xtremespots.com/wp-content/uploads/2013/01/Dodge-Ridge-Ski-Resort-Snowboarder.jpg"
    }
];


app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image}
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCampServer READY");
});