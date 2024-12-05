document.addEventListener('DOMContentLoaded', function () {
            const tabs = document.querySelectorAll('.tab-link');
            const contents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));

                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.remove('active'));

                    this.classList.add('active');
                    target.classList.add('active');
                });
            });

            
            document.getElementById('increase-font').addEventListener('click', function () {
                document.body.style.fontSize = 'larger';
            });

            document.getElementById('decrease-font').addEventListener('click', function () {
                document.body.style.fontSize = 'smaller';
            });

            document.getElementById('high-contrast').addEventListener('click', function () {
                document.body.classList.toggle('high-contrast');
            });

            document.getElementById('color-blind').addEventListener('change', function () {
                document.body.classList.remove('color-blind-acromatic', 'color-blind-dichromatic', 'color-blind-trichromatic');
                if (this.value) {
                    document.body.classList.add(this.value);
                }
            });

            document.getElementById("postar-trabalho").addEventListener("click", function() { 
                window.location.href = "index.html";  
            });

            document.getElementById("enviar-contato").addEventListener("click", function() { 
                window.location.href = "index.html";  
            });
        });


       