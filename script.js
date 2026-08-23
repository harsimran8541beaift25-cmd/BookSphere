/* ---------------- DATA ---------------- */
const catalog = [
  {
    id:'cse', name:'Computer Science & Engineering', short:'CSE',
    blurb:'Algorithms, systems, and the machinery behind software.',
    subjects:[
      { id:'dsa', name:'Data Structures & Algorithms', blurb:'How to organize data and reason about running time.',
        books:[
          {title:'Introduction to Algorithms', author:'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein', edition:'3rd Edition', call:'005.1 COR', total:6, available:2, desc:'A comprehensive reference covering algorithm design and analysis, from sorting and graph algorithms to NP-completeness, with rigorous proofs throughout.'},
          {title:'Data Structures Using C', author:'Reema Thareja', edition:'2nd Edition', call:'005.7 THA', total:5, available:5, desc:'An introductory text building up arrays, linked lists, trees, and graphs through C implementations, aimed at undergraduate coursework.'},
          {title:'Algorithm Design', author:'Jon Kleinberg, Éva Tardos', edition:'1st Edition', call:'005.1 KLE', total:4, available:0, desc:'Presents algorithmic techniques such as greedy methods, divide and conquer, and dynamic programming through worked case studies.'}
        ]},
      { id:'os', name:'Operating Systems', blurb:'Processes, memory, and how a machine manages itself.',
        books:[
          {title:'Operating System Concepts', author:'Abraham Silberschatz, Peter B. Galvin, Greg Gagne', edition:'10th Edition', call:'005.43 SIL', total:7, available:3, desc:'The standard survey of process scheduling, memory management, file systems, and concurrency in modern operating systems.'},
          {title:'Modern Operating Systems', author:'Andrew S. Tanenbaum, Herbert Bos', edition:'4th Edition', call:'005.43 TAN', total:5, available:1, desc:'Explores operating system design with detailed case studies of UNIX, Linux, and Windows internals.'},
          {title:'Operating Systems: Internals and Design Principles', author:'William Stallings', edition:'9th Edition', call:'005.43 STA', total:4, available:4, desc:'Balances theory and practice on scheduling, deadlock, virtual memory, and distributed systems.'}
        ]},
      { id:'cn', name:'Computer Networks', blurb:'How data travels from one machine to another.',
        books:[
          {title:'Computer Networking: A Top-Down Approach', author:'James F. Kurose, Keith W. Ross', edition:'8th Edition', call:'004.6 KUR', total:6, available:0, desc:'Introduces networking from the application layer downward, using the internet as the running example throughout.'},
          {title:'Computer Networks', author:'Andrew S. Tanenbaum, David J. Wetherall', edition:'5th Edition', call:'004.6 TAN', total:5, available:2, desc:'A layer-by-layer treatment of network architecture, protocols, and the history of internetworking.'},
          {title:'Data Communications and Networking', author:'Behrouz A. Forouzan', edition:'5th Edition', call:'004.6 FOR', total:4, available:4, desc:'Covers physical transmission, error control, and routing with an emphasis on clear diagrams and worked examples.'}
        ]},
      { id:'dbms', name:'Database Management Systems', blurb:'Storing, querying, and protecting structured data.',
        books:[
          {title:'Database System Concepts', author:'Abraham Silberschatz, Henry F. Korth, S. Sudarshan', edition:'7th Edition', call:'005.74 SIL', total:6, available:1, desc:'Covers relational theory, SQL, transaction processing, and storage internals in a widely used course text.'},
          {title:'Fundamentals of Database Systems', author:'Ramez Elmasri, Shamkant B. Navathe', edition:'7th Edition', call:'005.74 ELM', total:5, available:5, desc:'Builds from ER modeling through normalization, indexing, and query optimization with applied examples.'},
          {title:'An Introduction to Database Systems', author:'C. J. Date', edition:'8th Edition', call:'005.74 DAT', total:3, available:0, desc:'A theory-first treatment of the relational model, favored for its precision on database foundations.'}
        ]}
    ]
  },
  {
    id:'ece', name:'Electronics & Communication Engineering', short:'ECE',
    blurb:'Circuits, signals, and the systems that carry information.',
    subjects:[
      { id:'de', name:'Digital Electronics', blurb:'Logic gates, circuits, and digital system design.',
        books:[
          {title:'Digital Design', author:'M. Morris Mano, Michael D. Ciletti', edition:'6th Edition', call:'621.395 MAN', total:6, available:2, desc:'A foundational text on combinational and sequential logic design, with coverage of Verilog HDL.'},
          {title:'Digital Logic and Computer Design', author:'M. Morris Mano', edition:'1st Edition', call:'621.395 MAN2', total:5, available:5, desc:'Connects Boolean algebra and logic minimization to the design of digital computer components.'},
          {title:'Digital Fundamentals', author:'Thomas L. Floyd', edition:'11th Edition', call:'621.395 FLO', total:4, available:0, desc:'An accessible introduction to number systems, logic families, and programmable logic devices.'}
        ]},
      { id:'ss', name:'Signals & Systems', blurb:'Transforming and analyzing continuous and discrete signals.',
        books:[
          {title:'Signals and Systems', author:'Alan V. Oppenheim, Alan S. Willsky', edition:'2nd Edition', call:'621.3822 OPP', total:5, available:1, desc:'Develops Fourier and Laplace analysis for continuous and discrete-time signals with rigorous derivations.'},
          {title:'Signals and Systems', author:'Simon Haykin, Barry Van Veen', edition:'2nd Edition', call:'621.3822 HAY', total:4, available:4, desc:'Pairs mathematical treatment of transforms with applied examples in communication and control systems.'},
          {title:'Signals & Systems', author:'A. Nagoor Kani', edition:'3rd Edition', call:'621.3822 NAG', total:3, available:0, desc:'A problem-solving oriented text popular for exam preparation, with step-by-step solved examples.'}
        ]},
      { id:'mp', name:'Microprocessors & Microcontrollers', blurb:'The chips that execute instructions inside every device.',
        books:[
          {title:'Microprocessor Architecture, Programming and Applications with the 8085', author:'Ramesh S. Gaonkar', edition:'5th Edition', call:'004.165 GAO', total:5, available:3, desc:'A hands-on guide to 8085 assembly programming, interfacing, and hardware architecture.'},
          {title:'The 8051 Microcontroller', author:'Kenneth J. Ayala', edition:'3rd Edition', call:'004.165 AYA', total:4, available:0, desc:'Covers 8051 architecture, instruction sets, and embedded programming for real-time applications.'},
          {title:'Microprocessors and Interfacing', author:'Douglas V. Hall', edition:'2nd Edition', call:'004.165 HAL', total:4, available:2, desc:'Explains processor interfacing with memory and I/O devices through practical circuit examples.'}
        ]},
      { id:'cs', name:'Communication Systems', blurb:'Modulation, transmission, and the physics of getting a message across.',
        books:[
          {title:'Communication Systems', author:'Simon Haykin', edition:'5th Edition', call:'621.382 HAY', total:5, available:2, desc:'A thorough treatment of analog and digital modulation techniques and noise performance analysis.'},
          {title:'Principles of Communication Systems', author:'Herbert Taub, Donald L. Schilling', edition:'3rd Edition', call:'621.382 TAU', total:4, available:4, desc:'Introduces AM, FM, and pulse modulation with an emphasis on circuit-level intuition.'},
          {title:'Digital Communications', author:'John G. Proakis, Masoud Salehi', edition:'5th Edition', call:'621.382 PRO', total:3, available:0, desc:'A rigorous graduate-level text on channel coding, detection theory, and digital transmission.'}
        ]}
    ]
  },
  {
    id:'me', name:'Mechanical Engineering', short:'ME',
    blurb:'Energy, motion, and the machines that shape the physical world.',
    subjects:[
      { id:'thermo', name:'Thermodynamics', blurb:'Heat, work, and the laws that govern energy conversion.',
        books:[
          {title:'Engineering Thermodynamics', author:'P. K. Nag', edition:'6th Edition', call:'621.402 NAG', total:6, available:3, desc:'A widely used undergraduate text covering the laws of thermodynamics, cycles, and applications.'},
          {title:'Fundamentals of Engineering Thermodynamics', author:'Michael J. Moran, Howard N. Shapiro', edition:'8th Edition', call:'621.402 MOR', total:5, available:0, desc:'Builds thermodynamic reasoning through worked engineering problems in power and refrigeration cycles.'},
          {title:'Thermodynamics: An Engineering Approach', author:'Yunus A. Cengel, Michael A. Boles', edition:'8th Edition', call:'621.402 CEN', total:4, available:4, desc:'Known for intuitive explanations and extensive real-world example problems across energy systems.'}
        ]},
      { id:'fm', name:'Fluid Mechanics', blurb:'How liquids and gases move, and the forces behind it.',
        books:[
          {title:'Fluid Mechanics and Hydraulic Machines', author:'R. K. Bansal', edition:'9th Edition', call:'620.106 BAN', total:5, available:1, desc:'Covers fluid statics, dynamics, and hydraulic machinery with extensive numerical examples.'},
          {title:'Fluid Mechanics', author:'Frank M. White', edition:'8th Edition', call:'620.106 WHI', total:4, available:4, desc:'A rigorous treatment of viscous flow, boundary layers, and dimensional analysis for engineers.'},
          {title:'Introduction to Fluid Mechanics', author:'Robert W. Fox, Philip J. Pritchard, Alan T. McDonald', edition:'9th Edition', call:'620.106 FOX', total:3, available:0, desc:'Emphasizes problem-solving methodology through control volume analysis and applied case studies.'}
        ]},
      { id:'md', name:'Machine Design', blurb:'Sizing, materials, and the logic of mechanical components.',
        books:[
          {title:'Design of Machine Elements', author:'V. B. Bhandari', edition:'4th Edition', call:'621.815 BHA', total:5, available:2, desc:'A practical guide to designing shafts, gears, bearings, and fasteners against failure criteria.'},
          {title:'Mechanical Engineering Design', author:'Joseph E. Shigley, Richard G. Budynas', edition:'10th Edition', call:'621.815 SHI', total:4, available:0, desc:'A rigorous reference on stress analysis, fatigue, and design of mechanical components.'},
          {title:'Machine Design', author:'R. S. Khurmi, J. K. Gupta', edition:'14th Edition', call:'621.815 KHU', total:6, available:6, desc:'A comprehensive design handbook widely used for its extensive standard formulas and tables.'}
        ]},
      { id:'mfg', name:'Manufacturing Processes', blurb:'Turning raw material into finished parts.',
        books:[
          {title:'Manufacturing Technology', author:'P. N. Rao', edition:'3rd Edition', call:'670.42 RAO', total:5, available:3, desc:'Covers casting, welding, forming, and machining processes with process-selection guidance.'},
          {title:'Manufacturing Engineering and Technology', author:'Serope Kalpakjian, Steven R. Schmid', edition:'7th Edition', call:'670.42 KAL', total:4, available:0, desc:'An extensive reference on materials behavior and modern manufacturing systems, including automation.'},
          {title:'Production Technology', author:'R. K. Jain', edition:'17th Edition', call:'670.42 JAI', total:3, available:1, desc:'A widely referenced text on machine tools, metrology, and manufacturing process planning.'}
        ]}
    ]
  },
  {
    id:'ce', name:'Civil Engineering', short:'CE',
    blurb:'Structures, soil, and the built environment.',
    subjects:[
      { id:'sa', name:'Structural Analysis', blurb:'How buildings and bridges carry and distribute load.',
        books:[
          {title:'Structural Analysis', author:'R. C. Hibbeler', edition:'10th Edition', call:'624.171 HIB', total:6, available:2, desc:'A methodical treatment of determinate and indeterminate structures using classical and matrix methods.'},
          {title:'Basic Structural Analysis', author:'C. S. Reddy', edition:'2nd Edition', call:'624.171 RED', total:4, available:0, desc:'Introduces force and displacement methods with numerous solved problems for undergraduate study.'},
          {title:'Theory of Structures', author:'S. Ramamrutham', edition:'1st Edition', call:'624.171 RAM', total:5, available:5, desc:'A long-standing reference on beams, trusses, and arches, favored for exam preparation.'}
        ]},
      { id:'geo', name:'Geotechnical Engineering', blurb:'The mechanics of soil beneath every foundation.',
        books:[
          {title:'Basic and Applied Soil Mechanics', author:'Gopal Ranjan, A. S. R. Rao', edition:'2nd Edition', call:'624.151 RAN', total:5, available:1, desc:'Covers soil classification, consolidation, and shear strength with Indian design code references.'},
          {title:'Geotechnical Engineering', author:'C. Venkatramaiah', edition:'3rd Edition', call:'624.151 VEN', total:4, available:4, desc:'A detailed treatment of soil properties, site investigation, and foundation behavior.'},
          {title:'Principles of Geotechnical Engineering', author:'Braja M. Das, Khaled Sobhan', edition:'9th Edition', call:'624.151 DAS', total:3, available:0, desc:'A globally used reference blending soil mechanics theory with foundation engineering practice.'}
        ]},
      { id:'sur', name:'Surveying', blurb:'Measuring and mapping the land before anything is built.',
        books:[
          {title:'Surveying, Volume 1–3', author:'B. C. Punmia, Ashok K. Jain, Arun K. Jain', edition:'16th Edition', call:'526.9 PUN', total:6, available:3, desc:'A three-volume reference spanning chain surveying, leveling, and modern instruments like total stations.'},
          {title:'Elementary Surveying', author:'Charles D. Ghilani, Paul R. Wolf', edition:'14th Edition', call:'526.9 GHI', total:4, available:0, desc:'Introduces measurement theory, GPS surveying, and geographic information systems.'},
          {title:'Surveying and Levelling', author:'N. N. Basak', edition:'2nd Edition', call:'526.9 BAS', total:3, available:3, desc:'A practical introduction to leveling, theodolites, and computation of areas and volumes.'}
        ]},
      { id:'ct', name:'Concrete Technology', blurb:'The material science behind the most-used building material.',
        books:[
          {title:'Concrete Technology', author:'M. S. Shetty', edition:'8th Edition', call:'620.136 SHE', total:5, available:2, desc:'Covers concrete constituents, mix design, and durability, widely used across Indian universities.'},
          {title:'Properties of Concrete', author:'A. M. Neville', edition:'5th Edition', call:'620.136 NEV', total:4, available:0, desc:'A definitive reference on concrete behavior, curing, and long-term performance.'},
          {title:'Concrete Technology', author:'A. R. Santhakumar', edition:'2nd Edition', call:'620.136 SAN', total:3, available:1, desc:'Balances materials science with practical guidance on mix design and quality control.'}
        ]}
    ]
  },
  {
    id:'nursing', name:'Nursing & Health Sciences', short:'NUR',
    blurb:'Patient care, the human body, and the science of healing.',
    subjects:[
      { id:'fon', name:'Fundamentals of Nursing', blurb:'Core nursing skills, procedures, and patient care principles.',
        books:[
          {title:'Fundamentals of Nursing', author:'Patricia A. Potter, Anne Griffin Perry', edition:'10th Edition', call:'610.73 POT', total:6, available:2, desc:'A widely used foundation text covering basic nursing skills, patient assessment, and clinical procedures.'},
          {title:'Fundamentals of Nursing: Concepts, Process and Practice', author:'Barbara Kozier, Glenora Erb', edition:'9th Edition', call:'610.73 KOZ', total:5, available:5, desc:'Introduces the nursing process, critical thinking, and core competencies for beginning nursing students.'},
          {title:'Textbook of Fundamentals of Nursing', author:'B. T. Basavanthappa', edition:'2nd Edition', call:'610.73 BAS', total:4, available:0, desc:'A comprehensive Indian nursing curriculum text covering basic nursing procedures and patient care ethics.'}
        ]},
      { id:'anp', name:'Anatomy & Physiology', blurb:'How the human body is built, and how it functions.',
        books:[
          {title:'Ross and Wilson Anatomy and Physiology in Health and Illness', author:'Anne Waugh, Allison Grant', edition:'13th Edition', call:'612 WAU', total:6, available:3, desc:'A clearly illustrated guide to body systems, written specifically for nursing and allied health students.'},
          {title:'Principles of Anatomy and Physiology', author:'Gerard J. Tortora, Bryan H. Derrickson', edition:'15th Edition', call:'612 TOR', total:5, available:1, desc:'A detailed reference on human anatomy and physiological processes, widely used across health science programs.'},
          {title:'Essentials of Medical Physiology', author:'K. Sembulingam, Prema Sembulingam', edition:'8th Edition', call:'612 SEM', total:4, available:4, desc:'Explains physiological concepts through concise explanations and clinical correlations for exam preparation.'}
        ]},
      { id:'pharm', name:'Pharmacology for Nurses', blurb:'How drugs work, and how to administer them safely.',
        books:[
          {title:'Lippincott Illustrated Reviews: Pharmacology', author:'Karen Whalen', edition:'7th Edition', call:'615.1 WHA', total:5, available:0, desc:'A visually driven review of drug classes, mechanisms of action, and clinical pharmacology basics.'},
          {title:'Essentials of Medical Pharmacology', author:'K. D. Tripathi', edition:'8th Edition', call:'615.1 TRI', total:6, available:2, desc:'A widely referenced pharmacology text balancing drug mechanisms with practical prescribing guidance.'},
          {title:'Pharmacology for Nurses: A Pathophysiologic Approach', author:'Michael Patrick Adams, Leland Norman Holland', edition:'6th Edition', call:'615.1 ADA', total:4, available:4, desc:'Connects drug therapy to disease processes, aimed specifically at nursing practice and patient safety.'}
        ]},
      { id:'msn', name:'Medical-Surgical Nursing', blurb:'Caring for adult patients through illness, surgery, and recovery.',
        books:[
          {title:"Brunner & Suddarth's Textbook of Medical-Surgical Nursing", author:'Janice L. Hinkle, Kerry H. Cheever', edition:'14th Edition', call:'610.73 HIN', total:6, available:1, desc:'A comprehensive reference on adult health nursing across body systems and clinical conditions.'},
          {title:"Lewis's Medical-Surgical Nursing", author:'Mariann M. Harding, Jeffrey Kwong', edition:'11th Edition', call:'610.73 HAR', total:5, available:5, desc:'Covers assessment and management of adult patients with an emphasis on clinical reasoning.'},
          {title:'Textbook of Medical-Surgical Nursing', author:'Suzanne C. Smeltzer', edition:'12th Edition', call:'610.73 SME', total:3, available:0, desc:'A detailed nursing-focused guide to perioperative care, chronic illness, and emergency management.'}
        ]}
    ]
  }
];

/* ---------------- STATE ---------------- */
let state = { view:'home', branchId:null, subjectId:null };
const spineColors = ['#3f5b45','#7c2d2d','#4a4a75','#8a6a2e','#2f4d5e','#6b3f5e'];

let account = {
  signedIn:false,
  name:'',
  menuOpen:false,
  favourites:[],     // { branchId, subjectId, index, title, author }
  searchHistory:[]   // { query, time }
};

/* Reservation auto-expiry: if a reserved copy isn't picked up within this
   window, it automatically returns to available stock for other users. */
const RESERVATION_HOLD_MS = 24 * 60 * 60 * 1000; // 24 hours
let activeReservations = []; // { branchId, subjectId, index, expiresAt, timeoutId } or dynamic equivalent

/* ---------------- LIVE SUBJECT BROWSING (Open Library) ----------------
   Instead of hand-typing book lists per subject, these tiles pull real,
   current book data straight from Open Library's public Subjects API
   (https://openlibrary.org/subjects/{slug}.json) — no API key needed, and
   it covers effectively any discipline, not just the ones in our small
   local catalog above. */
const dynamicCategories = [
  { slug:'engineering',       label:'Engineering' },
  { slug:'computer_science',  label:'Computer Science' },
  { slug:'statistics',        label:'Statistics' },
  { slug:'nursing',           label:'Nursing' },
  { slug:'architecture',      label:'Architecture' },
  { slug:'mathematics',       label:'Mathematics' },
  { slug:'medicine',          label:'Medicine' },
  { slug:'business',          label:'Business' },
  { slug:'physics',           label:'Physics' },
  { slug:'chemistry',         label:'Chemistry' },
  { slug:'psychology',        label:'Psychology' },
  { slug:'law',                label:'Law' },
  { slug:'economics',         label:'Economics' },
  { slug:'literature',        label:'Literature' }
];
const categoryCache = {};      // slug -> array of Open Library "works"
const dynamicStockStore = {};  // "slug::key" -> { total, available } (generated once, then mutated by reserve/expire)

function findBranch(id){ return catalog.find(b=>b.id===id); }
function findSubject(branch, id){ return branch.subjects.find(s=>s.id===id); }

/* ---------------- NAV ---------------- */
function goHome(){ state = {view:'home', branchId:null, subjectId:null}; render(); }
function goBranches(){ state.view='branches'; state.branchId=null; state.subjectId=null; render(); }
function chooseBranch(id){ state.view='subjects'; state.branchId=id; state.subjectId=null; render(); }
function chooseSubject(id){ state.view='books'; state.subjectId=id; render(); }
function chooseCategory(slug){ state.view='category'; state.branchId=null; state.subjectId=null; state.categorySlug=slug; render(); }

function renderBreadcrumb(){
  const bc = document.getElementById('breadcrumb');
  let parts = [`<span onclick="goHome()">Home</span>`];

  if(state.view==='favourites' || state.view==='history'){
    parts.push(`<span class="sep">/</span>`);
    parts.push(`<span class="current">${state.view==='favourites' ? 'Favourites' : 'Search History'}</span>`);
    bc.innerHTML = parts.join('');
    return;
  }

  if(state.view==='category'){
    const cat = dynamicCategories.find(c=>c.slug===state.categorySlug);
    parts.push(`<span class="sep">/</span>`);
    parts.push(`<span onclick="goBranches()">Browse</span>`);
    parts.push(`<span class="sep">/</span>`);
    parts.push(`<span class="current">${cat ? cat.label : 'Category'}</span>`);
    bc.innerHTML = parts.join('');
    return;
  }

  if(state.view!=='home'){
    parts.push(`<span class="sep">/</span>`);
    parts.push(state.view==='branches' ? `<span class="current">Branches</span>` : `<span onclick="goBranches()">Branches</span>`);
  }
  if(state.branchId){
    const b = findBranch(state.branchId);
    parts.push(`<span class="sep">/</span>`);
    parts.push(state.view==='subjects' ? `<span class="current">${b.short}</span>` : `<span onclick="chooseBranch('${b.id}')">${b.short}</span>`);
  }
  if(state.subjectId){
    const b = findBranch(state.branchId);
    const s = findSubject(b, state.subjectId);
    parts.push(`<span class="sep">/</span><span class="current">${s.name}</span>`);
  }
  bc.innerHTML = parts.join('');
}

/* ---------------- RENDER ---------------- */
function render(){
  renderBreadcrumb();
  renderAccountArea();
  const main = document.getElementById('main');
  if(state.view==='home') main.innerHTML = renderHome();
  else if(state.view==='branches') main.innerHTML = renderBranches();
  else if(state.view==='subjects') main.innerHTML = renderSubjects();
  else if(state.view==='books') main.innerHTML = renderBooks();
  else if(state.view==='favourites') main.innerHTML = renderFavourites();
  else if(state.view==='history') main.innerHTML = renderHistory();
  else if(state.view==='category'){ main.innerHTML = renderCategoryPage(state.categorySlug); loadCategory(state.categorySlug); }
  window.scrollTo({top:0, behavior:'instant'});
}

/* ---------------- ACCOUNT MENU ---------------- */
function renderAccountArea(){
  const el = document.getElementById('accountArea');
  if(!el) return;
  if(!account.signedIn){
    el.innerHTML = `<button class="signin-btn" onclick="openSignIn()">Sign In</button>`;
    return;
  }
  el.innerHTML = `
    <button class="account-btn ${account.menuOpen?'open':''}" onclick="toggleAccountMenu(event)">
      <span class="avatar">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"></path></svg>
      </span>
      <span class="acct-label">My ${account.name || 'Account'}</span>
      <svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div class="account-dropdown ${account.menuOpen?'open':''}" id="accountDropdown">
      <button class="account-dropdown-item" onclick="openFavouritesView()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 13.6 6.9 17.2l1.9-5.8L4 7.8h6.1z"></path></svg>
        Favourites
        ${account.favourites.length ? `<span class="dd-count">${account.favourites.length}</span>` : ''}
      </button>
      <button class="account-dropdown-item" onclick="openSearchHistoryView()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 16 14"></polyline></svg>
        Search History
        ${account.searchHistory.length ? `<span class="dd-count">${account.searchHistory.length}</span>` : ''}
      </button>
      <button class="account-dropdown-item signout" onclick="signOut()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        Sign Out
      </button>
    </div>
  `;
}

function toggleAccountMenu(e){
  if(e) e.stopPropagation();
  account.menuOpen = !account.menuOpen;
  renderAccountArea();
}

function closeAccountMenu(){
  if(account.menuOpen){ account.menuOpen = false; renderAccountArea(); }
}

document.addEventListener('click', (e)=>{
  const area = document.getElementById('accountArea');
  if(account.menuOpen && area && !area.contains(e.target)) closeAccountMenu();
});

function signOut(){
  account.signedIn = false;
  account.name = '';
  account.menuOpen = false;
  goHome();
}

function openFavouritesView(){
  account.menuOpen = false;
  state.view = 'favourites'; state.branchId=null; state.subjectId=null;
  render();
}

function openSearchHistoryView(){
  account.menuOpen = false;
  state.view = 'history'; state.branchId=null; state.subjectId=null;
  render();
}

function renderFavourites(){
  if(account.favourites.length === 0){
    return `
    <div class="section">
      <div class="section-head">
        <div class="kicker">My Account</div>
        <h2>Favourites</h2>
        <p>Books you star from their detail card will be saved here for quick access.</p>
      </div>
      <p class="empty-note">You haven't favourited any books yet. Open a book and tap the star to save it.</p>
    </div>`;
  }
  return `
  <div class="section">
    <div class="section-head">
      <div class="kicker">My Account</div>
      <h2>Favourites</h2>
      <p>${account.favourites.length} book${account.favourites.length===1?'':'s'} you've saved for later.</p>
    </div>
    <div class="search-results">
      ${account.favourites.map(f=>{
        if(f.type==='dynamic'){
          const stock = getDynamicStock(f.slug, f.key);
          const isAvail = stock.available > 0;
          return `
          <button class="search-result-card" onclick="openDynamicBook('${f.slug}','${f.key}')">
            <div class="sr-main">
              <div class="srloc">Open Library</div>
              <h3>${f.title}</h3>
              <div class="srauthor">${f.author}</div>
            </div>
            <span class="sravail ${isAvail?'yes':'no'}">${isAvail ? `${stock.available} of ${stock.total} available` : 'All copies checked out'}</span>
          </button>`;
        }
        const branch = findBranch(f.branchId);
        const subject = branch ? findSubject(branch, f.subjectId) : null;
        const bk = subject ? subject.books[f.index] : null;
        if(!bk) return '';
        const isAvail = bk.available > 0;
        return `
        <button class="search-result-card" onclick="openBook('${f.branchId}','${f.subjectId}',${f.index})">
          <div class="sr-main">
            <div class="srloc">${branch.short} · ${subject.name}</div>
            <h3>${bk.title}</h3>
            <div class="srauthor">${bk.author}</div>
          </div>
          <span class="sravail ${isAvail?'yes':'no'}">${isAvail ? `${bk.available} of ${bk.total} available` : 'All copies checked out'}</span>
        </button>`;
      }).join('')}
    </div>
  </div>`;
}

function renderHistory(){
  if(account.searchHistory.length === 0){
    return `
    <div class="section">
      <div class="section-head">
        <div class="kicker">My Account</div>
        <h2>Search History</h2>
        <p>Searches you run from the catalog search bar will show up here.</p>
      </div>
      <p class="empty-note">No searches yet. Try searching for a book from the Branches page.</p>
    </div>`;
  }
  return `
  <div class="section">
    <div class="section-head">
      <div class="kicker">My Account</div>
      <h2>Search History</h2>
      <p>Your most recent searches, newest first. Tap one to run it again.</p>
    </div>
    <div class="history-list">
      ${account.searchHistory.map(h=>`
        <button class="history-row" onclick="rerunSearch('${h.query.replace(/'/g,"\\'")}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 16 14"></polyline></svg>
          <span class="hq">${h.query}</span>
          <span class="htime">${h.time}</span>
        </button>
      `).join('')}
    </div>
    <button class="clear-history-btn" onclick="clearSearchHistory()">Clear history</button>
  </div>`;
}

function rerunSearch(query){
  state.view='branches'; state.branchId=null; state.subjectId=null;
  render();
  setTimeout(()=>{
    const input = document.getElementById('bookSearchInput');
    if(input){
      input.value = query;
      handleBookSearch(query);
    }
  }, 0);
}

function clearSearchHistory(){
  account.searchHistory = [];
  render();
}

function recordSearch(query){
  const q = query.trim();
  if(!q) return;
  account.searchHistory = account.searchHistory.filter(h=>h.query.toLowerCase() !== q.toLowerCase());
  account.searchHistory.unshift({ query:q, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) });
  account.searchHistory = account.searchHistory.slice(0, 15);
}

function isFavourited(branchId, subjectId, index){
  return account.favourites.some(f=>f.type==='local' && f.branchId===branchId && f.subjectId===subjectId && f.index===index);
}

function toggleFavourite(branchId, subjectId, index){
  if(!account.signedIn){
    closeModal();
    openSignIn();
    return;
  }
  const existingIdx = account.favourites.findIndex(f=>f.type==='local' && f.branchId===branchId && f.subjectId===subjectId && f.index===index);
  if(existingIdx > -1){
    account.favourites.splice(existingIdx, 1);
  } else {
    account.favourites.push({ type:'local', branchId, subjectId, index });
  }
  const branch = findBranch(branchId);
  const subject = findSubject(branch, subjectId);
  renderBookCard(subject.books[index]);
}

function isFavouritedDynamic(slug, key){
  return account.favourites.some(f=>f.type==='dynamic' && f.slug===slug && f.key===key);
}

function toggleFavouriteDynamic(slug, key){
  if(!account.signedIn){
    closeModal();
    openSignIn();
    return;
  }
  const existingIdx = account.favourites.findIndex(f=>f.type==='dynamic' && f.slug===slug && f.key===key);
  if(existingIdx > -1){
    account.favourites.splice(existingIdx, 1);
  } else {
    const works = categoryCache[slug] || [];
    const w = works.find(x=>x.key===key);
    const author = (w && w.authors && w.authors.length) ? w.authors.map(a=>a.name).join(', ') : 'Unknown author';
    account.favourites.push({ type:'dynamic', slug, key, title: w ? w.title : 'Untitled', author });
  }
  openDynamicBook(slug, key);
}

function renderHome(){
  const totalBooks = catalog.reduce((a,b)=>a + b.subjects.reduce((x,s)=>x+s.books.length,0), 0);
  const totalSubjects = catalog.reduce((a,b)=>a+b.subjects.length,0);
  return `
  <div class="hero">
    <div class="book-photo-bg" aria-hidden="true"></div>
    <div class="hero-inner">
      <div class="hero-text">
        <div class="eyebrow">University Library · Est. Catalog</div>
        <h1>Find your next <em>textbook</em>,<br>branch by branch.</h1>
        <button class="cta" onclick="goBranches()">Enter the Catalog →</button>
        
      </div>
    </div>
  </div>`;
}

function renderBranches(){
  return `
  <div class="section">
      <div class="section-head">
      <button class="back-arrow" onclick="goHome()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back
      </button>
      <h2>Which branch are you visiting today?</h2>
      <p>Search for a book by title or author below.</p>
    </div>
      

    <div class="search-wrap">
      <div class="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="bookSearchInput" placeholder="Search for a book by title or author…" autocomplete="off" oninput="handleBookSearch(this.value)" onkeydown="if(event.key==='Enter'){ recordSearch(this.value); renderAccountArea(); }">
        <button class="search-clear" id="searchClearBtn" onclick="clearBookSearch()">✕</button>
      </div>
      <div class="search-results" id="searchResults"></div>
      <div id="externalResults"></div>
    </div>

    <div class="category-browse">
      <div class="category-heading"><span class="live-dot"></span>Or browse an entire subject, pulled live from Open Library</div>
      <div class="category-grid">
        ${dynamicCategories.map(c=>`
          <button class="category-tile" onclick="chooseCategory('${c.slug}')">${c.label}</button>
        `).join('')}
      </div>
    </div>
  </div>`;
}

/* ---------------- BOOK SEARCH ---------------- */
function searchBooksByName(query){
  const q = query.trim().toLowerCase();
  if(!q) return [];
  const results = [];
  catalog.forEach(branch=>{
    branch.subjects.forEach(subject=>{
      subject.books.forEach((book, index)=>{
        if(book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q)){
          results.push({ branch, subject, book, index });
        }
      });
    });
  });
  return results;
}

let externalSearchDebounce = null;
let externalSearchAbort = null;
let externalSearchToken = 0;

function handleBookSearch(query){
  const resultsEl = document.getElementById('searchResults');
  const externalEl = document.getElementById('externalResults');
  const clearBtn = document.getElementById('searchClearBtn');
  const drawerGrid = document.getElementById('branchDrawerGrid');
  const q = query.trim();

  clearBtn.classList.toggle('show', q.length > 0);

  if(!q){
    resultsEl.innerHTML = '';
    if(externalEl) externalEl.innerHTML = '';
    if(drawerGrid) drawerGrid.style.display = '';
    if(externalSearchDebounce) clearTimeout(externalSearchDebounce);
    if(externalSearchAbort) externalSearchAbort.abort();
    return;
  }

  // Hide branch drawers while actively searching, since the user just wants book results.
  if(drawerGrid) drawerGrid.style.display = 'none';

  const matches = searchBooksByName(q);

  resultsEl.innerHTML = matches.length === 0
    ? `<div class="search-empty">No books in our physical catalog match "${q}".</div>`
    : matches.map(m=>{
        const isAvail = m.book.available > 0;
        return `
          <button class="search-result-card" onclick="openBook('${m.branch.id}','${m.subject.id}',${m.index})">
            <div class="sr-main">
              <div class="srloc">${m.branch.short} · ${m.subject.name}</div>
              <h3>${m.book.title}</h3>
              <div class="srauthor">${m.book.author}</div>
            </div>
            <span class="sravail ${isAvail ? 'yes':'no'}">${isAvail ? `${m.book.available} of ${m.book.total} available` : 'All copies checked out'}</span>
          </button>
        `;
      }).join('');

  // Debounce the external lookup so we don't fire a request on every keystroke.
  if(externalSearchDebounce) clearTimeout(externalSearchDebounce);
  if(externalEl) externalEl.innerHTML = `<div class="external-loading">Searching the wider Open Library catalog…</div>`;
  externalSearchDebounce = setTimeout(()=>{ fetchOpenLibraryResults(q); }, 400);
}

/* Looks up a much larger real-world book catalog (Open Library) for anything
   that isn't in our small local/physical catalog above — e.g. nursing,
   medicine, or any subject we don't currently stock. No API key needed. */
async function fetchOpenLibraryResults(query){
  const externalEl = document.getElementById('externalResults');
  if(!externalEl) return;

  if(externalSearchAbort) externalSearchAbort.abort();
  externalSearchAbort = new AbortController();
  const myToken = ++externalSearchToken;

  try{
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,first_publish_year,key,edition_count&limit=12`;
    const res = await fetch(url, { signal: externalSearchAbort.signal });
    if(!res.ok) throw new Error('Open Library request failed');
    const data = await res.json();

    // Ignore stale responses if the user kept typing.
    if(myToken !== externalSearchToken) return;

    renderExternalResults(data.docs || [], query);
  } catch(err){
    if(err.name === 'AbortError') return;
    if(myToken !== externalSearchToken) return;
    externalEl.innerHTML = `<div class="external-section"><div class="external-loading">Couldn't reach Open Library right now — check your connection and try again.</div></div>`;
  }
}

function renderExternalResults(docs, query){
  const externalEl = document.getElementById('externalResults');
  if(!externalEl) return;
      
  if(docs.length === 0){
    externalEl.innerHTML = `
      <div class="external-section">
        <div class="external-heading"><span class="ol-dot"></span>From Open Library</div>
        <div class="external-loading">No matches found on Open Library for "${query}" either.</div>
      </div>`;
    return;
  }

  externalEl.innerHTML = `
    <div class="external-section">
      <div class="external-heading"><span class="ol-dot"></span>More from Open Library (${docs.length})</div>
      <div class="search-results">
        ${docs.map(d=>{
          const author = (d.author_name && d.author_name.length) ? d.author_name.join(', ') : 'Unknown author';
          const year = d.first_publish_year ? `First published ${d.first_publish_year}` : 'Publication year unknown';
          const editions = d.edition_count ? `${d.edition_count} edition${d.edition_count===1?'':'s'} on record` : '';
          const olUrl = d.key ? `https://openlibrary.org${d.key}` : `https://openlibrary.org/search?q=${encodeURIComponent(d.title||'')}`;
          return `
            <a class="external-result-card" href="${olUrl}" target="_blank" rel="noopener noreferrer">
              <div class="sr-main">
                <div class="srloc">${year}${editions ? ' · ' + editions : ''}</div>
                <h3>${d.title || 'Untitled'}</h3>
                <div class="srauthor">${author}</div>
              </div>
              <span class="ol-link">View on Open Library ↗</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>`;
}

function clearBookSearch(){
  const input = document.getElementById('bookSearchInput');
  input.value = '';
  handleBookSearch('');
  input.focus();
}

/* ---------------- LIVE CATEGORY BROWSING (Open Library) ---------------- */
function renderCategoryPage(slug){
  const cat = dynamicCategories.find(c=>c.slug===slug);
  return `
  <div class="section">
    <div class="section-head">
    <button class="back-arrow" onclick="goBranches()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back
      </button>
      <h2>${cat ? cat.label : 'Browse'}</h2>
      <p>Real titles pulled straight from Open Library's public catalog for this subject — not typed in by hand, so this works for any subject, not just the ones we stock locally.</p>
    </div>
    <div id="categoryResults">
      <div class="external-loading">Fetching ${cat ? cat.label.toLowerCase() : 'this subject'} from Open Library…</div>
    </div>
  </div>`;
}

async function loadCategory(slug){
  const el = document.getElementById('categoryResults');
  if(!el) return;

  if(categoryCache[slug]){
    renderCategoryBooks(slug, categoryCache[slug]);
    return;
  }

  try{
    const url = `https://openlibrary.org/subjects/${encodeURIComponent(slug)}.json?limit=40`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('Open Library request failed');
    const data = await res.json();
    const works = data.works || [];
    categoryCache[slug] = works;

    // Only render if the user hasn't navigated away while this was loading.
    if(state.view==='category' && state.categorySlug===slug){
      renderCategoryBooks(slug, works);
    }
  } catch(err){
    if(state.view==='category' && state.categorySlug===slug && el){
      el.innerHTML = `<div class="search-empty">Couldn't reach Open Library right now — check your connection and try again.</div>`;
    }
  }
}

function renderCategoryBooks(slug, works){
  const el = document.getElementById('categoryResults');
  if(!el) return;

  if(works.length === 0){
    el.innerHTML = `<div class="search-empty">No books found on Open Library for this subject.</div>`;
    return;
  }

  el.innerHTML = `
    <div class="search-results">
      ${works.map(w=>{
        const stock = getDynamicStock(slug, w.key);
        const isAvail = stock.available > 0;
        const author = (w.authors && w.authors.length) ? w.authors.map(a=>a.name).join(', ') : 'Unknown author';
        return `
          <button class="search-result-card" onclick="openDynamicBook('${slug}','${w.key}')">
            <div class="sr-main">
              <div class="srloc">${w.first_publish_year ? `First published ${w.first_publish_year}` : 'Open Library'}</div>
              <h3>${w.title}</h3>
              <div class="srauthor">${author}</div>
            </div>
            <span class="sravail ${isAvail ? 'yes':'no'}">${isAvail ? `${stock.available} of ${stock.total} available` : 'All copies checked out'}</span>
          </button>
        `;
      }).join('')}
    </div>`;
}

/* Open Library doesn't track a physical library's real stock, so we generate
   a stable (not random-on-every-render) copy count per book from a hash of
   its unique key — deterministic, code-generated, not typed in by hand. */
function hashString(str){
  let h = 0;
  for(let i=0;i<str.length;i++){ h = (h * 31 + str.charCodeAt(i)) >>> 0; }
  return h;
}

function getDynamicStock(slug, key){
  const storeKey = `${slug}::${key}`;
  if(!dynamicStockStore[storeKey]){
    const h = hashString(storeKey);
    const total = 2 + (h % 5);        // 2–6 copies
    const available = h % (total+1);  // 0..total
    dynamicStockStore[storeKey] = { total, available };
  }
  return dynamicStockStore[storeKey];
}

function renderSubjects(){
  const b = findBranch(state.branchId);
  return `
  <div class="section">
    <div class="section-head">
      <div class="kicker">Step 2 of 3 · ${b.short}</div>
      <h2>${b.name}</h2>
      <p>${b.blurb} Choose a subject to see the titles catalogued under it.</p>
    </div>
    <div class="card-list">
      ${b.subjects.map((s,i)=>`
        <button class="index-card" onclick="chooseSubject('${s.id}')">
          <div class="num">Card ${String(i+1).padStart(2,'0')} / ${b.short}</div>
          <h3>${s.name}</h3>
          <p>${s.blurb}</p>
          <span class="count">${s.books.length} titles on shelf</span>
        </button>
      `).join('')}
    </div>
  </div>`;
}

function renderBooks(){
  const b = findBranch(state.branchId);
  const s = findSubject(b, state.subjectId);
  return `
  <div class="section">
    <div class="section-head">
      <div class="kicker">Step 3 of 3 · ${b.short} / ${s.name}</div>
      <h2>${s.name}</h2>
      <p>Click a spine to see how many copies are on the shelf and reserve one.</p>
    </div>
    <div class="shelf">
      ${s.books.map((bk,i)=>`
        <button class="spine" style="background:${spineColors[i % spineColors.length]}" onclick="openBook('${b.id}','${s.id}',${i})">
          <span class="spine-title">${bk.title}</span>
          <span class="spine-avail">${bk.available}/${bk.total}</span>
        </button>
      `).join('')}
    </div>
    <p class="empty-note">${s.books.length} title${s.books.length===1?'':'s'} shelved under ${s.name}. Numbers on each spine show copies available out of total copies held.</p>
  </div>`;
}

/* ---------------- BOOK MODAL ---------------- */
/* ---------------- BOOK MODAL ---------------- */
function openBook(branchId, subjectId, index){
  const b = findBranch(branchId);
  const s = findSubject(b, subjectId);
  const bk = s.books[index];
  const overlay = document.getElementById('overlay');
  const card = document.getElementById('bookCard');
  card.dataset.sourceType = 'local';
  card.dataset.branch = branchId;
  card.dataset.subject = subjectId;
  card.dataset.index = index;
  renderBookCard(bk);
  overlay.classList.add('open');
}

/* Opens the detail modal for a book pulled live from Open Library rather
   than our local physical catalog. */
function openDynamicBook(slug, key){
  const works = categoryCache[slug] || [];
  const w = works.find(x=>x.key===key);
  if(!w) return;
  const stock = getDynamicStock(slug, key);
  const author = (w.authors && w.authors.length) ? w.authors.map(a=>a.name).join(', ') : 'Unknown author';

  const overlay = document.getElementById('overlay');
  const card = document.getElementById('bookCard');
  card.dataset.sourceType = 'dynamic';
  card.dataset.slug = slug;
  card.dataset.key = key;

  renderBookCard({
    title: w.title,
    author,
    edition: w.first_publish_year ? `First published ${w.first_publish_year}` : 'Edition unknown',
    call: `OL · ${key.replace('/works/','')}`,
    total: stock.total,
    available: stock.available,
    desc: 'Catalogued live via the Open Library API — full descriptions aren\u2019t provided by this source record. Use "View on Open Library" for the full listing.'
  });
  overlay.classList.add('open');
}

function renderBookCard(bk){
  const card = document.getElementById('bookCard');
  const isAvail = bk.available > 0;
  const isDynamic = card.dataset.sourceType === 'dynamic';
  const branchId = card.dataset.branch, subjectId = card.dataset.subject, index = card.dataset.index;
  const slug = card.dataset.slug, key = card.dataset.key;
  const faved = isDynamic ? isFavouritedDynamic(slug, key) : isFavourited(branchId, subjectId, Number(index));
  const favClick = isDynamic ? `toggleFavouriteDynamic('${slug}','${key}')` : `toggleFavourite('${branchId}','${subjectId}',${index})`;
  const reserveClick = isDynamic ? `reserveDynamicBook()` : `reserveBook()`;

  card.innerHTML = `
    <div class="bc-top">
      <div>
        <div class="call">${isDynamic ? 'Ref.' : 'Call No.'} ${bk.call}</div>
        <h2>${bk.title}</h2>
        <div class="author">${bk.author}</div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="fav-star-btn ${faved?'active':''}" title="${faved?'Remove from Favourites':'Save to Favourites'}" onclick="${favClick}">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="${faved?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 13.6 6.9 17.2l1.9-5.8L4 7.8h6.1z"></path></svg>
        </button>
        <button class="close-btn" onclick="closeModal()">✕</button>
      </div>
    </div>
    <div class="bc-body">
      <div class="bc-meta">
        <span><b>${isDynamic ? 'First published' : 'Edition'}</b> — ${bk.edition}</span>
        <span><b>Total copies</b> — ${bk.total}</span>
        <span><b>On shelf now</b> — ${bk.available}</span>
      </div>
      <p class="bc-desc">${bk.desc}</p>
      ${isDynamic ? `<p class="bc-desc" style="margin-top:-14px;"><a href="https://openlibrary.org${key}" target="_blank" rel="noopener noreferrer" style="color:var(--pine); font-family:'IBM Plex Mono', monospace; font-size:0.78rem;">View on Open Library ↗</a></p>` : ''}
      <div class="stamp ${isAvail ? 'avail':'gone'}">${isAvail ? `${bk.available} of ${bk.total} available` : 'All copies checked out'}</div>
      <div class="reserve-row" id="reserveRow">
        ${isAvail
          ? `<button class="reserve-btn" onclick="${reserveClick}">Reserve this copy</button>`
          : `<button class="reserve-btn" disabled>Reserve this copy</button><span class="confirm-msg" style="color:var(--gone)">Join the waitlist at the circulation desk.</span>`
        }
      </div>
    </div>
  `;
}

function reserveBook(){
  const card = document.getElementById('bookCard');
  const branchId = card.dataset.branch, subjectId = card.dataset.subject, index = Number(card.dataset.index);
  const b = findBranch(branchId);
  const s = findSubject(b, subjectId);
  const bk = s.books[index];
  if(bk.available > 0){
    bk.available -= 1;
    renderBookCard(bk);
    const row = document.getElementById('reserveRow');
    row.innerHTML = `<span class="confirm-msg">✓ Reserved — pick up at the circulation desk within 24 hours, or it automatically returns to stock.</span>`;

    // Schedule an automatic return to stock if the copy isn't collected in time.
    const timeoutId = setTimeout(()=>{ expireReservation(branchId, subjectId, index); }, RESERVATION_HOLD_MS);
    activeReservations.push({ type:'local', branchId, subjectId, index, expiresAt: Date.now() + RESERVATION_HOLD_MS, timeoutId });

    refreshCurrentView();
  }
}

/* Same reservation flow, for a book sourced live from Open Library. */
function reserveDynamicBook(){
  const card = document.getElementById('bookCard');
  const slug = card.dataset.slug, key = card.dataset.key;
  const stock = getDynamicStock(slug, key);
  if(stock.available > 0){
    stock.available -= 1;

    const works = categoryCache[slug] || [];
    const w = works.find(x=>x.key===key);
    const author = (w && w.authors && w.authors.length) ? w.authors.map(a=>a.name).join(', ') : 'Unknown author';
    renderBookCard({
      title: w ? w.title : '',
      author,
      edition: w && w.first_publish_year ? `First published ${w.first_publish_year}` : 'Edition unknown',
      call: `OL · ${key.replace('/works/','')}`,
      total: stock.total,
      available: stock.available,
      desc: 'Catalogued live via the Open Library API — full descriptions aren\u2019t provided by this source record. Use "View on Open Library" for the full listing.'
    });
    const row = document.getElementById('reserveRow');
    row.innerHTML = `<span class="confirm-msg">✓ Reserved — pick up at the circulation desk within 24 hours, or it automatically returns to stock.</span>`;

    const timeoutId = setTimeout(()=>{ expireReservation(null, null, null, slug, key); }, RESERVATION_HOLD_MS);
    activeReservations.push({ type:'dynamic', slug, key, expiresAt: Date.now() + RESERVATION_HOLD_MS, timeoutId });

    refreshCurrentView();
  }
}

/* Called automatically 24 hours after a reservation if the book was never
   collected — puts the copy back into available stock for other users.
   Handles both local catalog books and live Open Library books. */
function expireReservation(branchId, subjectId, index, dynSlug, dynKey){
  const card = document.getElementById('bookCard');

  if(dynSlug){
    const stock = getDynamicStock(dynSlug, dynKey);
    stock.available = Math.min(stock.total, stock.available + 1);
    activeReservations = activeReservations.filter(r=>!(r.type==='dynamic' && r.slug===dynSlug && r.key===dynKey));
    if(card && card.dataset.sourceType==='dynamic' && card.dataset.slug===dynSlug && card.dataset.key===dynKey){
      openDynamicBook(dynSlug, dynKey);
    }
    refreshCurrentView();
    return;
  }

  const branch = findBranch(branchId);
  const subject = branch ? findSubject(branch, subjectId) : null;
  const bk = subject ? subject.books[index] : null;
  if(!bk) return;

  bk.available = Math.min(bk.total, bk.available + 1);
  activeReservations = activeReservations.filter(r=>
    !(r.type==='local' && r.branchId===branchId && r.subjectId===subjectId && r.index===index)
  );

  // If the same book's detail card is open, refresh it to show it's available again.
  if(card && card.dataset.sourceType==='local' && card.dataset.branch===branchId && card.dataset.subject===subjectId && Number(card.dataset.index)===index){
    renderBookCard(bk);
  }

  refreshCurrentView();
}

/* Re-renders whichever list view is currently on screen so stock counts stay accurate. */
function refreshCurrentView(){
  if(state.view==='books'){
    document.getElementById('main').innerHTML = renderBooks();
  } else if(state.view==='branches'){
    const input = document.getElementById('bookSearchInput');
    if(input && input.value.trim()) handleBookSearch(input.value);
  } else if(state.view==='favourites'){
    document.getElementById('main').innerHTML = renderFavourites();
  } else if(state.view==='category' && state.categorySlug && categoryCache[state.categorySlug]){
    renderCategoryBooks(state.categorySlug, categoryCache[state.categorySlug]);
  }
}

function closeModal(){
  document.getElementById('overlay').classList.remove('open');
}

/* ---------------- SIGN-IN MODAL ---------------- */
function openSignIn(){
  document.getElementById('signinOverlay').classList.add('open');
}
function closeSignIn(){
  document.getElementById('signinOverlay').classList.remove('open');
  document.getElementById('signinForm').reset();
  document.getElementById('signinForm').style.display = '';
  document.getElementById('signinResult').innerHTML = '';
}
function handleSignIn(e){
  e.preventDefault();
  const roll = document.getElementById('rollNo').value.trim();
  const form = document.getElementById('signinForm');
  const result = document.getElementById('signinResult');
  form.style.display = 'none';
  result.innerHTML = `<div class="signin-confirm">✓ Signed in as ${roll || 'member'} — welcome back.</div>`;

  account.signedIn = true;
  account.name = roll || 'Account';
  renderAccountArea();

  setTimeout(()=>{ closeSignIn(); }, 900);
  return false;
}

document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ closeModal(); closeSignIn(); }
});

/* ---------------- INIT ---------------- */
render();