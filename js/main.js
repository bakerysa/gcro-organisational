var baseNodes = [{
    id: "organisational",
    group: 0,
    label: "GCRO Organisational",
    level: 1
  },
  {
    id: "thematic1",
    group: 1,
    label: "Rationalities of Government and Governance",
    level: 2
  },
  {
    id: "thematic2",
    group: 2,
    label: "Landscapes in Transition",
    level: 2
  },
  {
    id: "thematic3",
    group: 3,
    label: "Sustainability Transitions",
    level: 2
  },
  {
    id: "thematic4",
    group: 4,
    label: "Changing Social Fabric",
    level: 2
  },
  {
    id: "thematic5",
    group: 5,
    label: "New Regional Economies",
    level: 2
  },
  {
    id: "thematic6",
    group: 6,
    label: "Histories and Futures of the GCR in Comparative Perpective",
    level: 2
  },
  {
    id: "thematic7",
    group: 7,
    label: "Analytics, Cartographies, Visualisations",
    level: 2
  },
  {
    id: "project1",
    group: 1,
    label: "Conceiving, producing and managing a neighbourhood",
    level: 3
  },
  {
    id: "project2",
    group: 1,
    label: "What is the GCR? (Seoul Biennale)",
    level: 3
  },
  {
    id: "project3",
    group: 1,
    label: "Taking streets seriously",
    level: 3
  },
  {
    id: "project4",
    group: 1,
    label: "Scale, belonging and exclusion in Gauteng",
    level: 3
  },
  {
    id: "project5",
    group: 1,
    label: "Mothers in the City",
    level: 3
  },
  {
    id: "project6",
    group: 1,
    label: "Quality of Life Survey",
    level: 3
  },
  {
    id: "project7",
    group: 1,
    label: "Social Cohesion Champions",
    level: 3
  },
  {
    id: "project8",
    group: 1,
    label: "CoJ Social Cohesion",
    level: 3
  },
  {
    id: "project9",
    group: 1,
    label: "Post-apartheid social mixing",
    level: 3
  },
  {
    id: "project10",
    group: 1,
    label: "Untangling Transport",
    level: 3
  },
  {
    id: "project11",
    group: 1,
    label: "Green Assets and Infastructure",
    level: 3
  },
  {
    id: "project12",
    group: 1,
    label: "Just urban sustainability transitions",
    level: 3
  },
  {
    id: "project13",
    group: 1,
    label: "Political Economy of Corridors of Freedom",
    level: 3
  },
  {
    id: "project14",
    group: 1,
    label: "Governing Pollution",
    level: 3
  },
  {
    id: "project15",
    group: 1,
    label: "Poverty and inequality",
    level: 3
  },
  {
    id: "project16",
    group: 1,
    label: "State function in infastructure planning",
    level: 3
  },
  {
    id: "project17",
    group: 1,
    label: "Ethnographies of the state",
    level: 3
  },
  {
    id: "project18",
    group: 1,
    label: "Water security",
    level: 3
  },
  {
    id: "project19",
    group: 1,
    label: "Governance Provocations",
    level: 3
  },
  {
    id: "project20",
    group: 1,
    label: "Urban space economy",
    level: 3
  },
  {
    id: "project21",
    group: 1,
    label: "Firm level survey (with RM)",
    level: 3
  },
  {
    id: "project22",
    group: 1,
    label: "Firm level survey (with RM)",
    level: 3
  },
  {
    id: "project23",
    group: 1,
    label: "Futures of the GCR",
    level: 3
  },
  {
    id: "project24",
    group: 1,
    label: "Metabolic flows and infstructure transitions",
    level: 3
  },
  {
    id: "project25",
    group: 1,
    label: "Green economy",
    level: 3
  },
  {
    id: "project26",
    group: 1,
    label: "City GCR seminar / GCR Citylab",
    level: 3
  },
  {
    id: "project27",
    group: 1,
    label: "Gauteng Transport Centre for Excellence",
    level: 3
  },
  {
    id: "project28",
    group: 1,
    label: "Tech in Governance Learning Network",
    level: 3
  },
  {
    id: "project29",
    group: 1,
    label: "Economic geography of the GCR",
    level: 3
  },
  {
    id: "project30",
    group: 1,
    label: "Determinants of real estate demand",
    level: 3
  },
  {
    id: "project31",
    group: 1,
    label: "Methods for regional economic analysis",
    level: 3
  },
  {
    id: "project32",
    group: 1,
    label: "Qol spatial statistical modelling",
    level: 3
  },
  {
    id: "project33",
    group: 1,
    label: "Modernisation and formalisation of township economies",
    level: 3
  },
  {
    id: "project34",
    group: 1,
    label: "Street vendors in policy processes",
    level: 3
  },
  {
    id: "project35",
    group: 1,
    label: "Geovisual analytics",
    level: 3
  },
  {
    id: "project36",
    group: 1,
    label: "Peripheries and rural / urban transitions",
    level: 3
  },
  {
    id: "project37",
    group: 1,
    label: "Zones of displaced urbanisation",
    level: 3
  },
  {
    id: "project38",
    group: 1,
    label: "Spatial Imaginaries",
    level: 3
  },
  {
    id: "project39",
    group: 1,
    label: "Building Gauteng",
    level: 3
  },
  {
    id: "project40",
    group: 1,
    label: "Knowledge partnerships for urban futures",
    level: 3
  },
  {
    id: "project41",
    group: 1,
    label: "Governance of Pollution in the GCR Occassional paper",
    level: 3
  },
  {
    id: "project42",
    group: 1,
    label: "Ward profile viewer",
    level: 3
  },
  {
    id: "project43",
    group: 1,
    label: "Data smart GCR",
    level: 3
  },
  {
    id: "project44",
    group: 1,
    label: "Qol Viewer",
    level: 3
  },
  {
    id: "project46",
    group: 1,
    label: "Caring Cities Barometer",
    level: 3
  },
  {
    id: "project47",
    group: 1,
    label: "Metro form of government",
    level: 3
  },
  {
    id: "project48",
    group: 1,
    label: "Firm level survey (with GG)",
    level: 3
  },
  {
    id: "staff1",
    label: "Aidan Mosselson",
    level: 4
  },
  {
    id: "staff2",
    label: "Alexandra Parker",
    level: 4
  },
  {
    id: "staff3",
    label: "Christian Hamann",
    level: 4
  },
  {
    id: "staff4",
    label: "Christina Culwick",
    level: 4
  },
  {
    id: "staff5",
    label: "Darlington Mushongera",
    level: 4
  },
  {
    id: "staff6",
    label: "Gillian Maree",
    level: 4
  },
  {
    id: "staff7",
    label: "Graeme Gotz",
    level: 3
  },
  {
    id: "staff8",
    label: "Jesse Harber",
    level: 4
  },
  {
    id: "staff9",
    label: "Kate Joseph",
    level: 4
  },
  {
    id: "staff10",
    label: "Koech Cheruiyot",
    level: 4
  },
  {
    id: "staff11",
    label: "Mamokete Matjomane",
    level: 3
  },
  {
    id: "staff12",
    label: "Mncedisi Siteleki",
    level: 4
  },
  {
    id: "staff13",
    label: "Ngaka Mosiane",
    level: 4
  },
  {
    id: "staff14",
    label: "Richard Ballard",
    level: 4
  },
  {
    id: "staff15",
    label: "Rob Moore",
    level: 4
  },
  {
    id: "staff16",
    label: "Samkelisiwe Khanyile",
    level: 4
  },
  {
    id: "staff17",
    label: "Samy Katumba",
    level: 4
  },
  {
    id: "staff18",
    label: "Thembani Mkhize",
    level: 4
  },
]

var baseLinks = [{
    target: "organisational",
    source: "thematic1",
    strength: 0.1
  },
  {
    target: "organisational",
    source: "thematic2",
    strength: 0.1
  },
  {
    target: "organisational",
    source: "thematic3",
    strength: 0.1
  },
  {
    target: "organisational",
    source: "thematic4",
    strength: 0.1
  },
  {
    target: "organisational",
    source: "thematic5",
    strength: 0.1
  },
  {
    target: "organisational",
    source: "thematic6",
    strength: 0.1
  },
  {
    target: "organisational",
    source: "thematic7",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project1",
    strength: 0.1
  },
  {
    target: "thematic6",
    source: "project2",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project3",
    strength: 0.1
  },
  {
    target: "thematic4",
    source: "project4",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project5",
    strength: 0.1
  },
  {
    target: "thematic7",
    source: "project6",
    strength: 0.1
  },
  {
    target: "thematic4",
    source: "project7",
    strength: 0.1
  },
  {
    target: "thematic4",
    source: "project8",
    strength: 0.1
  },
  {
    target: "thematic4",
    source: "project9",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project10",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project11",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project12",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project13",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project14",
    strength: 0.1
  },
  {
    target: "thematic4",
    source: "project15",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project16",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project17",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project18",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project19",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project20",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project21",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project22",
    strength: 0.1
  },
  {
    target: "thematic6",
    source: "project23",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project24",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project25",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project26",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project27",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project28",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project29",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project30",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project31",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project32",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project33",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project34",
    strength: 0.1
  },
  {
    target: "thematic7",
    source: "project35",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project36",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project37",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project38",
    strength: 0.1
  },
  {
    target: "thematic2",
    source: "project39",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project40",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project41",
    strength: 0.1
  },
  {
    target: "thematic3",
    source: "project42",
    strength: 0.1
  },
  {
    target: "thematic7",
    source: "project43",
    strength: 0.1
  },
  {
    target: "thematic7",
    source: "project44",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project46",
    strength: 0.1
  },
  {
    target: "thematic1",
    source: "project47",
    strength: 0.1
  },
  {
    target: "thematic5",
    source: "project48",
    strength: 0.1
  },
  {
    target: "project1",
    source: "staff1",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff2",
    strength: 0.1
  },
  {
    target: "project3",
    source: "staff2",
    strength: 0.1
  },
  {
    target: "project4",
    source: "staff2",
    strength: 0.1
  },
  {
    target: "project5",
    source: "staff2",
    strength: 0.1
  },
  {
    target: "project6",
    source: "staff2",
    strength: 0.1
  },
  {
    target: "project7",
    source: "staff3",
    strength: 0.1
  },
  {
    target: "project8",
    source: "staff3",
    strength: 0.1
  },
  {
    target: "project9",
    source: "staff3",
    strength: 0.1
  },
  {
    target: "project6",
    source: "staff3",
    strength: 0.1
  },
  {
    target: "project4",
    source: "staff3",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff3",
    strength: 0.1
  },
  {
    target: "project10",
    source: "staff4",
    strength: 0.1
  },
  {
    target: "project11",
    source: "staff4",
    strength: 0.1
  },
  {
    target: "project12",
    source: "staff4",
    strength: 0.1
  },
  {
    target: "project6",
    source: "staff4",
    strength: 0.1
  },
  {
    target: "project13",
    source: "staff4",
    strength: 0.1
  },
  {
    target: "project14",
    source: "staff4",
    strength: 0.1
  },
  {
    target: "project15",
    source: "staff5",
    strength: 0.1
  },
  {
    target: "project16",
    source: "staff5",
    strength: 0.1
  },
  {
    target: "project17",
    source: "staff5",
    strength: 0.1
  },
  {
    target: "project46",
    source: "staff5",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff6",
    strength: 0.1
  },
  {
    target: "project18",
    source: "staff6",
    strength: 0.1
  },
  {
    target: "project11",
    source: "staff6",
    strength: 0.1
  },
  {
    target: "project19",
    source: "staff6",
    strength: 0.1
  },
  {
    target: "project3",
    source: "staff6",
    strength: 0.1
  },
  {
    target: "project14",
    source: "staff6",
    strength: 0.1
  },
  {
    target: "project20",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project21",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project23",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project47",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project24",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project25",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project26",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project6",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project13",
    source: "staff7",
    strength: 0.1
  },
  {
    target: "project19",
    source: "staff8",
    strength: 0.1
  },
  {
    target: "project3",
    source: "staff8",
    strength: 0.1
  },
  {
    target: "project13",
    source: "staff8",
    strength: 0.1
  },
  {
    target: "project27",
    source: "staff8",
    strength: 0.1
  },
  {
    target: "project28",
    source: "staff8",
    strength: 0.1
  },
  {
    target: "project19",
    source: "staff9",
    strength: 0.1
  },
  {
    target: "project3",
    source: "staff9",
    strength: 0.1
  },
  {
    target: "project4",
    source: "staff9",
    strength: 0.1
  },
  {
    target: "project7",
    source: "staff9",
    strength: 0.1
  },
  {
    target: "project8",
    source: "staff9",
    strength: 0.1
  },
  {
    target: "project29",
    source: "staff10",
    strength: 0.1
  },
  {
    target: "project30",
    source: "staff10",
    strength: 0.1
  },
  {
    target: "project31",
    source: "staff10",
    strength: 0.1
  },
  {
    target: "project32",
    source: "staff10",
    strength: 0.1
  },
  {
    target: "project33",
    source: "staff11",
    strength: 0.1
  },
  {
    target: "project3",
    source: "staff11",
    strength: 0.1
  },
  {
    target: "project34",
    source: "staff11",
    strength: 0.1
  },
  {
    target: "project1",
    source: "staff11",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff12",
    strength: 0.1
  },
  {
    target: "project35",
    source: "staff12",
    strength: 0.1
  },
  {
    target: "project32",
    source: "staff12",
    strength: 0.1
  },
  {
    target: "project36",
    source: "staff13",
    strength: 0.1
  },
  {
    target: "project37",
    source: "staff13",
    strength: 0.1
  },
  {
    target: "project19",
    source: "staff13",
    strength: 0.1
  },
  {
    target: "project4",
    source: "staff13",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff13",
    strength: 0.1
  },
  {
    target: "project38",
    source: "staff14",
    strength: 0.1
  },
  {
    target: "project9",
    source: "staff14",
    strength: 0.1
  },
  {
    target: "project39",
    source: "staff14",
    strength: 0.1
  },
  {
    target: "project4",
    source: "staff14",
    strength: 0.1
  },
  {
    target: "project7",
    source: "staff14",
    strength: 0.1
  },
  {
    target: "project8",
    source: "staff14",
    strength: 0.1
  },
  {
    target: "project40",
    source: "staff15",
    strength: 0.1
  },
  {
    target: "project48",
    source: "staff15",
    strength: 0.1
  },
  {
    target: "project11",
    source: "staff16",
    strength: 0.1
  },
  {
    target: "project35",
    source: "staff16",
    strength: 0.1
  },
  {
    target: "project41",
    source: "staff16",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff16",
    strength: 0.1
  },
  {
    target: "project6",
    source: "staff16",
    strength: 0.1
  },
  {
    target: "project14",
    source: "staff16",
    strength: 0.1
  },
  {
    target: "project42",
    source: "staff17",
    strength: 0.1
  },
  {
    target: "project43",
    source: "staff17",
    strength: 0.1
  },
  {
    target: "project35",
    source: "staff17",
    strength: 0.1
  },
  {
    target: "project44",
    source: "staff17",
    strength: 0.1
  },
  {
    target: "project32",
    source: "staff17",
    strength: 0.1
  },
  {
    target: "project2",
    source: "staff17",
    strength: 0.1
  },
  {
    target: "project1",
    source: "staff18",
    strength: 0.1
  },
  {
    target: "project19",
    source: "staff18",
    strength: 0.1
  },
  {
    target: "project8",
    source: "staff18",
    strength: 0.1
  },
]

var nodes = [...baseNodes]
var links = [...baseLinks]

function getNeighbors(node) {
  return baseLinks.reduce(function(neighbors, link) {
    if (link.target.id === node.id) {
      neighbors.push(link.source.id)
    } else if (link.source.id === node.id) {
      neighbors.push(link.target.id)
    }
    return neighbors
  }, [node.id])
}

function isNeighborLink(node, link) {
  return link.target.id === node.id || link.source.id === node.id
}


function getNodeColor(node, neighbors) {
  if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
    return node.level === 1 ? 'white' : 'red'
  }

  return node.level === 1 ? 'blue' : 'pink'

}


function getLinkColor(node, link) {
  return isNeighborLink(node, link) ? 'red' : '#E5E5E5'
}

function getTextColor(node, neighbors) {
  return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'black' : 'black'
}

var width = window.innerWidth
var height = window.innerHeight

var svg = d3.select('svg')
svg.attr('width', width).attr('height', height)

var linkElements,
  nodeElements,
  textElements

// we use svg groups to logically group the elements together
var linkGroup = svg.append('g').attr('class', 'links')
var nodeGroup = svg.append('g').attr('class', 'nodes')
var textGroup = svg.append('g').attr('class', 'texts')

// we use this reference to select/deselect
// after clicking the same element twice
var selectedId

// simulation setup with all forces
var linkForce = d3
  .forceLink()
  .id(function(link) {
    return link.id 
  })
  .strength(function(link) {
    return link.strength 
  })

var simulation = d3
  .forceSimulation()
  .force('link', linkForce)
  .force('charge', d3.forceManyBody().strength(-120))
  .force('center', d3.forceCenter(width / 2, height / 2))

var dragDrop = d3.drag().on('start', function(node) {
  node.fx = node.x
  node.fy = node.y
}).on('drag', function(node) {
  simulation.alphaTarget(0.7).restart()
  node.fx = d3.event.x
  node.fy = d3.event.y
}).on('end', function(node) {
  if (!d3.event.active) {
    simulation.alphaTarget(0)
  }
  node.fx = null
  node.fy = null
})

// select node is called on every click
// we either update the data according to the selection
// or reset the data if the same node is clicked twice
function selectNode(selectedNode) {

  console.log(selectedNode);
  if (selectedId === selectedNode.id) {
    selectedId = undefined
    resetData()
    updateSimulation()
  } else {
    selectedId = selectedNode.id
    updateData(selectedNode)
    updateSimulation()
  }

  var neighbors = getNeighbors(selectedNode)

  // we modify the styles to highlight selected nodes
  nodeElements.attr('fill', function(node) {
    return getNodeColor(node, neighbors) 
  })
  textElements.attr('fill', function(node) {
    return getTextColor(node, neighbors)
  })
  linkElements.attr('stroke', function(link) {
    return getLinkColor(selectedNode, link)
  })
}

// this helper simple adds all nodes and links
// that are missing, to recreate the initial state
function resetData() {
  var nodeIds = nodes.map(function(node) {
    return node.id
  })

  baseNodes.forEach(function(node) {
    if (nodeIds.indexOf(node.id) === -1) {
      nodes.push(node)
    }
  })

  links = baseLinks
}

// diffing and mutating the data
function updateData(selectedNode) {
  var neighbors = getNeighbors(selectedNode)
  var newNodes = baseNodes.filter(function(node) {
    return neighbors.indexOf(node.id) > -1 || node.level === 1
  })

  var diff = {
    removed: nodes.filter(function(node) {
      return newNodes.indexOf(node) === -1
    }),
    added: newNodes.filter(function(node) {
      return nodes.indexOf(node) === -1
    })
  }

  diff.removed.forEach(function(node) {
    nodes.splice(nodes.indexOf(node), 1)
  })
  diff.added.forEach(function(node) {
    nodes.push(node)
  })

  links = baseLinks.filter(function(link) {
    return link.target.id === selectedNode.id || link.source.id === selectedNode.id
  })
}

function updateGraph() {
  // links
  linkElements = linkGroup.selectAll('line')
    .data(links, function(link) {
      return link.target.id + link.source.id
    })

  linkElements.exit().remove()

  var linkEnter = linkElements
    .enter().append('line')
    .attr('stroke-width', 1)
    .attr('stroke', 'rgba(50, 50, 50, 0.2)')

  linkElements = linkEnter.merge(linkElements)

  // nodes
  nodeElements = nodeGroup.selectAll('circle')
    .data(nodes, function(node) {
      return node.id
    })

  nodeElements.exit().remove()

  var nodeEnter = nodeElements
    .enter()
    .append('circle')
    .attr('r', 20)
    .attr('fill', function(node) {
      return node.level === 1 ? 'red' : 'white'
    })
    .call(dragDrop)
    // we link the selectNode method here
    // to update the graph on every click
    .on('click', selectNode)

  nodeElements = nodeEnter.merge(nodeElements)

  // texts
  textElements = textGroup.selectAll('text')
    .data(nodes, function(node) {
      return node.id
    })

  textElements.exit().remove()

  var textEnter = textElements
    .enter()
    .append('text')
    .text(function(node) {
      return node.label
    })
    .attr('font-size', 15)
    .attr('dx', 15)
    .attr('dy', 4)

  textElements = textEnter.merge(textElements)
}

function updateSimulation() {
  updateGraph()

  simulation.nodes(nodes).on('tick', () => {
    nodeElements
      .attr('cx', function(node) {
        return node.x
      })
      .attr('cy', function(node) {
        return node.y
      })
    textElements
      .attr('x', function(node) {
        return node.x
      })
      .attr('y', function(node) {
        return node.y
      })
    linkElements
      .attr('x1', function(link) {
        return link.source.x
      })
      .attr('y1', function(link) {
        return link.source.y
      })
      .attr('x2', function(link) {
        return link.target.x
      })
      .attr('y2', function(link) {
        return link.target.y
      })
  })

  simulation.force('link').links(links)
  simulation.alphaTarget(0.7).restart()
}

// last but not least, we call updateSimulation
// to trigger the initial render
updateSimulation()
