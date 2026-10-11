const WA_NUMBER = "01003673774";
const WA_LINK = `https://wa.me/2${WA_NUMBER}`;

window.GLOBAL_STAGES = [
    { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني الإعدادي', val: 8, num: 2 }, { name: 'الثالث الإعدادي', val: 9, num: 3 }] },
    { title: 'المرحلة الثانوية', grades: [{ name: 'الصف الأول الثانوى', val: 10, num: 1 }, { name: 'الثاني الثانوى', val: 11, num: 2 }, { name: 'الثالث الثانوى', val: 12, num: 3 }] }
];

// Helper for Admin Dashboard content selection
window.updateCountryStages = function (countryId, stageId, gradeId, autoLoad = false) {
    const stageSelect = document.getElementById(stageId);
    if (!stageSelect) return;
    stageSelect.innerHTML = '<option value="">اختر المرحلة</option>';
    stageSelect.innerHTML += '<option value="ALL">كل المراحل</option>';
    window.GLOBAL_STAGES.forEach((stage, idx) => {
        let opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = stage.title;
        stageSelect.appendChild(opt);
    });
};

window.updateGrades = function (countryId, stageId, gradeId) {
    const stageSelect = document.getElementById(stageId);
    if (!stageSelect) return;
    const stageIdx = stageSelect.value;
    const gradeSelect = document.getElementById(gradeId);
    if (!gradeSelect) return;
    gradeSelect.innerHTML = '<option value="">اختر الصف</option>';
    if (stageIdx === 'ALL' || !stageIdx) {
        gradeSelect.innerHTML += '<option value="ALL">كل الصفوف</option>';
    } else if (window.GLOBAL_STAGES && window.GLOBAL_STAGES[stageIdx]) {
        window.GLOBAL_STAGES[stageIdx].grades.forEach(g => {
            let opt = document.createElement('option');
            opt.value = g.val;
            opt.textContent = g.name;
            gradeSelect.appendChild(opt);
        });
    }
};

const COUNTRY_SYSTEMS = {
    KW: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الصف الأول', val: 1, num: 1 }, { name: 'الصف الثاني', val: 2, num: 2 }, { name: 'الصف الثالث', val: 3, num: 3 }, { name: 'الصف الرابع', val: 4, num: 4 }, { name: 'الصف الخامس', val: 5, num: 5 }] },
        { title: 'المرحلة المتوسطة', grades: [{ name: 'الصف السادس', val: 6, num: 6 }, { name: 'الصف السابع', val: 7, num: 7 }, { name: 'الصف الثامن', val: 8, num: 8 }, { name: 'الصف التاسع', val: 9, num: 9 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'الصف العاشر', val: 10, num: 10 }, { name: 'الصف الحادي عشر', val: 11, num: 11 }, { name: 'الصف الثاني عشر', val: 12, num: 12 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'الصف العاشر', val: 13, num: 10 }, { name: 'الصف الحادي عشر', val: 14, num: 11 }, { name: 'الصف الثاني عشر', val: 15, num: 12 }] }
    ],
    EG: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني الإعدادي', val: 8, num: 2 }, { name: 'الثالث الإعدادي', val: 9, num: 3 }] },
        { title: 'المرحلة الثانوية', grades: [{ name: 'الصف الأول', val: 10, num: 1 }, { name: 'الثاني', val: 11, num: 2 }, { name: 'الثالث', val: 12, num: 3 }] }
    ],
    SA: [
        { title: 'الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المتوسطة', grades: [{ name: 'الأول المتوسط', val: 7, num: 1 }, { name: 'الثاني', val: 8, num: 2 }, { name: 'الثالث', val: 9, num: 3 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'الصف الأول', val: 10, num: 1 }, { name: 'الثاني', val: 11, num: 2 }, { name: 'الثالث', val: 12, num: 3 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'الصف الأول', val: 13, num: 1 }, { name: 'الثاني', val: 14, num: 2 }, { name: 'الثالث', val: 15, num: 3 }] }
    ],
    OM: [
        { title: 'التعليم الأساسي 1', grades: [{ name: 'الصف الأول', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }] },
        { title: 'التعليم الأساسي 2', grades: [{ name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }, { name: 'السابع', val: 7, num: 7 }, { name: 'الثامن', val: 8, num: 8 }, { name: 'التاسع', val: 9, num: 9 }, { name: 'العاشر', val: 10, num: 10 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'الحادي عشر', val: 11, num: 11 }, { name: 'الثاني عشر', val: 12, num: 12 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'الحادي عشر', val: 14, num: 11 }, { name: 'الثاني عشر', val: 15, num: 12 }] }
    ],
    QA: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني', val: 8, num: 2 }, { name: 'الثالث', val: 9, num: 3 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'العاشر', val: 10, num: 1 }, { name: 'الحادي عشر', val: 11, num: 2 }, { name: 'الثاني عشر', val: 12, num: 3 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'العاشر', val: 13, num: 1 }, { name: 'الحادي عشر', val: 14, num: 2 }, { name: 'الثاني عشر', val: 15, num: 3 }] }
    ],
    AE: [
        { title: 'الحلقة الأولى', grades: [{ name: 'الصف الأول', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }] },
        { title: 'الحلقة الثانية', grades: [{ name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }, { name: 'السابع', val: 7, num: 7 }, { name: 'الثامن', val: 8, num: 8 }] },
        { title: 'الحلقة الثالثة', grades: [{ name: 'التاسع', val: 9, num: 9 }, { name: 'العاشر', val: 10, num: 10 }, { name: 'الحادي عشر', val: 11, num: 11 }, { name: 'الثاني عشر', val: 12, num: 12 }] }
    ],
    BH: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني', val: 8, num: 2 }, { name: 'الثالث', val: 9, num: 3 }] },
        { title: 'المرحلة الثانوية', grades: [{ name: 'الأول الثانوي', val: 10, num: 1 }, { name: 'الثاني الثانوي', val: 11, num: 2 }, { name: 'الثالث الثانوي', val: 12, num: 3 }] }
    ]
};

const RATES = {
    KW: { cur: 'د.ك', rate: 1 / 160, dialect: { hero_sub: 'يا هلا بك! جودة معلمين تشرح الصدر، وبأسعار ما تحس فيها.', hero_t1: 'الخبرة مو بس رقم', hero_t2: 'هذي قصتنا في التعليم', discover: 'اكتشف المواد', login: 'تسجيل دخول', stat_vid: 'فيديو تعليمي تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تدري إن كتبنا', smart2: 'تتكلم ؟', smart_desc: 'كتبنا وتلاخيصنا شاملة، مصممة عشان تضمن لك التفوق المطلق.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ رحلة التميز!', hero_btn: 'استكشف الدروس', req: 'طلب الحين', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } },
    SA: { cur: 'ر.س', rate: 1 / 13, dialect: { hero_sub: 'أهلاً بك! جودة معلمين تسر الخاطر، والأسعار في متناول الجميع.', hero_t1: 'خبراء التعليم المنزلي', hero_t2: 'وبصمتنا بالتعليم', discover: 'تصفح المواد', login: 'تسجيل الدخول', stat_vid: 'مقطع فيديو تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب مجاب', smart1: 'تدري إن مناهجنا', smart2: 'تتفاعل معك؟', smart_desc: 'ملازمنا التفاعلية عالية الجودة مصممة لضمان تفوقك الدائم.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتميزين وابدأ رحلة التفوق!', hero_btn: 'استكشف دوراتنا', req: 'اطلب الآن', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة الشرح', success_student: 'الطالب المتفوق', private_lesson_title: 'دروس خصوصية', private_lesson_sub: 'أنت الآن VIP استفسر براحتك', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'بث مباشر مع كبار المعلمين', live_sub: 'حصة تفاعلية مع زملائك' } },
    AE: { cur: 'د.إ', rate: 1 / 13, dialect: { hero_sub: 'مرحبابك! جودة معلمين تثلج الصدر، وأسعار ولا أروع.', hero_t1: 'التميز يبدأ من هنا', hero_t2: 'وهذي حكايتنا في التعليم', discover: 'تصفح المواد', login: 'دخول الحين', stat_vid: 'فيديو تعليمي حصري', stat_stu: 'طالب متميز معانا', stat_qa: 'سؤال وجواب مشروح', smart1: 'تعرف إن كتبنا', smart2: 'تتحدث لك؟', smart_desc: 'منهجك صار بمتناول إيدك، مبسط ومصمم بأسلوب يخليك الأول.', suc1: 'كون واحد من آلاف', suc2: 'المتفوقين وابدأ الإبداع!', hero_btn: 'تصفح الكورسات', req: 'اطلب الحين', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'للتفوق دروب', hero_pill_right_title: 'أمهر المعلمين', hero_pill_right_sub: 'مبسط وسريع', hero_quality: 'شرح متميز', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'أنت الحين VIP إسأل بدون توقف', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'بث مباشر وفعال', live_sub: 'تفاعل مع أصدقائك بمتعة' } },
    QA: { cur: 'ر.ق', rate: 1 / 13, dialect: { hero_sub: 'حياك الله! جودة تشرح الخاطر، وبسعر في متناول الكل.', hero_t1: 'شرح مبسط ومميز', hero_t2: 'قصّتنا ويا التعلام', discover: 'تصفح المواد', login: 'تسجيل دخول', stat_vid: 'فيديو شرح تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تدري إن ملازمنا', smart2: 'تشرح لك؟', smart_desc: 'كتب تلخص لك كل ما تحتاجه، مصممة بطريقة عصرية وسهلة.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ التميز!', hero_btn: 'اكتشف دوراتنا', req: 'اطلب الآن', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } },
    OM: { cur: 'ر.ع', rate: 1 / 125, dialect: { hero_sub: 'أهلاً بك! مدرسين يشرحوا الصدر، وبأسعار جداً ممتازة.', hero_t1: 'طريقك للتفوق', hero_t2: 'هذي قصتنا التعليمية', discover: 'تصفح المنصة', login: 'تسجيل الدخول', stat_vid: 'فيديو تعليمي مميز', stat_stu: 'طالب متميز معانا', stat_qa: 'سؤال محدد ومجاب', smart1: 'تعرف إن ملخصاتنا', smart2: 'تحاكيك؟', smart_desc: 'ملخصات متقنة، شاملة وبسيطة، تضمن وصولك للقمة.', suc1: 'انضم لزملائك', suc2: 'المتفوقين وابدأ التفوق!', hero_btn: 'تصفح منصتنا', req: 'اطلب الآن', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حضور', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } },
    EG: { cur: 'ج.م', rate: 1, dialect: { hero_sub: 'أهلاً بيك! جودة مدرسين تشرح القلب. وسعر؟ كأنك ما دفعتش!', hero_t1: 'الخبرة مش بس رقم', hero_t2: 'دي حكايتنا في التعليم', discover: 'اكتشف المواد', login: 'تسجيل الدخول', stat_vid: 'فيديو تعليمي تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تعرف إن كتبنا', smart2: 'بتتكلم؟', smart_desc: 'أقوى المذكرات لتأهيل الأوائل، مبسطة ومصممة بأحدث الأساليب.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ التميز!', hero_btn: 'استكشف الكورسات', req: 'اطلب دلوقتي', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'طريقك للقمة', hero_pill_right_title: 'أفضل المعلمين', hero_pill_right_sub: 'شرح احترافي بجد', hero_quality: 'شرح ممتاز', success_student: 'الطالب المتفوق', private_lesson_title: 'حصة خصوصي', private_lesson_sub: 'انت دلوقتي VIP اسأل براحتك خالص', order_lesson: 'اطلب حصتك', live_students: 'الطلبة', live_teacher: 'المدرس', live_title: 'شرح مباشر مع نخبة من المدرسين', live_sub: 'شارك مع مدرسك انت وصحابك' } },
    BH: { cur: 'د.ب', rate: 1 / 13, dialect: { hero_sub: 'حياك الله! جودة تشرح الخاطر، وبسعر في متناول الكل.', hero_t1: 'شرح مبسط ومميز', hero_t2: 'قصّتنا ويا التعلام', discover: 'تصفح المواد', login: 'تسجيل دخول', stat_vid: 'فيديو شرح تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تدري إن ملازمنا', smart2: 'تشرح لك؟', smart_desc: 'كتب تلخص لك كل ما تحتاجه، مصممة بطريقة عصرية وسهلة.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ التميز!', hero_btn: 'اكتشف دوراتنا', req: 'اطلب الآن', academy_name: 'منصة دعاء انور التعليمية', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } }
};

window.getDialect = function (key, code) { return (RATES[code] && RATES[code].dialect[key]) ? RATES[code].dialect[key] : (RATES['EG'].dialect[key] || ''); };

window.forceFakeData = function () {
    let codes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');
    let needUpdateCodes = false;
    if (!codes.find(c => c.code === '1234')) { codes.push({ code: '1234', isUsed: true }); needUpdateCodes = true; }
    if (needUpdateCodes) localStorage.setItem('spedia_codes', JSON.stringify(codes));

    let users = JSON.parse(localStorage.getItem('spedia_users') || '[]');
    let needUpdateUsers = false;
    if (!users.find(u => u.code === '1234')) { users.push({ code: '1234', name: 'أحمد محمود', phone: '01012345678', grade: '10', role: 'student' }); needUpdateUsers = true; }
    if (needUpdateUsers) localStorage.setItem('spedia_users', JSON.stringify(users));

    let content = JSON.parse(localStorage.getItem('spedia_content') || '[]');
    // Clean all prices and codes from content
    content = content.map(c => {
        delete c.priceBase;
        delete c.courseCode;
        return c;
    });
    let fakeBooksAndCourses = [
        { id: 101, type: 'book', grade: '10', title: 'كتاب الرياضيات - متقدم', image: 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png' },
        { id: 102, type: 'course', grade: '10', title: 'الكيمياء الشامل الممتع', image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3462295-2895977.png' },
        { id: 103, type: 'book', grade: '11', title: 'مذكرة الفيزياء الذهبية', image: 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png' },
        { id: 104, type: 'course', grade: '11', title: 'دورة القدرات كمي ولفظي', image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-education-3414902-2868846.png' },
        { id: 105, type: 'course', grade: '12', title: 'المراجعة النهائية', image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3462291-2895973.png' },
        { id: 106, type: 'book', grade: '1', title: 'تأسيس القراءة والكتابة', image: 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png' },
        { id: 107, type: 'course', grade: '7', title: 'العلوم العامة المكثفة', image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-education-3414902-2868846.png' }
    ];
    let needUpdateContent = false;
    fakeBooksAndCourses.forEach(fc => { if (!content.find(c => c.id === fc.id)) { content.push(fc); needUpdateContent = true; } });
    localStorage.setItem('spedia_content', JSON.stringify(content));

    let exams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    if (exams.length > 0 && !exams[0].questionsList) exams = [];
    if (exams.length === 0) {
        exams.push({
            id: 201, grade: '10', title: 'امتحان تجريبي شامل (للتقييم)', durationMinutes: 60, type: 'exam', typeName: 'امتحان نهائي',
            questionsList: [
                { type: 'mcq', text: 'ما هي أهمية بناء بنية تحتية قوية للبرمجيات؟', options: ['تسهيل التوسع مستقبلاً', 'زيادة الألوان بالموقع', 'تقليل سرعة النت', 'لا شيء مما سبق'] },
                { type: 'tf', text: 'الجافاسكريبت هي لغة برمجة تعمل على الخوادم والمتصفحات معاً.', answer: 'true' },
                { type: 'essay', text: 'اشرح باختصار كيف تعمل أنظمة إدارة قواعد البيانات العلائقية.' }
            ]
        });
        exams.push({ id: 202, grade: '11', title: 'اختبار قصير - الوحدة الأولى', durationMinutes: 20, type: 'quiz', typeName: 'اختبار قصير', questionsList: [{ type: 'tf', text: 'الأرض مسطحة.', answer: 'false' }] });
        exams.push({ id: 203, grade: '10', title: 'تسميع فيزياء - قوانين نيوتن', durationMinutes: 120, type: 'homework', typeName: 'تسميع', questionsList: [{ type: 'essay', text: 'اكتب نص قانون نيوتن الثالث.' }] });
        localStorage.setItem('spedia_exams', JSON.stringify(exams));
    }
};



window.injectGlobalAnimations = function () {
    const icons = ['fas fa-book-open', 'fas fa-graduation-cap', 'fas fa-flask', 'fas fa-atom', 'fas fa-microscope', 'fas fa-calculator', 'fas fa-square-root-alt', 'fas fa-globe-americas', 'fas fa-pencil-ruler', 'fas fa-dna', 'far fa-lightbulb'];
    const colors = ['rgba(18, 184, 197, 0.6)', 'rgba(230, 126, 34, 0.5)', 'rgba(232, 28, 255, 0.5)', 'rgba(19, 38, 68, 0.4)'];

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes gentleFloat {
            0% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 0.15; }
            50% { transform: translateY(-30px) scale(1.05) rotate(10deg); opacity: 0.3; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.05)); }
            100% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 0.15; }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        let maxH = window.innerHeight;
        for (let i = 0; i < 12; i++) {
            let el = document.createElement('i');
            el.className = icons[Math.floor(Math.random() * icons.length)];
            let size = Math.random() * 30 + 20;
            let color = colors[Math.floor(Math.random() * colors.length)];
            el.style.cssText = `
                position: fixed;
                top: ${Math.random() * 80 + 10}vh;
                left: ${Math.random() * 90 + 5}vw;
                font-size: ${size}px;
                color: ${color};
                z-index: -1;
                pointer-events: none;
                animation: gentleFloat ${Math.random() * 5 + 5}s ease-in-out infinite;
                filter: blur(0.5px);
            `;
            document.body.appendChild(el);
        }
    }, 1500);
};

window.injectBookTransition = function () {
    let loader = document.createElement('div');
    loader.id = 'book-transition';
    loader.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 999999; display: flex; justify-content: center; align-items: center;
        background-color: transparent; pointer-events: none; transition: 0.5s;
    `;
    loader.innerHTML = `
        <div style="position:absolute; top:0; left:0; width:50%; height:100%; background:var(--primary-color); transform-origin: left; transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);" class="book-left"></div>
        <div style="position:absolute; top:0; right:0; width:50%; height:100%; background:var(--primary-color); transform-origin: right; transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);" class="book-right"></div>
        <div style="position:absolute; font-family:'Tajawal'; color:#fff; font-size:40px; font-weight:900; z-index:2; transition: opacity 0.5s;" class="book-logo">منصة دعاء انور التعليمية</div>
    `;
    document.body.appendChild(loader);

    setTimeout(() => {
        document.querySelector('.book-left').style.transform = 'perspective(1500px) rotateY(-90deg)';
        document.querySelector('.book-right').style.transform = 'perspective(1500px) rotateY(90deg)';
        document.querySelector('.book-logo').style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 100);

    document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', function (e) {
            let target = this.getAttribute('href');
            if (target && !target.startsWith('#') && !target.startsWith('javascript')) {
                // Removed e.preventDefault() and setTimeout to prevent freezing.
                // Just allow the browser to natively navigate.
            }
        });
    });
};

window.injectCartModal = function () {
    // Shopping cart removed per user requirements
};

window.renderMegaMenu = function () {
    const cCode = localStorage.getItem('spedia_country') || 'EG';
    const grid = document.querySelector('.mega-menu-grid');
    if (!grid) return;

    let structure = COUNTRY_SYSTEMS[cCode] || COUNTRY_SYSTEMS['EG'];
    grid.innerHTML = structure.map(stage => `
        <div class="mega-column">
            <h4>${stage.title}</h4>
            ${stage.grades.map(g => `<a href="grade.html?g=${g.val}&name=${encodeURIComponent(g.name)}">${g.name}</a>`).join('')}
        </div>
    `).join('');
};

function injectFloatingAdmin() {
    if (document.getElementById('floating-admin-btn-static')) return; // Already in HTML
    if (!document.getElementById('floating-admin-btn')) {
        let btn = document.createElement('button');
        btn.id = 'floating-admin-btn';
        btn.innerHTML = '<i class="fas fa-user-shield"></i>';
        btn.title = "لوحة الإدارة";
        btn.style.cssText = 'position:fixed; bottom:20px; left:20px; z-index:99999; background:linear-gradient(135deg, #121e33, #1e3c72); color:#fff; border:none; width:65px; height:65px; border-radius:50%; font-family:"Tajawal"; font-weight:800; box-shadow:0 10px 20px rgba(0,0,0,0.4); cursor:pointer; font-size:25px; transition:0.3s; display:flex; align-items:center; justify-content:center; border:2px solid rgba(255,255,255,0.2);';
        btn.onclick = () => { if (typeof promptAdmin === 'function') promptAdmin(); else if (window.promptAdmin) window.promptAdmin(); };
        btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
        btn.onmouseout = () => btn.style.transform = 'scale(1)';
        document.body.appendChild(btn);
    }
}
window.openCountryModal = function (e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('country-modal');
    if (modal) modal.style.display = 'flex';
};



window.injectFloatingAdmin = injectFloatingAdmin;



window.attachGlobalEvents = function () {


    const btnDiscover = document.querySelector('.btn-rocket');
    if (btnDiscover) {
        btnDiscover.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'explore.html';
        });
    }
    const scrollBtn = document.querySelector('.scroll-top-btn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) scrollBtn.classList.add('visible');
            else scrollBtn.classList.remove('visible');
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

window.applyCountryRules = function () {
    const cCode = 'EG';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        let text = window.getDialect(key, cCode);
        if (text) el.innerHTML = text;
    });

    const flagImages = {
        'KW': 'flag_kw.jpg',
        'SA': 'https://flagcdn.com/sa.svg',
        'AE': 'flag_ae.jpg',
        'QA': 'https://flagcdn.com/qa.svg',
        'OM': 'https://flagcdn.com/om.svg',
        'EG': 'https://flagcdn.com/eg.svg',
        'BH': 'https://flagcdn.com/bh.svg'
    };
    const mainFlag = document.querySelector('.country-flag img');
    if (mainFlag) mainFlag.src = flagImages[cCode] || flagImages['EG'];
};

window.renderPrice = function (priceBase) {
    const cCode = localStorage.getItem('spedia_country') || 'EG';
    const info = RATES[cCode] || RATES['EG'];
    const converted = (priceBase * info.rate).toFixed(2);
    let txt = converted.endsWith('.00') ? converted.slice(0, -3) : converted;
    return `${txt} ${info.cur}`;
};

window.renderCurrentPage = async function () {
    const path = window.location.pathname;

    if (path.includes('grade.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const g = urlParams.get('g') || 10;
        const name = urlParams.get('name') || `الصف ${g}`;
        if (document.getElementById('grade-title')) document.getElementById('grade-title').innerText = name;

        const cCode = localStorage.getItem('spedia_country') || 'EG';
        let content = JSON.parse(localStorage.getItem('spedia_content') || '[]');
        if (window.fsData) {
            try {
                let fsContent = await window.fsData.getAllContent();
                // Deduplicate items
                let allContent = [...content, ...fsContent];
                let uniqueMap = new Map();
                allContent.forEach(c => uniqueMap.set(c.fsId || c.id, c));
                content = Array.from(uniqueMap.values());
            } catch (e) { console.warn(e); }
        }

        // Filter by grade
        let filteredContent = content.filter(c => c.grade == g || true);

        let books = filteredContent.filter(c => c.type == 'book');
        let courses = filteredContent.filter(c => c.type == 'course');
        let games = filteredContent.filter(c => c.type == 'game');

        const courseCont = document.getElementById('courses-list') || document.getElementById('courses-grid');
        const bookCont = document.getElementById('books-list') || document.getElementById('books-grid');
        const gameCont = document.getElementById('games-grid');

        if (bookCont) window.renderCards(bookCont.id, books, "", "فتح وحفظ المحتوى");
        if (courseCont) window.renderCards(courseCont.id, courses, "", "فتح وحفظ المحتوى");
        if (gameCont) window.renderCards(gameCont.id, games, "", "فتح وحفظ المحتوى");
    }
    else if (path.includes('my-subscriptions.html')) {
        let user = JSON.parse(localStorage.getItem('spedia_currentUser') || 'null');
        if (user) {
            window.location.href = "dashboard.html#dash-my-content";
        } else {
            window.location.href = "login.html";
        }
        return;
    }
    else if (path.includes('dashboard.html')) {
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        if (!user) { window.location.href = 'login.html'; return; }

        const elName = document.getElementById('dash-name');
        if (elName) elName.innerText = user.name;

        const elGrade = document.getElementById('dash-grade');
        if (elGrade) elGrade.innerText = `طالب مسجل كود: ${user.code}`;

        await window.loadStudentData(user);

        // Check if hash points to a tab (such as #dash-my-content)
        if (window.location.hash) {
            let tabId = window.location.hash.substring(1);
            if (document.getElementById(tabId)) {
                let link = document.querySelector(`.sidebar-menu a[onclick*="${tabId}"]`);
                window.showDashTab(tabId, link);
            }
        }
    }
    else if (path.includes('admin.html')) {
        if (sessionStorage.getItem('isAdmin') !== 'yes') {
            window.location.href = 'index.html';
        }
    }

    // Observer Details
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animated');
        });
    });
    document.querySelectorAll('.animate-on-scroll, .subject-card').forEach(el => observer.observe(el));
};

window.renderCards = function (containerId, items, whatsappPrefix, btnText, isMySubscriptions = false) {
    let cont = document.getElementById(containerId);
    if (!cont) return;
    cont.innerHTML = '';
    if (items.length === 0) {
        cont.innerHTML = '<p style="text-align:center;width:100%;color:#888;font-weight:bold;padding:40px;">لا يوجد محتوى. الإدارة ستضيفه قريباً.</p>';
        return;
    }
    items.forEach(item => {
        let div = document.createElement('div');
        div.className = 'subject-card animate-on-scroll';

        let safeTitle = (item.title || '').replace(/'/g, "\\'");
        let safeId = item.fsId || item.id || '';
        let itemType = item.type || 'course';

        // Single button: "فتح وحفظ المحتوى" under each video and book
        let btnHtml = `
            <button onclick="window.handleOpenAndSaveContent('${safeId}', '${safeTitle}', '${itemType}')" 
                    class="btn-primary w-100 btn-save-open" 
                    style="width:100%; padding:14px 18px; border-radius:14px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #12b8c5, #1e3c72); display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 8px 20px rgba(18,184,197,0.25); border:none; cursor:pointer; transition:0.3s;">
                <i class="fas fa-folder-plus"></i> فتح وحفظ المحتوى
            </button>
        `;

        let imgStyle = item.type === 'course'
            ? 'object-fit:cover; width:100%; height:100%; position:absolute; top:0; left:0;'
            : 'object-fit:contain; height:80%; position:absolute; top:10%; left:0; right:0; margin:auto; filter:drop-shadow(0 15px 15px rgba(0,0,0,0.15));';
        let ytOverlay = item.type === 'course'
            ? '<div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.35); display:flex; justify-content:center; align-items:center; pointer-events:none;"><i class="fab fa-youtube" style="color:red; font-size:60px; filter:drop-shadow(0 5px 10px rgba(0,0,0,0.5));"></i></div>'
            : '';

        div.innerHTML = `
            <div class="subject-cover" style="background:linear-gradient(135deg, #e8fbff, #f4f7fa); height:180px; position:relative; overflow:hidden;">
                <img src="${item.image || 'https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3462295-2895977.png'}" style="${imgStyle} transition:0.3s;" class="hover-scale">
                ${ytOverlay}
            </div>
            <div class="subject-body" style="text-align:center; padding:25px;">
                <h3 style="font-size:20px; font-weight:800; color:var(--text-dark); margin-bottom:12px;">${item.title}</h3>
                <div style="margin-bottom:18px;">
                    <span style="background:linear-gradient(135deg, #e8f5e9, #c8e6c9); color:#2e7d32; font-size:14px; font-weight:800; padding:6px 16px; border-radius:20px; display:inline-flex; align-items:center; gap:6px;">
                        <i class="fas fa-check-circle"></i> مجاني بالكامل
                    </span>
                </div>
                ${btnHtml}
            </div>
        `;
        cont.appendChild(div);
    });
};

window.handleOpenAndSaveContent = async function (id, title, type) {
    // 1. Get content item
    let content = JSON.parse(localStorage.getItem('spedia_content') || '[]');
    if (window.fsData && window.fsData.getAllContent) {
        try {
            let fsC = await window.fsData.getAllContent();
            content = [...content, ...fsC];
        } catch (e) { }
    }
    let targetItem = content.find(c => (c.fsId == id || c.id == id || c.title === title)) || { id, title, type };

    let currentUser = JSON.parse(localStorage.getItem('spedia_currentUser') || 'null');
    let defaultCode = currentUser ? currentUser.code : '';

    let modal = document.getElementById('save-content-code-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'save-content-code-modal';
        modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:100005; justify-content:center; align-items:center; backdrop-filter:blur(6px);';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div style="background:#fff; border-radius:24px; padding:35px 28px; width:90%; max-width:480px; text-align:center; box-shadow:0 25px 60px rgba(0,0,0,0.3); position:relative;">
            <div style="width:70px; height:70px; border-radius:50%; background:linear-gradient(135deg, #e8fbff, #d1f7fa); color:var(--primary-color); display:flex; align-items:center; justify-content:center; margin:0 auto 15px auto; font-size:32px;">
                <i class="fas fa-folder-plus"></i>
            </div>
            <h3 style="margin-bottom:10px; color:#1e3c72; font-weight:900; font-size:22px;">فتح وحفظ المحتوى</h3>
            <p style="margin-bottom:18px; color:#555; font-size:15px; line-height:1.6;">
                لحفظ <strong>"${title}"</strong> في خانة <strong>(كورساتي وكتبي)</strong> داخل بروفايلك ومشاهدته في أي وقت، يرجى إدخال <strong>كود الطالب (كود تسجيل الدخول)</strong>:
            </p>
            <input type="text" id="save-content-code-input" value="${defaultCode}" placeholder="أدخل كود الطالب الخاص بك..." style="width:100%; padding:14px; margin-bottom:18px; font-size:18px; text-align:center; border:2px solid #12b8c5; border-radius:12px; font-weight:bold; box-sizing:border-box; outline:none;">
            <div style="display:flex; gap:10px;">
                <button id="btn-do-save-content" class="btn-primary" style="flex:2; padding:14px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #12b8c5, #1e3c72); cursor:pointer; border:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                    <i class="fas fa-check-circle"></i> تأكيد وحفظ في البروفايل
                </button>
                <button onclick="document.getElementById('save-content-code-modal').style.display='none'" class="btn-secondary" style="flex:1; padding:14px; border-radius:12px; font-size:15px; font-weight:700; background:#f4f7fa; color:#666; border:none; cursor:pointer;">
                    إلغاء
                </button>
            </div>
            <p style="margin-top:15px; margin-bottom:0; font-size:13px; color:#888;">
                ليس لديك حساب؟ <a href="login.html" style="color:var(--primary-color); font-weight:bold; text-decoration:underline;">سجل كود جديد هنا</a>
            </p>
        </div>
    `;
    modal.style.display = 'flex';

    document.getElementById('btn-do-save-content').onclick = async () => {
        let codeInput = document.getElementById('save-content-code-input').value.trim();
        if (!codeInput) {
            alert('الرجاء إدخال كود الطالب الخاص بك');
            return;
        }

        let btn = document.getElementById('btn-do-save-content');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الحفظ...';
        btn.disabled = true;

        // Verify or create student profile for this code
        let studentUser = null;
        let allUsers = [];
        if (window.fsData && window.fsData.getAllUsers) {
            try { allUsers = await window.fsData.getAllUsers(); } catch (e) { }
        }
        if (!allUsers || !allUsers.length) {
            allUsers = JSON.parse(localStorage.getItem('spedia_users') || '[]');
        }
        studentUser = allUsers.find(u => u.code.toLowerCase() === codeInput.toLowerCase() || u.code === codeInput);

        if (!studentUser) {
            let allCodes = [];
            if (window.fsData && window.fsData.getAllCodes) {
                try { allCodes = await window.fsData.getAllCodes(); } catch (e) { }
            }
            if (!allCodes || !allCodes.length) {
                allCodes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');
            }
            let codeObj = allCodes.find(c => c.code === codeInput);

            studentUser = {
                code: codeInput,
                name: (codeObj && codeObj.studentName) ? codeObj.studentName : ('طالب ' + codeInput),
                grade: targetItem.grade || '10',
                role: 'student',
                id: Date.now()
            };

            if (window.fsData && window.fsData.addUser) {
                try { await window.fsData.addUser(studentUser); } catch (e) { }
            }
            let uList = JSON.parse(localStorage.getItem('spedia_users') || '[]');
            if (!uList.some(u => u.code === codeInput)) {
                uList.push(studentUser);
                localStorage.setItem('spedia_users', JSON.stringify(uList));
            }
        }

        // Set as current logged in user
        localStorage.setItem('spedia_currentUser', JSON.stringify(studentUser));

        // Save content to student's library
        let subItem = {
            code: studentUser.code,
            title: targetItem.title,
            type: targetItem.type,
            contentId: targetItem.fsId || targetItem.id,
            image: targetItem.image || '',
            videoUrl: targetItem.videoUrl || '',
            youtubeId: targetItem.youtubeId || '',
            pdfUrl: targetItem.pdfUrl || '',
            htmlUrl: targetItem.htmlUrl || '',
            grade: targetItem.grade || studentUser.grade,
            date: new Date().toLocaleDateString('ar-EG')
        };

        if (window.fsData && window.fsData.addSubscriptionCode) {
            try {
                await window.fsData.addSubscriptionCode(subItem);
            } catch (e) { console.warn("Firebase sub save failed:", e); }
        }

        let subs = JSON.parse(localStorage.getItem('spedia_sub_codes') || '[]');
        if (!subs.some(s => s.code === studentUser.code && s.title === targetItem.title)) {
            subs.push(subItem);
            localStorage.setItem('spedia_sub_codes', JSON.stringify(subs));
        }

        let mySavedKey = 'spedia_student_saved_' + studentUser.code;
        let mySaved = JSON.parse(localStorage.getItem(mySavedKey) || '[]');
        if (!mySaved.some(s => s.title === targetItem.title)) {
            mySaved.push(targetItem);
            localStorage.setItem(mySavedKey, JSON.stringify(mySaved));
        }

        let unlocked = JSON.parse(localStorage.getItem('spedia_unlocked') || '[]');
        if (!unlocked.includes(targetItem.title)) {
            unlocked.push(targetItem.title);
            localStorage.setItem('spedia_unlocked', JSON.stringify(unlocked));
        }

        let directUrl = '';
        if (targetItem.type === 'course') {
            directUrl = targetItem.videoUrl || (targetItem.youtubeId ? `https://www.youtube.com/watch?v=${targetItem.youtubeId}` : '');
        } else if (targetItem.type === 'game') {
            directUrl = targetItem.htmlUrl || '';
        } else {
            directUrl = targetItem.pdfUrl || '';
        }

        let directBtnHtml = directUrl ? `
            <a href="${directUrl}" target="_blank" class="btn-primary" style="padding:14px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #4caf50, #2e7d32); text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                <i class="fas fa-play-circle"></i> فتح ومشاهدة المحتوى الآن مباشرة
            </a>
        ` : '';

        modal.innerHTML = `
            <div style="background:#fff; border-radius:24px; padding:35px 28px; width:90%; max-width:500px; text-align:center; box-shadow:0 25px 60px rgba(0,0,0,0.3); animation:popIn 0.3s ease;">
                <div style="width:75px; height:75px; border-radius:50%; background:#e8f5e9; color:#2e7d32; display:flex; align-items:center; justify-content:center; margin:0 auto 15px auto; font-size:36px;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="font-size:22px; font-weight:900; color:#121e33; margin-bottom:10px;">تمت الإضافة إلى بروفايلك بنجاح! 🎉</h3>
                <p style="font-size:15px; color:#555; margin-bottom:20px; line-height:1.6;">
                    تم حفظ <strong>"${targetItem.title}"</strong> داخل خانة <strong>(كورساتي وكتبي)</strong> في بروفايلك تحت الكود: <strong style="color:var(--primary-color);">${studentUser.code}</strong>.
                    يمكنك مشاهدته في أي وقت دون قيود أو مشاكل!
                </p>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <a href="dashboard.html#dash-my-content" class="btn-primary" style="padding:14px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #12b8c5, #1e3c72); text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                        <i class="fas fa-user-graduate"></i> الذهاب إلى بروفايلي ومشاهدة المحتوى
                    </a>
                    ${directBtnHtml}
                    <button onclick="document.getElementById('save-content-code-modal').style.display='none'" class="btn-secondary" style="padding:12px; border-radius:12px; font-size:15px; font-weight:700; background:#f4f7fa; color:#666; border:none; cursor:pointer;">
                        متابعة التصفح هنا
                    </button>
                </div>
            </div>
        `;
    };
};

window.sendWhatsApp = function (msg) {
    let finalMsg = "أهلاً بك في منصة دعاء انور التعليمية.\n\n" + msg;
    window.open(`${WA_LINK}?text=${encodeURIComponent(finalMsg)}`, '_blank');
};

// Cart removed per user request
window.openCart = function (e) { if (e) e.preventDefault(); };
window.initiatePurchase = function () { };
window.continuePurchaseWithCode = function () { };
window.addToCart = function () { };

window.handleLogin = async function (e) {
    if (e) e.preventDefault();
    let code = document.getElementById('code-input').value.trim().toUpperCase();
    if (!code) return alert("الرجاء إدخال كود الطالب");

    let allUsers = [];
    if (window.fsData && window.fsData.getAllUsers) {
        try { allUsers = await window.fsData.getAllUsers(); } catch (e) { }
    }
    // Fallback to local
    if (!allUsers || allUsers.length === 0) {
        allUsers = JSON.parse(localStorage.getItem('spedia_users') || '[]');
    }

    let user = allUsers.find(u => u.code === code);
    if (!user) {
        let allCodes = [];
        if (window.fsData && window.fsData.getAllCodes) {
            try { allCodes = await window.fsData.getAllCodes(); } catch (e) { }
        }
        if (!allCodes || allCodes.length === 0) {
            allCodes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');
        }

        let codeObj = allCodes.find(c => c.code === code);
        if (codeObj) {
            if (codeObj.isUsed) {
                alert("للأسف، الكود مستخدم بالفعل وبيانات الحساب غير موجودة.");
            } else {
                document.getElementById('register-modal').style.display = 'flex';
                document.getElementById('register-modal').dataset.code = code;
                if (codeObj.fsId) {
                    document.getElementById('register-modal').dataset.fsId = codeObj.fsId;
                }
            }
        } else {
            alert("كود الطالب غير صحيح أو غير مسجل. يرجى التواصل مع الإدارة أو طلب كود جديد.");
        }
        return;
    }

    localStorage.setItem('spedia_currentUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
};

window.requestCode = function () {
    let msg = "أريد طلب كود طالب جديد لمنصة دعاء انور التعليمية";
    window.open(`${WA_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
};

window.finishRegister = async function (e) {
    if (e) e.preventDefault();
    let code = document.getElementById('register-modal').dataset.code;
    let name = document.getElementById('reg-name').value;
    let phone = document.getElementById('reg-phone').value;
    let grade = document.getElementById('reg-grade').value;

    if (!code || !name || !phone || !grade) return alert("الرجاء إكمال كافة البيانات");

    let newUser = { code, name, phone, grade, id: Date.now(), role: 'student' };

    if (window.fsData && window.fsData.addUser) {
        try {
            await window.fsData.addUser(newUser);
        } catch (e) { }
    }

    // Mark code as used in Firebase
    if (window.fsData && window.fsData.updateCode) {
        let fsId = document.getElementById('register-modal').dataset.fsId;
        if (fsId) {
            try { await window.fsData.updateCode(fsId, { isUsed: true }); } catch (er) { }
        } else {
            try {
                let allC = await window.fsData.getAllCodes();
                let cObj = allC.find(c => c.code === code);
                if (cObj && cObj.fsId) await window.fsData.updateCode(cObj.fsId, { isUsed: true });
            } catch (er) { }
        }
    }

    // Always fallback to LocalStorage for offline usability
    let users = JSON.parse(localStorage.getItem('spedia_users') || '[]');
    users.push(newUser);
    localStorage.setItem('spedia_users', JSON.stringify(users));

    let codes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');
    let cIndex = codes.findIndex(c => c.code === code);
    if (cIndex > -1) {
        codes[cIndex].isUsed = true;
        localStorage.setItem('spedia_codes', JSON.stringify(codes));
    }

    localStorage.setItem('spedia_currentUser', JSON.stringify(newUser));
    alert("تم التسجيل بنجاح!");
    window.location.href = 'dashboard.html';
};

window.closeRegisterModal = function () {
    if (document.getElementById('register-modal')) document.getElementById('register-modal').style.display = 'none';
};

window.submitCartOrder = function (e) {
    if (e) e.preventDefault();
};

window.openMySubscriptions = function () {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser') || 'null');
    if (user && user.code) {
        // Logged in: open directly inside student profile without asking for any code
        window.location.href = 'dashboard.html#dash-my-content';
    } else {
        // Not logged in: ask for student login code to access their profile directly
        let modal = document.getElementById('my-subs-quick-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'my-subs-quick-modal';
            modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:100005; justify-content:center; align-items:center; backdrop-filter:blur(6px);';
            document.body.appendChild(modal);
        }
        modal.innerHTML = `
            <div style="background:#fff; border-radius:24px; padding:32px 28px; width:90%; max-width:460px; text-align:center; box-shadow:0 25px 60px rgba(0,0,0,0.3); animation:popIn 0.3s ease;">
                <div style="width:70px; height:70px; border-radius:50%; background:linear-gradient(135deg, #fff3e0, #ffe0b2); color:#ff9800; display:flex; align-items:center; justify-content:center; margin:0 auto 15px auto; font-size:32px;">
                    <i class="fas fa-book-reader"></i>
                </div>
                <h3 style="margin-bottom:10px; color:#1e3c72; font-weight:900; font-size:22px;">كورساتي وكتبي</h3>
                <p style="margin-bottom:20px; color:#555; font-size:15px; line-height:1.6;">
                    الرجاء إدخال <strong>كود الطالب (كود تسجيل الدخول)</strong> لفتح بروفايلك والوصول إلى جميع كورساتك وكتبك المحفوظة:
                </p>
                <input type="text" id="quick-subs-code-input" placeholder="أدخل كود الطالب الخاص بك..." style="width:100%; padding:14px; margin-bottom:18px; font-size:18px; text-align:center; border:2px solid #ff9800; border-radius:12px; font-weight:bold; box-sizing:border-box; outline:none;">
                <div style="display:flex; gap:10px;">
                    <button id="btn-quick-subs-login" class="btn-primary" style="flex:2; padding:14px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #ff9800, #f57c00); border:none; cursor:pointer;">
                        <i class="fas fa-sign-in-alt"></i> فتح بروفايلي
                    </button>
                    <button onclick="document.getElementById('my-subs-quick-modal').style.display='none'" class="btn-secondary" style="flex:1; padding:14px; border-radius:12px; font-size:15px; font-weight:700; background:#f4f7fa; color:#666; border:none; cursor:pointer;">
                        إلغاء
                    </button>
                </div>
                <p style="margin-top:15px; margin-bottom:0; font-size:13px; color:#888;">
                    ليس لديك حساب؟ <a href="login.html" style="color:#ff9800; font-weight:bold; text-decoration:underline;">تسجيل الدخول / طلب كود</a>
                </p>
            </div>
        `;
        modal.style.display = 'flex';

        document.getElementById('btn-quick-subs-login').onclick = async () => {
            let code = document.getElementById('quick-subs-code-input').value.trim();
            if (!code) return alert('الرجاء إدخال كود الطالب');

            let allUsers = [];
            if (window.fsData && window.fsData.getAllUsers) {
                try { allUsers = await window.fsData.getAllUsers(); } catch (e) { }
            }
            if (!allUsers || !allUsers.length) {
                allUsers = JSON.parse(localStorage.getItem('spedia_users') || '[]');
            }
            let student = allUsers.find(u => u.code.toLowerCase() === code.toLowerCase() || u.code === code);
            if (!student) {
                student = { code: code, name: 'طالب ' + code, grade: '10', role: 'student', id: Date.now() };
                let uList = JSON.parse(localStorage.getItem('spedia_users') || '[]');
                uList.push(student);
                localStorage.setItem('spedia_users', JSON.stringify(uList));
            }
            localStorage.setItem('spedia_currentUser', JSON.stringify(student));
            window.location.href = 'dashboard.html#dash-my-content';
        };
    }
};

window.injectMySubscriptionsBtn = function () {
    // Removed from homepage and navbar; accessible exclusively inside student profile (dashboard.html)
    const existing = document.getElementById('my-subs-btn');
    if (existing) existing.remove();
};

window.removeSavedContent = async function (title) {
    if (!confirm('هل تريد بالتأكيد إزالة "' + title + '" من قائمتك؟')) return;
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return;

    let subs = JSON.parse(localStorage.getItem('spedia_sub_codes') || '[]');
    subs = subs.filter(s => !(s.code === user.code && s.title === title));
    localStorage.setItem('spedia_sub_codes', JSON.stringify(subs));

    let mySavedKey = 'spedia_student_saved_' + user.code;
    let mySaved = JSON.parse(localStorage.getItem(mySavedKey) || '[]');
    mySaved = mySaved.filter(s => s.title !== title);
    localStorage.setItem(mySavedKey, JSON.stringify(mySaved));

    await window.loadStudentData(user);
};

window.submitExam = async function (title) {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return alert("الرجاء تسجيل الدخول أولاً");

    let allExams = [];
    if (window.fsData && window.fsData.getAllExams) {
        try {
            allExams = await window.fsData.getAllExams();
        } catch (e) {
            allExams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
        }
    } else {
        allExams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    }

    let currentExam = allExams.find(ex => ex.title === title);

    // Fallback if exam object not found
    if (!currentExam) {
        currentExam = { questionsList: [], durationMinutes: 15 };
    }

    let modal = document.getElementById('quiz-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quiz-modal';
        modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:100000; display:flex; justify-content:center; align-items:center; backdrop-filter:blur(10px); opacity:0; transition:0.3s; pointer-events:none;';
        document.body.appendChild(modal);
    }

    let questionsHtml = '';

    if (currentExam.questionsList && currentExam.questionsList.length > 0) {
        questionsHtml = currentExam.questionsList.map((q, idx) => {
            let innerHtml = '';

            if (typeof q === 'string') {
                // Backward compatibility for old exams
                innerHtml = `
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <textarea rows="3" placeholder="اكتب إجابتك..." style="width:100%; padding:15px; border-radius:10px; border:1px solid #ccc; font-family:'Tajawal'; resize:vertical; outline:none; font-size:16px;"></textarea>
                    </div>
                `;
                return `
                <div class="question-block" style="background:#fff; padding:25px; border-radius:15px; margin-bottom:20px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="font-size:20px; color:#132644; margin-bottom:20px; font-weight:800;">${idx + 1}. ${q}</h3>
                    ${innerHtml}
                </div>`;
            }

            if (q.type === 'mcq') {
                let optionsHtml = '';
                let shuffledOpts = [...q.options].sort(() => Math.random() - 0.5);
                shuffledOpts.forEach((opt, optIdx) => {
                    optionsHtml += `<label class="quiz-option"><input type="radio" name="qans_${idx}" value="${opt}"> <span class="custom-radio"></span> ${opt}</label>`;
                });
                innerHtml = `<div style="display:flex; flex-direction:column; gap:12px;">${optionsHtml}</div>`;
            } else if (q.type === 'tf') {
                innerHtml = `
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <label class="quiz-option"><input type="radio" name="qans_${idx}" value="true"> <span class="custom-radio"></span> العبارة صحيحة</label>
                        <label class="quiz-option"><input type="radio" name="qans_${idx}" value="false"> <span class="custom-radio"></span> العبارة خاطئة</label>
                    </div>
                `;
            } else if (q.type === 'essay') {
                innerHtml = `
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <textarea id="qans_${idx}" rows="4" placeholder="اكتب إجابتك هنا بوضوح مفصل..." style="width:100%; padding:15px; border-radius:10px; border:1px solid #ccc; font-family:'Tajawal'; resize:vertical; outline:none; font-size:16px;"></textarea>
                    </div>
                `;
            }

            return `
                <div class="question-block" style="background:#fff; padding:25px; border-radius:15px; margin-bottom:20px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="font-size:20px; color:#132644; margin-bottom:20px; font-weight:800;">${idx + 1}. ${q.text}</h3>
                    ${innerHtml}
                </div>
            `;
        }).join('');
    } else {
        questionsHtml = '<p style="text-align:center; color:#888;">لم يتم إضافة أسئلة لهذا الاختبار بعد.</p>';
    }

    modal.innerHTML = `
        <div style="background:#fff; width:90%; max-width:700px; border-radius:25px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.3); transform:translateY(30px); transition:0.4s; display:flex; flex-direction:column; max-height:90vh;">
            <div style="background:linear-gradient(135deg, #12b8c5, #1e3c72); padding:30px; text-align:center; color:#fff; position:relative;">
                <i class="fas fa-times" onclick="closeQuizSystem()" style="position:absolute; top:20px; right:20px; font-size:24px; cursor:pointer; opacity:0.8; transition:0.3s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8"></i>
                <h2 style="margin:0; font-weight:900; font-size:28px;">${title}</h2>
                <div style="margin-top:10px; font-size:16px; opacity:0.9;"><i class="fas fa-clock"></i> الوقت المتبقي: <span id="quiz-timer">${currentExam.durationMinutes || 15}:00</span></div>
            </div>
            <div style="padding:40px 30px; overflow-y:auto; background:#f4f7fa; flex:1;">
                ${questionsHtml}
            </div>
            <div style="padding:20px 30px; background:#fff; border-top:1px solid #eee; text-align:left;">
                <button onclick="finishQuiz('${title}')" class="btn-primary" style="background:linear-gradient(135deg, #4caf50, #2e7d32); width:100%; font-size:22px; padding:15px;">تسليم الإجابات وإغلاق <i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;

    if (!document.getElementById('quiz-dynamic-styles')) {
        let st = document.createElement('style');
        st.id = 'quiz-dynamic-styles';
        st.innerHTML = `
            .quiz-option { display:flex; align-items:center; gap:15px; cursor:pointer; padding:15px; border-radius:10px; border:1px solid #eeeeee; transition:0.3s; font-weight:600; color:#6a7c92; background:#fafafa; }
            .quiz-option:hover { background:#f4f7fa; border-color:#cwd; }
            .quiz-option input { display:none; }
            .custom-radio { width:24px; height:24px; border:2px solid #ccc; border-radius:50%; display:inline-block; position:relative; }
            .quiz-option input:checked + .custom-radio { border-color:#12b8c5; background:#12b8c5; }
            .quiz-option input:checked + .custom-radio::after { content:''; position:absolute; top:6px; left:6px; width:8px; height:8px; background:#fff; border-radius:50%; }
            .quiz-option input:checked ~ span { color:#12b8c5; font-weight:800; }
        `;
        document.head.appendChild(st);
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
        modal.firstElementChild.style.transform = 'translateY(0)';
    });
}

window.closeQuizSystem = function () {
    let modal = document.getElementById('quiz-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        modal.firstElementChild.style.transform = 'translateY(30px)';
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

window.finishQuiz = async function (title) {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return;

    let allExams = [];
    if (window.fsData && window.fsData.getAllExams) {
        try {
            allExams = await window.fsData.getAllExams();
        } catch (e) {
            allExams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
        }
    } else {
        allExams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    }

    let currentExam = allExams.find(ex => ex.title === title);
    let answers = {};
    if (currentExam && currentExam.questionsList) {
        currentExam.questionsList.forEach((q, idx) => {
            if (q.type === 'essay' || typeof q === 'string') {
                let ta = document.getElementById(`qans_${idx}`);
                answers[idx] = ta ? ta.value : '';
            } else {
                let checked = document.querySelector(`input[name="qans_${idx}"]:checked`);
                answers[idx] = checked ? checked.value : '';
            }
        });
    }

    let submission = {
        code: user.code,
        name: user.name,
        examTitle: title,
        date: new Date().toLocaleDateString('ar-EG'),
        status: "قيد الانتظار",
        answers: answers
    };

    if (window.fsData) {
        window.fsData.addSubmission(submission);
    }

    let subs = JSON.parse(localStorage.getItem('spedia_submissions') || '[]');
    let existsIndex = subs.findIndex(s => s.code === user.code && s.examTitle === title);
    if (existsIndex >= 0) {
        subs.splice(existsIndex, 1);
    }
    subs.push(submission);
    localStorage.setItem('spedia_submissions', JSON.stringify(subs));

    alert('تم إنهاء الاختبار وإرساله بنجاح! يتم تصحيحه الآن من قبل المعلم. 🎓');
    closeQuizSystem();
    if (window.location.pathname.includes('grade.html') || window.location.pathname.includes('explore.html')) {
        setTimeout(() => window.location.reload(), 500);
    }
}



/* DASHBOARD LOGIC */
window.loadStudentData = async function (user) {
    let profileImg = user.profileImg || localStorage.getItem('spedia_profile_img_' + user.code);
    if (profileImg) {
        let sideImg = document.getElementById('sidebar-profile-img');
        if (sideImg) sideImg.src = profileImg;
        localStorage.setItem('spedia_profile_img_' + user.code, profileImg);
    }

    const cCode = localStorage.getItem('spedia_country') || 'EG';

    let exams = [];
    if (window.fsData) {
        exams = await window.fsData.getAllExams();
    } else {
        exams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    }

    let myExams = exams.filter(ex => {
        if (ex.studentCode && ex.studentCode.trim() !== "") {
            return ex.studentCode === user.code;
        }
        return String(ex.grade) === String(user.grade);
    });
    let listExams = document.getElementById('student-exams');
    if (listExams) {
        if (myExams.length) {
            listExams.innerHTML = myExams.map(ex => `
                <div class="subject-mini-card animate-on-scroll" style="animation-delay:0.1s; border:1px solid #eee; border-radius:15px; margin-bottom:15px; background:#fff;">
                    <div class="icon-box" style="background:linear-gradient(135deg, #f44336, #ff1744);color:#fff; padding:15px; border-radius:15px;"><i class="fas fa-file-signature"></i></div>
                    <div class="info" style="padding:0 15px; flex:1;">
                        <h4 style="margin-bottom:5px; font-weight:800;">${ex.title}</h4>
                        <div style="display:flex; gap:10px; margin-top:5px;">
                            <span style="font-size:12px; background:#e8fbff; color:var(--primary-color); padding:3px 10px; border-radius:10px; font-weight:bold;">${ex.typeName || 'امتحان'}</span>
                            <span style="font-size:12px; color:#6a7c92; font-weight:700;"><i class="fas fa-clock"></i> وقت الحل: ${ex.durationMinutes} دقيقة</span>
                        </div>
                    </div>
                    <button class="btn-icon" style="margin-left:15px; background:#e8f5e9; color:#4caf50; border:none;" onclick="submitExam('${ex.title}')"><i class="fas fa-play"></i></button>
                </div>
            `).join('');
        } else {
            listExams.innerHTML = '<p style="color:#888; font-weight:600;">لا يوجد لديك امتحانات مطروحة أو واجبات حالياً.</p>';
        }
    }

    let results = [];
    if (window.fsData) {
        results = await window.fsData.getUserResults(user.code);
    } else {
        results = JSON.parse(localStorage.getItem('spedia_results') || '[]');
        results = results.filter(r => r.code === user.code);
    }

    let listResults = document.getElementById('student-results');
    if (listResults) {
        if (results.length) {
            listResults.innerHTML = results.map(r => `
                <div class="animate-on-scroll" style="background:#fff; border-right:6px solid #9c27b0; border-radius:15px; padding:20px; margin-bottom:15px; box-shadow:0 8px 25px rgba(0,0,0,0.06); display:flex; gap:15px; align-items:center;">
                    <i class="fas fa-check-circle" style="color:#9c27b0; font-size:36px; background:#f3e5f5; padding:15px; border-radius:50%;"></i> 
                    <div class="res-content">
                        <div class="res-title" style="font-weight:900; color:#121e33; font-size:18px; margin-bottom:5px;">${r.examTitle}</div>
                        <div style="font-size:16px;color:#4caf50; font-weight:900;">النتيجة: ${r.grade}</div>
                        <div style="font-size:14px;color:#888; font-weight:600; margin-top:5px;"><i class="far fa-calendar-alt"></i> ${r.date}</div>
                    </div>
                    <div style="margin-right:auto; padding-left:10px;">
                        <input type="checkbox" onchange="toggleResultStrike(this)" title="حفظ/إخفاء" style="width:24px; height:24px; cursor:pointer; accent-color: #9c27b0;">
                    </div>
                </div>
            `).join('');
        } else {
            listResults.innerHTML = '<p style="color:#888; font-weight:600;">لم يتم إرسال أي نتائج اختبارات لك بعد.</p>';
        }
    }

    let evals = [];
    if (window.fsData && window.fsData.getAllEvals) {
        try { evals = await window.fsData.getAllEvals(); localStorage.setItem('spedia_evals', JSON.stringify(evals)); } catch (e) { }
    }
    if (!evals || !evals.length) {
        evals = JSON.parse(localStorage.getItem('spedia_evals') || localStorage.getItem('spedia_evaluations') || '[]');
    }

    let myEvals = evals.filter(ev => ev.code == user.code);
    let listEvals = document.getElementById('student-evals');
    if (listEvals) {
        if (myEvals.length) {
            listEvals.innerHTML = myEvals.map(ev => `
                <div class="animate-on-scroll" style="background:#fff; border-left:6px solid #ff9800; border-radius:15px; padding:20px; margin-bottom:15px; box-shadow:0 8px 25px rgba(0,0,0,0.06); display:flex; gap:15px; align-items:center;">
                    <i class="fas fa-award" style="color:#ff9800; font-size:36px; background:#fff3e0; padding:15px; border-radius:50%;"></i> 
                    <div>
                        <div style="font-weight:900; color:#121e33; font-size:18px; margin-bottom:5px;">${ev.note}</div>
                        <div style="font-size:14px;color:#888; font-weight:600;"><i class="far fa-calendar-alt"></i> ${ev.date}</div>
                    </div>
                </div>
            `).join('');
        } else {
            listEvals.innerHTML = '<p style="color:#888; font-weight:600;">لم يُضف لك فريق الإدارة أي تقييمات استثنائية بعد.</p>';
        }
    }

    // Set attendance days count
    let attendance = [];
    if (window.fsData) {
        try { attendance = await window.fsData.getAttendance(); } catch (e) { }
    } else {
        attendance = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');
    }

    let myAtt = attendance.filter(a => a.code === user.code);
    let attCard = document.getElementById('stat-attendance-days');
    if (attCard) {
        attCard.innerText = myAtt.length;
    }

    let lnkContainer = document.getElementById('student-links-container');
    if (lnkContainer) {
        let allLinks = [];
        if (window.fsData && window.fsData.getAllClassLinks) {
            try { allLinks = await window.fsData.getAllClassLinks(); localStorage.setItem('spedia_class_links', JSON.stringify(allLinks)); } catch (e) { }
        }
        if (!allLinks || !allLinks.length) {
            allLinks = JSON.parse(localStorage.getItem('spedia_class_links') || '[]');
        }
        let myLinks = allLinks.filter(l => {
            if (l.studentCode && l.studentCode.trim() !== "") {
                return l.studentCode === user.code;
            }
            return l.grade === String(user.grade) || l.grade === "ALL";
        });
        if (myLinks.length) {
            lnkContainer.innerHTML = myLinks.map(l => `
                <div class="animate-on-scroll" style="background:#fff; border-right:5px solid var(--primary-color); border-radius:12px; padding:20px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div>
                        <h4 style="font-weight:800; font-size:18px; color:var(--text-dark);">${l.title}</h4>
                        <div style="font-size:14px; color:#888; font-weight:600;"><i class="far fa-calendar-alt"></i> ${l.date}</div>
                    </div>
                    <a href="${l.url}" target="_blank" class="btn-primary" style="padding:10px 20px; font-size:16px; border-radius:10px;">دخول الحصة <i class="fas fa-video"></i></a>
                </div>
            `).join('');
        } else {
            lnkContainer.innerHTML = '<p style="color:#888; font-weight:600;">لا توجد حصص مباشرة متاحة لك حالياً.</p>';
        }
    }

    let adminFilesCont = document.getElementById('admin-files-container');
    if (adminFilesCont) {
        let aFiles = [];
        if (window.fsData && window.fsData.getAllAdminFiles) {
            try { aFiles = await window.fsData.getAllAdminFiles(); localStorage.setItem('spedia_admin_files', JSON.stringify(aFiles)); } catch (e) { }
        }
        if (!aFiles || !aFiles.length) {
            aFiles = JSON.parse(localStorage.getItem('spedia_admin_files') || '[]');
        }
        let myFiles = aFiles.filter(a => a.grade === String(user.grade));
        if (myFiles.length) {
            adminFilesCont.innerHTML = myFiles.map(f => `
                <div class="animate-on-scroll" style="background:#f4f7fa; border:1px solid #ccc; border-radius:12px; padding:15px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <h4 style="font-weight:700; color:#444;">${f.title}</h4>
                        <span style="font-size:12px; color:#888;">${f.date}</span>
                    </div>
                    <a href="${f.url}" target="_blank" class="btn-primary" style="background:var(--primary-dark); padding:8px 15px; font-size:14px;"><i class="fas fa-download"></i> معاينة</a>
                </div>
            `).join('');
        } else {
            adminFilesCont.innerHTML = '<p style="color:#888; font-weight:600;">لا توجد ملفات جديدة من الإدارة.</p>';
        }
    }

    // Custom Content (Directed to user code)
    let customCont = document.getElementById('student-custom-container');
    if (customCont) {
        let cFiles = [];
        if (window.fsData && window.fsData.getCustomContentByUser) {
            try { cFiles = await window.fsData.getCustomContentByUser(user.code); } catch (e) { }
        }
        if (!cFiles || !cFiles.length) {
            let localCC = JSON.parse(localStorage.getItem('spedia_custom_content') || '[]');
            cFiles = localCC.filter(c => c.studentCode === user.code);
        }
        if (cFiles.length) {
            customCont.innerHTML = cFiles.map(c => `
                <div class="animate-on-scroll" style="background:#fff; border-right:5px solid #12b8c5; border-radius:12px; padding:20px; display:flex; flex-direction:column; gap:10px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h4 style="font-weight:800; font-size:18px; color:#121e33;">${c.title}</h4>
                        <span style="font-size:12px; background:#e8fbff; color:#12b8c5; padding:5px 10px; border-radius:5px; font-weight:bold;">${c.type}</span>
                    </div>
                    ${c.url ? (c.url.includes('http') || c.url.includes('www.') || c.url.includes('.com') ? `<a href="${c.url.startsWith('http') ? c.url : 'https://' + c.url}" target="_blank" style="color:#f44336; font-weight:bold; text-decoration:underline; font-size:14px;"><i class="fas fa-external-link-alt"></i> فتح الرابط المرفق</a>` : `<p style="font-size:15px; color:#444; background:#f4f7fa; padding:10px; border-radius:8px; border-right:3px solid #ff9800; font-weight:bold;">${c.url}</p>`) : ''}
                    ${c.fileUrl ? `<a href="${c.fileUrl}" target="_blank" class="btn-primary" style="align-self:flex-start; padding:8px 15px; font-size:14px;"><i class="fas fa-download"></i> تحميل المرفق</a>` : ''}
                    <div style="font-size:12px; color:#888; font-weight:bold; margin-top:5px;"><i class="far fa-calendar-alt"></i> ${c.date}</div>
                </div>
            `).join('');
        } else {
            customCont.innerHTML = '<p style="color:#888; font-weight:600;">لا يوجد محتوى مخصص لك حالياً.</p>';
        }
    }

    // Messages
    let messagesCont = document.getElementById('student-messages-container');
    if (messagesCont) {
        let allChats = JSON.parse(localStorage.getItem('spedia_chat') || '[]');
        if (window.fsData && window.fsData.getAllChatMessages) {
            try {
                allChats = await window.fsData.getAllChatMessages();
                localStorage.setItem('spedia_chat', JSON.stringify(allChats));
            } catch (e) { }
        }
        let myChats = allChats.filter(c => c.studentCode === user.code);
        if (myChats.length) {
            messagesCont.innerHTML = myChats.map(c => `
                <div class="animate-on-scroll" style="background:#fff; border-right:5px solid ${c.sender === 'admin' ? '#9c27b0' : '#4caf50'}; border-radius:12px; padding:15px; margin-bottom:10px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div style="display:flex; justify-content:space-between;">
                        <span style="font-weight:bold; color:#121e33;">${c.sender === 'admin' ? 'الإدارة (المعلم: ' + (c.teacher || '') + ')' : 'أنت (إلى: ' + (c.teacher || '') + ')'}</span>
                        <span style="font-size:12px; color:#888;">${c.date}</span>
                    </div>
                    <p style="margin-top:10px; color:#444;">${c.message}</p>
                </div>
            `).join('');
        } else {
            messagesCont.innerHTML = '<p style="color:#888; font-weight:600;">لا توجد رسائل سابقة.</p>';
        }
    }

    // Monthly Reports
    let reportsCont = document.getElementById('student-monthly-reports-container');
    if (reportsCont) {
        let allReports = JSON.parse(localStorage.getItem('spedia_monthly_reports') || '[]');
        if (window.fsData && window.fsData.getAllMonthlyReports) {
            try {
                allReports = await window.fsData.getAllMonthlyReports();
                localStorage.setItem('spedia_monthly_reports', JSON.stringify(allReports));
            } catch (e) { }
        }
        let myReports = allReports.filter(r => r.studentCode === user.code);
        if (myReports.length) {
            reportsCont.innerHTML = myReports.map(r => `
                <div class="animate-on-scroll" style="background:#fff; border-right:5px solid #009688; border-radius:12px; padding:20px; margin-bottom:10px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">
                        <h4 style="font-weight:bold; color:#009688; margin:0;"><i class="fas fa-file-invoice"></i> ${r.title}</h4>
                        <span style="background:${r.evaluation.includes('ممتاز') ? '#e8f5e9' : (r.evaluation.includes('ضعيف') ? '#ffebee' : '#fff3e0')}; color:${r.evaluation.includes('ممتاز') ? '#2e7d32' : (r.evaluation.includes('ضعيف') ? '#c62828' : '#ef6c00')}; padding:5px 10px; border-radius:20px; font-weight:bold; font-size:14px;">${r.evaluation}</span>
                    </div>
                    <p style="color:#444; line-height:1.6;">${r.details}</p>
                    <div style="font-size:12px; color:#888; margin-top:10px; text-align:left;">${r.date}</div>
                </div>
            `).join('');
        } else {
            reportsCont.innerHTML = '<p style="color:#888; font-weight:600;">لم يتم إصدار تقارير شهرية لك بعد.</p>';
        }
    }

    // Render My Courses & Books inside the profile
    const coursesGrid = document.getElementById('dash-student-courses-grid');
    const booksGrid = document.getElementById('dash-student-books-grid');
    const gamesGrid = document.getElementById('dash-student-games-grid');

    if (coursesGrid || booksGrid || gamesGrid) {
        let allContent = JSON.parse(localStorage.getItem('spedia_content') || '[]');
        if (window.fsData && window.fsData.getAllContent) {
            try {
                let fsContent = await window.fsData.getAllContent();
                let combined = [...allContent, ...fsContent];
                let uMap = new Map();
                combined.forEach(c => uMap.set(c.fsId || c.id || c.title, c));
                allContent = Array.from(uMap.values());
            } catch (e) { console.warn(e); }
        }

        let studentSubs = [];
        if (window.fsData && window.fsData.getSubscriptionsByCode) {
            try {
                studentSubs = await window.fsData.getSubscriptionsByCode(user.code);
            } catch (e) { console.warn(e); }
        }
        let localSubs = JSON.parse(localStorage.getItem('spedia_sub_codes') || '[]');
        let studentLocalSubs = localSubs.filter(s => s.code === user.code);
        let mySavedLocal = JSON.parse(localStorage.getItem('spedia_student_saved_' + user.code) || '[]');

        let savedTitles = new Set([
            ...studentSubs.map(s => s.title),
            ...studentLocalSubs.map(s => s.title),
            ...mySavedLocal.map(s => s.title)
        ]);

        let myItems = allContent.filter(c => savedTitles.has(c.title));
        mySavedLocal.forEach(item => {
            if (!myItems.some(c => c.title === item.title)) {
                myItems.push(item);
            }
        });
        studentSubs.forEach(item => {
            if (item.title && !myItems.some(c => c.title === item.title)) {
                myItems.push(item);
            }
        });

        let myCourses = myItems.filter(c => c.type === 'course');
        let myBooks = myItems.filter(c => c.type === 'book');
        let myGames = myItems.filter(c => c.type === 'game');

        let cCount = document.getElementById('dash-courses-count');
        if (cCount) cCount.innerText = `${myCourses.length} كورس`;
        let bCount = document.getElementById('dash-books-count');
        if (bCount) bCount.innerText = `${myBooks.length} كتاب`;
        let gCount = document.getElementById('dash-games-count');
        if (gCount) gCount.innerText = `${myGames.length} لعبة`;

        if (coursesGrid) {
            if (myCourses.length) {
                coursesGrid.innerHTML = myCourses.map(item => {
                    let ytLink = item.videoUrl ? item.videoUrl : (item.youtubeId ? `https://www.youtube.com/watch?v=${item.youtubeId}` : '#');
                    return `
                        <div class="subject-card animate-on-scroll" style="background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.06); border:1px solid #eef1f5;">
                            <div class="subject-cover" style="height:170px; position:relative; overflow:hidden; background:linear-gradient(135deg, #1e3c72, #2a5298);">
                                <img src="${item.image || 'https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3462295-2895977.png'}" style="width:100%; height:100%; object-fit:cover;">
                                <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.35); display:flex; justify-content:center; align-items:center;">
                                    <i class="fab fa-youtube" style="color:red; font-size:54px; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.4));"></i>
                                </div>
                            </div>
                            <div class="subject-body" style="padding:20px; text-align:center;">
                                <h4 style="font-size:18px; font-weight:800; color:#121e33; margin-bottom:15px;">${item.title}</h4>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <a href="${ytLink}" target="_blank" class="btn-primary" style="padding:12px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #4caf50, #2e7d32); text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                                        <i class="fas fa-play-circle" style="font-size:20px;"></i> مشاهدة الفيديو الآن
                                    </a>
                                    <button onclick="window.removeSavedContent('${(item.title || '').replace(/'/g, "\\'")}')" class="btn-icon" style="background:#fff0f0; color:#f44336; border:1px solid #ffd1d1; padding:7px; border-radius:10px; font-size:13px; font-weight:bold; cursor:pointer;" title="إزالة من محفوظاتي">
                                        <i class="fas fa-trash-alt"></i> إزالة من محفوظاتي
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            } else {
                coursesGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align:center; padding:35px 20px; background:#fff; border-radius:16px; border:2px dashed #e0e7ec;">
                        <i class="fab fa-youtube" style="font-size:48px; color:#ccc; margin-bottom:12px;"></i>
                        <p style="color:#777; font-weight:700; margin-bottom:15px; font-size:16px;">لم تقم بحفظ أي كورسات تفاعلية بعد.</p>
                        <a href="explore.html" class="btn-primary" style="display:inline-flex; align-items:center; gap:8px; padding:10px 20px; border-radius:12px; font-size:14px; text-decoration:none; font-weight:800;">
                            <i class="fas fa-search"></i> تصفح الكورسات وحفظها
                        </a>
                    </div>
                `;
            }
        }

        if (booksGrid) {
            if (myBooks.length) {
                booksGrid.innerHTML = myBooks.map(item => {
                    let pdfLink = item.pdfUrl || '#';
                    return `
                        <div class="subject-card animate-on-scroll" style="background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.06); border:1px solid #eef1f5;">
                            <div class="subject-cover" style="height:170px; position:relative; overflow:hidden; background:linear-gradient(135deg, #e8fbff, #f4f7fa); display:flex; justify-content:center; align-items:center;">
                                <img src="${item.image || 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png'}" style="height:85%; object-fit:contain; filter:drop-shadow(0 10px 10px rgba(0,0,0,0.1));">
                            </div>
                            <div class="subject-body" style="padding:20px; text-align:center;">
                                <h4 style="font-size:18px; font-weight:800; color:#121e33; margin-bottom:15px;">${item.title}</h4>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <a href="${pdfLink}" target="_blank" class="btn-primary" style="padding:12px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #1e3c72, #2a5298); text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                                        <i class="fas fa-book-open" style="font-size:20px;"></i> تصفح / تحميل الكتاب
                                    </a>
                                    <button onclick="window.removeSavedContent('${(item.title || '').replace(/'/g, "\\'")}')" class="btn-icon" style="background:#fff0f0; color:#f44336; border:1px solid #ffd1d1; padding:7px; border-radius:10px; font-size:13px; font-weight:bold; cursor:pointer;" title="إزالة من محفوظاتي">
                                        <i class="fas fa-trash-alt"></i> إزالة من محفوظاتي
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            } else {
                booksGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align:center; padding:35px 20px; background:#fff; border-radius:16px; border:2px dashed #e0e7ec;">
                        <i class="fas fa-book-open" style="font-size:48px; color:#ccc; margin-bottom:12px;"></i>
                        <p style="color:#777; font-weight:700; margin-bottom:15px; font-size:16px;">لم تقم بحفظ أي مذكرات أو كتب بعد.</p>
                        <a href="explore.html" class="btn-primary" style="display:inline-flex; align-items:center; gap:8px; padding:10px 20px; border-radius:12px; font-size:14px; text-decoration:none; font-weight:800;">
                            <i class="fas fa-search"></i> تصفح الكتب وحفظها
                        </a>
                    </div>
                `;
            }
        }

        if (gamesGrid) {
            let wrapper = document.getElementById('dash-games-wrapper');
            if (myGames.length) {
                if (wrapper) wrapper.style.display = 'block';
                gamesGrid.innerHTML = myGames.map(item => `
                    <div class="subject-card animate-on-scroll" style="background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.06); border:1px solid #eef1f5;">
                        <div class="subject-cover" style="height:170px; position:relative; overflow:hidden; background:linear-gradient(135deg, #f3e5f5, #e1bee7); display:flex; justify-content:center; align-items:center;">
                            <i class="fas fa-gamepad" style="font-size:60px; color:#9c27b0;"></i>
                        </div>
                        <div class="subject-body" style="padding:20px; text-align:center;">
                            <h4 style="font-size:18px; font-weight:800; color:#121e33; margin-bottom:15px;">${item.title}</h4>
                            <div style="display:flex; flex-direction:column; gap:8px;">
                                <a href="${item.htmlUrl || '#'}" target="_blank" class="btn-primary" style="padding:12px; border-radius:12px; font-size:16px; font-weight:800; background:linear-gradient(135deg, #9c27b0, #6a1b9a); text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                                    <i class="fas fa-gamepad" style="font-size:20px;"></i> تشغيل اللعبة
                                </a>
                                <button onclick="window.removeSavedContent('${(item.title || '').replace(/'/g, "\\'")}')" class="btn-icon" style="background:#fff0f0; color:#f44336; border:1px solid #ffd1d1; padding:7px; border-radius:10px; font-size:13px; font-weight:bold; cursor:pointer;" title="إزالة من محفوظاتي">
                                    <i class="fas fa-trash-alt"></i> إزالة من محفوظاتي
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                if (wrapper) wrapper.style.display = 'none';
            }
        }
    }

    if (window.loadNotifications) window.loadNotifications('student');
}

window.showDashTab = function (tabId, el) {
    document.querySelectorAll('.dash-tab-section').forEach(t => t.style.display = 'none');
    let target = document.getElementById(tabId);
    if (target) target.style.display = 'block';

    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    if (el) {
        if (el.parentElement) el.parentElement.classList.add('active');
    } else {
        let matchingLink = document.querySelector(`.sidebar-menu a[onclick*="${tabId}"]`);
        if (matchingLink && matchingLink.parentElement) {
            matchingLink.parentElement.classList.add('active');
        }
    }

    if (window.location.hash !== '#' + tabId) {
        history.pushState({ tab: tabId }, '', '#' + tabId);
    }
}

window.addEventListener('popstate', function (event) {
    if (event.state && event.state.tab) {
        document.querySelectorAll('.dash-tab-section').forEach(t => t.style.display = 'none');
        document.getElementById(event.state.tab).style.display = 'block';
        // highlight generic
        document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
        let link = document.querySelector(`.sidebar-menu a[onclick*="${event.state.tab}"]`);
        if (link) link.parentElement.classList.add('active');
    }
});

window.registerAttendance = async function () {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return;
    const todayDate = new Date().toLocaleDateString('ar-EG');
    let attObj = {
        code: user.code,
        name: user.name,
        date: todayDate,
        time: new Date().toLocaleTimeString('ar-EG')
    };

    let attendance = [];
    if (window.fsData) {
        try { attendance = await window.fsData.getAttendance(); } catch (e) {
            attendance = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');
        }
    } else {
        attendance = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');
    }

    if (attendance.find(a => a.code === user.code && a.date === todayDate)) {
        alert("تم تسجيل حضورك مسبقاً لهذا اليوم. استمر في المذاكرة! 👍");
        return;
    }

    if (window.fsData && window.fsData.addAttendance) {
        try { await window.fsData.addAttendance(attObj); } catch (e) { }
    }

    attendance.push(attObj);
    localStorage.setItem('spedia_attendance', JSON.stringify(attendance));
    alert("ممتاز! تم تسجيل حضورك بنجاح في سجلات منصة دعاء انور التعليمية للإدارة 🎓");
}

window.logout = function () {
    localStorage.removeItem('spedia_currentUser');
    window.location.href = 'index.html';
}

window.toggleSidebar = function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

window.promptAdmin = async function () {
    let pass = prompt("بوابة منصة دعاء انور التعليمية للإدارة - يرجى كتابة الرقم السري (الأساسي أو المساعد):");

    if (pass === "135700" || pass === "246800") {
        const isAdmin1 = (pass === "135700");
        const adminEmail = isAdmin1 ? "admin1@admin.com" : "admin2@admin.com";
        const adminType = isAdmin1 ? "full" : "restricted";

        sessionStorage.setItem('isAdmin', 'yes');
        sessionStorage.setItem('adminType', adminType);

        // Firebase Login with specific accounts as requested
        try {
            const { auth } = await import('./firebase-init.js');
            const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
            await signInWithEmailAndPassword(auth, adminEmail, pass);
            window.location.href = "admin.html";
        } catch (e) {
            console.error("Firebase Auth Error:", e);
            // Fallback for UI access (permissions still checked by Firestore)
            window.location.href = "admin.html";
        }
    }
    else if (pass !== null) {
        alert("خطأ في الرقم السري! يرجى المحاولة مرة أخرى.");
    }
};

window.toggleResultStrike = function (chk) {
    let parent = chk.closest('.animate-on-scroll');
    let title = parent.querySelector('.res-title');
    if (chk.checked) {
        // Upon click (checkbox checked), exam name is NOT DELETED (strike-through but kept)
        title.style.textDecoration = 'line-through';
        title.style.color = '#888';
        parent.style.opacity = '0.7';
    } else {
        // when click removed (un-checked), exam name is NOT deleted normally either?
        title.style.textDecoration = 'none';
        title.style.color = '#121e33';
        parent.style.opacity = '1';
    }
}

window.updateProfileImg = async function (input) {
    if (input.files && input.files[0]) {
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        if (!user) return alert('يرجى تسجيل الدخول أولاً');

        let file = input.files[0];
        try {
            let imgUrl = await window.uploadToCloudinary(file);
            localStorage.setItem('spedia_profile_img_' + user.code, imgUrl);
            user.profileImg = imgUrl; // Update local user object
            localStorage.setItem('spedia_currentUser', JSON.stringify(user));

            if (window.fsData && window.fsData.addUser) {
                try { await window.fsData.addUser(user); } catch (e) { }
            }

            document.getElementById('sidebar-profile-img').src = imgUrl;
        } catch (e) {
            alert('خطأ أثناء رفع الصورة: ' + e.message);
        }
    }
}

window.unlockCourse = function (title) {
    let unlocked = JSON.parse(localStorage.getItem('spedia_unlocked') || '[]');
    if (title && !unlocked.includes(title)) {
        unlocked.push(title);
        localStorage.setItem('spedia_unlocked', JSON.stringify(unlocked));
    }
    alert('المحتوى مجاني بالكامل ومتاح لك مباشرة دون أي كود! 🎉');
};


document.addEventListener("DOMContentLoaded", async () => {
    // Populate all stage selects for login and admin pages
    const stageSelects = ['reg-stage', 'ct-stage', 'ex-stage', 'lnk-stage', 'af-stage'];
    stageSelects.forEach(id => {
        if (window.updateCountryStages) window.updateCountryStages(null, id, null);
    });

    if (!localStorage.getItem('spedia_country')) localStorage.setItem('spedia_country', 'EG');
    // window.forceFakeData(); (Removed to fix crash)
    window.renderMegaMenu();
    window.applyCountryRules();
    window.attachGlobalEvents();

    // Pulse check for Firebase data layer
    if (!window.fsData) {
        setTimeout(async () => {
            if (window.renderCurrentPage) await window.renderCurrentPage();
        }, 300);
    } else {
        if (window.renderCurrentPage) await window.renderCurrentPage();
    }

    if (window.injectCountryModal) window.injectCountryModal();
    if (window.injectFloatingAdmin) window.injectFloatingAdmin();
    if (window.injectThemeButton) window.injectThemeButton();
    if (window.injectWhatsAppButton) window.injectWhatsAppButton();
    if (window.injectCartModal) window.injectCartModal();
    if (window.injectBookTransition) window.injectBookTransition();
    if (window.injectGlobalAnimations) window.injectGlobalAnimations();
    if (window.injectMySubscriptionsBtn) window.injectMySubscriptionsBtn();
});

window.injectThemeButton = function () {
    if (document.getElementById('theme-toggle-btn')) return;
    let btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.title = 'تغيير المظهر';
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    btn.style.cssText = 'position:fixed; bottom:90px; left:20px; z-index:99999; background:linear-gradient(135deg, #b8860b, #d4af37); color:#000; border:none; width:65px; height:65px; border-radius:50%; font-size:25px; box-shadow:0 10px 20px rgba(212,175,55,0.4); cursor:pointer; display:flex; justify-content:center; align-items:center; transition:transform 0.3s; border:2px solid rgba(255,255,255,0.2);';
    btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';

    if (localStorage.getItem('goldenTheme') === 'yes') {
        document.body.classList.add('golden-theme');
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    btn.onclick = () => {
        document.body.classList.toggle('golden-theme');
        if (document.body.classList.contains('golden-theme')) {
            localStorage.setItem('goldenTheme', 'yes');
            btn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('goldenTheme', 'no');
            btn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };
    document.body.appendChild(btn);

    if (!document.getElementById('golden-theme-css')) {
        let style = document.createElement('style');
        style.id = 'golden-theme-css';
        style.innerHTML = `
            /* Core Backgrounds & Typography */
            .golden-theme, .golden-theme body { background: linear-gradient(135deg, #040d21, #081736) !important; color: #f2ce63 !important; }
            .golden-theme a { color: #f2ce63 !important; }
            
            /* Navbar & Header */
            .golden-theme .navbar, .golden-theme header { background: rgba(4, 13, 33, 0.95) !important; border-bottom: 2px solid #d4af37 !important; }
            
            /* Overriding all white/light inline backgrounds globally */
            .golden-theme [style*="background:#fff"], .golden-theme [style*="background: #fff"], 
            .golden-theme [style*="background-color:#fff"], .golden-theme [style*="background-color: #fff"],
            .golden-theme [style*="background:#f0f4f8"], .golden-theme [style*="background:#f4f7fa"],
            .golden-theme [style*="background: #e0f7fa"], .golden-theme [style*="background:#e8fbff"],
            .golden-theme [style*="background:radial-gradient(circle, #fff, #dbf8fa)"],
            .golden-theme [style*="background: radial-gradient(circle, #fff, #dbf8fa)"],
            .golden-theme [style*="background:radial-gradient(circle, rgba(45,219,232,0.3), transparent)"],
            .golden-theme [style*="background:#1e3c72"],
            .golden-theme [style*="background: radial-gradient(circle, #dbf8fa, transparent)"],
            .golden-theme [style*="linear-gradient(90deg, #dbf8fa, #edfcfd)"],
            .golden-theme [style*="linear-gradient(135deg, #e8fbff, #f4f7fa)"] {
                background: linear-gradient(135deg, #0a1a42, #061129) !important;
                border: 1px solid rgba(212, 175, 55, 0.3) !important;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
            }

            .golden-theme [style*="background:linear-gradient(135deg, #121e33, #1e3c72)"] {
                background: linear-gradient(135deg, #d4af37, #b8860b) !important;
                border-color: #040d21 !important;
            }
            .golden-theme [style*="background:linear-gradient(135deg, #121e33, #1e3c72)"] h3,
            .golden-theme [style*="background:linear-gradient(135deg, #121e33, #1e3c72)"] p {
                color: #040d21 !important;
            }

            .golden-theme [style*="border:15px solid #fff"], 
            .golden-theme [style*="border: 8px solid #fff"] {
                border-color: #d4af37 !important;
                background-color: transparent !important;
            }

            /* Specific component containers */
            .golden-theme .subject-card, .golden-theme .book-card, .golden-theme .student-card, 
            .golden-theme .large-stat, .golden-theme .book-cover, .golden-theme .subject-mini-card, 
            .golden-theme .question-block, .golden-theme .admin-section, .golden-theme .mega-menu, 
            .golden-theme .mega-column, .golden-theme .admin-nav, .golden-theme table, 
            .golden-theme td, .golden-theme th, .golden-theme .grade-card, .golden-theme .explore-hero,
            .golden-theme .login-container, .golden-theme .modal-content, .golden-theme .sidebar,
            .golden-theme .dashboard-main, .golden-theme .dash-tab-section, .golden-theme .stat-card,
            .golden-theme .user-profile-widget, .golden-theme .dashboard-header {
                background: linear-gradient(135deg, #0a1a42, #061129) !important; 
                border: 1px solid rgba(212, 175, 55, 0.3) !important; 
                box-shadow: 0 5px 20px rgba(0,0,0, 0.4) !important;
            }
            
            /* Internal Menus / Modals overrrides */
            .golden-theme #country-modal > div, .golden-theme #cart-modal > div, .golden-theme #quiz-modal > div {
                background: linear-gradient(135deg, #0a1a42, #061129) !important;
                border: 1px solid #d4af37 !important;
            }
            .golden-theme #country-modal div[onclick], .golden-theme .quiz-option {
                background: linear-gradient(135deg, #061129, #081736) !important;
                border-color: rgba(212, 175, 55, 0.3) !important;
            }

            /* Special Stage Cards (Gold) */
            .golden-theme .stage-card {
                background: linear-gradient(135deg, #d4af37, #b8860b) !important;
                border: none !important;
                box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3) !important;
            }
            .golden-theme .stage-card h3 { color: #040d21 !important; }

            .golden-theme .container { background-color: transparent !important; border:none !important; box-shadow:none !important; }
            
            /* Text elements override */
            .golden-theme h1, .golden-theme h2, .golden-theme h3, .golden-theme h4, .golden-theme h5 { color: #f2ce63 !important; }
            .golden-theme span, .golden-theme p, .golden-theme div, .golden-theme li, .golden-theme td, .golden-theme th { color: #e2cca6 !important; }
            .golden-theme .highlight { color: #ffffff !important; text-shadow: 0 0 10px rgba(212,175,55,0.7) !important; background: none !important; -webkit-text-fill-color: #ffd700 !important; }
            
            /* Buttons */
            .golden-theme .btn-primary, .golden-theme .btn-discover, .golden-theme .ultra-btn, 
            .golden-theme .ultra-btn-white, .golden-theme .btn-rocket, .golden-theme button:not(#theme-toggle-btn) {
                background: linear-gradient(135deg, #d4af37, #b8860b) !important; 
                color: #040d21 !important; 
                border: none !important; 
                font-weight: 900 !important; 
                box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3) !important;
                border-radius: 12px;
                text-shadow: none !important;
            }
            .golden-theme .btn-primary:hover, .golden-theme .ultra-btn:hover, .golden-theme button:not(#theme-toggle-btn):hover {
                box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5) !important;
                transform: translateY(-3px);
            }
            .golden-theme #theme-toggle-btn { border:2px solid #d4af37 !important;}
            .golden-theme i { color: #d4af37 !important; } 
            .golden-theme button i, .golden-theme .btn-primary i, .golden-theme .icon-box i { color: #040d21 !important; }
            .golden-theme #whatsapp-floating-btn i { color: #fff !important; }

            /* Images and specifics */
            .golden-theme .subject-cover { background: transparent !important; border:none !important; }
            .golden-theme .country-flag { border: 2px solid #d4af37 !important; }
            .golden-theme img { border-color: #d4af37 !important; }
            .golden-theme .huge-hero::before { filter: invert(1) hue-rotate(180deg) opacity(0.05); }

            /* Inputs */
            .golden-theme input, .golden-theme select, .golden-theme textarea { 
                background: #081736 !important; 
                color: #f2ce63 !important; 
                border: 1px solid #d4af37 !important; 
            }

            /* Custom fixes for pills and decorations */
            .golden-theme .edu-sticker { background: #0a1a42 !important; border-color: #d4af37 !important; color:#d4af37 !important; }
            .golden-theme .edu-sticker i { color:#d4af37 !important; }
        `;
        document.head.appendChild(style);
    }
};

window.injectFBButton = function () {
    if (document.getElementById('fb-floating-btn')) return;
    let btn = document.createElement('a');
    btn.id = 'fb-floating-btn';
    btn.href = 'https://www.facebook.com/share/1Bn2ujRAKv/?mibextid=wwXIfr';
    btn.target = '_blank';
    btn.title = 'تابعنا على فيسبوك';
    btn.innerHTML = '<i class=\"fab fa-facebook-f\"></i>';
    btn.style.cssText = 'position:fixed; bottom:85px; right:20px; z-index:99999; background:linear-gradient(135deg, #1877f2, #3b5998); color:#fff; width:60px; height:60px; border-radius:50%; font-size:35px; display:flex; align-items:center; justify-content:center; box-shadow:0 10px 20px rgba(24,119,242,0.4); transition:0.3s; text-decoration:none;';
    btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    document.body.appendChild(btn);
}

window.injectWhatsAppButton = function () {
    if (document.getElementById('whatsapp-floating-btn')) return;
    let btn = document.createElement('a');
    btn.id = 'whatsapp-floating-btn';
    btn.href = 'https://wa.me/201003673774?text=' + encodeURIComponent('أهلاً بك في منصة دعاء انور التعليمية.\\n');
    btn.target = '_blank';
    btn.title = 'تواصل معنا عبر واتساب';
    btn.innerHTML = '<i class=\"fab fa-whatsapp\"></i>';
    btn.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:99999; background:linear-gradient(135deg, #25d366, #128c7e); color:#fff; width:60px; height:60px; border-radius:50%; font-size:35px; display:flex; align-items:center; justify-content:center; box-shadow:0 10px 20px rgba(37,211,102,0.4); transition:0.3s; animation: pulse-gentle 2s infinite; text-decoration:none;';
    btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    document.body.appendChild(btn);
}

window.uploadToCloudinary = async function (file) {
    if (!file) throw new Error("الملف غير موجود");

    // Force 'auto' so Cloudinary puts PDFs in the 'image' bucket where transformations are permitted
    let resourceType = 'auto';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'yxii0trt');

    const response = await fetch(`https://api.cloudinary.com/v1_1/dt1nytaju/${resourceType}/upload`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        let errJson = await response.json().catch(() => ({}));
        let errMsg = (errJson.error && errJson.error.message) ? errJson.error.message : response.statusText;
        throw new Error(`مشكلة في سيرفر الرفع (Cloudinary): ${errMsg}`);
    }

    const data = await response.json();
    let url = data.secure_url;
    if (data.resource_type === 'image') {
        url = url.replace('/upload/', '/upload/f_auto,q_auto/');
    }
    return url;
};



window.uploadStudentFile = async function (e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return alert('خطأ في حسابك.');

    const btn = document.getElementById('btn-sf-upload');
    btn.innerText = 'جاري الرفع...';
    try {
        let file = document.getElementById('sf-file').files[0];
        let fileUrl = await window.uploadToCloudinary(file);
        let sFile = {
            id: Date.now(),
            studentCode: user.code,
            studentName: user.name,
            grade: user.grade,
            title: document.getElementById('sf-title').value,
            url: fileUrl,
            date: new Date().toLocaleDateString('ar-EG')
        };

        if (window.fsData && window.fsData.addStudentFile) {
            try { await window.fsData.addStudentFile(sFile); } catch (er) { }
        }

        let sFiles = JSON.parse(localStorage.getItem('spedia_student_files') || '[]');
        sFiles.push(sFile);
        localStorage.setItem('spedia_student_files', JSON.stringify(sFiles));

        alert('تم إرسال الملف للإدارة بنجاح!');
        e.target.reset();
    } catch (err) {
        alert('حدث خطأ في الرفع: ' + err.message);
    }
    btn.innerText = 'رفع وإرسال';
};

window.sendStudentMessage = async function (e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return alert('يرجى تسجيل الدخول أولاً');

    const btn = document.getElementById('btn-sm-send');
    if (btn) btn.innerText = 'جاري الإرسال...';

    let teacher = document.getElementById('sm-teacher').value.trim();
    let msg = document.getElementById('sm-message').value.trim();

    let chatMsg = {
        id: Date.now(),
        studentCode: user.code,
        studentName: user.name,
        teacher: teacher,
        message: msg,
        date: new Date().toLocaleDateString('ar-EG'),
        sender: 'student'
    };

    let chats = JSON.parse(localStorage.getItem('spedia_chat') || '[]');
    chats.push(chatMsg);
    localStorage.setItem('spedia_chat', JSON.stringify(chats));

    if (window.fsData && window.fsData.addChatMessage) {
        try { await window.fsData.addChatMessage(chatMsg); } catch (er) { }
    }

    // notify admin
    let notifs = JSON.parse(localStorage.getItem('spedia_admin_notifications') || '[]');
    notifs.push({ code: 'admin', text: `رسالة جديدة من الطالب ${user.name} (${user.code}) إلى المدرس ${teacher}`, date: new Date().toLocaleDateString('ar-EG'), read: false });
    localStorage.setItem('spedia_admin_notifications', JSON.stringify(notifs));
    if (window.loadNotifications) window.loadNotifications('student');

    alert('تم إرسال رسالتك للمعلم. سيتم الرد عليك في أقرب وقت!');
    e.target.reset();
    if (btn) btn.innerText = 'إرسال الرسالة';
    if (window.loadStudentData) window.loadStudentData(user);
};

window.toggleNotifications = function (e, type = 'student') {
    e.stopPropagation();
    const dropdown = type === 'admin' ? document.getElementById('admin-noti-dropdown') : document.getElementById('noti-dropdown');
    if (!dropdown) return;

    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';

        // mark as read
        const lsKey = type === 'admin' ? 'spedia_admin_notifications' : 'spedia_notifications';
        let notifs = JSON.parse(localStorage.getItem(lsKey) || '[]');
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        let myNotifs = type === 'admin' ? notifs : notifs.filter(n => n.code === user.code);

        myNotifs.forEach(n => n.read = true);
        localStorage.setItem(lsKey, JSON.stringify(notifs));
        window.loadNotifications(type);
    } else {
        dropdown.style.display = 'none';
    }
};

window.loadNotifications = function (type = 'student') {
    const lsKey = type === 'admin' ? 'spedia_admin_notifications' : 'spedia_notifications';
    let notifs = JSON.parse(localStorage.getItem(lsKey) || '[]');
    let myNotifs = [];

    if (type === 'student') {
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        if (!user) return;
        myNotifs = notifs.filter(n => n.code === user.code);
    } else {
        myNotifs = notifs;
    }

    const unread = myNotifs.filter(n => !n.read).length;

    const badge = type === 'admin' ? document.getElementById('admin-noti-badge') : document.getElementById('noti-badge');
    const list = type === 'admin' ? document.getElementById('admin-noti-list') : document.getElementById('noti-list');

    if (badge) {
        if (unread > 0) {
            badge.style.display = 'block';
            badge.innerText = unread;
        } else {
            badge.style.display = 'none';
        }
    }

    if (list) {
        if (myNotifs.length > 0) {
            // sort by newest
            myNotifs.reverse();
            list.innerHTML = myNotifs.map(n => `
                <div style="padding:10px; border-bottom:1px solid #eee; background:${n.read ? '#fff' : '#f4f7fa'};">
                    <div style="font-weight:bold; color:#121e33; font-size:14px;">${n.text}</div>
                    <div style="font-size:11px; color:#888; margin-top:5px;">${n.date}</div>
                </div>
            `).join('');
        } else {
            list.innerHTML = '<div style="padding:15px; text-align:center; color:#888;">لا توجد إشعارات</div>';
        }
    }
};

// Listen for clicks outside to close dropdown
document.addEventListener('click', function (e) {
    const sDropdown = document.getElementById('noti-dropdown');
    const aDropdown = document.getElementById('admin-noti-dropdown');
    const sBtn = document.getElementById('noti-btn');
    const aBtn = document.getElementById('admin-noti-btn');

    if (sDropdown && sDropdown.style.display === 'block' && (!sBtn || !sBtn.contains(e.target)) && !sDropdown.contains(e.target)) {
        sDropdown.style.display = 'none';
    }
    if (aDropdown && aDropdown.style.display === 'block' && (!aBtn || !aBtn.contains(e.target)) && !aDropdown.contains(e.target)) {
        aDropdown.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const stagePrefixes = ['ct', 'ex', 'lnk', 'af', 'filter'];
    stagePrefixes.forEach(prefix => {
        if (document.getElementById(prefix + '-stage')) {
            window.updateCountryStages(null, prefix + '-stage', prefix + '-grade', true);
        }
    });
});
