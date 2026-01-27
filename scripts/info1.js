function toggleMute() {
  const video = document.getElementById('infoVideo');
  const icon = document.getElementById('volumeIcon');

  video.muted = !video.muted;
  icon.classList.toggle('fa-volume-high', !video.muted);
  icon.classList.toggle('fa-volume-xmark', video.muted);
}