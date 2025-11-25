window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
});

const portfolioItems = [
    {
        category: "short-form",
        thumb: "assets/short1.jpg",
        video: "videos/short1.mp4",
        label: "Short Form Edit"
    },
    {
        category: "long-form",
        thumb: "assets/long1.jpg",
        video: "videos/long1.mp4",
        label: "Long Form Documentary"
    },
    {
        category: "gaming",
        thumb: "assets/game1.jpg",
        video: "videos/game1.mp4",
        label: "Gaming Montage"
    },
    // ADD MORE items here…
];
function loadPortfolio() {
    const grid = document.querySelector(".portfolio-grid");

    portfolioItems.forEach(item => {
        grid.innerHTML += `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.thumb}" alt="Portfolio">
                <div class="portfolio-overlay">
                    <span class="portfolio-category">${item.category}</span>
                    <h3>${item.label}</h3>
                </div>
            </div>
        `;
    });
}
loadPortfolio();

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Portfolio Data
    const portfolioItems = [
        {
            id: 1,
            title: "Viral TikTok Edit",
            category: "short-form",
            thumbnail: "http://static.photos/technology/640x360/1",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Cinematic Travel Video",
            category: "long-form",
            thumbnail: "http://static.photos/travel/640x360/2",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 3,
            title: "Valorant Montage",
            category: "gaming",
            thumbnail: "http://static.photos/gaming/640x360/3",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 4,
            title: "Football Highlights",
            category: "football",
            thumbnail: "http://static.photos/sport/640x360/4",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 5,
            title: "E-Commerce Product Ad",
            category: "ecommerce",
            thumbnail: "http://static.photos/retail/640x360/5",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 6,
            title: "Environmental Documentary",
            category: "documentary",
            thumbnail: "http://static.photos/nature/640x360/6",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 7,
            title: "Color Grading Demo",
            category: "color-grading",
            thumbnail: "http://static.photos/minimal/640x360/7",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 8,
            title: "Anime AMV",
            category: "anime",
            thumbnail: "http://static.photos/abstract/640x360/8",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 9,
            title: "Brand Commercial",
            category: "ads",
            thumbnail: "http://static.photos/office/640x360/9",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 10,
            title: "Instagram Reel",
            category: "short-form",
            thumbnail: "http://static.photos/people/640x360/10",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 11,
            title: "YouTube Video Essay",
            category: "long-form",
            thumbnail: "http://static.photos/education/640x360/11",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 12,
            title: "CS:GO Fragmovie",
            category: "gaming",
            thumbnail: "http://static.photos/gaming/640x360/12",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
    ];

    // Initialize Portfolio
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item fade-in';
            portfolioItem.setAttribute('data-category', item.category);
            portfolioItem.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <span class="portfolio-category">${item.category.replace('-', ' ')}</span>
                    <h3 class="text-white font-bold">${item.title}</h3>
                </div>
            `;
            portfolioItem.addEventListener('click', () => openVideoModal(item.videoUrl));
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    // Filter Portfolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            const filter = button.getAttribute('data-filter');
            if (filter === 'all') {
                renderPortfolio(portfolioItems);
            } else {
                const filteredItems = portfolioItems.filter(item => item.category === filter);
                renderPortfolio(filteredItems);
            }
        });
    });

    // Video Modal
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.getElementById('closeModal');
    
    function openVideoModal(videoUrl) {
        modalVideo.src = videoUrl;
        videoModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }
    
    function closeVideoModal() {
        modalVideo.src = '';
        videoModal.classList.remove('visible');
        document.body.style.overflow = '';
    }
    
    closeModal.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Initialize portfolio on load
    renderPortfolio(portfolioItems);
});

// Form Submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();

    // Scroll animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

// Attach observer to animation classes
document.querySelectorAll(".fade-in, .slide-up").forEach(el => observer.observe(el));
});