// script.js (Modified - No Stats, Simplified Logic)
const DATA = {
    teachers: {
        arabic: [
            { 
                name: 'محمد صلاح', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mypBoIGoTRltea2C9xOcI9bTwK88KVEJccYCwBtuUQ&s=10', 
                subject: 'اللغة العربية' 
            }
        ],
        chemistry: [
            { 
                name: 'خالد صقر', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CngN8C3oczaKKVuWNeOX6r0BD4mvrImsWsI0wcLmIQ&s=10', 
                subject: 'الكيمياء' 
            }
        ],
        english: [
            {
                name: 'مس مي',
                image: 'mai.jpg',
                subject: 'اللغة الإنجليزية'
            }
        ]
    },
    lessons: {
        // 💬 دروس مس مي (Mai)
        'مس مي': [
            {
                title: 'كورس التأسيس - تعلم الأزمنة',
                duration: '4 فيديوهات',
                date: 'كورس تأسيس',
                videos: [
                    { 
                        title: 'تعلم كل الأزمنة البسيطة (الماضي البسيط - المضارع البسيط - المستقبل) | كورس تعلم اللغة الإنجليزية للاحتراف', 
                        url: 'https://www.youtube.com/embed/LT3DbHcLwQU', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'تعلم الأزمنة المستمرة (الماضي المستمر - المضارع المستمر - المستقبل المستمر) | كورس تعلم اللغة الإنجليزية', 
                        url: 'https://www.youtube.com/embed/M81oHwySTjk', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'تعلم الأزمنة التامة (الماضي التام - المضارع التام - المستقبل التام) | كورس تعلم و تأسيس اللغة الإنجليزية', 
                        url: 'https://www.youtube.com/embed/k6uEWk6Mbpg', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'جميع أزمنة اللغة الإنجليزية شرح + تطبيق | كورس تعلم و تأسيس اللغة الإنجليزية لجميع المراحل الدراسية', 
                        url: 'https://www.youtube.com/embed/TAnsEhpyPYA', 
                        duration: 'غير محدد' 
                    }
                ]
            },
            // --- المحاضرة الأولى ---
            {
                title: 'الوحدة الأولى - المحاضرة الأولى',
                duration: 'جزئين',
                date: '2025-03-01',
                videos: [
                    { 
                        title: 'الجزء الأول من المحاضرة الأولى', 
                        url: 'https://www.youtube.com/embed/v2so3TouI0M', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'الجزء الثاني من المحاضرة الأولى', 
                        url: 'https://www.youtube.com/embed/ffxvhR6YAdo', 
                        duration: 'غير محدد' 
                    }
                ]
            },
            // --- المحاضرة الثانية ---
            {
                title: 'الوحدة الأولى - المحاضرة الثانية',
                duration: '4 أجزاء',
                date: '2025-03-05',
                videos: [
                    { 
                        title: 'الجزء الأول من المحاضرة الثانية (شرح مهارات)', 
                        url: 'https://www.youtube.com/embed/pfespAOqxAs', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'الجزء الثاني من المحاضرة الثانية (الماضي البسيط والمستمر)', 
                        url: 'https://www.youtube.com/embed/NkNtna4em_I', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'الجزء الثالث من المحاضرة الثانية (حل مهارات)', 
                        url: 'https://www.youtube.com/embed/2si4XMNHpxY', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'الجزء الأخير من المحاضرة الثانية (حل جرامر)', 
                        url: 'https://www.youtube.com/embed/hmgdsV4ozg4', 
                        duration: 'غير محدد' 
                    }
                ]
            },
            // --- المحاضرة الثالثة ---
            {
                title: 'الوحدة الأولى - المحاضرة الثالثة',
                duration: '3 أجزاء',
                date: '2025-03-08',
                videos: [
                    { 
                        title: 'الجزء الأول من المحاضرة الثالثة (الجرامر)', 
                        url: 'https://www.youtube.com/embed/Guro-DD1p08', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'الجزء الثاني من المحاضرة الثالثة (حل جرامر)', 
                        url: 'https://www.youtube.com/embed/KxOJEPmZJnU', 
                        duration: 'غير محدد' 
                    },
                    { 
                        title: 'جزء الكلمات من المحاضرة الثالثة', 
                        url: 'https://www.youtube.com/embed/Es4XG060TAk', 
                        duration: 'غير محدد' 
                    }
                ]
            }
        ],
        // ----------------------------------------------------
        'محمد صلاح': [
            { 
                title: 'المحاضرة الأولى', 
                duration: 'غير محدد', 
                date: '2025-03-01',
                videos: [
                    { title: 'النحو - الجزء الأول', url: 'https://www.youtube.com/embed/tZN0aJ-Pau4', duration: 'غير محدد' },
                    { title: 'تدريبات النحو - الجزء الثاني', url: 'https://www.youtube.com/embed/oE_wwjCoPrY', duration: 'غير محدد' },
                    { title: 'الأدب - الجزء الثالث', url: 'https://www.youtube.com/embed/VqjMs9NES1I', duration: 'غير محدد' },
                    { title: 'تدريبات الأدب - الجزء الرابع', url: 'https://www.youtube.com/embed/Jh0-Nhbywd4', duration: 'غير محدد' }
                ]
            },
            { 
                title: 'المحاضرة الثانية', 
                duration: 'غير محدد', 
                date: '2025-03-05',
                videos: [
                    { title: 'النحو - كان وأخواتها', url: 'https://www.youtube.com/embed/moYHAww8QCA', duration: 'غير محدد' },
                    { title: 'النحو - حذف المبتدأ والخبر', url: 'https://www.youtube.com/embed/mOfTBCDkL60', duration: 'غير محدد' },
                    { title: 'الأدب - المدرسة الكلاسيكية (تابع)', url: 'https://www.youtube.com/embed/5velhRAlm70', duration: 'غير محدد' },
                    { title: 'حل أسئلة الثانوية العامة', url: 'https://www.youtube.com/embed/CX1fdwgLg-U', duration: 'غير محدد' }
                ]
            },
            { 
                title: 'المحاضرة الثالثة', 
                duration: 'غير محدد', 
                date: '2025-03-08',
                videos: [
                    { title: 'النحو - كاد وأخواتها', url: 'https://www.youtube.com/embed/Vp-STHKSpdw', duration: 'غير محدد' },
                    { title: 'النصوص - أنماط النصوص', url: 'https://www.youtube.com/embed/fdWynkm0GRY', duration: 'غير محدد' },
                    { title: 'البلاغة - التشبيه', url: 'https://www.youtube.com/embed/in8b81387uM', duration: 'غير محدد' },
                    { title: 'تدريبات على النحو', url: 'https://www.youtube.com/embed/mqi1pA6LpSM', duration: 'غير محدد' },
                    { title: 'تدريبات على النصوص', url: 'https://www.youtube.com/embed/VLB9RSFGaHo', duration: 'غير محدد' }
                ]
            },
            { 
                title: 'المحاضرة الرابعة', 
                duration: 'غير محدد', 
                date: '2025-03-12',
                videos: [
                    { title: 'النحو', url: 'https://www.youtube.com/embed/hnnXkhYWo2k', duration: 'غير محدد' },
                    { title: 'النصوص', url: 'https://www.youtube.com/embed/8btWgbBg0-A', duration: 'غير محدد' },
                    { title: 'البلاغة', url: 'https://www.youtube.com/embed/l7pJyl0p8eU', duration: 'غير محدد' },
                    { title: 'قصة الأيام', url: 'https://www.youtube.com/embed/EcGVCFehBCM', duration: 'غير محدد' }
                ]
            }
        ],
        // ----------------------------------------------------
        'خالد صقر': [
            {
                title: 'الورشة: الباب الأول (العناصر الانتقالية) 🛠️',
                duration: '3 أجزاء',
                date: 'ورش عمل',
                videos: [
                    { title: 'الجزء الأول: ورشه الباب الاول', url: 'https://www.youtube.com/embed/Mt_ej0zcvNc', duration: 'غير محدد' },
                    { title: 'الجزء الثاني: ورشه الباب الاول', url: 'https://www.youtube.com/embed/IL-byV1gkbM', duration: 'غير محدد' },
                    { title: 'الجزء الثالث: ورشه الباب الاول', url: 'https://www.youtube.com/embed/r-pKj4pyPKM', duration: 'غير محدد' }
                ]
            },
            {
                title: 'الباب الأول - المحاضرة الأولى',
                duration: '2 جزء',
                date: 'الشهر الأول',
                videos: [
                    { title: 'العناصر الانتقالية (المحاضرة)', url: 'https://www.youtube.com/embed/Wfn3Qlf17T0', duration: 'غير محدد' },
                    { title: 'حل على المحاضرة الأولى', url: 'https://www.youtube.com/embed/TlFMO-9wrvk', duration: 'غير محدد' }
                ]
            },
            {
                title: 'الباب الأول - المحاضرة الثانية',
                duration: '2 جزء',
                date: 'الشهر الأول',
                videos: [
                    { title: 'حل على المحاضرة الثانية', url: 'https://www.youtube.com/embed/6psTYnj1L5M', duration: 'غير محدد' },
                    { title: 'حل كتاب المندليف', url: 'https://www.youtube.com/embed/yw1NK_IXAOo', duration: 'غير محدد' }
                ]
            },
            {
                title: 'الباب الأول - المحاضرة الثالثة',
                duration: '3 أجزاء',
                date: 'الشهر الأول',
                videos: [
                    { title: 'شرح', url: 'https://www.youtube.com/embed/yInMdrcv8T0', duration: 'غير محدد' },
                    { title: 'حل الواجب', url: 'https://www.youtube.com/embed/m__bljl9zQc', duration: 'غير محدد' },
                    { title: 'حل كتاب المندليف', url: 'https://www.youtube.com/embed/1Nx-7vbaCgo', duration: 'غير محدد' }
                ]
            }
        ]
    }
};

// ----------------------------------------------------
// General Functions
// ----------------------------------------------------

/**
 * Renders the teachers for a given subject on the teachers.html page.
 * @param {string} subjectKey - The key of the subject in the DATA.teachers object (e.g., 'arabic').
 */
function showTeachers(subjectKey) {
    const teachersGrid = document.getElementById('teachersGrid');
    const titleElement = document.getElementById('teachersPageTitle');
    
    // Simple translation for display title
    const subjectNames = {
        'arabic': 'اللغة العربية',
        'chemistry': 'الكيمياء',
        'english': 'اللغة الإنجليزية',
        'physics': 'الفيزياء',
        'biology': 'الأحياء',
        'philosophy': 'الفلسفة',
        'geography': 'الجغرافيا',
        'history': 'التاريخ',
    };
    
    const displaySubjectName = subjectNames[subjectKey] || subjectKey;
    titleElement.textContent = `مدرسي مادة ${displaySubjectName}`;

    teachersGrid.innerHTML = ''; // Clear previous content

    const teachers = DATA.teachers[subjectKey];

    if (teachers && teachers.length > 0) {
        teachers.forEach((teacher, index) => {
            const teacherCard = document.createElement('a');
            // Link to the lessons page, passing the teacher's name and the original subject back
            teacherCard.href = `lessons.html?teacher=${teacher.name}&back=${subjectKey}`; 
            teacherCard.className = 'teacher-card animate-card';
            
            // Add staggered delay for animation
            teacherCard.style.animationDelay = `${(index * 0.1) + 0.1}s`;

            teacherCard.innerHTML = `
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-avatar">
                <div class="teacher-info">
                    <h3>${teacher.name}</h3>
                    <p>${teacher.subject}</p>
                    <div class="teacher-meta">
                        <span class="meta-item"><i class="fas fa-video"></i> ${DATA.lessons[teacher.name]?.length || 0} محاضره</span>
                        <span class="meta-item">
                    </div>
                </div>
            `;
            teachersGrid.appendChild(teacherCard);
        });
    } else {
        teachersGrid.innerHTML = `<p style="text-align: center; font-size: 1.25rem; color: var(--primary);">لا يوجد مدرسين حالياً لهذه المادة.</p>`;
    }
    
    // Optional: Restore scroll position if needed for back navigation
}

/**
 * Renders the lessons for a given teacher on the lessons.html page.
 * @param {string} teacherName - The name of the teacher (used as the key in DATA.lessons).
 * @param {string} subjectBack - The subject key to use for the back button.
 */
function showLessons(teacherName, subjectBack) {
    const lessonsList = document.getElementById('lessonsList');
    const titleElement = document.getElementById('lessonsPageTitle');
    
    titleElement.textContent = `دروس الأستاذ ${teacherName}`;

    lessonsList.innerHTML = ''; // Clear previous content

    const lessons = DATA.lessons[teacherName];

    if (lessons && lessons.length > 0) {
        lessons.forEach((lesson, index) => {
            const lessonCard = document.createElement('a');
            // Link to the video page, passing teacher name, lesson index, and subject for back button
            lessonCard.href = `video.html?teacher=${teacherName}&lessonIndex=${index}&subjectBack=${subjectBack}`; 
            lessonCard.className = 'lesson-card animate-card';
            
            // Add staggered delay for animation
            lessonCard.style.animationDelay = `${(index * 0.1) + 0.1}s`;

            lessonCard.innerHTML = `
                <div class="lesson-number">${index + 1}</div>
                <div class="lesson-details">
                    <h3>${lesson.title}</h3>
                    <div class="lesson-meta">
                        <span><i class="fas fa-calendar-alt"></i>  ${lesson.videos.length} فيديو</span>
                    </div>
                </div>
                <div class="lesson-action">
                    <i class="fas fa-chevron-left"></i>
                </div>
            `;
            lessonsList.appendChild(lessonCard);
        });
    } else {
        lessonsList.innerHTML = `<p style="text-align: center; font-size: 1.25rem; color: var(--primary);">لا يوجد دروس حالياً للأستاذ ${teacherName}.</p>`;
    }
}

/**
 * Renders the main video player and the video list on the video.html page.
 * @param {string} teacherName - The name of the teacher.
 * @param {number} lessonIndex - The index of the lesson in the DATA.lessons array for that teacher.
 */
function showVideoPlayer(teacherName, lessonIndex) {
    const lesson = DATA.lessons[teacherName]?.[lessonIndex];
    const lessonTitleEl = document.getElementById('lessonTitle');
    const videoListContainer = document.getElementById('videoListContainer');
    const mainVideoPlayer = document.getElementById('mainVideoPlayer');
    const videoTitleEl = document.getElementById('videoTitle');

    if (!lesson) {
        lessonTitleEl.textContent = 'الدرس غير متوفر';
        videoTitleEl.textContent = 'الرجاء اختيار درس صحيح';
        return;
    }

    lessonTitleEl.textContent = lesson.title;
    videoListContainer.innerHTML = '';

    const firstVideo = lesson.videos[0];
    if (firstVideo) {
        // Set the first video as the default main video
        mainVideoPlayer.src = `${firstVideo.url}?autoplay=0&rel=0`;
        videoTitleEl.textContent = firstVideo.title;
    }


    lesson.videos.forEach((video, index) => {
        const videoItem = document.createElement('a');
        videoItem.href = '#';
        videoItem.className = 'video-item';
        // Highlight the first video by default
        if (index === 0) {
            videoItem.classList.add('active-video');
        }

        videoItem.innerHTML = `
            <h4>${video.title}</h4>
          
        `;

        // Click handler to change the main video
        videoItem.addEventListener('click', (e) => {
            e.preventDefault();
            // Update main player
            mainVideoPlayer.src = `${video.url}?autoplay=1&rel=0`; 
            videoTitleEl.textContent = video.title;

            // Update active state in list
            document.querySelectorAll('.video-item').forEach(item => item.classList.remove('active-video'));
            videoItem.classList.add('active-video');
        });

        videoListContainer.appendChild(videoItem);
    });
    
    // Activate Theme Toggle and Fullscreen/Rotation listeners
    setupThemeToggle();
    setupVideoControls();
}


// ----------------------------------------------------
// UI/Utility Functions
// ----------------------------------------------------

// Theme Toggle Logic
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem('theme') === 'dark-mode') {
        body.classList.add('dark-mode');
        themeToggleBtn.querySelector('i').className = 'fas fa-sun';
    } else {
        themeToggleBtn.querySelector('i').className = 'fas fa-moon';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggleBtn.querySelector('i').className = 'fas fa-sun';
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeToggleBtn.querySelector('i').className = 'fas fa-moon';
        }
    });
}

// Initialize theme toggle on all pages
document.addEventListener('DOMContentLoaded', setupThemeToggle);


// Video Controls Logic (Fullscreen & Rotation)
function setupVideoControls() {
    const body = document.body;
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    let rotated = false;

    if (!fullscreenBtn) return; // Only run on video.html

    // Fullscreen logic
    fullscreenBtn.addEventListener('click', async () => {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
            fullscreenBtn.querySelector('span').textContent = 'الخروج من الشاشة الكاملة';
        } else {
            await document.exitFullscreen();
            fullscreenBtn.querySelector('span').textContent = 'الشاشة الكاملة';
        }
    });

    // Rotation logic
    if (document.getElementById('rotateBtn')) {
        const rotateBtn = document.getElementById('rotateBtn');
        rotateBtn.addEventListener('click', async () => {
            rotated = !rotated;
            
            if (screen.orientation && screen.orientation.lock) {
                try {
                    if (rotated) {
                        await screen.orientation.lock("landscape");
                    } else {
                        await screen.orientation.lock("portrait");
                    }
                } catch (e) {
                    toggleCssRotate(rotated);
                }
            } else {
                toggleCssRotate(rotated);
            }
        });
    }

    function toggleCssRotate(state) {
        if (state) {
            body.style.transform = "rotate(90deg)";
            body.style.width = "100vh";
            body.style.height = "100vw";
            body.style.transformOrigin = "top left";
        } else {
            body.style.transform = "none";
            body.style.width = "100vw";
            body.style.height = "100vh";
            body.style.transformOrigin = "initial";
        }
    }
}
