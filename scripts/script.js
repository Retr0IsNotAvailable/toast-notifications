let toastBox = document.querySelector('.js-toastBox');

const successMsg = '<i class="fa-solid fa-circle-check"></i>'
  + '  Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i>'
  + ' An unexpected error has occcured';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>'
  + ' Invalid submission';

function showToast(msg) {
  let toast = document.createElement('DIV');
  toast.classList.add('toast');
  toast.innerHTML = msg;

  if (msg.includes('error')) {
    toast.classList.add('error');
  }
  if (msg.includes('Invalid')) {
    toast.classList.add('invalid');
  }

  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000);
}