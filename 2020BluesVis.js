const margin = {top: 75, right: 65, bottom: 55, left: 95};

const width = 700, height = 500;

d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Pages 46-51 of MRC Data's 2020 Billboard Year-End Review</a>"+
    "<br>2019 Data Sourced from:&nbsp;&nbsp;<a href='https://static.billboard.com/files/pdfs/NIELSEN_2019_YEARENDreportUS.pdf' target = '_blank'>Pages 29-33 of Nielsen's 2019 Billboard Year-End Review</a>")

let barDiv1 = d3.select("body")
    .append("div")
    .attr("id", "albumSales")
    .style("width", "90%")
    .style("display", "flex")
    .style("flex-wrap", "wrap")
    .style("align-items", "center")
    .style("justify-items", "center")
    .style("justify-content", "space-evenly")
    .style("margin", "0.5vw auto 3vw auto")
    .style("border-radius", "10%")
    .style("background-color","#1e008a")
    .style("overflow", "auto");

barDiv1.append("div")
    .attr("id", "physicalalbums")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "2.5vw auto 0.5vw 2.5vw");
barDiv1.append("div")
    .attr("id", "digitalalbums")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "2.5vw auto 0.5vw auto");
barDiv1.append("div")
    .attr("id", "totalsales")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "2.5vw 2.5vw 0.5vw auto");
barDiv1.append("div")
    .attr("id", "videostreams")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "0.5vw auto 2.5vw 2.5vw");
barDiv1.append("div")
    .attr("id", "audiostreams")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "0.5vw auto 2.5vw auto");
barDiv1.append("div")
    .attr("id", "streams")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "0.5vw 2.5vw 2.5vw auto");

let albumsSVG = d3.select("#physicalalbums")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .style("stroke-width", "2px")
    .style("display", "block")
    .style("margin", "1vw");

let albumsSVG2 = d3.select("#digitalalbums")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .style("stroke-width", "2px")
    .style("display", "block")
    .style("margin", "1vw");

let totalSalesSVG = d3.select("#totalsales")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .style("stroke-width", "2px")
    .style("display", "block")
    .style("margin", "1vw");

let audioSVG = d3.select("#audiostreams")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .style("stroke-width", "2px")
    .style("display", "block")
    .style("margin", "1vw");

let videoSVG = d3.select("#videostreams")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .style("stroke-width", "2px")
    .style("display", "block")
    .style("margin", "1vw");

let streamsSVG = d3.select("#streams")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .style("stroke-width", "2px")
    .style("display", "block")
    .style("margin", "1vw");

let albumGroup = albumsSVG.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")");

let albumGroup2 = albumsSVG2.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")");

let albumGroup3 = totalSalesSVG.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")");

let audioGroup = audioSVG.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")");

let videoGroup = videoSVG.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")");

let streamsGroup = streamsSVG.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")");

albumsSVG.append("g")
    .style("font-family","'Changa', sans-serif")
    .style("font-size","20px")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
    .style("fill", "white");

albumsSVG2.append("g")
    .style("font-family","'Changa', sans-serif")
    .style("font-size","20px")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
    .style("fill", "white");

totalSalesSVG.append("g")
    .style("font-family","'Changa', sans-serif")
    .style("font-size","20px")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
    .style("fill", "white");

audioSVG.append("g")
    .style("font-family","'Changa', sans-serif")
    .style("font-size","20px")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
    .style("fill", "white");

videoSVG.append("g")
    .style("font-family","'Changa', sans-serif")
    .style("font-size","20px")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
    .style("fill", "white");

streamsSVG.append("g")
    .style("font-family","'Changa', sans-serif")
    .style("font-size","20px")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
    .style("fill", "white");

let yearScale = d3.scaleOrdinal()
    .domain(["2019", "2020"])
    .range(["#ff5e00","#0059de"]);

let legend = d3.legendColor()
    .shapeWidth(30)
    .scale(yearScale);

albumsSVG.select(".legendOrdinal")
    .call(legend);
albumsSVG2.select(".legendOrdinal")
    .call(legend);
totalSalesSVG.select(".legendOrdinal")
    .call(legend);
audioSVG.select(".legendOrdinal")
    .call(legend);
videoSVG.select(".legendOrdinal")
    .call(legend);
streamsSVG.select(".legendOrdinal")
    .call(legend);


let graphHeight = height-margin.top-margin.bottom,
    graphWidth = width-margin.right-margin.left;

let xScale = d3.scaleBand().range([0, graphWidth]).padding(0.4);
let yScale = d3.scaleLinear().range([graphHeight, 0]);
let yScale2 = d3.scaleLinear().range([graphHeight, 0]);
let yScale3 = d3.scaleLinear().range([graphHeight, 0]);
let yScale4 = d3.scaleLinear().range([graphHeight, 0]);
let yScale5 = d3.scaleLinear().range([graphHeight, 0]);
let yScaleTotal = d3.scaleLinear().range([graphHeight, 0]);

albumsSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("font-size", "22px")
    .style("text-decoration", "underline")
    .text("Top 10 Albums - Physical Sales");

albumsSVG2.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("font-size", "22px")
    .style("text-decoration", "underline")
    .text("Top 10 Albums - Digital Sales");

totalSalesSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("font-size", "22px")
    .style("text-decoration", "underline")
    .text("Top 10 Albums - Total Sales");

audioSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("font-size", "22px")
    .style("text-decoration", "underline")
    .text("Top 10 Songs - On-Demand Audio Streams");

videoSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("font-size", "22px")
    .style("text-decoration", "underline")
    .text("Top 10 Songs - On-Demand Video Streams");

streamsSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("font-size", "22px")
    .style("text-decoration", "underline")
    .text("Top 10 Songs - On-Demand Streams (Audio + Video)");

streamsSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 58)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-size", "16px")
    .style("font-family","'Changa', sans-serif")
    .text("*Stream Counts Are in the hundred millions to billions");

audioSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 58)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-size", "16px")
    .style("font-family","'Changa', sans-serif")
    .text("*Stream Counts Are in the hundred millions to billions");

videoSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 58)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .style("font-size", "16px")
    .style("font-family","'Changa', sans-serif")
    .text("*Stream Counts Are in the hundred millions to billions");

let PhysAlbumSales2019 = [];
let PhysAlbumSales2020 = [];
let AudioStreams2019 = [];
let AudioStreams2020 = [];
let DigiAlbumSales2019 = [];
let DigiAlbumSales2020 = [];
let VideoStreams2019 = [];
let VideoStreams2020 = [];
let TotalSales2019 = [];
let TotalSales2020 = [];
let streams2019 = [];
let streams2020 = [];

function drawBars(group, color, offset, givenScale){
    group.append("rect")
        .attr("width", (xScale.bandwidth()/2)-2)
        .attr("y", function (d){ return givenScale(d.value) })
        .attr("x", function (d){ return xScale(d.rank) +
            (((xScale.bandwidth()/2)+2)*offset)})
        .attr("height", function (d){ return graphHeight - givenScale(d.value) })
        .attr("fill", color)
}

Promise.all([
    d3.csv("phys_album_sales.csv"),
    d3.csv("digital_album_sales.csv"),
    d3.csv("audio_streams.csv"),
    d3.csv("video_streams.csv"),
    d3.csv("total_on_demand_streams.csv"),
    d3.csv("total_album_sales.csv")
]).then(function(files){
    for (let i = 0; i < files[0].length; i++) {
        let physAlbumObj = {
            song: files[0][i]["title"],
            artist: files[0][i]["artist"],
            value: +files[0][i]["sales"],
            rank: "#" + ((i % 10) + 1)
        }
        let digiAlbumObj = {
            song: files[1][i]["title"],
            artist: files[1][i]["artist"],
            value: +files[1][i]["sales"],
            rank: "#" + ((i % 10) + 1)
        }
        let audioStreamObj = {
            song: files[2][i]["title"],
            artist: files[2][i]["artist"],
            value: +files[2][i]["streams"],
            rank: "#" + ((i % 10) + 1)
        }
        let videoStreamObj = {
            song: files[3][i]["title"],
            artist: files[3][i]["artist"],
            value: +files[3][i]["streams"],
            rank: "#" + ((i % 10) + 1)
        }
        let streamObj = {
            song: files[4][i]["title"],
            artist: files[4][i]["artist"],
            value: +files[4][i]["streams"],
            rank: "#" + ((i % 10) + 1)
        }
        let totalSalesObj = {
            song: files[5][i]["title"],
            artist: files[5][i]["artist"],
            value: +files[5][i]["sales"],
            rank: "#" + ((i % 10) + 1)
        }
        if (+files[0][i]["year"] === 2019) {
            PhysAlbumSales2019.push(physAlbumObj);
            DigiAlbumSales2019.push(digiAlbumObj);
            AudioStreams2019.push(audioStreamObj);
            VideoStreams2019.push(videoStreamObj);
            streams2019.push(streamObj);
            TotalSales2019.push(totalSalesObj);
        } else {
            PhysAlbumSales2020.push(physAlbumObj);
            DigiAlbumSales2020.push(digiAlbumObj);
            AudioStreams2020.push(audioStreamObj);
            VideoStreams2020.push(videoStreamObj);
            streams2020.push(streamObj);
            TotalSales2020.push(totalSalesObj);
        }
    }
    xScale.domain(["#10", "#9",  "#8", "#7", "#6", "#5", "#4", "#3", "#2", "#1"]);
    yScale.domain([0, 800000]);
    yScale2.domain([0, 800000]);
    yScale3.domain([0, 1500000000])
    yScale4.domain([0, 1500000000])
    yScale5.domain([0, 2500000000]);
    yScaleTotal.domain([0, 1300000]);
    let Phys2019Bars = albumGroup.append("g")
        .selectAll("g")
        .data(PhysAlbumSales2019)
        .enter();
    drawBars(Phys2019Bars, "#ff5e00", 0, yScale);
    let Phys2020Bars = albumGroup.append("g")
        .selectAll("g")
        .data(PhysAlbumSales2020)
        .enter();
    drawBars(Phys2020Bars, "#0059de", 1, yScale);

    let Digi2019Bars = albumGroup2.append("g")
        .selectAll("g")
        .data(DigiAlbumSales2019)
        .enter();
    drawBars(Digi2019Bars, "#ff5e00", 0, yScale2);
    let Digi2020Bars = albumGroup2.append("g")
        .selectAll("g")
        .data(DigiAlbumSales2020)
        .enter();
    drawBars(Digi2020Bars, "#0059de", 1, yScale2);

    let total2019Bars = albumGroup3.append("g")
        .selectAll("g")
        .data(TotalSales2019)
        .enter();
    drawBars(total2019Bars, "#ff5e00", 0, yScaleTotal);
    let total2020Bars = albumGroup3.append("g")
        .selectAll("g")
        .data(TotalSales2020)
        .enter();
    drawBars(total2020Bars, "#0059de", 1, yScaleTotal);

    let streams2019Bars = streamsGroup.append("g")
        .selectAll("g")
        .data(streams2019)
        .enter();
    drawBars(streams2019Bars, "#ff5e00", 0, yScale5);
    let streams2020Bars = streamsGroup.append("g")
        .selectAll("g")
        .data(streams2020)
        .enter();
    drawBars(streams2020Bars, "#0059de", 1, yScale5);

    let audio2019Bars = audioGroup.append("g")
        .selectAll("g")
        .data(AudioStreams2019)
        .enter();
    drawBars(audio2019Bars, "#ff5e00", 0, yScale3);
    let audio2020Bars = audioGroup.append("g")
        .selectAll("g")
        .data(AudioStreams2020)
        .enter();
    drawBars(audio2020Bars, "#0059de", 1, yScale3);

    let video2019Bars = videoGroup.append("g")
        .selectAll("g")
        .data(VideoStreams2019)
        .enter();
    drawBars(video2019Bars, "#ff5e00", 0, yScale4);
    let video2020Bars = videoGroup.append("g")
        .selectAll("g")
        .data(VideoStreams2020)
        .enter();
    drawBars(video2020Bars, "#0059de", 1, yScale4);

    let physX = albumGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");
    physX.append("text")
        .style("font-family","'Changa', sans-serif")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .attr("y", 55)
        .attr("x",graphWidth/2)
        .text("Album Rank")
    let physY = albumGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisLeft(yScale).ticks(5).tickFormat(function (d){
            return d3.format(".3s")(d);
        }));
    physY.append("text")
        .style("font-family","'Changa', sans-serif")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .attr("y", graphHeight/2)
        .attr("transform", "translate("+(-265)+", "+graphHeight/2+")rotate(-90)")
        .text("Album Sales (Thousands)")
    let digiX = albumGroup2.append("g")
        .style("font-size", "20px")
        .style("font-family","'Changa', sans-serif")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");
    digiX.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", 55)
        .attr("x",graphWidth/2)
        .text("Album Rank")
    let digiY = albumGroup2.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisLeft(yScale2).ticks(5).tickFormat(function (d){
            return d3.format(".3s")(d);
        }));
    digiY.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", graphHeight/2)
        .attr("transform", "translate("+(-265)+", "+graphHeight/2+")rotate(-90)")
        .text("Album Sales (Thousands)")

    let totalX = albumGroup3.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");
    totalX.append("text")
        .style("font-family","'Changa', sans-serif")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .attr("y", 55)
        .attr("x",graphWidth/2)
        .text("Album Rank")
    let totalY = albumGroup3.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisLeft(yScaleTotal).ticks(5).tickFormat(function (d){
            return d3.format(".3s")(d);
        }));
    totalY.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", graphHeight/2)
        .attr("transform", "translate("+(-265)+", "+graphHeight/2+")rotate(-90)")
        .text("Album Sales (Thousands - Million)")

    streamsGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");
    streamsGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisLeft(yScale5).ticks(7).tickFormat(function (d){
            return (d3.format(".3s")(d)).replace("G", "B");
        }));
    let audioX = audioGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");
    audioX.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", 55)
        .attr("x",graphWidth/2)
        .text("Song Rank")
    let audioY = audioGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisLeft(yScale3).ticks(5).tickFormat(function (d){
            return d3.format(".3s")(d).replace("G", "B");
        }));
    audioY.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", graphHeight/2)
        .attr("transform", "translate("+(-265)+", "+graphHeight/2+")rotate(-90)")
        .text("Stream Count")

    let videoX = videoGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");
    videoX.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", 55)
        .attr("x",graphWidth/2)
        .text("Song Rank")
    let videoY = videoGroup.append("g")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .call(d3.axisLeft(yScale4).ticks(5).tickFormat(function (d){
            return d3.format(".3s")(d).replace("G", "B");
        }));
    videoY.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "20px")
        .attr("y", graphHeight/2)
        .attr("transform", "translate("+(-265)+", "+graphHeight/2+")rotate(-90)")
        .text("Stream Count")
})

const width2 = 300, height2 = 250
function makeDivergingChart(group, dataset){
    let graphWidth2 = width2 - 60;
    let graphHeight2 = height2 - 80;
    let xScale2 = d3.scaleBand().range([0, graphWidth2]).padding(0.3)
    let yScale2 = d3.scaleLinear().range([graphHeight2, 0])

    xScale2.domain(["2018-2019","2019-2020"])
    yScale2.domain([-52, 52])
    let bars = group.append("g")
        .selectAll("g")
        .data(dataset)
        .enter()

    bars.append("rect")
        .attr("width", xScale2.bandwidth())
        .attr("y", function (d){
            if(d.percentDiff > 0)
                return yScale2(d.percentDiff)
            else
                return yScale2(0)
        })
        .attr("x", function (d){ return xScale2(d.group) })
        .attr("height", function (d){
            if(d.percentDiff > 0)
                return  yScale2(0) - yScale2(d.percentDiff)
        else
                return yScale2(d.percentDiff) - yScale2(0)})
        .attr("fill", function(d){
            return divergeScale(d.percentDiff)
        })
    bars.append("text")
        .attr("y",  function(d) {
            if (d.percentDiff > 0) {
                return yScale2(d.percentDiff) - 4
            }
            else{
                return yScale2(d.percentDiff) + 14
            }
        })
        .attr("x", function (d){ return xScale2(d.group) + (xScale2.bandwidth()/2) })
        .attr("fill", "white")
        .attr("font-size", "12px")
        .attr("text-anchor", "middle")
        .style("font-family","'Changa', sans-serif")
        .text(function (d){ return d.percentDiff + "%" })
    group.append("g")
        .style("font-family","'Changa', sans-serif")
        .attr("font-size", "22px")
        .call(d3.axisBottom(xScale2))
        .attr("transform", "translate(0,"+graphHeight2+")");
    let dYAxis = group.append("g")
        .style("font-family","'Changa', sans-serif")
        .attr("font-size", "22px")
        .call(d3.axisLeft(yScale2).ticks(4))
    dYAxis.append("text")
        .style("font-family","'Changa', sans-serif")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .attr("font-size", "13")
        .attr("y", graphHeight2/2)
        .attr("transform", "translate("+(-125)+", "+graphHeight2/2+")rotate(-90)")
        .text("Percent Difference")
    group.append("line")
        .style("stroke", "white")
        .attr("x1", 0)
        .attr("y1", yScale2(0))
        .attr("x2", graphWidth2)
        .attr("y2", yScale2(0));
}

let totalUSAlbumSales = [
    {group: "2018-2019",
        firstSale: 138800000,
        secondSale: 112700000,
        percentDiff: -18.7},
    {group: "2019-2020",
        firstSale: 112700000,
        secondSale: 102400000,
        percentDiff: -9.2}
]
let USPhysAlbumSales = [
    {group: "2018-2019",
        firstSale: 86400000,
        secondSale: 73500000,
        percentDiff: -15},
    {group: "2019-2020",
        firstSale: 73500000,
        secondSale: 68000000,
        percentDiff: -7.4}
]
let USDigiAlbumSales = [
    {group: "2018-2019",
        firstSale: 52300000,
        secondSale: 39300000,
        percentDiff: -23.5},
    {group: "2019-2020",
        firstSale: 39300000,
        secondSale: 34400000,
        percentDiff: -12.5}
]
let vinylAlbumSales = [
    {group: "2018-2019",
     firstSale: 16500000,
     secondSale: 18800000,
     percentDiff: 14.5},
    {group: "2019-2020",
     firstSale: 18800000,
     secondSale: 27500000,
     percentDiff: 46.2}
]
let digitalSongSales = [
    {group: "2018-2019",
     firstSale: 401400000,
     secondSale: 301100000,
     percentDiff: -25},
    {group: "2019-2020",
     firstSale: 301100000,
     secondSale: 233800000,
     percentDiff: -22.3}
]
let totalUSAudioStreams = [
    {group: "2018-2019",
        firstSale: 602300000000,
        secondSale: 745700000000,
        percentDiff: 23.8},
    {group: "2019-2020",
        firstSale: 745900000000,
        secondSale: 872600000000,
        percentDiff: 17.0}
]


d3.select("body")
    .append("div")
    .attr("class", "bannerSections otherSection")
    .html("COMPARING PERCENT DIFFERENCE IN SALES AND STREAMING <br> FIGURES FROM " +
        "(2018-2019) and (2019-2020)")
d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Page 8 of MRC Data's 2020 Billboard Year-End Review</a>"+
        "<br>2019 Data Sourced from:&nbsp;&nbsp;<a href='https://static.billboard.com/files/pdfs/NIELSEN_2019_YEARENDreportUS.pdf' target = '_blank'>Pages 4-5 of Nielsen's 2019 Billboard Year-End Review</a>")

let divergeDiv = d3.select("body")
    .append("div")
    .style("width", "90%")
    .style("display", "flex")
    .style("flex-wrap", "wrap")
    .style("align-items", "center")
    .style("justify-items", "center")
    .style("justify-content", "space-evenly")
    .style("border-radius", "10%")
    .style("background-color","#1e008a")
    .style("margin", "2vw auto 2vw auto")
let physDiverge = divergeDiv.append("div")
    .style("display", "block")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "3vw 0.3vw 0.6vw auto")
let digiDiverge = divergeDiv.append("div")
    .style("display", "block")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "3vw 0.3vw 0.6vw 0.3vw")
let totalDiverge = divergeDiv.append("div")
    .style("display", "block")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "3vw auto 0.6vw 0.3vw")
let vinylDiverge = divergeDiv.append("div")
    .style("display", "block")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "0.6vw 0.3vw 3vw auto")
let digitalSongDiverge = divergeDiv.append("div")
    .style("display", "block")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "0.6vw 0.3vw 3vw 0.3vw")
let audioStreamDiverge = divergeDiv.append("div")
    .style("display", "block")
    .style("width", "31%")
    .style("border-radius", "10%")
    .style("background-color", "#0f1247")
    .style("margin", "0.6vw auto 3vw 0.3vw")
let physDSVG = physDiverge.append("svg")
    .style("display", "block")
    .style("margin", "2vw")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,300")
let digiDSVG = digiDiverge.append("svg")
    .style("display", "block")
    .style("margin", "2vw")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,300")
let totalDSVG = totalDiverge.append("svg")
    .style("display", "block")
    .style("margin", "2vw")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,300");
let vinylDSVG = vinylDiverge.append("svg")
    .style("display", "block")
    .style("margin", "2vw")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,300");
let digiSongDSVG = digitalSongDiverge.append("svg")
    .style("display", "block")
    .style("margin", "2vw")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,300");
let audioDSVG = audioStreamDiverge.append("svg")
    .style("display", "block")
    .style("margin", "2vw")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,300");
let divergeScale = d3.scaleDiverging()
    .interpolator(d3.interpolateRdBu)
    .domain([52, 0, -52])
let physDGroup = physDSVG.append("g")
    .attr("transform", "translate(48, 90)")
let digiDGroup = digiDSVG.append("g")
    .attr("transform", "translate(48, 90)")
let totalDGroup = totalDSVG.append("g")
    .attr("transform", "translate(48, 90)")
let vinylDGroup = vinylDSVG.append("g")
    .attr("transform", "translate(48, 90)")
let digiSongDGroup = digiSongDSVG.append("g")
    .attr("transform", "translate(48, 90)")
let audioDGroup = audioDSVG.append("g")
    .attr("transform", "translate(48, 90)")
physDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .style("font-family", "'Quantico', sans-serif")
    .text("Percent Change In Physical Album Sales")
digiDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .style("font-family", "'Quantico', sans-serif")
    .text("Percent Change In Digital Album Sales")
totalDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .style("font-family", "'Quantico', sans-serif")
    .text("Percent Change In Total Album Sales")
vinylDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .style("font-family", "'Quantico', sans-serif")
    .text("Percent Change In Vinyl LP Sales")
digiSongDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .style("font-family", "'Quantico', sans-serif")
    .text("Percent Change In Digital Song Sales")
audioDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .attr("font-size", "12px")
    .style("font-family", "'Quantico', sans-serif")
    .text("Percent Change In Audio Streaming")
makeDivergingChart(physDGroup, USPhysAlbumSales)
makeDivergingChart(digiDGroup, USDigiAlbumSales)
makeDivergingChart(totalDGroup, totalUSAlbumSales)
makeDivergingChart(vinylDGroup, vinylAlbumSales)
makeDivergingChart(digiSongDGroup, digitalSongSales)
makeDivergingChart(audioDGroup, totalUSAudioStreams)
physDSVG.append("g")
    .attr("fill", "white")
    .style("font-size", "10px")
    .style("font-family", "'Changa', sans-serif")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
digiDSVG.append("g")
    .attr("fill", "white")
    .style("font-size", "10px")
    .style("font-family", "'Changa', sans-serif")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
totalDSVG.append("g")
    .attr("fill", "white")
    .style("font-size", "10px")
    .style("font-family", "'Changa', sans-serif")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
vinylDSVG.append("g")
    .attr("fill", "white")
    .style("font-size", "10px")
    .style("font-family", "'Changa', sans-serif")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
digiSongDSVG.append("g")
    .attr("fill", "white")
    .style("font-size", "10px")
    .style("font-family", "'Changa', sans-serif")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
audioDSVG.append("g")
    .attr("fill", "white")
    .style("font-size", "10px")
    .style("font-family", "'Changa', sans-serif")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
let divergeLegend = d3.legendColor()
    .shapeWidth(35)
    .cells(7)
    .orient('horizontal')
    .scale(divergeScale);
physDSVG.select(".legendDiverge")
    .call(divergeLegend);
digiDSVG.select(".legendDiverge")
    .call(divergeLegend);
totalDSVG.select(".legendDiverge")
    .call(divergeLegend);
vinylDSVG.select(".legendDiverge")
    .call(divergeLegend);
digiSongDSVG.select(".legendDiverge")
    .call(divergeLegend);
audioDSVG.select(".legendDiverge")
    .call(divergeLegend);
d3.select("body")
    .append("div")
    .attr("class", "bannerSections otherSection")
    .html("SHARE OF TOTAL VOLUME BY FORMAT & TOP 10 GENRE <br> FROM 2019 AND 2020")

// Reference for responsiveness:
// https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b

// Reference for Force Cluster Graph
// https://bl.ocks.org/d3indepth/9d9f03a0016bc9df0f13b0d52978c02f
d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Page 53 of MRC Data's 2020 Billboard Year-End Review</a>"+
        "<br>2019 Data Sourced from:&nbsp;&nbsp;<a href='https://static.billboard.com/files/pdfs/NIELSEN_2019_YEARENDreportUS.pdf' target = '_blank'>Pages 35 of Nielsen's 2019 Billboard Year-End Review</a>")


d3.select("body")
    .append("div")
    .attr("id", "circlepacks")
    .style("border-radius", "10%")
    .style("width", "95%")
    .style("margin", "2vw auto 2vw auto")
    .style("background-color", "#1e008a")
    .style("align-content", "center")
    .style("justify-items", "center")
    .style("justify-content", "space-evenly")
    .style("display", "flex")
    .style("flex-wrap", "wrap")

d3.select("#circlepacks")
    .append("div")
    .attr("id", "physAlbums")
    .attr("class", "circlePackPill")
    .style("margin","5vw 0.3vw 0vw auto")
d3.select("#physAlbums")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("Physical Album Sale Shares")
d3.select("#circlepacks")
    .append("div")
    .attr("id", "digiAlbums")
    .attr("class", "circlePackPill")
    .style("margin","5vw 0.3vw 0vw 0.3vw")
d3.select("#digiAlbums")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("Digital Album Sale Shares")
d3.select("#circlepacks")
    .append("div")
    .attr("id", "digiSongs")
    .attr("class", "circlePackPill")
    .style("margin","5vw auto 0vw 0.3vw")
d3.select("#digiSongs")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("Digital Song Sale Shares")
d3.select("#circlepacks")
    .append("div")
    .attr("id", "totalStreams")
    .attr("class", "circlePackPill")
    .style("margin","1vw 0.3vw 1vw auto")
d3.select("#totalStreams")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("Total On-Demand Stream Shares")
d3.select("#circlepacks")
    .append("div")
    .attr("id", "audioStreams")
    .attr("class", "circlePackPill")
    .style("margin","1vw 0.3vw 1vw 0.3vw")
d3.select("#audioStreams")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("On-Demand Audio Stream Shares")
d3.select("#circlepacks")
    .append("div")
    .attr("id", "videoStreams")
    .attr("class", "circlePackPill")
    .style("margin","1vw auto 1vw 0.3vw")
d3.select("#videoStreams")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("On-Demand Video Stream Shares")
d3.select("#circlepacks")
    .append("div")
    .attr("id", "volumes")
    .attr("class", "circlePackPill")
    .style("margin","1vw auto 5vw auto")
d3.select("#volumes")
    .append("div")
    .attr("class", "circlePackTitle")
    .html("*Total Volume Shares")

let volumeSVG;
let physSVG;
let digiSVG;
let digiSongSVG;
let totalStreamsSVG;
let audioStreamsSVG;
let videoStreamsSVG;

let volumeObjects2019 = [[],[],[],[],[],[],[]]
let volumeObjects2020 = [[],[],[],[],[],[],[]]
let annotation2019;
let annotation2020;
function makeForces (svg, dataset, group, other, offset) {
    let graph = d3.forceSimulation(dataset)
        .force("charge", d3.forceManyBody(dataset).strength(8))
        .force("center", d3.forceCenter().x(offset).y(225))
        .force('collision', d3.forceCollide().radius(function (d) {
            return d.radius
        }))
    let allNodes = group.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr("class", function (d){
            if(d.genre === "R&B/HIP-HOP")
                return "RNBHIP-HOP"
            else if(d.genre === "DANCE/ELECTRONIC")
                return "DANCE-ELECTRONIC"
            else if(d.genre === "HOLIDAY/SEASONAL")
                return "HOLIDAY-SEASONAL"
            else if(d.genre === "CHRISTIAN/GOSPEL")
                return "CHRISTIAN-GOSPEL"
            else
                return d.genre })
        .attr("fill", function (d) { return d.color })
        .attr("stroke", "white")
        .attr('r', function(d) {
            return d.radius
        })
        .on("mouseover", function (e, d){
            let tag
            if(d.genre === "R&B/HIP-HOP")
                tag = "RNBHIP-HOP"
            else if(d.genre === "DANCE/ELECTRONIC")
                tag = "DANCE-ELECTRONIC"
            else if(d.genre === "HOLIDAY/SEASONAL")
                tag = "HOLIDAY-SEASONAL"
            else if(d.genre === "CHRISTIAN/GOSPEL")
                tag = "CHRISTIAN-GOSPEL"
            else
                tag = d.genre
            let highlights = svg.selectAll("."+tag);
            svg.append("text")
                .attr("id", "genreTitle")
                .attr("fill", "white")
                .attr("y", 425)
                .attr("x", 300)
                .attr("text-anchor", "middle")
                .style("font-size", "30px")
                .text("GENRE: "+d.genre)
            highlights.attr("fill", "red");
            let circle2019;
            if(highlights._groups[0].length === 1)
                circle2019 = highlights._groups[0][0].__data__
            else
                circle2019 = highlights._groups[0][1].__data__
            const annotations1 = [{
                note: {
                    wrap: 150,
                    label: circle2019.data + "%",
                    title: "2019 Share"
                },
                color: ["white"],
                x: circle2019.x,
                y: circle2019.y,
                dy: 115 - circle2019.y,
                dx: 180 - circle2019.x,
            }]

            const makeAnnotations1 = d3.annotation()
                .annotations(annotations1)

            annotation2019 = svg.append("g")
                .style("font-size", "22px")
                .attr("id", "circleAnnotation")
                .attr("class", "annotation-group")
                .call(makeAnnotations1)

            if(highlights._groups[0].length > 1) {
                let circle2020 = highlights._groups[0][0].__data__
                const annotations = [{
                    note: {
                        wrap: 150,
                        label: circle2020.data + "%",
                        title: "2020 Share"
                    },
                    color: ["white"],
                    x: circle2020.x,
                    y: circle2020.y,
                    dy: 115 - circle2020.y,
                    dx: 420 - circle2020.x,
                }]

                const makeAnnotations = d3.annotation()
                    .annotations(annotations)

                annotation2020 = svg.append("g")
                    .style("font-size", "22px")
                    .attr("id", "circleAnnotation")
                    .attr("class", "annotation-group")
                    .call(makeAnnotations)
            }
        })
        .on("mouseout", function (e, d){
            let tag;
            if(d.genre === "R&B/HIP-HOP")
                tag = "RNBHIP-HOP"
            else if(d.genre === "DANCE/ELECTRONIC")
                tag = "DANCE-ELECTRONIC"
            else if(d.genre === "HOLIDAY/SEASONAL")
                tag = "HOLIDAY-SEASONAL"
            else if(d.genre === "CHRISTIAN/GOSPEL")
                tag = "CHRISTIAN-GOSPEL"
            else
                tag = d.genre
            let group1 = group.select("."+tag)
            group1.attr("fill", function (d){ return d.color })
            let group2 = other.select("."+tag)
            group2.attr("fill", function (d){ return d.color })
            svg.selectAll("#circleAnnotation").remove();
            svg.selectAll("#genreTitle").remove();
        })

    graph.nodes(dataset).on("tick", function (d){
        allNodes.attr('cx', function(d) {
            return d.x
        })
            .attr('cy', function(d) {
                return d.y
            })
    })
}

d3.csv("total_volume_share.csv").then(function (data2){
    for(let i = 0; i < data2.length; i++){
        let arrayToAdd;
        let color;
        if (i < 11) {
            arrayToAdd = volumeObjects2020;
            color = "#0059de";
        }
        else {
            arrayToAdd = volumeObjects2019
            color = "#ff5e00";
        }
        arrayToAdd[0].push(
            {genre: data2[i]["GENRE"], color: color, type: "Volume",
             data: +data2[i]["TOTAL VOLUME"],
             radius: (Math.sqrt((+data2[i]["TOTAL VOLUME"]*340)/Math.PI))})
        arrayToAdd[1].push(
            {genre: data2[i]["GENRE"], color: color, type: "PAS",
             data: +data2[i]["PHYSICAL ALBUM SALES"],
                radius: (Math.sqrt((+data2[i]["PHYSICAL ALBUM SALES"]*340)/Math.PI))})
        arrayToAdd[2].push(
            {genre: data2[i]["GENRE"], color: color, type: "DAS",
             data: +data2[i]["DIGITAL ALBUM SALES"],
                radius: (Math.sqrt((+data2[i]["DIGITAL ALBUM SALES"]*340)/Math.PI))})
        arrayToAdd[3].push(
            {genre: data2[i]["GENRE"], color: color, type: "DSS",
             data: +data2[i]["DIGITAL SONG SALES"],
                radius: (Math.sqrt((+data2[i]["DIGITAL SONG SALES"]*340)/Math.PI))})
        arrayToAdd[4].push(
            {genre: data2[i]["GENRE"], color: color, type: "TODS",
             data: +data2[i]["TOTAL ON-DEMAND STREAMS"],
                radius: (Math.sqrt((+data2[i]["TOTAL ON-DEMAND STREAMS"]*340)/Math.PI))})
        arrayToAdd[5].push(
            {genre: data2[i]["GENRE"], color: color, type: "ODAS",
                data: +data2[i]["ON-DEMAND AUDIO STREAMS"],
                radius: (Math.sqrt((+data2[i]["ON-DEMAND AUDIO STREAMS"]*340)/Math.PI))})
        arrayToAdd[6].push(
            {genre: data2[i]["GENRE"], color: color, type: "ODVS",
             data: +data2[i]["ON-DEMAND VIDEO STREAMS"],
                radius: (Math.sqrt((+data2[i]["ON-DEMAND VIDEO STREAMS"]*340)/Math.PI))})
    }
    volumeSVG = d3.select("#volumes")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    physSVG = d3.select("#physAlbums")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    digiSVG = d3.select("#digiAlbums")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    digiSongSVG = d3.select("#digiSongs")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    totalStreamsSVG = d3.select("#totalStreams")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    audioStreamsSVG = d3.select("#audioStreams")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    videoStreamsSVG = d3.select("#videoStreams")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,440")
        .style("display", "block")
        .style("margin-bottom", "0.8vw")
    let bubbleGroup = volumeSVG.append("g")
    let bubbleGroup2 = volumeSVG.append("g")
    let physGroup1 = physSVG.append("g")
    let physGroup2 = physSVG.append("g")
    let digiGroup1 = digiSVG.append("g")
    let digiGroup2 = digiSVG.append("g")
    let digiSongGroup1 = digiSongSVG.append("g")
    let digiSongGroup2 = digiSongSVG.append("g")
    let totalStreamsGroup1 = totalStreamsSVG.append("g")
    let totalStreamsGroup2 = totalStreamsSVG.append("g")
    let audioStreamsGroup1 = audioStreamsSVG.append("g")
    let audioStreamsGroup2 = audioStreamsSVG.append("g")
    let videoStreamsGroup1 = videoStreamsSVG.append("g")
    let videoStreamsGroup2 = videoStreamsSVG.append("g")
    makeForces(volumeSVG, volumeObjects2020[0], bubbleGroup, bubbleGroup2, 420)
    makeForces(volumeSVG, volumeObjects2019[0], bubbleGroup2, bubbleGroup,180)
    makeForces(physSVG, volumeObjects2020[1], physGroup1, physGroup2, 420)
    makeForces(physSVG, volumeObjects2019[1], physGroup2, physGroup1,180)
    makeForces(digiSVG, volumeObjects2020[2], digiGroup1, digiGroup2, 420)
    makeForces(digiSVG, volumeObjects2019[2], digiGroup2, digiGroup1,180)
    makeForces(digiSongSVG, volumeObjects2020[3], digiSongGroup1, digiSongGroup2, 420)
    makeForces(digiSongSVG, volumeObjects2019[3], digiSongGroup2, digiSongGroup1,180)
    makeForces(totalStreamsSVG, volumeObjects2020[4], totalStreamsGroup1, totalStreamsGroup2, 420)
    makeForces(totalStreamsSVG, volumeObjects2019[4], totalStreamsGroup2, totalStreamsGroup1,180)
    makeForces(audioStreamsSVG, volumeObjects2020[5], audioStreamsGroup1, audioStreamsGroup2, 420)
    makeForces(audioStreamsSVG, volumeObjects2019[5], audioStreamsGroup2, audioStreamsGroup1,180)
    makeForces(videoStreamsSVG, volumeObjects2020[6], videoStreamsGroup1, videoStreamsGroup2, 420)
    makeForces(videoStreamsSVG, volumeObjects2019[6], videoStreamsGroup2, videoStreamsGroup1,180)
})

d3.select("body")
    .append("div")
    .attr("class", "bannerSections otherSection")
    .html("IMPACTS OF STREAMING/STREAMING EVENTS ON<br> " +
        "MUSIC AND ARTIST POPULARITY IN 2020")

d3.select("body")
    .append("div")
    .attr("id", "VerzuzBlock")
    .attr("class", "descBlock")
d3.select("#VerzuzBlock")
    .append("text")
    .attr("class", "blockTitle")
    .text("What Is Verzuz?")
d3.select("#VerzuzBlock")
    .append("text")
    .html("Verzuz is a special rap battle series started by Swizz Beats and Timbaland.  It's very "+
    "reminiscent of early Hip-Hop DJ battles, except brought to the more modern platform of livestreaming"+
        " through Instagram Live.  In Verzuz, two prominent producers, singers, or songwriters compete by performing" +
        " their respective catalogs for 20 rounds while the audience is in charge of the scoring.  For a breakdown" +
        "of all the Verzuz battles, read this Vulture article " +
        "<a href='https://www.vulture.com/2021/04/verzuz-instagram-live-battles-ranked.html' target='_blank'>here</a>.")

d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Page 21 of MRC Data's 2020 Billboard Year-End Review</a>")
let raceMargins = {left: 120, right: 120, top: 55, bottom: 55};
let raceDiv = d3.select("body")
    .append("div")
    .style("width", "90%")
    .style("display", "block")
    .style("background-color", "#1e008a")
    .style("border-radius", "10%")
    .style("overflow", "hidden")
    .style("margin", "2vw auto 4vw auto")
let raceTitle = raceDiv.append("div")
    .attr("class", "circlePackTitle")
    .style("border-bottom", "1vw black double")
    .style("font-size", "2.5vw")
    .style("margin-bottom","0")
    .html("Top 4: Combined Catalog Consumption Gains<br>of Verzuz Participants<br>");
raceTitle.append("text")
    .style("font-size", "1.5vw")
    .text("*Growth compared to their catalog consumption 2 days before their Verzuz battle")
let raceWidth = 900;
let raceHeight = 400;
let raceSVG = raceDiv.append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,900,500")
    .style("display", "block")
    .style("margin", "0.5vw auto 3vw auto")
let raceGroup = raceSVG.append("g")
    .attr("transform", "translate("+raceMargins.left+","+100+")")
let raceGraphWidth = raceWidth - raceMargins.left - raceMargins.right;
let raceGraphHeight = raceHeight - raceMargins.top - raceMargins.bottom;
let raceXScale = d3.scaleLinear()
    .domain([0, 260])
    .range([0, raceGraphWidth])
let raceYScale = d3.scaleBand().padding(0.2)
    .domain(["#1","#2","#3","#4"])
    .range([0, raceGraphHeight])
let colors = [colorbrewer.Set3["12"][3], colorbrewer.Set3["12"][4],
    colorbrewer.Set3["12"][5], colorbrewer.Set3["12"][6]]
let increaseData = [
    {battle: "BabyFace Vs. Teddy Riley",
     increase: 90,
     color: colors[0]},
    {battle: "Beenie Man Vs. Bounty Killer",
     increase: 216,
     color: colors[1]},
    {battle: "Brandy Vs. Monica",
     increase: 248,
     color: colors[2]},
    {battle: "Erykah Badu Vs. Jill Scott",
     increase: 217,
     color: colors[3]}]
let rectangle1 = raceGroup.append("rect")
    .attr("fill", increaseData[0].color)
    .attr("x", raceXScale(0))
    .attr("y", raceYScale("#4"))
    .attr("width", 0)
    .attr("height", raceYScale.bandwidth())
let rectangle2 = raceGroup.append("rect")
    .attr("fill", increaseData[1].color)
    .attr("x", raceXScale(0))
    .attr("y", raceYScale("#3"))
    .attr("width", 0)
    .attr("height", raceYScale.bandwidth())
let rectangle3 = raceGroup.append("rect")
    .attr("fill", increaseData[2].color)
    .attr("x", raceXScale(0))
    .attr("y", raceYScale("#1"))
    .attr("width", 0)
    .attr("height", raceYScale.bandwidth())
let rectangle4 = raceGroup.append("rect")
    .attr("fill", increaseData[3].color)
    .attr("x", raceXScale(0))
    .attr("y", raceYScale("#2"))
    .attr("width", 0)
    .attr("height", raceYScale.bandwidth())

function animateRace(){
    rectangle1.transition()
        .delay(500)
        .duration(1800)
        .ease(d3.easeLinear)
        .attr("width", raceXScale(increaseData[0].increase))
    rectangle2.transition()
        .delay(500)
        .duration(4320)
        .ease(d3.easeLinear)
        .attr("width", raceXScale(increaseData[1].increase))
    rectangle3.transition()
        .delay(500)
        .duration(4960)
        .ease(d3.easeLinear)
        .attr("width", raceXScale(increaseData[2].increase))
    rectangle4.transition()
        .delay(500)
        .duration(4340)
        .ease(d3.easeLinear)
        .attr("width", raceXScale(increaseData[3].increase))
    let percentage1 = raceGroup.append("text")
        .style("opacity", "0")
        .style("font-family", "'Changa', sans-serif")
        .style("font-size", 20)
        .style("text-shadow", "0 1.5px 5px black")
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("x", raceXScale(increaseData[2].increase - 6))
        .attr("y", raceYScale("#1") + (raceYScale.bandwidth()/2) + 5)
        .text(increaseData[2].increase + "% Increase")
    percentage1.transition()
        .delay(5560)
        .duration(500)
        .style("opacity", "1")
    let percentage2 = raceGroup.append("text")
        .style("opacity", "0")
        .style("font-family", "'Changa', sans-serif")
        .style("font-size", 20)
        .style("text-shadow", "0 1.5px 5px black")
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("x", raceXScale(increaseData[3].increase - 6))
        .attr("y", raceYScale("#2") + (raceYScale.bandwidth()/2)+5)
        .text(increaseData[3].increase + "% Increase")
    percentage2.transition()
        .delay(4940)
        .duration(500)
        .style("opacity", "1")
    let percentage3 = raceGroup.append("text")
        .style("opacity", "0")
        .style("font-family", "'Changa', sans-serif")
        .style("font-size", 20)
        .style("text-shadow", "0 1.5px 5px black")
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("x", raceXScale(increaseData[1].increase - 6))
        .attr("y", raceYScale("#3") + (raceYScale.bandwidth()/2)+5)
        .text(increaseData[1].increase + "% Increase")
    percentage3.transition()
        .delay(4920)
        .duration(500)
        .style("opacity", "1")
    let percentage4 = raceGroup.append("text")
        .style("opacity", "0")
        .style("font-family", "'Changa', sans-serif")
        .style("font-size", 20)
        .style("text-shadow", "0 1.5px 5px black")
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("x", raceXScale(increaseData[0].increase - 6))
        .attr("y", raceYScale("#4") + (raceYScale.bandwidth()/2)+5)
        .text(increaseData[0].increase + "% Increase")
    percentage4.transition()
        .delay(2400)
        .duration(500)
        .style("opacity", "1")
}

raceGroup.append("g")
    .attr("stroke-width", "3px")
    .style("font-family", "'Changa', sans-serif")
    .style("font-size", 18)
    .call(d3.axisLeft(raceYScale))
let raceXAxis = raceGroup.append("g")
    .attr("stroke-width", "3px")
    .style("font-family", "'Changa', sans-serif")
    .style("font-size", 16)
    .call(d3.axisBottom(raceXScale))
    .attr("transform", "translate(0,"+raceGraphHeight+")")
raceXAxis.append("text")
    .attr("y", 48)
    .attr("x", raceGraphWidth/2)
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .text("Percent Increase in Consumption")
let colorScale = d3.scaleOrdinal()
    .domain([increaseData[0].battle, increaseData[1].battle,
    increaseData[2].battle, increaseData[3].battle])
    .range(colors);
raceSVG.append("g")
    .attr("fill", "white")
    .style("font-family", "'Changa', sans-serif")
    .style("font-size", "12px")
    .attr("class", "legendColor")
    .attr("transform", "translate(50,20)");
let colorLegend = d3.legendColor()
    .shapeWidth(200)
    .cells(4)
    .orient('horizontal')
    .scale(colorScale);
raceSVG.select(".legendColor")
    .call(colorLegend);
let raceClicked = false;
let raceButton = raceDiv.append("button")
    .text("Click to Run Bart Chart Race")
    .style("font-family","'Changa', sans-serif")
    .style("font-size", "1vw")
    .style("width", "20vw")
    .style("height", "3.5vw")
    .style("display", "block")
    .style("margin", "0 auto 2.8vw auto")
    .style("color", "white")
    .style("background-color", "black")
    .style("border", "0.4vw darkblue solid")
    .on("click", function(){
        if(!raceClicked) {
            raceClicked = true
            animateRace()
            raceButton.style("opacity", "0.3")
        }
    })
    .on("mouseover", function (){
        if(!raceClicked)
            raceButton.style("transform","scale(1.15)")
    })
    .on("mouseout", function (){
        if(!raceClicked)
            raceButton.style("transform", "scale(1)")
    })

d3.select("body")
    .append("div")
    .attr("class", "bannerSections otherSection")
    .html("IMPACTS OF SOCIAL MOVEMENTS/EVENTS <br> ON MUSIC TRENDS IN 2020")

let bubbleObjects = []
let streamCounts = []
let bubbles = []
let songTitles = []
let images = []
let circleXPos = []
let clicked = false

d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Page 26 of MRC Data's 2020 Billboard Year-End Review</a>")
let bubbleDiv = d3.select("body")
    .append("div")
    .style("width", "90%")
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-items", "center")
    .style("margin", "3vw auto 3vw auto")
    .style("border-radius", "10%")
    .style("background-color", "#0e1261")
    .style("flex-wrap", "wrap")
    .style("overflow", "auto")

let titleDiv = bubbleDiv.append("div")
    .style("width", "82%")
    .style("display", "block")
    .style("margin", "3.5vw auto 0.5vw auto")
    .style("font-size", "2.5vw")
    .style("color", "white")
    .style("font-family","'Quantico', sans-serif")
    .style("text-align", "center")
    .html("Songs That Saw The Most Growth From Week Of:<br>")

titleDiv.append("text")
    .style("font-size", "1.5vw")
    .html("[May 22nd, 2020 - May 27th 2020] to [May 28th, 2020 - June 6th 2020]")

bubbleDiv.append("div")
    .attr("id", "songBubbles")
    .style("width", "75vw")
    .style("display", "block")
    .style("margin", "1vw auto 1vw auto")

let bubbleSvg = d3.select("#songBubbles")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,1100,510")
    .style("display", "block")
    .style("margin", "0.8vw auto 0.8vw auto")
let defs = bubbleSvg.append("defs")

// Button reference to call this function from here:
// https://www.d3-graph-gallery.com/graph/interactivity_button.html
function animateBubbles(){
    for(let i = 0; i < 5; i++) {
        images[i].transition()
            .duration(7000)
            .attr("height", Math.sqrt(bubbleObjects[i].second / Math.PI)/2)
            .attr("width", Math.sqrt(bubbleObjects[i].second / Math.PI)/2)

        bubbles[i].transition()
            .duration(7000)
            .attr("r", Math.sqrt(bubbleObjects[i].second / Math.PI)/4)

        let format = d3.format(",")
        streamCounts[i].transition()
            .tween("text", function(){
                let interpolator = d3.interpolateNumber(
                    bubbleObjects[i].first,
                    bubbleObjects[i].second
                )
                return function(t){
                    d3.select(this).text(format(Math.round(interpolator(t))))
                }
            })
            .attr("y", 320-(Math.sqrt(bubbleObjects[i].second / Math.PI)/4)-18)
            .duration(6350)

        songTitles[i].transition()
            .duration(7100)
            .attr("y", 320+(Math.sqrt(bubbleObjects[i].second / Math.PI)/4)+35)
    }
    d3.selectAll("#bubbleannotation")
        .transition()
        .delay(6350)
        .duration(2000)
        .style("opacity", "1")
}
function drawBubbles(obj, index, xPos){
    //References for images and patterns:
    // https://stackoverflow.com/questions/43915724/d3-js-force-direct-graph-pngs-in-circles-making-the-images-circular
    // http://bl.ocks.org/eesur/be2abfb3155a38be4de4
    let bubble = bubbleSvg.append("g")

    let image = defs.append('pattern')
        .attr("id", "songName"+index)
        .attr("width", 1)
        .attr("height", 1)
        .append("svg:image")
        .attr("xlink:href", obj[index].image)
        .attr("height", Math.sqrt(obj[index].first / Math.PI)/2)
        .attr("width", Math.sqrt(obj[index].first / Math.PI)/2)
        .attr("x", 0)
        .attr("y", 0)
    images.push(image)

    let songBubble = bubble.append("circle")
        .style("stroke", "white")
        .attr("fill", "url(#songName"+index+")")
        .attr("cy", 320)
        .attr("cx", xPos)
        // .attr("r", obj[index].first/5000)
        .attr("r", Math.sqrt(obj[index].first / Math.PI)/4)

    bubbles.push(songBubble)

    let format = d3.format(",")
    let streamCount = bubble.append("text")
        .style("font-size", "25px")
        .attr("x", xPos)
        .attr("y", 320-(Math.sqrt(obj[index].first / Math.PI)/4)-18)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .style("font-family","'Changa', sans-serif")
        .text(format(obj[index].first))
    streamCounts.push(streamCount)


    let bubbleTitle = bubble.append("text")
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("x", xPos)
        // .attr("y", 175+(obj[index].first/5000)+35)
        .attr("y", 320+(Math.sqrt(obj[index].first / Math.PI)/4)+35)
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "18px")
        .text("\""+obj[index].song+"\"")
    songTitles.push(bubbleTitle)
}


d3.csv("soc_movement_growth.csv").then(function(data){
    for(let i = 0; i < data.length; i++) {
        bubbleObjects.push({
            song: data[i]["song"],
            artist: data[i]["artist"],
            first: +data[i]["first week"],
            second: +data[i]["second week"],
            image: data[i]["image"]
        })
        if(i === 0){
            circleXPos.push((
                Math.sqrt(+data[i]["second week"]/Math.PI)/4)+12)
        }
        else if (i===1){
            circleXPos.push(
                (circleXPos[i-1]/2)+(
                Math.sqrt(+data[i]["second week"]/Math.PI)/4)+80)
        }
        else{
            circleXPos.push(
                (circleXPos[i-1]/2)+(
                Math.sqrt(+data[i]["second week"]/Math.PI)/4)+10)
        }
    }
    for(let i = 1; i < 5; i++){
        circleXPos[i] += circleXPos[i-1]
    }
    for(let i = 0; i < 5; i++){
        drawBubbles(bubbleObjects, i, circleXPos[i])
    }

    let annotationArray = []
    for(let i = 0; i < 5; i++) {
        console.log(circleXPos[i])
        let annotations = [{
            note: {
                label: ((d3.format(".1f"))(((bubbleObjects[i].second-bubbleObjects[i].first)
                    /bubbleObjects[i].first)*100)) + "%",
                bgPadding: 15,
                title: "Growth Rate",
                wrap: 200,
            },
            connector: {
                end: "dot",
                type: "curve",
                //can also add a curve type, e.g. curve: d3.curveStep
                points: [[55, -30]]
            },
            type: d3.annotationCalloutRect,
            subject: {
                width: 110,
                height: 60
            },
            color: ["white"],
            x: circleXPos[i]-55,
            y: 320 - ((Math.sqrt(bubbleObjects[i].second / Math.PI) / 4) + 55),
            dy: -45,
            dx: 10,
        }]

        const makeAnnotations = d3.annotation()
            .annotations(annotations)

        annotationArray.push(makeAnnotations);

        bubbleSvg.append("g")
            .attr("id", "bubbleannotation")
            .style("fill", "white")
            .style("opacity", "0")
            .style("font-family","'Changa', sans-serif")
            .style("font-size", "18px")
            .call(makeAnnotations)
    }

    let aniButton = bubbleDiv.append("button")
        .text("Click to Run Growth Animation")
        .style("font-family","'Changa', sans-serif")
        .style("font-size", "1vw")
        .style("width", "20vw")
        .style("height", "3.5vw")
        .style("display", "block")
        .style("margin", "0.8vw auto 2.8vw auto")
        .style("color", "white")
        .style("background-color", "black")
        .style("border", "0.4vw darkblue solid")
        .on("click", function(){
            if(!clicked) {
                clicked = true
                animateBubbles()
                aniButton.style("opacity", "0.3")
            }
        })
        .on("mouseover", function (){
            if(!clicked)
                aniButton.style("transform","scale(1.15)")
        })
        .on("mouseout", function (){
            if(!clicked)
                aniButton.style("transform", "scale(1)")
        })
})

d3.select("body")
    .append("div")
    .attr("id", "socMovBlock")
    .attr("class", "descBlock BLM")
d3.select("#socMovBlock")
    .append("text")
    .attr("class", "blockTitle")
    .html("Why Is This Time Range Significant?")
d3.select("#socMovBlock")
    .append("text")
    .attr("class", "socMoveDesc")
    .html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The transition from the week of May 22nd, 2020 - May 27th, 2020 to May 28th, 2020 - June 6th, 2020 is important "+
    "because this time range is shortly after the death of George Floyd (May 25th, 2020).  This event is arguably one of the most " +
        "impactful and defining of 2020, as it led to widespread protests throughout the nation.  These songs in particular are very " +
        "topical when considering the impact of this event, and it is no surprise that most of them saw booming growth following it.<br><br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is worth noting that <em>none</em> of these songs were released in 2020, so being a new release is not a factor in their rise in " +
        "popularity.  Instead, these songs have common themes of struggle, perseverance, and the injustices African Americans face in the US, which " +
        "resonated deeply with the feelings of those in mourning and shock over the death of George Floyd and many others in the past.")