<script src="scripts.js"></script>
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('محصول به سبد خرید افزوده شد!');
        });
    });
});
