// script.js (Modified - Final Tracks Structure Applied)
const DATA = {
    
    // --- TRACKS STRUCTURE UPDATED AS PER USER REQUEST ---
    "TRACKS": {
        "common": [ // المواد المشتركة التي تظهر في كلا المسارين
            { "key": "arabic", "name": "اللغة العربية" },
            { "key": "english", "name": "اللغة الإنجليزية" }
        ],
        "scientific": [ // المسار العلمي
            { "key": "arabic", "name": "اللغة العربية" },
            { "key": "english", "name": "اللغة الإنجليزية" },
            { "key": "physics", "name": "الفيزياء" },
            { "key": "chemistry", "name": "الكيمياء" },
            { "key": "biology", "name": "الأحياء" },
            { "key": "geology", "name": "الجيولوجيا" }
        ],
        "literary": [ // المسار الأدبي
            { "key": "arabic", "name": "اللغة العربية" },
            { "key": "english", "name": "اللغة الإنجليزية" },
            { "key": "pure_math", "name": "الرياضة البحتة" }, // تم استبدال الفلسفة
            { "key": "history", "name": "التاريخ" },
            { "key": "geography", "name": "الجغرافيا" }
        ]
    },
    // --- END OF TRACKS STRUCTURE ---
    
    
    "teachers": {
        "arabic": [
            { 
                "name": "محمد صلاح", 
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mypBoIGoTRltea2C9xOcI9bTwK88KVEJccYCwBtuUQ&s=10", 
                "subject": "اللغة العربية" 
            }
        ],
        "chemistry": [
            { 
                "name": "خالد صقر", 
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CngN8C3oczaKKVuWNeOX6r0BD4mvrImsWsI0wcLmIQ&s=10", 
                "subject": "الكيمياء" 
            }
        ],
        "english": [
            {
                "name": "مس مي",
                "image": "mai.jpg",
                "subject": "اللغة الإنجليزية"
            }
        ],
        "physics": [
            {
                "name": "كيرلس القص",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YlvLYPd0e5YuzsayT2gqHyyrDcjU3PLGbw&usqp=CAU",
                "subject": "الفيزياء"
            }
        ],
        // --- Placeholder sections for new subjects to avoid errors ---
        "biology": [],
        "geology": [],
        "pure_math": [], 
        "history": [],
        "geography": []
        // -----------------------------------------------------------
    },
    "lessons": {
        "مس مي": [
            {
                "title": "كورس التأسيس - تعلم الأزمنة",
                "duration": "4 فيديوهات",
                "date": "كورس تأسيس",
                "videos": [
                    { 
                        "title": "تعلم كل الأزمنة البسيطة (الماضي البسيط - المضارع البسيط - المستقبل) | كورس تعلم اللغة الإنجليزية للاحتراف", 
                        "url": "https://www.youtube.com/embed/LT3DbHcLwQU", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "تعلم الأزمنة المستمرة (الماضي المستمر - المضارع المستمر - المستقبل المستمر) | كورس تعلم اللغة الإنجليزية", 
                        "url": "https://www.youtube.com/embed/M81oHwySTjk", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "تعلم الأزمنة التامة (الماضي التام - المضارع التام - المستقبل التام) | كورس تعلم و تأسيس اللغة الإنجليزية", 
                        "url": "https://www.youtube.com/embed/k6uEWk6Mbpg", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "جميع أزمنة اللغة الإنجليزية شرح + تطبيق | كورس تعلم و تأسيس اللغة الإنجليزية لجميع المراحل الدراسية", 
                        "url": "https://www.youtube.com/embed/TAnsEhpyPYA", 
                        "duration": "غير محدد" 
                    }
                ]
            },
            {
                "title": "الوحدة الأولى - المحاضرة الأولى",
                "duration": "جزئين",
                "date": "2025-03-01",
                "videos": [
                    { 
                        "title": "الجزء الأول من المحاضرة الأولى", 
                        "url": "https://www.youtube.com/embed/v2so3TouI0M", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "الجزء الثاني من المحاضرة الأولى", 
                        "url": "https://www.youtube.com/embed/ffxvhR6YAdo", 
                        "duration": "غير محدد" 
                    }
                ]
            },
            {
                "title": "الوحدة الأولى - المحاضرة الثانية",
                "duration": "4 أجزاء",
                "date": "2025-03-05",
                "videos": [
                    { 
                        "title": "الجزء الأول من المحاضرة الثانية (شرح مهارات)", 
                        "url": "https://www.youtube.com/embed/pfespAOqxAs", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "الجزء الثاني من المحاضرة الثانية (الماضي البسيط والمستمر)", 
                        "url": "https://www.youtube.com/embed/NkNtna4em_I", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "الجزء الثالث من المحاضرة الثانية (حل مهارات)", 
                        "url": "https://www.youtube.com/embed/2si4XMNHpxY", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "الجزء الأخير من المحاضرة الثانية (حل جرامر)", 
                        "url": "https://www.youtube.com/embed/hmgdsV4ozg4", 
                        "duration": "غير محدد" 
                    }
                ]
            },
            {
                "title": "الوحدة الأولى - المحاضرة الثالثة",
                "duration": "3 أجزاء",
                "date": "2025-03-08",
                "videos": [
                    { 
                        "title": "الجزء الأول من المحاضرة الثالثة (الجرامر)", 
                        "url": "https://www.youtube.com/embed/Guro-DD1p08", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "الجزء الثاني من المحاضرة الثالثة (حل جرامر)", 
                        "url": "https://www.youtube.com/embed/KxOJEPmZJnU", 
                        "duration": "غير محدد" 
                    },
                    { 
                        "title": "جزء الكلمات من المحاضرة الثالثة", 
                        "url": "https://www.youtube.com/embed/Es4XG060TAk", 
                        "duration": "غير محدد" 
                    }
                ]
            }
        ],
        "محمد صلاح": [
            { 
                "title": "المحاضرة الأولى", 
                "duration": "غير محدد", 
                "date": "2025-03-01",
                "videos": [
                    { "title": "النحو - الجزء الأول", "url": "https://www.youtube.com/embed/tZN0aJ-Pau4", "duration": "غير محدد" },
                    { "title": "تدريبات النحو - الجزء الثاني", "url": "https://www.youtube.com/embed/oE_wwjCoPrY", "duration": "غير محدد" },
                    { "title": "الأدب - الجزء الثالث", "url": "https://www.youtube.com/embed/VqjMs9NES1I", "duration": "غير محدد" },
                    { "title": "تدريبات الأدب - الجزء الرابع", "url": "https://www.youtube.com/embed/Jh0-Nhbywd4", "duration": "غير محدد" }
                ]
            },
            { 
                "title": "المحاضرة الثانية", 
                "duration": "غير محدد", 
                "date": "2025-03-05",
                "videos": [
                    { "title": "النحو - كان وأخواتها", "url": "https://www.youtube.com/embed/moYHAww8QCA", "duration": "غير محدد" },
                    { "title": "النحو - حذف المبتدأ والخبر", "url": "https://www.youtube.com/embed/mOfTBCDkL60", "duration": "غير محدد" },
                    { "title": "الأدب - المدرسة الكلاسيكية (تابع)", "url": "https://www.youtube.com/embed/5velhRAlm70", "duration": "غير محدد" },
                    { "title": "حل أسئلة الثانوية العامة", "url": "https://www.youtube.com/embed/CX1fdwgLg-U", "duration": "غير محدد" }
                ]
            },
            { 
                "title": "المحاضرة الثالثة", 
                "duration": "غير محدد", 
                "date": "2025-03-08",
                "videos": [
                    { "title": "النحو - كاد وأخواتها", "url": "https://www.youtube.com/embed/Vp-STHKSpdw", "duration": "غير محدد" },
                    { "title": "النصوص - أنماط النصوص", "url": "https://www.youtube.com/embed/fdWynkm0GRY", "duration": "غير محدد" },
                    { "title": "البلاغة - التشبيه", "url": "https://www.youtube.com/embed/in8b81387uM", "duration": "غير محدد" },
                    { "title": "تدريبات على النحو", "url": "https://www.youtube.com/embed/mqi1pA6LpSM", "duration": "غير محدد" },
                    { "title": "تدريبات على النصوص", "url": "https://www.youtube.com/embed/VLB9RSFGaHo", "duration": "غير محدد" }
                ]
            },
            { 
                "title": "المحاضرة الرابعة", 
                "duration": "غير محدد", 
                "date": "2025-03-12",
                "videos": [
                    { "title": "النحو", "url": "https://www.youtube.com/embed/hnnXkhYWo2k", "duration": "غير محدد" },
                    { "title": "النصوص", "url": "https://www.youtube.com/embed/8btWgbBg0-A", "duration": "غير محدد" },
                    { "title": "البلاغة", "url": "https://www.youtube.com/embed/l7pJyl0p8eU", "duration": "غير محدد" },
                    { "title": "قصة الأيام", "url": "https://www.youtube.com/embed/EcGVCFehBCM", "duration": "غير محدد" }
                ]
            }
        ],
        "خالد صقر": [
            {
                "title": "الورشة: الباب الأول (العناصر الانتقالية) 🛠️",
                "duration": "3 أجزاء",
                "date": "ورش عمل",
                "videos": [
                    { "title": "الجزء الأول: ورشه الباب الاول", "url": "https://www.youtube.com/embed/Mt_ej0zcvNc", "duration": "غير محدد" },
                    { "title": "الجزء الثاني: ورشه الباب الاول", "url": "https://www.youtube.com/embed/IL-byV1gkbM", "duration": "غير محدد" },
                    { "title": "الجزء الثالث: ورشه الباب الاول", "url": "https://www.youtube.com/embed/r-pKj4pyPKM", "duration": "غير محدد" }
                ]
            },
            {
                "title": "الباب الأول - المحاضرة الأولى",
                "duration": "2 جزء",
                "date": "الشهر الأول",
                "videos": [
                    { "title": "العناصر الانتقالية (المحاضرة)", "url": "https://www.youtube.com/embed/Wfn3Qlf17T0", "duration": "غير محدد" },
                    { "title": "حل على المحاضرة الأولى", "url": "https://www.youtube.com/embed/TlFMO-9wrvk", "duration": "غير محدد" }
                ]
            },
            {
                "title": "الباب الأول - المحاضرة الثانية",
                "duration": "2 جزء",
                "date": "الشهر الأول",
                "videos": [
                    { "title": "حل على المحاضرة الثانية", "url": "https://www.youtube.com/embed/6psTYnj1L5M", "duration": "غير محدد" },
                    { "title": "حل كتاب المندليف", "url": "https://www.youtube.com/embed/yw1NK_IXAOo", "duration": "غير محدد" }
                ]
            },
            {
                "title": "الباب الأول - المحاضرة الثالثة",
                "duration": "3 أجزاء",
                "date": "الشهر الأول",
                "videos": [
                    { "title": "شرح", "url": "https://www.youtube.com/embed/yInMdrcv8T0", "duration": "غير محدد" },
                    { "title": "حل الواجب", "url": "https://www.youtube.com/embed/m__bljl9zQc", "duration": "غير محدد" },
                    { "title": "حل كتاب المندليف", "url": "https://www.youtube.com/embed/1Nx-7vbaCgo", "duration": "غير محدد" }
                ]
            }
        ],
        "كيرلس القص": {
            "الشهر الأول": [
                {
                    "title": "المحاضرة الثانية (المقاومة الكهربية وقانون أوم)",
                    "duration": "3 أجزاء",
                    "date": "الشهر الأول",
                    "videos": [
                        { "title": "الجزء الأول (المقاومة الكهربية)", "url": "https://www.youtube.com/embed/97pBS1-EH9M", "duration": "غير محدد" },
                        { "title": "الجزء الثاني (قانون أوم)", "url": "https://www.youtube.com/embed/z4OMFMZwzoc", "duration": "غير محدد" },
                        { "title": "حل بنك الأسئلة على المحاضرة الثانية", "url": "https://www.youtube.com/embed/kXLpBwIZTf4", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "المحاضرة الثالثة (المقاومة النوعية والفعلية)",
                    "duration": "3 أجزاء",
                    "date": "الشهر الأول",
                    "videos": [
                        { "title": "الجزء الأول شرح (المقاومة الفعلية)", "url": "https://www.youtube.com/embed/OfziyT7rCOc", "duration": "غير محدد" },
                        { "title": "الجزء الثاني شرح كتاب الدكتور كيرلس (المقاومة الفعلية)", "url": "https://www.youtube.com/embed/7JxPC4tWlYE", "duration": "غير محدد" },
                        { "title": "الجزء الثالث حل كتاب الامتحان (المقاومة النوعية)", "url": "https://www.youtube.com/embed/79wcOcUZFW4", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "المحاضرة الرابعة (توصيل المقاومات)",
                    "duration": "3 أجزاء",
                    "date": "الشهر الأول",
                    "videos": [
                        { "title": "الجزء الأول (توصيل المقاومات على التوازي والتوالي)", "url": "https://www.youtube.com/embed/I1Os3JkRx28", "duration": "غير محدد" },
                        { "title": "الجزء الثاني (إيجاد المقاومة المكافأة)", "url": "https://www.youtube.com/embed/3mVUxZgPKCE", "duration": "غير محدد" },
                        { "title": "حل كتاب الدكتور (توصيل المقاومات + إيجاد المقاومة المكافأة)", "url": "https://www.youtube.com/embed/9uQ1J3liLlc", "duration": "غير محدد" }
                    ]
                }
            ],
            "الشهر الثاني": [
                {
                    "title": "المحاضرة الأولى (توصيل المقاومات)",
                    "duration": "جزئين",
                    "date": "الشهر الثاني",
                    "videos": [
                        { "title": "الجزء الأول من المحاضرة (توصيل المقاومات)", "url": "https://www.youtube.com/embed/EHykRqdDXmg", "duration": "غير محدد" },
                        { "title": "الجزء الثاني من المحاضرة الأولى (توصيل المقاومات)", "url": "https://www.youtube.com/embed/bE3jUJ62d7I", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "المحاضرة الثانية (حل كتاب الامتحان)",
                    "duration": "جزئين",
                    "date": "الشهر الثاني",
                    "videos": [
                        { "title": "الجزء الأول من المحاضرة الثانية (حل كتاب الامتحان)", "url": "https://www.youtube.com/embed/rbf-DQwFNlU", "duration": "غير محدد" },
                        { "title": "الجزء الثاني من المحاضرة الثانية (حل كتاب الامتحان)", "url": "https://www.youtube.com/embed/J556A16SZWM", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "المحاضرة الثالثة (قانون أوم)",
                    "duration": "3 أجزاء",
                    "date": "الشهر الثاني",
                    "videos": [
                        { "title": "الجزء الأول (شرح قانون أوم)", "url": "https://www.youtube.com/embed/--4Ydbq4f8Q", "duration": "غير محدد" },
                        { "title": "الجزء الثاني (شرح قانون أوم)", "url": "https://www.youtube.com/embed/EPkpw77XGGQ", "duration": "غير محدد" },
                        { "title": "الجزء الثالث (حل قانون أوم)", "url": "https://www.youtube.com/embed/IM5M-pe53j4", "duration": "غير محدد" }
                    ]
                }
            ],
            "المعسكر الأول": [
                {
                    "title": "ورشة (شدة التيار وفرق الجهد والمقاومة)",
                    "duration": "غير محدد",
                    "date": "معسكر الشهر الأول",
                    "videos": [
                        { "title": "ورشة (شدة التيار وفرق الجهد والمقاومة)", "url": "https://www.youtube.com/embed/CVozntnBqzU", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "ورشة (قانون أوم لنهاية الدرس)",
                    "duration": "غير محدد",
                    "date": "معسكر الشهر الأول",
                    "videos": [
                        { "title": "ورشة (قانون أوم لنهاية الدرس)", "url": "https://www.youtube.com/embed/-QKrhKcMz2M", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "ورشة (توصيل المقاومات والمقاومة المكافئة)",
                    "duration": "غير محدد",
                    "date": "معسكر الشهر الأول",
                    "videos": [
                        { "title": "ورشة (توصيل المقاومات والمقاومة المكافئة)", "url": "https://www.youtube.com/embed/jd69WpZPTNE", "duration": "غير محدد" }
                    ]
                },
                {
                    "title": "معسكر الفصل الأول كاملاً - لجميع المستويات",
                    "duration": "غير محدد",
                    "date": "معسكر الشهر الأول",
                    "videos": [
                        { "title": "معسكر الفصل الأول كاملاً", "url": "https://www.youtube.com/embed/4iwIsNRMxdE", "duration": "غير محدد" }
                    ]
                }
            ]
        }
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
        'geology': 'الجيولوجيا',
        'pure_math': 'الرياضة البحتة', 
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

            // Calculate lecture count: If lessons is an object (nested), count all lectures; otherwise, count the array length.
            let lectureCount;
            if (DATA.lessons[teacher.name] && !Array.isArray(DATA.lessons[teacher.name])) {
                 lectureCount = Object.values(DATA.lessons[teacher.name]).flat().length;
            } else {
                 lectureCount = DATA.lessons[teacher.name]?.length || 0;
            }

            teacherCard.innerHTML = `
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-avatar">
                <div class="teacher-info">
                    <h3>${teacher.name}</h3>
                    <p>${teacher.subject}</p>
                    <div class="teacher-meta">
                        <span class="meta-item"><i class="fas fa-video"></i> ${lectureCount} محاضرة</span>
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
 * Renders the individual lessons within a specific category (e.g., "الشهر الأول").
 * (Helper function for categorized view)
 */
function showCategoryLessons(teacherName, categoryName, subjectBack) {
    const lessonsList = document.getElementById('lessonsList');
    const titleElement = document.getElementById('lessonsPageTitle');
    
    titleElement.textContent = `${categoryName} - الأستاذ ${teacherName}`;
    lessonsList.innerHTML = ''; // Clear previous content

    const categoryLessons = DATA.lessons[teacherName][categoryName];
    
    // Add a back button to return to the category list
    const backButton = document.createElement('button');
    backButton.textContent = 'العودة للأقسام';
    backButton.className = 'back-to-category-btn btn-primary'; // assuming you have a class for styling
    backButton.style.marginTop = '20px';
    backButton.onclick = (e) => {
        e.preventDefault();
        showLessons(teacherName, subjectBack);
    };
    lessonsList.prepend(backButton);

    if (categoryLessons && categoryLessons.length > 0) {
        categoryLessons.forEach((lesson, index) => {
            const lessonCard = document.createElement('a');
            // Link to the video page, passing the category name as well
            lessonCard.href = `video.html?teacher=${teacherName}&category=${encodeURIComponent(categoryName)}&lessonIndex=${index}&subjectBack=${subjectBack}`; 
            lessonCard.className = 'lesson-card animate-card';
            
            lessonCard.style.animationDelay = `${(index * 0.1) + 0.1}s`;

            lessonCard.innerHTML = `
                <div class="lesson-number">${index + 1}</div>
                <div class="lesson-details">
                    <h3>${lesson.title}</h3>
                    <div class="lesson-meta">
                        <span><i class="fas fa-video"></i>  ${lesson.videos.length} فيديو</span>
                    </div>
                </div>
                <div class="lesson-action">
                    <i class="fas fa-chevron-left"></i>
                </div>
            `;
            lessonsList.appendChild(lessonCard);
        });
        
    } else {
        lessonsList.innerHTML += `<p style="text-align: center; font-size: 1.25rem; color: var(--primary);">لا يوجد محاضرات في قسم ${categoryName} حالياً.</p>`;
    }
}


/**
 * Renders the lessons for a given teacher on the lessons.html page.
 * NOTE: This function is modified to handle both Array (standard) and Object (categorized) lesson structures.
 * @param {string} teacherName - The name of the teacher (used as the key in DATA.lessons).
 * @param {string} subjectBack - The subject key to use for the back button.
 */
function showLessons(teacherName, subjectBack) {
    const lessonsList = document.getElementById('lessonsList');
    const titleElement = document.getElementById('lessonsPageTitle');
    
    titleElement.textContent = `دروس الأستاذ ${teacherName}`;

    lessonsList.innerHTML = ''; // Clear previous content

    const lessons = DATA.lessons[teacherName];

    if (!lessons) {
        lessonsList.innerHTML = `<p style="text-align: center; font-size: 1.25rem; color: var(--primary);">لا يوجد دروس حالياً للأستاذ ${teacherName}.</p>`;
        return;
    }
    
    // Check if lessons are categorized (Object like Kirilos Al Kass)
    if (typeof lessons === 'object' && !Array.isArray(lessons)) {
        // --- Logic for Categorized Lessons (كيرلس القص) ---
        
        Object.keys(lessons).forEach((categoryName, index) => {
            const categoryLessons = lessons[categoryName];
            const lectureCount = categoryLessons.length;
            
            const card = document.createElement('div');
            card.className = 'lesson-card animate-card category-card';
            card.style.animationDelay = `${(index * 0.1) + 0.1}s`;
            
            card.innerHTML = `
                <div class="lesson-number">📚</div>
                <div class="lesson-details">
                    <h3>${categoryName}</h3>
                    <div class="lesson-meta">
                        <span><i class="fas fa-video"></i> ${lectureCount} محاضرة</span>
                    </div>
                </div>
                <div class="lesson-action">
                    <i class="fas fa-chevron-left"></i>
                </div>
            `;
            
            // Add click listener to render the lessons within this category
            card.addEventListener('click', (e) => {
                e.preventDefault();
                showCategoryLessons(teacherName, categoryName, subjectBack);
            });
            
            lessonsList.appendChild(card);
        });

    } else if (Array.isArray(lessons) && lessons.length > 0) {
        // --- Original Logic for Array Lessons (مس مي, محمد صلاح, خالد صقر) ---
        lessons.forEach((lesson, index) => {
            const lessonCard = document.createElement('a');
            // Link to the video page
            lessonCard.href = `video.html?teacher=${teacherName}&lessonIndex=${index}&subjectBack=${subjectBack}`; 
            lessonCard.className = 'lesson-card animate-card';
            
            // Add staggered delay for animation
            lessonCard.style.animationDelay = `${(index * 0.1) + 0.1}s`;

            lessonCard.innerHTML = `
                <div class="lesson-number">${index + 1}</div>
                <div class="lesson-details">
                    <h3>${lesson.title}</h3>
                    <div class="lesson-meta">
                        <span><i class="fas fa-video"></i>  ${lesson.videos.length} فيديو</span>
                    </div>
                </div>
                <div class="lesson-action">
                    <i class="fas fa-chevron-left"></i>
                </div>
            `;
            lessonsList.appendChild(lessonCard);
        });
    } else {
        // Fallback for empty array or unrecognized structure
        lessonsList.innerHTML = `<p style="text-align: center; font-size: 1.25rem; color: var(--primary);">لا يوجد دروس حالياً للأستاذ ${teacherName}.</p>`;
    }
}


/**
 * Renders the main video player and the video list on the video.html page.
 * NOTE: Modified to accept and use 'category' for categorized lessons.
 * @param {string} teacherName - The name of the teacher.
 * @param {number} lessonIndex - The index of the lesson.
 * @param {string} categoryName - The name of the category (e.g., "الشهر الأول"), null/undefined for standard lessons.
 */
function showVideoPlayer(teacherName, lessonIndex, categoryName) {
    let lesson;
    
    // Check if categoryName is present and try to decode it (since it was encoded in showCategoryLessons)
    const decodedCategoryName = categoryName ? decodeURIComponent(categoryName) : null;
    
    if (decodedCategoryName) {
        // If a category is provided, look into the categorized structure
        lesson = DATA.lessons[teacherName]?.[decodedCategoryName]?.[lessonIndex];
    } else {
        // Use the standard array lookup for non-categorized lessons
        lesson = DATA.lessons[teacherName]?.[lessonIndex];
    }
    
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


// ----------------------------------------------------
// Page Initialization Logic (MUST BE UPDATED)
// ----------------------------------------------------

// This section needs to be updated to handle the new category parameter in lessons.html and video.html

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const teacherName = urlParams.get('teacher');
    const subjectKey = urlParams.get('subject');
    const lessonIndex = urlParams.get('lessonIndex');
    const subjectBack = urlParams.get('subjectBack');
    const categoryName = urlParams.get('category'); // <--- NEW PARAMETER

    // 1. Logic for teachers.html
    if (window.location.pathname.endsWith('teachers.html') && subjectKey) {
        showTeachers(subjectKey);
    }
    
    // 2. Logic for lessons.html
    if (window.location.pathname.endsWith('lessons.html') && teacherName) {
        showLessons(teacherName, subjectBack);
    }

    // 3. Logic for video.html
    if (window.location.pathname.endsWith('video.html') && teacherName && lessonIndex !== null) {
        // Pass the new category parameter to the video player function
        showVideoPlayer(teacherName, parseInt(lessonIndex), categoryName); 
        
        // Setup the back button functionality (needs to handle category logic)
        const backButton = document.getElementById('backButton');
        if (backButton) {
            backButton.href = categoryName 
                ? `lessons.html?teacher=${teacherName}&back=${subjectBack}` // Simplification: Go back to teacher's main lessons page to re-render categories
                : `lessons.html?teacher=${teacherName}&back=${subjectBack}`; // For standard lessons
        }
    }
});
