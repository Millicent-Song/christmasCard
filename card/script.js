document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.getElementById('snow-container');
  const snowflakeCount = 150;

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${2 + Math.random() * 3}s`;
    snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
    snowContainer.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }

  for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake();
  }

  setInterval(createSnowflake, 200);
});
