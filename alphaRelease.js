const margin = {top: 45, right: 65, bottom: 45, left: 65}

const width = 620, height = 500

let barDiv1 = d3.select("body")
    .append("div")
    .attr("id", "albumSales")
    .style("width", "80vw")
    .style("height", "50vw")
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-items", "center")
    .style("margin", "3vw auto 3vw auto")
    .style("border", "1vw white double")
    .style("background-color", "#0e1261")
    .style("overflow", "auto")

barDiv1.append("div")
    .attr("id", "mainChart")
    .style("width", "42vw")
    .style("height", "40vw")
    .style("margin", "auto")

barDiv1.append("div")
    .attr("id", "subCharts")
    .style("width", "30vw")
    .style("height", "40vw")
    .style("overflow", "auto")
    .style("border", "0.3vw white solid")
    .style("background-color", "#03063b")
    .style("margin", "auto")

let svg = d3.select("#mainChart")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,620,500")
    .style("display", "block")
    .style("margin", "42px auto 0px auto")

    // .attr("width", width)
    // .attr("height", height)

let g = svg.append("g")
    .attr("transform", "translate(" + (margin.left + 15) + ","
        + margin.top + ")")

svg.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate(100,50)")
    .attr("font-size", "9px")
    .style("fill", "white")

let yearScale = d3.scaleOrdinal()
    .domain(["2019", "2020"])
    .range(["#ff5e00","#0059de"])

let legend = d3.legendColor()
    .shapeWidth(30)
    .scale(yearScale)

svg.select(".legendOrdinal")
    .call(legend)

let graphHeight = height-margin.top-margin.bottom,
    graphWidth = width-margin.right-margin.left

let xScale = d3.scaleBand().range([0, graphWidth]).padding(0.4)

let yScale = d3.scaleLinear().range([graphHeight, 0])

svg.append("text")
    .attr("x", width/2)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("Top 10 Physical Album Sales in 2019 and 2020")

let allSales = []
let sales2019 = []
let sales2020 = []

function drawBars(group, color, offset){
    group.append("rect")
        .attr("width", (xScale.bandwidth()/2)-2)
        .attr("y", function (d){ return yScale(d.sales) })
        .attr("x", function (d){ return xScale(d.rank) +
            (((xScale.bandwidth()/2)+2)*offset)})
        .attr("height", function (d){
            return graphHeight-yScale(d.sales)})
        .attr("fill", color)
}

d3.csv("phys_album_sales.csv").then(function(data)
{
    for (let i = 0; i < data.length; i++){
        allSales.push(+data[i]["sales"])
        let addObj = {
            song: data[i]["title"],
            artist: data[i]["artist"],
            sales: +data[i]["sales"],
            rank: "Rank "+((i%10)+1)
        }
        if(+data[i]["year"] === 2019)
            sales2019.push(addObj)
        else
            sales2020.push(addObj)
    }
    xScale.domain(["Rank 10", "Rank 9",  "Rank 8", "Rank 7", "Rank 6",
                   "Rank 5", "Rank 4", "Rank 3", "Rank 2", "Rank 1"])
    yScale.domain([0, d3.max(allSales)+10000])

    let barGroup2019 = g.append("g")
        .selectAll("g")
        .data(sales2019)
        .enter()
    drawBars(barGroup2019, "#ff5e00", 0)

    let barGroup2020 = g.append("g")
        .selectAll("g")
        .data(sales2020)
        .enter()
    drawBars(barGroup2020, "#0059de", 1)

    g.append("g")
        .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0,"+graphHeight+")");

    g.append("g")
        .call(d3.axisLeft(yScale).ticks(7))
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


let divergeScale = d3.scaleDiverging()
    .interpolator(d3.interpolatePRGn)
    .domain([-24, 0, 24])

let svg2 = d3.select("#subCharts")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,200")

svg2.append("text")
    .attr("x", width2/2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "white")
    .text("Percentage Change of Total Album Sales")

let svg3 = d3.select("#subCharts")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,300,200")

svg3.append("text")
    .attr("x", width2/2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "white")
    .text("Percentage Change of Audio Streams")

let g2 = svg2.append("g")
    .attr("transform", "translate(42, 70)")

let g3 = svg3.append("g")
    .attr("transform", "translate(42, 70)")


let legendD = d3.legendColor()
    .cells(5)
    .scale(divergeScale)
svg2.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate(240,90)")
    .attr("font-size", "9px")
    .style("fill", "white")
svg2.select(".legendOrdinal")
    .call(legendD)
svg3.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate(240,90)")
    .attr("font-size", "8px")
    .style("fill", "white")
svg3.select(".legendOrdinal")
    .call(legendD)
makeDivergingChart(g2, totalUSAlbumSales)
makeDivergingChart(g3, totalUSAudioStreams)



d3.select("body")
    .append("div")
    .attr("class", "bannerSections")
    .text("Share of Total Volume By Format & Genre: 2019 vs. 2020")

// Reference for responsiveness:
// https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b

// Reference for Force Cluster Graph
// https://bl.ocks.org/d3indepth/9d9f03a0016bc9df0f13b0d52978c02f

let volumeCirclePack = d3.select("body")
    .append("div")
    .attr("id", "volumes")
    .style("width", "80vw")
    .style("height", "45vw")
    .style("margin", "3vw auto 3vw auto")
    .style("display", "block")
    .style("border", "2px white solid")

let volumeSVG = d3.select("#volumes")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,500,281")
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
let volumeObjects2019 = [[],[],[],[],[],[],[]]
let volumeObjects2020 = [[],[],[],[],[],[],[]]

d3.csv("total_volume_share.csv").then(function (data2){
    for(let i = 0; i < data2.length; i++){
        let arrayToAdd
        if (i >= 12)
            arrayToAdd = volumeObjects2019
        else
            arrayToAdd = volumeObjects2020
        arrayToAdd[0].push(
            {genre: data2[i]["GENRE"],
             totalVol: +data2[i]["TOTAL VOLUME"],
             radius: (Math.sqrt((+data2[i]["TOTAL VOLUME"]*250)/Math.PI))})
        arrayToAdd[1].push(
            {genre: data2[i]["GENRE"],
             physicalAS: +data2[i]["PHYSICAL ALBUM SALES"],
                radius: (Math.sqrt((+data2[i]["PHYSICAL ALBUM SALES"]*250)/Math.PI))})
        arrayToAdd[2].push(
            {genre: data2[i]["GENRE"],
             digitalAS: +data2[i]["DIGITAL ALBUM SALES"],
                radius: (Math.sqrt((+data2[i]["DIGITAL ALBUM SALES"]*250)/Math.PI))})
        arrayToAdd[3].push(
            {genre: data2[i]["GENRE"],
             digitalSongSales: +data2[i]["DIGITAL SONG SALES"],
                radius: (Math.sqrt((+data2[i]["DIGITAL SONG SALES"]*250)/Math.PI))})
        arrayToAdd[4].push(
            {genre: data2[i]["GENRE"],
             totalODStreams: +data2[i]["TOTAL ON-DEMAND STREAMS"],
                radius: (Math.sqrt((+data2[i]["TOTAL ON-DEMAND STREAMS"]*250)/Math.PI))})
        arrayToAdd[5].push(
            {genre: data2[i]["GENRE"],
                ODAudioStreams: +data2[i]["ON-DEMAND AUDIO STREAMS"],
                radius: (Math.sqrt((+data2[i]["ON-DEMAND AUDIO STREAMS"]*250)/Math.PI))})
        arrayToAdd[6].push(
            {genre: data2[i]["GENRE"],
             ODVideoStreams: +data2[i]["ON-DEMAND VIDEO STREAMS"],
                radius: (Math.sqrt((+data2[i]["ON-DEMAND VIDEO STREAMS"]*250)/Math.PI))})
    }
    function makeForces (dataset, group, color, offset) {
        d3.forceSimulation(dataset)
            .force("charge", d3.forceManyBody(dataset).strength(8))
            .force("center", d3.forceCenter().x(offset).y(120-(group.attr("height")/2)))
            .force('collision', d3.forceCollide().radius(function (d) {
                return d.radius
            }))
            .on('tick', function (){
                let allNodes = group
                    .selectAll('circle')
                    .data(dataset)

                allNodes.enter()
                    .append('circle')
                    .attr("fill",color)
                    .attr("stroke", "white")
                    .attr('r', function(d) {
                        return d.radius
                    })
                    .merge(allNodes)
                    .attr('cx', function(d) {
                        return d.x
                    })
                    .attr('cy', function(d) {
                        return d.y
                    })

                allNodes.exit().remove()})
    }
    makeForces(volumeObjects2020[0], bubbleGroup, "#0059de", 360)
    makeForces(volumeObjects2019[0], bubbleGroup2, "#ff5e00",120)
})


d3.select("body")
    .append("div")
    .attr("class", "bannerSections")
    .text("Impact of Social Movements & Events")

let bubbleObjects = []
let streamCounts = []
let bubbles = []
let songTitles = []
let images = []
let circleXPos = []
let clicked = false

let bubbleDiv = d3.select("body")
    .append("div")
    .style("width", "80vw")
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-items", "center")
    .style("margin", "3vw auto 3vw auto")
    .style("border", "1vw white double")
    .style("background-color", "#0e1261")
    .style("flex-wrap", "wrap")
    .style("overflow", "auto")

bubbleDiv.append("div")
    .attr("id", "songBubbles")
    .style("width", "75vw")
    .style("display", "block")
    .style("margin", "auto")

let bubbleSvg = d3.select("#songBubbles")
    .append("svg")
    // .attr("width", 1100)
    // .attr("height", 350)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0,0,1100,350")
    .style("display", "block")
    .style("margin", "42px auto 0px auto")

let defs = bubbleSvg.append("defs")

// Button reference to call this function from here:
// https://www.d3-graph-gallery.com/graph/interactivity_button.html
function animateBubbles(){
    for(let i = 0; i < 5; i++) {
        images[i].transition()
            .duration(7000)
            // .attr("height", bubbleObjects[i].second/2500)
            // .attr("width", bubbleObjects[i].second/2500)
            .attr("height", Math.sqrt(bubbleObjects[i].second / Math.PI)/2.5)
            .attr("width", Math.sqrt(bubbleObjects[i].second / Math.PI)/2.5)

        console.log(Math.sqrt(bubbleObjects[i].second / Math.PI)/5)

        bubbles[i].transition()
            .duration(7000)
            // .attr("r", bubbleObjects[i].second / 5000)
            .attr("r", Math.sqrt(bubbleObjects[i].second / Math.PI)/5)

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
            // .attr("y", 175-(bubbleObjects[i].second/5000)-18)
            .attr("y", 175-(Math.sqrt(bubbleObjects[i].second / Math.PI)/5)-18)
            .duration(6350)

        songTitles[i].transition()
            .duration(7100)
            // .attr("y", 175+(bubbleObjects[i].second/5000)+35)
            .attr("y", 175+(Math.sqrt(bubbleObjects[i].second / Math.PI)/5)+35)
    }
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
        .attr("height", Math.sqrt(obj[index].first / Math.PI)/2.5)
        .attr("width", Math.sqrt(obj[index].first / Math.PI)/2.5)
        .attr("x", 0)
        .attr("y", 0)
    images.push(image)

    let songBubble = bubble.append("circle")
        .style("stroke", "white")
        .attr("fill", "url(#songName"+index+")")
        .attr("cy", 175)
        .attr("cx", xPos)
        // .attr("r", obj[index].first/5000)
        .attr("r", Math.sqrt(obj[index].first / Math.PI)/5)

    bubbles.push(songBubble)
    console.log(bubbleSvg.attr("height"))

    let format = d3.format(",")
    let streamCount = bubble.append("text")
        .style("font-size", "1.8vw")
        .attr("x", xPos)
        // .attr("y", 175-(obj[index].first/5000)-18)
        .attr("y", 175-(Math.sqrt(obj[index].first / Math.PI)/5)-18)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text(format(obj[index].first))
    streamCounts.push(streamCount)


    let bubbleTitle = bubble.append("text")
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("x", xPos)
        // .attr("y", 175+(obj[index].first/5000)+35)
        .attr("y", 175+(Math.sqrt(obj[index].first / Math.PI)/5)+35)
        .style("font-size", "1.3vw")
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
            circleXPos.push(((+data[i]["second week"])/5000)+12)
        }
        else if (i===1){
            circleXPos.push(
                (circleXPos[i-1]/2)+((+data[i]["second week"])/5000)+80)
        }
        else{
            circleXPos.push(
                (circleXPos[i-1]/2)+((+data[i]["second week"])/5000)+10)
        }
    }
    for(let i = 1; i < 5; i++){
        circleXPos[i] += circleXPos[i-1]
    }
    for(let i = 0; i < 5; i++){
        drawBubbles(bubbleObjects, i, circleXPos[i])
    }


    let aniButton = d3.select("#songBubbles")
        .append("button")
        .text("Click to Run Growth Animation")
        .style("font-size", "1vw")
        .style("width", "20vw")
        .style("height", "3.5vw")
        .style("display", "block")
        .style("margin", "1.5vw auto 2vw auto")
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
