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
    .style("background-color","#1e008a");

/*
    These are the 6 divs that will hold the SVG's for the 6 'general statistics' bar charts that track changes of the
    Top 10 Album Sales and Top 10 Songs Streams between 2019 and 2020
 */
barDiv1.append("div")
    .attr("id", "physicalalbums")
    .attr("class", "generalBarCharts")
    .style("margin", "2.5vw auto 0.5vw 2.5vw");
barDiv1.append("div")
    .attr("id", "digitalalbums")
    .attr("class", "generalBarCharts")
    .style("margin", "2.5vw auto 0.5vw auto");
barDiv1.append("div")
    .attr("id", "totalsales")
    .attr("class", "generalBarCharts")
    .style("margin", "2.5vw 2.5vw 0.5vw auto");
barDiv1.append("div")
    .attr("id", "videostreams")
    .attr("class", "generalBarCharts")
    .style("margin", "0.5vw auto 2.5vw 2.5vw");
barDiv1.append("div")
    .attr("id", "audiostreams")
    .attr("class", "generalBarCharts")
    .style("margin", "0.5vw auto 2.5vw auto");
barDiv1.append("div")
    .attr("id", "streams")
    .attr("class", "generalBarCharts")
    .style("margin", "0.5vw 2.5vw 2.5vw auto");

/*
    Each Bar Chart SVG is inside a responsive view box that will resize along with the page.
    Reference for responsiveness:
    https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b
 */
let albumsSVG = d3.select("#physicalalbums")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .attr("class", "generalBarChartsSVG");
let albumsSVG2 = d3.select("#digitalalbums")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .attr("class", "generalBarChartsSVG");
let totalSalesSVG = d3.select("#totalsales")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .attr("class", "generalBarChartsSVG");
let audioSVG = d3.select("#audiostreams")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .attr("class", "generalBarChartsSVG");
let videoSVG = d3.select("#videostreams")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .attr("class", "generalBarChartsSVG");
let streamsSVG = d3.select("#streams")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,700,500")
    .attr("class", "generalBarChartsSVG");

/*
    These are the groups of each SVG that will contain the actual graph
 */
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

/*
    Color legends for each bar chart, made with d3.legend
 */
albumsSVG.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
albumsSVG2.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
totalSalesSVG.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
audioSVG.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
videoSVG.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")
streamsSVG.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate("+(margin.left+30)+","+(margin.top+20)+")")

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

/*
    Defining scales for all the graphs
 */

let xScale = d3.scaleBand().range([0, graphWidth]).padding(0.4);
let salesPhysDigiScale = d3.scaleLinear().range([graphHeight, 0]);
let totalSalesScale = d3.scaleLinear().range([graphHeight, 0]);
let streamsAudVidScale = d3.scaleLinear().range([graphHeight, 0]);
let totalStreamScale = d3.scaleLinear().range([graphHeight, 0]);

/*
    Titles for each graph
 */
albumsSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("class", "generalTitles")
    .text("Top 10 Albums - Physical Sales");
albumsSVG2.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("class", "generalTitles")
    .text("Top 10 Albums - Digital Sales");
totalSalesSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("class", "generalTitles")
    .text("Top 10 Albums - Total Sales");
audioSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("class", "generalTitles")
    .text("Top 10 Songs - On-Demand Audio Streams");
videoSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("class", "generalTitles")
    .text("Top 10 Songs - On-Demand Video Streams");
streamsSVG.append("text")
    .attr("x", margin.left + (graphWidth/2))
    .attr("y", 32)
    .attr("text-anchor", "middle")
    .attr("class", "generalTitles")
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

/*
    Loop will read from all 6 sales/streams csv files at once and compile each entry
    into an object with a
    Type - Which chart the object represents
    Title - The song or album name
    Artist - The artist's name
    Value - The album sales / streaming count
    Rank - The album/song's position in the top 10
    These objects are added to separate arrays for each chart that represent the top
    10 of 2019 and 2020 for each chart
 */
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
            type: "Physical Album Sales",
            title: files[0][i]["title"],
            artist: files[0][i]["artist"],
            value: +files[0][i]["sales"],
            rank: "#" + ((i % 10) + 1)
        }
        let digiAlbumObj = {
            type: "Digital Album Sales",
            title: files[1][i]["title"],
            artist: files[1][i]["artist"],
            value: +files[1][i]["sales"],
            rank: "#" + ((i % 10) + 1)
        }
        let audioStreamObj = {
            type: "On-Demand Audio Streams",
            title: files[2][i]["title"],
            artist: files[2][i]["artist"],
            value: +files[2][i]["streams"],
            rank: "#" + ((i % 10) + 1)
        }
        let videoStreamObj = {
            type: "On-Demand Video Streams",
            title: files[3][i]["title"],
            artist: files[3][i]["artist"],
            value: +files[3][i]["streams"],
            rank: "#" + ((i % 10) + 1)
        }
        let streamObj = {
            type: "Total On-Demand Streams",
            title: files[4][i]["title"],
            artist: files[4][i]["artist"],
            value: +files[4][i]["streams"],
            rank: "#" + ((i % 10) + 1)
        }
        let totalSalesObj = {
            type: "Total Album Sales",
            title: files[5][i]["title"],
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

    /*
        Define scales for each chart
     */
    xScale.domain(["#10", "#9",  "#8", "#7", "#6", "#5", "#4", "#3", "#2", "#1"]);
    salesPhysDigiScale.domain([0, 800000])
    totalSalesScale.domain([0, 1300000])
    streamsAudVidScale.domain([0, 1500000000])
    totalStreamScale.domain([0, 2500000000])

    /*
        Chart groups, scales, and data sets are put into an array so that chart
        bars, axes, and labels can be created in a loop
     */
    let chartList = [{svgChoice: albumGroup, scaleChoice: salesPhysDigiScale, dataset1: PhysAlbumSales2019, dataset2: PhysAlbumSales2020},
                     {svgChoice: albumGroup2, scaleChoice: salesPhysDigiScale, dataset1: DigiAlbumSales2019, dataset2: DigiAlbumSales2020},
                     {svgChoice: albumGroup3, scaleChoice: totalSalesScale, dataset1: TotalSales2019, dataset2: TotalSales2020},
                     {svgChoice: audioGroup, scaleChoice: streamsAudVidScale, dataset1: AudioStreams2019, dataset2: AudioStreams2020},
                     {svgChoice: videoGroup, scaleChoice: streamsAudVidScale, dataset1: VideoStreams2019, dataset2: VideoStreams2020},
                     {svgChoice: streamsGroup, scaleChoice: totalStreamScale, dataset1: streams2019, dataset2: streams2020},
    ]

    /*
        This function creates a tooltip when hovering over a bar.  Tooltip will be
        displayed at the top of each chart.  Hovering over 2019 or 2020 bar for a
        particular rank will display the data for both of the bars in that rank.
        Data will be displayed in this format:
        Artist -
        Song/Album Title -
        Sales/Streams -
     */
    function createTooltip(title, rank, index){
        let type;
        let type2;
        if(title.includes("Album")) {
            type = "Album"
            type2 = "Sales"
        }
        else {
            type = "Song"
            type2 = "Streams"
        }
        let id = rank.replace('#', 'p')
        let format = d3.format(",")
        let data2019 = chartList[index].svgChoice.selectAll("#"+id)._groups[0][0].__data__;
        let display2019Value = format(data2019.value)
        let data2020 = chartList[index].svgChoice.selectAll("#"+id)._groups[0][1].__data__;
        let display2020Value = format(data2020.value)
        let text;
        if(type === "Album")
            text = "<div style='width: 90%; text-align: center; margin: 0 auto 1.6vw auto;text-decoration: underline'>"+title+" "+rank+" Spot</div>"
        else
            text = "<div style='width: 90%; text-align: center; margin: 0 auto 1.6vw auto;font-size: 1.2vw;text-decoration: underline'>"+title+" "+rank+" Spot</div>"
        text += "<div style='width: 46%;height: 10vw;margin: 0.6vw auto 0.3vw auto'>";
        if(type === "Album")
            text += "<div style='text-align: center;margin: 0 auto 0.6vw auto;text-decoration: underline'>" + "2019 "+rank+"</div>"
        else
            text += "<div style='text-align: center;margin: 0 auto 0.6vw auto;text-decoration: underline;font-size: 1.2vw'>" + "2019 "+rank+"</div>"
        text += "<div style='width: 90%;margin: auto;font-size: 0.8vw;'>"+
            "Artist: "+data2019.artist+"<br>"+
            type+": "+data2019.title+"<br>"+
            type2+": "+display2019Value+"<br>"+
            "</div>"
        text+="</div>"
        text += "<div style='width: 46%;height: 10vw;margin: 0.6vw auto 0.3vw auto'>";
        if(type === "Album")
            text += "<div style='text-align: center;margin: 0 auto 0.6vw auto;text-decoration: underline'>" + "2020 "+rank+"</div>"
        else
            text += "<div style='text-align: center;margin: 0 auto 0.6vw auto;text-decoration: underline;font-size: 1.2vw'>" + "2020 "+rank+"</div>"
        text += "<div style='width: 90%;margin: auto;font-size: 0.8vw;'>"+
            "Artist: "+data2020.artist+"<br>"+
            type+": "+data2020.title+"<br>"+
            type2+": "+display2020Value+"<br>"+
            "</div>"
        text+="</div>"
        let tipDiv;
        if (title === "Physical Album Sales")
            tipDiv = barDiv1.select("#physicalalbums")
        else if (title === "Digital Album Sales")
            tipDiv = barDiv1.select("#digitalalbums")
        else if (title === "Total Album Sales")
            tipDiv = barDiv1.select("#totalsales")
        else if (title === "On-Demand Audio Streams")
            tipDiv = barDiv1.select("#audiostreams")
        else if (title === "On-Demand Video Streams")
            tipDiv = barDiv1.select("#videostreams")
        else
            tipDiv = barDiv1.select("#streams")
        tipDiv.append("div")
            .attr("id", "generalTooltip")
            .attr("class", "generalTooltip")
            .html(text)
    }
    /*
        This for loop creates the bars for all of the charts, the axes, and the labels
        for the axes.  Tooltip creation will also be handled on mouseover of each bar,
        and they will be removed when the mouse moves out of a bar.
     */
    for(let i = 0; i < 6; i++) {
        chartList[i].svgChoice.append("g")
            .selectAll("g")
            .data(chartList[i].dataset1)
            .enter()
            .append("rect")
            .attr("id", function (d) { return d.rank.replace('#','p') })
            .attr("width", (xScale.bandwidth()/2)-2)
            .attr("y", function (d){ return chartList[i].scaleChoice(d.value) })
            .attr("x", function (d){ return xScale(d.rank) })
            .attr("height", function (d){ return graphHeight - chartList[i].scaleChoice(d.value) })
            .attr("fill", "#ff5e00")
            .on("mouseover", function (e, d){
                createTooltip(d.type, d.rank, i)
            })
            .on("mouseout", function (){
                let tooltipDiv = d3.select("#generalTooltip")
                tooltipDiv.remove()
            });
        chartList[i].svgChoice.append("g")
            .selectAll("g")
            .data(chartList[i].dataset2)
            .enter()
            .append("rect")
            .attr("id", function (d) { return d.rank.replace('#','p') })
            .attr("width", (xScale.bandwidth()/2)-2)
            .attr("y", function (d){ return chartList[i].scaleChoice(d.value) })
            .attr("x", function (d){ return xScale(d.rank) + (((xScale.bandwidth()/2)+2))})
            .attr("height", function (d){ return graphHeight - chartList[i].scaleChoice(d.value) })
            .attr("fill", "#0059de")
            .on("mouseover", function (e, d){
                createTooltip(d.type, d.rank, i)
            })
            .on("mouseout", function (){
                let tooltipDiv = d3.select("#generalTooltip")
                tooltipDiv.remove()
            });
        let xAxis = chartList[i].svgChoice.append("g")
            .attr("class", "generalAxis")
            .call(d3.axisBottom(xScale))
            .attr("transform", "translate(0," + graphHeight + ")")
        let xText = xAxis.append("text")
            .attr("class", "generalAxis")
            .attr("fill", "white")
            .attr("y", 55)
            .attr("x", graphWidth / 2)
            .attr("text-anchor", "middle")
        let yAxis = chartList[i].svgChoice.append("g")
            .attr("class", "generalAxis")
            .call(d3.axisLeft(chartList[i].scaleChoice).ticks(5).tickFormat(function (d) {
                return d3.format(".3s")(d).replace("G", "B");
            }));
        let yText = yAxis.append("text")
            .attr("class", "generalAxis")
            .attr("fill", "white")
            .attr("y", graphHeight / 2)
            .attr("transform", "translate(" + (-265) + ", " + graphHeight / 2 + ")rotate(-90)")
            .attr("text-anchor", "middle")
        if (i === 0 || i === 1 || i === 2) {
            xText.text("Album Rank")
            yText.text("Album Sales")
        } else {
            xText.text("Song Rank")
            yText.text("Stream Count")
        }
    }
})

const width2 = 300, height2 = 250
/*
    This function creates a Diverging Scale bar chart given an svg group and a dataset
    The color scale for these graphs is from d3's built in interpolation options, specifically
    interpolateRdBu
 */

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
    .attr("class", "divergeBarCharts")
let physDiverge = divergeDiv.append("div")
    .attr("class", "divergeBarChartsSVG")
    .style("margin", "3vw 0.3vw 0.6vw auto")
let digiDiverge = divergeDiv.append("div")
    .attr("class", "divergeBarChartsSVG")
    .style("margin", "3vw 0.3vw 0.6vw 0.3vw")
let totalDiverge = divergeDiv.append("div")
    .attr("class", "divergeBarChartsSVG")
    .style("margin", "3vw auto 0.6vw 0.3vw")
let vinylDiverge = divergeDiv.append("div")
    .attr("class", "divergeBarChartsSVG")
    .style("margin", "0.6vw 0.3vw 3vw auto")
let digitalSongDiverge = divergeDiv.append("div")
    .attr("class", "divergeBarChartsSVG")
    .style("margin", "0.6vw 0.3vw 3vw 0.3vw")
let audioStreamDiverge = divergeDiv.append("div")
    .attr("class", "divergeBarChartsSVG")
    .style("margin", "0.6vw auto 3vw 0.3vw")
/*
    Each Diverging Bar Chart SVG is inside a responsive view box that will resize along with the page.
    Reference for responsiveness:
    https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b
 */
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
/*
    Each Diverging Bar Chart has the same scale so they are all easily comparable
 */
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
    .attr("class", "divergeTitle")
    .text("Percent Change In Physical Album Sales")
digiDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("class", "divergeTitle")
    .text("Percent Change In Digital Album Sales")
totalDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("class", "divergeTitle")
    .text("Percent Change In Total Album Sales")
vinylDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("class", "divergeTitle")
    .text("Percent Change In Vinyl LP Sales")
digiSongDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("class", "divergeTitle")
    .text("Percent Change In Digital Song Sales")
audioDSVG.append("text")
    .attr("x", 150)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("class", "divergeTitle")
    .text("Percent Change In Audio Streaming")

/*
    All the Diverging Bar Charts are placed in the given group and get their data
    from the given dataset
 */
makeDivergingChart(physDGroup, USPhysAlbumSales)
makeDivergingChart(digiDGroup, USDigiAlbumSales)
makeDivergingChart(totalDGroup, totalUSAlbumSales)
makeDivergingChart(vinylDGroup, vinylAlbumSales)
makeDivergingChart(digiSongDGroup, digitalSongSales)
makeDivergingChart(audioDGroup, totalUSAudioStreams)
physDSVG.append("g")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
digiDSVG.append("g")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
totalDSVG.append("g")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
vinylDSVG.append("g")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
digiSongDSVG.append("g")
    .attr("class", "legendDiverge")
    .attr("transform", "translate(22,28)");
audioDSVG.append("g")
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


// Reference for Force Cluster Graph
// https://bl.ocks.org/d3indepth/9d9f03a0016bc9df0f13b0d52978c02f
d3.select("body")
    .append("div")
    .attr("class", "datasource")
    .html("2020 Data Sourced from:&nbsp;&nbsp;<a href ='https://www.musicbusinessworldwide.com/files/2021/01/MRC_Billboard_YEAR_END_2020_US-Final.pdf' target = '_blank'>Page 53 of MRC Data's 2020 Billboard Year-End Review</a>"+
        "<br>2019 Data Sourced from:&nbsp;&nbsp;<a href='https://static.billboard.com/files/pdfs/NIELSEN_2019_YEARENDreportUS.pdf' target = '_blank'>Page 35 of Nielsen's 2019 Billboard Year-End Review</a>")


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

    graph.nodes(dataset).on("tick", function (){
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

    for(let i = 0; i < 5; i++) {
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

function styleIFrame(i){
    i.allowFullscreen = false;
    i.frameBorder = 0;
    i.width = "80%";
    i.height = "52%";
    i.style.display = "block";
    i.style.margin = "1.2vw auto 0vw auto";
    i.style.padding = "0.3vw";
}

let descriptions = [
    "This Is America, by Childish Gambino, was released on May 5th, 2018.  Upon its release, it saw " +
    "nationwide attention, as the music video covered heavy topics of racism and the black struggle in the U.S. " +
    "The video is full of symbolism, from Gambino imitating minstrel/sambo imagery to Gambino commiting acts of " +
    "gun violence that represent the U.S.' severe incidence of such cases.  In 2019, This Is America won 4 grammies for: " +
    "Best Music Video, Record of the Year, Song of the Year, and Best Melodic Rap Performance.<br><br>" +
    "<div style='margin: auto;text-align: center'>" +
    "Lyrics and analysis can be found <a style='text-align: center' href='https://genius.com/Childish-gambino-this-is-america-lyrics' target='_blank'>here</a>" +
    "</div>",
    "Middle Child, by J. Cole, was released on January 23rd, 2019.  Now officially J. Cole's highest-charting song, Middle " +
    "Child is the only song on this list that doesn't have a theme of racial injustice or struggle.  Instead, J. Cole raps about " +
    "a different kind of struggle, his place as the 'middle child' of old and new generations of hip hop and how he often gets " +
    "overlooked in the industry.<br><br>" +
    "<div style='margin: auto;text-align: center'>" +
    "Lyrics and analysis can be found <a href='https://genius.com/J-cole-middle-child-lyrics' target='_blank'>here</a>" +
    "</div>",
    "Alright, by Kendrick Lamar, was released on June 30th, 2015 - the second oldest song on the list.  Since its release, Alright has" +
    " been used as a protest song, one of the more recent examples being the Washington D.C. BLM protests on  " +
    "<a href='https://twitter.com/JoshuaPotash/status/1269394317640171525?s=20' target='_blank'>June 6th 2020</a>.  The song's message" +
    " perfectly embodies the feelings of struggle and perseverance experienced by black people in modern America.  Lamar recounts these" +
    " instances of black strife throughout the song, but he continues to echo the sentiment that \"we gon\' be alright\" despite them, an uplifting" +
    " message that grew to become an anthem for those fighting for change." +
    " Alright would go on to win two Grammies for Best Rap Performance and Best Rap Song, an MTV Video Music Award for Best Direction, two BET" +
    " Hip Hop awards for Best Impact Track and Best Hip Hop Video, and a Soul Train Music Award for Rhythm & Bars.<br><br>" +
    "<div style='margin: auto;text-align: center'>" +
    "Lyrics and analysis can be found <a href='https://genius.com/Kendrick-lamar-alright-lyrics' target='_blank'>here</a>" +
    "</div>",
    "a lot, by 21 Savage feat. J.Cole, was released on December 20th, 2018.  a lot is similar to J.Cole's previous entry on this list - Middle Child " +
    "- as it is based on personal struggles as opposed to broader terms of black struggle in the U.S. a lot is arguably the most fitting " +
    "entry on the album which it debuted (\'I Am > I Was\') as it describes just how far 21 Savage has come despite his tumultuous life full of hardships." +
    " The recollection of violence, infidelity, and loss in 21 Savage's life is only elevated by its powerful music video. J.Cole chimes in on the track" +
    " by paying his respects to 21 Savage before rapping about the deceptive nature of the music industry, the justice system, and the media in his definitive" +
    " style and prowess." +
    "<div style='margin: auto;text-align: center'>" +
    "Lyrics and analysis can be found <a href='https://genius.com/21-savage-a-lot-lyrics' target='_blank'>here</a>" +
    "</div>",
    "Fuck tha Police, by N.W.A., was released on August 9th, 1988.  It is the oldest song on the list, and quite possibly the most famous and influential" +
    ". The impact this song has had is indesputable, as it is one of the most famous protests songs to this date.  The meaning of the song is clear enough" +
    " from the title alone. In it, Ice Cube, MC Ren, and Eazy-E are testifying in a mock trial against the LAPD.  They all proceed to criticize police actiobs" +
    " and police brutality. Since its release, Fuck Tha Police has remained a controversial song, but it's because of its controversial meaning  that it has" +
    " garnered so much recognition and impact over 30 years after its release."+
    "<div style='margin: auto;text-align: center'>" +
    "Lyrics and analysis can be found <a href='https://genius.com/Nwa-fuck-tha-police-lyrics' target='_blank'>here</a>" +
    "</div>",

]

let songBlocks = []
let links = ["https://www.youtube.com/embed/VYOjWnS4cMY", "https://www.youtube.com/embed/WILNIXZr2oc",
             "https://www.youtube.com/embed/Z-48u_uWMHY", "https://www.youtube.com/embed/DmWWqogr_r8",
             "https://www.youtube.com/embed/ADdpLv3RDhA"]
let titles = ["This Is America", "Middle Child", "Alright", "a lot", "Fuck Tha Police"]

let descriptionDiv = d3.select("body")
    .append("div")
    .style("width", "90%")
    .style("background-color", "#010314")
    .style("margin", "0.5vw auto 1.5vw auto")
    .style("display", "flex")
    .style("flex-wrap", "wrap")
    .style("justify-content", "space-evenly")
    .style("align-items", "center")
    .style("justify-items", "center")
    .style("border-radius", "10%")
    .style("overflow", "hidden")

descriptionDiv.append("div")
    .style("width", "100%")
    .style("background-color","#0e1261")
    .style("padding", "2vw")
    .style("margin", "0 -2vw")
    .style("margin-bottom", "1.5vw")
    .style("font-size", "3.2vw")
    .style("font-family", "Quantico, sans-serif")
    .style("border-bottom", "1vw double #060929")
    .style("text-align", "center")
    .html("Song Descriptions and Information")

for(let i = 0; i < 5; i++){
    let block = descriptionDiv.append("div")
        .attr("id", "songBlock"+(i+1))
    if(i === 0 || i === 2)
        block.attr("class", "songBlock leftEdge")
    else if(i === 1 || i ===3)
        block.attr("class", "songBlock rightEdge")
    else
        block.attr("class", "songBlock lastBlock")
    songBlocks.push(block)
    block.append("div")
        .attr("class", "songTitle")
        .html(titles[i])
    let currIFrame = document.createElement("iframe")
    styleIFrame(currIFrame)
    currIFrame.src = links[i]
    document.getElementById("songBlock"+(i+1)).appendChild(currIFrame)
    block.append("div")
        .attr("id", "songDesc"+(i+1))
        .attr("class", "songDesc")
        .html(descriptions[i])
}

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
