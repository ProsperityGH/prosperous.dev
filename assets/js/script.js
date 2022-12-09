function showPage(pageId, data=null) {
    let page = "";
    switch(pageId) {
      case 1: page += 
        '<div class="container"> \
            <div id="myname"> \
                <h1>Prosper van den Berg</p> \
            </div> \
            <div id="sidebar"> \
                <p>Web Developer / Student / Human</p> \
            </div> \
            <div id="menu"> \
                <p onclick="showAbout()">About</p> \
                <p onclick="showProjects()">Projects</p> \
                <p onclick="showContact()">Contact</p> \
                <a href="assets/pdf/CV.pdf" target="_blank">Resume</a> \
            </div> \
            <div id="socials"> \
            <a href="https://github.com/ProsperityGH" target="_blank"> \
                <i class="fa fa-github fa-2x" style="color: white;"></i> \
            </a> \
            <a href="https://www.linkedin.com/in/prospervandenberg/" target="_blank"> \
                <i class="fa fa-linkedin fa-2x" style="color: white;"></i> \
            </a> \
            </div> \
        </div>\
        '
  
      break;
      case 2: page += 
      '<h1 class="backButton" onclick="showHome()"> < </h1> \
      <h1 class="title"> About. </h1> \
      <div class="about"> \
        <p>I am Prosper van den Berg, I am 17 years old and I live in The Netherlands. \
        <p>I am currently a student for Grafisch Lyceum Utrecht and I am in my second year of doing so.</p> \
        <p>After I graduate as Web Developer I want to continue learning about Web Development. Mainly Front-end Development.</p> \
        <div id="skills"> \
            <div id="hardskills"> \
            <h2>Hard Skills</h2> \
                <p>• HTML(5)</p>\
                <p>• CSS(3)</p>\
                <p>• SASS/SCSS</p>\
                <p>• JS/TS</p>\
                <p>• Python</p>\
                <p>• Lua</p>\
                <p>• PHP</p>\
                <p>• SQL</p>\
            </div> \
            <div id="softskills"> \
            <h2>Soft Skills</h2> \
                <p> • Teamwork </p> \
                <p> • Communication </p> \
                <p> • Critical thinking & problem solving</p> \
                <p> • Creativity</p> \
                <p> • Attention to detail </p> \
                <p> • Adaptability </p> \
            </div> \
        </div> \
      </div> \
      '
  
      break;
      case 3: page += 
      '<h1 class="backButton" onclick="showHome()"> < </h1> \
      <h1 class="title"> Projects. </h1> \
      <div class="about"> \
      <p>There are a lot of projects I have worked on. Mostly are school projects but I do like working on my own projects in my free time.</p> \
      <p>Here are some projects I have made.</p> \
        <div id="repos"> \
            <p onclick="showDuckhunt()">HTML5 Duckhunt.</p> \
            <p onclick="showTheme()">My VSCode Theme.</p> \
            <p onclick="showTemplate()">Discord.js Template.</p> \
            <p onclick="showPeter()" id="petergriffin">petergriffin.nl</p> \
        </div> \
        <p class="bottompage"> To see all my projects, Check out my GitHub page by clicking the GitHub icon on the front page.</p> \
      </div> \
      '
      
      break;
      case 4: page += 
      '<h1 class="backButton" onclick="showHome();"> < </h1> \
      <h1 class="title"> Contact. </h1> \
      <div class="about"> \
        <h2>Get in touch</h2> \
        <h3 id="thanks">Thanks for contacting :)</h3> \
            <div id="form"> \
                <input type="text" id="name" placeholder="Full name" required> \
                <input type="text" id="email" placeholder="Email" required> \
                <input type="text" id="subject" placeholder="Subject" required> \
                <textarea id="message" placeholder="Message" rows="4"x required></textarea> \
                <button type="submit" id="button" onclick="sendEmail()">Send</button> \
            </div> \
      </div> \
      '

      break;
      case 5: page += 
      '<h1 class="backButton" onclick="showProjects();"> < </h1> \
      <h1 class="title"> Duckhunt. </h1> \
      <div class="about"> \
        <p>Welcome to duckhunt!, made with HTML5/SCSS/JS/PHP, Shoot as many ducks as you can.</p> \
        <p>Everytime you shoot there is cooldown of half a second, Good luck!.</p> \
        <p>Capable of storing highscores in a .txt file to save for another time or game.</p> <br> \
        <p>Click on the GitHub Repo card to look at the repository.</p> \
        <img src="https://raw.githubusercontent.com/ProsperityGH/Duckhunt/main/screenshots/screenshot2.png" alt="Duckhunt screenshot"> \
        <iframe id="ghcard-ProsperityGH-1" frameborder="0" scrolling="0" allowtransparency="true" src="//cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=ProsperityGH&amp;identity=ghcard-ProsperityGH-1&amp;repo=Duckhunt" width="320" height="155"></iframe> \
      </div> \
      '

      break;
      case 6: page += 
      '<h1 class="backButton" onclick="showProjects();"> < </h1> \
      <h1 class="title"> VSCode Theme. </h1> \
      <div class="about"> \
        <p>My custom Visual Studio Code Theme.</p> \
        <p>Can be installed on the visual studio marketplace or click <a href="https://marketplace.visualstudio.com/items?itemName=Prosperity.prosperity-theme" target="_blank"> here</a> to go to the extension page.</p> \
        <p>Click on the GitHub Repo card to look at the repository.</p> <br>\
        <iframe id="ghcard-ProsperityGH-2" frameborder="0" scrolling="0" allowtransparency="true" src="//cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=ProsperityGH&amp;identity=ghcard-ProsperityGH-1&amp;repo=Prosperity-VSCode-Theme" width="320" height="155"></iframe> \
      </div> \
      '

      break;
      case 7: page += 
      '<h1 class="backButton" onclick="showProjects();"> < </h1> \
      <h1 class="title"> Discord.js Bot Template. </h1> \
      <div class="about"> \
        <p>An older Discord.js v13 Bot Template for making Discord Bots with JavaScript and NodeJS.</p> <br>\
        <p>Click on the GitHub Repo card to look at the repository.</p> \
        <iframe id="ghcard-ProsperityGH-3" frameborder="0" scrolling="0" allowtransparency="true" src="//cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=ProsperityGH&amp;identity=ghcard-ProsperityGH-1&amp;repo=Discord.js-Bot-Template" width="320" height="155"></iframe> \
      </div> \
      '

      break;
      case 8: page += 
      '<h1 class="backButton" onclick="showProjects();"> < </h1> \
      <h1 class="title"> petergriffin.nl </h1> \
      <div class="about"> \
        <p>A very wide image and responsive page of Peter Griffin from Family Guy.</p> \
        <p>Click on him for a suprise!.</p> <br> \
        <p>Click on the GitHub Repo card to look at the repository.</p> \
        <audio id="audio" src="assets/mp3/laugh1.mp3"></audio> \
        <img id="peter" src="assets/img/petergriffin.png" alt="Peter Griffin"> \
        <iframe id="ghcard-ProsperityGH-4" frameborder="0" scrolling="0" allowtransparency="true" src="//cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=ProsperityGH&amp;identity=ghcard-ProsperityGH-1&amp;repo=petergriffin.nl" width="320" height="155"></iframe> \
      </div> \
      '
    }
    document.body.innerHTML = page;
}

function showHome() { 
    showPage(1);
}

function showAbout() {
    showPage(2);
}

function showProjects() {
    showPage(3);
}

function showContact() {
    showPage(4);
}

function showDuckhunt() {
    showPage(5);
}

function showTheme() {
    showPage(6);
}

function showTemplate() {
    showPage(7);
}

function showPeter() {
    showPage(8);

    document.getElementById("peter").addEventListener("click", function(){
        document.getElementById("audio").play();
    });
}

function sendEmail(params) {
    var tempParams ={
        from_name: document.getElementById('name').value,
        about: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('email', 'email', tempParams)
    .then(function(res){
        console.log("succes", res.status);
    })

    document.getElementById('thanks').style.cssText = 'opacity: 1';

    document.getElementById("button").disabled = true;
}