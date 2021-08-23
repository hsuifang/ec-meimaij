export default {
  mounted(el) {
    const menu = el.querySelector('.dropdown-menu');
    let isOpen = false;
    function handleLeave() {
      if (!isOpen) {
        return;
      }
      isOpen = false;
      menu.classList.remove('show');
    }
    function handleOpen() {
      if (isOpen) {
        return;
      }
      isOpen = true;
      menu.classList.add('show');
    }
    el.addEventListener('mouseenter', handleOpen);
    el.addEventListener('mouseleave', handleLeave);
  },
};
