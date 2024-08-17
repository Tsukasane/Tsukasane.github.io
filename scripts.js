document.addEventListener('DOMContentLoaded', function() {
    const enLink = document.getElementById('en');
    const cnLink = document.getElementById('cn');

    // 添加滚动到顶部的功能
    window.scrollTo(0, 0);

    enLink.addEventListener('click', function() {
        setLanguage('en');
    });

    cnLink.addEventListener('click', function() {
        setLanguage('cn');
    });

    function setLanguage(lang) {
        const page = window.location.pathname.split('/').pop().split('.')[0]; // 获取当前页面的文件名 (不包含扩展名)
        
        let newPage = '';

        if (lang === 'cn') {
            if (page === 'index') {
                newPage = './cn/index_cn.html';
            } else if (page === 'resume') {
                newPage = 'resume_cn.html';
            } else if (page === 'activities') {
                newPage = 'activities_cn.html';
            }
        } else {
            if (page === 'index_cn') {
                newPage = 'index.html';
            } else if (page === 'resume_cn') {
                newPage = 'resume.html';
            } else if (page === 'activities_cn') {
                newPage = 'activities.html';
            }
        }

        // 页面跳转到新的语言版本
        if (newPage) {
            window.location.href = newPage;
        }
    }
});
