// script.js
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
        // ----------------------------------------------------
        // 💬 دروس مس مي (كورس التأسيس + محاضرات منفصلة)
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
// حالة التطبيق للتخزين المؤقت
let CURRENT_TEACHER = '';
let CURRENT_SUBJECT_BACK = ''; 
let CURRENT_LESSON = null;
let CURRENT_VIDEO_INDEX = 0;
let NOTIFICATIONS = [];

const subjectNames = {
    arabic: 'اللغة العربية',
    chemistry: 'الكيمياء',
    english: 'اللغة الإنجليزية',
    biology: 'الأحياء',
    physics: 'الفيزياء',
    geology: 'الجيولوجيا',
    geography: 'الجغرافيا',
    history: 'التاريخ'
};

// الدوال المشتركة (Theme Toggle & Notifications & WhatsApp)
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const clearNotifications = document.getElementById('clearNotifications');

    // ----------------------------------------------------
    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    // ----------------------------------------------------
    // WhatsApp Button
    whatsappBtn.addEventListener('click', () => {
        window.open('https://wa.me/', '_blank');
    });

    // ----------------------------------------------------
    // Notifications
    notificationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (notificationDropdown && notificationBtn && !notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
            notificationDropdown.classList.remove('active');
        }
    });

    if (clearNotifications) {
        clearNotifications.addEventListener('click', () => {
            NOTIFICATIONS = [];
            updateNotifications();
        });
    }

    // استرداد الإشعارات من Local Storage عند التحميل
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
        NOTIFICATIONS = JSON.parse(savedNotifications);
    }
    updateNotifications();

    // تشغيل الإشعارات التجريبية (إذا لم يكن هناك إشعارات سابقة)
    if (NOTIFICATIONS.length === 0) {
        setTimeout(() => {
            addNotification('محمد صلاح', 'اللغة العربية', 'المحاضرة الأولى');
        }, 2000);
    }

    // إضافة إشعار عشوائي كل 30 ثانية
    setInterval(() => {
        const subjects = Object.keys(DATA.teachers);
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const teachers = DATA.teachers[randomSubject];
        const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];
        const lessons = DATA.lessons[randomTeacher.name];
        if (lessons && lessons.length > 0) {
            const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];
            addNotification(randomTeacher.name, randomTeacher.subject, randomLesson.title);
        }
    }, 30000);

    // ----------------------------------------------------
    // Logo Click (للتنقل بين الصفحات)
    document.getElementById('logoBtn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

function addNotification(teacher, subject, lesson) {
    const notification = {
        id: Date.now(),
        teacher,
        subject,
        lesson,
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };
    
    NOTIFICATIONS.unshift(notification);
    // حفظ الإشعارات في Local Storage
    localStorage.setItem('notifications', JSON.stringify(NOTIFICATIONS));
    updateNotifications();
}

function updateNotifications() {
    const notificationList = document.getElementById('notificationList');
    const notificationBadge = document.getElementById('notificationBadge');

    if (!notificationList || !notificationBadge) return; // تأكد من وجود العناصر

    if (NOTIFICATIONS.length === 0) {
        notificationList.innerHTML = '<div class="no-notifications">لا توجد إشعارات جديدة</div>';
        notificationBadge.textContent = '0';
        notificationBadge.classList.add('hidden');
    } else {
        notificationBadge.textContent = NOTIFICATIONS.length;
        notificationBadge.classList.remove('hidden');
        
        notificationList.innerHTML = NOTIFICATIONS.map(notif => `
            <div class="notification-item">
                <div class="notification-icon">
                    <i class="fas fa-book-open"></i>
                </div>
                <div class="notification-content">
                    <h4>حصة جديدة متاحة!</h4>
                    <p>${notif.lesson} - ${notif.teacher}</p>
                    <span class="notification-time">${notif.time}</span>
                </div>
            </div>
        `).join('');
    }
}

// ----------------------------------------------------
// دوال خاصة بصفحة المدرسين (teachers.html)
// ----------------------------------------------------

/**
 * تعرض مدرسي المادة المحددة في صفحة teachers.html
 * @param {string} subject - اسم المادة (مثل arabic, chemistry)
 */
function showTeachers(subject) {
    const teachers = DATA.teachers[subject];
    const teachersPageTitle = document.getElementById('teachersPageTitle');
    const teachersGrid = document.getElementById('teachersGrid');

    CURRENT_SUBJECT_BACK = subject; // لتخزين اسم المادة للعودة إليها

    if (!teachers) {
        teachersPageTitle.textContent = `لا يوجد مدرسون متاحون لمادة ${subjectNames[subject] || subject}`;
        teachersGrid.innerHTML = '';
        return;
    }

    teachersPageTitle.textContent = `مدرسو ${subjectNames[subject] || subject}`;
    
    teachersGrid.innerHTML = teachers.map(teacher => {
        // نستخدم رابط lessons.html مع تمرير اسم المدرس واسم المادة للعودة
        const lessonsUrl = `lessons.html?teacher=${encodeURIComponent(teacher.name)}&back=${subject}`;
        return `
            <a href="${lessonsUrl}" class="teacher-card">
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-avatar">
                <h3>${teacher.name}</h3>
                <p>${teacher.subject}</p>
            </a>
        `;
    }).join('');
}


// ----------------------------------------------------
// دوال خاصة بصفحة الدروس (lessons.html)
// ----------------------------------------------------

/**
 * تعرض دروس المدرس المحدد في صفحة lessons.html
 * @param {string} teacherName - اسم المدرس
 * @param {string} subjectBack - اسم المادة للعودة
 */
function showLessons(teacherName, subjectBack) {
    const lessons = DATA.lessons[teacherName];
    const lessonsPageTitle = document.getElementById('lessonsPageTitle');
    const lessonsList = document.getElementById('lessonsList');
    
    CURRENT_TEACHER = teacherName;
    CURRENT_SUBJECT_BACK = subjectBack;

    lessonsPageTitle.textContent = `دروس ${teacherName}`;

    if (!lessons || lessons.length === 0) {
        lessonsList.innerHTML = '<p style="text-align: center; padding: 3rem; font-size: 1.2rem;">لا توجد دروس متاحة حالياً لهذا المدرس.</p>';
        return;
    }
    
    lessonsList.innerHTML = lessons.map((lesson, index) => {
        // نستخدم رابط video.html مع تمرير اسم المدرس ورقم فهرس الدرس واسم المادة للعودة
        const videoUrl = `video.html?teacher=${encodeURIComponent(teacherName)}&lessonIndex=${index}&subjectBack=${subjectBack}`;
        return `
            <a href="${videoUrl}" class="lesson-card">
                <div class="lesson-number">${index + 1}</div>
                <div class="lesson-info">
                    <h3>${lesson.title}</h3>
                    <div class="lesson-meta">
                        <span><i class="far fa-clock"></i> ${lesson.duration}</span>
                        <span><i class="far fa-calendar"></i> ${lesson.date}</span>
                    </div>
                </div>
                <div class="lesson-icon">
                    <i class="fas fa-play-circle"></i>
                </div>
            </a>
        `;
    }).join('');
}

// ----------------------------------------------------
// دوال خاصة بصفحة الفيديو (video.html)
// ----------------------------------------------------

/**
 * تعرض مشغل الفيديو وقائمة فيديوهات الدرس في صفحة video.html
 * @param {string} teacherName - اسم المدرس
 * @param {number} lessonIndex - فهرس الدرس
 */
function showVideoPlayer(teacherName, lessonIndex) {
    const lessons = DATA.lessons[teacherName];
    if (!lessons || !lessons[lessonIndex]) return;

    const lesson = lessons[lessonIndex];
    
    CURRENT_TEACHER = teacherName;
    CURRENT_LESSON = lesson;
    CURRENT_VIDEO_INDEX = 0; // دائماً ابدأ بأول فيديو في الدرس
    
    document.getElementById('videoTitle').textContent = lesson.title;
    document.getElementById('videoTeacher').textContent = teacherName;
    
    loadVideo(0); // تحميل أول فيديو

    const videoListContainer = document.getElementById('videoListContainer');
    if (videoListContainer) {
        videoListContainer.innerHTML = lesson.videos.map((video, index) => `
            <div class="video-list-item ${index === 0 ? 'active' : ''}" data-video-index="${index}">
                <div class="video-list-number">${index + 1}</div>
                <div class="video-list-info">
                    <h4>${video.title}</h4>
                    <p><i class="far fa-clock"></i> ${video.duration}</p>
                </div>
                <div class="video-list-play">
                    <i class="fas fa-play-circle"></i>
                </div>
            </div>
        `).join('');

        // إضافة مستمعي الأحداث لقائمة الفيديوهات
        videoListContainer.addEventListener('click', (e) => {
            const videoItem = e.target.closest('.video-list-item');
            if (videoItem) {
                const videoIndex = parseInt(videoItem.dataset.video-index);
                loadVideo(videoIndex);
            }
        });
    }

    // إضافة منطق تدوير الشاشة (Rotate Button Logic)
    const rotateBtn = document.getElementById("rotateBtn");
    const body = document.body;
    let rotated = false;
    
    if (rotateBtn) {
        rotateBtn.addEventListener("click", async () => {
            rotated = !rotated;
            
            if (!document.fullscreenElement) {
                await body.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
            
            // محاولة قفل الاتجاه (لا يعمل في كل المتصفحات)
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

/**
 * يقوم بتحميل فيديو محدد في المشغل
 * @param {number} index - فهرس الفيديو داخل قائمة فيديوهات الدرس الحالي
 */
function loadVideo(index) {
    if (!CURRENT_LESSON || !CURRENT_LESSON.videos[index]) return;
    
    const video = CURRENT_LESSON.videos[index];
    CURRENT_VIDEO_INDEX = index;
    
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer) {
        videoPlayer.src = video.url;
    }
    
    document.querySelectorAll('.video-list-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}
