// Dữ liệu điểm đến
const destinations = [
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Thiên đường biển nhiệt đới với những bãi cát trắng tuyệt đẹp."
  },
  {
    name: "Paris, Pháp",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    description: "Thành phố ánh sáng, nổi tiếng với tháp Eiffel và văn hóa lãng mạn."
  },
  {
    name: "Tokyo, Nhật Bản",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=600&q=80",
    description: "Sự kết hợp tuyệt vời giữa truyền thống và hiện đại."
  },
  {
    name: "Đà Lạt, Việt Nam",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm."
  },
  {  
    name: "New York, Mỹ",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80",
    description: "Thành phố không bao giờ ngủ, trung tâm tài chính và giải trí."
  },
  {
    name: "Nam Định, Việt Nam",
    image: "/Users/tuancai/Pictures/Photos Library.photoslibrary/originals/4/4DBC66D7-7FED-41FD-BFD3-F058CEAA6506.webp",
    description: "Nổi tiếng với Nhà thờ lớn và các bãi biển đẹp"
  },
];

// Hiển thị danh sách điểm đến
const destinationsContainer = document.querySelector('.destinations-container');
destinations.forEach(dest => {
  const card = document.createElement('div');
  card.classList.add('destination-card');
  card.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}" />
    <div class="destination-info">
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
    </div>
  `;
  destinationsContainer.appendChild(card);
});

// Slider ảnh
const slidesData = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
];

const slidesContainer = document.querySelector('.slides');

// Tạo ảnh slide vào DOM
slidesData.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Travel slide";
  slidesContainer.appendChild(img);
});

let currentIndex = 0;
const totalSlides = slidesData.length;

function updateSlidePosition() {
  const slideWidth = slidesContainer.offsetWidth;
  slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Xử lý nút điều hướng
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  });
}

// Tự động chuyển slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}, 4000);

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});

// Xử lý form đăng ký
const subscribeForm = document.getElementById('subscribeForm');
const subscribeStatus = document.getElementById('subscribeStatus');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = subscribeForm.querySelector('input[type="email"]').value;
  subscribeStatus.textContent = `Cảm ơn bạn đã đăng ký, ${email}!`;
  subscribeForm.reset();
  setTimeout(() => {
    subscribeStatus.textContent = '';
  }, 5000);
});
