
const counters = document.querySelectorAll('.achievement-number');
let started = false; 

function startCount() {
    counters.forEach(counter => {
        const target = Number(counter.getAttribute('data-target'));
        const originalText = counter.textContent;

        let suffix = "";
        if (originalText.includes("+")) suffix = "+";
        if (originalText.includes("%")) suffix = "%";

        let count = 0;
        const speed = 50; 
        const updateCount = () => {
            if (count < target) {
                count++;
                counter.textContent = count + suffix;
                setTimeout(updateCount, speed);
            } else {
                counter.textContent = target + suffix;
            }
        };

        updateCount();
    });
}


const achievementsSection = document.querySelector('.achievements-section');
const observer = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting && !started) {
            startCount();
            started = true;
        }
    },
    { threshold: 0.64 }
);

observer.observe(achievementsSection);
