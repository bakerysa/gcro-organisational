$( document ).ready(function() {

var nodes = [{
    id: "organisational",
    group: 0,
    label: "",
    level: 1,
    color: "primary0",
  },
  {
    id: "thematic1",
    group: 1,
    label: "Rationalities of government & governance",
    level: 2,
    color: "primary1",
  },
  {
    id: "thematic2",
    group: 2,
    label: "Landscapes in transition",
    level: 2,
    color: "primary2",
  },
  {
    id: "thematic3",
    group: 3,
    label: "Sustainability transitions",
    level: 2,
    color: "primary3",
  },
  {
    id: "thematic4",
    group: 4,
    label: "Changing social fabric",
    level: 2,
    color: "primary4",
  },
  {
    id: "thematic5",
    group: 5,
    label: "New regional economies",
    level: 2,
    color: "primary5",
  },
  {
    id: "thematic6",
    group: 6,
    label: "Histories & futures",
    level: 2,
    color: "primary6",
  },
  {
    id: "thematic7",
    group: 7,
    label: "Analytics, cartographies, visualisations",
    level: 2,
    color: "primary7",
  },
  {
    id: "project1",
    group: 2,
    label: "Conceiving, producing & managing a neighbourhood",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project2",
    group: 6,
    label: "What is the GCR?",
    level: 3,
    color: "secondary6",
  },
  {
    id: "project3",
    group: 2,
    label: "Taking streets seriously",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project4",
    group: 4,
    label: "Scale, belonging & exclusion",
    level: 3,
    color: "secondary4",
  },
  {
    id: "project5",
    group: 2,
    label: "Mothers in the city",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project6",
    group: 7,
    label: "Quality of life survey",
    level: 3,
    color: "secondary7",
  },
  {
    id: "project7",
    group: 4,
    label: "Social cohesion champions",
    level: 3,
    color: "secondary4",
  },
  {
    id: "project8",
    group: 4,
    label: "CoJ social cohesion",
    level: 3,
    color: "secondary4",
  },
  {
    id: "project9",
    group: 4,
    label: "Post-apartheid social mixing",
    level: 3,
    color: "secondary4",
  },
  {
    id: "project10",
    group: 2,
    label: "Untangling transport",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project11",
    group: 3,
    label: "Green assets & infrastructure",
    level: 3,
    color: "secondary3",
  },
  {
    id: "project12",
    group: 3,
    label: "Just urban sustainability transitions",
    level: 3,
    color: "secondary3",
  },
  {
    id: "project13",
    group: 2,
    label: "Political economy of corridors of freedom",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project14",
    group: 3,
    label: "Governing pollution",
    level: 3,
    color: "secondary3",
  },
  {
    id: "project15",
    group: 4,
    label: "Poverty & inequality",
    level: 3,
    color: "secondary4",
  },
  {
    id: "project16",
    group: 1,
    label: "State function in infrastructure planning",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project17",
    group: 1,
    label: "Ethnographies of the state",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project18",
    group: 3,
    label: "Water security",
    level: 3,
    color: "secondary3",
  },
  {
    id: "project19",
    group: 1,
    label: "Governance provocations",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project20",
    group: 5,
    label: "Urban space economy",
    level: 3,
    color: "secondary5",
  },
  {
    id: "project21",
    group: 5,
    label: "Firm level survey",
    level: 3,
    color: "secondary5",
  },
  {
    id: "project23",
    group: 6,
    label: "Futures of the GCR",
    level: 3,
    color: "secondary6",
  },
  {
    id: "project24",
    group: 3,
    label: "Metabolic flows & infrastructure transitions",
    level: 3,
    color: "secondary3",
  },
  {
    id: "project25",
    group: 3,
    label: "Green economy",
    level: 3,
    color: "secondary3",
  },
  {
    id: "project26",
    group: 1,
    label: "GCR city seminar",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project27",
    group: 2,
    label: "Gauteng transport centre for excellence",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project28",
    group: 1,
    label: "Tech in governance learning network",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project29",
    group: 5,
    label: "Economic geography",
    level: 3,
    color: "secondary5",
  },
  {
    id: "project30",
    group: 5,
    label: "Determinants of real estate demand",
    level: 3,
    color: "secondary5",
  },
  {
    id: "project31",
    group: 5,
    label: "Methods for regional economic analysis",
    level: 3,
    color: "secondary5",
  },
  {
    id: "project32",
    group: 2,
    label: "QoL spatial statistical modelling",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project33",
    group: 5,
    label: "Modernisation & formalisation of township economies",
    level: 3,
    color: "secondary5",
  },
  {
    id: "project34",
    group: 1,
    label: "Street vendors in policy processes",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project35",
    group: 7,
    label: "Geovisual analytics",
    level: 3,
    color: "secondary7",
  },
  {
    id: "project36",
    group: 2,
    label: "Peripheries & rural / urban transitions",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project37",
    group: 2,
    label: "Zones of displaced urbanisation",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project38",
    group: 2,
    label: "Spatial imaginaries",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project39",
    group: 2,
    label: "Building Gauteng",
    level: 3,
    color: "secondary2",
  },
  {
    id: "project40",
    group: 1,
    label: "Knowledge partnerships for urban futures",
    level: 3,
    color: "secondary1",
  },
  {
    id: "project42",
    group: 7,
    label: "Ward profile viewer",
    level: 3,
    color: "secondary7",
  },
  {
    id: "project43",
    group: 7,
    label: "Data smart GCR",
    level: 3,
    color: "secondary7",
  },
  {
    id: "project44",
    group: 7,
    label: "QoL Viewer",
    level: 3,
    color: "secondary7",
  },
  {
    id: "project46",
    group: 7,
    label: "Caring cities barometer",
    level: 3,
    color: "secondary7",
  },
  {
    id: "project47",
    group: 1,
    label: "Metro form of government",
    level: 3,
    color: "secondary1",
  },
  {
    id: "staff1",
    label: "Aidan Mosselson",
    level: 4,
    color: "staff",
  },
  {
    id: "staff2",
    label: "Alexandra Parker",
    level: 4,
    color: "staff",
  },
  {
    id: "staff3",
    label: "Christian Hamann",
    level: 4,
    color: "staff",
  },
  {
    id: "staff4",
    label: "Christina Culwick",
    level: 4,
    color: "staff",
  },
  {
    id: "staff5",
    label: "Darlington Mushongera",
    level: 4,
    color: "staff",
  },
  {
    id: "staff6",
    label: "Gillian Maree",
    level: 4,
    color: "staff",
  },
  {
    id: "staff7",
    label: "Graeme Götz",
    level: 4,
    color: "staff",
  },
  {
    id: "staff8",
    label: "Jesse Harber",
    level: 4,
    color: "staff",
  },
  {
    id: "staff9",
    label: "Kate Joseph",
    level: 4,
    color: "staff",
  },
  {
    id: "staff10",
    label: "Koech Cheruiyot",
    level: 4,
    color: "staff",
  },
  {
    id: "staff11",
    label: "Mamokete Matjomane",
    level: 4,
    color: "staff",
  },
  {
    id: "staff12",
    label: "Mncedisi Siteleki",
    level: 4,
    color: "staff",
  },
  {
    id: "staff13",
    label: "Ngaka Mosiane",
    level: 4,
    color: "staff",
  },
  {
    id: "staff14",
    label: "Richard Ballard",
    level: 4,
    color: "staff",
  },
  {
    id: "staff15",
    label: "Rob Moore",
    level: 4,
    color: "staff",
  },
  {
    id: "staff16",
    label: "Samkelisiwe Khanyile",
    level: 4,
    color: "staff",
  },
  {
    id: "staff17",
    label: "Samy Katumba",
    level: 4,
    color: "staff",
  },
  {
    id: "staff18",
    label: "Thembani Mkhize",
    level: 4,
    color: "staff",
  }
]

var links = [{
    target: "organisational",
    source: "thematic1",
    strength: 1
  },
  {
    target: "organisational",
    source: "thematic2",
    strength: 1
  },
  {
    target: "organisational",
    source: "thematic3",
    strength: 1
  },
  {
    target: "organisational",
    source: "thematic4",
    strength: 1
  },
  {
    target: "organisational",
    source: "thematic5",
    strength: 1
  },
  {
    target: "organisational",
    source: "thematic6",
    strength: 0.01
  },
  {
    target: "organisational",
    source: "thematic7",
    strength: 1
  },
  {
    target: "thematic2",
    source: "project1",
    strength: 0.3
  },
  {
    target: "thematic6",
    source: "project2",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project3",
    strength: 0.3
  },
  {
    target: "thematic4",
    source: "project4",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project5",
    strength: 0.3
  },
  {
    target: "thematic4",
    source: "project6",
    strength: 0.3,
    stroke: "jotted"
  },
  {
    target: "thematic7",
    source: "project6",
    strength: 0.3
  },
  {
    target: "thematic4",
    source: "project7",
    strength: 0.3
  },
  {
    target: "thematic4",
    source: "project8",
    strength: 0.3
  },
  {
    target: "thematic4",
    source: "project9",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project10",
    strength: 0.3
  },
  {
    target: "thematic3",
    source: "project11",
    strength: 0.3
  },
  {
    target: "thematic3",
    source: "project12",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project13",
    strength: 0.3
  },
  {
    target: "thematic3",
    source: "project14",
    strength: 0.3
  },
  {
    target: "thematic4",
    source: "project15",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project16",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project17",
    strength: 0.3
  },
  {
    target: "thematic3",
    source: "project18",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project19",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project20",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project21",
    strength: 0.3
  },
  {
    target: "thematic6",
    source: "project23",
    strength: 0.3
  },
  {
    target: "thematic3",
    source: "project24",
    strength: 0.3
  },
  {
    target: "thematic3",
    source: "project25",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project26",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project27",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project28",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project29",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project30",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project31",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project32",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project33",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project34",
    strength: 0.3
  },
  {
    target: "thematic7",
    source: "project35",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project36",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project37",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project38",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "project39",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project40",
    strength: 0.3
  },
  // {
  //   target: "thematic5",
  //   source: "project41",
  //   strength: 0.3
  // },
  {
    target: "thematic7",
    source: "project42",
    strength: 0.3
  },
  {
    target: "thematic7",
    source: "project43",
    strength: 0.3
  },
  {
    target: "thematic7",
    source: "project44",
    strength: 0.3
  },
  {
    target: "thematic7",
    source: "project46",
    strength: 0.3
  },
  {
    target: "thematic1",
    source: "project47",
    strength: 0.3
  },
  {
    target: "thematic5",
    source: "project21",
    strength: 0.3
  },
  {
    target: "thematic2",
    source: "staff1",
    strength: 0.4,
    opacity: "yes"
  },
  {
    target: "project1",
    source: "staff1",
    strength: 0.4
  },
  {
    target: "project2",
    source: "staff2",
    strength: 0.4
  },
  {
    target: "project3",
    source: "staff2",
    strength: 0.4
  },
  {
    target: "project4",
    source: "staff2",
    strength: 0.4
  },
  {
    target: "project5",
    source: "staff2",
    strength: 0.4
  },
  {
    target: "project6",
    source: "staff2",
    strength: 0.4
  },
  {
    target: "project7",
    source: "staff3",
    strength: 0.4
  },
  {
    target: "project8",
    source: "staff3",
    strength: 0.4
  },
  {
    target: "project9",
    source: "staff3",
    strength: 0.4
  },
  {
    target: "project6",
    source: "staff3",
    strength: 0.4
  },
  {
    target: "project4",
    source: "staff3",
    strength: 0.4
  },
  {
    target: "project2",
    source: "staff3",
    strength: 0.4
  },
  {
    target: "project10",
    source: "staff4",
    strength: 0.4
  },
  {
    target: "project11",
    source: "staff4",
    strength: 0.4
  },
  {
    target: "project12",
    source: "staff4",
    strength: 0.4
  },
  {
    target: "project6",
    source: "staff4",
    strength: 0.4
  },
  {
    target: "project13",
    source: "staff4",
    strength: 0.4
  },
  {
    target: "project14",
    source: "staff4",
    strength: 0.4
  },
  {
    target: "project15",
    source: "staff5",
    strength: 0.4
  },
  {
    target: "project16",
    source: "staff5",
    strength: 0.4
  },
  {
    target: "project17",
    source: "staff5",
    strength: 0.4
  },
  {
    target: "project46",
    source: "staff5",
    strength: 0.4
  },
  {
    target: "project2",
    source: "staff6",
    strength: 0.4
  },
  {
    target: "project18",
    source: "staff6",
    strength: 0.4
  },
  {
    target: "project11",
    source: "staff6",
    strength: 0.4
  },
  {
    target: "project19",
    source: "staff6",
    strength: 0.4
  },
  {
    target: "project3",
    source: "staff6",
    strength: 0.4
  },
  {
    target: "project14",
    source: "staff6",
    strength: 0.4
  },
  {
    target: "project20",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project21",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project23",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project47",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project24",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project25",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project26",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project6",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project13",
    source: "staff7",
    strength: 0.4
  },
  {
    target: "project19",
    source: "staff8",
    strength: 0.4
  },
  {
    target: "project3",
    source: "staff8",
    strength: 0.4
  },
  {
    target: "project13",
    source: "staff8",
    strength: 0.4
  },
  {
    target: "project27",
    source: "staff8",
    strength: 0.4
  },
  {
    target: "project28",
    source: "staff8",
    strength: 0.4
  },
  {
    target: "project19",
    source: "staff9",
    strength: 0.4
  },
  {
    target: "project3",
    source: "staff9",
    strength: 0.4
  },
  {
    target: "project4",
    source: "staff9",
    strength: 0.4
  },
  {
    target: "project7",
    source: "staff9",
    strength: 0.4
  },
  {
    target: "project8",
    source: "staff9",
    strength: 0.4
  },
  {
    target: "project29",
    source: "staff10",
    strength: 0.4
  },
  {
    target: "project30",
    source: "staff10",
    strength: 0.4
  },
  {
    target: "project31",
    source: "staff10",
    strength: 0.4
  },
  {
    target: "project32",
    source: "staff10",
    strength: 0.4
  },
  {
    target: "project33",
    source: "staff11",
    strength: 0.4
  },
  {
    target: "project3",
    source: "staff11",
    strength: 0.4
  },
  {
    target: "project34",
    source: "staff11",
    strength: 0.4
  },
  {
    target: "project1",
    source: "staff11",
    strength: 0.4
  },
  {
    target: "project2",
    source: "staff12",
    strength: 0.4
  },
  {
    target: "project35",
    source: "staff12",
    strength: 0.4
  },
  {
    target: "project32",
    source: "staff12",
    strength: 0.4
  },
  {
    target: "project36",
    source: "staff13",
    strength: 0.4
  },
  {
    target: "project37",
    source: "staff13",
    strength: 0.4
  },
  {
    target: "project19",
    source: "staff13",
    strength: 0.4
  },
  {
    target: "project4",
    source: "staff13",
    strength: 0.4
  },
  {
    target: "project2",
    source: "staff13",
    strength: 0.4
  },
  {
    target: "project38",
    source: "staff14",
    strength: 0.4
  },
  {
    target: "project9",
    source: "staff14",
    strength: 0.4
  },
  {
    target: "project39",
    source: "staff14",
    strength: 0.4
  },
  {
    target: "project4",
    source: "staff14",
    strength: 0.4
  },
  {
    target: "project7",
    source: "staff14",
    strength: 0.4
  },
  {
    target: "project8",
    source: "staff14",
    strength: 0.4
  },
  {
    target: "project40",
    source: "staff15",
    strength: 0.4
  },
  {
    target: "project21",
    source: "staff15",
    strength: 0.4
  },
  {
    target: "project11",
    source: "staff16",
    strength: 0.4
  },
  {
    target: "project35",
    source: "staff16",
    strength: 0.4
  },
  // {
  //   target: "project41",
  //   source: "staff16",
  //   strength: 0.4
  // },
  {
    target: "project2",
    source: "staff16",
    strength: 0.4
  },
  {
    target: "project6",
    source: "staff16",
    strength: 0.4
  },
  {
    target: "project14",
    source: "staff16",
    strength: 0.4
  },
  {
    target: "project42",
    source: "staff17",
    strength: 0.4
  },
  {
    target: "project43",
    source: "staff17",
    strength: 0.4
  },
  {
    target: "project35",
    source: "staff17",
    strength: 0.4
  },
  {
    target: "project44",
    source: "staff17",
    strength: 0.4
  },
  {
    target: "project32",
    source: "staff17",
    strength: 0.4
  },
  {
    target: "project2",
    source: "staff17",
    strength: 0.4
  },
  {
    target: "project1",
    source: "staff18",
    strength: 0.4
  },
  {
    target: "project19",
    source: "staff18",
    strength: 0.4
  },
  {
    target: "project8",
    source: "staff18",
    strength: 0.4
  },
  {
    target: "thematic1",
    source: "project1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic4",
    source: "project1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic1",
    source: "project2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic2",
    source: "project2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic3",
    source: "project2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic4",
    source: "project2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic7",
    source: "project2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "thematic3",
    source: "project3",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project4",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project4",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project5",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project6",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project6",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project6",
    source: "thematic3",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project6",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project6",
    source: "thematic5",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project6",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project7",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project8",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project8",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project8",
    source: "thematic7",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project9",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project10",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project11",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project12",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project12",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project13",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project13",
    source: "thematic3",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project14",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project14",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project14",
    source: "thematic7",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project15",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project16",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project17",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project18",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project19",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project20",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project21",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project23",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project23",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project23",
    source: "thematic3",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project23",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project23",
    source: "thematic5",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project23",
    source: "thematic7",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project24",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project25",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project25",
    source: "thematic5",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project26",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project26",
    source: "thematic3",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project26",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project26",
    source: "thematic5",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project26",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project26",
    source: "thematic7",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project29",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project30",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project31",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project32",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project33",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project34",
    source: "thematic2",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project38",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project38",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project39",
    source: "thematic1",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project39",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project40",
    source: "thematic4",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project40",
    source: "thematic5",
    strength: 0.04,
    stroke: "jotted",
  },
  {
    target: "project46",
    source: "thematic6",
    strength: 0.04,
    stroke: "jotted",
  },
  // START: disciplines below
  // {
  //   target: "project1",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline7",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline27",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline28",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline30",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline51",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline52",
  //   strength: 0.3
  // },
  // {
  //   target: "project1",
  //   source: "discipline54",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline5",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline6",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline8",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline9",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline23",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline39",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline55",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline58",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline59",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline60",
  //   strength: 0.3
  // },
  // {
  //   target: "project3",
  //   source: "discipline1",
  //   strength: 0.3
  // },
  // {
  //   target: "project3",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project3",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project3",
  //   source: "discipline8",
  //   strength: 0.3
  // },
  // {
  //   target: "project3",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project3",
  //   source: "discipline54",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline6",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline7",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline42",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline43",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline44",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline45",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline47",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline48",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline50",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline54",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline13",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline40",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline46",
  //   strength: 0.3
  // },
  // {
  //   target: "project5",
  //   source: "discipline47",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline24",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline49",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline55",
  //   strength: 0.3
  // },
  // {
  //   target: "project7",
  //   source: "discipline43",
  //   strength: 0.3
  // },
  // {
  //   target: "project7",
  //   source: "discipline47",
  //   strength: 0.3
  // },
  // {
  //   target: "project7",
  //   source: "discipline48",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline25",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline41",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline42",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline43",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline47",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline48",
  //   strength: 0.3
  // },
  // {
  //   target: "project8",
  //   source: "discipline54",
  //   strength: 0.3
  // },
  // {
  //   target: "project9",
  //   source: "discipline43",
  //   strength: 0.3
  // },
  // {
  //   target: "project9",
  //   source: "discipline47",
  //   strength: 0.3
  // },
  // {
  //   target: "project9",
  //   source: "discipline48",
  //   strength: 0.3
  // },
  // {
  //   target: "project9",
  //   source: "discipline54",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline24",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline49",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline55",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline6",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline7",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline42",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline43",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline44",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline45",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline47",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline48",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline50",
  //   strength: 0.3
  // },
  // {
  //   target: "project4",
  //   source: "discipline54",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline5",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline6",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline8",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline9",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline23",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline39",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline55",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline58",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline59",
  //   strength: 0.3
  // },
  // {
  //   target: "project2",
  //   source: "discipline60",
  //   strength: 0.3
  // },
  // {
  //   target: "project10",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project10",
  //   source: "discipline13",
  //   strength: 0.3
  // },
  // {
  //   target: "project10",
  //   source: "discipline34",
  //   strength: 0.3
  // },
  // {
  //   target: "project11",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project11",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project11",
  //   source: "discipline34",
  //   strength: 0.3
  // },
  // {
  //   target: "project11",
  //   source: "discipline35",
  //   strength: 0.3
  // },
  // {
  //   target: "project11",
  //   source: "discipline36",
  //   strength: 0.3
  // },
  // {
  //   target: "project12",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project12",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project12",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project12",
  //   source: "discipline21",
  //   strength: 0.3
  // },
  // {
  //   target: "project12",
  //   source: "discipline34",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline12",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline21",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline49",
  //   strength: 0.3
  // },
  // {
  //   target: "project6",
  //   source: "discipline55",
  //   strength: 0.3
  // },
  // {
  //   target: "project13",
  //   source: "discipline3",
  //   strength: 0.3
  // },
  // {
  //   target: "project13",
  //   source: "discipline21",
  //   strength: 0.3
  // },
  // {
  //   target: "project13",
  //   source: "discipline34",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline2",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline4",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline7",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline18",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline19",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline24",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline27",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline30",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline33",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline34",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline35",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline37",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline38",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline58",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline61",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline62",
  //   strength: 0.3
  // },
  // {
  //   target: "project14",
  //   source: "discipline65",
  //   strength: 0.3
  // },
  // {
  //   target: "project15",
  //   source: "discipline22",
  //   strength: 0.3
  // },
  // {
  //   target: "project16",
  //   source: "discipline7",
  //   strength: 0.3
  // },
  // {
  //   target: "project16",
  //   source: "discipline21",
  //   strength: 0.3
  // },
  // {
  //   target: "project17",
  //   source: "discipline7",
  //   strength: 0.3
  // },
  // {
  //   target: "project17",
  //   source: "discipline21",
  //   strength: 0.3
  // },
  // {
  //   target: "project17",
  //   source: "discipline25",
  //   strength: 0.3
  // },
  // {
  //   target: "project17",
  //   source: "discipline66",
  //   strength: 0.3
  // },
  // {
  //   target: "project46",
  //   source: "discipline2",
  //   strength: 0.3
  // },
]

function getNeighbors(node) {
  return links.reduce(function (neighbors, link) {
      if (link.target.id === node.id) {
        neighbors.push(link.source.id)
      } else if (link.source.id === node.id) {
        neighbors.push(link.target.id)
      }
      return neighbors
    },
    [node.id]
  )
}

function isNeighborLink(node, link) {
  return link.target.id === node.id || link.source.id === node.id
}




function getNodeColor(node, neighbors) {
  if (node.color === "primary0") {
    return "#cc5a31";
  }
  else if (node.color === "primary1") {
    return "#cc5a31";
  }
  else if (node.color === "primary2") {
    return "#2c7481";
  }
  else if (node.color === "primary3") {
    return "#6e9c73";
  }
  else if (node.color === "primary4") {
    return "#bb2927";
  }
  else if (node.color === "primary5") {
    return "#70555d";
  }
  else if (node.color === "primary6") {
    return "#3e5d92";
  }
  else if (node.color === "primary7") {
    return "#c3a955";
  }
  else if (node.color === "secondary1") {
    return "#cc5a31";
  }
  else if (node.color === "secondary2") {
    return "#2c7481";
  }
  else if (node.color === "secondary3") {
    return "#6e9c73";
  }
  else if (node.color === "secondary4") {
    return "#bb2927";
  }
  else if (node.color === "secondary5") {
    return "#70555d";
  }
  else if (node.color === "secondary6") {
    return "#3e5d92";
  }
  else if (node.color === "secondary7") {
    return "#c3a955";
  }
  else if (node.color === "staff") {
    return "#999c99";
  }
  else if (node.color === "discipline") {
    return "#e3e3db";
  }
}


function getNodeSize(node) {
  if (node.level === 1) {
    return 65;
  }
  else if (node.level === 2) {
    return 45;
  }
  else if (node.level === 3) {
    return 25;
  }
  else if (node.level === 4) {
    return 15;
  }
  else if (node.level === 5) {
    return 5;
  }
}

function getLinkColor(node, link) {
  return isNeighborLink(node, link) ? 'white' : '#454545'
}

function getLinkStrokeWidth(node, link) {
  return isNeighborLink(node, link) ? '3' : '1'
}

function getTextColor(node, neighbors) {
  return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'red' : 'white'
}

var width = window.innerWidth;
var height = window.innerHeight;

var svg = d3.select('body')
.append('svg')
.attr('width', width).attr('height', height)
.attr("id", "gcro")
.call(d3.zoom().on("zoom", function () {
   svg.attr("transform", d3.event.transform)
}))
.append("g")



var defs = svg.append('svg:defs');

defs.append("svg:pattern")
    .attr("id", "gcro_icon")
    .attr("width", 1)
    .attr("height", 1)
    .append("svg:image")
      .attr("xlink:href",'./img/gcro.png')
      .attr("width", 150)
      .attr("height", 150)
      .attr("x", -10)
      .attr("y", -10);

defs.append("svg:pattern")
    .attr("id", "staff_icon")
    .attr("width", 1)
    .attr("height", 1)
    .append("svg:image")
      .attr("xlink:href",'./img/staff.png')
      .attr("width", 80)
      .attr("height", 80)
      .attr("x", -25)
      .attr("y", -20);


// d3.select("#download").on("click", function(){
//       d3.select('this')
//         .attr("href", 'data:application/octet-stream;base64,' + btoa(d3.select("#gcro").html()))
//         .attr("download", "viz.svg")
//     })

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
  .id(function (link) { return link.id })
  .strength(function (link) { return link.strength })
  // .distance(function (link) { return link.distance })

var simulation = d3
  .forceSimulation()
  .force('link', linkForce)
  .force('charge', d3.forceManyBody().strength(-1420))
  .force('center', d3.forceCenter(width / 2, height / 2))

var dragDrop = d3.drag().on('start', function (node) {
  node.fx = node.x
  node.fy = node.y
}).on('drag', function (node) {
  simulation.alphaTarget(0.7).restart()
  node.fx = d3.event.x
  node.fy = d3.event.y
}).on('end', function (node) {
  if (!d3.event.active) {
    simulation.alphaTarget(0)
  }
  node.fx = null
  node.fy = null
})

function selectNode(selectedNode) {
  console.log(selectedNode);
  var neighbors = getNeighbors(selectedNode)
  // we modify the styles to highlight selected nodes

  textElements.attr('fill', function (node, neighbors) { return getTextColor(node, neighbors) })
  linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })
  linkElements.attr('stroke-width', function (link) { return getLinkStrokeWidth(selectedNode, link) })
  nodeElements.attr('fill', function (node, neighbors) { return getNodeColor(node, neighbors) })
}

var linkElements = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
    // .attr("stroke-width", 1)
    .attr("stroke-width", function(node) {
      if (node.stroke === "jotted") {
        return "2";
      }
      else {
        return "1";
      }
    })
	  .attr("stroke", "#888")
    .attr("stroke-dasharray", function(node) {
      if (node.stroke === "jotted") {
        return "5,5";
      }
      else {
        return "0";
      }
    })
    .attr("opacity", function(node) {
      if (node.opacity === "yes") {
        return "0";
      }
    })

var nodeElements = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
    .attr("r", getNodeSize)
    .attr("fill", getNodeColor)
    .style("fill", function(node){
      if (node.level === 1)  {
        return "url(#gcro_icon)"
      }
      else if (node.level === 4)  {
        return "url(#staff_icon)"
      }
    })
    .call(dragDrop)
    .on('click', selectNode)
      .attr('height', '100')
      .attr('width', '100')


var textElements = svg.append("g")
  .attr("class", "texts")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .text(function (node) {
    return node.label
  })
	  .attr("font-size", function(node){
      if (node.level === 2) {
        return "13";
      } else if (node.level === 3) {
        return "11";
      } else if (node.level === 4) {
        return "9";
      }
    })
	  // .attr("dx", 15)
    .attr("dy", 4)
    .style('text-anchor', 'middle')
    .style('fill', '#e1e1e1')
    .style('font-weight', function(node){
      if (node.level === 2) {
        return "700";
      } else if (node.level === 3) {
        return "700";
      } else if (node.level === 4) {
        return "300";
      }
    })
    .style('font-family', function(node){
      if (node.level === 2) {
        return "Ideal-Sans-Bold";
      } else if (node.level === 3) {
        return "Sentinel-Bold";
      } else if (node.level === 4) {
        return "Sentinel-Light";
      }
    })
    .call(dragDrop)
    .on('click', selectNode)



simulation.nodes(nodes).on('tick', () => {
  nodeElements
    .attr('cx', function (node) { return node.x })
    .attr('cy', function (node) { return node.y })
  textElements
    .attr('x', function (node) { return node.x })
    .attr('y', function (node) { return node.y })
  linkElements
    .attr('x1', function (link) { return link.source.x })
    .attr('y1', function (link) { return link.source.y })
    .attr('x2', function (link) { return link.target.x })
    .attr('y2', function (link) { return link.target.y })
})

function updateGraph() {
  // links
  // texts

  // alert('graph updated');

  textElements.remove()

  setTimeout(function(){ textElements }, 3000);

}

simulation.force("link").links(links)

// updateGraph();


// redirect after time has passed

$(document).inactivityTimeout({
    inactivityWait: 180,
    dialogWait: 3,
		dialogBorderColor : '#FFFFFF',
		dialogBackgroundColor: '#2d2c2c',
		dialogFontSize : '22px',
    logoutUrl: '../',
		dialogMessage : 'Redirecting due to inactivity in %s seconds ',
})

}); // end document ready
