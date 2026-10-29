export function createActionButton(icon, action, label, player) {
  let button = document.createElement('button');
  button.type = 'button';
  button.className = 'sidebar-action ' + action + ' inline-flex items-center justify-center size-[27px] border border-[#35505a] rounded-[7px] bg-[#102731] text-white text-xs hover:bg-[#21424d] hover:border-[#c7a95b]';
  button.title = label;
  button.setAttribute('aria-label', label + ' ' + player.name);
  button.innerHTML = '<i aria-hidden="true" class="fa-solid fa-' + icon + '"></i>';
  return button;
}
