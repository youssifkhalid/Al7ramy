document.addEventListener("DOMContentLoaded", () => {

    // --- DATABASE ---
    const DATA = {
        subjects: {
            arabic: "اللغة العربية",
            english: "اللغة الإنجليزية",
            chemistry: "الكيمياء"
        },
        teachers: {
            arabic: [
                {
                    name: "محمد صلاح",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mypBoIGoTRltea2C9xOcI9bTwK88KVEJccYCwBtuUQ&s=10",
                    subject: "اللغة العربية"
                }
            ],
            chemistry: [
                {
                    name: "خالد صقر",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CngN8C3oczaKKVuWNeOX6r0BD4mvrImsWsI0wcLmIQ&s=10",
                    subject: "الكيمياء"
                }
            ],
            english: [
                {
                    name: "مس مي",
                    image: "images/mai.jpg",
                    subject: "اللغة الإنجليزية"
                }
            ]
        },
        lessons: {
            "مس مي": [
                {
                    title: "كورس التأسيس - تعلم الأزمنة",
                    duration: "4 فيديوهات",
                    date: "كورس تأسيس",
                    videos: [
                        { title: "تعلم كل الأزمنة البسيطة", url: "https://www.youtube.com/embed/LT3DbHcLwQU" },
                        { title: "تعلم الأزمنة المستمرة", url: "https://www.youtube.com/embed/M81oHwySTjk" },
                        { title: "تعلم الأزمنة التامة", url: "https://www.youtube.com/embed/k6uEWk6Mbpg" },
                        { title: "جميع أزمنة اللغة الإنجليزية", url: "https://www.youtube.com/embed/TAnsEhpyPYA" }
                    ]
                }
            ],
            "محمد صلاح": [
                {
                    title: "المحاضرة الأولى",
                    duration: "4 أجزاء",
                    date: "2025-03-01",
                    videos: [
                        { title: "النحو - الجزء الأول", url: "https://www.youtube.com/embed/tZN0aJ-Pau4" },
                        { title: "تدريبات النحو - الجزء الثاني", url: "https://www.youtube.com/embed/oE_wwjCoPrY" },
                        { title: "الأدب - الجزء الثالث", url: "https://www.youtube.com/embed/VqjMs9NES1I" },
                        { title: "تدريبات الأدب - الجزء الرابع", url: "https://www.youtube.com/embed/Jh0-Nhbywd4" }
                    ]
                }
            ],
            "خالد صقر": [
                {
                    title: "ورشة الباب الأول (العناصر الانتقالية)",
                    duration: "3 أجزاء",
                    date: "ورش عمل",
                    videos: [
                        { title: "الجزء الأول", url: "https://www.youtube.com/embed/Mt_ej0zcvNc" },
                        { title: "الجزء الثاني", url: "https://www.youtube.com/embed/IL-byV1gkbM" },
                        { title: "الجزء الثالث", url: "https://www.youtube.com/embed/r-pKj4pyPKM" }
                    ]
                }
            ]
        }
    };

    // --- THEME HANDLER ---
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
        } else {
            body.classList.remove("dark-mode");
            themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
        }
    };

    themeToggle?.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });

    applyTheme(localStorage.getItem("theme") || "light");

    // --- WHATSAPP BUTTON ---
    document.getElementById("whatsappBtn")?.addEventListener("click", () => {
        window.open("https://wa.me/+201092812463", "_blank");
    });

    // --- URL PARAMETERS ---
    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const teacherName = params.get("teacher");
    const lessonIndex = params.get("lesson");

    // --- HOME PAGE ---
    if (document.getElementById("homePage")) {
        document.querySelectorAll(".tab-btn").forEach((tab) => {
            tab.addEventListener("click", () => {
                const dept = tab.dataset.department;
                document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
                tab.classList.add("active");

                document.querySelectorAll(".subjects-grid").forEach((grid) => {
                    grid.classList.toggle("active", grid.dataset.department === dept);
                });
            });
        });
    }

    // --- TEACHERS PAGE ---
    if (document.getElementById("teachersPage") && subject) {
        const teachersGrid = document.getElementById("teachersGrid");
        const title = document.getElementById("teachersPageTitle");
        const teachers = DATA.teachers[subject] || [];

        title.textContent = `مدرسو ${DATA.subjects[subject] || "المادة"}`;
        teachersGrid.innerHTML =
            teachers.length > 0
                ? teachers
                      .map(
                          (t) => `
                    <a href="lessons.html?subject=${subject}&teacher=${encodeURIComponent(t.name)}" class="teacher-card">
                        <img src="${t.image}" alt="${t.name}" onerror="this.src='https://ui-avatars.com/api/?name=${t.name.split(' ').join('+')}&background=random';">
                        <h3>${t.name}</h3>
                        <p>${t.subject}</p>
                    </a>`
                      )
                      .join("")
                : `<p class="subtitle">لا يوجد مدرسون لهذه المادة حالياً.</p>`;
    }

    // --- LESSONS PAGE ---
    if (document.getElementById("lessonsPage") && subject && teacherName) {
        const list = document.getElementById("lessonsList");
        const title = document.getElementById("lessonsPageTitle");
        const backBtn = document.getElementById("backToTeachers");
        const lessons = DATA.lessons[teacherName] || [];

        title.textContent = `دروس ${teacherName}`;
        backBtn.onclick = () => (location.href = `teachers.html?subject=${subject}`);

        list.innerHTML =
            lessons.length > 0
                ? lessons
                      .map(
                          (l, i) => `
                    <a href="video.html?subject=${subject}&teacher=${encodeURIComponent(teacherName)}&lesson=${i}" class="lesson-card">
                        <div class="lesson-number">${i + 1}</div>
                        <div class="lesson-info">
                            <h3>${l.title}</h3>
                            <div class="lesson-meta">
                                <span><i class="far fa-clock"></i> ${l.duration}</span>
                                <span><i class="far fa-calendar"></i> ${l.date}</span>
                            </div>
                        </div>
                        <div class="lesson-icon"><i class="fas fa-play-circle"></i></div>
                    </a>`
                      )
                      .join("")
                : `<p class="subtitle">لا توجد دروس متاحة لهذا المدرس حاليًا.</p>`;
    }

    // --- VIDEO PAGE ---
    if (document.getElementById("videoPage") && teacherName && lessonIndex !== null) {
        const lesson = DATA.lessons[teacherName]?.[lessonIndex];
        if (!lesson) return;

        const videoTitle = document.getElementById("videoTitle");
        const videoTeacher = document.getElementById("videoTeacher");
        const videoContainer = document.getElementById("videoPlayerContainer");
        const listContainer = document.getElementById("videoListContainer");
        const backBtn = document.getElementById("backToLessons");

        backBtn.onclick = () =>
            (location.href = `lessons.html?subject=${subject}&teacher=${encodeURIComponent(teacherName)}`);

        // ✅ تحميل الفيديو (حل نهائي لمشكلة fullscreen)
        const loadVideo = (index) => {
            const video = lesson.videos[index];
            if (!video) return;

            videoContainer.innerHTML = `
                <iframe
                    id="videoPlayer"
                    width="750"
                    height="422"
                    src="${video.url}"
                    title="${video.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>`;

            videoTitle.textContent = lesson.title;
            videoTeacher.textContent = `${teacherName} - ${video.title}`;

            document.querySelectorAll(".video-list-item").forEach((item, i) => {
                item.classList.toggle("active", i === index);
            });
        };

        // ✅ بناء قائمة الفيديوهات
        listContainer.innerHTML = lesson.videos
            .map(
                (v, i) => `
            <div class="video-list-item" data-index="${i}">
                <div class="video-list-number">${i + 1}</div>
                <div class="video-list-info"><h4>${v.title}</h4></div>
                <div class="video-list-play"><i class="fas fa-play-circle"></i></div>
            </div>`
            )
            .join("");

        // ✅ تفعيل الضغط على الفيديوهات
        listContainer.querySelectorAll(".video-list-item").forEach((item) => {
            item.addEventListener("click", () => {
                loadVideo(parseInt(item.dataset.index));
            });
        });

        // ✅ تحميل أول فيديو افتراضيًا
        loadVideo(0);
    }
});
