const container = document.querySelector('.fullscreen-content');
const image = container.querySelector('.fullscreen-image');

container.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = container.getBoundingClientRect();
  const x = (e.clientX - left) / width * 100;
  const y = (e.clientY - top) / height * 100;

  image.style.transformOrigin = `${x}% ${y}%`;
  image.style.transition = '0.3s ease';
  image.style.transform = 'scale(1.3)';
});

container.addEventListener('mouseleave', () => {
	image.style.transition = '0.3s ease';
  image.style.transform = 'scale(1)';
});
