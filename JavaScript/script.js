let body = document.querySelector("body");




// scroll Movement
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else (
            entry.target.classList.remove('show')
        )
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))





// dark Mode
let darkMode = () => {
    body.style.backgroundColor = '#666';
    document.getElementById('darkBtn').style.display = 'none';
    document.getElementById('lightBtn').style.display = 'block';
    let links = document.querySelectorAll(".link-border");
    links.forEach(link => {
        link.style.color = '#fff'
    })
    localStorage.setItem("Mode", "darkMode")
}
let lightMode = () => {
    body.style.backgroundColor = '#fff';
    document.getElementById('darkBtn').style.display = 'block';
    document.getElementById('lightBtn').style.display = 'none';
    let links = document.querySelectorAll(".link-border");
    links.forEach(link => {
        link.style.color = '#000'
    })
    localStorage.setItem("Mode", "lightMode")
}

if (localStorage.getItem("Mode") == 'darkMode') {
    darkMode()
} else (
    lightMode()
)


// form sent msg
const formSent = () => {
    let uName = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let tel = document.getElementById("tel").value;
    let msg = document.getElementById("msg").value;
    if (uName && mail.includes('@gmail.com') && mail.length > 8 && tel && msg) {
        document.getElementById("msgAfter").innerHTML = `Thank You ${uName} for you'r comment 	&#9829;`
        document.getElementById("msgAfter").style.color = "lightGreen"
    }

}

// video play
const videos = document.querySelectorAll('.video');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});


// phone navbar
let navCounter = 1
let openNav = () => {
    if (navCounter == 1) {
        document.querySelector('.phoneLinks').style.display = "block";
        document.querySelector(".phoneLinksContainer").style.display = "block";
        document.querySelector(".burger").style.display = " none";
        document.querySelector(".burger-open").style.display = " flex";
        return navCounter = 0
    } if (navCounter == 0) {
        document.querySelector('.phoneLinks').style.display = "none";
        document.querySelector(".phoneLinksContainer").style.display = "none";
        document.querySelector(".burger").style.display = " flex";
        document.querySelector(".burger-open").style.display = " none";
        navCounter = 1
    }
}




// open Theme
let flag = true
let openTheme = () => {

    if (flag == true) {
        document.querySelector(".themesGallery").style.display = "grid";
        return flag = false
    }

    if (flag == false) {
        document.querySelector(".themesGallery").style.display = "none"
        flag = true
    }
}


// open pc theme
let flag2 = true
let openPcTheme = () => {
    if (flag2 == true) {
        document.querySelector(".pc-themesGallery").style.display = "grid";
        return flag2 = false
    }

    if (flag2 == false) {
        document.querySelector(".pc-themesGallery").style.display = "none"
        flag2 = true
    }
}



// save info in localStorage
if (localStorage.getItem("theme") == "PC MODE") {
    document.querySelector('head').innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Icon" href="./gallery/Icon David.jpg">
    <title>JS Portfolio</title>

    <link rel="stylesheet" href="./sass/main.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./css/pcStyle.css">
        <script defer src="./JavaScript/script.js"></script>
    `;


    body.innerHTML = `
        <header class="pc-header">
        <div class="pc-themes"><button class="pc-themeBtn" onclick="openPcTheme()"><i
                    class="fa-solid fa-palette"></i></button>
        </div>
        <span>
            <img src="./gallery/Icon David.jpg" alt="Icon">
        </span>
        <aside class="pc-themesGallery">
            <div class="blocks">
                <button class="blocksBtn" onclick="origin()"><i
                        class="fa-solid fa-house-chimney-user"></i></button>
            </div>

        </aside>

        <nav class="pc-nav">
            <ul class="pc-ul">
                <li><button onclick="homePage()">Portfolio</button></li>
                <li class="projectsBtns">
                    <button onclick="projects()">Projects</button>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

    </header>

    
    <span>
        <img src="./gallery/codeMini.png" alt="miniCode">
    </span>

    <main class="pc-about-container">
    <div class="pc-toNone">
            <span>
                <img src="./gallery/fingerPrint.png" alt="fingerPrint">
            </span>
            <div class="about-content">
                <h2>DavidPolak</h2>

                <div class="main-text hidden">

                    <h3>I'm A FullStack Developer</h3>
                </div>
            </div>
            <span class="download-cv">
                <a href="#">Download CV</a>
            </span>
        </div>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>
    </main>


    <span class="copyright">
        <h4>&#169;DavidPolak</h4>
    </span>

    `
}




// theme mangement
let pcTheme = () => {
    localStorage.setItem("theme", "PC MODE")
    document.querySelector('head').innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="Icon" href="./gallery/Icon David.jpg">
    <title>JS Portfolio</title>

    <link rel="stylesheet" href="./sass/main.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./css/pcStyle.css">
        <script defer src="./JavaScript/script.js"></script>
    `;


    body.innerHTML = `
        <header class="pc-header">
        <div class="pc-themes"><button class="pc-themeBtn" onclick="openPcTheme()"><i
                    class="fa-solid fa-palette"></i></button>
        </div>
        <span>
            <img src="./gallery/Icon David.jpg" alt="Icon">
        </span>
        <aside class="pc-themesGallery">
            <div class="blocks">
                <button class="blocksBtn" onclick="origin()"><i
                        class="fa-solid fa-house-chimney-user"></i></button>
            </div>

        </aside>

        <nav class="pc-nav">
            <ul class="pc-ul">
                <li><button onclick="homePage()">Portfolio</button></li>
                <li class="projectsBtns">
                    <button onclick="projects()">Projects</button>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

    </header>
    <span>
        <img src="./gallery/codeMini.png" alt="miniCode">
    </span>

    <main class="pc-about-container">
        <div class="pc-toNone">
            <span>
                <img src="./gallery/fingerPrint.png" alt="fingerPrint">
            </span>
            <div class="about-content">
                <h2>DavidPolak</h2>

                <div class="main-text hidden">

                    <h3>I'm A FullStack Developer</h3>
                </div>
            </div>
            <span class="download-cv">
                <a href="#">Download CV</a>
            </span>
        </div>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>
    </main>


    <span class="copyright">
        <h4>&#169;DavidPolak</h4>
    </span>

    `



}







/* HOME PAGE BUTTON */
const homePage = () => {
    localStorage.removeItem("modeData")
    document.querySelector(".projectsBtns").innerHTML = `
    <button onclick="projects()">Projects</button>
    `

    document.querySelector("main").innerHTML = `<span>
            <img src="./gallery/fingerPrint.png" alt="fingerPrint">
        </span>
        <div class="about-content">
            <h2>DavidPolak</h2>

            <div class="main-text hidden">

                <h3>I'm A FullStack Developer</h3>
            </div>
        </div>
        <span class="download-cv">
            <a href="#">Download CV</a>
        </span>`
}





// PROJECTS BUTTON
function projects() {
    document.querySelector(".projectsBtns").innerHTML = `
    <button class="blue" onclick="projects()">CSS</button> &nbsp;&nbsp;&nbsp;
        <button class="orange" onclick="jsProjects()">JS</button>
    `
    document.querySelector("main").innerHTML = `<section id="pc-css-projects">
            <div class="pc-project one">
                <div class="overlay">
                    <a href="../html/inBetween/css-1.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></i></a>
                </div>
                1
            </div>
            <div class="pc-project two">
                <div class="overlay">
                    <a href="../html/inBetween/css-2.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                2
            </div>
            <div class="pc-project three">
                <div class="overlay">
                    <a href="../html/inBetween/css-3.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                3
            </div>
            <div class="pc-project four">
                <div class="overlay">
                    <a href="../html/inBetween/css-4.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                4
            </div>
        </section>
        <button class="btn next-btn" onclick="next()"> <i class="fa-solid fa-circle-right"></i> </button>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>`
}




// JS PROJECTS BUTTON
function jsProjects() {
    document.querySelector("main").innerHTML = `<section id="pc-css-projects">
            <div class="pc-js-project jsOne">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-1.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></i></a>
                </div>
                1
            </div>
            <div class="pc-js-project jsTwo">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-2.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                2
            </div>
            <div class="pc-js-project jsThree">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-3.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                3
            </div>
            <div class="pc-js-project jsFour">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-4.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                4
            </div>
        </section>
        <button class="js-btn next-btn" onclick="jsNext()"> <i class="fa-solid fa-circle-right"></i> </button>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>

        
        `
}

// next buton for css projects
function next() {
    document.querySelector("main").innerHTML = `<section id="pc-css-projects">
            <div class="pc-project five">
                <div class="overlay">
                    <a href="../html/inBetween/css-5.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></i></a>
                </div>
                5
            </div>
            <div class="pc-project six">
                <div class="overlay">
                    <a href="../html/inBetween/css-6.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                6
            </div>
            <div class="pc-project seven">
                <div class="overlay">
                    <a href="../html/inBetween/css-7.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                7
            </div>
            <div class="pc-project eight">
                <div class="overlay">
                    <a href="../html/inBetween/css-8.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                8
            </div>
        </section>
        <button class="btn next-btn" onclick="previous()"> <i class="fa-solid fa-circle-left"></i> </button>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>
        `
}

// previous buton for css projects
function previous() {
    document.querySelector("main").innerHTML = `<section id="pc-css-projects">
            <div class="pc-project one">
                <div class="overlay">
                    <a href="../html/inBetween/css-1.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></i></a>
                </div>
                1
            </div>
            <div class="pc-project two">
                <div class="overlay">
                    <a href="../html/inBetween/css-2.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                2
            </div>
            <div class="pc-project three">
                <div class="overlay">
                    <a href="../html/inBetween/css-3.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                3
            </div>
            <div class="pc-project four">
                <div class="overlay">
                    <a href="../html/inBetween/css-4.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                4
            </div>
        </section>
        <button class="btn next-btn" onclick="next()"> <i class="fa-solid fa-circle-right"></i> </button>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>
        `
}



// JS NEXT AND PREVIOUS
function jsNext() {

    document.querySelector("main").innerHTML = `<section id="pc-css-projects">
            <div class="pc-js-project jsFive">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-5.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></i></a>
                </div>
                5
            </div>
            <div class="pc-js-project jsSix">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-6.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                6
            </div>
            <div class="pc-js-project jsSeven">
                <div class="overlay">
                    <a href="#" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                7
            </div>
            <div class="pc-js-project jsEight">
                <div class="overlay">
                    <a href="#" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                8
            </div>
        </section>
        <button class="js-btn next-btn" onclick="jsPrevious()"> <i class="fa-solid fa-circle-left"></i> </button>
        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>
        `

}



function jsPrevious() {
    document.querySelector("main").innerHTML = `<section id="pc-css-projects">
            <div class="pc-js-project jsOne">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-1.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></i></a>
                </div>
                1
            </div>
            <div class="pc-js-project jsTwo">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-2.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                2
            </div>
            <div class="pc-js-project jsThree">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-3.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                3
            </div>
            <div class="pc-js-project jsFour">
                <div class="overlay">
                    <a href="../html/jsInBetween/js-4.html" class="overlay-link"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                4
            </div>
        </section>
        <button class="js-btn next-btn" onclick="jsNext()"> <i class="fa-solid fa-circle-right"></i> </button>

        <div class="notFound">
            <h1>404</h1>
            <h3>this theme can only reach to 730/900 px</h3>
            <h4>go back to the main theme: <button onclick="origin()">BACK</button></h4>
        </div>
        `

}





// a restart function 
function origin() {
    localStorage.removeItem("theme");
    history.go()
}







