const guestForm = document.querySelector('form');
    if (guestForm) {
        guestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = guestForm.querySelector('input[name="nama"]');
            if (!nameInput.value.trim()) {
                alert('Nama Lengkap harus diisi.');
                nameInput.focus();
                return;
            }
            const now = new Date();
            const timestamp = now.toLocaleString('id-ID', {dateStyle: 'full', timeStyle: 'short' });
            alert(`Terima kasih, ${nameInput.value}, telah mengisi buku tamu pada ${timestamp}!`);
            guestForm.reset();
        });
    }

    var slider = document.getElementById("myRange");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function(){
        output.innerHTML = this.value;
    }
    slider.addEventListener("mousemove", function(){
        var x = slider.value;
        var color = 'linear-gradient(90deg, rgb(255, 0, 255)' + x +'%, rgb(214,214,214)' + x + '%)';
        slider.style.background = color;
    })

function toggleMenu() {
    const menu = document.querySelector("#menu ul");
    menu.classList.toggle("show");
}
