const margin = {top: 75, right: 65, bottom: 55, left: 95};

const width = 700, height = 500;

d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Pages 46-51 of MRC Data's 2020 Billboard Year-End Review</a>"+
    "<br>2019 Data Sourced from:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://static.billboard.com/files/pdfs/NIELSEN_2019_YEARENDreportUS.pdf' target = '_blank'>Pages 29-33 of Nielsen's 2019 Billboard Year-End Review</a>")

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

// barDiv1.append("div")
//     .attr("id", "subCharts")
//     .style("width", "30vw")
//     .style("height", "40vw")
//     .style("overflow", "auto")
//     .style("border", "0.3vw white solid")
//     .style("background-color", "#03063b")
//     .style("margin", "auto")

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

function makeDivergingChart(group, dataset){
    let graphHeight2 = 110,
        graphWidth2 = 180
    let xScale2 = d3.scaleBand().range([0, graphWidth2]).padding(0.3)
    let yScale2 = d3.scaleLinear().range([graphHeight2, 0])

    xScale2.domain(["2018-2019","2019-2020"])
    yScale2.domain([-35, 35])
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
        .attr("font-size", "8px")
        .attr("text-anchor", "middle")
        .text(function (d){ return d.percentDiff + "%" })

    group.append("g")
        .call(d3.axisBottom(xScale2))
        .attr("transform", "translate(0,"+graphHeight2+")");

    group.append("g")
        .call(d3.axisLeft(yScale2).ticks(4))

    group.append("line")
        .style("stroke", "white")
        .attr("x1", 0)
        .attr("y1", yScale2(0))
        .attr("x2", graphWidth2)
        .attr("y2", yScale2(0));
}

const width2 = 300, height2 = 200

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


// let divergeScale = d3.scaleDiverging()
//     .interpolator(d3.interpolatePRGn)
//     .domain([-24, 0, 24])
//
// let svg2 = d3.select("#subCharts")
//     .append("svg")
//     .attr("preserveAspectRatio", "xMinYMin meet")
//     .attr("viewBox", "0,0,300,200")
//
// svg2.append("text")
//     .attr("x", width2/2)
//     .attr("y", 35)
//     .attr("text-anchor", "middle")
//     .attr("font-size", "12px")
//     .attr("fill", "white")
//     .text("Percentage Change of Total Album Sales")
//
// let svg3 = d3.select("#subCharts")
//     .append("svg")
//     .attr("preserveAspectRatio", "xMinYMin meet")
//     .attr("viewBox", "0,0,300,200")
//
// svg3.append("text")
//     .attr("x", width2/2)
//     .attr("y", 35)
//     .attr("text-anchor", "middle")
//     .attr("font-size", "12px")
//     .attr("fill", "white")
//     .text("Percentage Change of Audio Streams")
//
// let g2 = svg2.append("g")
//     .attr("transform", "translate(42, 70)")
//
// let g3 = svg3.append("g")
//     .attr("transform", "translate(42, 70)")
//
//
// let legendD = d3.legendColor()
//     .cells(5)
//     .scale(divergeScale)
// svg2.append("g")
//     .attr("class", "legendOrdinal")
//     .attr("transform", "translate(240,90)")
//     .attr("font-size", "9px")
//     .style("fill", "white")
// svg2.select(".legendOrdinal")
//     .call(legendD)
// svg3.append("g")
//     .attr("class", "legendOrdinal")
//     .attr("transform", "translate(240,90)")
//     .attr("font-size", "8px")
//     .style("fill", "white")
// svg3.select(".legendOrdinal")
//     .call(legendD)
// makeDivergingChart(g2, totalUSAlbumSales)
// makeDivergingChart(g3, totalUSAudioStreams)



d3.select("body")
    .append("div")
    .attr("class", "bannerSections")
    .html("SHARE OF TOTAL VOLUME BY FORMAT & TOP 10 GENRE <br> FROM 2019 AND 2020")

// Reference for responsiveness:
// https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b

// Reference for Force Cluster Graph
// https://bl.ocks.org/d3indepth/9d9f03a0016bc9df0f13b0d52978c02f

// let selectionDiv = d3.select("body")
//     .append("div")
//     .attr("id", "choices_container")
//     .style("width", "80vw")
//     .style("margin", "0.5vw auto 0.5vw auto")
//     .style("padding", "1vw")
//
// let choices = [
//     {name: "Volume", index: 0},
//     {name: "Physical Album Sales", index: 1},
//     {name: "Digital Album Sales", index: 2},
//     {name: "Digital Song Sales", index: 3},
//     {name: "Total On-Demand Streams", index: 4},
//     {name: "On-Demand Audio Streams", index: 5},
//     {name: "On-Demand Video Streams", index: 6}];
//
// let dropDown = d3.select("#choices_container")
//     .append("select")
//     .attr("class", "selection")
//     .style("font-size", "1.5vw")
//     .style("padding", "0.8vw")
//     .attr("name", "Chart-Type")
// let options = dropDown.selectAll("option")
//     .data(choices)
//     .enter()
//     .append("option");
// options.text(function (d){
//     return d.name;
// })
//     .attr("value", function (d){
//         return d.index;
//     })

let volumeCirclePack = d3.select("body")
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

d3.select(".selection").on("change", function (d){
    let selection = d3.select(this).property("value")
    d3.select(".curr_chart").remove()
    volumeSVG = volumeCirclePack.append("svg")
        .attr("class", "curr_chart")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0,0,600,330")
        .style("display", "block")
        .style("background-color", "#03063b")
    volumeSVG.append("g")
        .attr("class", "legendOrdinal")
        .attr("transform", "translate(15,10)")
        .attr("font-size", "9px")
        .style("fill", "white")
    let yearScale2 = d3.scaleOrdinal()
        .domain(["2019", "2020"])
        .range(["#ff5e00","#0059de"])
    let legend2 = d3.legendColor()
        .shapeWidth(30)
        .scale(yearScale2)
    volumeSVG.select(".legendOrdinal")
        .call(legend2)
    let bubbleGroup = volumeSVG.append("g")
    let bubbleGroup2 = volumeSVG.append("g")
    makeForces(volumeObjects2020[selection], bubbleGroup, bubbleGroup2, 420)
    makeForces(volumeObjects2019[selection], bubbleGroup2, bubbleGroup,180)
})

d3.select("body")
    .append("div")
    .attr("class", "bannerSections")
    .html("IMPACTS OF SOCIAL MOVEMENTS/EVENTS <br> ON MUSIC TRENDS IN 2020")

let bubbleObjects = []
let streamCounts = []
let bubbles = []
let songTitles = []
let images = []
let circleXPos = []
let clicked = false

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
    let annotations = d3.selectAll("#bubbleannotation")
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
    console.log(bubbles.length)
    console.log(bubbleObjects.length)

})
