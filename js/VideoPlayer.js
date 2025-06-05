// Конфигурация селекторов и классов
const selectors = {
  root: '[data-js-video-player]',
  videoWrapper: '[data-js-video-wrapper]',
  video: '[data-js-video-player-video]',
  panel: '[data-js-video-player-content]',
  playButton: '[data-js-video-player-play-button]',
};

const stateClasses = {
  isActive: 'is-active',
};

// Инициализация одного видеоплеера
function initVideoPlayer(rootElement) {
  const videoWrapperElement = rootElement.querySelector(selectors.videoWrapper);
  const videoElement = rootElement.querySelector(selectors.video);
  const panelElement = rootElement.querySelector(selectors.panel);
  const playButtonElement = rootElement.querySelector(selectors.playButton);

  // Обработчики событий
  function onPlayButtonClick() {
    videoElement.play();
    videoElement.controls = true;
    videoWrapperElement.classList.add('modified');
    panelElement.classList.remove(stateClasses.isActive);
  }

  function onVideoPause() {
    videoElement.controls = false;
    videoWrapperElement.classList.remove('modified');
    panelElement.classList.add(stateClasses.isActive);
  }

  // Привязка событий
  playButtonElement.addEventListener('click', onPlayButtonClick);
  videoElement.addEventListener('pause', onVideoPause);
}

// Инициализация всех видеоплееров на странице
function setupVideoPlayers() {
  const players = [];
  
  document.querySelectorAll(selectors.root).forEach((element) => {
    players.push(initVideoPlayer(element));
  });

  return players;
}

export default setupVideoPlayers;