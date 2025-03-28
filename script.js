document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".image-container").forEach(container => {
        const img = container.querySelector(".hero-img");
        const text = container.querySelector(".image-text");

        container.addEventListener("mouseenter", () => {
            gsap.to(".image-container", { opacity: 0.2, duration: 0.3 });
            gsap.to(container, { opacity: 1, duration: 0.3 });
            gsap.to(text, { opacity: 1, duration: 0.3 });
        });

        container.addEventListener("mouseleave", () => {
            gsap.to(".image-container", { opacity: 1, duration: 0.3 });
            gsap.to(text, { opacity: 0, duration: 0.3 });
        });

        container.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) * 0.7;
            const y = (e.clientY - top - height / 2) * 0.7;
            gsap.to(img, { x, y, duration: 0.3 });
            gsap.to(text, { x, y, duration: 0.3 });
        });

        container.addEventListener("mouseleave", () => {
            gsap.to(img, { x: 0, y: 0, duration: 0.3 });
            gsap.to(text, { x: 0, y: 0, duration: 0.3 });
        });
    });
});
