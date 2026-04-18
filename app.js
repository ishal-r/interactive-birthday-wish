const clickSounds = {
  btn1: new Audio('pop.mp3'),
  btn2: new Audio('pop.mp3'),
  btn3: new Audio('pop.mp3'),
  btn4: new Audio('pop.mp3'),
  btn5: new Audio('pop.mp3'),
  btn6: new Audio('pop.mp3'),
  btnBack: new Audio('pop.mp3')  
};
clickSounds.btn1.volume  = 0.3;
clickSounds.btnBack.volume = 0.3;
clickSounds.btn2.volume  = 0.3;
clickSounds.btn3.volume  = 0.3;
clickSounds.btn4.volume  = 0.3;
clickSounds.btn5.volume  = 0.3;
clickSounds.btn6.volume  = 0.3;

const widget      = document.getElementById('widget');
const backBtn     = document.getElementById('btnBack');
const allBtns     = document.querySelectorAll('.btn');
const overlayText = document.getElementById('overlayText');
const overlay = document.getElementById('overlay');
const Texty = document.getElementById('Texty');

//audio can be changed
const musicg     = new Audio('ironlung.mp3');
musicg.loop      = false;
musicg.volume    = 0.5;

const bgMusic     = new Audio('Mitski.mp3');
bgMusic.loop      = false;
bgMusic.volume    = 0.5;
const homeBg = 'background.png';
let onHomepage = true;
  // starts on homepage
const pageMap = {
  btn1: 'new.gif',
  btn2: 'new.gif',
  btn3: 'gift content.png',
  btn4: 'letter.png',
  btn5: 'note.png',
  btn6: 'night.png' //crete a collage.jpg and add here (placeholder inserted)
};

// Helper to change background
function setBackground(image) {
  widget.style.background = `url('${image}') center/contain no-repeat`;
  onHomepage = (image === homeBg); 
}

// Hide all buttons except back
function showBackOnly() {
  allBtns.forEach(btn => {
    btn.style.display = (btn.id === 'btnBack') ? 'block' : 'none';
  });
}

// Show all buttons
function showAllButtons() {
  allBtns.forEach(btn => {
    btn.style.display = 'block';
  });
}

// Clear any overlay text
function clearOverlay() {
  overlayText.style.display = 'none';
  overlayText.textContent = '';
  overlay.style.display = 'none';
  overlay.textContent = '';
  Texty.style.display = 'none';
  Texty.textContent = '';
}
function stopMusic() {
  bgMusic.pause();
  bgMusic.currentTime = 15;

}

Object.entries(pageMap).forEach(([btnId, img]) => {
  document.getElementById(btnId).addEventListener('click', () => {
      if (clickSounds[btnId]) {
      clickSounds[btnId].currentTime = 1.75;
      clickSounds[btnId].play().catch(()=>{});
    } 
    setBackground(img);
 
    showBackOnly();
 
    clearOverlay();
    bgMusic.pause();
    musicg.pause();
    if (btnId === 'btn1' || btnId === 'btn2') { 
      bgMusic.currentTime = 15;  
      bgMusic.play().catch(()=>{});
    }
    else if (btnId === 'btn6') { 
      musicg.currentTime = 19.5;
      musicg.play().catch(()=>{});
    } 
    if (btnId === 'btn3') {
        overlayText.innerHTML = `
        <p>
            insert text/paragraph
        </p>`;
      overlayText.style.display = 'block';
      stopMusic();
    }

    if (btnId === 'btn4') {
        onHomepage = false
        overlay.innerHTML = `
        <p>
           insert text/paragraph
        </p>`;
      overlay.style.display = 'block';
      stopMusic();
    }    

    if(btnId === 'btn5')
    {
        Texty.innerHTML = `
        <p>
           insert text/paragraph 
        </p>`;
      Texty.style.display = 'block';
    }
    if (!(btnId === 'btn1' || btnId === 'btn2')){ stopMusic(); onHomepage=false;}

  });
});

// Handle back button
backBtn.addEventListener('click', () => {
    if (clickSounds.btnBack) {
    clickSounds.btnBack.currentTime = 1.75;
    clickSounds.btnBack.play().catch(()=>{});
  }
  
  // reset  
  setBackground(homeBg); 
  showAllButtons(); 
  clearOverlay();
  stopMusic();
  musicg.pause();
});
